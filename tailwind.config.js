/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#da5e42",
        secondary: "#fcf2f0",
        danger: "#e74c3c",
        light: "#ecf0f1",
        dark: "#34495e",
        text: "#191C1E",
        subText: "#757779",
        formFieldText: "#444749",
      },
    },
    fontFamily: {
      natoSans: ["Noto-Sans", "sans-serif"],
      natoSan600: ["NotoSans-SemiBold", "sans-serif"],
      natoSan400: ["NotoSans-Regular", "sans-serif"],
      interSans: ["Inter", "sans-serif"],
    },
    fontWeight: {
      100: "100",
      200: "200",
      300: "300",
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
      900: "900",
    },
  },
  plugins: [],
};
