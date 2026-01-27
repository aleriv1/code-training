Фреймворк — это набор готовых инструментов, библиотек и правил, который упрощает создание приложений. 

Иными словами, используя какой-либо фреймворк мы обязуемся следовать его правилам по организации кода. Благодаря этому другой разработчик, зная эти же правила, сможет без проблем разобраться в нашем коде и продолжить разработку приложения. 

Вам дан стартовый проект: [ссылка](https://fs04.gcfiles.net/fileservice/file/download/a/177331/sc/61/h/dbdb80b68bf36643099574a8920f1248.zip).

Работая с этим проектом мы будем имитировать работу с фреймворком. 

В проект добавлено небольшое демонстрационное приложение. Но прежде чем изучать его работу, давайте разберемся со структурой проекта. 

- Для сборки модулей в проект добавлена Webpack-конфигурация. Для запуска необходимо установить зависимости командой _npm i_ и запустить приложение командой _npm start_.
- В папке _/src_ находится весь исходный код приложения.
- Файл _/src/index.js_ — точка входа в приложение. Здесь мы подключаем корневой главный компонент и выводим его на страницу (далее мы поймем, как использовать компоненты).
- Файл _/src/index.html_ остается с пустым тегом _<body>_. В данном приложении вся разметка будет генерироваться с помощью JavaScript.
- В папке _/src/core_ содержится весь исходный код нашего мини-фреймворка. На данный момент это один класс _Component_.
- В папке _/src/components_ находятся все компоненты, используемые приложением. В данном случае компонент — это класс, который отвечает за отображение одной какой-либо части приложения на экран и содержит логику, связанную с этой частью.

На компонентах мы остановимся подробнее. Используя наш фреймворк, мы должны соблюдать некоторые правила работы с ним. Ниже приведена инструкция по работе с компонентами.

Создание компонента

Все файлы компонентов должны находиться в папке _/src/components/_. Компоненты должны быть представлены в виде классов и наследоваться от базового класса _Component_, который находится в папке _/src/core_.

// /src/components/YourComponent.js import { Component } from '../core/Component'; export class YourComponent extends Component { // ... }

Метод setup()

В компоненте обязательно должен быть метод _setup()_, внутри которого необходимо создать корневой элемент компонента и записать его в поле _$rootElement_. И уже внутри этого элемента формируем необходимую разметку. 

// Файл /src/components/YourComponent.js import { Component } from '../core/Component'; export class YourComponent extends Component { setup() { // Создаем корневой элемент this.$rootElement = document.createElement('div'); // Устанавливаем ему класс, чтобы можно было стилизовать this.$rootElement.className = 'component'; // Создаем дочерний элемент const $heading = document.createElement('h1'); $heading.textContent = 'Hello world'; // Добавляем заголовок в корневой элемент this.$rootElement.appendChild($heading); } }

Обратите внимание, _$_ в начале названий обозначает, что внутри переменной или поля содержится именно DOM-узел. Это сделано для наглядности и удобства. 

Вывод компонента

Чтобы добавить компонент на страницу, можно использовать стандартные методы DOM API. Создаем экземпляр класса компонента и вставляем элемент, который находится в _$rootElement_. 

// Файл /src/index.js import { YourComponent } from './components/YourComponent'; document.addEventListener('DOMContentLoaded', function () { const yourComponent = new YourComponent(); document.body.appendChild(yourComponent.$rootElement); });

Входные параметры

При инициализации компонента можно передать объект, в котором будут содержатся входные параметры. Например, мы хотим, чтобы заголовок внутри компонента вывел Hello world. 

// Файл /src/index.js import { YourComponent } from './components/YourComponent'; document.addEventListener('DOMContentLoaded', function () { // Передаем объект, в котором определим свойство heading const yourComponent = new YourComponent({ heading: 'Hello world' }); document.body.appendChild(yourComponent.$rootElement); });

Этот объект будет доступен в методе _setup()_ первым параметром — _props_. 

// Файл /src/components/YourComponent.js import { Component } from '../core/Component'; export class YourComponent extends Component { setup(props) { this.$rootElement = document.createElement('div'); const $heading = document.createElement('h1'); $heading.textContent = props.heading; // В заголовке будет "Hello world" this.$rootElement.appendChild($heading); } }

В данный момент нас не сильно интересует, как именно так получилось, что при передаче аргумента в конструктор он попал в метод _setup()_. Об этом позаботился фреймворк (а именно, родительский класс _Component_). Мы только знаем о такой возможности из правил работы с фреймворком, а как именно это реализовано, мы можем не знать.

Конечно, в нашем случае вы можете открыть файл _/src/core/Component.js_ и понять, почему так происходит. Это упрощенный пример, но при работе с настоящим фреймворком разобраться в его внутренних механизмах будет уже не так просто. Поэтому команда разработки фреймворка определяет все его возможности и особенности в документации, а разработчики, использующие фреймворк, обращаются к ней, чтобы узнать, как именно нужно его использовать. 

Данные компонента

Компонент может иметь свои внутрнние данные. Их необходимо определить в начале метода _setup()_ в поле _state_.

// Файл /src/components/YourComponent.js import { Component } from '../core/Component'; export class YourComponent extends Component { setup(props) { this.state = { counter: 0, // остальные компонента } this.$rootElement = document.createElement('div'); const $heading = document.createElement('h1'); $heading.textContent = props.heading; this.$rootElement.appendChild($heading); } }

Обработчики событий

Слушатели событий также добавляем в методе _setup()_ прямо к необходимым элементам. Обработчики можно определять как методы класса, но при передаче в слушатель необходимо закрепить контекст _this_ для сохранения доступа к полям компонента. 

// Файл /src/components/YourComponent.js import { Component } from '../core/Component'; export class YourComponent extends Component { setup(props) { this.state = { counter: 0 } this.$rootElement = document.createElement('div'); const $heading = document.createElement('h1'); // Первоначальный заголовок будет — Hello world: 0 $heading.textContent = \`${props.heading}: ${this.state.counter}\`; // Заносим элемент в поле $heading, чтобы потом смогли к нему обратиться this.$heading = $heading; this.$rootElement.appendChild($heading); // Создаем кнопку const $button = document.createElement('button'); $button.textContent = 'Увеличить счетчик'; // Передаем обработчик с закрепленным контекстом $button.addEventListener('click', this.handleClick.bind(this)); this.$rootElement.appendChild($button); } // Вызывается каждый раз при клике на кнопку handleClick(event) { // Увеличиваем счетчик this.state.counter++; // В методах класса входные параметры доступны через this.props const newTitle = \`${this.props.heading}: ${this.state.counter}\`; // Получаем элемент заголовка и обновляем его значение this.$heading.textContent = newTitle; } }

Обратите внимание, чтобы получить объект входных параметров внутри метода _handleClick()_ мы обратились к _this.props_. Это тоже еще одна возможность нашего фреймворка, которую мы можем использовать. 

Также обратите внимание, что можно сохранять DOM-элементы в поля класса компонента (как в данном случае _this.$heading_). Благодаря этому мы можем обращаться к этим элементам внутри других методов (как в данном случае внутри _handleClick()_).

Вложенные компоненты

Как правило, приложение состоит из набора компонентов, которые образуют иерархию. Таким образом, компоненты можно вкладывать друг в друга. Для этого дочерний компонент должен быть инициализирован в методе _setup()_ родительского компонента и добавлен на страницу. Вынесем кнопку в отдельный компонент _Button_. 

// Файл /src/components/YourComponent.js import { Component } from '../core/Component'; import { Button } from './Button'; export class YourComponent extends Component { setup(props) { this.state = { counter: 0 } this.$rootElement = document.createElement('div'); this.$rootElement.className = 'component'; const $heading = document.createElement('h1'); $heading.textContent = \`${props.heading}: ${this.state.counter}\`; this.$rootElement.appendChild($heading); this.$heading = $heading; // Передаем в кнопку входные параметры — текст и callback-функцию, // которая должна вызваться при клике на нее const incrementButton = new Button({ text: 'Увеличить счетчик', onClick: this.handleClick.bind(this) // Закрепляем контекст }); // При добавлении на страницу также используем $rootElement this.$rootElement.appendChild(incrementButton.$rootElement); } // Эта фукнция вызовется при клике на кнопку внутри компонента Button handleClick(event) { this.state.counter++; this.$heading.textContent = \`${this.props.heading}: ${this.state.counter}\`; } }

// Файл /src/components/Button.js import { Component } from '../core/Component'; export class Button extends Component { setup(props) { this.$rootElement = document.createElement('button'); // props.text содержит текст 'Увеличить счетчик' this.$rootElement.textContent = props.text; // props.onClick содержит метод handleClick() родительского компонента this.$rootElement.addEventListener('click', props.onClick); } }

Задача

Опираясь на вышеперечисленные правила и работу демонстрационного примера, в этом проекте необходимо реализовать приложение-сервис доната на благотворительные нужды. 

![](https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/d071d4fba1e31bfc948774f37beadb57.png/s/s1200x/a/177331/sc/339)

**Функциональные требования:**

1.  Один донат может быть в диапазоне от 1 до 100 долларов.
2.  При введении некорректного или пустого значения в поле ввода, кнопка должна быть заблокирована.
3.  При отправке введенной суммы донат моментально появляется в списке справа, а поле ввода очищается.
4.  Элементы списка содержат в себе дату создания доната и количество денежных средств в долларах.
5.  На странице должна выводиться сумма всех донатов. Причем при добавлении новых донатов, она должна сразу автоматически пересчитываться.

Итоговая HTML-разметка (не нужно вставлять в _index.html_, должна быть сгенерирована JavaScript-кодом):

```html
<body> <div class\="app"\> <h1 class\="total-amount"\>Итого: $<span\>15</span\></h1\> <form class\="donate-form"\> <label class\="donate-form\_\_input-label"\> Введите сумму в $ <input class\="donate-form\_\_donate-input" name\="amount" type\="number" max\="100" min\="1" required\> </label\> <button disabled class\="donate-form\_\_submit-button" type\="submit"\> Задонатить </button\> </form\> <div class\="donates-container"\> <h2 class\="donates-container\_\_title"\>Список донатов</h2\> <div class\="donates-container\_\_donates"\> <div class\="donate-item"\>19/01/2024, 18:12:01 - <b\>$1</b\></div\> <div class\="donate-item"\>19/01/2024, 18:12:01 - <b\>$2</b\></div\> <div class\="donate-item"\>19/01/2024, 18:12:01 - <b\>$3</b\></div\> <div class\="donate-item"\>19/01/2024, 18:12:02 - <b\>$4</b\></div\> <div class\="donate-item"\>19/01/2024, 18:12:02 - <b\>$5</b\></div\> </div\> </div\> </div\> </body\>
```

План реализации

Необходимо реализовать 4 компонента: _Form_, _List_, _ListItem_ и _App_ (корневой). 

![](https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/01d5e79e953b3a66142f27cbf9250a12.png/s/s1200x/a/177331/sc/92)

В проекте уже даны заготовки данных компонентов. Внесите в них код, реализующий функционал приложения. 

Показать шаги по реализации

Шаги по реализации

**Шаг 1.** В файле _index.js_ раскомментируйте импорт компонента _App_ и строчку, добавляющую компонент на страницу. Демонстрационный пример (_DemoCounter_) можете либо закомментировать, либо удалить. 

**Шаг 2.** В компоненте _App.js_ в начале метода _setup()_ определите объект состояния (_this.state_). Добавьте в него 2 свойства — _total_ со значением _0_ и пустой массив _donates_. В дальнейшем при создании донатов они будут добавляться в этот массив, а свойство _total_ будет увеличиваться на размер доната. 

**Шаг 3.** В этом же методе _setup()_ после создания _this.$rootElement_ и добавления для него класса добавьте код, создающий заголовок _<h1>_ и _<span>_ внутри. Опирайтесь на разметку, данную выше. В качестве внутреннего контента для _<span>_ укажите *this.state.total* (подставится _0_). После того, как сформируете заголовок, добавьте его в элемент _this.$rootElement_ с помощью метода _appendChild()_. На экране должно отобразиться:

![](https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/c40c4d31027e19487f045d26b3486318.png/s/s1200x/a/177331/sc/463)

**Шаг 4.** Сохраните созданный элемент _<span>_ в свойство _this.$total_. В дальнейшем оно пригодится для обновления значения итоговой суммы на экране.

**Шаг 5.** Теперь давайте перейдем в компонент _Form_. В начале метода _setup()_ создайте объект состояния с помощью _this.state_, в который добавьте свойство _amount_ со значением пустой строки. 

**Шаг 6.** Далее после создания _this.$rootElement_ и добавления для него класса добавьте код, создающий элементы _<label>_, _<input>_ и _<button>_ (также опирайтесь на разметку, данную выше). Добавьте элементы в _this.$rootElement_, чтобы по итогу получилась корректная разметка. На экране должно отобразиться:

![](https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/04d09962b30674fb949d2414126610d9.png/s/s1200x/a/177331/sc/418)

**Шаг 7.** Сохраните элементы _<input>_ и _<button>_ в поля _this.$input_ и _this.$button_ соответственно. В дальнейшем они нам пригодятся.

**Шаг 8.** Теперь в методе _setup()_ добавьте 2 слушателя события:

- Событие _input_ на элемент _this.$input_, обработчик — _this.handleInput()_
- Событие _submit_ на элемент _this.$rootElement_, обработчик — _this.handleSubmit()_

Не забывайте про привязку контекста с помощью метода _bind()_. 

**Шаг 9.** Внутри обработчика _handleInput()_ попробуйте вывести в консоль _event.target.value_. Убедитесь, что при вводе значения в поле ввода это значение появляется в консоли. 

После этого в обработчике установите для _this.state.amount_ значение _event.target.value_. 

**Шаг 10.** Теперь в классе компонента создайте геттер _isValid_. Он должен возвращать значение _true_, если _this.state.amount_ является числом в диапазоне от 1 до 100, а иначе — _false_. 

После этого в методе _handleInput()_ выведите _this.isValid_ в консоль. Убедитесь, что при вводе в поле ввода корректных значений выводитится _true_, а при неправильных — _false_. 

**Шаг 11.** Также в методе _handleInput()_ устанавливайте для _this.$button_ атрибут _disabled_ со значением _true_, если введено неверное значение. Если введено верное значение, то устанавливайте _false_. 

**Шаг 12.** Теперь перейдем к методу _handleSubmit()_. Первым делом сделайте так, чтобы при отправке формы страница не перезагружалась. 

Далее, если в _this.state.amount_ содержится верное значение (проверить можно с помощью _this.isValid_), выведите его в консоль, а после этого установите в _this.state.amount_ и в поле ввода (_this.$input.value_) значение пустой строки.

**Шаг 13.** Теперь перейдем в компонент _List_. Здесь в методе _setup()_ после создания _this.$rootElement_ и добавления для него класса добавьте код, создающий элементы _<h2>_ и _<div>_ (также опирайтесь на разметку, данную выше). Элемент _<div>_ пока будет пустым. Добавьте эти 2 элемента в _this.$rootElement_. На экране должно отобразиться:

![](https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/a7b7c3e460accee361373b5cc8d9ede7.png/s/s1200x/a/177331/sc/389)

**Шаг 14.** Сохраните элемент _<div>_ в свойство _this.$listContainer_. В дальнейшем он нам пригодятся.

**Шаг 15.** Теперь вернемся в компонент _App_. Мы помним, что массив донатов (_this.state.donates_) у нас хранится в корневом компоненте, поэтому добавлять новый элемент мы также будем здесь. Но как нам его добавить, если обработчик события отправки формы находится внутри компонента _Form_? 

Один из вариантов, которым мы можем поступить — это передать callback-функцию внутрь компонента _Form_. В компоненте _App_ определен метод _onItemCreate()_, давайте передадим его как входной параметр в компонент _Form_. Для этого при создании экземпляра класса _Form_ в конструктор передадим объект, внутри которого будет свойство _onSubmit_ со значением _this.onItemCreate_ (не забываем привязать контекст). 

**Шаг 16.** Теперь в компоненте _Form_ в props нам доступен метод _onSubmit()_. В методе _handleSubmit()_ заменим _console.log(this.state.amount)_ на вызов метода _this.props.onSubmit()_. Внутрь него передадим значение _this.state.amount_, приведенное к числу. 

**Шаг 17.** Теперь в компоненте _App_ метод _onItemCreate()_ будет вызываться в тот момент, когда произошла успешная отправка формы. Причем первым параметром мы получаем _amount_ — валидное число, введенное в поле ввода. В данном методе необходимо создать новый экземпляр класса _ListItem_, передав в его конструктор объект со свойством и значением _amount_. Экземпляр класса можно сохранить в переменную _item_ и добавить ее в массив _this.state.donates_ с помощью метода _push()_. 

**Шаг 18.** В самом компоненте _ListItem_ в начале метода _setup()_ необходимо определить объект состояния (_this.state_) со свойствами:

- _id_ — можно сгенерировать с помощью _Date.now()_
- _date_ — дата создания доната (укажем _new Date()_)
- _amount_ — значение из _props.amount_

Затем в методе _setup()_ после создания _this.$rootElement_ и добавления для него класса добавьте в _this.$rootElement_ внутреннее содержимое, соответствующее предоставленной выше разметке. В качестве выводимых значений используйте свойства из _this.state_. 

**Шаг 19.** После того, как в методе _onItemCreate()_ компонента App мы создали новый экземпляр класса _ListItem_ (переменную _item_) и добавили его в массив _this.state.donates_, нам нужно каким-то образом добавить этот компонент на страницу. Для этого в классе _List_ определим еще один метод — _addItem()_. Он будет принимать _item_ — экземпляр класса _ListItem_ и будет добавлять его в список на странице. Как мы помним, список мы сохраняли в _this.$listContainer_, для добавления элемента в него можно воспользоваться методом _appendChild()_. А сам добавляемый элемент как обычно содержится в поле _item.$rootElement_.

**Шаг 20.** Далее в методе _setup()_ компонента _App_ сохраним ссылку на _donateList_ в поле _this.donateList_. 

**Шаг 21.** Теперь в методе _onItemCreate()_ компонента _App_ мы имеем доступ к методу _addItem()_ компонента _List_. Добавим вызов _this.donateList.addItem()_ и передадим в него _item_. 

**Шаг 22.** После этого в методе _onItemCreate()_ нам остается приплюсовать к _this.state.total_ значение _amount_ и обновить это итоговое значение на странице в элементе _this.$total_. 

Дополнительно

Реализовать возможность удаления донатов. 

![](https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/16255b3004f398918ca6764078e1593b.png/s/s1200x/a/177331/sc/427)

При нажатии на кнопку Удалить элемент должен пропасть из списка и итоговая сумма должна уменьшиться. 

Стили для кнопки Удалить доступны по CSS-классу _.delete-button_.
