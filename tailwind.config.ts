import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        // Default Theme
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        popover: 'hsl(var(--popover))',
        'popover-foreground': 'hsl(var(--popover-foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        // re Theme
        re: {
          background: 'hsl(var(--re_background))',
          foreground: 'hsl(var(--re_foreground))',
          card: 'hsl(var(--re_card))',
          'card-foreground': 'hsl(var(--re_card-foreground))',
          popover: 'hsl(var(--re_popover))',
          'popover-foreground': 'hsl(var(--re_popover-foreground))',
          primary: {
            DEFAULT: 'hsl(var(--re_primary))',
            foreground: 'hsl(var(--re_primary-foreground))',
          },
          secondary: {
            DEFAULT: 'hsl(var(--re_secondary))',
            foreground: 'hsl(var(--re_secondary-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--re_destructive))',
            foreground: 'hsl(var(--re_destructive-foreground))',
          },
          muted: {
            DEFAULT: 'hsl(var(--re_muted))',
            foreground: 'hsl(var(--re_muted-foreground))',
          },
          accent: {
            DEFAULT: 'hsl(var(--re_accent))',
            foreground: 'hsl(var(--re_accent-foreground))',
          },
          border: 'hsl(var(--re_border))',
          input: 'hsl(var(--re_input))',
          ring: 'hsl(var(--re_ring))',
        },

        // bl Theme
        bl: {
          background: 'hsl(var(--bl_background))',
          foreground: 'hsl(var(--bl_foreground))',
          card: 'hsl(var(--bl_card))',
          'card-foreground': 'hsl(var(--bl_card-foreground))',
          popover: 'hsl(var(--bl_popover))',
          'popover-foreground': 'hsl(var(--bl_popover-foreground))',
          primary: {
            DEFAULT: 'hsl(var(--bl_primary))',
            foreground: 'hsl(var(--bl_primary-foreground))',
          },
          secondary: {
            DEFAULT: 'hsl(var(--bl_secondary))',
            foreground: 'hsl(var(--bl_secondary-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--bl_destructive))',
            foreground: 'hsl(var(--bl_destructive-foreground))',
          },
          muted: {
            DEFAULT: 'hsl(var(--bl_muted))',
            foreground: 'hsl(var(--bl_muted-foreground))',
          },
          accent: {
            DEFAULT: 'hsl(var(--bl_accent))',
            foreground: 'hsl(var(--bl_accent-foreground))',
          },
          border: 'hsl(var(--bl_border))',
          input: 'hsl(var(--bl_input))',
          ring: 'hsl(var(--bl_ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;