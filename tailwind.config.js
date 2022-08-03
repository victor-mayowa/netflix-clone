/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "hero": "url('https://assets.nflxext.com/ffe/siteui/vlv3/3a073c5f-0160-4d85-9a42-6f59aa4b64b9/8723f578-a6af-4b6f-9aae-fff2766a17eb/NG-en-20220718-popsignuptwoweeks-perspective_alpha_website_medium.jpg')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
