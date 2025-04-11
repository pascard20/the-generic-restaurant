/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 705:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

eval("\n;// ./src/img/menu_pancakes.jpg\nconst menu_pancakes_namespaceObject = __webpack_require__.p + \"f6cd232b8aee16192134.jpg\";\n;// ./src/img/menu_spaghetti.jpg\nconst menu_spaghetti_namespaceObject = __webpack_require__.p + \"74bc51f19ccf49d63ed2.jpg\";\n;// ./src/img/menu_wings.jpg\nconst menu_wings_namespaceObject = __webpack_require__.p + \"04bdfa4b0cf423609153.jpg\";\n;// ./src/img/menu_breakfast.jpg\nconst menu_breakfast_namespaceObject = __webpack_require__.p + \"e8b8329595aafb84e7b2.jpg\";\n;// ./src/img/menu_pizza.jpg\nconst menu_pizza_namespaceObject = __webpack_require__.p + \"8dcb5b241b448fed7bc4.jpg\";\n;// ./src/img/menu_burger.jpg\nconst menu_burger_namespaceObject = __webpack_require__.p + \"32424d21a4d0d1798123.jpg\";\n;// ./src/menu.js\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst menuImages = [\r\n  [menu_pancakes_namespaceObject, 'Pancakes'],\r\n  [menu_spaghetti_namespaceObject, 'Spaghetti'],\r\n  [menu_wings_namespaceObject, 'Chicken Wings'],\r\n  [menu_breakfast_namespaceObject, 'Breakfast Set'],\r\n  [menu_pizza_namespaceObject, 'Pizza'],\r\n  [menu_burger_namespaceObject, 'Burger']\r\n]\r\n\r\nconst loadImage = (imageID) => {\r\n  return `<img src=${menuImages[imageID][0]} alt=${menuImages[imageID][1]}>`\r\n}\r\n\r\n/* harmony default export */ const menu = (`\r\n<div class=\"menu\">\r\n  <h2 class=\"menu__title bottom__title\">Our signature dishes</h2>\r\n  <p class=\"menu__description bottom__description\">Lorem ipsum dolor sit amet consectetur adipisicing elit.\r\n    Voluptas quisquam\r\n    doloribus\r\n    dolores numquam, eaque\r\n    nesciunt? Quod commodi ea modi quos!</p>\r\n  <div class=\"menu__wrapper\">\r\n    <div class=\"img__wrapper\">${loadImage(3)}</div>\r\n    <div class=\"img__wrapper\">${loadImage(0)}</div>\r\n    <div class=\"img__wrapper\">${loadImage(1)}</div>\r\n    <div class=\"img__wrapper\">${loadImage(2)}</div>\r\n    <div class=\"img__wrapper\">${loadImage(4)}</div>\r\n    <div class=\"img__wrapper\">${loadImage(5)}</div>\r\n  </div>\r\n  <button class=\"menu__btn btn\">Make an order</button>\r\n</div>\r\n`);\n;// ./src/img/about_crew.jpg\nconst about_crew_namespaceObject = __webpack_require__.p + \"aab70efcc0b36df70323.jpg\";\n;// ./src/about.js\n\r\n\r\n/* harmony default export */ const about = (`\r\n<div class=\"about\">\r\n  <h2 class=\"about__title bottom__title\">Meet our crew</h2>\r\n  <p class=\"about__description bottom__description\">Donec vitae elit ac mauris dignissim interdum at sed dui. Mauris facilisis elementum auctor. Ut pulvinar turpis in ullamcorper interdum. Quisque sit amet.</p>\r\n  <div class=\"about__img-wrapper\"><img src=\"${about_crew_namespaceObject}\">\r\n    <ul class=\"about__crew-names\">\r\n      <li>\r\n        <div class=\"about__crew-names--title\">Head Chef</div>Daniel Reyes\r\n      </li>\r\n      <li>\r\n        <div class=\"about__crew-names--title\">Kitchen Assistant</div>Julian Carter\r\n      </li>\r\n      <li>\r\n        <div class=\"about__crew-names--title\">Front of House Manager</div>Hannah Lee\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <p class=\"about__description--bottom bottom__description\">Lorem ipsum dolor sit amet, consectetur adipisicing\r\n    elit. Molestiae atque suscipit magnam nam, ipsa quos impedit debitis esse velit eaque placeat autem.</p>\r\n  <button class=\"btn about__btn\">Check our menu</button>\r\n</div>\r\n`);\n;// ./src/contact.js\n/* harmony default export */ const contact = (`\r\n<div class=\"contact\">\r\n  <h2 class=\"contact__title bottom__title\">Contact Us</h1>\r\n  <div class=\"contact__left\">\r\n    <div class=\"contact__address\">\r\n      <h3 class=\"contact__subtitle\">Our Address</h3>\r\n      <p>The Generic Restaurant</p>\r\n      <p>123 Main Street</p>\r\n      <p>Austin, TX 73301</p>\r\n      <p>Phone: 123 456 789</p>\r\n      <p>Email: contact@restaurant.com</p>\r\n    </div>\r\n\r\n    <div class=\"contact__hours\">\r\n      <h3 class=\"contact__subtitle\">Opening Hours</h3>\r\n      <ul class=\"contact__opening-times\">\r\n        <li>Mon - Fri: 08:00 - 22:30</li>\r\n        <li>Sat: 09:00 - 23:00</li>\r\n        <li>Sun: 10:00 - 20:00</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"contact__form\">\r\n    <h3 class=\"contact__subtitle\">Contact Form</h3>\r\n    <form>\r\n      <label class=\"contact__label\" for=\"name\">Name:</label>\r\n      <input class=\"contact__input\" type=\"text\" id=\"name\" name=\"name\" required>\r\n\r\n      <label class=\"contact__label\" for=\"email\">Email:</label>\r\n      <input class=\"contact__input\" type=\"email\" id=\"email\" name=\"email\" required>\r\n\r\n      <label class=\"contact__label\" for=\"message\">Message:</label>\r\n      <textarea class=\"contact__input\" id=\"message\" name=\"message\" rows=\"5\" required></textarea>\r\n\r\n      <button class=\"btn contact__btn\" type=\"submit\">Send Message</button>\r\n      </form>\r\n    </div>\r\n</div>\r\n`);\n;// ./src/index.js\n\r\n\r\n\r\n\r\n/* harmony default export */ const src = ({ menu: menu, about: about, contact: contact });\n;// ./src/main.js\n\r\n\r\n\r\n/* ------------------------- VARIABLES AND CONSTANTS ------------------------ */\r\n\r\nconst elem = {\r\n  containerTop: document.querySelector('.top'),\r\n  containerBottom: document.querySelector('.bottom'),\r\n  buttons: {\r\n    home: document.querySelector('.btn--home'),\r\n    menu: document.querySelector('.btn--menu'),\r\n    about: document.querySelector('.btn--about'),\r\n    contact: document.querySelector('.btn--contact'),\r\n    arrow: document.querySelector('.top__menu-button'),\r\n  }\r\n}\r\n\r\nconst handlers = {\r\n  home: () => handleButton('home', false),\r\n  menu: () => handleButton('menu'),\r\n  about: () => handleButton('about'),\r\n  contact: () => handleButton('contact'),\r\n  arrow: () => handleButton('arrow', false),\r\n}\r\n\r\nconst dynamicElemConfig = {\r\n  menu: {\r\n    selector: '.menu__btn',\r\n    handler: () => handleButton('contact')\r\n  },\r\n  about: {\r\n    selector: '.about__btn',\r\n    handler: () => handleButton('menu')\r\n  }\r\n}\r\n\r\nlet currentSectionName = null;\r\nconst dynamicHandlers = {};\r\nconst dynamicElements = {};\r\n\r\n/* -------------------------------- FUNCTIONS ------------------------------- */\r\n\r\nconst handleContentLoad = (sectionName) => {\r\n  if (currentSectionName) {\r\n    if (currentSectionName === sectionName) return;\r\n    const oldElem = dynamicElements[currentSectionName];\r\n    const oldHandler = dynamicHandlers[currentSectionName];\r\n    if (oldElem && oldHandler) {\r\n      oldElem.removeEventListener('click', oldHandler);\r\n      delete dynamicHandlers[currentSectionName];\r\n      delete dynamicElements[currentSectionName];\r\n    }\r\n  }\r\n\r\n  let selector = null, handler = null, newElem = null;\r\n\r\n  if (dynamicElemConfig[sectionName]) {\r\n    ({ selector, handler } = dynamicElemConfig[sectionName]);\r\n    newElem = document.querySelector(selector);\r\n  }\r\n\r\n  if (newElem) {\r\n    dynamicElements[sectionName] = newElem;\r\n    dynamicHandlers[sectionName] = handler;\r\n\r\n    newElem.addEventListener('click', handler);\r\n  }\r\n\r\n  currentSectionName = sectionName;\r\n}\r\n\r\nconst initContent = sectionName => {\r\n  elem.containerBottom.innerHTML = src[sectionName];\r\n  handleContentLoad(sectionName);\r\n}\r\n\r\nconst scrollToSection = (sectionName) => {\r\n  const isTop = sectionName === 'home';\r\n  const targetContainer = isTop ? elem.containerTop : elem.containerBottom;\r\n\r\n  if (targetContainer) targetContainer.scrollIntoView({ behavior: 'smooth' });\r\n}\r\n\r\nconst handleButton = (btnName, isContent = true) => {\r\n  if (isContent) initContent(btnName);\r\n  scrollToSection(btnName);\r\n}\r\n\r\n/* ----------------------------- EVENT LISTENERS ---------------------------- */\r\n\r\nObject.keys(elem.buttons).forEach(key => {\r\n  if (handlers[key]) elem.buttons[key].addEventListener('click', handlers[key]);\r\n})\r\n\r\n/* ---------------------------------- INIT ---------------------------------- */\r\n\r\ninitContent('menu');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzA1LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ0U7QUFDUjtBQUNRO0FBQ1I7QUFDRTtBQUM5QztBQUNBO0FBQ0EsR0FBRyw2QkFBWTtBQUNmLEdBQUcsOEJBQWE7QUFDaEIsR0FBRywwQkFBUztBQUNaLEdBQUcsOEJBQWE7QUFDaEIsR0FBRywwQkFBUztBQUNaLEdBQUcsMkJBQVU7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0JBQXdCLE1BQU0sdUJBQXVCO0FBQzFFO0FBQ0E7QUFDQSwyQ0FBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsYUFBYTtBQUM3QyxnQ0FBZ0MsYUFBYTtBQUM3QyxnQ0FBZ0MsYUFBYTtBQUM3QyxnQ0FBZ0MsYUFBYTtBQUM3QyxnQ0FBZ0MsYUFBYTtBQUM3QyxnQ0FBZ0MsYUFBYTtBQUM3QztBQUNBO0FBQ0E7QUFDQTs7OztBQ3RDNkM7QUFDN0M7QUFDQSw0Q0FBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QywwQkFBUyxDQUFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBLDhDQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDNkI7QUFDRTtBQUNJO0FBQ25DO0FBQ0EsMENBQWUsRUFBRSxJQUFJLGFBQU8sZ0JBQVMsV0FBRSxFOztBQ0psQjtBQUNZO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9CQUFvQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLEdBQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Qsb0JBQW9CO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLTA5LXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcz9hYjA4Iiwid2VicGFjazovL29kaW4tMDktcmVzdGF1cmFudC8uL3NyYy9hYm91dC5qcz81ODY0Iiwid2VicGFjazovL29kaW4tMDktcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzP2Q1NjUiLCJ3ZWJwYWNrOi8vb2Rpbi0wOS1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzP2I2MzUiLCJ3ZWJwYWNrOi8vb2Rpbi0wOS1yZXN0YXVyYW50Ly4vc3JjL21haW4uanM/NTZkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWVudVBhbmNha2VzIGZyb20gJy4vaW1nL21lbnVfcGFuY2FrZXMuanBnJ1xyXG5pbXBvcnQgbWVudVNwYWdoZXR0aSBmcm9tICcuL2ltZy9tZW51X3NwYWdoZXR0aS5qcGcnXHJcbmltcG9ydCBtZW51V2luZ3MgZnJvbSAnLi9pbWcvbWVudV93aW5ncy5qcGcnXHJcbmltcG9ydCBtZW51QnJlYWtmYXN0IGZyb20gJy4vaW1nL21lbnVfYnJlYWtmYXN0LmpwZydcclxuaW1wb3J0IG1lbnVQaXp6YSBmcm9tICcuL2ltZy9tZW51X3BpenphLmpwZydcclxuaW1wb3J0IG1lbnVCdXJnZXIgZnJvbSAnLi9pbWcvbWVudV9idXJnZXIuanBnJ1xyXG5cclxuY29uc3QgbWVudUltYWdlcyA9IFtcclxuICBbbWVudVBhbmNha2VzLCAnUGFuY2FrZXMnXSxcclxuICBbbWVudVNwYWdoZXR0aSwgJ1NwYWdoZXR0aSddLFxyXG4gIFttZW51V2luZ3MsICdDaGlja2VuIFdpbmdzJ10sXHJcbiAgW21lbnVCcmVha2Zhc3QsICdCcmVha2Zhc3QgU2V0J10sXHJcbiAgW21lbnVQaXp6YSwgJ1BpenphJ10sXHJcbiAgW21lbnVCdXJnZXIsICdCdXJnZXInXVxyXG5dXHJcblxyXG5jb25zdCBsb2FkSW1hZ2UgPSAoaW1hZ2VJRCkgPT4ge1xyXG4gIHJldHVybiBgPGltZyBzcmM9JHttZW51SW1hZ2VzW2ltYWdlSURdWzBdfSBhbHQ9JHttZW51SW1hZ2VzW2ltYWdlSURdWzFdfT5gXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGBcclxuPGRpdiBjbGFzcz1cIm1lbnVcIj5cclxuICA8aDIgY2xhc3M9XCJtZW51X190aXRsZSBib3R0b21fX3RpdGxlXCI+T3VyIHNpZ25hdHVyZSBkaXNoZXM8L2gyPlxyXG4gIDxwIGNsYXNzPVwibWVudV9fZGVzY3JpcHRpb24gYm90dG9tX19kZXNjcmlwdGlvblwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICBWb2x1cHRhcyBxdWlzcXVhbVxyXG4gICAgZG9sb3JpYnVzXHJcbiAgICBkb2xvcmVzIG51bXF1YW0sIGVhcXVlXHJcbiAgICBuZXNjaXVudD8gUXVvZCBjb21tb2RpIGVhIG1vZGkgcXVvcyE8L3A+XHJcbiAgPGRpdiBjbGFzcz1cIm1lbnVfX3dyYXBwZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJpbWdfX3dyYXBwZXJcIj4ke2xvYWRJbWFnZSgzKX08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJpbWdfX3dyYXBwZXJcIj4ke2xvYWRJbWFnZSgwKX08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJpbWdfX3dyYXBwZXJcIj4ke2xvYWRJbWFnZSgxKX08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJpbWdfX3dyYXBwZXJcIj4ke2xvYWRJbWFnZSgyKX08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJpbWdfX3dyYXBwZXJcIj4ke2xvYWRJbWFnZSg0KX08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJpbWdfX3dyYXBwZXJcIj4ke2xvYWRJbWFnZSg1KX08L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8YnV0dG9uIGNsYXNzPVwibWVudV9fYnRuIGJ0blwiPk1ha2UgYW4gb3JkZXI8L2J1dHRvbj5cclxuPC9kaXY+XHJcbmAiLCJpbXBvcnQgaW1hZ2VDcmV3IGZyb20gJy4vaW1nL2Fib3V0X2NyZXcuanBnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGBcclxuPGRpdiBjbGFzcz1cImFib3V0XCI+XHJcbiAgPGgyIGNsYXNzPVwiYWJvdXRfX3RpdGxlIGJvdHRvbV9fdGl0bGVcIj5NZWV0IG91ciBjcmV3PC9oMj5cclxuICA8cCBjbGFzcz1cImFib3V0X19kZXNjcmlwdGlvbiBib3R0b21fX2Rlc2NyaXB0aW9uXCI+RG9uZWMgdml0YWUgZWxpdCBhYyBtYXVyaXMgZGlnbmlzc2ltIGludGVyZHVtIGF0IHNlZCBkdWkuIE1hdXJpcyBmYWNpbGlzaXMgZWxlbWVudHVtIGF1Y3Rvci4gVXQgcHVsdmluYXIgdHVycGlzIGluIHVsbGFtY29ycGVyIGludGVyZHVtLiBRdWlzcXVlIHNpdCBhbWV0LjwvcD5cclxuICA8ZGl2IGNsYXNzPVwiYWJvdXRfX2ltZy13cmFwcGVyXCI+PGltZyBzcmM9XCIke2ltYWdlQ3Jld31cIj5cclxuICAgIDx1bCBjbGFzcz1cImFib3V0X19jcmV3LW5hbWVzXCI+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWJvdXRfX2NyZXctbmFtZXMtLXRpdGxlXCI+SGVhZCBDaGVmPC9kaXY+RGFuaWVsIFJleWVzXHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWJvdXRfX2NyZXctbmFtZXMtLXRpdGxlXCI+S2l0Y2hlbiBBc3Npc3RhbnQ8L2Rpdj5KdWxpYW4gQ2FydGVyXHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWJvdXRfX2NyZXctbmFtZXMtLXRpdGxlXCI+RnJvbnQgb2YgSG91c2UgTWFuYWdlcjwvZGl2Pkhhbm5haCBMZWVcclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+XHJcbiAgPHAgY2xhc3M9XCJhYm91dF9fZGVzY3JpcHRpb24tLWJvdHRvbSBib3R0b21fX2Rlc2NyaXB0aW9uXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nXHJcbiAgICBlbGl0LiBNb2xlc3RpYWUgYXRxdWUgc3VzY2lwaXQgbWFnbmFtIG5hbSwgaXBzYSBxdW9zIGltcGVkaXQgZGViaXRpcyBlc3NlIHZlbGl0IGVhcXVlIHBsYWNlYXQgYXV0ZW0uPC9wPlxyXG4gIDxidXR0b24gY2xhc3M9XCJidG4gYWJvdXRfX2J0blwiPkNoZWNrIG91ciBtZW51PC9idXR0b24+XHJcbjwvZGl2PlxyXG5gIiwiZXhwb3J0IGRlZmF1bHQgYFxyXG48ZGl2IGNsYXNzPVwiY29udGFjdFwiPlxyXG4gIDxoMiBjbGFzcz1cImNvbnRhY3RfX3RpdGxlIGJvdHRvbV9fdGl0bGVcIj5Db250YWN0IFVzPC9oMT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGFjdF9fbGVmdFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhY3RfX2FkZHJlc3NcIj5cclxuICAgICAgPGgzIGNsYXNzPVwiY29udGFjdF9fc3VidGl0bGVcIj5PdXIgQWRkcmVzczwvaDM+XHJcbiAgICAgIDxwPlRoZSBHZW5lcmljIFJlc3RhdXJhbnQ8L3A+XHJcbiAgICAgIDxwPjEyMyBNYWluIFN0cmVldDwvcD5cclxuICAgICAgPHA+QXVzdGluLCBUWCA3MzMwMTwvcD5cclxuICAgICAgPHA+UGhvbmU6IDEyMyA0NTYgNzg5PC9wPlxyXG4gICAgICA8cD5FbWFpbDogY29udGFjdEByZXN0YXVyYW50LmNvbTwvcD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWN0X19ob3Vyc1wiPlxyXG4gICAgICA8aDMgY2xhc3M9XCJjb250YWN0X19zdWJ0aXRsZVwiPk9wZW5pbmcgSG91cnM8L2gzPlxyXG4gICAgICA8dWwgY2xhc3M9XCJjb250YWN0X19vcGVuaW5nLXRpbWVzXCI+XHJcbiAgICAgICAgPGxpPk1vbiAtIEZyaTogMDg6MDAgLSAyMjozMDwvbGk+XHJcbiAgICAgICAgPGxpPlNhdDogMDk6MDAgLSAyMzowMDwvbGk+XHJcbiAgICAgICAgPGxpPlN1bjogMTA6MDAgLSAyMDowMDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImNvbnRhY3RfX2Zvcm1cIj5cclxuICAgIDxoMyBjbGFzcz1cImNvbnRhY3RfX3N1YnRpdGxlXCI+Q29udGFjdCBGb3JtPC9oMz5cclxuICAgIDxmb3JtPlxyXG4gICAgICA8bGFiZWwgY2xhc3M9XCJjb250YWN0X19sYWJlbFwiIGZvcj1cIm5hbWVcIj5OYW1lOjwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cImNvbnRhY3RfX2lucHV0XCIgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIHJlcXVpcmVkPlxyXG5cclxuICAgICAgPGxhYmVsIGNsYXNzPVwiY29udGFjdF9fbGFiZWxcIiBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cImNvbnRhY3RfX2lucHV0XCIgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHJlcXVpcmVkPlxyXG5cclxuICAgICAgPGxhYmVsIGNsYXNzPVwiY29udGFjdF9fbGFiZWxcIiBmb3I9XCJtZXNzYWdlXCI+TWVzc2FnZTo8L2xhYmVsPlxyXG4gICAgICA8dGV4dGFyZWEgY2xhc3M9XCJjb250YWN0X19pbnB1dFwiIGlkPVwibWVzc2FnZVwiIG5hbWU9XCJtZXNzYWdlXCIgcm93cz1cIjVcIiByZXF1aXJlZD48L3RleHRhcmVhPlxyXG5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBjb250YWN0X19idG5cIiB0eXBlPVwic3VibWl0XCI+U2VuZCBNZXNzYWdlPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYCIsImltcG9ydCBtZW51IGZyb20gJy4vbWVudS5qcyc7XHJcbmltcG9ydCBhYm91dCBmcm9tICcuL2Fib3V0LmpzJztcclxuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgbWVudSwgYWJvdXQsIGNvbnRhY3QgfTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IGNvbnRlbnQgZnJvbSAnLi9pbmRleC5qcyc7XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFZBUklBQkxFUyBBTkQgQ09OU1RBTlRTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuY29uc3QgZWxlbSA9IHtcclxuICBjb250YWluZXJUb3A6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AnKSxcclxuICBjb250YWluZXJCb3R0b206IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b20nKSxcclxuICBidXR0b25zOiB7XHJcbiAgICBob21lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1ob21lJyksXHJcbiAgICBtZW51OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1tZW51JyksXHJcbiAgICBhYm91dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tYWJvdXQnKSxcclxuICAgIGNvbnRhY3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLWNvbnRhY3QnKSxcclxuICAgIGFycm93OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wX19tZW51LWJ1dHRvbicpLFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaGFuZGxlcnMgPSB7XHJcbiAgaG9tZTogKCkgPT4gaGFuZGxlQnV0dG9uKCdob21lJywgZmFsc2UpLFxyXG4gIG1lbnU6ICgpID0+IGhhbmRsZUJ1dHRvbignbWVudScpLFxyXG4gIGFib3V0OiAoKSA9PiBoYW5kbGVCdXR0b24oJ2Fib3V0JyksXHJcbiAgY29udGFjdDogKCkgPT4gaGFuZGxlQnV0dG9uKCdjb250YWN0JyksXHJcbiAgYXJyb3c6ICgpID0+IGhhbmRsZUJ1dHRvbignYXJyb3cnLCBmYWxzZSksXHJcbn1cclxuXHJcbmNvbnN0IGR5bmFtaWNFbGVtQ29uZmlnID0ge1xyXG4gIG1lbnU6IHtcclxuICAgIHNlbGVjdG9yOiAnLm1lbnVfX2J0bicsXHJcbiAgICBoYW5kbGVyOiAoKSA9PiBoYW5kbGVCdXR0b24oJ2NvbnRhY3QnKVxyXG4gIH0sXHJcbiAgYWJvdXQ6IHtcclxuICAgIHNlbGVjdG9yOiAnLmFib3V0X19idG4nLFxyXG4gICAgaGFuZGxlcjogKCkgPT4gaGFuZGxlQnV0dG9uKCdtZW51JylcclxuICB9XHJcbn1cclxuXHJcbmxldCBjdXJyZW50U2VjdGlvbk5hbWUgPSBudWxsO1xyXG5jb25zdCBkeW5hbWljSGFuZGxlcnMgPSB7fTtcclxuY29uc3QgZHluYW1pY0VsZW1lbnRzID0ge307XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGVU5DVElPTlMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuY29uc3QgaGFuZGxlQ29udGVudExvYWQgPSAoc2VjdGlvbk5hbWUpID0+IHtcclxuICBpZiAoY3VycmVudFNlY3Rpb25OYW1lKSB7XHJcbiAgICBpZiAoY3VycmVudFNlY3Rpb25OYW1lID09PSBzZWN0aW9uTmFtZSkgcmV0dXJuO1xyXG4gICAgY29uc3Qgb2xkRWxlbSA9IGR5bmFtaWNFbGVtZW50c1tjdXJyZW50U2VjdGlvbk5hbWVdO1xyXG4gICAgY29uc3Qgb2xkSGFuZGxlciA9IGR5bmFtaWNIYW5kbGVyc1tjdXJyZW50U2VjdGlvbk5hbWVdO1xyXG4gICAgaWYgKG9sZEVsZW0gJiYgb2xkSGFuZGxlcikge1xyXG4gICAgICBvbGRFbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb2xkSGFuZGxlcik7XHJcbiAgICAgIGRlbGV0ZSBkeW5hbWljSGFuZGxlcnNbY3VycmVudFNlY3Rpb25OYW1lXTtcclxuICAgICAgZGVsZXRlIGR5bmFtaWNFbGVtZW50c1tjdXJyZW50U2VjdGlvbk5hbWVdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IHNlbGVjdG9yID0gbnVsbCwgaGFuZGxlciA9IG51bGwsIG5ld0VsZW0gPSBudWxsO1xyXG5cclxuICBpZiAoZHluYW1pY0VsZW1Db25maWdbc2VjdGlvbk5hbWVdKSB7XHJcbiAgICAoeyBzZWxlY3RvciwgaGFuZGxlciB9ID0gZHluYW1pY0VsZW1Db25maWdbc2VjdGlvbk5hbWVdKTtcclxuICAgIG5ld0VsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIGlmIChuZXdFbGVtKSB7XHJcbiAgICBkeW5hbWljRWxlbWVudHNbc2VjdGlvbk5hbWVdID0gbmV3RWxlbTtcclxuICAgIGR5bmFtaWNIYW5kbGVyc1tzZWN0aW9uTmFtZV0gPSBoYW5kbGVyO1xyXG5cclxuICAgIG5ld0VsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKTtcclxuICB9XHJcblxyXG4gIGN1cnJlbnRTZWN0aW9uTmFtZSA9IHNlY3Rpb25OYW1lO1xyXG59XHJcblxyXG5jb25zdCBpbml0Q29udGVudCA9IHNlY3Rpb25OYW1lID0+IHtcclxuICBlbGVtLmNvbnRhaW5lckJvdHRvbS5pbm5lckhUTUwgPSBjb250ZW50W3NlY3Rpb25OYW1lXTtcclxuICBoYW5kbGVDb250ZW50TG9hZChzZWN0aW9uTmFtZSk7XHJcbn1cclxuXHJcbmNvbnN0IHNjcm9sbFRvU2VjdGlvbiA9IChzZWN0aW9uTmFtZSkgPT4ge1xyXG4gIGNvbnN0IGlzVG9wID0gc2VjdGlvbk5hbWUgPT09ICdob21lJztcclxuICBjb25zdCB0YXJnZXRDb250YWluZXIgPSBpc1RvcCA/IGVsZW0uY29udGFpbmVyVG9wIDogZWxlbS5jb250YWluZXJCb3R0b207XHJcblxyXG4gIGlmICh0YXJnZXRDb250YWluZXIpIHRhcmdldENvbnRhaW5lci5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxufVxyXG5cclxuY29uc3QgaGFuZGxlQnV0dG9uID0gKGJ0bk5hbWUsIGlzQ29udGVudCA9IHRydWUpID0+IHtcclxuICBpZiAoaXNDb250ZW50KSBpbml0Q29udGVudChidG5OYW1lKTtcclxuICBzY3JvbGxUb1NlY3Rpb24oYnRuTmFtZSk7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVWRU5UIExJU1RFTkVSUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5PYmplY3Qua2V5cyhlbGVtLmJ1dHRvbnMpLmZvckVhY2goa2V5ID0+IHtcclxuICBpZiAoaGFuZGxlcnNba2V5XSkgZWxlbS5idXR0b25zW2tleV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyc1trZXldKTtcclxufSlcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSU5JVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5pbml0Q29udGVudCgnbWVudScpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///705\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__[705](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;