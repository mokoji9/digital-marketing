import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05060A",
        surface: "#0A0C14",
        elevated: "#10131C",
        bright: "#E6E8F0",
        muted: "#7A7F94",
        hairline: "rgba(255,255,255,0.08)",
        "neon-blue": "#4A8CFF",
        "neon-violet": "#8B5CF6",
        "neon-cyan": "#22D3EE",
        "neon-magenta": "#E879F9",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "neon-gradient":
          "linear-gradient(135deg, #4A8CFF 0%, #8B5CF6 50%, #E879F9 100%)",
      },
      borderRadius: {
        DEFAULT: "16px",
        lg: "20px",
      },
      boxShadow: {
        glow: "0 0 40px rgba(139, 92, 246, 0.25)",
        "glow-blue": "0 0 40px rgba(74, 140, 255, 0.25)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s cubic-bezier(0.21,1,0.36,1) both",
        pulseSoft: "pulseSoft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
