// #region JsIntroTask3Configm

function JsIntroTaskTask3Confirm() {
  confirm('js appeared in 1995?') ? console.log('right') : console.log('wrong')
  confirm('is the js specification called ECMAscript') ? console.log('right') : console.log('wrong')
  confirm('Was js created in one month') ? console.log('right') : console.log('wrong')
}

JsIntroTaskTask3confirmTask()


function JsIntroTaskTask3ConfirmAnother() {
  /* eslint-disable */

  if (confirm("JavaScript появился в 1995 году?") === true) {
    alert("Верно!");
  } else {
    alert("Неверно! JavaScript появился в 1995 году");
  }

  if (confirm("Спецификация JavaScript называется ECMAScript?") === true) {
    alert("Верно!");
  } else {
    alert("Неверно! Спецификация JavaScript называется ECMAScript");
  }

  if (confirm("JavaScript был создан за 1 месяц?") === true) {
    alert("Неверно! JavaScript был создан за 10 дней");
  } else {
    alert("Верно! JavaScript был создан за 10 дней");
  }
}

// #endregion JsIntroTask3Configm