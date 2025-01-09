import { runMediumLoadTest } from '../utility/load-processor';

describe('Bulky Function: Integration Test Suite', () => {
  test('Medium Load Test', async () => {
    await runMediumLoadTest();
  });
});
