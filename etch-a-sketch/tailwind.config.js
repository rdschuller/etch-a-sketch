export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      fontFamily: {
        'signika': ['Signika Negative', 'sans-serif']
      }
    },
  },
  plugins: [],
}