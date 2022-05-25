// Per instruction on: https://dev.to/iandjx/paypal-integration-using-nextjs-and-prisma-21i8
import checkoutNodeJssdk from '@paypal/checkout-server-sdk';


const configureEnvironment = function () {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if(!clientId || !clientSecret){
    throw new Error('no paypal data provided')
  }

  return process.env.VERCEL_ENV === 'production'
    ? new checkoutNodeJssdk.core.LiveEnvironment(clientId, clientSecret)
    : new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret)
}

const client = function () {
  return new checkoutNodeJssdk.core.PayPalHttpClient(configureEnvironment())
}

export default client;