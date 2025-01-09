import { NodejsFunction, NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import { LogGroup, RetentionDays } from 'aws-cdk-lib/aws-logs';
import { RemovalPolicy } from 'aws-cdk-lib';

type ExcludedFunctionProps = 'logRetention' | 'logGroup';

export interface LambdaFunctionProps extends Omit<NodejsFunctionProps, ExcludedFunctionProps> {}

export class LambdaFunction extends NodejsFunction {
  constructor(scope: Construct, id: string, props: LambdaFunctionProps) {
    // Managed Log Group with automatic removal
    const logGroup = new LogGroup(scope, `${id}LogGroup`, {
      removalPolicy: RemovalPolicy.DESTROY,
      retention: RetentionDays.ONE_WEEK,
    });
    super(scope, id, {
      // custom props
      ...props,
      // mandatory props
      logGroup: logGroup,
    });
    this.node.addDependency(logGroup);
  }
}
