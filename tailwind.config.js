/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tampilan-awal': "url('/images/background.jpg')",
      }
    },
  },
  plugins: [],
}

