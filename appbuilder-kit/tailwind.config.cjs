module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  //tailwind typography: https://daisyui.com/docs/layout-and-typography/
  //daisyui: https://daisyui.com/docs/use/
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};