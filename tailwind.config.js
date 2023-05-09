/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light': '#F1F6F9',
        'blue': '#394867',
        'dark-blue': '#212A3E',
        'gray': '#9BA4B5'
      }
    },
    container: {
      center: true  
    }
  },
  plugins: [],
}