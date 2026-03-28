\# 🧩 Manthan App — Components



This document defines the UI components of Manthan App (v0.1).



Each component is responsible for \*\*display only\*\* — no decision logic.



\---



\## 🧠 Component Philosophy



```text

Components render truth — they do not compute it

📦 Component Hierarchy

App

&#x20;├── Header

&#x20;├── DecisionList

&#x20;│     └── DecisionItem

&#x20;├── DecisionDetail

&#x20;│     ├── ContractViewer

&#x20;│     ├── ConfigViewer

&#x20;│     └── ResultViewer

&#x20;└── ReplayStatus

🔝 1. App (Root)

Responsibility

initialize app

fetch decisions

manage global state

State

decisions\[]

selectedDecision

🧭 2. Header

Displays

app name

optional filters (future)

📊 3. DecisionList

Responsibility

display list of decisions

Props

{

&#x20; decisions: Decision\[]

&#x20; onSelect: (id: string) => void

}

Output



List of DecisionItem components



📄 4. DecisionItem

Displays

contract\_id

action (ALLOW / DENY)

repo

timestamp

Behavior

clickable → opens detail view

🔍 5. DecisionDetail

Responsibility

display full decision

Sections

ContractViewer

ConfigViewer

ResultViewer

Props

{

&#x20; decision: Decision

}

🧾 6. ContractViewer

Displays

contract JSON

formatted view

Behavior

read-only

expandable

⚙️ 7. ConfigViewer

Displays

config used during evaluation

Behavior

read-only

shows rules clearly

✅ 8. ResultViewer

Displays

action (ALLOW / DENY)

reason

Example

DENY

Description must be at least 10 characters

🔁 9. ReplayStatus

Displays

verification status

States

✔ Verified

✖ Failed (future)

🧠 Component Rules

no business logic

no mutation

no external side effects

🔐 Data Flow

Decision (from DB)

&#x20;       ↓

Props passed down

&#x20;       ↓

Components render

⚠️ Forbidden

calling evaluate()

modifying decision data

fetching config dynamically

🧭 Version



Manthan App v0.1 — Components Locked



🏁 Summary



Components provide:



modular UI structure

clear data presentation

scalable interface

🔐 Identity



Every decision is traceable, auditable, and built for trust.

