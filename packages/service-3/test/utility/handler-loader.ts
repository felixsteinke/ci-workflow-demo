import { Context } from 'aws-lambda';

export type LambdaHandler = (event: unknown, context?: Context) => Promise<unknown>;

export function nodeJsLambdaHandler(handlerEntry: string): LambdaHandler {
  const nodeJsHandler = <{ handler: LambdaHandler }>require(handlerEntry);
  return nodeJsHandler.handler;
}
