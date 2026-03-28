\# ⚠️ Manthan App — Limits \& Constraints



This document defines the operational limits of Manthan App (v0.1).



These limits are intentional to preserve:



\- system integrity

\- separation from platform

\- deterministic guarantees



\---



\## 🧠 Purpose



Understanding limits ensures:



\- correct usage

\- safe extension

\- predictable UI behavior



\---



\## 🔒 Core Constraint



```text

The App must remain read-only and non-intrusive

📦 System Limits

1\. No Decision Execution

App cannot run decisions

App cannot call evaluate()

App cannot trigger runDecision()

2\. No Data Mutation

no insert/update/delete operations

no modification of fetched objects

❌ Forbidden

decision.result.action = "ALLOW"

🔁 3. Replay Limits

App cannot execute replay

App can only display replay status

💾 4. Data Dependency Limits

App depends entirely on Supabase data

no independent data source

⚙️ 5. Config Limits

config is display-only

no editing

no recomputation

🌐 6. API Limits

read-only queries only

no write endpoints

no platform execution calls

🧠 7. State Limits

UI state only

no business logic state

no derived logic affecting meaning

📊 8. Performance Limits

large datasets may slow UI

no pagination in v0.1

no caching layer

🔐 9. Security Limits

no service role key in frontend

limited Supabase access

no sensitive data exposure

🚫 10. Unsupported Features (v0.1)

decision editing

config editing

replay execution

real-time updates

user-triggered actions

🔁 11. Sync Limits

data fetched on load

no real-time sync (v0.1)

🧩 12. UI Limits

minimal interactions

no complex workflows

no multi-step actions

🔒 Hard Constraints



These must NEVER be violated:



no mutation of decision data

no logic execution in UI

no bypass of platform

no hidden dependencies

🧭 Version



Manthan App v0.1 — Limits Locked



🏁 Summary



Limits ensure:



safe UI behavior

strict separation from platform

preservation of system guarantees

🔐 Identity



Every decision is traceable, auditable, and built for trust.

