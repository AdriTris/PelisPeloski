/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FE53BB', //rosado claro
        secondary: '#2E1371', //morado oscuro
        terciary: '#B6116B', //rosado oscuro
        cuarternary: '#09FBD3', //celeste
        dark: '#130B2B',
      },
      fontFamily: {
        'body': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'detalle-pelicula-desktop': "url('./img/harry-potter-desktop.png')",
        'search-button': "url('./icons/lupa.png')",
      }
    },
  },
  plugins: [],
}

