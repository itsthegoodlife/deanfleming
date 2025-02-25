import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s infinite',
        'gradient-shift': 'gradient-shift 15s ease infinite',
        'neon-flicker': 'neon-flicker 3s infinite alternate',
        'holographic': 'holographic-shift 5s infinite',
        'scanline': 'scanline 3s linear infinite',
        'glitch': 'glitch 0.3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 0 0 var(--glow-color)' },
          '70%': { boxShadow: '0 0 0 10px rgba(139, 92, 246, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(139, 92, 246, 0)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'neon-flicker': {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter: 'drop-shadow(0 0 1px var(--neon-color)) drop-shadow(0 0 3px var(--neon-color))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        'holographic-shift': {
          '0%, 100%': { filter: 'hue-rotate(0deg) saturate(1)' },
          '50%': { filter: 'hue-rotate(30deg) saturate(1.5)' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'glitch': {
          '0%': { 
            clipPath: 'inset(40% 0 61% 0)',
            transform: 'translate(-2px, 2px)',
          },
          '20%': { 
            clipPath: 'inset(92% 0 1% 0)',
            transform: 'translate(1px, 1px)',
          },
          '40%': { 
            clipPath: 'inset(43% 0 1% 0)',
            transform: 'translate(-1px, -3px)',
          },
          '60%': { 
            clipPath: 'inset(25% 0 58% 0)',
            transform: 'translate(3px, 2px)',
          },
          '80%': { 
            clipPath: 'inset(54% 0 7% 0)',
            transform: 'translate(-3px, -2px)',
          },
          '100%': { 
            clipPath: 'inset(58% 0 43% 0)',
            transform: 'translate(2px, -4px)',
          },
        },
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  plugins: [],
} satisfies Config;
