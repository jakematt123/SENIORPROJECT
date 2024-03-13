import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./src/**/*.tsx",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titleFont: "Roboto",
        bodyFont: "Poppins"
      },
      colors: {
        amazon_blue: "#131921",
        amazon_light: "#232F3E",
        amazon_yellow: "#febd69",
        whiteText: "#ffffff",
        lightText: "#ccc",
        quantity_box: "#F0F2F2",
        footerBottom: "#131A22"
      },
      boxShadow: {
        testShadow: "0px 0px 32px 1px rgba(199,199,199,1)",
        amazonInput: "0 0 3px 2px rgba(228 121 77 / 50%)",

      },
      maxWidth:{
        container:"1440px"
      }
    },
  },
  plugins: [],
}) satisfies Config;
