/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     screens:

     {
       'md': '590px',
       'sm':'408px',
       'lg':'900px'
     }
   
    }
  },
  plugins: [],
}