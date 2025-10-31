/** @type {import('tailwindcss').Config} */
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F2937', // Deep charcoal for text
          light: '#374151',
        },
        secondary: {
          DEFAULT: '#6B7280', // Medium gray for secondary text
          light: '#9CA3AF',
        },
        accent: {
          blue: '#3B82F6', // Vibrant royal blue (primary action)
          green: '#10B981', // Emerald green (success/science)
          purple: '#8B5CF6', // Purple (privacy/trust)
          terracotta: '#E57373', // Warm terracotta
        },
        background: {
          DEFAULT: '#F8F9FA', // Light warm gray
          card: '#FFFFFF',
          blue: '#DBEAFE', // Light blue for trust badges
          green: '#D1FAE5', // Light green
          purple: '#EDE9FE', // Light purple
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
        'soft': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 4px 12px rgba(0, 0, 0, 0.05), 0 2px 6px rgba(0, 0, 0, 0.06)',
        'button-3d': '0 4px 12px rgba(59, 130, 246, 0.25), 0 2px 4px rgba(0, 0, 0, 0.08)',
        'button-3d-hover': '0 6px 16px rgba(59, 130, 246, 0.35), 0 3px 6px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'pulse-gentle': 'pulseGentle 2s ease-in-out infinite',
        'slide-left': 'slideLeft 0.3s ease-out',
        aurora: 'aurora 60s linear infinite',
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
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ':root': newVars,
  });
}
