# Kaiten App

> Mobile + Web dApp for programmable group finance on Stellar.

The Kaiten App is the primary user interface for interacting with the Kaiten Protocol. It enables users to create and manage savings circles (ROSCAs), escrow agreements, payroll batches, and arbitration disputes directly from a web browser or mobile device.

Built with React Native, Expo, and TypeScript, the app supports both native mobile deployments and responsive web access from a single codebase.

---

## Features

### Circles (ROSCA)

* Create rotating savings groups
* Invite members via wallet address or share link
* Automated payout rotation tracking
* Contribution reminders
* Reputation score visualization
* On-chain contribution history

### Escrow Vault

* Create milestone-based escrow agreements
* Multi-signature approvals
* Time-locked releases
* Dispute escalation to ArbitronAI
* Real-time contract status tracking

### ArbitronAI

* Submit dispute evidence
* Upload supporting documents
* Review AI arbitration rulings
* Verify ruling hashes on-chain

### PayRoll

* Upload payroll CSVs
* Batch salary disbursement
* Multi-currency settlement
* Stellar DEX FX routing
* Downloadable payslips

---

## Tech Stack

| Layer              | Technology                |
| ------------------ | ------------------------- |
| Framework          | React Native + Expo       |
| Language           | TypeScript                |
| State Management   | Zustand                   |
| API Client         | GraphQL + REST            |
| Wallet Integration | Freighter / WalletConnect |
| Styling            | NativeWind + Tailwind     |
| Forms              | React Hook Form           |
| Data Fetching      | TanStack Query            |
| Charts             | Victory Native            |

---

## Folder Structure

```bash
app/
├── src/
│   ├── components/
│   ├── screens/
│   ├── navigation/
│   ├── hooks/
│   ├── services/
│   ├── store/
│   ├── lib/
│   ├── theme/
│   └── types/
├── assets/
├── app.json
├── package.json
└── README.md
```

---

## Environment Variables

Create a `.env` file:

```env
EXPO_PUBLIC_API_URL=http://localhost:4000
EXPO_PUBLIC_GRAPHQL_URL=http://localhost:4000/graphql
EXPO_PUBLIC_STELLAR_NETWORK=testnet
EXPO_PUBLIC_CIRCLE_CONTRACT_ID=...
EXPO_PUBLIC_ESCROW_CONTRACT_ID=...
```

---

## Installation

```bash
pnpm install
```

---

## Run Development Server

### Web

```bash
pnpm dev:web
```

### Mobile

```bash
pnpm dev:mobile
```

Then scan the QR code using Expo Go.

---

## Build

### Android

```bash
eas build --platform android
```

### iOS

```bash
eas build --platform ios
```

### Web

```bash
pnpm build:web
```

---

## Wallet Support

* Freighter
* Lobstr Wallet
* WalletConnect-compatible wallets

---

## Smart Contract Integration

The app communicates with Soroban contracts using Stellar RPC endpoints.

Supported contracts:

* CircleVault
* EscrowVault
* ArbitronRegistry
* PayRollBatch

---

## Security

* Wallet signatures required for all state-changing actions
* No private keys stored
* Secure local session storage
* Rate-limited API requests

---

## Future Improvements

* Push notifications
* Offline transaction queue
* Embedded fiat on-ramp
* Biometric authentication
* Multi-language support

---

## License

MIT © Kaiten Contributors
