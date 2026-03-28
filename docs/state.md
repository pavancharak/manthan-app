\# 🧠 Manthan App — State Management



This document defines how state is managed in Manthan App (v0.1).



The state model is intentionally minimal to preserve:



\- clarity

\- predictability

\- separation from core logic



\---



\## 🔒 Core Principle



```text

State reflects data — it does not compute or alter it

📦 State Scope



The App maintains only UI-related state.



🧩 Global State

type AppState = {

&#x20; decisions: DecisionRecord\[]

&#x20; selectedDecision: DecisionRecord | null

&#x20; loading: boolean

&#x20; error: string | null

}

📊 State Variables

1\. decisions

list of all fetched decisions

source: Supabase

2\. selectedDecision

currently viewed decision

set when user clicks a DecisionItem

3\. loading

indicates fetch status

4\. error

stores fetch or rendering errors

🔁 State Flow

App Load

&#x20;  ↓

Set loading = true

&#x20;  ↓

Fetch decisions

&#x20;  ↓

Set decisions

&#x20;  ↓

Set loading = false

🔍 Selection Flow

User clicks DecisionItem

&#x20;       ↓

Set selectedDecision

&#x20;       ↓

Render DecisionDetail

⚙️ Implementation Options

Option 1 — React useState (Preferred v0.1)



Simple and sufficient



Option 2 — useReducer (Future)



For more complex flows



Option 3 — External State Library (NOT needed v0.1)



Avoid Redux/Zustand for now



🧠 Derived State (UI Only)



Allowed:



const repo = selectedDecision?.contract.metadata.repo

🚫 Forbidden State

decision logic state

config evaluation state

replay computation state

🔐 State Constraints

must not mutate original data

must not affect decision outcomes

must remain UI-only

⚠️ Error State Handling

if (error) {

&#x20; setError("Failed to load decisions")

}

🔁 Reset Behavior

navigating back clears selectedDecision

refreshing reloads decisions

🧠 Design Principle

Keep state minimal, predictable, and read-only

🧭 Version



Manthan App v0.1 — State Model Locked



🏁 Summary



State management ensures:



clean UI behavior

no logic leakage

clear data flow

🔐 Identity



Every decision is traceable, auditable, and built for trust.

