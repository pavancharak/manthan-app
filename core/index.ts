import { evaluate } from "./engine/evaluate"
import { appendDecision } from "./store/decision.store"
import { enforce } from "./enforcement/enforce"
import { DecisionContract } from "./types/decision"

export function runDecision(contract: DecisionContract) {
  const result = evaluate(contract)

  appendDecision({
    contract,
    result
  })

  return enforce(result)
}