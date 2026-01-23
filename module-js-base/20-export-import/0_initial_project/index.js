// src/core -- to store some global entities: auxiliary funcitons, global constants for settings, etc
// src/modules -- to store baics entities; in our case -- js block itself with the image and also the block with timer


import './index.css';
// import { App  } from './src/modules/app';
// import { App as AppComponent } from './src/modules/app';
// import { App as AppComponent, createFunc } from './src/modules/app';

import App from './src/modules/app'; // default export
// import ClassApp from './src/modules/app'; // when export default we can use any nameo as opposed to using usual export

// creation an instance of the class App
const app = new App()
// const app = new ClassApp() // when export default we can use any name as opposed to using usual export
// const app = new AppComponent()
app.run()

// createFunc()


console.log('__work__');
