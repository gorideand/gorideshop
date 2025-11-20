// Nota: Este archivo es un ejemplo. Debes configurar STRIPE_SECRET_KEY en tus variables de entorno.
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { items } = req.body
  try {
    const line_items = items.map(i => ({
      price_data: {
        currency: 'usd',
        product_data: { name: i.title },
        unit_amount: i.price
      },
      quantity: i.qty
    }))
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: process.env.SUCCESS_URL || 'http://localhost:3000/?success=1',
      cancel_url: process.env.CANCEL_URL || 'http://localhost:3000/?canceled=1'
    })
    res.json({ url: session.url })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error creating Stripe session' })
  }
}
