- [x] processes should work
- [x] process
    - [x] funded
    - [x] files sent
    - [x] collaterized, switch flipped (assume how much collateral is needed precisely)
- [] verification game
- [] retrieval
- [] instead of 5 seconds, trigger changes immediately. and 5 seconds could now be extended

[] create simple bootstrap/react UI
[] maintain peers addr book
[x] chunkify

[] will fail on another `store` because assignment already exists, fix this.

[] accelerate instead of 5 s (and chunks too)
[] rsa in separate processes

[] pricing and deal duration

[] turn/proxy server? at least for now?

- [] better errors from api

[] provider: delete chunks that we don't have to keep because the deal never finalized
[] clean the connection string from extra stuff and only leave host and port and known protocol - for security
[] if some provider has been dead for a long while, don't contact them, even with other placements
[] if the deal doesn't move for some time, fail it. same from provider side!

what will we have to keep after the container is stored?

1. providers (storage link counterparty)
2. (key we don't have to store, derivable)
3. encrypted tree root of the container - that's the container id
4. the root directory index id. if it's in several chunks, it will give us many pointers into the same container tree

Moving parts
- Core
    - Config
    - Utils
    - Datadir for client/provider
    - Cli tool
    - Arweave wallet
    - Sqlite3 database / sequelize ORM / automigrations
    - Connect to Arweave and ao
    - RSA encrypt/decrypt
    - RSA sign/verify
    - AES256 encrypt/decrypt
    - Signing/verifying requests/responses between parties
- Lua Modules
    - ArFleetMarketplace.lua
    - ArFleetDeal.lua
    - libraries: sha256, base64, hex
- Client
    - Local API
    - Store files/directories
        - Assignment
            - Chunkify
            - Merklize
            - Build file index
            - Build directory index
            - Reach out to Marketplace to get announcements
            - Auto create placements when redundancy < desired
        - Placement
            - Find provider
            - Negotiate
            - Encrypt with RSA
            - Merklize replica
            - Spawn the deal process
            - Fund the deal
            - Transfer
            - Finalize
    - Retrieve files
    - Background queues
    - Continue after restart (queue boot)
- Provider
    - Local API
    - Public API (for clients to reach out to)
        - ... same functionality as client but from the other side ...
    - REPL
        - "announce" / "announce [IP:port]"