/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        poop: {
          50: '#faf5f0',
          100: '#f5ebe0',
          200: '#e8d5c4',
          300: '#d4b5a0',
          400: '#b8906b',
          500: '#a0785a',
          600: '#8a6248',
          700: '#6d4f3b',
          800: '#5a4432',
          900: '#4a372b',
        },
        earth: {
          50: '#fdfbf8',
          100: '#f5ede3',
          200: '#eadcc9',
          300: '#dac4aa',
          400: '#c4a783',
          500: '#b39369',
          600: '#a08156',
          700: '#896d47',
          800: '#73593c',
          900: '#5e4932',
        },
        leaf: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#145231',
        },
      },
    },
  },
  plugins: [],
}
