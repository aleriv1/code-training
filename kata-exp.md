# Frontend base

## Git

### **Основные материалы**

- [Документация HTML/CSS/JS](https://developer.mozilla.org/ru/) - самое свежее и актуальное
- [Учебник по JS](https://learn.javascript.ru/) - учебник Кантора
- [Совместимость браузеров с функционалом HTML/CSS/DOM API](https://caniuse.com/) -
- [WebReference](https://webref.ru/) - хороший справочник HTML/CSS, но не учебник
- **Не используйте Htmlbook.ru** - много устаревшей, а то и вовсе ложной инфы
- (опционально) Вместо Github Pages можно использовать сервис now: [настройка](https://gist.github.com/didolf/48f51b2f891aceff35048334eb3a96c8)

### 1.2 Git

### **Работа с гит**

[Базовый курс по Git](https://vk.com/video/playlist/-227259800_4)  
[Learn Git Branching](https://learngitbranching.js.org/) - Первые 2 задания

### **Удобные графические редакторы для Git**

- Встроенные инструменты WebStorm
- [GitKraken](https://www.gitkraken.com/)
- [SmartGit](https://www.syntevo.com/smartgit/)

## 2 Основы CSS/HTML

### **Основы CSS/HTML**

[Знакомство с HTML и CSS](https://htmlacademy.ru/courses/basic-html-css)  
[Продвинутый HTML и CSS](https://htmlacademy.ru/courses/advanced-html-css)  
[Раздел про селекторы](https://htmlacademy.ru/courses/42/run/1)

### **Доп информация**

- [Немного о доступности](https://medium.com/@ABatickaya/%D0%BF%D0%B8%D1%88%D0%B5%D0%BC-html-%D0%BD%D0%B5-%D0%B7%D0%B0%D0%B1%D1%8B%D0%B2%D0%B0%D1%8F-%D0%BE-%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%BE%D1%81%D1%82%D0%B8-9ffbf97ecbe7) //для открытия используй VPN
- [HTML: Хорошая основа для доступности](https://developer.mozilla.org/ru/docs/Learn/Accessibility/HTML)
- [img или background](https://htmlacademy.ru/blog/html/content-or-decor-img)
- [Про svg](https://htmlacademy.ru/blog/html/a-guide-to-svg-on-web)
- [Единицы измерения CSS](https://learn.javascript.ru/css-units)
- [JPEG и PNG — в чём разница форматов?](https://web-creator.ru/articles/jpeg_vs_png)
- [Скрытие элементов в вебе](https://dev-gang.ru/article/skrytie-elementov-v-vebe-3zoi5nbzxo/)
- [Кастомные чекбоксы правильно](https://vk.com/video-227259800_456239045)
- [Сколько весят селекторы?](http://css.yoksel.ru/specifity/)

### **Ревью по теме «Основы CSS/HTML»**

Чтобы закрепить изученный материал, необходимо пройти ревью знаний у ментора. Для записи на ревью необходимо нажать на кнопку «Запись на ревью» и выбрать подходящий слот в календаре.

- Структура HTML
- Семантическая разметка и SEO. Доступность.
- Инструменты разметки и оформления текста, управление отображением
- Различия форматов изображений, особенности SVG
- Оформление текста
- Псевдоклассы
- Продвинутые селекторы, стилизация радио/чекбоксов
- Расчет специфичности селекторов
- Работа с таблицами и формами
- Наследование CSS

## 3 Построение сеток + БЭМ именование

### **Основные материалы**

[Сетки](https://htmlacademy.ru/courses/layout)  
[Документация БЭМ](https://ru.bem.info/methodology/quick-start/) - Первые 4 раздела  
[Доклад по БЭМ](https://vk.com/video-227259800_456239044) ( [Слайды](http://ihorzenich.github.io/talks/bem-frontendweekend/) )  
[Методология БЭМ за 17 минут](https://vk.com/video-227259800_456239043)  
[Chrome DevTools](https://ru.hexlet.io/courses/html/lessons/devtools/theory_unit)  
[Сетки на флоатах и блочно-строчных](https://htmlacademy.ru/courses/65/run/1)  
[Новая сетка на inline-block](https://habr.com/ru/post/321718/)  
[CSS Display свойство](https://vk.com/video-227259800_456239041)

### **Доп материалы**

- [Кроссбраузерная верстка](https://htmlacademy.ru/blog/video/shorts/short-21)
- [Flexbox Cheatsheet](https://yoksel.github.io/flex-cheatsheet/)
- [\* { box-sizing: border-box; }](https://toster.ru/q/520184)
- [CSS Медиа запросы](https://itchief.ru/lessons/html-and-css/css-media-queries)
- [Адаптивный дизайн сайта](https://itchief.ru/bootstrap/responsive-website-design)
- [Основы Figma для верстальщика](https://htmlacademy.ru/blog/html/figma)
- [Подробно о свойстве float](https://habr.com/ru/post/142486/)

### **Примечания**

- inline-block и float для сеток устарели, но нужны для старых браузеров и саппорта старых проектов
- flex самая актуальная технология, на данный момент
- У grid еще не супер поддержка, но на будущее пригодится

### Практическая задача

Сверстать блок из [макета](https://www.figma.com/file/3rqvXG3YwNupBvgTCMooiy/%D0%91%D0%BB%D0%BE%D0%BA-1.3%3A-%D0%9F%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D0%B5%D1%82%D0%BE%D0%BA-%2B-%D0%91%D0%AD%D0%9C-%D0%B8%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5?node-id=0%3A312&t=jJKMZDsovvVxSPjT-1), выложить на Github и Github pages.

- Это часть макета из блока 1.6, поэтому выделяйте общие элементы исходя из итогового макета.
- Для верстки использовать flexbox.
- Используем подход Mobile First: Сначала верстаем версию на 320px - потом прописываем измнения для остальных экранов
- [Шрифт для макета](https://webfonts.pro/base-web-fonts/sans-serif-grotesque/897-tt-lakes.html)
- Все стили должны быть по БЭМ. Стиль именования - two dashes: `block-name__elem-name--mod-name--mod-val`
- На мобилке меню скроллится с помощью стандартного горизонтального скролла, см. свойство overflow
- На различный порядок и количество пунктов меню не обращайте внимание - меню на всех разрешениях должно быть одинаковым. По непонятным моментам в макете - обращайтесь к однокурсникам или ментору.

**Ссылку на готовую работу необходимо прикрепить к этому заданию и нажать кнопку «Отправить решение», чтобы оно попало на проверку к ментору.**

https://github.com/aleriv1/aleriv1.github.io/tree/main

### **Ревью по теме «Построение сеток + БЭМ именование»**

Чтобы закрепить изученный материал, необходимо пройти ревью знаний у ментора. Для записи на ревью необходимо нажать на кнопку «Запись на ревью» и выбрать подходящий слот в календаре.

- Блочная модель документа
- Верстка флоатами и inline-block - их проблемы и способы решения
- Анатомия flexbox
- Гриды
- Особенности кроссбраузерной верстки, поддержка гридов и флексов, вендорные префиксы
- С какими проблемами борется БЭМ
- Термины БЭМ: Блок, элемент, модификатор, микс
- overflow

# Web Core

## 1 Продвинутая стилизация

### **Основная информация**

[Позиционирование](https://htmlacademy.ru/courses/css-box-model) (часть 1 и часть 2)

[Фоны (2 и 3 части)](https://htmlacademy.ru/courses/basic-styling)

[Градиенты и тени + Декоративные эффекты](https://htmlacademy.ru/courses/decoration) (без испытаний)

[Трансформации](https://htmlacademy.ru/courses/advanced-decoration)

[Динамические эффекты](https://htmlacademy.ru/courses/dynamic)

[Мастерские](https://htmlacademy.ru/courses/workshop)

### **Доп материалы**

- [Почему перемещать элементы с помощью translate лучше, чем с position:absolute](https://webformyself.com/css-ot-a-do-ya-raznica-mezhdu-translate-i-position-relative/)
- [Emmet](https://habr.com/ru/post/175747/) (увы, на html academy не работает =( )
- [Контекст наложения](https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)

#Практическая задача

#### Задание

Сверстать блок из [макета](https://www.figma.com/file/mQU2ivQ2OK797KI9x8j7DX/%D0%91%D0%BB%D0%BE%D0%BA-1.4%3A-%D0%9F%D1%80%D0%BE%D0%B4%D0%B2%D0%B8%D0%BD%D1%83%D1%82%D0%B0%D1%8F-%D1%81%D1%82%D0%B8%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F?node-id=0%3A312&t=oC0kRLaGviucmD5e-1), кладём в доступный файл в ближайший репозиторий. Блок должен быть шириной 320 пикселей и фиксироваться в левой части экрана независимо от размера экрана. При наведении стиль кнопок плавно меняется, возьмите для этого какой-нибудь css filter или opacity.

**Ссылку на готовую работу необходимо прикрепить к этому заданию и нажать кнопку «Отправить решение», чтобы оно попало на проверку к ментору.**

https://github.com/aleriv1/aleriv1.github.io/tree/kata4-1-3

### **Ревью по теме «Продвинутая стилизация»**

Чтобы закрепить изученный материал, необходимо пройти ревью знаний у ментора. Для записи на ревью необходимо нажать на кнопку «Запись на ревью» и выбрать подходящий слот в календаре.

- Позиционирование
- Фоны
- Тени
- Градиенты
- Трансформации
- Анимации
- z-index

## 2 JavaScript в браузере

### **Основные материалы**

[Требования к стилю кода](https://learn.javascript.ru/coding-style)  
[Программирование на JavaScript](https://htmlacademy.ru/courses/javascript) - Без задач из "Практика".  
[JS в браузере](https://htmlacademy.ru/courses/javascript-in-browser)

### **Доп материалы**

- [Введение](https://learn.javascript.ru/intro)
- [Типы данных](https://learn.javascript.ru/types)
- [Приведение типов](https://learn.javascript.ru/type-conversions)
- [Замыкания](http://learn.javascript.ru/closure)

### Практическая задача

#### Задание

Сверстать блок из [макета](https://www.figma.com/file/7Aydx1qy2l56BJYrIDlHFq/%D0%91%D0%BB%D0%BE%D0%BA-1.5%3A-JavaScript-%D0%B2-%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%B5?node-id=0%3A312&t=dGww9JjOvv9cuZX8-1), добавить в репозиторий. Блок должен иметь разное количество элементов при разной ширине экранов. Необходимо реализовать кнопки "Показать все"/"Скрыть". По нажатию на кнопку "Показать все" должны открываться все ссылки и кнопка должна менять свое название на "Скрыть", по нажатию "Скрыть" ссылки должны сворачиваться обратно и кнопка должна поменять свое название на "Показать все". На мобильном нужно инициировать [этот слайдер](https://swiperjs.com/) (погуглите, как это сделать только для мобилки, переключение при ресайзе не обязательно). На отличие набора брендов при разных разрешениях не обращайте внимание, главное чтобы их количество и внешний вид соответствовали макету.

**Ссылку на готовую работу необходимо прикрепить к этому заданию и нажать кнопку «Отправить решение», чтобы оно попало на проверку к ментору.**

https://github.com/aleriv1/aleriv1.github.io/tree/kata5-1-3

### **Ревью по теме «JavaScript в браузере»**

Чтобы закрепить изученный материал, необходимо пройти ревью знаний у ментора. Для записи на ревью необходимо нажать на кнопку «Запись на ревью» и выбрать подходящий слот в календаре.

- Типы данных
- Приведение типов
- Области видимости
- Взаимодействие с DOM
- Обработка событий
- Замыкания

## 3 Настройки окружения + верстка финального макета

### **Основная информация**

- [Что такое npm?](https://proglib.io/p/chto-takoe-npm-gayd-po-node-package-manager-dlya-nachinayushchih-2020-07-21)
- [Руководство Eslint + Prettier](https://ru.hexlet.io/blog/posts/rukovodstvo-eslint-prettier)
- [Webpack](https://vk.com/video-227259800_456239042)

### **Доп материалы**

- [Полезные команды npm](https://htmlacademy.ru/blog/js/useful-commands-for-working-with-nodejs)
- [SCSS + БЭМ](https://nicothin.pro/idiomatic-pre-CSS/)

### **Инструменты**

- [SCSS](https://sass-scss.ru/guide/) - нас интересует вложенность правил, импорты, переменные
- autoprefixer
- [normalize.css](https://htmlacademy.ru/blog/useful/css/about-normalize-css)
- editorconfig

### **На что смотрим в верстке**

- Правильный БЭМ нейминг
- Корректное использование тегов
- Корректное отображение на всех разрешениях от 320px до 1920px
- Нормально подключенные шрифты
- Коррекная работа интерактива
- Использование возможностей SCSS в сочетании с БЭМ
- Плавные анимации, ховеры на кликабельных элементах
- Отсутствие ошибок в консоли

### Практическая задача

[Задание по верстке](https://gist.github.com/jm-program/b786de1a1f34b62d3c30e587fb0c3d3d)  
Скрипты для запуска проекта и деплоя на Github Pages смотрим в репо сборки.

**Ссылку на готовую работу необходимо прикрепить к этому заданию и нажать кнопку «Отправить решение», чтобы оно попало на проверку к ментору.**

https://github.com/aleriv1/aleriv1.github.io/tree/kata6

### **Ревью по теме «Настройки окружения**

Чтобы закрепить изученный материал, необходимо пройти ревью знаний у ментора. Для записи на ревью необходимо нажать на кнопку «Запись на ревью» и выбрать подходящий слот в календаре.

- npm
- babel
- source maps
- dependencies
- lock файл
- npm scripts

# JS core

## 1 Основные концепции

### 1.1 Примитивные типы данных

#### Лекция 1.1.1 JS Core Лекция Типы данных

[Основы JavaScript. #4 Типы данных](https://vk.com/video-227259800_456239189)

---

[Типы данных Кантор](https://learn.javascript.ru/types)

---

[typeof MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/typeof)

#### Лекция 1.1.2 JS Core Лекция Переменные и константы

[Основы JavaScript. #5 Переменные](https://vk.com/video-227259800_456239190)

---

[Переменные Кантор](https://learn.javascript.ru/variables)

---

[Разница между var let const](https://medium.com/nuances-of-programming/%D0%B2-%D1%87%D1%91%D0%BC-%D1%80%D0%B0%D0%B7%D0%BD%D0%B8%D1%86%D0%B0-%D0%BC%D0%B5%D0%B6%D0%B4%D1%83-var-let-%D0%B8-const-%D0%B2-javascript-3084bfe9f7a3)

---

[Советы по стилю кода](https://learn.javascript.ru/coding-style)

> Note: Всегда предпочитайте const перед let. Использование var вовсе не желательно
>
> Note: Принятый стиль именования - camelCase
>
> Note: Создание переменных без идентификатора let/const/var - плохая практика.

#### Лекция 1.1.3 JS Core Лекция Ошибки

Ошибки в JavaScript / Введение в программирование, урок 7 (JavaScript ES6)
