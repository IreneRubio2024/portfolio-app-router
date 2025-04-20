/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        mattone: ['Mattone', 'serif'], 
      },
      keyframes: {
        levitate: {
          '0%': {
            transform: 'translateY(0) rotate(0deg)',
          },
          '25%': {
            transform: 'translateY(-10px) rotate(-2deg)',
          },
          '50%': {
            transform: 'translateY(0) rotate(0deg)',
          },
          '75%': {
            transform: 'translateY(10px) rotate(2deg)',
          },
          '100%': {
            transform: 'translateY(0) rotate(0deg)',
          },
        },
      },
      animation: {
        levitate: 'levitate 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};