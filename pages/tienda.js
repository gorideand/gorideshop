import { useMemo, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
import products from "../data/products.json";

export default function TiendaPage() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 24;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter((p) => {
      const name = (p.name || "").toLowerCase();
      const tags = (p.tags || "").toLowerCase();
      const desc = (p.description || "").toLowerCase();
      return name.includes(q) || tags.includes(q) || desc.includes(q);
    });
  }, [query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * perPage;
  const paginated = filtered.slice(start, start + perPage);

  function goTo(newPage) {
    setPage(newPage);
    // sube arriba cuando cambias de página
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Head>
        <title>Tienda | GO RIDE</title>
      </Head>

      <div className="min-h-screen bg-brand-bg text-brand-dark">
        <Header />

        <main className="max-w-6xl mx-auto px-4 pb-12 pt-6">
          {/* header tienda */}
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-title font-semibold">
                Tienda online
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Material de bicicletería + nutrición. Stock real desde Holded.
              </p>
            </div>

            {/* buscador */}
            <div className="w-full md:w-96">
              <label className="text-xs uppercase tracking-wider text-gray-500">
                Buscar producto
              </label>
              <input
                value={query}
                onChange={(e) => { setQuery(e.target.value); setPage(1); }}
                placeholder="Ej: casco, shimano, barrita..."
                className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-900"
              />
            </div>
          </div>

          {/* contador */}
          <div className="mt-4 text-xs md:text-sm text-gray-500">
            Mostrando {paginated.length} de {filtered.length} productos
          </div>

          {/* grid productos */}
          <section className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {paginated.map((p) => (
              <article
                key={p.id}
                className="group rounded-2xl bg-white/80 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden"
              >
                <div className="h-36 bg-gray-100 flex items-center justify-center text-[12px] text-gray-500">
                  Foto producto
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-sm md:text-base font-medium group-hover:text-brand-accent line-clamp-2">
                    {p.name}
                  </h3>

                  {p.description && (
                    <p className="mt-1 text-xs text-gray-600 line-clamp-2">
                      {p.description}
                    </p>
                  )}

                  <p className="mt-2 text-sm md:text-base font-semibold">
                    €{Number(p.price || 0).toFixed(2)}
                  </p>

                  <div className="mt-auto pt-3 flex items-center justify-between text-xs md:text-sm">
                    <Link
                      href={`/product/${p.id}`}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Ver detalle
                    </Link>

                    <span className={`${p.stock === 0 ? "text-red-500" : "text-gray-500"}`}>
                      {p.stock === 0 ? "Sin stock" : "En stock"}
                    </span>
                  </div>
                </div>
              </article>
            ))}

            {paginated.length === 0 && (
              <div className="col-span-full text-center text-sm text-gray-600 py-10">
                No se encontraron productos con “{query}”.
              </div>
            )}
          </section>

          {/* paginación */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm">
            <button
              onClick={() => goTo(Math.max(1, safePage - 1))}
              disabled={safePage === 1}
              className="px-3 py-1.5 rounded-full border border-gray-300 bg-white disabled:opacity-40"
            >
              ← Anterior
            </button>

            <span className="px-3 py-1.5 text-gray-700">
              Página {safePage} de {totalPages}
            </span>

            <button
              onClick={() => goTo(Math.min(totalPages, safePage + 1))}
              disabled={safePage === totalPages}
              className="px-3 py-1.5 rounded-full border border-gray-300 bg-white disabled:opacity-40"
            >
              Siguiente →
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
