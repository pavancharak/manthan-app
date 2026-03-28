export function enforce(result: any) {
  if (result.result !== "VALID") {
    return {
      action: "BLOCK",
      reason: "Decision invalid"
    }
  }

  return {
    action: "ALLOW"
  }
}