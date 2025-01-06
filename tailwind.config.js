/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pryColor: { DEFAULT: "#2C3E50", Light: "#95A5A6" },
        secColor: { DEFAULT: "#8E44AD ", Light: "#D2B4DE", Lighter: "#FBF7FB" },
        greyColr: "#352F36",
        lightGreyColor: "#777777",
        black: "#000000",
        footer: "#1B2834",
        negative: { DEFAULT: "#EE443F", Light: "#FFF8F8" },
        positive: { DEFAULT: "#25A969", Light: "#F6FCF9" },
        processing: { DEFAULT: "#DBB950", Light: "#FDFCF8" },
      },
    },
  },
  plugins: [],
};
