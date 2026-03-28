\# ❓ Manthan App — FAQ



This document answers common questions about Manthan App (v0.1).



\---



\## 🧠 What is Manthan App?



Manthan App is the \*\*UI layer\*\* of the Manthan system.



It allows users to:



\- view decisions

\- inspect contracts

\- understand outcomes



\---



\## 🔁 Does the App make decisions?



No.



```text id="no\_decision"

The App NEVER makes decisions



All decisions are made by the Platform.



🔒 Can the App modify decisions?



No.



The App is strictly read-only

💾 Where does the App get data from?



From:



Supabase → decisions table

🔁 What is Replay Status in the App?



Replay status shows whether a decision is:



verified (consistent)

failed (future support)

⚠️ Can the App run replay?



No (v0.1).



Replay runs in the Platform.



App only displays results.



🧠 Why is the App read-only?



To preserve:



determinism

system integrity

trust

🔌 Can I trigger decisions from the App?



No.



Decisions are triggered by:



external events (e.g. GitHub webhooks)

📊 What can I see in the App?

decision list

contract details

config used

decision result

🧠 Can I edit config from the App?



No.



Config is managed externally.



🔐 Is the App secure?



Yes, because:



no write access

no secrets exposed

read-only data access

⚙️ Why not include decision logic in the App?



Because:



UI must not affect system behavior

🌐 Can the App support other systems?



Yes.



As Platform expands (Slack, CI/CD), App will display those decisions too.



🔍 How do I debug issues using the App?

view decision details

compare with expected behavior

check replay status

🧭 What is the long-term vision?



Manthan App becomes:



The visibility layer for all decisions in a system

🏁 Summary



Manthan App provides:



visibility

transparency

understanding



Without affecting:



execution

logic

outcomes

🔐 Identity



Every decision is traceable, auditable, and built for trust.

