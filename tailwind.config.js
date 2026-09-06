/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm, paper-like palette. Change these to re-theme the whole site.
        paper: "#F5F4EF",
        "paper-raised": "#ECEAE0",
        ink: "#1A1917",
        "ink-soft": "#6B6960",
        line: "#DBD8CC",
        accent: "#2B3A8F",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Fraunces", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      maxWidth: {
        content: "1160px",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
