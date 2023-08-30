/** @type {import('tailwindcss').Config} */
export default {
  content: ['./pages/**/*.{html,js}', './src/components/**/*.vue'],
  theme: {
    container: {
      center: true,

      screens: {
        lg: '1120px',
      },
    },

    extend: {
      colors: {
        primary: '#00b956',
        link: '#35aaf2',
        smile: '#f8e672',
        gray: {
          10: '#D1D5DB',
          20: '#3C3C43',
          30: '#F6F6F6',
          40: '#999',
        },
      },

      fontFamily: {
        GTWalsheimPro: "'GTWalsheimPro",
      },
    },
  },
  plugins: [],
};
