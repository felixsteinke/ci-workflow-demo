import { nodeJsLambdaHandler } from './handler-loader';
import { resolve as pathResolve } from 'path';

const handlerPath = pathResolve(__dirname, '../../src/lambda-handler/bulky-function.ts');

describe('Bulky Function: Test Suite', () => {
  test('Result is defined', async () => {
    // GIVEN
    const handler = nodeJsLambdaHandler(handlerPath);
    // WHEN
    const result = await handler({
      param: 'test',
    });
    // THEN
    expect(result).toBeDefined();
  });
});
