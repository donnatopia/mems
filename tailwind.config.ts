/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",
  "./screens/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0097B2',
        secondary: '#0CC0DF',
        tertiary: '#5CE1E6',
        dark: {
          1: '#020617', // slate-950
          2: '#1E293B', // slate-800
        },
      }
    },
  },
  plugins: [],
}

