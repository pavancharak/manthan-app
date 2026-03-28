import { evaluate } from "./engine/evaluate";
import { supabase } from "../services/supabase";

export async function replayAndVerify() {
  const { data: decisions, error } = await supabase
    .from("decisions")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Failed to fetch decisions:", error);
    return;
  }

  if (!decisions || decisions.length === 0) {
    console.log("No decisions found in DB");
    return;
  }

  for (let i = 0; i < decisions.length; i++) {
    const entry = decisions[i];

    const contract = entry.contract;
    const config = entry.config;

    // STRICT: config must exist
    if (!config) {
      console.error(`Determinism violated at entry ${i} (missing config)`);
      return;
    }

    const recomputed = evaluate(contract, config);

    const normalize = (obj: any) =>
  JSON.stringify(Object.keys(obj).sort().reduce((acc: any, key) => {
    acc[key] = obj[key];
    return acc;
  }, {}));

if (normalize(recomputed) !== normalize(entry.result)) {
      console.error(`Determinism violated at entry ${i}`);
      return;
    }
  }

  console.log("All decisions verified. System is consistent.");
}