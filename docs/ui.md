\# 🎨 Manthan App — UI Design



This document defines the UI design of Manthan App (v0.1).



The UI focuses on:



\- clarity

\- readability

\- trust



\---



\## 🧠 Design Philosophy



```text

Make decisions understandable at a glance

🔒 Core Principle

Clarity over complexity

📦 Layout Structure

Header

&#x20; ↓

Main Content

&#x20; ├── Decision List (left / top)

&#x20; └── Decision Detail (right / bottom)

🧭 Screen Types

1\. Decision Explorer (Home)

list of decisions

scrollable

filterable (future)

2\. Decision Detail

full decision view

structured sections

📊 Decision List UI

Each Item Shows

ID (pr-1)

Action (ALLOW / DENY)

Repo (owner/repo)

Timestamp

Example

pr-1   DENY   owner/repo   2026-01-01

Visual Cues

ALLOW → green

DENY → red

🔍 Decision Detail UI

Sections

\[ Result ]

\[ Contract ]

\[ Config ]

\[ Replay Status ]

✅ Result Section

Display

DENY

Description must be at least 10 characters

Styling

large text

color-coded

🧾 Contract Section

JSON viewer

collapsible

syntax highlighted

⚙️ Config Section

key-value display

simple readable format

🔁 Replay Status

✔ Verified

🎯 UX Goals

understand decision in < 10 seconds

no cognitive overload

minimal navigation

⚠️ Empty State

No decisions found

❌ Error State

Failed to load data

🧠 Interaction Model

click → view detail

back → return to list

no editing actions

🎨 Styling (Suggested)

Tailwind CSS

clean typography

spacing-focused layout

🔒 Constraints

no input fields affecting system

no edit buttons

no action triggers

🧭 Version



Manthan App v0.1 — UI Locked



🏁 Summary



UI ensures:



fast comprehension

visual trust

minimal friction

🔐 Identity



Every decision is traceable, auditable, and built for trust.

