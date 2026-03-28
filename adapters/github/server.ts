import express from "express"
import bodyParser from "body-parser"

import { runDecision } from "../../core/index"
import { DecisionContract } from "../../core/types/decision"
import { getOctokit } from "./githubClient"

const app = express()
app.use(bodyParser.json())

// Health check
app.get("/", (_, res) => {
  res.send("Manthan GitHub Adapter Running")
})

// Webhook handler
app.post("/webhooks/github", async (req, res) => {
  try {
    const event = req.headers["x-github-event"]

    // Only process PR events
    if (event !== "pull_request") {
      return res.status(200).send("Ignored")
    }

    const payload = req.body
    const action = payload.action
    const pr = payload.pull_request

    if (!pr) {
      return res.status(400).send("No PR data")
    }

    // Build Decision Contract
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

    // Run through Manthan Core
    const decision = runDecision(contract)

    console.log("PR Decision:", decision)

    // Post comment back to PR
    const octokit = await getOctokit()

    await octokit.issues.createComment({
      owner: payload.repository.owner.login,
      repo: payload.repository.name,
      issue_number: pr.number,
      body: `Manthan Decision: **${decision.action}**`
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
const PORT = 4000

app.listen(PORT, () => {
  console.log(`GitHub Adapter running on http://localhost:${PORT}`)
})