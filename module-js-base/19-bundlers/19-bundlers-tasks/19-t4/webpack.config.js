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

import path from 'node:path'
import { fileURLToPath } from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development',
  entry: path.resolve(__dirname, './src/', 'index.js'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build'),
    clean: true
  },

  devServer: {
    static: './build',
    port: 8080,
    open: true
  },
  plugins: [new HtmlWebpackPlugin({
    // template: path.resolve(__dirname, 'index.html')
    template: path.resolve(__dirname, './src/', 'index.html')
  })],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
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
    ],
  },
}