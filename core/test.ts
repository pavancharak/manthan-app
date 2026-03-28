import { runDecision } from "./index"
import { replayAndVerify } from "./replay"
import { DecisionContract } from "./types/decision"

const contract: DecisionContract = {
  id: "1",
  intent: "Test decision",
  inputs: {},
  outputs: {},
  behavior: "noop",
  determinism: "strict",
  boundaries: [],
  metadata: {
    created_at: new Date().toISOString(),
    version: "v1"
  }
}

// Run decision
const result = runDecision(contract)
console.log("RESULT:", result)

// Verify entire system
replayAndVerify()