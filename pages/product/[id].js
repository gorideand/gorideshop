import { useRouter } from 'next/router'
import Header from '../../components/Header'
import { useCart } from '../../components/CartContext'

const PRODUCTS = {
  bike1: { id: 'bike1', title: 'Juego de cambios pro', price: 24900, description: 'Componentes de alta gama' },
  helmet: { id: 'helmet', title: 'Casco aerodinámico', price: 12900, description: 'Protección y aerodinámica' },
  espresso: { id: 'espresso', title: 'Café de especialidad', price: 1299, description: '250g - Tostado medio' }
}

export default function ProductPage() {
  const { query } = useRouter()
  const id = query.id
  const product = PRODUCTS[id]
  const { add } = useCart()

  if (!product) return <div><Header /><main className='max-w-4xl mx-auto p-6'>Producto no encontrado</main></div>

  return (
    <>
    <Header />
    <main className="max-w-4xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="h-80 bg-gray-100 flex items-center justify-center text-gray-400">Imagen</div>
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="mt-3 text-gray-600">{product.description}</p>
          <p className="mt-4 text-xl font-semibold">${(product.price/100).toFixed(2)}</p>
          <div className="mt-6">
            <button onClick={() => add(product)} className="px-4 py-2 bg-brown text-white rounded">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}
