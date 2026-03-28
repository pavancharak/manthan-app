import { supabase } from "../../services/supabase";

// IDEMPOTENCY — return full stored decision (NOT boolean)
export async function hasDecision(contractId: string) {
  const { data, error } = await supabase
    .from("decisions")
    .select("*")
    .eq("id", contractId)
    .maybeSingle();

  if (error && error.code !== "PGRST116") {
    throw error;
  }

  return data || null;
}

// Append decision with FULL SNAPSHOT (contract + result + config)
export async function appendDecision(entry: {
  contract: any;
  result: any;
  config: any;
}) {
  const { error } = await supabase
    .from("decisions")
    .insert([
      {
        id: entry.contract.id,
        contract: entry.contract,
        result: entry.result,
        config: entry.config,
      },
    ]);

  if (error) {
    throw error;
  }
}

// Read all decisions (used in replay)
export async function getLog() {
  const { data, error } = await supabase
    .from("decisions")
    .select("*");

  if (error) {
    throw error;
  }

  return data;
}