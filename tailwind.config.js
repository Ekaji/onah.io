module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mob: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    extend: {
      fontFamily: {
        DMSansBold: ['DMSansBold'],
        DMSansRegular: ['DMSansRegular'],
        DMSansMedium: ['DMSansMedium'],
        mavinBold: ['mavinBold'],
        mavinRegular: ['mavinRegular'],
        OpenSansLight: ['OpenSansLight'],
        OpenSansMedium: ['OpenSansMedium'],
        OpenSansRegular: ['OpenSansRegular'],
        PanchangRegular: ['PanchangRegular'],
        PanchangBold: ['PanchangBold'],
        PanchangSemibold: ['PanchangSemibold'],
        PanchangExtrabold: ['PanchangExtrabold'],
        SatoshiVariable: ['SatoshiVariable'],
        SatoshiVariableItalic: ['SatoshiVariableItalic'],
    },
    },
  },
  plugins: [],
};
