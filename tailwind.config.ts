import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--base)",
        offgreen: "var(--offgreen)",
        dark: "var(--dark)"
      },
      fontFamily: {
        work_sans: "Work Sans"
      }
    },
  },
  plugins: [],
} satisfies Config;
