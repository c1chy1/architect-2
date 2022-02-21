module.exports = {
  mode: process.env.NODE_ENV ? 'jit' : undefined,

  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {

    colors: {
      'primary': '#F0ECE3',
      'secondary': '#DFD3C3',
      'tertiary': '#C7B198',
      'fourth': '#596E79',
      'orange': '#cd5225',
    },


    fontFamily: {

      'raleway': ['raleway','sans-serif'],
      'muli': ['Muli', 'sans-serif']

    },
    boxShadow: {'img': '5px 6px 10px 0px black'}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
