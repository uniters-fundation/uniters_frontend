import type { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../lib/paypal';
import paypal from '@paypal/checkout-server-sdk';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const PaypalClient = client()
  const request = new paypal.orders.OrdersCreateRequest()
  request.headers['Prefer'] = 'return=representation';

  const {body: {data: {ammount, category}}} = req;


  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'USD',
          value: ammount,
    
        },
        description: `Payment done for ${category}`
      },
    ],
  })

  const response = await PaypalClient.execute(request)
  if (response.statusCode !== 201) {
    res.status(500)
  }

  res.json({ orderID: response.result.id })
}