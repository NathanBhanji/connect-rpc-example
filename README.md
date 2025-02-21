# Connect RPC Example

A demonstration project showcasing a Connect RPC service implementation with TypeScript, Fastify, and Protocol Buffers. This project implements a simple encryption service using a Caesar cipher algorithm.

### Features

- Example service implementation
- Server reflection

## Prerequisites

- Node.js v20 or higher
- npm
- [buf](https://buf.build/) CLI tool for Protocol Buffer management
- SSL certificates (included for demo purposes)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/NathanBhanji/connect-rpc-example.git
cd connect-rpc-example
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm run dev
```

The server will start on port 50051 by default (configurable via SERVER_PORT environment variable).

### Service Definition

The example implements an encryption service with two methods:

```proto
service ExampleEncryptService {
rpc Encrypt(EncryptRequest) returns (EncryptResponse) {}
rpc Decrypt(DecryptRequest) returns (DecryptResponse) {}
}
```
