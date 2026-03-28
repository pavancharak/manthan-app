import fs from "fs"
import path from "path"
import crypto from "crypto"

const LOG_FILE = path.join(__dirname, "../../decision.log")

function hash(data: string) {
  return crypto.createHash("sha256").update(data).digest("hex")
}

function getLastHash(): string {
  if (!fs.existsSync(LOG_FILE)) return "GENESIS"

  const lines = fs.readFileSync(LOG_FILE, "utf-8")
    .split("\n")
    .filter(Boolean)

  if (lines.length === 0) return "GENESIS"

  const last = JSON.parse(lines[lines.length - 1])
  return last.hash || "GENESIS"
}

export function appendDecision(entry: any) {
  const prevHash = getLastHash()

  const payload = {
    ...entry,
    prevHash
  }

  const dataString = JSON.stringify(payload)

  const entryHash = hash(dataString)

  const finalEntry = {
    ...payload,
    hash: entryHash
  }

  fs.appendFileSync(LOG_FILE, JSON.stringify(finalEntry) + "\n", "utf-8")
}

export function getLog() {
  if (!fs.existsSync(LOG_FILE)) return []

  return fs.readFileSync(LOG_FILE, "utf-8")
    .split("\n")
    .filter(Boolean)
    .map((line: string) => JSON.parse(line))
}