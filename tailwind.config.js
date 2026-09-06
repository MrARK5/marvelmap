/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#08090C',
        surface: '#0F1118',
        surfaceHover: '#141722',
        border: '#1A1E2C',
        borderHover: '#282E42',
        obsidian: {
          950: '#08090C',
          900: '#0C0E14',
          850: '#0F1118',
          800: '#141722',
          700: '#1A1E2C',
          600: '#282E42',
        },
        brand: {
          DEFAULT: '#E62429',
          hover: '#CC1E23',
          muted: 'rgba(230, 36, 41, 0.1)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.035em',
        tight: '-0.02em',
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.5)',
        'elevated': '0 12px 30px -10px rgba(0, 0, 0, 0.8), 0 4px 6px -4px rgba(0, 0, 0, 0.5)',
        'modal': '0 24px 48px -12px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.08)',
      }
    },
  },
  plugins: [],
}
