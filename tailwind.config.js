/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#eef6ff',
          100: '#d9eaff',
          200: '#bcd8ff',
          300: '#8dbaff',
          400: '#5b92ff',
          500: '#3a6eff',
          600: '#1c46f8',
          700: '#153ae2',
          800: '#1730b6',
          900: '#0A2463',
        },
        teal: {
          500: '#41B3A3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};