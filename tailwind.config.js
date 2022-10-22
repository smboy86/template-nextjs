module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'testFont': ['Roboto sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
