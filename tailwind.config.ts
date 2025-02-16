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
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        ["surface-darker"]: "var(--color-surface-darker)",
        ["surface-accent"]: "var(--color-surface-accent)",
        ["surface-lighter"]: "var(--color-surface-lighter)",
        ["primary-900"]: "var(--color-primary-900)",
        ["primary-500"]: "var(--color-primary-500)",
        ["secondary-500"]: "var(--color-secondary)",
        ["tertiary-500"]: "var(--color-tertiary)",
        ["on-primary"]: "var(--color-on-primary)",
        ["on-secondary"]: "var(--color-on-secondary)",
        ["on-tertiary"]: "var(--color-on-tertiary)",
        ["on-surface"]: "var(--color-on-surface)",
      },
    },
  },
  plugins: [],
} satisfies Config;
