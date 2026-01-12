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

- Node.js v24+: [Download](https://nodejs.org/en/download/)
    - Test Command: `node -v`
- NPM v11+: Gets installed with Node.js
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
| Service 1 |      | Service 2 |      | Service 3 |
|-----------|      |-----------|      |-----------|
```

__Description:__

Each service is independent with business logic, tests, and infrastructure code.
The content itself is identical.

- [Service 1](./packages/service-1): has the lowest load
- [Service 2](./packages/service-2): has medium load
- [Service 3](./packages/service-3): is the heaviest load

## CI/CD Pipelines

> Quick-Link: [GitHub Actions Syntax](https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions)

All pipelines are created with a manual trigger:

![Manual Trigger](./.images/manual-ci-trigger.png)

### Simple CI Pipeline

__Workflow YAML__: [Simple CI Pipeline](./.github/workflows/simple-ci.yml)

<details>
<summary>Click to expand job descriptions...</summary>

- Build Job
    - Checkout code
    - Install Node.js (including NPM)
    - Prepare NPM Cache
    - Install Dependencies
    - Run NPM Script
- Test Job
    - Checkout code
    - Install Node.js (including NPM)
    - Prepare NPM Cache
    - Install Dependencies
    - Run NPM Script
- Deploy Job
    - Checkout code
    - Install Node.js (including NPM)
    - Prepare NPM Cache
    - Install Dependencies
    - Run NPM Script

</details>

### Eco CI Demo Pipeline

> See [github.com/eco-ci](https://github.com/green-coding-solutions/eco-ci-energy-estimation) for more information.

__Workflow YAML__: [Eco CI Demo Pipeline](./.github/workflows/eco-ci-demo.yml)

<details>
<summary>Click to expand job descriptions...</summary>

- Eco-CI Job
    - Eco-CI Initialization
    - Install Node.js (including NPM)
    - Eco-CI Measurement
    - Eco-CI Results

</details>

### Advanced CI Pipeline

__Workflow YAML__: [Advanced CI Pipeline](./.github/workflows/advanced-ci.yml)

<details>
<summary>Click to expand job descriptions...</summary>

- Build Job
    - Checkout code
    - Install Node.js (including NPM)
    - Prepare NPM Cache
    - Install Dependencies
    - Run NPM Script
- Test Job
    - Checkout code
    - Install Node.js (including NPM)
    - Prepare NPM Cache
    - Install Dependencies
    - Run NPM Script
- Lint Job
    - Checkout code
    - Install Node.js (including NPM)
    - Prepare NPM Cache
    - Install Dependencies
    - Run NPM Script
- Security Scan Job
    - Checkout code
    - Initialize CodeQL
    - Perform CodeQL Analysis
- Deploy Job
    - Checkout code
    - Install Node.js (including NPM)
    - Prepare NPM Cache
    - Install Dependencies
    - Run NPM Script

</details>

### Mono Repo CI Pipeline

__Workflow YAML__: [Mono Repo CI Pipeline](./.github/workflows/mono-repo-ci.yml)

<details>
<summary>Click to expand job descriptions...</summary>

- Build Job
    - Checkout code
    - Set up Node.js
    - Install dependencies
    - Build each service
- Test Job
    - Checkout code
    - Set up Node.js
    - Install dependencies
    - Run tests for each service
- Lint Job
    - Checkout code
    - Set up Node.js
    - Install dependencies
    - Run lint for each service
- Security Scan Job
    - Checkout code
    - Initialize CodeQL
    - Perform CodeQL Analysis
- Deploy Job
    - Checkout code
    - Set up Node.js
    - Install dependencies
    - Deploy each service

</details>

### Canary Deployment Pipeline

__Workflow YAML__: [Canary Deployment Pipeline](./.github/workflows/canary-deployment.yml)

> Prerequisite: Setup of environment `deployment-approval` with enabled __Required reviewers__

<details>
<summary>Click to expand job descriptions...</summary>

- Deployment Job
    - Checkout code
    - Deploy Artifact
- Deployment Evaluation (optional if __enabled__)
    - Is pending until the manual approval through the `deployment-approval` environment
- Continue Deployment Job
    - Update Environment to new Version if __approved__
- Rollback Deployment Job
    - Rollback Environment to old Version if __rejected__

</details>

## Service X

### Scripts

> All npm scripts can get executed from within the package directories.

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


