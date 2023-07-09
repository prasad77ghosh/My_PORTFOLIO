/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_clr: "#0b0c10",
        secondary_clr: "#16181f",
        txt_primary: "#c5c6c7",
        tertiary_clr: "#66fcf1",
        tertiary_muted_clr: "#45a29e",
      },
    },
  },
  plugins: [],
};
