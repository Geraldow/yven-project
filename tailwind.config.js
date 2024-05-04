/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",],
  theme: {
    colors: {
      'bg_dark': '#201A30',
      'light-color': '#F8F8F8',
      'primary': '#46a19c',
      'secondary': '#943963',
      'third':'#8A5796',
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('flowbite/plugin')
    ],
    typography:{
      options:{
        fonts: [
          {
            name: 'sansation',
            src:[
              'public/fonts/Sansation_Regular.ttf'
            ],
          },
         
        ]
      }
    },
    extend: {},
  },
  plugins: [],
}

