/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        trsCyan: "#03E9F4",
        trsViolet: "#7C4DFF",
      }
    },
  },
  plugins: [],
}
