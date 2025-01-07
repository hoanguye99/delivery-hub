import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "0.5rem",
        lg: "0.5rem",
        xl: "4rem",
        "2xl": "7rem",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        typography: {
          disabled: "#00204D40",
          placeholder: "#00204da6",
          subtitle: "#00204D99",
          secondary: "#8C8C8C",
          primary: "#595959",
          title: "#00204D",
          body: "#00204Dcc",
          label: "#00204De6",
        },
        border: "hsl(var(--border))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          pressed: "var(--primary-pressed)",
          background: "var(--primary-background)",
          border: "var(--primary-border)",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          hover: "var(--secondary-hover)",
          pressed: "var(--secondary-pressed)",
          background: "var(--secondary-background)",
          border: "var(--secondary-border)",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          hover: "var(--destructive-hover)",
          pressed: "var(--destructive-pressed)",
          background: "var(--destructive-background)",
          border: "var(--destructive-border)",
          foreground: "hsl(var(--destructive-foreground))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "var(--sidebar-foreground)",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontSize: {
        "heading-0": [
          "64px",
          {
            lineHeight: "65px",
            fontWeight: "400",
          },
        ],
        "heading-1": [
          "56px",
          {
            lineHeight: "65px",
            fontWeight: "600",
          },
        ],
        "heading-2": [
          "46px",
          {
            lineHeight: "56px",
            fontWeight: "600",
          },
        ],
        "heading-3": [
          "38px",
          {
            lineHeight: "46px",
            fontWeight: "600",
          },
        ],
        "heading-4": [
          "30px",
          {
            lineHeight: "38px",
            fontWeight: "600",
          },
        ],
        "heading-5": [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "600",
          },
        ],
        "heading-6": [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: "600",
          },
        ],
        "heading-7": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "600",
          },
        ],
        "heading-8": [
          "14px",
          {
            lineHeight: "22px",
            fontWeight: "600",
          },
        ],
        "heading-9": [
          "12px",
          {
            lineHeight: "20px",
            fontWeight: "600",
          },
        ],
        "title-1": [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "500",
          },
        ],
        "title-2": [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: "500",
          },
        ],
        "title-3": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "500",
          },
        ],
        "title-4": [
          "16px",
          {
            lineHeight: "22px",
            fontWeight: "500",
          },
        ],
        "title-5": [
          "14px",
          {
            lineHeight: "22px",
            fontWeight: "500",
          },
        ],
        "title-6": [
          "14px",
          {
            lineHeight: "22px",
            fontWeight: "400",
          },
        ],
        "body-1": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "400",
          },
        ],
        "body-2": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        "body-3": [
          "14px",
          {
            lineHeight: "22px",
            fontWeight: "400",
          },
        ],
        "subtitle-1": [
          "18px",
          {
            lineHeight: "26px",
            fontWeight: "400",
          },
        ],
        "subtitle-2": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        "subtitle-3": [
          "14px",
          {
            lineHeight: "22px",
            fontWeight: "400",
          },
        ],
        "subtitle-4": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400",
          },
        ],
        "subtitle-5": [
          "10px",
          {
            lineHeight: "14px",
            fontWeight: "400",
          },
        ],
        "caption-1": [
          "14px",
          {
            lineHeight: "22px",
            fontWeight: "400",
          },
        ],
        "caption-2": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400",
          },
        ],
        "caption-3": [
          "10px",
          {
            lineHeight: "14px",
            fontWeight: "400",
          },
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
