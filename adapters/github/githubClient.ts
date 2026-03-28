import jwt from "jsonwebtoken"
import { Octokit } from "@octokit/rest"
import fs from "fs"

const APP_ID = "YOUR_APP_ID"
const INSTALLATION_ID = 123456

// path to your .pem file
const PRIVATE_KEY = fs.readFileSync("private-key.pem", "utf-8")

function generateJWT() {
  return jwt.sign(
    {
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 600,
      iss: APP_ID
    },
    PRIVATE_KEY,
    { algorithm: "RS256" }
  )
}

export async function getOctokit() {
  const jwtToken = generateJWT()

  const appOctokit = new Octokit({
    auth: jwtToken
  })

  const { data } = await appOctokit.request(
    "POST /app/installations/{installation_id}/access_tokens",
    {
      installation_id: INSTALLATION_ID
    }
  )

  return new Octokit({
    auth: data.token
  })
}