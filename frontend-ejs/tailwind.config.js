/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",  // Ensure this path matches where your EJS templates are stored
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // Include your script files if they contain class names
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}