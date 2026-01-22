// npm i -D webpack webpack-cli
// npm install --save-dev style-loader css-loader
// npm install -D babel-loader @babel/core @babel/preset-env webpack
// npm install --save-dev webpack-dev-server
// npm install --save-dev html-webpack-plugin

console.log('Alena')

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