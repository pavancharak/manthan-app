import "dotenv/config"
import express from "express"
import bodyParser from "body-parser"

import { runDecision } from "../../core/index"
import { DecisionContract } from "../../core/types/decision"
import { getOctokit } from "./githubClient"

const app = express()
app.use(bodyParser.json({ limit: "1mb" }))

// Health check
app.get("/", (_, res) => {
  res.send("Manthan GitHub Adapter Running")
})

// Webhook handler
app.post("/webhooks/github", async (req, res) => {
  try {
    const event = req.headers["x-github-event"]
    console.log("Received event:", event)

    if (event !== "pull_request") {
      return res.status(200).send("Ignored")
    }

    const payload = req.body

    // Extract repo (IMPORTANT)
    const repoFull = payload.repository.full_name

    console.log("Repo:", repoFull)
    console.log("Installation:", payload.installation?.id)

    const action = payload.action
    const pr = payload.pull_request

    if (!pr) {
      return res.status(400).send("No PR data")
    }

    const contract: DecisionContract = {
      id: `pr-${pr.id}`,
      intent: `PR ${action}`,
      inputs: {
        title: pr.title,
        body: pr.body
      },
      outputs: {},
      behavior: "noop",
      determinism: "strict",
      boundaries: [],
      metadata: {
        created_at: new Date().toISOString(),
        version: "v1",
        repo: payload.repository.full_name
      }
    }

    // PASS repo into core
    const decision = await runDecision(contract, repoFull)

    // Idempotency skip
    if (decision.action === "SKIP") {
      console.log("Skipping duplicate decision")

      return res.status(200).json({
        status: "duplicate",
        decision
      })
    }

    console.log("PR Decision:", decision)

    const installationId = payload.installation?.id

    if (!installationId) {
      console.log("No installation ID — skipping GitHub comment")

      return res.status(200).json({
        status: "skipped",
        reason: "No installation ID",
        decision
      })
    }

    const octokit = await getOctokit(installationId)

    const owner =
  payload.repository?.owner?.login ||
  payload.repository?.full_name?.split("/")[0] ||
  "unknown";

const repo =
  payload.repository?.name ||
  payload.repository?.full_name?.split("/")[1];

await octokit.issues.createComment({
  owner,
  repo,
  issue_number: pr.number || pr.id,
  body: `Manthan Decision: **${decision.action}**\n\n${decision.reason}`
})

    return res.status(200).json({
      status: "commented",
      decision
    })

  } catch (error) {
    console.error("Webhook Error:", error)
    return res.status(500).send("Error processing webhook")
  }
})

// Start server
const PORT = Number(process.env.PORT) || 8080

app.listen(PORT, "0.0.0.0", () => {
  console.log(`GitHub Adapter running on port ${PORT}`)
})