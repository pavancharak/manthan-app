\# ❌ Manthan App — Anti-Patterns



This document defines what MUST NOT be done in Manthan App (v0.1).



These anti-patterns violate system boundaries and can compromise:



\- determinism (indirectly)

\- data integrity

\- system trust



\---



\## 🔒 Core Rule



```text

If the App influences decisions, it is wrong

🚫 1. Writing to Database from UI

❌ Anti-Pattern

await supabase.from("decisions").update({ ... })

Why it's wrong

breaks immutability

corrupts source of truth

🚫 2. Calling Core Logic

❌ Anti-Pattern

evaluate(contract, config)

Why it's wrong

moves decision logic into UI

breaks separation of concerns

🚫 3. Triggering Decisions from UI

❌ Anti-Pattern

runDecision(contract, repo)

Why it's wrong

UI becomes execution layer

violates architecture

🚫 4. Modifying Fetched Data

❌ Anti-Pattern

decision.contract.inputs.title = "changed"

Why it's wrong

alters displayed truth

creates inconsistency with DB

🚫 5. Injecting Derived Logic

❌ Anti-Pattern

if (decision.inputs.body.length < 10) {

&#x20; decision.result.action = "DENY"

}

Why it's wrong

recomputes decision in UI

breaks determinism guarantee

🚫 6. Using Service Role Key in Frontend

❌ Anti-Pattern

SUPABASE\_SERVICE\_ROLE\_KEY=...

Why it's wrong

security risk

full DB access exposed

🚫 7. Fetching External Data to Alter Meaning

❌ Anti-Pattern

calling external APIs to enrich decisions

modifying display based on external state

Why it's wrong

introduces hidden dependencies

distorts original decision context

🚫 8. Adding Edit Controls

❌ Anti-Pattern UI

"Edit Decision"

"Change Config"

"Approve / Reject"

Why it's wrong

UI becomes control layer

breaks system boundaries

🚫 9. Running Replay in UI

❌ Anti-Pattern

replayAndVerify()

Why it's wrong

shifts verification to UI

breaks platform responsibility

🚫 10. Overcomplicating State

❌ Anti-Pattern

storing computed logic in state

deriving decisions in UI

Why it's wrong

introduces hidden behavior

increases inconsistency risk

🚫 11. Mixing Layers

❌ Anti-Pattern

UI directly calling backend services beyond read-only

embedding platform logic into components

Why it's wrong

breaks architectural separation

🚫 12. Silent Failures

❌ Anti-Pattern

catch (e) {}

Why it's wrong

hides issues

reduces observability

🧠 Summary Rule

Display exactly what exists — nothing more, nothing less

🔒 Enforcement



Violating these leads to:



misleading UI

broken trust

system inconsistency

🧭 Version



Manthan App v0.1 — Anti-Patterns Locked



🏁 Summary



Avoiding anti-patterns ensures:



clean UI

correct data representation

strict separation from platform

🔐 Identity



Every decision is traceable, auditable, and built for trust.

