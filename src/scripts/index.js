import 'regenerator-runtime';
import 'lazysizes';
import '../styles/main.css';
import '../styles/responsive.css';
import './components/footer-app.js';
import './components/hero-app.js';
import './components/skip-link.js';
import App from './views/app.js';
import swRegister from './utils/sw-register.js';

const app = new App({
    button: document.querySelector('#hamburger'),
    drawer: document.querySelector('.navigation'),
    content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});
