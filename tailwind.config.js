// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#0056b3',
        secondary: '#ffffff',
        tertiary: '#cce0ff',
        quaternary: 'rgba(0, 86, 179, 0.2)',
        placeholderText: 'rgba(0, 86, 179, 0.7)',
        bg: '#f8f9fa',
        bgCard: '#ffffff',
        bgHeader: '#0056b3',
        inputOutline: 'rgba(0, 86, 179, 0.5)',
        boxShadow: 'rgba(0, 86, 179, 0.1)',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        primary: '1rem',
        secondary: '1.125rem',
        large: '2rem',
        xlarge: '2.5rem',
        small: '0.875rem',
      },
    },
  },
  plugins: [],
}
