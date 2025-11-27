import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import { supabase } from '../lib/supabase'

// Cargamos los productos desde Supabase en el servidor
export async function getServerSideProps() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('visible', true) // solo productos marcados como visibles
    .order('name_web', { ascending: true })

  if (error) {
    console.error('Error cargando productos en /tienda:', error)
    return { props: { products: [] } }
  }

  return {
    props: {
      products: data || [],
    },
  }
}

export default function TiendaPage({ products }) {
  return (
    <>
      <Head>
        <title>Tienda | GO RIDE</title>
      </Head>

      <div className="min-h-screen bg-brand-bg text-brand-dark">
        <Header />

        <main className="max-w-5xl mx-auto px-4 pb-12 pt-6">
          <h1 className="text-2xl md:text-3xl font-title font-semibold">
            Tienda
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Repuestos, accesorios i material ciclista disponible a GO RIDE.
          </p>

          {products.length === 0 ? (
            <p className="mt-6 text-sm text-gray-500">
              Encara no hi ha productes disponibles. 🙈
            </p>
          ) : (
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
              {products.map((p) => {
                const name = p.name_web || p.name_holded

                return (
                  <Link
                    key={p.id}
                    href={`/product/${p.id}`}
                    className="group rounded-2xl bg-white/80 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden cursor-pointer"
                  >
                    <div className="h-32 bg-gray-100 flex items-center justify-center text-[12px] text-gray-500">
                      {p.image_url ? (
                        <img
                          src={p.image_url}
                          alt={name}
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        'Foto producte'
                      )}
                    </div>

                    <div className="p-4 flex flex-col flex-1">
                      <h2 className="text-base font-medium group-hover:text-brand-accent line-clamp-2">
                        {name}
                      </h2>

                      <p className="mt-2 text-sm md:text-base font-semibold">
                        {typeof p.price === 'number'
                          ? `€${p.price.toFixed(2)}`
                          : ''}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {p.stock > 0 ? 'En stock' : 'Sense stock'}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </main>
      </div>
    </>
  )
}
