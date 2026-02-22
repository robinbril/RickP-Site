/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#050505',
          rich: '#0A0A0A',
          elevated: '#121212',
        },
        red: {
          primary: '#C41E2A',
          bright: '#E63946',
          glow: 'rgba(196, 30, 42, 0.15)',
        },
        white: {
          DEFAULT: '#EAEAEA',
          muted: '#888890',
        }
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
