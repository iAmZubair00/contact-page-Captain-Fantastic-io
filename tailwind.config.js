module.exports = {
  mode: "jit",
  purge: ["./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        footerBG: "#F9F9F9",
        customGray: "#686868",
        customBlue: "#00A3E1",
        bannerOverlayColor: "#0A0A0A",
        dropDownBorderColor: "#13aff0",
        ddBorderBottomColor: "#f1f1f1",
        ddItemHoverBG: "#F8F8F8",
        contactInfoBG: "#E9F6F8",
        contactInfoGradientFrom: "#792cff",
        contactInfoGradientTo: "#06bdf4",
        gradientBtnOrange: "#FF8A66",
        gradientBtnPink: "#FF4570",
        inputBorder: "#999",
        btnBorder: "#ff2350",
        textColor: "#2d2d2d",
        selectOptColor: "#C05C5A",
        footerTextColor: "#474747",
        footerTextColorDark: "#2D2D2D",
        starsYellow: "#FBE122",
        textColorLessOpaque: "rgba(45, 45, 45, 0.8)",
        textColorOpaque: "rgba(45, 45, 45, 0.6)",
        textColorMoreOpaque: "rgba(45, 45, 45, 0.4)",
        formInputsBG: "#FCFCFC",
        formInputsBorder: "#F2F2F2",
        grayBG: "#F1F1F1",
        inherit: "inherit",
      },
      backgroundImage: {
        contactUsTexture: "url('./assets/images/colorful-texture.jpg')",
        headerBannerBG: "url('./assets/images/contact-header-1.jpg')",
        headerBannerOverlay: "url('./assets/images/header-opacity.jpg')",
      },
      backgroundPosition: {
        "top-center": "top center",
      },
      screens: {
        lg1191: "1191px",
        lg1200: "1200px",
        lg1150: "1150px",
        md861: "861px",
        sm565: "565px",
      },
      spacing: {
        "25vw": "25vw",
        "70px": "70px",
        "49%": "49%",
        "7%": "7%",
        "12%": "12%",
        "4%": "4%",
      },
      padding: {
        "10%": "10%",
        "15%": "15%",
      },
      letterSpacing: {
        "0.6px": "0.6px",
        "1.6px": "1.6px",
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
        "3px": "3px",
        "50px": "50px",
      },
      boxShadow: {
        customBoxShadow: "0 2px 6px rgb(0 0 0 / 10%)",
        sbmtBtnShadow: "0px 0px 25px 5px rgb(0 0 0 / 20%)",
      },
      dropShadow: {
        bannerTextShadow: "5px 5px 5px #fff",
      },
      fontSize: {
        "5rem": "5rem",
        "14px": "14px",
        "15px": "15px",
        "36px": "36px",
      },
      lineHeight: {
        0: "0",
        1.2: "1.2",
      },
      width: {
        calculated: "calc(100% + 1.3px)",
        "15px": "15px",
      },
      height: {
        "15px": "15px",
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
