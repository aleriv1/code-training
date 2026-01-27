import './index.css';
import initApp from './src/app';


initApp()

function setFullHeight() {
  console.log('world')
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}
setFullHeight(); // Инициализация
window.addEventListener('resize', setFullHeight);
window.addEventListener('orientationchange', () => setTimeout(setFullHeight, 100)); // Для мобильных

// В CSS: height: 100vh; → height: calc(var(--vh, 1vh) * 100);