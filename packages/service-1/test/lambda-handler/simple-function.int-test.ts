import { nodeJsLambdaHandler } from './handler-loader';
import { resolve as pathResolve } from 'path';

const handlerPath = pathResolve(__dirname, '../../src/lambda-handler/simple-function.ts');

describe('Simple Function: Integration Test Suite', () => {
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
