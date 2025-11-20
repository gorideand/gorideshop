module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F6F3EE",
          dark: "#1F1F1F",
          accent: "#C2924B",
        },
      },
      fontFamily: {
        sans: ["var(--font-barlow)", "sans-serif"],
        title: ["var(--font-rubik)", "sans-serif"],
      },
    },
  },
  plugins: [],
}
