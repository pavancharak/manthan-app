\# 📚 Manthan App — Glossary



This document defines key terms used in Manthan App (v0.1).



\---



\## 🧠 Core Terms



\### Decision



A result computed by the Platform.



Displayed in the App as:



\- action (ALLOW / DENY)

\- reason



\---



\### Decision Record



A stored entry in the database containing:



\- contract

\- result

\- config



\---



\### Decision Explorer



The main screen showing a list of decisions.



\---



\### Decision Detail



A view showing full information about a single decision.



\---



\### Contract



The input that produced the decision.



Displayed as JSON in the App.



\---



\### Config



The rules used during evaluation.



Displayed as read-only data.



\---



\### Result



The outcome of evaluation.



Example:



```text id="result\_glossary"

ALLOW / DENY

🔁 Platform Terms (Referenced)

Replay



Verification process ensuring decisions are consistent.



Determinism



Same input → same output



Idempotency



Same contract → no reprocessing



🎨 UI Terms

Component



Reusable UI element (e.g., DecisionList, ResultViewer)



State



UI data used for rendering (not business logic)



Props



Data passed between components



View



A screen (Explorer or Detail)



🔍 Data Terms

Source of Truth

Supabase decisions table

Fetch



Retrieving data from database



Render



Displaying data in UI



⚙️ Interaction Terms

Selection



User clicking a decision



Navigation



Moving between list and detail views



Filtering



Narrowing decision list (future)



🔐 Constraint Terms

Read-Only



No data modification allowed



Boundary



Separation between App and Platform



Non-Interference



App must not affect decisions



🧠 Conceptual Terms

Observability



Ability to see and understand decisions



Transparency



Clear visibility into system behavior



Auditability



Ability to verify decisions



🧭 Version



Manthan App v0.1 — Glossary Locked



🏁 Summary



This glossary ensures:



shared understanding

consistent terminology

clarity across system

🔐 Identity



Every decision is traceable, auditable, and built for trust.

