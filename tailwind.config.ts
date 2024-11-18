import type { Config } from "tailwindcss";
import daisyui from "daisyui"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2d2d2d",  // Dark primary color (Charcoal Gray)
        secondary: "#444444",  // Dark secondary color (Dark Slate Gray)
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;
