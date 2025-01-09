import { App } from 'aws-cdk-lib';
import { ServiceStack } from './service-stack';

const app = new App();

new ServiceStack(app, 'ServiceStack');
