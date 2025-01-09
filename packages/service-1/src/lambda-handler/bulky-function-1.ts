import { Handler } from 'aws-lambda';
import { HttpIamAuthorizer } from 'aws-cdk-lib/aws-apigatewayv2-authorizers';

/**
 * Handler to forward the input event.
 *
 * Bundle size: ~12MB
 */
export const handler: Handler = async (event) => {
  console.log('Received event:', JSON.stringify(event));

  // CDK dependency results in a huge bundle size
  const authorizer = new HttpIamAuthorizer();

  console.log('Run HTTP IAM Authorizer:', authorizer.authorizationType);
  return event;
};
