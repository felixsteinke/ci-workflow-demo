import { runHeavyLoadTest } from '../utility/load-processor';

describe('Service: E2E Test Suite', () => {
  test('Heavy Load Test 1', async () => {
    await runHeavyLoadTest();
  });
});
