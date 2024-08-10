/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('./src/assets/Banner-section.jpg')",
       
      },
      borderRadius: {
        'custom': '5px', // Custom border radius
      },
      backgroundColor: {
        'custom-yellow': '#FACA10', // Custom background color
      },
      boxShadow: {
        'custom': '0px 10px 40px -12px rgba(250, 202, 16, 0.35)', // Custom box shadow
      },
      boxShadow: {
        'text-custom': '0px 4px 4px rgba(0, 0, 0, 0.1)', // Custom text shadow
      },
      backgroundImage: {
        'custom-image': "url('./src/assets/Background.png')", // Update with the path to your image
      },
      
      colors: {
        'custom-gray': '#1E1E1E', 
        'custom-yellow' : "#FBCC04",
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'], 
        lora: ['Lora', 'serif'],
        'lora-roman': ['Lora', 'serif'],
      },
    },
   
  },
  plugins: [],
}

