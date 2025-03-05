/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        'blue': {
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e3a8a'
        },
        'green': {
          600: '#16a34a',
          700: '#15803d'
        },
        'red': {
          600: '#dc2626',
          700: '#b91c1c'
        },
        'gray': {
          50: '#f9fafb'
        }
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
