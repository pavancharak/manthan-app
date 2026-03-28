\# 💾 Manthan App — Data Model



This document defines the data model used by Manthan App (v0.1).



The App does NOT define its own data — it reads directly from the Platform’s decision log.



\---



\## 🧠 Source of Truth



```text

Supabase → decisions table

📦 Decision Record Structure

type DecisionRecord = {

&#x20; id: string

&#x20; contract: DecisionContract

&#x20; result: DecisionResult

&#x20; config: Record<string, any>

&#x20; created\_at: string

}

🧩 Contract Structure

type DecisionContract = {

&#x20; id: string

&#x20; intent: string

&#x20; inputs: Record<string, any>

&#x20; outputs: Record<string, any>

&#x20; behavior: string

&#x20; determinism: "strict"

&#x20; boundaries: any\[]

&#x20; metadata: {

&#x20;   created\_at: string

&#x20;   version: string

&#x20;   repo: string

&#x20; }

}

✅ Result Structure

type DecisionResult = {

&#x20; action: "ALLOW" | "DENY"

&#x20; reason: string

&#x20; contract\_id: string

}

⚙️ Config Structure

type Config = {

&#x20; \[key: string]: any

}

📊 UI Mapping

Decision List View

Field	Source

ID	decision.id

Action	decision.result.action

Repo	decision.contract.metadata.repo

Time	decision.created\_at

Decision Detail View

Section	Source

Contract	decision.contract

Config	decision.config

Result	decision.result

🔁 Derived Fields (UI Only)



The App may compute:



const repo = decision.contract.metadata.repo

const title = decision.contract.inputs.title

🔐 Data Constraints

read-only access

no mutation allowed

no transformation affecting meaning

⚠️ Null Handling

Missing Fields

show fallback UI

do NOT infer values

Example

Config not available

🔍 Filtering Fields



Used for UI filtering:



contract.metadata.repo

result.action

created\_at

🧠 Data Access Pattern

Fetch → Map → Render

🚫 Forbidden

modifying fetched data

injecting new fields into stored objects

recomputing decisions

🧭 Version



Manthan App v0.1 — Data Model Locked



🏁 Summary



The App data model ensures:



alignment with platform

no duplication of logic

accurate representation of decisions

🔐 Identity



Every decision is traceable, auditable, and built for trust.

