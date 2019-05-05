module.exports = {
  theme: {
    extend: {
      colors: {
        'primary-color': {
          100: '#F0F7FA',
          200: '#D9EAF1',
          300: '#C2DEE9',
          400: '#94C5D9',
          500: '#66ACC8',
          600: '#5C9BB4',
          700: '#3D6778',
          800: '#2E4D5A',
          900: '#1F343C',
        },
      },
      fontFamily: {
        'brand': [
          'Old Standard TT',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
      }

    },
    variants: {},
    plugins: [
      require("./plugins/hovers.js")({
        variants: ["responsive"],
      }),
      require("tailwindcss-grid")({
        grids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        gaps: {
          0: "0",
          4: "1rem",
          6: "1.5rem",
          8: "2rem",
          16: "4rem",
        },
        variants: ["responsive"],
      }),
    ]
  }
}
