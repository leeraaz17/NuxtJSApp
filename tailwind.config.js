// module.exports = ({ dev, rootDir, srcDir }) => {}

module.exports = ({ dev, rootDir, srcDir }) => ({
  theme: {
    colors: {
      primary: defaultTheme.colors.green
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: !dev,
    content: [
      `${srcDir}/components/**/*.vue`,
      `${srcDir}/layouts/**/*.vue`,
      `${srcDir}/pages/**/*.vue`,
      `${srcDir}/plugins/**/*.js`,
      `${rootDir}/nuxt.config.js`,
      // TypeScript
      `${srcDir}/plugins/**/*.ts`,
      `${rootDir}/nuxt.config.ts`
    ]
  }
})


// const plugin = require('tailwindcss/plugin')

// module.exports = {
//   future: {
//     // removeDeprecatedGapUtilities: true,
//     // purgeLayersByDefault: true,
//   },
//   purge: [],
//   theme: {
//     screens: {
//       sm: '640px',
//       md: '768px',
//       lg: '1024px',
//       xl: '1280px',
//     },
//     fontFamily: {
//       display: ['Gilroy', 'sans-serif'],
//       body: ['Graphik', 'sans-serif'],
//     },
//     borderWidth: {
//       default: '1px',
//       '0': '0',
//       '2': '2px',
//       '4': '4px',
//     },
//     extend: {
//       colors: {
//         cyan: '#9cdbff',
//       },
//       spacing: {
//         '96': '24rem',
//         '128': '32rem',
//       }
//     }
//   },
//   variants: {
//     appearance: ['responsive'],
//     backgroundColor: ['responsive', 'hover', 'focus'],
//     fill: [],
//   },
//   plugins: [
//     plugin(function({ addUtilities }) {
//       const newUtilities = {
//         '.skew-10deg': {
//           transform: 'skewY(-10deg)',
//         },
//         '.skew-15deg': {
//           transform: 'skewY(-15deg)',
//         },
//       }

//       addUtilities(newUtilities)
//     })
//     // require('tailwindcss-transforms'),
//     // require('tailwindcss-transitions'),
//     // require('tailwindcss-border-gradients'),
//   ],
//   prefix: 'tw-',
//   important: true,
// }
