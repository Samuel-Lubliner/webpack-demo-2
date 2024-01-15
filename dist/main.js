/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContactPage() {\n    const contact = document.createElement('div');\n    contact.classList.add('contact');\n\n    const headline = document.createElement('h2');\n    headline.textContent = 'Contact Us';\n    contact.appendChild(headline);\n\n    const phoneNumber = document.createElement('p');\n    phoneNumber.textContent = 'Phone: 123-456-7890';\n    contact.appendChild(phoneNumber);\n\n    const address = document.createElement('p');\n    address.textContent = 'Address: 123 Food Street, Flavor Town';\n    contact.appendChild(address);\n\n    return contact;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);\n\n\n//# sourceURL=webpack://webpack-demo-2/./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHomepage() {\n    const content = document.getElementById('content');\n\n    const headline = document.createElement('h1');\n    headline.textContent = \"Welcome this is the sample h1\";\n    content.appendChild(headline);\n\n    const image = new Image();\n    image.src = 'southern_viscacha.jpg';\n    content.appendChild(image);\n\n    const description = document.createElement('p');\n    description.textContent = \"Here is some sample content\";\n    content.appendChild(description);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomepage);\n\n\n//# sourceURL=webpack://webpack-demo-2/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    setupTabs();\n    (0,_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\nfunction clearContent() {\n    const content = document.getElementById('content');\n    content.innerHTML = '';\n}\n\nfunction setupTabs() {\n    const tabsContainer = document.getElementById('tabs');\n    const tabs = document.createElement('div');\n    tabs.classList.add('tabs');\n\n    // Create and append tabs\n    tabs.appendChild(createTab('Home', _homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n    tabs.appendChild(createTab('Contact', _contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n    tabs.appendChild(createTab('Menu', _menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n\n    tabsContainer.appendChild(tabs);\n}\n\nfunction createTab(text, tabContentFunction) {\n    const tab = document.createElement('button');\n    tab.textContent = text;\n    tab.addEventListener('click', () => {\n        clearContent();\n        const content = document.getElementById('content');\n        content.appendChild(tabContentFunction());\n    });\n    return tab;\n}\n\n\n//# sourceURL=webpack://webpack-demo-2/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenuPage() {\n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n\n    const headline = document.createElement('h2');\n    headline.textContent = 'Our Menu';\n    menu.appendChild(headline);\n\n    const item1 = document.createElement('p');\n    item1.textContent = 'Pizza';\n    menu.appendChild(item1);\n\n    const item2 = document.createElement('p');\n    item2.textContent = 'Pasta';\n    menu.appendChild(item2);\n\n    return menu;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);\n\n\n//# sourceURL=webpack://webpack-demo-2/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;