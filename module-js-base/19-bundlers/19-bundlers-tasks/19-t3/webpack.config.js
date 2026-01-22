// npm i -D webpack webpack-cli

import path from 'node:path'
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development',
  entry: path.resolve(__dirname, './', 'index.js'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build'),
    clean: true
  }
}

// https://stackblitz.com/edit/webpack-webpack-js-org-vk23z5rt