/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a2e',
          light: '#2d2d44',
        },
        secondary: {
          DEFAULT: '#64748b',
          light: '#94a3b8',
        },
        accent: {
          teal: '#06b6d4',
          coral: '#f97316',
          gold: '#f59e0b',
        },
        metallic: {
          white: '#fafafa',
          silver: '#f1f5f9',
          platinum: '#e2e8f0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-desktop': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'hero-mobile': ['2.25rem', { lineHeight: '1.15', fontWeight: '700' }],
        'subheadline': ['1.25rem', { lineHeight: '1.6', fontWeight: '400' }],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 4px 16px rgba(0, 0, 0, 0.06), 0 8px 32px rgba(0, 0, 0, 0.08)',
        'button-3d': '0 4px 12px rgba(6, 182, 212, 0.3), 0 2px 4px rgba(0, 0, 0, 0.1)',
        'button-3d-hover': '0 6px 16px rgba(6, 182, 212, 0.4), 0 3px 6px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'pulse-gentle': 'pulseGentle 2s ease-in-out infinite',
        'slide-left': 'slideLeft 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseGentle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.02)', opacity: '0.95' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
