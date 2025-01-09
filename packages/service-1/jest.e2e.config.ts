import config from './jest.config';

const unitConfig = {
  ...config,
  testMatch: ['**/*.e2e-test.ts'], // Match only integration test files
};

module.exports = unitConfig;
