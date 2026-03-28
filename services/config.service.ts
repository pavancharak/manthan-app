import fs from "fs"
import path from "path"

export function getRules(repo: string) {
  try {
    const file = path.join(__dirname, "../configs/rules/default.json")
    const data = fs.readFileSync(file, "utf-8")
    return JSON.parse(data)
  } catch {
    return { rules: [] }
  }
}