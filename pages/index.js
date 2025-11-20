import Head from 'next/head'
import Header from '../components/Header'
import Link from 'next/link'

const PRODUCTS = [
  { id: 'bike1', title: 'Juego de cambios pro', price: 24900, image: null },
  { id: 'helmet', title: 'Casco aerodinámico', price: 12900, image: null },
  { id: 'espresso', title: 'Café de especialidad - paquete 250g', price: 1299, image: null },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>GO RIDE - Bicicletería & Café</title>
      </Head>

      <Header />

      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* HERO / PORTADA */}
        <section className="text-center sm:text-left">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500">
            Bicicletería • Taller • Café
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Pedaleá, arreglá y tomá café en el mismo lugar.
          </h1>

          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            GO RIDE es tu punto de encuentro ciclista: taller, tienda y café de
            especialidad en un solo espacio.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-start">
            <Link
              href="/"
              className="w-full sm:w-auto px-4 py-2 rounded-md bg-gray-900 text-white text-center text-sm font-medium"
            >
              Ver tienda
            </Link>

            <Link
              href="/taller"
              className="w-full sm:w-auto px-4 py-2 rounded-md border border-gray-300 text-sm text-gray-800 text-center"
            >
              Reservar taller
            </Link>
          </div>
        </section>

        {/* LISTA DE PRODUCTOS */}
        <section className="mt-10">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-lg font-semibold">Productos destacados</h2>
            <span className="text-xs text-gray-500">
              Online & en el local
            </span>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {PRODUCTS.map((p) => (
              <div
                key={p.id}
                className="rounded-lg border p-4 flex flex-col"
              >
                <div className="h-32 sm:h-40 bg-gray-100 flex items-center justify-center text-xs text-gray-400 rounded-md">
                  Imagen
                </div>

                <h3 className="mt-3 text-sm font-medium">
                  {p.title}
                </h3>

                <p className="mt-1 text-sm text-gray-700">
                  €{(p.price / 100).toFixed(2)}
                </p>

                <Link
                  href={`/product/${p.id}`}
                  className="mt-3 text-sm font-medium text-blue-600"
                >
                  Ver
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
