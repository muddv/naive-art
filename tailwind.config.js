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
        ],
        "header2": ["32px", {
          lineHeight: "28.8px"
        }]
      },
      colors: {
        "naive-black": "#292D32",
        "body-gray": "#292D32"
      },
      height: {
        100: "479px",
        101: "498px"
      },
      width: {
        100: "960px",
        101: "1154px",
        newsImage: "560px",
        newsText: "564px"
      }
    },
  },
  plugins: [],
}
