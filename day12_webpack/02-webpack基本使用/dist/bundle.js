/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/mmm.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/aaa.js":
/*!********************!*\
  !*** ./src/aaa.js ***!
  \********************/
/*! exports provided: name, age, flag, n, mul, Person, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"age\", function() { return age; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flag\", function() { return flag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"n\", function() { return n; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mul\", function() { return mul; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Person\", function() { return Person; });\n// 将html的script标签的type设成module表示js作为模块化\r\nvar name = '啊杭'\r\nvar age = 18\r\nvar flag = true\r\n\r\nfunction sum(s1,s2){\r\n    return s1+s2\r\n}\r\n\r\nif(flag){\r\n    console.log(sum(20,30))\r\n}\r\n//导出方式一\r\n\r\n\r\n//导出方式二\r\nvar n = 1000;\r\n\r\n//导出函数，类 方式一 直接加个export\r\nfunction mul(num){\r\n    return num/10;\r\n}\r\n\r\nclass Person{\r\n    run(){\r\n        console.log('人在跑')\r\n    }\r\n}\r\n\r\n//导出函数，类 方式二\r\n\r\n\r\n//5.export default (只能使用一次，不然会出混乱)\r\n// 可以在导入的时候自定义变量名来接收，也不要加{}\r\nconst addr = '广东省'\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (addr);\r\n\r\n\n\n//# sourceURL=webpack:///./src/aaa.js?");

/***/ }),

/***/ "./src/mmm.js":
/*!********************!*\
  !*** ./src/mmm.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _aaa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aaa.js */ \"./src/aaa.js\");\n//导入对象中定义的变量\r\n//import {flag,name} from \"./aaa.js\"\r\n//if(flag){\r\n//    console.log(name,\"是天才\")\r\n//}\r\n\r\n//导入全部变量并命名为h\r\n\r\nif(_aaa_js__WEBPACK_IMPORTED_MODULE_0__[\"flag\"]){\r\n    console.log(_aaa_js__WEBPACK_IMPORTED_MODULE_0__[\"name\"],\"是天才\")\r\n}\r\n\r\n\r\n//导入函数\r\n\r\nconsole.log(Object(_aaa_js__WEBPACK_IMPORTED_MODULE_0__[\"mul\"])(30))\r\n\r\n//导入类\r\n\r\nconst p =  new _aaa_js__WEBPACK_IMPORTED_MODULE_0__[\"Person\"]()\r\np.run()\r\n\r\n\r\n\r\n//接收default\r\n\r\nconsole.log(_aaa_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n\n\n//# sourceURL=webpack:///./src/mmm.js?");

/***/ })

/******/ });