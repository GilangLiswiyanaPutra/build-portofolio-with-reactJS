/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',

        'sm': '576px',
  
        'md': '960px',
        
        'lg': '1440px',
      },
      colors: {
        'blues' : '#00ADB5',

        'darks' : '#222831',
      }
    },
  },
  plugins: [],
}