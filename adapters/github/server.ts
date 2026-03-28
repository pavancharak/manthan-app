import express from "express"
import bodyParser from "body-parser"

import { runDecision } from "../../core/index"
import { DecisionContract } from "../../core/types/decision"
import { getOctokit } from "./githubClient"

const app = express()

// Prevent large payload crashes
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
    // DEBUG LOGS
console.log("Repo:", payload.repository.full_name)
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
        version: "v1"
      }
    }

    const decision = runDecision(contract)

    console.log("PR Decision:", decision)

    const installationId = payload.installation.id
const octokit = await getOctokit(installationId)

    await octokit.issues.createComment({
      owner: payload.repository.owner.login,
      repo: payload.repository.name,
      issue_number: pr.number,
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