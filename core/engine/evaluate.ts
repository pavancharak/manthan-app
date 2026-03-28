import { DecisionContract } from "../types/decision"

export type DecisionResult = {
  contract_id: string
  action: "ALLOW" | "DENY"
  reason: string
}

export function evaluate(contract: DecisionContract): DecisionResult {
  // Determinism enforcement
  if (contract.determinism !== "strict") {
    throw new Error("Non-deterministic contracts are not allowed")
  }

  // PURE — no time, no randomness
  const title = contract.inputs?.title || ""
  const body = contract.inputs?.body || ""

  // Rule 1 — Description required
  if (!body || body.trim().length < 10) {
    return {
      contract_id: contract.id,
      action: "DENY",
      reason: "PR description too short or missing"
    }
  }

  // Rule 2 — Title required
  if (!title || title.trim().length === 0) {
    return {
      contract_id: contract.id,
      action: "DENY",
      reason: "PR title is missing"
    }
  }

  // Rule 3 — No WIP
  if (title.toLowerCase().includes("wip")) {
    return {
      contract_id: contract.id,
      action: "DENY",
      reason: "WIP PRs are not allowed"
    }
  }

  // Default
  return {
    contract_id: contract.id,
    action: "ALLOW",
    reason: "All checks passed"
  }
}