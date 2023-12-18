/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        inactive: "#A7A7A7",
        active: "#FFFFFF",
        background: "#121212",
        background2: "#232323",
        background3: "#353535",
        details: "#1AA7C6",
        "hover-details": "#14BADF",
      },
      keyframes: {
        "button-fade-in": {
          "0%": {
            opacity: 0,
            transform: "translateY(100%)",
          },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "button-fade-in": "button-fade-in 300ms ease-in-out forwards",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      gridTemplateColumns: {
        "my-2": "repeat(2, minmax(220px, 1fr))",
        "my-3": "repeat(3, minmax(220px, 1fr))",
      },
      aspectRatio: {
        '2/3': '2/3',
        '1/1.5': '1/1.5',
      },
    },
  },
  plugins: [],
};
