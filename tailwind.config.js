/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    backgroundImage: {
      'LadyTeacher': "url('/homepage_images/LadyTeacher.png')",
      'coursetwo': "url('/homepage_images/course two.png')",
      'about': "url('/homepage_images/about.png')",
    },
    extend: {
      fontFamily: {
        // 'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
        'jost': ["'Jost'", 'sans-serif'],
       
        // 'inter': ['Inter'],
      },

      colors: {
       
        'Theme' :'#7436FF',
        'Orange':'#F07C38',
        'Header':'#37474F'
        
      }
    },
  },
  plugins: [],
}
