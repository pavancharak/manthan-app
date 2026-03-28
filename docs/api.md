\# 🌐 Manthan App — API Layer



This document defines the API/data access layer for Manthan App (v0.1).



The API layer is strictly \*\*read-only\*\* and connects the UI to the decision log.



\---



\## 🧠 Purpose



The API layer is responsible for:



\- fetching decisions from Supabase

\- shaping data for UI

\- maintaining read-only guarantees



\---



\## 🔒 Core Principle



```text

API must NEVER modify decision data

📦 Data Source

Supabase → decisions table

⚙️ Access Method



Two options (v0.1):



Option 1 — Direct Supabase Client (Preferred)

frontend connects directly to Supabase

uses anon/public key (read-only policies)

Option 2 — Thin API Layer (Optional)

Next.js API routes

proxy requests to Supabase

📡 API Functions

1\. Fetch All Decisions

async function fetchDecisions() {

&#x20; const { data, error } = await supabase

&#x20;   .from("decisions")

&#x20;   .select("\*")

&#x20;   .order("created\_at", { ascending: false })



&#x20; if (error) throw error



&#x20; return data

}

2\. Fetch Single Decision

async function fetchDecision(id: string) {

&#x20; const { data, error } = await supabase

&#x20;   .from("decisions")

&#x20;   .select("\*")

&#x20;   .eq("id", id)

&#x20;   .single()



&#x20; if (error) throw error



&#x20; return data

}

3\. Filter Decisions (UI-side or Query)

async function fetchByRepo(repo: string) {

&#x20; const { data } = await supabase

&#x20;   .from("decisions")

&#x20;   .select("\*")

&#x20;   .eq("contract->metadata->>repo", repo)



&#x20; return data

}

🔁 Data Flow

Supabase

&#x20;  ↓

API / Client Fetch

&#x20;  ↓

Transform (optional)

&#x20;  ↓

UI Components

🔐 Security Model

read-only queries only

no insert/update/delete

use Supabase RLS (Row Level Security)

⚠️ Error Handling

Example

if (error) {

&#x20; console.error("Fetch error:", error)

&#x20; throw error

}

📊 Performance Considerations

limit results if dataset grows

paginate (future)

avoid over-fetching

🚫 Forbidden

calling core logic

modifying decisions

injecting derived values into DB

triggering platform execution

🧠 Design Principle

Thin, read-only, transparent data access

🧭 Version



Manthan App v0.1 — API Layer Locked



🏁 Summary



The API layer ensures:



safe data access

clean separation from platform

reliable UI rendering

🔐 Identity



Every decision is traceable, auditable, and built for trust.

