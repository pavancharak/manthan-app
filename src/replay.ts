import fs from "fs"
import path from "path"
import crypto from "crypto"
import { evaluate } from "./engine/evaluate"

const LOG_FILE = path.join(__dirname, "../decision.log")

function hash(data: string): string {
  return crypto.createHash("sha256").update(data).digest("hex")
}

export function replayAndVerify() {
  if (!fs.existsSync(LOG_FILE)) {
    console.log("No decision log found")
    return
  }

  const lines = fs.readFileSync(LOG_FILE, "utf-8")
    .split("\n")
    .filter(Boolean)

  let prevHash = "GENESIS"

  for (let i = 0; i < lines.length; i++) {
    const entry = JSON.parse(lines[i])

    // 1. Verify chain linkage
    if (entry.prevHash !== prevHash) {
      console.error(`Chain broken at entry ${i}`)
      return
    }

    // 2. Verify hash integrity
    const { hash: storedHash, ...rest } = entry
    const recomputedHash = hash(JSON.stringify(rest))

    if (storedHash !== recomputedHash) {
      console.error(`Hash mismatch at entry ${i}`)
      return
    }

    // 3. Verify determinism
    const recomputedResult = evaluate(entry.contract)

    if (JSON.stringify(recomputedResult) !== JSON.stringify(entry.result)) {
      console.error(`Determinism violated at entry ${i}`)
      return
    }

    prevHash = storedHash
  }

  console.log("All decisions verified. System is consistent.")
}