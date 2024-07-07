export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A90E2",
        secondary: "#c084fc",
        background: "#F5F7FA",
        surface: "#FFFFFF",
        text: "#333333",
        "text-secondary": "#888888",
        accent: "#F5A623",
        error: "#D0021B",
        success: "#7ED321",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
