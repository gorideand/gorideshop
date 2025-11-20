import Header from '../components/Header'
import { useCart } from '../components/CartContext'
import { useState } from 'react'

export default function Checkout() {
  const { cart, clear } = useCart()
  const [loading, setLoading] = useState(false)

  const total = cart.reduce((s,p)=>s+p.qty*p.price,0)

  const handleCheckout = async () => {
    setLoading(true)
    // call api to create Stripe Checkout session
    const res = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cart })
    })
    const data = await res.json()
    if (data.url) {
      window.location = data.url
    } else {
      alert('Error al crear checkout')
    }
    setLoading(false)
  }

  return (
    <>
    <Header />
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Carrito</h1>
      <div className="mt-4">
        {cart.length === 0 && <p>Tu carrito está vacío.</p>}
        {cart.map(item => (
          <div key={item.id} className="flex items-center justify-between border-b py-3">
            <div>
              <div className="font-medium">{item.title}</div>
              <div className="text-sm text-gray-600">Cantidad: {item.qty}</div>
            </div>
            <div>${((item.price * item.qty)/100).toFixed(2)}</div>
          </div>
        ))}
        {cart.length > 0 && (
          <div className="mt-4">
            <div className="font-semibold">Total: ${(total/100).toFixed(2)}</div>
            <button onClick={handleCheckout} className="mt-3 px-4 py-2 bg-brown text-white rounded" disabled={loading}>
              {loading ? 'Redirigiendo...' : 'Pagar con Stripe'}
            </button>
            <button onClick={clear} className="mt-3 ml-3 px-4 py-2 border rounded">Vaciar</button>
          </div>
        )}
      </div>
    </main>
    </>
  )
}
