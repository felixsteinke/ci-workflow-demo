import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { resolve as pathResolve } from 'path';
import { LambdaFunction } from '../lib/lambda-function';

export class ServiceStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const simpleDemoLambda1 = new LambdaFunction(this, 'SimpleDemoLambda1', {
      entry: pathResolve(__dirname, '../../src/lambda-handler/simple-function.ts'),
      timeout: Duration.seconds(15),
      memorySize: 128,
      environment: {},
    });

    const simpleDemoLambda2 = new LambdaFunction(this, 'SimpleDemoLambda2', {
      entry: pathResolve(__dirname, '../../src/lambda-handler/simple-function.ts'),
      timeout: Duration.seconds(15),
      memorySize: 128,
      environment: {},
    });
    simpleDemoLambda2.node.addDependency(simpleDemoLambda1);

    const bulkyDemoLambda1 = new LambdaFunction(this, 'BulkyDemoLambda1', {
      entry: pathResolve(__dirname, '../../src/lambda-handler/bulky-function-1.ts'),
      timeout: Duration.seconds(15),
      memorySize: 128,
      environment: {},
    });

    const bulkyDemoLambda2 = new LambdaFunction(this, 'BulkyDemoLambda2', {
      entry: pathResolve(__dirname, '../../src/lambda-handler/bulky-function-2.ts'),
      timeout: Duration.seconds(15),
      memorySize: 128,
      environment: {},
    });
    bulkyDemoLambda2.node.addDependency(bulkyDemoLambda1);

    const bulkyDemoLambda3 = new LambdaFunction(this, 'BulkyDemoLambda3', {
      entry: pathResolve(__dirname, '../../src/lambda-handler/bulky-function-3.ts'),
      timeout: Duration.seconds(15),
      memorySize: 128,
      environment: {},
    });
    bulkyDemoLambda3.node.addDependency(bulkyDemoLambda2);

    const bulkyDemoLambda4 = new LambdaFunction(this, 'BulkyDemoLambda4', {
      entry: pathResolve(__dirname, '../../src/lambda-handler/bulky-function-4.ts'),
      timeout: Duration.seconds(15),
      memorySize: 128,
      environment: {},
    });
    bulkyDemoLambda4.node.addDependency(bulkyDemoLambda3);

    const bulkyDemoLambda5 = new LambdaFunction(this, 'BulkyDemoLambda5', {
      entry: pathResolve(__dirname, '../../src/lambda-handler/bulky-function-5.ts'),
      timeout: Duration.seconds(15),
      memorySize: 128,
      environment: {},
    });
    bulkyDemoLambda5.node.addDependency(bulkyDemoLambda4);

    const bulkyDemoLambda6 = new LambdaFunction(this, 'BulkyDemoLambda6', {
      entry: pathResolve(__dirname, '../../src/lambda-handler/bulky-function-6.ts'),
      timeout: Duration.seconds(15),
      memorySize: 128,
      environment: {},
    });
    bulkyDemoLambda6.node.addDependency(bulkyDemoLambda5);

    const bulkyDemoLambda7 = new LambdaFunction(this, 'BulkyDemoLambda7', {
      entry: pathResolve(__dirname, '../../src/lambda-handler/bulky-function-7.ts'),
      timeout: Duration.seconds(15),
      memorySize: 128,
      environment: {},
    });
    bulkyDemoLambda7.node.addDependency(bulkyDemoLambda6);

    const bulkyDemoLambda8 = new LambdaFunction(this, 'BulkyDemoLambda8', {
      entry: pathResolve(__dirname, '../../src/lambda-handler/bulky-function-8.ts'),
      timeout: Duration.seconds(15),
      memorySize: 128,
      environment: {},
    });
    bulkyDemoLambda8.node.addDependency(bulkyDemoLambda7);

    const bulkyDemoLambda9 = new LambdaFunction(this, 'BulkyDemoLambda9', {
      entry: pathResolve(__dirname, '../../src/lambda-handler/bulky-function-9.ts'),
      timeout: Duration.seconds(15),
      memorySize: 128,
      environment: {},
    });
    bulkyDemoLambda9.node.addDependency(bulkyDemoLambda8);

    const bulkyDemoLambda10 = new LambdaFunction(this, 'BulkyDemoLambda10', {
      entry: pathResolve(__dirname, '../../src/lambda-handler/bulky-function-10.ts'),
      timeout: Duration.seconds(15),
      memorySize: 128,
      environment: {},
    });
    bulkyDemoLambda10.node.addDependency(bulkyDemoLambda9);

    const bulkyDemoLambda11 = new LambdaFunction(this, 'BulkyDemoLambda11', {
      entry: pathResolve(__dirname, '../../src/lambda-handler/bulky-function-11.ts'),
      timeout: Duration.seconds(15),
      memorySize: 128,
      environment: {},
    });
    bulkyDemoLambda11.node.addDependency(bulkyDemoLambda10);

    const bulkyDemoLambda12 = new LambdaFunction(this, 'BulkyDemoLambda12', {
      entry: pathResolve(__dirname, '../../src/lambda-handler/bulky-function-12.ts'),
      timeout: Duration.seconds(15),
      memorySize: 128,
      environment: {},
    });
    bulkyDemoLambda12.node.addDependency(bulkyDemoLambda11);

    const bulkyDemoLambda13 = new LambdaFunction(this, 'BulkyDemoLambda13', {
      entry: pathResolve(__dirname, '../../src/lambda-handler/bulky-function-13.ts'),
      timeout: Duration.seconds(15),
      memorySize: 128,
      environment: {},
    });
    bulkyDemoLambda13.node.addDependency(bulkyDemoLambda12);

    const bulkyDemoLambda14 = new LambdaFunction(this, 'BulkyDemoLambda14', {
      entry: pathResolve(__dirname, '../../src/lambda-handler/bulky-function-14.ts'),
      timeout: Duration.seconds(15),
      memorySize: 128,
      environment: {},
    });
    bulkyDemoLambda14.node.addDependency(bulkyDemoLambda13);

    const bulkyDemoLambda15 = new LambdaFunction(this, 'BulkyDemoLambda15', {
      entry: pathResolve(__dirname, '../../src/lambda-handler/bulky-function-15.ts'),
      timeout: Duration.seconds(15),
      memorySize: 128,
      environment: {},
    });
    bulkyDemoLambda15.node.addDependency(bulkyDemoLambda14);

    const bulkyDemoLambda16 = new LambdaFunction(this, 'BulkyDemoLambda16', {
      entry: pathResolve(__dirname, '../../src/lambda-handler/bulky-function-16.ts'),
      timeout: Duration.seconds(15),
      memorySize: 128,
      environment: {},
    });
    bulkyDemoLambda16.node.addDependency(bulkyDemoLambda15);

    const bulkyDemoLambda17 = new LambdaFunction(this, 'BulkyDemoLambda17', {
      entry: pathResolve(__dirname, '../../src/lambda-handler/bulky-function-17.ts'),
      timeout: Duration.seconds(15),
      memorySize: 128,
      environment: {},
    });
    bulkyDemoLambda17.node.addDependency(bulkyDemoLambda16);

    const bulkyDemoLambda18 = new LambdaFunction(this, 'BulkyDemoLambda18', {
      entry: pathResolve(__dirname, '../../src/lambda-handler/bulky-function-18.ts'),
      timeout: Duration.seconds(15),
      memorySize: 128,
      environment: {},
    });
    bulkyDemoLambda18.node.addDependency(bulkyDemoLambda17);

    const bulkyDemoLambda19 = new LambdaFunction(this, 'BulkyDemoLambda19', {
      entry: pathResolve(__dirname, '../../src/lambda-handler/bulky-function-19.ts'),
      timeout: Duration.seconds(15),
      memorySize: 128,
      environment: {},
    });
    bulkyDemoLambda19.node.addDependency(bulkyDemoLambda18);

    const bulkyDemoLambda20 = new LambdaFunction(this, 'BulkyDemoLambda20', {
      entry: pathResolve(__dirname, '../../src/lambda-handler/bulky-function-20.ts'),
      timeout: Duration.seconds(15),
      memorySize: 128,
      environment: {},
    });
    bulkyDemoLambda20.node.addDependency(bulkyDemoLambda19);
  }
}
