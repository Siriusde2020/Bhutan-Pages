/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bhutan: {
          orange: '#FF6B00',
          'orange-light': '#FF8C33',
          'orange-dark': '#CC5500',
          saffron: '#F4A900',
          gold: '#D4A017',
          maroon: '#800020',
          'maroon-light': '#A0324E',
          red: '#C41E3A',
          white: '#FFFFFF',
          cream: '#FFF8F0',
          gray: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#E5E5E5',
            300: '#D4D4D4',
            400: '#A3A3A3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
          },
          blue: '#1B4B7A',
          'blue-light': '#2563EB',
          green: '#166534',
          'green-light': '#22C55E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        dzongkha: ['Jomolhari', 'Noto Serif Tibetan', 'serif'],
      },
      backgroundImage: {
        'gradient-bhutan': 'linear-gradient(135deg, #FF6B00 0%, #F4A900 50%, #D4A017 100%)',
        'gradient-maroon': 'linear-gradient(135deg, #800020 0%, #C41E3A 100%)',
        'gradient-blue': 'linear-gradient(135deg, #1B4B7A 0%, #2563EB 100%)',
      },
    },
  },
  plugins: [],
};
