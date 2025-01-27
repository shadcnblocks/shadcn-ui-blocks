import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        "2xl": "1400px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        montserrat: ["Montserrat", ...fontFamily.sans],
        mono: ["Space Mono", "SFMono-Regular", ...fontFamily.sans],
        caveat: ["Caveat", ...fontFamily.serif],
        manrope: ["Manrope", ...fontFamily.sans],
        outfit: ["Outfit", ...fontFamily.sans],
        plus_jakarta_sans: ["Plus Jakarta Sans", ...fontFamily.sans],
        playfair: ["Playfair", ...fontFamily.serif],
        bebas_neue: [" Bebas Neue ", ...fontFamily.sans],
        public_sans: ["Public Sans", ...fontFamily.sans],
        onest: ["Onest", ...fontFamily.sans],
        dm_sans: ["DM Sans", ...fontFamily.sans],
        poppins: ["Poppins", ...fontFamily.sans],
        geist: ["Geist", ...fontFamily.sans],
        albert_sans: ["Albert Sans", ...fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        muted2: {
          DEFAULT: "hsl(var(--muted2))",
          foreground: "hsl(var(--muted2-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in-out": {
          "0%": {
            opacity: "0",
          },
          "20%": {
            opacity: "1",
          },
          "80%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        progress: {
          from: {
            width: "0%",
          },
          to: {
            width: "100%",
          },
        },
        infiniteSlider: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
        infiniteSliderReverse: {
          "0%": {
            transform: "translateX(calc(-250px * 5))",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        transform1: {
          "0%, 25%, 100%": { width: "100%", "padding-bottom": "120%" },
          "33.33%, 58.33%": { width: "0%", "padding-bottom": "0%" },
          "66.66%, 91.66%": { width: "90%", "padding-bottom": "100%" },
        },
        transform2: {
          "0%, 25%, 100%": { width: "65%", "padding-bottom": "65%" },
          "33.33%, 58.33%": { width: "95%", "padding-bottom": "114%" },
          "66.66%, 91.66%": { width: "52%", "padding-bottom": "52%" },
        },
        transform3: {
          "0%, 25%, 100%": { width: "78%", "padding-bottom": "100%" },
          "33.33%, 58.33%": { width: "78%", "padding-bottom": "94%" },
          "66.66%, 91.66%": { width: "95%", "padding-bottom": "76%" },
        },
        transform4: {
          "0%, 25%, 66.66%, 91.66%, 100%": {
            width: "0%",
            "padding-bottom": "0%",
          },
          "33.33%, 58.33%": { width: "65%", "padding-bottom": "46%" },
        },
        image1: {
          "0%, 25%, 100%": { opacity: "1" },
          "33.33%, 58.33%, 66.66%, 91.66%": { opacity: "0" },
        },
        image2: {
          "0%, 25%, 33.33%, 58.33%, 100%": { opacity: "0" },
          "66.66%, 91.66%": { opacity: "1" },
        },
        image3: {
          "0%, 25%, 66.66%, 91.66%, 100%": { opacity: "0" },
          "33.33%, 58.33%": { opacity: "1" },
        },
        "gradient-spin": {
          "0%": {
            transform: "translateX(-50%) translateY(-50%) rotate(0deg)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-50%) rotate(360deg)",
          },
        },
        "shadow-ping": {
          "0%": {
            boxShadow: `0 0 0 0px theme("colors.neutral.100")`,
          },
          "50%": {
            boxShadow: `0 0 0 12px theme("colors.neutral.300")`,
          },
          "100%": {
            boxShadow: `0 0 0 12px theme("colors.transparent")`,
          },
        },
        "show-text": {
          "0%, 14.28%": {
            opacity: "0",
          },
          "17%, 26%": {
            opacity: "1",
          },
          "28.58%, 100%": {
            opacity: "0",
          },
        },
        "flip-btn": {
          to: { transform: "rotate(360deg)" },
        },
        "rotate-btn": {
          to: { transform: "rotate(90deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-out": "fade-in-out 4s ease-in-out",
        progress: "progress 8s linear",
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
        ["infinite-slider-reverse"]:
          "infiniteSliderReverse 20s linear infinite",
        "shadow-ping": "shadow-ping 1.5s ease-in-out infinite",
        "flip-btn": "flip-btn 6s infinite steps(2, end)",
        "rotate-btn": "rotate-btn 3s linear infinite both",
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
  ],
} satisfies Config;

export default config;
