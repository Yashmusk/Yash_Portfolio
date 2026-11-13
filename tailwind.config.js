/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F6F5F1',
        card: '#FFFFFF',
        ink: { DEFAULT: '#17181B', soft: '#2E3036' },
        muted: '#55585F',
        line: '#E3E1DA',
        accent: { DEFAULT: '#2B4BD8', soft: '#E8ECFC', deep: '#1B2F8F' },
        gain: { DEFAULT: '#1D7F55', soft: '#E3F2EA' },
        warn: { DEFAULT: '#A8611A', soft: '#FBEEDD' },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { page: '72rem' },
    },
  },
  plugins: [],
}
