import { App } from 'aws-cdk-lib';
import { ServiceStack } from '../../cdk/app/service-stack';
import { Template } from 'aws-cdk-lib/assertions';

describe('Service 1: E2E Test Suite', () => {
  test('App Smoke Test', () => {
    const app = new App();
    // WHEN
    const stack = new ServiceStack(app, 'ServiceStack');
    // THEN
    const stackTemplate = Template.fromStack(stack);
    expect(stackTemplate).toBeDefined();
  });
});
