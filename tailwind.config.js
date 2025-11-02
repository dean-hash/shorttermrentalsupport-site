/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        tealDark: "#0f2f32",
        cream: "#f5f1e6",
        safetyOrange: "#ff7a1a"
      }
    }
  },
  plugins: []
};
