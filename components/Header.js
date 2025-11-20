import Link from 'next/link'
import { useCart } from './CartContext'

export default function Header() {
  const { cart } = useCart()
  const count = cart.reduce((s, p) => s + p.qty, 0)

  return (
    <header className="border-b py-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Go Ride" style={{ height: 48 }} />
          <span className="font-semibold text-xl">GO RIDE</span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/" className="text-sm text-gray-600">
            Tienda
          </Link>
          <Link href="/taller" className="text-sm text-gray-600">
            Taller
          </Link>
          <Link href="/cafe" className="text-sm text-gray-600">
            Café
          </Link>
          <Link
            href="/checkout"
            className="text-sm bg-gray-800 text-white px-3 py-2 rounded"
          >
            Carrito ({count})
          </Link>
        </nav>
      </div>
    </header>
  )
}
