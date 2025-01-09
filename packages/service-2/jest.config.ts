import type { Config } from 'jest';

const config: Config = {
  displayName: 'service-2',
  coverageDirectory: '../../coverage/packages/service-2',
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  // match all test files to run in IDE and override for CLI tests
  testMatch: ['**/*.test.ts', '**/*.int-test.ts', '**/*.e2e-test.ts'],
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.test.json' }],
  },
  moduleFileExtensions: ['ts', 'js'],
  coverageReporters: [['lcov', { projectRoot: '../../' }]],
  verbose: true,
};

export default config;
