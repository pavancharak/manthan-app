\# Manthan Core



> Deterministic, append-only, verifiable decision engine.


dd
\---



\## What is Manthan Core?



Manthan Core is a minimal system that:



\- takes a decision (as a contract)

\- evaluates it deterministically

\- records it immutably

\- proves its correctness via replay



It is designed as the \*\*core layer of decision infrastructure\*\*.



\---



\## Core Properties



\### 1. Deterministic

Same input → same output  

No randomness, no hidden state



\### 2. Append-only

All decisions are recorded  

Nothing is overwritten or mutated



\### 3. Verifiable

Each decision is cryptographically linked (hash chain)



\### 4. Replayable

The system can re-run all decisions and verify:

\- integrity

\- determinism

\- correctness



\---



\## Architecture





Decision Contract

↓

Deterministic Engine

↓

Append-only Log (decision.log)

↓

Hash Chain (integrity)

↓

Replay + Verification





\---



\## Project Structure





src/

├── engine/ # deterministic evaluation

├── store/ # append-only log + hashing

├── enforcement/ # decision outcome

├── types/ # contract definitions

├── replay.ts # verification engine

└── test.ts # example run





\---



\## Run



```bash

npx ts-node src/test.ts

What Happens

A decision contract is created

Engine evaluates it

Result is stored in decision.log

Entry is hashed and linked

Replay verifies entire system

Example Output

RESULT: { action: 'ALLOW' }

All decisions verified. System is consistent.

