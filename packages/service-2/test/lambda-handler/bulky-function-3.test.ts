import { runLightLoadTest } from '../utility/load-processor';

describe('Bulky Function: Test Suite', () => {
  test('Light Load Test', async () => {
    await runLightLoadTest();
  });
});
