/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust to match your file structure
    "./public/index.html",
  ],
    theme: {
    extend: {
      colors: {
        primary: "#1890FF", // Custom variable for primary color
        secondary: 'var(--color-secondary)', // Custom variable for secondary color
        accent: 'var(--color-accent)', // Custom variable for accent color
      },
        },
  },
  plugins: [],
}
