\# 🔄 Manthan App — User Flow



This document defines how users interact with Manthan App (v0.1).



It describes the complete flow from opening the app to inspecting decisions.



\---



\## 🧠 Overview



Manthan App enables users to:



\- browse decisions

\- inspect details

\- verify outcomes



\---



\## 🔒 Core Principle



```text

Users observe decisions — they do not influence them

📦 Primary User Flows

Open App

View Decision List

Select Decision

Inspect Details

Verify Replay Status

🔁 Flow 1 — App Entry

User opens app

&#x20;       ↓

App loads

&#x20;       ↓

Fetch decisions from Supabase

&#x20;       ↓

Render Decision List

📊 Flow 2 — Decision Explorer

Decision List

&#x20;   ↓

Display:

&#x20; - contract\_id

&#x20; - action

&#x20; - repo

&#x20; - timestamp

&#x20;   ↓

User scrolls / filters

🔍 Flow 3 — Decision Detail

User clicks decision

&#x20;       ↓

Load decision details

&#x20;       ↓

Render:

&#x20; - Contract

&#x20; - Config

&#x20; - Result

🧾 Detail View Sections

Contract

{

&#x20; "id": "...",

&#x20; "inputs": { ... },

&#x20; "metadata": { ... }

}

Config

{

&#x20; "rules": { ... }

}

Result

{

&#x20; "action": "ALLOW | DENY",

&#x20; "reason": "..."

}

🔁 Flow 4 — Replay Status

User views decision

&#x20;       ↓

Replay status shown:

&#x20; - Verified

&#x20; - Failed (future)

🧭 Navigation Model

Home (Decision List)

&#x20;       ↓

Decision Detail

&#x20;       ↓

Back to List

🧠 Filtering Flow (Optional v0.1)

User selects filter

&#x20;       ↓

Apply filter (repo / action)

&#x20;       ↓

Update list

⚠️ Error Flow

No Data

No decisions found

Fetch Error

Failed to load decisions

🔐 UX Constraints

no editing capability

no decision triggering

no config modification

🧠 Design Goal

Make every decision easy to understand in < 10 seconds

🔒 Constraints

UI must remain read-only

no hidden data transformations

no logic beyond presentation

🧭 Version



Manthan App v0.1 — Flow Locked



🏁 Summary



User flow ensures:



simple navigation

clear visibility

fast understanding

🔐 Identity



Every decision is traceable, auditable, and built for trust.

