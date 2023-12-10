/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        AnekLatin: ["Anek Latin", "sans-serif"],
        Lusitana: ["Lusitana", "serif"],
        Poppins: ["Poppins", "serif"]
    }
   
    
  }
  },
  plugins: [],
}