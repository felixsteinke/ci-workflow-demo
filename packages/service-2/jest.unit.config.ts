import config from './jest.config';

const unitConfig = {
  ...config,
  testMatch: ['**/*.test.ts'], // Match only unit test files
};

module.exports = unitConfig;
