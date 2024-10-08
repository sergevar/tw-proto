# ArFleet Project

<!-- ![ArFleet Logo](https://docs.arfleet.io/img/logo.svg) -->


[https://arfleet.io](https://arfleet.io)

> [!NOTE]  
> More documentation for ArFleet is available at [docs.arfleet.io](https://docs.arfleet.io).

## Overview

ArFleet is a protocol built on and for Arweave+ao designed to facilitate the purchase of time-limited data storage from permissionless peers, eliminating the requirement of a third-party for enforcement.

NOTE: For testnet, only holders of [ArFleet Genesis Pass](https://ao-bazar.arweave.dev/#/asset/kBQOWxXVSj21ZhLqMTFEIJllEal1z_l8YgRRdxIm7pw) would be able to use the provisioned testnet providers

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or Yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aoacc/arfleet-js.git
   ```
2. Navigate to the backend directory and install dependencies:
   ```bash
   cd arfleet-js/backend
   npm install
   ```
3. Navigate to the frontend directory and install dependencies:
   ```bash
   cd ../frontend
   npm install
   ```
Go back to the project directory
  ```bash
   cd ..
   ```
### Running the Application

Run:

```bash
./arfleet client
```

if you are a client.

Or,

```bash
./arfleet provider
```

if you are a provider.

When your client is running, you can use the `./arfleet client store <directory or file>` command to store your data.

Note: in the current version, the data is available publicly.

## Updates

1. To pull the latest updates from the main repo run:
   ```bash
   git pull origin master
   ```
2. Navigate to the backend directory and install dependencies:
   ```bash
   cd arfleet-js/backend
   npm install
   ```
3. Navigate to the frontend directory and install dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

## Transfer Pass

To transfer your pass to another address, you can use the `./arfleet (client or provider) transferpass <your_outside_address>` command. <-- instead of `(client or provider)` here, choose only one.

## Wallet Location

If you need access to the wallet generated by the node, you can find it in your home directory, then `.arfleet-client` or `.arfleet-provider` folder, then `wallet.json`.

## Using A Custom Wallet Address

To use your own wallet address, save it's keyfile from the wallet extension and rename it `wallet.json`. Then, replace the existing `wallet.json` file in the `.arfleet-client` or `.arfleet-provider` folder with your file. This will configure your Client or Provider node to use the desired wallet address.

## Contributing

Contributions are welcome! Feel free to open an issue or a pull request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
