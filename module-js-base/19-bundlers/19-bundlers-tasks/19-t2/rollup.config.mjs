import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import styles from 'rollup-plugin-styles'
import image from '@rollup/plugin-image'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import html from '@rollup/plugin-html'

export default {
  input: './src/index.js',
  output: {
    file: './dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    styles(),
    image(),
    serve(),
    livereload(),
    html({
      title: 'Rollup task 2'
    })
  ]
}