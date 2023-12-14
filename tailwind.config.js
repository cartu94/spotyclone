/** @type {import("tailwindcss").Config} */
  export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        inactive: "#A7A7A7",
        active: "#FFFFFF",
        background: "#121212",
        details: "#1AA7C6",
        "hover-details": "14BADF",
      }
    },
  },
  plugins: [],
}
