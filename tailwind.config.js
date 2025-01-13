/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{html,jsx,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-scrollbar": "#2563eb",
        "blue-track": "#93c5fd",
      },
     fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui, require("tailwind-scrollbar")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
