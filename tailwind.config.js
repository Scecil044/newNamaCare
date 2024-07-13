/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "appGreen":"#30663B",
        "appLightgreen":"#48C660",
        "appYellow":"#FFA500"
      }
    },
  },
  plugins: [],
}

