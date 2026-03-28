import { DecisionContract } from "../types/decision"

export type DecisionResult = {
  contract_id: string
  action: "ALLOW" | "DENY"
  reason: string
}

// NOW TAKES CONFIG
export function evaluate(
  contract: DecisionContract,
  config: {
    min_description_length: number
    block_wip: boolean
    require_title: boolean
  }
): DecisionResult {

  // Determinism enforcement
  if (contract.determinism !== "strict") {
    throw new Error("Non-deterministic contracts are not allowed")
  }

  const title = contract.inputs?.title || ""
  const body = contract.inputs?.body || ""

  // Rule 1 — Title required
  if (config.require_title && !title.trim()) {
    return {
      contract_id: contract.id,
      action: "DENY",
      reason: "PR title is missing"
    }
  }

  // Rule 2 — No WIP
  if (config.block_wip && title.toLowerCase().includes("wip")) {
    return {
      contract_id: contract.id,
      action: "DENY",
      reason: "WIP PRs are not allowed"
    }
  }

  // Rule 3 — Description length
  if ((body || "").trim().length < config.min_description_length) {
    return {
      contract_id: contract.id,
      action: "DENY",
      reason: `Description must be at least ${config.min_description_length} characters`
    }
  }

  // Default
  return {
    contract_id: contract.id,
    action: "ALLOW",
    reason: "All checks passed"
  }
}