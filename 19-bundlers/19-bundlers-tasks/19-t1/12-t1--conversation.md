### 20260122-072332

После установки rollup через
npm i rollup -D
хочу установить
npm install -D rollup-plugin-styles

делаю в подпапке проекта, в котором в корне уже установлен эти пакеты и зависимости;
в подпапке создал новый конфиг через
npm init -y

В результате при
npm install -D rollup-plugin-styles

ошибка в терминале

PS C:\data\obmen\result\module-js-base\19-bundlers\19-bundlers-tasks\19-tt1> npm install -D rollup-plugin-styles  
npm error code ERESOLVE
npm error ERESOLVE unable to resolve dependency tree
npm error
npm error While resolving: 19-tt1@1.0.0
npm error Found: rollup@4.55.3
npm error node_modules/rollup
npm error dev rollup@"^4.55.3" from the root project
npm error
npm error Could not resolve dependency:
npm error peer rollup@"^2.63.0" from rollup-plugin-styles@4.0.0
npm error node_modules/rollup-plugin-styles
npm error dev rollup-plugin-styles@"\*" from the root project
npm error
npm error Fix the upstream dependency conflict, or retry
npm error this command with --force or --legacy-peer-deps
npm error to accept an incorrect (and potentially broken) dependency resolution.
npm error
npm error
npm error For a full report see:
npm error C:\Users\tuuli\AppData\Local\npm-cache_logs\2026-01-22T04_14_52_966Z-eresolve-report.txt
npm error A complete log of this run can be found in: C:\Users\tuuli\AppData\Local\npm-cache_logs\2026-01-22T04_14_52_966Z-debug-0.log

### 20260122-072345
