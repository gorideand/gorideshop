import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem('goride_cart')
    if (saved) setCart(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem('goride_cart', JSON.stringify(cart))
  }, [cart])

  const add = (product) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id)
      if (existing) return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + 1 } : p)
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const remove = (id) => setCart(prev => prev.filter(p => p.id !== id))
  const clear = () => setCart([])

  return <CartContext.Provider value={{ cart, add, remove, clear }}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
