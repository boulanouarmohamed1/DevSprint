/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include all React components
    "./pages/**/*.{js,ts,jsx,tsx}", // Include Next.js pages
    "./components/**/*.{js,ts,jsx,tsx}", // Include components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
