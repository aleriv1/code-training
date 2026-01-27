import { getRandomColor } from "./utils"

export default function initApp() {
  console.log('hello')
  const body = document.querySelector('body')
  const buttonChangeColor = document.createElement('button')
  buttonChangeColor.className = 'button'
  buttonChangeColor.textContent = "Изменить цвет страницы"
  buttonChangeColor.addEventListener('click', (e) => {
    const randomColor = getRandomColor()
    console.log('color')
    body.style.backgroundColor = randomColor
  })

  body.append(buttonChangeColor)

}