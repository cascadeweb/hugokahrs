/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'name' : 'value'
      },
      fontFamily: {
        'name' : 'value'
      }
    },
    daisyui: {
      themes: ["light"],
    },
  },
  plugins: [require("daisyui")],
}

