import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import styles from 'rollup-plugin-styles'
import image from '@rollup/plugin-image';
// import server from 'rollup-plugin-server'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload';


export default {
  input: 'C:/data/obmen/result/module-js-base/19-bundlers/index.js',
  output: {
    file: 'C:/data/obmen/result/module-js-base/19-bundlers/dist/bundle.js',
    // format: 'cjs'
    format: 'iife'
  },

  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    styles(),
    image(),
    // server('C:/data/obmen/result/module-js-base/19-bundlers/dist')
    serve('C:/data/obmen/result/module-js-base/19-bundlers'),
    livereload()
  ]
}