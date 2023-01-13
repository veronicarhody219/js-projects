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

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://7.weathernoserver/./styles.css?");

/***/ }),

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBackground)\n/* harmony export */ });\nasync function fetchBackground(searchTerm) {\n  const body = document.querySelector(\"#body\");\n  const API_KEY = \"22784433-7d45986b04ce67d11e9b23efc\";\n  let URL = \"https://pixabay.com/api/?key=\" + API_KEY;\n  let URLmain;\n  if (searchTerm) {\n    URLmain = URL + \"&q=\" + encodeURIComponent(`${searchTerm}`);\n  }\n\n  const res = await fetch(URLmain);\n  const data = await res.json();\n  let imageArray = data.hits;\n  let random = Math.floor(Math.random() * 20);\n  let background = imageArray[random];\n  const resBackup = await fetch(URL);\n  const dataBackup = await resBackup.json();\n  let imageArrayBackup = dataBackup.hits;\n\n  let backgroundBackup = imageArrayBackup[random];\n  console.log(\"image from URLmain:\",background);\n  console.log(\"image from URL:\", backgroundBackup);\n  try {\n    body.style.background = `url(${background.imageURL})`;\n  } catch (error) {\n    body.style.background = `url(${backgroundBackup.imageURL})`;\n    console.log(error);\n  }\n  //   if (background.imageURL !== undefined) {\n  //     body.style.background = `url(${background.imageURL})`;\n  //   } else {\n  //     body.style.background = `url(${backgroundBackup.imageURL})`;\n  //   }\n\n  body.style.backgroundPosition = \"center\";\n  body.style.backgroundRepeat = \"no-repeat\";\n  body.style.backgroundSize = \"cover\";\n  body.style.backgroundAttachment = \"scroll\";\n}\n\n\n//# sourceURL=webpack://7.weathernoserver/./src/background.js?");

/***/ }),

/***/ "./src/fetchLatLon.js":
/*!****************************!*\
  !*** ./src/fetchLatLon.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchDataLatLon)\n/* harmony export */ });\n/* harmony import */ var _renderCurrentWeather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCurrentWeather.js */ \"./src/renderCurrentWeather.js\");\n/* harmony import */ var _renderForecastWeather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderForecastWeather.js */ \"./src/renderForecastWeather.js\");\n/* harmony import */ var _background_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background.js */ \"./src/background.js\");\n\n\n\n\nconst API_KEY = \"7db4b276ae57df67954d1fa913759050\";\nconst msg = document.querySelector(\".msg\");\nasync function fetchDataLatLon() {\n  if (navigator.geolocation) {\n    navigator.geolocation.getCurrentPosition(async (position) => {\n      let lat = position.coords.latitude;\n      let lon = position.coords.longitude;\n\n      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;\n\n      let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;\n\n      const res = await fetch(url);\n      const data = await res.json();\n      const resForecast = await fetch(urlForecast);\n      const dataForecast = await resForecast.json();\n      console.log(\"data fetched\", data);\n      console.log(\"forecast fetched:\", dataForecast);\n      msg.textContent = data ? \"weather for current location\" : \"\";\n      (0,_renderCurrentWeather_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data);\n      (0,_renderForecastWeather_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dataForecast.list);\n      (0,_background_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data.name);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://7.weathernoserver/./src/fetchLatLon.js?");

/***/ }),

/***/ "./src/fetchTerm.js":
/*!**************************!*\
  !*** ./src/fetchTerm.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchData)\n/* harmony export */ });\n/* harmony import */ var _renderCurrentWeather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCurrentWeather.js */ \"./src/renderCurrentWeather.js\");\n/* harmony import */ var _renderForecastWeather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderForecastWeather.js */ \"./src/renderForecastWeather.js\");\n/* harmony import */ var _background_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background.js */ \"./src/background.js\");\n\n\n\n\nconst API_KEY = \"7db4b276ae57df67954d1fa913759050\";\nconst msg = document.querySelector(\".msg\");\nasync function fetchData(searchTerm) {\n  let searchTermEncoded = encodeURIComponent(searchTerm);\n  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTermEncoded}&appid=${API_KEY}&units=metric`;\n  console.log(url);\n  const res = await fetch(url);\n  const data = await res.json();\n\n  let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${searchTermEncoded}&appid=${API_KEY}&units=metric`;\n\n  const resForecast = await fetch(urlForecast);\n  const dataForecast = await resForecast.json();\n  try {\n    console.log(\"data fetched\", data);\n    console.log(\"forecast fetched\", dataForecast);\n    (0,_renderCurrentWeather_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data);\n    (0,_renderForecastWeather_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dataForecast.list);\n    (0,_background_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data.name);\n\n    msg.textContent = `weather for ${searchTerm}`;\n  } catch (error) {\n    console.log(data.message);\n    msg.textContent = data.message;\n  }\n}\n\n\n//# sourceURL=webpack://7.weathernoserver/./src/fetchTerm.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetchTerm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchTerm.js */ \"./src/fetchTerm.js\");\n/* harmony import */ var _fetchLatLon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchLatLon.js */ \"./src/fetchLatLon.js\");\n/* harmony import */ var _background_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background.js */ \"./src/background.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles.css */ \"./styles.css\");\n\n\n\n\n\nwindow.addEventListener(\"DOMContentLoaded\", App());\n\nasync function App() {\n  const searchForm = document.querySelector(\".search-form\");\n  (0,_background_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  searchForm.addEventListener(\"submit\", async (e) => {\n    e.preventDefault();\n    let searchTerm = searchForm.search.value;\n    await (0,_fetchTerm_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(searchTerm);\n  });\n\n  await (0,_fetchLatLon_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://7.weathernoserver/./src/index.js?");

/***/ }),

/***/ "./src/renderCurrentWeather.js":
/*!*************************************!*\
  !*** ./src/renderCurrentWeather.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderData)\n/* harmony export */ });\nconst cards = document.querySelector(\".cards\");\nasync function renderData(data) {\n  let weatherData = data.weather[0];\n  console.log(weatherData.icon)\n  let template = \"\";\n  template += `\n      <div class=\"card\">\n        <h3 class=\"weather-title\">${data.name}</h3>\n        <img\n          src=\"http://openweathermap.org/img/wn/${weatherData.icon}@2x.png\"\n          alt=\"weather icon\"\n        />\n        <h2 class=\"weather-temp\">${data.main.temp.toFixed(0)}°C</h2>\n        <p class=\"desc\">It's ${\n          weatherData.description\n        } today. It's currently ${data.main.temp.toFixed(\n    0\n  )}°C, the high will be ${data.main.temp_max.toFixed(2)}°C</p>\n      </div>`;\n  cards.innerHTML = template;\n}\n\n\n//# sourceURL=webpack://7.weathernoserver/./src/renderCurrentWeather.js?");

/***/ }),

/***/ "./src/renderForecastWeather.js":
/*!**************************************!*\
  !*** ./src/renderForecastWeather.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderForecast)\n/* harmony export */ });\nconst forecast = document.querySelector(\".forecast\");\nasync function renderForecast(data) {\n  let template = \"\";\n  data.map((item) => {\n    if (item.dt_txt.includes(\"06:00:00\")) {\n      console.log(item);\n      let weatherData = item.weather[0];\n\n      template += `\n      <div class=\"card\">\n        <h3 class=\"weather-title weather-title-forecast\">${item.dt_txt}</h3>\n        <img\n          src=\"http://openweathermap.org/img/wn/${weatherData.icon}@2x.png\"\n          alt=\"weather icon\"\n        />\n        <h2 class=\"weather-temp weather-temp-forecast\">${item.main.temp.toFixed(0)}°C</h2>\n        <p class=\"desc-forecast\">${weatherData.description}</p>\n      </div>`;\n    }\n  });\n  forecast.innerHTML = template;\n}\n\n\n//# sourceURL=webpack://7.weathernoserver/./src/renderForecastWeather.js?");

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