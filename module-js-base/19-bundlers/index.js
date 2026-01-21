import { sum } from './main.js'
import Alena from './alena-white-and-field.jpg'
import reactLogo from './React_Logo_SVG.svg';
import './index.css'



const array = [1, 2, 3].map(i => i + 1)


function hello(...args) {
  console.log('###: Hello Rollup', args[0], args[1])
}

const img = document.createElement('img')

hello(sum(1, 2), array)

// img.src = reactLogo
img.src = Alena

document.querySelector('body').append(img)
// console.log(reactLogo)