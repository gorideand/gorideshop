import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header'
import { supabase } from '../../lib/supabase'

export async function getServerSideProps({ params }) {
  const { id } = params

  const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .maybeSingle()

  if (error) {
    console.error('Error cargando producto:', error)
    return { notFound: true }
  }

  if (!product) {
    return { notFound: true }
  }

  return {
    props: {
      product,
    },
  }
}

export default function ProductPage({ product }) {
  const name = product.name_web || product.name_holded

  return (
    <>
      <Head>
        <title>{name} | GO RIDE</title>
      </Head>

      <div className="min-h-screen bg-brand-bg text-brand-dark">
        <Header />

        <main className="max-w-5xl mx-auto px-4 pb-12 pt-6">
          <Link
            href="/tienda"
            className="text-xs text-gray-500 hover:text-gray-800"
          >
            ← Volver a la tienda
          </Link>

          <section className="mt-4 grid gap-8 md:grid-cols-[1.1fr,1fr] items-start">
            {/* Imagen */}
            <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-4 flex items-center justify-center min-h-[240px]">
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={name}
                  className="max-h-64 w-auto object-contain"
                />
              ) : (
                <span className="text-xs text-gray-500">Sin imagen</span>
              )}
            </div>

            {/* Info */}
            <div>
              <h1 className="text-2xl md:text-3xl font-title font-semibold">
                {name}
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Ref: <span className="font-mono text-[11px]">{product.id}</span>
              </p>

              <p className="mt-4 text-xl font-semibold">
                {typeof product.price === 'number'
                  ? `€${product.price.toFixed(2)}`
                  : ''}
              </p>

              <p className="mt-2 text-sm text-gray-600">
                {product.stock > 0 ? 'En stock' : 'Sin stock'}
              </p>

              <div className="mt-4 text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {product.description ||
                  'Encara no hem afegit la descripció d’aquest producte.'}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
