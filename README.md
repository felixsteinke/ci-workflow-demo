# CI Workflow Demo

This repository contains a demo project for a CI workflow. 
The project is a monorepo with multiple services. 
Each service contains business logic, tests, and infrastructure code.

### Technology

- Programming Language: [TypeScript](https://www.typescriptlang.org/docs/)
- Infrastructure: [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html)
- Testing Framework: [Jest](https://jestjs.io/docs/getting-started)
- Code Quality: [ESLint](https://eslint.org/docs/latest/use/getting-started)
- Code Formatting: [Prettier](https://prettier.io/docs/en/install.html)
- CI/CD: [GitHub Actions](https://docs.github.com/en/actions)

### System Requirements

- Node.js v20+: [Download](https://nodejs.org/en/download/)
   - Test Command: `node -v`
- NPM v10+: Gets installed with Node.js
   - Test Command: `npm -v`
- Recommended IDE:
   - Visual Studio Code: [Download](https://code.visualstudio.com/download)
   - IntelliJ IDEA: [Download](https://www.jetbrains.com/idea/download/)

### Scripts

> All scripts can get executed from the root directory.

```
npm install

npm run build
npm run lint
npm run test
npm run test:int
npm run test:e2e
npm run deploy
```
### Mono-Repo Packages

```
|-----------|      |-----------|      |-----------|
| Service 1 |      | Service 1 |      | Service 1 |
|-----------|      |-----------|      |-----------|
```

__Description:__

- [Service 1](./packages/service-1): a simple & independent service with business logic, tests, and infrastructure code
- [Service 2](./packages/service-2): identical to Service 1
- [Service 3](./packages/service-3): identical to Service 1

## CI/CD Pipelines

### Simple CI Pipeline

__Workflow YAML__: [Simple CI Pipeline](./.github/workflows/simple-ci.yml)

- Build & Lint
  - Checkout code
  - Install Node.js (including NPM)
  - Prepare NPM Cache
  - Install Dependencies
  - Run NPM Scripts
- Test
  - Checkout code
  - Install Node.js (including NPM)
  - Prepare NPM Cache
  - Install Dependencies
  - Run NPM Script
- Deploy
  - Checkout code
  - Install Node.js (including NPM)
  - Prepare NPM Cache
  - Install Dependencies
  - Run NPM Script

## Service X

### Scripts

> All npm scripts can get executed from the within the package directories.

```
npm install
cd ./packages/service-X

npm run build
npm run lint
npm run test
npm run test:int
npm run test:e2e
npm run deploy
```

### Package Structure

The content of each service package is identical.

It is design to represent a microservice with realistic load on build, test, and deployment.
The code itself is simple and does not contain any business logic. It just produces load for the CI/CD pipeline.

```
packages
  |--- service-X
        |--- cdk                --> aws cdk code (infrastructure)
        |--- src                --> source code (business logic)
        |--- test               --> jest tests: unit, integration, e2e
        |--- cdk.json           --> aws cdk configuration
        |--- package.json       --> service dependencies and scripts
        |--- tsconfig.json      --> typescript configuration

```


