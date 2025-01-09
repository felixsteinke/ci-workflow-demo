import config from './jest.config';

const unitConfig = {
  ...config,
  testMatch: ['**/*.int-test.ts'], // Match only integration test files
};

module.exports = unitConfig;
