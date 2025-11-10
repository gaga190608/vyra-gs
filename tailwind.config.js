export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: { violet: '#8b5cf6', cyan: '#22d3ee' }
      },
      boxShadow: { glass: '0 10px 40px rgba(0,0,0,0.25)' },
      borderRadius: { '2xl': '1rem' }
    },
  },
  plugins: [],
}