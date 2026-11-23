/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#18181B',
        sub: '#3F3F46',
        muted: '#71717A',
        cta: '#2563EB',
        ctadark: '#1D4ED8',
        page: '#FAFAFA',
        card: '#FFFFFF',
        line: '#E4E4E7',
      },
      fontFamily: {
        display: ['Exo', 'system-ui', 'sans-serif'],
        mono: ['"Roboto Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(24,24,27,.04), 0 8px 24px rgba(24,24,27,.06)',
        lift: '0 4px 10px rgba(24,24,27,.06), 0 16px 40px rgba(24,24,27,.10)',
      },
    },
  },
  plugins: [],
}
