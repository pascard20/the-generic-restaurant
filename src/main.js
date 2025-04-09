import './style.css';
import content from './index.js';

// content looks like this:
// content = {
//   menu: menuContent,
//   about: aboutContent,
//   contact: contactContent
// }

const elemBottom = document.querySelector('.bottom');
elemBottom.insertAdjacentHTML('afterbegin', content.menu);

const elem = {
  containerBottom: document.querySelector('.bottom'),
  buttons: {
    home: document.querySelector('.btn--home'),
    menu: document.querySelector('.btn--menu'),
    about: document.querySelector('.btn--about'),
    contact: document.querySelector('.btn--contact'),
    arrow: document.querySelector('.top__menu-button'),
  }
}

const handleMoveButton = (btnName) => {
  console.log('move', btnName)
}

const handleContentButton = (btnName) => {
  elem.containerBottom.innerHTML = content[btnName];
}

const handlers = {
  home: () => handleMoveButton('home'),
  menu: () => handleContentButton('menu'),
  about: () => handleContentButton('about'),
  contact: () => handleContentButton('contact'),
  arrow: () => handleMoveButton('arrow'),
}

Object.keys(elem.buttons).forEach(key => {
  if (handlers[key]) elem.buttons[key].addEventListener('click', handlers[key]);
})