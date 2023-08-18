import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      gridTemplateColumns: {
        checkout: '52.5rem 30rem',
      },
      fontFamily: {
        sans: ['var(--font-roboto)'],
        baloo: ['var(--font-baloo)'],
      },
      colors: {
        zinc: {
          100: '#FAFAFA',
          200: '#F3F2F2',
          300: '#EDEDED',
          400: '#E6E5E5',
          500: '#D7D5D5',
          600: '#8D8686',
          700: '#574D4D',
          800: '#403937',
          900: '#272221',
        },
        purple: {
          100: '#EBE5F9',
          500: '#8047F8',
          800: '#4B2995',
        },
        yellow: {
          100: '#F1E9C9',
          500: '#DBAC2C',
          800: '#C47F17',
        },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 200ms ease-in-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
