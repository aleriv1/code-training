// npm i -D webpack webpack-cli
// npm install --save-dev style-loader css-loader
// {
//   test: /\.css$/i,
//   use: ['style-loader', 'css-loader'],
// },

// npm install -D babel-loader @babel/core @babel/preset-env webpack
/* 
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            targets: "defaults",
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      },
 */


// npm install --save-dev webpack-dev-server
/* 
 module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
    ]
  }
 */

// npm install --save-dev html-webpack-plugin
//   plugins: [new HtmlWebpackPlugin()],


// for images
/* 
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
 */

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