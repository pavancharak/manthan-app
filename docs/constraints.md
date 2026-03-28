\# ⚠️ Manthan App — Constraints



This document defines the strict constraints of Manthan App (v0.1).



These constraints ensure that the App:



\- does not interfere with decision logic

\- preserves system integrity

\- remains a pure observation layer



\---



\## 🔒 Core Rule



```text

The App must NEVER influence decisions

📦 Constraint Categories

Data Constraints

Logic Constraints

Interaction Constraints

Security Constraints

Architectural Constraints

💾 1. Data Constraints

read-only access to decision log

no insert/update/delete operations

no mutation of fetched data

❌ Forbidden

decision.result.action = "ALLOW"

🧠 2. Logic Constraints

no evaluation logic in App

no call to evaluate()

no decision recomputation

❌ Forbidden

evaluate(contract, config)

🖱️ 3. Interaction Constraints

no actions that affect system state

no decision triggers

no config editing

❌ Forbidden UI

"Approve PR" button

"Re-run decision" button

"Edit config" form

🔐 4. Security Constraints

no exposure of sensitive keys

no direct service role usage in frontend

use restricted Supabase access

🧱 5. Architectural Constraints

App must not call core directly

App must not bypass platform

App must not write to DB

🔁 6. Replay Constraints

App may display replay status

App must not run replay itself (v0.1)

⚙️ 7. Config Constraints

display only

no modification

no dynamic fetching beyond stored config

🧠 8. State Constraints

UI state only

no business logic state

no decision-related computation

🚫 Anti-Patterns

❌ Writing to DB from UI

❌ Embedding decision logic in components

❌ Fetching external data to alter display meaning

🔒 Enforcement



If constraints are violated:



determinism risk

system integrity compromised

trust broken

🧭 Design Philosophy

Observe everything, change nothing

🧭 Version



Manthan App v0.1 — Constraints Locked



🏁 Summary



Constraints ensure:



strict separation from platform

safe read-only interface

preservation of system guarantees

🔐 Identity



Every decision is traceable, auditable, and built for trust.

