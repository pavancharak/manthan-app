<<<<<<< HEAD
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
=======
# 🧭 Manthan App — Overview

Manthan App is the **human interface layer** of the Manthan system.

While the Platform executes decisions, the App enables humans to:

- see decisions
- understand decisions
- audit decisions
- trust decisions

---

## 🧠 What is Manthan App?

Manthan App is a UI system that sits on top of:

- Manthan Platform (execution)
- Decision Log (Supabase)

It provides visibility into the decision system.

---

## 🔒 Core Principle

```text
The App must NEVER influence decisions — only observe them
📦 Responsibilities

Manthan App is responsible for:

displaying decisions
showing contract data
visualizing decision history
enabling replay inspection
🚫 Non-Responsibilities

Manthan App must NOT:

execute decisions
modify decisions
affect evaluation logic
write to decision log (except controlled metadata in future)
🧩 Architecture Position
User
  ↓
Manthan App (UI)
  ↓
Manthan Platform (Execution)
  ↓
Decision Log (Truth)
🔁 Data Flow
Decision Log (Supabase)
        ↓
API Layer (read-only)
        ↓
App UI
        ↓
User
🧠 Key Features (v0.1)
1. Decision Explorer
list all decisions
filter by repo / action
2. Decision Detail View
contract
config
result
3. Replay Viewer
show replay status
highlight mismatches (future)
4. Timeline View
chronological decision flow
🔐 Data Model

App reads from:

table: decisions

Fields:

id
contract
result
config
created_at
⚙️ Tech Stack (Planned)
React (UI)
Next.js (routing)
Tailwind (styling)
Supabase client (read-only)
🔒 Constraints
read-only access to DB
no mutation of decisions
no direct core interaction
no business logic in UI
🧠 Design Philosophy
Make decisions visible, not editable
🧭 Version

Manthan App v0.1 — Initial Spec

🏁 Summary

Manthan App provides:

visibility
transparency
auditability

It completes the system by making decisions understandable to humans.

🔐 Identity
>>>>>>> 2021894 (Manthan App v0.1 — UI Layer (Read-only))

Every decision is traceable, auditable, and built for trust.