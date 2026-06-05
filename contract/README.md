# Kaiten Smart Contracts

> Soroban smart contracts powering programmable group finance on Stellar.

The Kaiten contracts package contains all Soroban smart contracts for:

* Trustless ROSCAs
* Conditional escrow
* AI-governed arbitration
* Cross-border payroll settlement

All contracts are written in Rust and compiled to WASM for deployment on Soroban.

---

## Contracts Overview

| Contract         | Purpose                                 |
| ---------------- | --------------------------------------- |
| CircleVault      | Rotating savings groups (ROSCA)         |
| EscrowVault      | Conditional payment escrow              |
| ArbitronRegistry | Arbitration registry + ruling anchoring |
| PayRollBatch     | Payroll processing and batch settlement |

---

## Architecture

```text
Frontend/App
      ↓
API Layer
      ↓
Soroban RPC
      ↓
Kaiten Smart Contracts
      ↓
Stellar Ledger
```

---

## Requirements

```bash
rustup default stable
cargo install soroban-cli
```

---

## Project Structure

```bash
contracts/
├── circle-vault/
├── escrow-vault/
├── arbitron-registry/
├── payroll-batch/
├── shared/
├── Cargo.toml
└── README.md
```

---

## Build Contracts

```bash
soroban contract build
```

Compiled WASM files will appear in:

```bash
target/wasm32-unknown-unknown/release/
```

---

## Run Tests

```bash
cargo test
```

Run a specific contract test:

```bash
cargo test -p circle-vault
```

---

## Deploy to Stellar Testnet

```bash
soroban config network add testnet \
  --rpc-url https://soroban-testnet.stellar.org \
  --network-passphrase "Test SDF Network ; September 2015"

bash ../../scripts/deploy_testnet.sh
```

---

## Contract Details

### CircleVault

Handles:

* Member registration
* Scheduled contributions
* Rotation logic
* Penalty enforcement
* Reputation tracking

Core methods:

* `create_circle`
* `join_circle`
* `contribute`
* `release_payout`
* `close_circle`

---

### EscrowVault

Handles:

* Escrow creation
* Milestone verification
* Time-lock logic
* Multi-sig approvals
* Conditional release

Core methods:

* `create_escrow`
* `fund_escrow`
* `approve_release`
* `raise_dispute`
* `resolve_dispute`

---

### ArbitronRegistry

Handles:

* AI ruling storage
* Evidence hash anchoring
* Arbitrator reputation
* Dispute metadata

Core methods:

* `submit_ruling`
* `verify_hash`
* `fetch_case`

---

### PayRollBatch

Handles:

* Batch payroll execution
* FX routing instructions
* Settlement tracking
* Payroll proofs

Core methods:

* `create_batch`
* `approve_batch`
* `execute_batch`
* `generate_receipt`

---

## Security Principles

* Deterministic execution
* Immutable payout schedules
* Overflow-safe arithmetic
* Access-controlled admin actions
* Multi-signature support
* Replay protection

---

## Audits

Security audits will be published in:

```bash
/audits
```

---

## Known Limitations

* Soroban mainnet optimizations pending
* Oracle integrations are mocked on testnet
* Payroll FX routing currently supports Stellar-native assets only

---

## License

MIT © Kaiten Contributors
