// src/core -- to store some global entities: auxiliary funcitons, global constants for settings, etc
// src/modules -- to store baics entities; in our case -- js block itself with the image and also the block with timer


import './index.css';
import App from './src/modules/app'; // default export
const app = new App()
app.run()

console.log('__work__');
