/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        muted: 'var(--color-muted)',
        accent: 'var(--color-accent)',
        line: 'var(--color-border)',
        surface: 'var(--color-surface)',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        shell: '1360px',
      },
      fontSize: {
        'display-1': ['clamp(3.2rem, 9vw, 8.5rem)', { lineHeight: '0.94', letterSpacing: '-0.03em' }],
        'display-2': ['clamp(2.4rem, 5.5vw, 4.6rem)', { lineHeight: '0.98', letterSpacing: '-0.025em' }],
        'display-3': ['clamp(1.8rem, 3.4vw, 2.8rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
    },
  },
  plugins: [],
}
