/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tampilan-awal': "url('/air-quality-monitoring/images/background.jpg')",
      }
    },
  },
  plugins: [],
}

