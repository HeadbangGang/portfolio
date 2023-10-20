module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: {
        max: '993px'
      }
    },
    extend: {
      colors: {
        grey: 'var(--grey)',
        main: 'var(--main)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        complementary: 'var(--complementary)'
      }
    }
  },
  plugins: []
}
