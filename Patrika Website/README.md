#

## Installing dependencies

Make sure you have yarn install if not then run commans `npm install yarn`

To install the project dependencies `yarn install`

## Installing a dependency

To install a production dependency run `yarn add [dependency]`

To install a development dependency run  `yarn add [dependency] --dev`

## Development Server

Run `npx nx serve client` to start a client on development server at http://localhost:4200/api[http://localhost:4200/api].

Run `npx nx serve server` to start a Server on development server at http://localhost:3333/api[http://localhost:3333/api].

## Using Truffle

Run `truffle deploy --reset` to deploy a smart contract on client chain.

Run  `truffle test` to run your test script.

## Understand your workspace

Run `npx nx dev-graph` to see a diagram of dependencies.

## Build

Run `npm nx build [client/server]` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Working on the project

Edit the client files at `/apps/client`

Edit the server files at `/apps/server`