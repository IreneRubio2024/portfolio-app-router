module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // Asegúrate de que Tailwind esté revisando estos archivos
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mattone: ['Mattone', 'sans-serif', 'futura'],  // Agregar tu fuente personalizada
      },
    },
  },
  plugins: [],
}
