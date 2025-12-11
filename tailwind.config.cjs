/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#2f7a4f',
        bg: '#f2f5f4',
        text: '#14302a',
      },
    },
  },
  plugins: [],
}
