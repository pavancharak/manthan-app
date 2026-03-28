import { evaluate } from "./engine/evaluate"
import { appendDecision } from "./store/decision.store"
import { DecisionContract } from "./types/decision"

export function runDecision(contract: DecisionContract) {
  const decision = evaluate(contract)

  appendDecision({
    contract,
    result: decision
  })

  return decision
}