// Задание, вероятно, не совсем корректное; SyntaxError выявляется заранее, до исполнения кода;
// до console.log() или debugger дело просто не доходит

let health = +prompt('Введите число параметра "здоровье" для персонажа')
console.log(health)
if (health < 0 || health === 0) {
  debugger
  // health < 0 || health!
  alert('Параметр "здоровье" должен быть больше нуля!')
  // } else () {
} else {
  // debugger
  // alert(Параметр "здоровье" равен ${ Health });
  console.log(health)
  alert(`Параметр "здоровье" равен ${health}`);
}