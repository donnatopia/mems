/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",
  "./screens/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: '#081D21',
        font: {
          1: '#CCCED6',
          2: '#BAB1B1',
          3: '#86939E',
        },
        theme: {
          1: '#0097B2',
          2: '#0CC0DF',
        },
        primary: '#0097B2',
        secondary: '#0CC0DF',
      }
    },
  },
  plugins: [],
}

