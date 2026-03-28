import jwt from "jsonwebtoken"
import { Octokit } from "@octokit/rest"
import fs from "fs"

const APP_ID = 3206992
const INSTALLATION_ID = 119575992

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

export async function getOctokit(installationId: number) {
  const jwtToken = generateJWT()

  const appOctokit = new Octokit({
    auth: jwtToken
  })

  const { data } = await appOctokit.request(
    "POST /app/installations/{installation_id}/access_tokens",
    {
      installation_id: installationId
    }
  )

  return new Octokit({
    auth: data.token
  })
}