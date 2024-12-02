/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./**/*.{html,js}"],
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        grey: {
          700: "hsl(0, 0%, 20%)",
          800: "hsl(0, 0%, 12%)",
          900: "hsl(0, 0%, 8%)"
        },
        white: "hsl(0, 0%, 100%)",
        green: "hsl(75, 94%, 57%)",
      }
    },
  },
  plugins: [],
}
