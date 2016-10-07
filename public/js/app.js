/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("console.log('Hello friday!');\n\n//En JS this no sempre és el mateix, depèn del context.\n//Sempre fa referència a un objecte.\n//No és el mateix que en Java o PHP: la pròpia classe.\n\n\n//\"use strict\";\n\nconsole.log(this); //this= Window o Global a node\n\n//this a javascript: objecte que invoca la funció on s'utilitza this\n\nvar person = {\n  firstName : \"Penelope\",\n    lastName : \"Barrymore\",\n    showFullName:function () {\n        console.log(this.firstName + \" \" + this.lastName);\n    }\n};\n\nperson.showFullName()//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcz84YjY3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdIZWxsbyBmcmlkYXkhJyk7XG5cbi8vRW4gSlMgdGhpcyBubyBzZW1wcmUgw6lzIGVsIG1hdGVpeCwgZGVww6huIGRlbCBjb250ZXh0LlxuLy9TZW1wcmUgZmEgcmVmZXLDqG5jaWEgYSB1biBvYmplY3RlLlxuLy9ObyDDqXMgZWwgbWF0ZWl4IHF1ZSBlbiBKYXZhIG8gUEhQOiBsYSBwcsOycGlhIGNsYXNzZS5cblxuXG4vL1widXNlIHN0cmljdFwiO1xuXG5jb25zb2xlLmxvZyh0aGlzKTsgLy90aGlzPSBXaW5kb3cgbyBHbG9iYWwgYSBub2RlXG5cbi8vdGhpcyBhIGphdmFzY3JpcHQ6IG9iamVjdGUgcXVlIGludm9jYSBsYSBmdW5jacOzIG9uIHMndXRpbGl0emEgdGhpc1xuXG52YXIgcGVyc29uID0ge1xuICBmaXJzdE5hbWUgOiBcIlBlbmVsb3BlXCIsXG4gICAgbGFzdE5hbWUgOiBcIkJhcnJ5bW9yZVwiLFxuICAgIHNob3dGdWxsTmFtZTpmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlyc3ROYW1lICsgXCIgXCIgKyB0aGlzLmxhc3ROYW1lKTtcbiAgICB9XG59O1xuXG5wZXJzb24uc2hvd0Z1bGxOYW1lKClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);