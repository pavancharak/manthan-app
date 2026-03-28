import "dotenv/config"
import { runDecision } from "./index"
import { replayAndVerify } from "./replay"
import { DecisionContract } from "./types/decision"

const contract: DecisionContract = {
  id: "test-1",
  intent: "approve",
  inputs: {
    title: "Test PR",
    body: "This is a valid PR description with enough length"
  },
  outputs: {},
  behavior: "noop",
  determinism: "strict",
  boundaries: [],
  metadata: {
    created_at: "2026-01-01T00:00:00.000Z",
    version: "v1",
    repo: "local/test-repo"
  }
}

async function main() {
  try {
    const repo = "local/test-repo"

    const result = await runDecision(contract, repo)
    console.log("RESULT:", result)

    // Replay handles final success log
    await replayAndVerify()

  } catch (err: any) {
    console.error("FULL ERROR:", JSON.stringify(err, null, 2))
    console.error("RAW ERROR:", err)
  }
}

main()