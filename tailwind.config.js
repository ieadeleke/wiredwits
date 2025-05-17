/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          sans: ['var(--font-plus-jakarta)'],
          jakarta: ['var(--font-plus-jakarta)'],
          inter: ['var(--font-inter)'],
        },
        colors: {
          primary: "var(--primary-color)"
        }
    },
  },
  plugins: [],
}