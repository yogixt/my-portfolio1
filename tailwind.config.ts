import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00ff41',
        'matrix-black': '#0d0d0d',
        'matrix-dark': '#1a1a1a',
        'matrix-gray': '#2d2d2d',
        'matrix-border': 'rgba(0, 255, 65, 0.2)',
        'terminal-text': '#e0e0e0',
        'terminal-comment': '#6b7280',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 255, 65, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 255, 65, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
