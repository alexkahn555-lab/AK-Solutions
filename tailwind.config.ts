import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0F766E",
          50:  "#F0FDFA",
          100: "#CCFBF1",
          600: "#0D9488",
          700: "#0F766E",
          800: "#115E59",
          900: "#134E4A",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt:     "#F7F8FA",
        },
      },
      fontFamily: {
        sans:    ["var(--font-jakarta)", "sans-serif"],
        heading: ["var(--font-jakarta)", "sans-serif"],
        mono:    ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1120px",
      },
      boxShadow: {
        /* resting state — very soft, two-layer */
        card: [
          "0 1px 2px 0 rgb(0 0 0 / 0.04)",
          "0 2px 6px 0 rgb(0 0 0 / 0.04)",
        ].join(", "),
        /* hover state — lifts with a larger, low-opacity bloom */
        "card-hover": [
          "0 4px 16px -2px rgb(0 0 0 / 0.08)",
          "0 2px 8px -2px rgb(0 0 0 / 0.05)",
        ].join(", "),
        /* featured teal card hover */
        "card-teal": "0 12px 40px -6px rgb(15 118 110 / 0.35)",
      },
      borderRadius: {
        card: "0.875rem", /* 14px — between rounded-xl (12px) and rounded-2xl (16px) */
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
