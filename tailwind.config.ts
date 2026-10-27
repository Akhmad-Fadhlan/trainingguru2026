import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F4F9FF",
          subtle: "#E6F1FF",
        },
        primary: {
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
          light: "#E6F1FF",
          border: "#D7E6F8",
        },
        sky: {
          accent: "#38BDF8",
        },
        text: {
          main: "#0F172A",
          muted: "#475569",
          subtle: "#64748B",
        },
        border: {
          subtle: "#D7E6F8",
          muted: "#E2E8F0",
        },
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(37, 99, 235, 0.04), 0 1px 2px -1px rgba(37, 99, 235, 0.04)",
        card: "0 2px 8px -2px rgba(15, 23, 42, 0.05), 0 1px 4px -1px rgba(37, 99, 235, 0.04)",
        dropdown: "0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)",
      },
      maxWidth: {
        container: "1200px",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
