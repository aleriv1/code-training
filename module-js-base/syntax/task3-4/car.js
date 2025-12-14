const carName = 'Ferrari'
let maxSpeed = 300
let carOwner = "Aleksandr"

const car = {
  carName: 'Ferrari',
  maxSpeed: 300,
  carOwner: 'Aleksandr'
}

console.log(carName, maxSpeed, carOwner)

for (const key in car) {
  console.log(key + ' : ' + car[key])
}

const list = document.createElement('ul')

for (const key in car) {
  let item = document.createElement('li')
  // item.textContent = key + ' : ' + car[key]
  item.textContent = `${key} : ${car[key]}`
  list.appendChild(item)
}

car.maxSpeed = car.maxSpeed + 300


for (const key in car) {
  let item = document.createElement('li')
  // item.textContent = key + ' : ' + car[key]
  // key === 'maxSpeed' ? item.textContent = `now max speed is ${key} : ${car[key]}` : item.textContent = `${key} : ${car[key]}`

  item.textContent = `${key} : ${car[key]}`
  if (key === 'maxSpeed') item.textContent = `now max speed is ${key} : ${car[key]}`
  if (key === 'carOwner') item.textContent = `now owner is ${key} : ${car[key]}`

  list.appendChild(item)
}

document.body.appendChild(list)