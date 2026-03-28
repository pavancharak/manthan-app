import { DecisionContract } from "../types/decision"

export function evaluate(contract: DecisionContract) {
  // Enforce strict determinism
  if (contract.determinism !== "strict") {
    throw new Error("Non-deterministic contracts are not allowed")
  }

  // PURE FUNCTION — NO TIME, NO RANDOMNESS, NO SIDE EFFECTS

  return {
    contract_id: contract.id,
    result: "VALID"
  }
}