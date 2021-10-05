module.exports = {
  // corePlugins: {
  //  overflow: false,
  // },
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        pushday_nippard: "url('bg_images/pushday_nippard.jpeg')",
        pullday_nippard: "url('bg_images/pullday_nippard.jpeg')",
      },
    },
  },
  variants: {
    scrollSnapType: ["responsive"],
    extend: {},
  },
  plugins: [require("tailwindcss-scroll-snap")],
};
