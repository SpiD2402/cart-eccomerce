/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arima: ['Arima', 'sans-serif'], // Añadir Arima
        gowun: ['Gowun Batang', 'serif'], // Añadir Gowun Batang
      },
    },
  },
  plugins: [],
}

