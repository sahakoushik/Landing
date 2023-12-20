/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        "200" : '200px',
        "300" : '300px',
        "400" : '400px',
        "500" : '500px',
      }
    },
  },
  plugins: [],
}

