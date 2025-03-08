/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'techno': {
          purple: '#9333ea',
          'purple-light': '#a855f7',
          'purple-dark': '#7e22ce',
          'purple-soft': '#d8b4fe',
          dark: '#121212',
          light: '#1e1e1e',
        }
      },
      boxShadow: {
        'techno': '0 0 15px rgba(147, 51, 234, 0.6)',
        'techno-sm': '0 0 8px rgba(147, 51, 234, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'techno-grid': 'linear-gradient(rgba(147, 51, 234, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.2) 1px, transparent 1px)',
        'techno-glow': 'radial-gradient(circle at center, rgba(147, 51, 234, 0.3) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
};
