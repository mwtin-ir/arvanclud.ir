/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customCyan: 'rgb(0,167,167)',
      },
    },
  },
  plugins: [],
}