/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif;"]
      },
      fontSize: {
        "header1": ["76px", {
          letterSpacing: "-0.025em",
          lineHeight: "90%"
        }
        ]
      },
      colors: {
        "header-black": "#292D32",
        "body-gray": "#292D32"
      }
    },
  },
  plugins: [],
}
