/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "864px",
      },
      padding: '1rem',
    },
    extend: {
      colors: {
        blue: "#3294F8",
        base: {
          title: "#E7EDF4",
          subtitle: "#C4D4E3",
          text: "#AFC2D4",
          span: "#7B96B2",
          label: "#3A536B",
          border: "#1C2F41",
          post: "#112131",
          profile: "#0B1B2B",
          background: "#071422",
          input: "#040F1A",
        },
      },
    },
  },
  plugins: [],
};
