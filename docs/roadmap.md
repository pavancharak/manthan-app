\# 🗺️ Manthan App — Roadmap



This document defines the evolution path of Manthan App beyond v0.1.



The roadmap focuses on expanding visibility and usability

without violating core platform constraints.



\---



\## 🧠 Current State (v0.1)



Manthan App provides:



\- decision list (explorer)

\- decision detail view

\- contract + config + result display

\- basic replay status (display-only)



\---



\## 🔒 Core Constraint



```text

The App must remain read-only and must not influence decisions

📍 Evolution Strategy

Enhance visibility → Do NOT introduce control

🚀 Phase 1 — Enhanced Explorer

Features

search (by contract ID)

filtering (repo, action)

sorting (time, result)

Outcome

Users can quickly find relevant decisions

🔍 Phase 2 — Decision Deep Dive

Features

improved JSON viewer

collapsible sections

field highlighting (inputs vs metadata)

Outcome

Faster understanding of decision structure

🔁 Phase 3 — Replay Visualization

Features

visual replay status

mismatch highlighting (future)

replay timeline

Constraint

UI only reflects replay results

does NOT execute replay

📊 Phase 4 — Decision Analytics

Features

decision counts (ALLOW vs DENY)

trends over time

repo-level breakdown

Outcome

Users understand system behavior patterns

🧩 Phase 5 — Multi-Repo View

Features

org-level dashboard

repo grouping

cross-repo filtering

🔐 Phase 6 — Access Control

Features

user authentication (read-only)

role-based viewing (future)

Constraint

no write permissions

⚙️ Phase 7 — Config Visibility

Features

show active config per repo

compare configs across repos

Constraint

no editing in UI

🌐 Phase 8 — Public Decision Viewer (Optional)

Features

shareable decision links

public audit view

🧠 Long-Term Vision



Manthan App becomes:



The observability layer of decision infrastructure

🔒 What Will NOT Change

App will remain read-only

App will not execute decisions

App will not modify data

App will not contain business logic

📊 Milestones

Phase	Status

v0.1 Explorer	✅ Complete

Search + Filter	🔜 Next

Replay UI	🔜 Planned

Analytics	🔜 Planned

🧭 Versioning

v0.x → rapid UI evolution

v1.0 → stable interface

🏁 Summary



The roadmap focuses on:



deeper visibility

better UX

zero impact on core system

🔐 Identity



Every decision is traceable, auditable, and built for trust.

