// npm i rollup -D
// npm install -D @rollup/plugin-node-resolve rollup-plugin-styles @rollup/plugin-image @babel/core @rollup/plugin-babel @babel/preset-env rollup-plugin-serve rollup-plugin-livereload -f
// npm i -D @rollup/plugin-html -f

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
    serve({
      open: true,
      contentBase: ['dist'],
      port: 10001
    }),
    livereload(),
    html({
      title: 'Rollup task 2'
    })
  ]
}

// https://stackblitz.com/edit/stackblitz-starters-yjzqujv1