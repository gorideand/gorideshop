import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import { supabase } from '../lib/supabase'

export async function getServerSideProps() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('visible', true)              // solo productos visibles
    .order('name_web', { ascending: true })
    .limit(6)                         // 6 destacados

  if (error) {
    console.error('Supabase error en Home:', error)
    return { props: { products: [] } }
  }

  return { props: { products: data } }
}

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>GO RIDE - Bicicletería &amp; Café</title>
      </Head>

      <div className="min-h-screen bg-brand-bg text-brand-dark">
        <Header />

        <main className="max-w-5xl mx-auto px-4 pb-12 pt-6">
          {/* HERO */}
          <section className="grid gap-8 md:grid-cols-[1.4fr,1fr] items-center">
            <div>
              <p className="text-[12px] uppercase tracking-[0.25em] text-gray-500">
                Taller • Tienda • Café
              </p>

              <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-title tracking-tight leading-tight">
                Tu lugar para{' '}
                <span className="text-brand-accent">
                  pedalear, reparar y desconectar
                </span>{' '}
                en la ciudad.
              </h1>

              <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-xl">
                Ajustes rápidos, puestas a punto completas y buen café de
                especialidad mientras esperás. Reservá turno en el taller o
                pedí recambios desde la tienda online.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/tienda"
                  className="w-full sm:w-auto inline-flex justify-center rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-black"
                >
                  Ver productos
                </Link>

                <Link
                  href="/taller"
                  className="w-full sm:w-auto inline-flex justify-center rounded-full border border-gray-400 px-5 py-2.5 text-sm font-medium text-gray-800 hover:border-gray-800 hover:bg-white/40"
                >
                  Reservar taller
                </Link>
              </div>

              <p className="mt-4 text-[12px] uppercase tracking-[0.2em] text-gray-500">
                Reparaciones · Accesorios · Café de especialidad
              </p>
            </div>

            {/* Tarjeta taller */}
            <div className="relative">
              <div className="rounded-3xl bg-white shadow-sm border border-gray-100 p-5 flex flex-col gap-3">
                <p className="text-[12px] uppercase tracking-[0.25em] text-gray-500">
                  Taller GO RIDE
                </p>
                <p className="text-sm md:text-base font-medium">
                  Turnos express desde{' '}
                  <span className="text-brand-accent">24h</span>.
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  Ajuste de cambios, frenos, centrado de ruedas y service
                  completo para bicis urbanas y gravel.
                </p>

                <div className="mt-2 flex items-center justify-between text-xs md:text-sm text-gray-600">
                  <span>Lunes a sábado</span>
                  <span>10:00 – 19:30</span>
                </div>

                <div className="mt-3 rounded-2xl bg-gray-100 h-32 flex items-center justify-center text-[11px] text-gray-500">
                  Aquí luego podemos poner una foto real del local.
                </div>
              </div>
            </div>
          </section>

          {/* PRODUCTOS DESTACADOS */}
          <section className="mt-10">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-lg md:text-xl font-title font-semibold">
                Productos destacados
              </h2>
              <span className="text-xs md:text-sm text-gray-500">
                Online &amp; en el local
              </span>
            </div>

            {products.length === 0 ? (
              <p className="mt-4 text-sm text-gray-500">
                Encara no hi ha productes disponibles. 🙈
              </p>
            ) : (
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                {products.map((p) => (
                  <article
                    key={p.id}
                    className="group rounded-2xl bg-white/80 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden"
                  >
                    <div className="h-32 bg-gray-100 flex items-center justify-center text-[12px] text-gray-500">
                      {p.image_url ? (
                        <img
                          src={p.image_url}
                          alt={p.name_web || p.name_holded}
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        'Foto producto'
                      )}
                    </div>

                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="text-base font-medium group-hover:text-brand-accent line-clamp-2">
                        {p.name_web || p.name_holded}
                      </h3>

                      <p className="mt-2 text-sm md:text-base font-semibold">
                        {typeof p.price === 'number'
                          ? `€${p.price.toFixed(2)}`
                          : ''}
                      </p>

                      <div className="mt-auto pt-3 flex items-center justify-between text-xs md:text-sm">
                        <Link
                          href={`/product/${p.id}`}
                          className="font-medium text-blue-600 hover:underline"
                        >
                          Ver detalle
                        </Link>
                        <span className="text-gray-500">
                          {p.stock > 0 ? 'En stock' : 'Sin stock'}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </>
  )
}
