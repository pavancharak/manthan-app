\# ✅ Manthan App — Operational Checklist



This checklist ensures Manthan App (v0.1) is:



\- correctly set up

\- properly connected to Platform

\- rendering data accurately

\- respecting all constraints



\---



\## 🧠 Purpose



Use this checklist to verify:



\- setup

\- data flow

\- UI correctness

\- system integrity



\---



\## 🚀 1. Setup Checklist



\- \[ ] Node.js installed (>=18)

\- \[ ] npm install completed

\- \[ ] project runs locally



\---



\## ⚙️ 2. Environment Setup



\- \[ ] Supabase URL configured

\- \[ ] Supabase anon/public key configured

\- \[ ] no service role key exposed in frontend



\---



\## 🌐 3. App Run Check



```bash id="run\_app"

npm run dev

Expected

&#x20;App loads in browser

&#x20;No console errors

📡 4. Data Fetch Check

&#x20;decisions fetched from Supabase

&#x20;data displayed in UI

&#x20;no mutation of data

📊 5. Decision List Check

&#x20;list renders correctly

&#x20;shows ID, action, repo, timestamp

&#x20;handles empty state

🔍 6. Decision Detail Check

&#x20;clicking item opens detail view

&#x20;contract displayed correctly

&#x20;config displayed correctly

&#x20;result displayed clearly

🔁 7. Replay Status Check

&#x20;replay status visible

&#x20;shows verified state

⚠️ 8. Error Handling Check

&#x20;fetch error handled

&#x20;error message displayed

&#x20;app does not crash

🎨 9. UI Check

&#x20;clear layout

&#x20;readable text

&#x20;color-coded results (ALLOW/DENY)

🔐 10. Security Check

&#x20;no sensitive keys exposed

&#x20;read-only access enforced

&#x20;no write operations present

🧠 11. State Check

&#x20;state reflects fetched data

&#x20;no business logic in state

&#x20;no mutation of original objects

🚫 12. Constraint Check

&#x20;no decision logic in UI

&#x20;no calls to evaluate()

&#x20;no DB writes

&#x20;no replay execution

🔗 13. Integration Check

&#x20;connected to correct Supabase project

&#x20;data matches platform decisions

🧭 Final State

App is read-only, accurate, and fully aligned with platform

🧭 Version



Manthan App v0.1 — Checklist Locked



🏁 Summary



Checklist ensures:



correct setup

accurate rendering

safe operation

🔐 Identity



Every decision is traceable, auditable, and built for trust.

