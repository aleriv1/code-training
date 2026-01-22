// npm i rollup -D
// npm install -D rollup-plugin-styles @rollup/plugin-image @rollup/plugin-babel @babel/preset-env rollup-plugin-serve rollup-plugin-livereload rollup-plugin-livereload -f
// npm i -D @rollup/plugin-html -f

import jsLogo from './assets/js-logo.png'
import './index.css'

console.log('Hello, Alena!')

const header = document.createElement('h1')
// header.textContent = 'I love JS'
// header.innerHTML = '<span>I</span> <span>love</span> <span>JS</span>'
header.innerHTML = '<span>I</span> <span>love</span>'
document.querySelector('body').append(header)

const img = document.createElement('img')
img.src = jsLogo
document.querySelector('body').append(img)