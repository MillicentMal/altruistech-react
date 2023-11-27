const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'body': [
          'DM Sans', 'sans-serif'],
        'display': ['ClashDisplay-Semibold', 'sans-serif'],
          'logo': ['ClashDisplay-Bold', 'sans-serif'],

      }, 
      colors: {
        'altru-blue': '#1960F2',
        'altru-yellow' : '#E9FF61',
        'footer-text': '#EBF2FF',
        'altru-orange': '#F19C3F',
        'altru-pink': '#F8FFCF', 
        'altru-mango': '#FCB713'
      },
    },
  },
  plugins: [],
});