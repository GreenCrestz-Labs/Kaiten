# Kaiten 回転

> **Programmable group finance on Stellar.**
> Trustless rotating savings circles, conditional escrow, AI-governed dispute resolution, and cross-border payroll — all in one composable protocol built on Soroban.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Network: Stellar](https://img.shields.io/badge/Network-Stellar-5D4ED3)](https://stellar.org)
[![Contracts: Soroban](https://img.shields.io/badge/Contracts-Soroban%20%28Rust%29-EF9F27)](https://soroban.stellar.org)
[![Built for: SCF](https://img.shields.io/badge/Submitted%20to-Stellar%20Community%20Fund-085041)](https://communityfund.stellar.org)
[![Monorepo: pnpm + Turborepo](https://img.shields.io/badge/Monorepo-pnpm%20workspaces-orange)](https://pnpm.io)

---

## The Problem

Across the Global South, three financial realities co-exist with no adequate on-chain solution:

**1. Rotating savings groups (ROSCAs, Tontines, Arisan, Susu, Chama)** are the most widely used savings vehicle for the unbanked — yet they run entirely on social trust and paper ledgers, with zero enforcement and high fraud risk.

**2. Conditional payments and escrow** — milestone-based freelance contracts, supplier agreements, and cross-border deals — rely on expensive intermediaries (lawyers, banks, escrow agents) that price out small businesses.

**3. Cross-border payroll** for globally distributed teams involves 3–7% FX fees, 3–5 day settlement, and per-country compliance overhead that makes it impractical for teams under 50 people.

Kaiten solves all three with a single composable protocol on Stellar: programmable savings circles, trustless escrow, AI-governed arbitration, and one-click multi-jurisdiction payroll — all settled in Stellar USDC in seconds.

---

## What Makes Kaiten Different

| Competitor | Gap | Kaiten's Answer |
|---|---|---|
| Espera (Celo ROSCA) | No escrow, no payroll, Celo only | Full suite on Stellar — ROSCAs + escrow + payroll |
| IntentRemit (Celo) | No group finance, no AI arbitration | AI-governed disputes, group-native architecture |
| Osher AI (Celo bridges) | Bridge-only, no savings or payroll | Intent payments are one module, not the whole product |
| Architect Pay (Celo payroll) | Payroll only, testnet only | Production-ready + ROSCA + escrow composability |
| Numbeo / manual ROSCA apps | Off-chain, trusted third party | Fully on-chain, trustless, Stellar settlement |

---

## Core Modules

Kaiten is built as four composable on-chain primitives that can be used independently or together:

```
┌─────────────────────────────────────────────────────┐
│                      Kaiten Protocol                 │
│                                                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────┐ │
│  │  Circles │  │  Escrow  │  │ Arbitron │  │ Pay  │ │
│  │  (ROSCA) │  │  Vault   │  │    AI    │  │ Roll │ │
│  └──────────┘  └──────────┘  └──────────┘  └──────┘ │
│         ↓             ↓             ↓           ↓    │
│              Soroban Smart Contracts                 │
│                   Stellar Network                    │
│              Stellar USDC settlement                 │
└─────────────────────────────────────────────────────┘
```

### 1. Circles — Trustless ROSCA Engine
On-chain rotating savings groups. Members pool Stellar USDC into a smart contract, take turns receiving the pot, and build a verifiable on-chain reputation score. Group rules (contribution size, frequency, rotation order, late-payment penalties) are encoded in the contract at creation. No admin. No trust required.

### 2. Escrow Vault — Conditional Payments
Time-locked and milestone-based escrow for B2B contracts, freelance agreements, and supplier payments. Funds release automatically when conditions are met (oracle confirmation, counterparty signature, time expiry). Multi-sig release options for complex deals.

### 3. ArbitronAI — AI-Governed Dispute Resolution
When escrow conditions are disputed, ArbitronAI — an on-chain AI arbitration layer — reviews the evidence submitted by both parties (documents, transaction history, communication logs), produces a verifiable ruling, and instructs the Escrow Vault to release funds accordingly. Rulings are hash-anchored to the Stellar ledger.

### 4. PayRoll — Cross-Border Payroll
One-click payroll for globally distributed teams. Employers load USDC once. Kaiten converts to each employee's preferred currency via the Stellar DEX (Automated Market Makers), calculates applicable withholding by jurisdiction, and settles directly to each recipient's Stellar wallet or linked off-ramp in under 10 seconds.

---

## Monorepo Structure

```
kaiten/
├── packages/
│   ├── contracts/          # @kaiten/contracts    — Soroban smart contracts (Rust)
│   ├── agent/              # @kaiten/agent        — ArbitronAI arbitration engine (Python + LLM)
│   ├── api/                # @kaiten/api          — REST + GraphQL backend (Node.js / Fastify)
│   └── app/                # @kaiten/app          — Mobile + web dApp (React Native + Expo)
├── docs/
│   ├── architecture.md
│   ├── whitepaper.md
│   └── api-reference.md
├── scripts/
│   ├── deploy_testnet.sh
│   ├── deploy_mainnet.sh
│   └── seed_testnet.sh
├── audits/
├── pnpm-workspace.yaml
├── turbo.json
└── README.md               ← you are here
```

---

## How It Works — End to End

### Circles (ROSCA)

```
Members join a Circle on-chain
        │
        ▼
Each member contributes USDC on schedule
        │
        ▼
Smart contract holds funds in escrow
        │
        ▼
At rotation interval → pot released to next member
        │
        ▼
Reputation score updated for all participants
        │
        ▼
Cycle repeats until all members have received once
```

### Escrow Vault

```
Payer deposits USDC + defines release conditions
        │
        ▼
Payee delivers work / goods
        │
        ▼
Condition met? ──Yes──▶ USDC released automatically
        │
        No
        │
        ▼
Dispute raised → ArbitronAI reviews evidence
        │
        ▼
AI ruling anchored on-chain → funds released accordingly
```

### PayRoll

```
Employer uploads payroll CSV (wallet addresses, amounts, currencies)
        │
        ▼
Kaiten fetches live FX rates from Stellar DEX
        │
        ▼
Employer approves batch + signs multisig transaction
        │
        ▼
Kaiten DEX-swaps USDC → each recipient's currency
        │
        ▼
Simultaneous settlement to all wallets (<10s on Stellar)
        │
        ▼
Payroll record anchored on-chain; PDF payslips generated
```

---

## Token Economics

Kaiten uses **no proprietary token**. All settlement is in Stellar USDC (Circle) or native XLM.

| Fee type | Rate | Destination |
|---|---|---|
| Circle membership fee | 0.5% of pot | Protocol treasury |
| Escrow vault fee | 0.3% of locked amount | Protocol treasury |
| ArbitronAI ruling fee | $2 flat per dispute | Arbitration fund |
| PayRoll batch fee | 0.2% per run | Protocol treasury |
| DEX swap spread | 0.1–0.3% (Stellar AMM) | Liquidity providers |

Treasury funds are governed by a community multisig and used for protocol development, security audits, and liquidity incentives.

---

## Getting Started

### Prerequisites

```bash
node >= 20
pnpm >= 9
rustup (stable)
soroban-cli
python >= 3.11         # for @kaiten/agent
```

### Install

```bash
git clone https://github.com/kaiten-protocol/kaiten.git
cd kaiten
pnpm install
```

### Build all packages

```bash
pnpm turbo build
```

### Run locally

```bash
# API + App dev servers
pnpm turbo dev --filter=@kaiten/api --filter=@kaiten/app

# ArbitronAI agent
cd packages/agent && python -m uvicorn main:app --reload

# Deploy contracts to Testnet
cd packages/contracts
soroban contract build
bash ../../scripts/deploy_testnet.sh
```

---

## Contract Addresses

| Network | Contract | Address |
|---|---|---|
| Testnet | CircleVault | `GCIRCLE...` |
| Testnet | EscrowVault | `GCESCROW...` |
| Testnet | ArbitronRegistry | `GCARBITRON...` |
| Testnet | PayRollBatch | `GCPAYROLL...` |
| Mainnet | All | Launching Q3 2025 |

---

## Roadmap

| Milestone | Target |
|---|---|
| Testnet launch (Circles + Escrow) | Q2 2025 |
| ArbitronAI v1 (text evidence) | Q2 2025 |
| PayRoll beta | Q3 2025 |
| Mainnet launch | Q3 2025 |
| ArbitronAI v2 (document + image evidence) | Q4 2025 |
| Mobile app (iOS + Android) | Q4 2025 |
| DAO governance (treasury multisig → on-chain vote) | Q1 2026 |

---

## Why Stellar

- **5-second finality** — ROSCA payouts and payroll settlement are near-instant
- **$0.00001 transaction fees** — micro-contributions from low-income savers are economically viable
- **Stellar DEX** — PayRoll FX conversion with no centralized exchange dependency
- **Stellar USDC (Circle)** — battle-tested, widely off-rampable stablecoin
- **Soroban** — expressive Rust smart contracts with deterministic execution
- **SEP-0006 / SEP-0024** — built-in anchor protocols for fiat on/off ramp integrations
- **400M+ underbanked individuals** in Stellar's primary target markets overlap exactly with Kaiten's users

---

## Team

Built for submission to the **Stellar Community Fund (SCF)**. See [docs/whitepaper.md](docs/whitepaper.md) for full technical and economic detail.

---

## Security

- All Soroban contracts will undergo a third-party audit before mainnet
- Responsible disclosure: security@kaiten.finance
- Bug bounty: launching alongside mainnet

---

## Contributing

```bash
git checkout -b feat/your-feature
pnpm turbo test
pnpm turbo lint
# Open PR against main
```

See [CONTRIBUTING.md](CONTRIBUTING.md) and [docs/architecture.md](docs/architecture.md).

---

## License

MIT © 2025 Kaiten Contributors

---

<p align="center">
  Built on <strong>Stellar</strong> · Powered by <strong>Soroban</strong> · For the world's savers 🌍
</p>