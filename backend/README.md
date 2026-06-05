# Kaiten API

> REST + GraphQL backend for the Kaiten Protocol.

The Kaiten API provides indexing, orchestration, analytics, authentication, payroll processing, and AI arbitration coordination for all Kaiten applications and smart contracts.

The backend acts as the off-chain coordination layer between:

* Frontend clients
* Soroban smart contracts
* Stellar RPC services
* ArbitronAI agents
* External compliance and off-ramp providers

---

## Features

### Core Infrastructure

* REST API
* GraphQL API
* WebSocket event streaming
* Soroban indexing
* Stellar transaction monitoring

### Circles

* Circle discovery
* Reputation indexing
* Contribution analytics
* Payout notifications

### Escrow

* Escrow metadata storage
* Dispute lifecycle management
* Evidence upload pipeline

### ArbitronAI

* AI arbitration orchestration
* Evidence preprocessing
* Ruling verification
* Hash anchoring workflow

### PayRoll

* CSV payroll ingestion
* FX quote aggregation
* Batch transaction orchestration
* Payslip generation

---

## Tech Stack

| Layer      | Technology                   |
| ---------- | ---------------------------- |
| Runtime    | Node.js                      |
| Framework  | Fastify                      |
| API        | GraphQL + REST               |
| Database   | PostgreSQL                   |
| ORM        | Prisma                       |
| Queue      | BullMQ                       |
| Cache      | Redis                        |
| Storage    | S3-compatible object storage |
| Auth       | JWT + Wallet Signatures      |
| Blockchain | Stellar SDK + Soroban RPC    |

---

## Folder Structure

```bash
api/
├── src/
│   ├── modules/
│   ├── routes/
│   ├── graphql/
│   ├── jobs/
│   ├── services/
│   ├── db/
│   ├── middleware/
│   ├── utils/
│   └── config/
├── prisma/
├── tests/
├── package.json
└── README.md
```

---

## Environment Variables

Create a `.env` file:

```env
PORT=4000

DATABASE_URL=postgresql://postgres:postgres@localhost:5432/kaiten
REDIS_URL=redis://localhost:6379

JWT_SECRET=super-secret

STELLAR_RPC_URL=https://soroban-testnet.stellar.org
STELLAR_NETWORK=testnet

CIRCLE_CONTRACT_ID=...
ESCROW_CONTRACT_ID=...
ARBITRON_CONTRACT_ID=...
PAYROLL_CONTRACT_ID=...

OPENAI_API_KEY=...
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
S3_BUCKET=kaiten-evidence
```

---

## Installation

```bash
pnpm install
```

---

## Database Setup

Run migrations:

```bash
pnpm prisma migrate dev
```

Seed development data:

```bash
pnpm seed
```

---

## Run Development Server

```bash
pnpm dev
```

REST API:

```text
http://localhost:4000
```

GraphQL Playground:

```text
http://localhost:4000/graphql
```

---

## Event Indexer

The indexer listens for:

* Circle contribution events
* Escrow releases
* Arbitration rulings
* Payroll settlements

Start the indexer:

```bash
pnpm worker:indexer
```

---

## Background Jobs

| Job                 | Purpose                    |
| ------------------- | -------------------------- |
| payroll-worker      | Batch payroll execution    |
| fx-worker           | DEX quote aggregation      |
| arbitration-worker  | AI dispute coordination    |
| notification-worker | Email + push notifications |

---

## API Authentication

Supported methods:

* Wallet signature authentication
* JWT bearer tokens
* API keys for enterprise payroll clients

---

## File Uploads

Supported evidence uploads:

* PDF
* PNG
* JPG
* CSV

Uploads are hash-verified before storage.

---

## Monitoring

* OpenTelemetry tracing
* Structured logging
* Prometheus metrics
* Sentry error tracking

---

## Future Improvements

* SEP-24 off-ramp integrations
* KYC/AML compliance engine
* Multi-region deployment
* zk-proof dispute attestations

---

## License

MIT © Kaiten Contributors
