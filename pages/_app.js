import "../styles/globals.css"
import { Rubik, Barlow } from "next/font/google"
import { CartProvider } from "../components/CartContext"

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
})

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
})

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <main className={`${rubik.variable} ${barlow.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </CartProvider>
  )
}
