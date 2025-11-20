# GO RIDE - Plantilla de tienda (Next.js + Tailwind)

**Qué contiene**
- Next.js (páginas) + TailwindCSS
- Carrito simple en localStorage
- Integración de ejemplo con Stripe Checkout (API route)
- Logo copiado a `public/logo.jpg` (proporcionado)

## Requisitos
- Node.js 18+ y npm
- Cuenta Stripe (para obtener claves)

## Instalación
```bash
cd goride-shop-template
npm install
npm run dev
```

## Variables de entorno
Crea un archivo `.env.local` con:
```
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
SUCCESS_URL=http://localhost:3000/?success=1
CANCEL_URL=http://localhost:3000/?canceled=1
```

## Notas de seguridad
- **Nunca** guardes claves secretas en el frontend.
- Stripe maneja los datos de tarjeta en su Checkout — tú no almacenas información sensible.
- Para producción, usa HTTPS y despliega en Vercel (recomendado) y configura las variables de entorno ahí.

## Personalización rápida
- Cambia colores en `styles/globals.css` o añade clases Tailwind.
- Reemplaza imágenes en `public/`.
- Conecta Supabase si quieres guardar pedidos o usuarios.

