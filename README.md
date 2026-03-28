⚙️ Manthan Platform — Decision Execution Layer

Manthan Platform is the execution and enforcement layer of the Manthan Decision Operating System.

It connects real-world events to deterministic decision-making and ensures that every decision is applied, stored, and verifiable.

🧠 What the Platform Does
Ingests external events (e.g. GitHub webhooks)
Converts events → Decision Contracts
Executes decisions via Manthan Core
Persists decisions with full snapshot (contract + config)
Enforces outcomes in external systems (e.g. PR comments)
Enables replay and verification
🧩 System Position
Manthan App (UI)
        ↓
Manthan Platform (THIS)
        ↓
Manthan Core (Deterministic Engine)
        ↓
Decision Log (Supabase)
🔁 Execution Flow
Webhook/Event
    ↓
Adapter (GitHub)
    ↓
Contract Creation
    ↓
runDecision()
    ↓
Decision Stored (contract + config + result)
    ↓
Enforcement (e.g. PR comment)
    ↓
Replay Verification
🔌 Current Adapters
GitHub Adapter
Endpoint: /webhooks/github
Handles: pull_request events
Converts PR → Decision Contract
Executes decision via core
Posts result as PR comment
📦 Structure
adapters/
└── github/
    ├── server.ts         # Express server + webhook handler
    ├── githubClient.ts   # GitHub App auth (JWT + installation token)

services/
└── supabase.ts           # Database client

core/                     # (linked dependency)
💾 Persistence
Database: Supabase
Table: decisions

Each record stores:

{
  id: string,
  contract: object,
  result: object,
  config: object
}

👉 Enables full replay and audit

🔐 Determinism Enforcement

Platform guarantees:

Config resolved once at execution
Config stored with decision
Replay uses stored config only
No runtime dependency during replay
🔁 Replay
replayAndVerify()
Recomputes decisions
Compares with stored result
Detects any drift
⚙️ Environment
SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...

GITHUB_APP_ID=...
GITHUB_INSTALLATION_ID=...
GITHUB_PRIVATE_KEY_PATH=...

GITHUB_WEBHOOK_SECRET=...
PORT=8080
🚀 Run Platform
npx ts-node adapters/github/server.ts

Server:

http://localhost:8080
🧪 Test Webhook
Invoke-WebRequest -Uri http://localhost:8080/webhooks/github `
-Method POST `
-Headers @{ "x-github-event" = "pull_request" } `
-ContentType "application/json" `
-Body '{ ... }'
🌍 Deployment
Hosted on Fly.io
Public endpoint:
https://manthan-platform.fly.dev/webhooks/github
🔒 Constraints (Aligned with Core)
❌ No decision logic in adapters
❌ No mutation of decision results
❌ No replay fallback logic
❌ No hidden dependencies
❌ No runtime config drift
🧭 Version
Manthan Platform v0.6
🏁 Summary

Manthan Platform is not just an API layer.

It is:

The execution system that:
- turns events into decisions
- enforces outcomes automatically
- and guarantees replayable truth
🔐 System Identity

Every decision is traceable, auditable, and built for trust.