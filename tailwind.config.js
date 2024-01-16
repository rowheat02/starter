/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
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
        primary: ['Product Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#E3F2FF',
          100: '#BADFFF',
          200: '#5BB6FF',
          300: '#0097FF',
          400: '#0088F8',
          500: '#0077E4',
          600: '#0664D2',
          700: '#0A45B3',
          800: '#003675',
          900: '#0F204C',
        },
        secondary: {
          50: '#FFF8E3',
          100: '#FFEDB7',
          200: '#FFE28A',
          300: '#FFD85C',
          400: '#FFCE3D',
          500: '#FFC52F',
          600: '#FFB72A',
          700: '#FFA527',
          800: '#FF9525',
          900: '#FF7722',
        },
        grey: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E6E6E6',
          300: '#D7D7D7',
          400: '#BDBDBD',
          500: '#989898',
          600: '#757575',
          700: '#616161',
          800: '#484848',
          900: '#212121',
        },
      },

      fontSize: {
        'body-lg': [
          '0.938rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '400',
            letterSpacing: '0',
          },
        ],
        'body-md': [
          '0.875rem',
          {
            lineHeight: '1.125rem',
            fontWeight: '400',
            letterSpacing: '0',
          },
        ],
        'body-sm': [
          '0.75rem',
          {
            lineHeight: '1rem',
            fontWeight: '400',
            letterSpacing: '0',
          },
        ],
        'body-btn': [
          '0.875rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '700',
            letterSpacing: '0',
          },
        ],
        'icon-md': [
          '1.5rem',
          {
            fontFamily: 'Material Icons Outlined',
            fontWeight: '400',
            lineHeight: '24px',
          },
        ],
        'icon-sm': [
          '1.125rem',
          {
            lineHeight: '1.125rem',
            fontWeight: '400',
            letterSpacing: '0',
          },
        ],
      },
      boxShadow: {
        '3xl': '0px 2px 20px 4px rgba(0, 0, 0, 0.20)',
        light: '0px 2px 20px 4px rgba(0, 0, 0, 0.12)',
        dark: '0px 4px 16px 8px rgba(217, 217, 217, 0.28)',
      },
      animation: {
        loader: 'loader 0.6s infinite alternate',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },

      keyframes: {
        loader: {
          to: {
            transform: 'translate3d(0, -0.3rem, 0)',
          },
        },
      },
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.838rem',
      base: '1rem',
      lg: '1.063rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
  },
  plugins: [require('tailwindcss-animate')],
  prefix: 'tw-',
};
