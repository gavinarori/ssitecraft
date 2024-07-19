import checkoutNodeJssdk from '@paypal/checkout-server-sdk';

const configureEnvironment = (): checkoutNodeJssdk.core.LiveEnvironment | checkoutNodeJssdk.core.SandboxEnvironment => {
  const clientId: string = process.env.PAYPAL_CLIENT_ID!;
  const clientSecret: string = process.env.PAYPAL_CLIENT_SECRET!;

  return process.env.NODE_ENV === 'production'
    ? new checkoutNodeJssdk.core.LiveEnvironment(clientId, clientSecret)
    : new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);
};

const client = (): checkoutNodeJssdk.core.PayPalHttpClient => {
  return new checkoutNodeJssdk.core.PayPalHttpClient(configureEnvironment());
};

export default client;
