module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
    colors: {
      mainInputBg: '#151515',
      mainLabel: '#b8b8b8',
      888: '#888'
    },
    inset: {
      45: '45%'
    }
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
