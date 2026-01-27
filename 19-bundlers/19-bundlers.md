Цель урока:

1.  Узнать, что такое сборщики и для чего они используются в JavaScript-проектах.

Содержание урока:

1.  Сборщики проектов. Установка NodeJS и NPM
2.  Rollup
3.  Webpack
4.  Vite

Дополнительные материалы:

1.  Документация Webpack: [ссылка](https://webpack.js.org/guides/getting-started/)
2.  Документация Rollup: [ссылка](https://rollupjs.org/guide/en/)[](https://rollupjs.org/guide/en/)
3.  Документация Vite: [ссылка](https://vitejs.dev/)

Обратите внимание!

Задания в уроках 19-20 можно сдавать через [CodeSandbox](https://codesandbox.io/), [StackBlitz](https://stackblitz.com/~/), любую другую песочницу или прикрепить архив с решением в форму ответа. Первый вариант отправки является более предпочтительным.

<!--  -->

Инструкция работы с CodeSandbox, Stackblitz

1\. Подготовьте свой проект

\- Убедитесь, что в проекте есть package.json.

\- Если у вас Vite, Webpack, Rollup или другой сборщик, просто оставьте структуру проекта как есть. Песочницы это понимают.

2\. Вариант 1. CodeSandbox

\- Зайдите на [https://codesandbox.io](https://codesandbox.io/)

\- Нажмите Create Sandbox.

\- Выберите шаблон Node, Vite, Webpack, Vanilla, или любой похожий.

 В открывшемся окне:

\- удалите стандартные файлы шаблона

\- перетащите в окно папку вашего локального проекта или загрузите файлы вручную

\- Проверьте, что сборка запускается (кнопка Start / Run).

\- Скопируйте URL песочницы и вставьте в форму сдачи ДЗ.

3\. Вариант 2. StackBlitz

\- Перейдите на [https://stackblitz.com](https://stackblitz.com/)

\- Нажмите Create Project.

\- Выберите нужный шаблон (Vite, Webpack, JavaScript).

\- В интерфейсе перетащите свои файлы или загрузите их по одному.

\- StackBlitz автоматически установит зависимости из package.json.

\- После запуска получите URL проекта и отправьте его.

4\. Если проект не запускается

\- Проверьте package.json на корректность.

\- Убедитесь, что все зависимости записаны в dependencies или devDependencies.

\- Если вы использовали абсолютные пути в импортах, замените на относительные.

\- Vite, Webpack, Rollup должны запускаться из коробки, но иногда помогает удалить node_modules перед загрузкой.

<!--

https://webpack.js.org/plugins/html-webpack-plugin/#root
https://webpack.js.org/guides/development/#using-webpack-dev-server
https://webpack.js.org/loaders/babel-loader/#root
https://webpack.js.org/guides/asset-management/#loading-images
https://webpack.js.org/guides/asset-management/#loading-css
https://webpack.js.org/guides/installation/

 -->
