import { Handler } from 'aws-lambda';

/**
 * Handler to forward the input event.
 *
 * Bundle size: ~1KB
 */
export const handler: Handler = async (event) => {
  console.log('Received event:', JSON.stringify(event));
  return event;
};
