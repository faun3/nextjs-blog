/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        move: {
          "0%": {
            transform: "translateY(-15px)",
          },
          "100%": {
            transform: "translateY(25px)",
          },
        },
      },
      animation: {
        move: "move 4s infinite ease-in-out alternate ",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
