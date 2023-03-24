/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#e9eaeb',
      },
      keyframes: {
        'move-left': {
          '0%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(20px)' },
          '100%': { transform: 'translateX(30px)' },
        },
      },
      animation: {
        'move-left': 'move-left 1s steps(2, end) infinite',
      },
    },
  },
  plugins: [],
}
