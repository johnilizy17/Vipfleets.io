module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '1023px'},

      'lg': {'min': '1024px'}
 },
 extend :{
   backgroundImage: theme => ({
     "car-img":"url('../asset/cars/pardo.jpg')"
   })
 },
 colors: {
  'brand-color': '#3e4095',
  'white-color': '#ffffff',
  "grey":"#eaeff0",
  "google":"#ee6459",
  "snow":"#fafafa",
  "black":"#000",
  "form":"#808080"
},
  },
  plugins: ["tailwindcss",  ],
}
