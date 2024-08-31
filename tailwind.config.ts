import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      primary: '#c1121f',  
      secondary: '#fdf0d5', 
      accent: '#780000',   
    },
    extend: {
      colors: {
        blueCustom: '#2e3192',
        goldCustom: '#b59316',
        blackCustom: '#231f20',
      },
      fontFamily: {
        sans: ['"Work Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config