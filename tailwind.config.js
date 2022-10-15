/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'mobile': '375px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      "darkcyan": "hsl(158, 36%, 37%)",
      "cream": "hsl(30, 38%, 92%)",
      "verydarkblue": "hsl(212, 21%, 14%)",
      "darkgrayishblue": "hsl(228, 12%, 48%)",
      "white": "hsl(0, 0%, 100%)",
    },
    extend: {},
  },
  plugins: [],
}
