# 🛠️ Manthan App — Troubleshooting Guide

This document helps diagnose and fix common issues in Manthan App (v0.1).

---

## 🧠 Purpose

Resolve issues related to:

- data fetching
- UI rendering
- connectivity
- configuration

---

## 🔍 1. App Not Loading

### ❌ Problem

Blank screen / page not loading

---

### Causes

- dev server not running
- build error
- missing dependencies

---

### Fix

```bash id="fix_run"
npm install
npm run dev
🔍 2. No Decisions Displayed
❌ Problem
No decisions found
Causes
empty database
wrong Supabase project
query failure
Fix
verify Supabase table has data
check environment variables
test fetch function
🔍 3. Fetch Error
❌ Problem
Failed to load data
Causes
invalid Supabase URL/key
network issue
RLS (Row Level Security) blocking access
Fix
verify SUPABASE_URL
verify anon key
check Supabase policies
🔍 4. Incorrect Data Display
❌ Problem

Wrong contract/config/result shown

Causes
incorrect mapping in UI
stale state
Fix
verify field mapping
refresh state
compare with DB record
🔍 5. Click Not Opening Detail
❌ Problem

Clicking decision does nothing

Causes
event handler not wired
state not updating
Fix
onClick={() => setSelectedDecision(decision)}
🔍 6. Replay Status Missing
❌ Problem

Replay status not shown

Causes
missing field in UI
data not fetched
Fix
verify component renders ReplayStatus
ensure decision record includes needed data
🔍 7. UI Not Updating
❌ Problem

Changes not reflected

Causes
cached state
stale fetch
Fix
reload page
refetch data
verify state updates
🔍 8. Styling Issues
❌ Problem

UI looks broken

Causes
Tailwind not configured
CSS not loaded
Fix
verify Tailwind setup
check CSS imports
🔍 9. Security Warning
❌ Problem

Sensitive key exposed

Cause

Using service role key in frontend

Fix
use anon/public key only
move secrets to backend if needed
🔍 10. Performance Issues
❌ Problem

Slow loading

Causes
large dataset
no pagination
Fix
limit query results
implement pagination (future)
🧠 Debug Workflow
Identify issue
Check console logs
Verify data source (Supabase)
Inspect UI state
Apply fix
🔒 Constraints
do not modify DB from App
do not inject logic into UI
do not bypass platform
🧭 Version

Manthan App v0.1 — Troubleshooting Locked

🏁 Summary

This guide ensures:

fast debugging
stable UI behavior
correct data visibility
🔐 Identity

Every decision is traceable, auditable, and built for trust.