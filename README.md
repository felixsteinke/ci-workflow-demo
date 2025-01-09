# GitHub CI Workflows

## Basic Workflow

| Build            | Test         | Deploy      |
|------------------|--------------|-------------|
| eg. NodeJS (TS)  | eg. Jest     | ... to DEV  |
| eg. Maven (Java) | eg. JUnit    | ... to INT  |
| eg. Grade (Java) | eg. Selenium | ... to PROD |

## Advanced Workflow

| Build            | Lint       | Test         | Quality              | Deploy      |
|------------------|------------|--------------|----------------------|-------------|
| eg. NodeJS (TS)  | eg. EsLint | eg. Jest     | eg. Sonarqube        | ... to DEV  |
| eg. Maven (Java) |            | eg. JUnit    | eg. FOSS Compliance  | ... to INT  |
| eg. Grade (Java) |            | eg. Selenium | eg. Dependency-Check | ... to PROD |
