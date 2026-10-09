import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { navy: "#142B4A", royal: "#2563EB", gold: "#F5B942", ivory: "#FFFDF7", sky: "#EFF6FF", body: "#475569" },
      fontFamily: { display: ["var(--font-display)", "Georgia", "serif"], sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
      boxShadow: { soft: "0 10px 40px -12px rgba(20,43,74,.18)", lift: "0 24px 60px -20px rgba(20,43,74,.35)" },
    },
  },
  plugins: [],
};
export default config;
