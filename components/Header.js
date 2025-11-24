import Link from 'next/link'
import { useCart } from './CartContext'

export default function Header() {
  const { cart } = useCart()
  const count = cart.reduce((s, p) => s + p.qty, 0)

  return (
    <header className="border-b border-gray-200 bg-white/90 backdrop-blur sticky top-0 z-20">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.jpg"
            alt="GO RIDE"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Navegación */}
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/" className="text-gray-700 hover:text-black">
            Inicio
          </Link>

          <Link href="/tienda" className="text-gray-700 hover:text-black">
            Tienda
          </Link>

          <Link href="/taller" className="text-gray-700 hover:text-black">
            Taller
          </Link>

          <Link
            href="/cafe"
            className="text-gray-700 hover:text-black hidden sm:inline"
          >
            Café
          </Link>
        </nav>

        {/* Acciones derecha: carrito + idioma */}
        <div className="flex items-center gap-3">
          {/* Carrito */}
          <Link
            href="/checkout"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-black"
          >
            <span>Carrito</span>
            <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-white text-[11px] font-semibold text-gray-900">
              {count}
            </span>
          </Link>

          {/* Selector de idioma */}
          <div className="hidden sm:inline-flex items-center gap-1 rounded-full border border-gray-300 px-2 py-1 text-[11px]">
            <button className="font-semibold text-gray-900">
              ES
            </button>
            <span className="h-3 w-px bg-gray-300" />
            <button className="text-gray-500 hover:text-gray-900">
              CAT
            </button>
          </div>
        </div>

      </div>
    </header>
  )
}
