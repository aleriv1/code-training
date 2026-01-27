export function getRandomColor() {
  const randomNumber255 = () => Math.floor(Math.random() * 256)
  return `rgb(${randomNumber255()}, ${randomNumber255()}, ${randomNumber255()})`
}
