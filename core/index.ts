import { evaluate } from "./engine/evaluate"
import { appendDecision, hasDecision } from "./store/decision.store"
import { DecisionContract } from "./types/decision"
import { getRepoConfig } from "./config/getConfig"

export async function runDecision(
  contract: DecisionContract,
  repo: string
) {
  // IDEMPOTENCY
  const existing = await hasDecision(contract.id);

  if (existing) {
    return existing.result;
  }

  // LOAD CONFIG (PURE)
  const config = getRepoConfig(repo);

  // EVALUATE
  const decision = evaluate(contract, config);

  // STORE SNAPSHOT
  await appendDecision({
    contract,
    result: decision,
    config
  });

  return decision;
}