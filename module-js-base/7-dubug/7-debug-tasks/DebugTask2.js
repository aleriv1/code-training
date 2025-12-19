const temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');
// const temperatureInCelsius = '0';

if (temperatureInCelsius === null) {
  alert('Вы отменили ввод температуры');
} else {
  console.log(temperatureInCelsius)
  // if (temperatureInCelsius === 0) {
  if (+temperatureInCelsius === 0) {
    alert('0 градусов по Цельсию - это температура замерзания воды')
  } else if (temperatureInCelsius > 0) {
    alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
  }

  debugger
  // const temperatureInFahrenheit = (temperatureIncelsius) * 9 / 5 + 32;
  const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;
  // alert(`%{temperatureInCelsius} градусов по Цельсию - это %{temperatureInFahrenheit} по Фаренгейту.`);
  alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);
}