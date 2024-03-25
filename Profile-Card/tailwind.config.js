/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-pattern': "url('/images/bg-pattern-top.svg')",
      }

    },
  },
  plugins: [],
};
