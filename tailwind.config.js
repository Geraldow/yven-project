/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bg_dark': '#201A30',
        'dark-transparent': 'rgba(27, 27, 27, 0.6)', 
        'light-color': '#F8F8F8',
        'primary': '#370C94',
        'secondary': '#C41BA2',
        'third': '#4442B6',
        'line_light': '#CCCCCC',
      },
      fontFamily: {
        sansation: ['Sansation', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
     
      borderRadius: {
        'none': '0',
        DEFAULT: '4px',
        'large': '28px',
      },
      height: {
        '128': '32rem',
        '256': '256px',
      },
      height: {
        '128': '32rem',
      }
    },
    screens: {
      'xs': {'min':'400px', 'max': '766px'},
      'sm': {'min': '640px', 'max': '800px'},
      'md': {'min': '801px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin')
  ],
}
