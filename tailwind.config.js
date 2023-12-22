const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
   
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        'body': [
          'DM Sans', 'sans-serif'],
        'display': ['ClashDisplay-Semibold', 'sans-serif'],
          'logo': ['ClashDisplay-Bold', 'sans-serif'],
          'button': ['ClashDisplay-Regular', 'sans-serif'],

      }, 
      colors: {
        'altru-blue': '#1960F2',
        'altru-yellow' : '#E9FF61',
        'footer-text': '#EBF2FF',
        'altru-orange': '#F19C3F',
        'altru-pink': '#F8FFCF', 
        'altru-mango': '#FCB713', 
        'light-blue': '#E4EDFF'
        
      },
    },
  },
  plugins: [],
});