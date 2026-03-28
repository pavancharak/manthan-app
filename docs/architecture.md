\# 🧩 Manthan App — Architecture



This document defines the architecture of Manthan App (v0.1).



\---



\## 🧠 Overview



Manthan App is a \*\*read-only UI layer\*\* that visualizes decisions stored by the Platform.



It does NOT:



\- execute decisions

\- modify data

\- influence system behavior



\---



\## 🔒 Core Principle



```text

UI observes truth — it never creates or alters it

📦 High-Level Architecture

User

&#x20; ↓

Browser (React App)

&#x20; ↓

App API Layer (read-only)

&#x20; ↓

Supabase (Decision Log)

🧩 Layers

1\. UI Layer (Frontend)

React / Next.js

renders decisions

handles user interaction

2\. Data Layer (API / Client)

fetches data from Supabase

read-only queries

no mutations

3\. Storage Layer

Supabase (shared with Platform)

source of truth

🔁 Data Flow

Supabase (decisions)

&#x20;       ↓

Fetch (API / client)

&#x20;       ↓

Transform (UI-friendly)

&#x20;       ↓

Render (components)

&#x20;       ↓

User

🧠 Component Structure

App

&#x20;├── DecisionList

&#x20;├── DecisionDetail

&#x20;├── ContractViewer

&#x20;├── ConfigViewer

&#x20;└── ReplayStatus

📊 Core Screens

1\. Decision Explorer

list of all decisions

filters (repo, action)

2\. Decision Detail

contract view

config view

result view

3\. Replay Status

verification result

consistency indicator

🔐 Data Access Rules

read-only access

no writes to DB

no direct platform calls

⚠️ Boundary Enforcement

Layer	Allowed	Forbidden

UI	rendering	logic execution

API	fetching	mutation

DB	storage	UI logic

🧠 State Management



Minimal state:



decision list

selected decision

filters



No business logic state.



🔁 Sync Model

fetch on load

optional polling (future)

no real-time dependency (v0.1)

🔒 Constraints

UI must not affect determinism

UI must not mutate data

UI must not bypass platform

🧭 Version



Manthan App v0.1 — Architecture Locked



🏁 Summary



The App architecture ensures:



clear separation from core

safe read-only access

scalable UI foundation

🔐 Identity



Every decision is traceable, auditable, and built for trust.

