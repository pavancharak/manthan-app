import fs from "fs"
import path from "path"

import { runDecision } from "../../core/index"
import { replayAndVerify } from "../../core/replay"

const args = process.argv.slice(2)

if (args.length === 0) {
  console.error("Provide contract JSON or file path")
  process.exit(1)
}

const input = args[0]

let contract: any

try {
  // Case 1: File input
  if (input.endsWith(".json")) {
    const filePath = path.resolve(input)

    if (!fs.existsSync(filePath)) {
      console.error("File not found:", filePath)
      process.exit(1)
    }

    const fileContent = fs.readFileSync(filePath, "utf-8")
    contract = JSON.parse(fileContent)
  } 
  // Case 2: Raw JSON string
  else {
    contract = JSON.parse(input)
  }

} catch (error) {
  console.error("Invalid JSON input")
  process.exit(1)
}

// Run decision through core
const result = runDecision(contract)

console.log("RESULT:", result)

// Verify entire system (replay + integrity check)
replayAndVerify()