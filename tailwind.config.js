module.exports = {
  mode: "jit",
  purge: ["./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        footerBG: "#F9F9F9",
        customGreen: "#5DB05A",
        customYellow: "#F5E74F",
        customGray: "#686868",
        customBlue: "#00A3E1",
        dropDownBorderColor: "#13aff0",
        ddBorderBottomColor: "#f1f1f1",
        ddItemHoverBG: "#F8F8F8",
        grayBG: "#F1F1F1",
        hrLineColor: "#C1C6CD",
        inherit: "inherit",
      },
      backgroundImage: {
        contactUsTexture: "url('./assets/images/colorful-texture.jpg')",
        headerBannerBG: "url('./assets/images/contact-header-1.jpg')",
      },
      screens: {
        lg1200: "1200px",
        lg1150: "1150px",
        md861: "861px",
      },
      spacing: {
        "25vw": "25vw",
      },
      zIndex: {
        "-1": "-1",
      },
      skew: {
        "-9": "-9deg",
      },
      borderWidth: {
        fullVW: "100vw",
        "200px": "200px",
      },
      borderRadius: {
        "50%": "50%",
      },
      boxShadow: {
        customBoxShadow: "0 2px 6px rgb(0 0 0 / 10%)",
      },
    },
  },
  variants: {
    extend: {},
    varients: {
      display: ["group-hover"],
    },
  },
  plugins: [],
};
