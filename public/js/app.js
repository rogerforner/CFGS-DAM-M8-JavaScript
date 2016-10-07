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

eval("//Funció constructora\n// function Persona(){\n//     console.log(\"Creant un objecte\");\n// }\n\nvar Persona = function (name) {\n    this.name = name;\n    console.log(\"Creant un objecte\");\n};\n\n//Composició. Extendre una funció/Herencia\n\n//Serveix per cambiar la funció original.\nPersona.prototype.sayHello = function(){\n    console.log('Hola '+ this.name);\n};\n\nconsole.log(Persona);\n\nvar personeta = new Persona('roger');\n\nconsole.log(personeta.name);\n\nconsole.log(personeta.sayHello());//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcz84YjY3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vRnVuY2nDsyBjb25zdHJ1Y3RvcmFcbi8vIGZ1bmN0aW9uIFBlcnNvbmEoKXtcbi8vICAgICBjb25zb2xlLmxvZyhcIkNyZWFudCB1biBvYmplY3RlXCIpO1xuLy8gfVxuXG52YXIgUGVyc29uYSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICBjb25zb2xlLmxvZyhcIkNyZWFudCB1biBvYmplY3RlXCIpO1xufTtcblxuLy9Db21wb3NpY2nDsy4gRXh0ZW5kcmUgdW5hIGZ1bmNpw7MvSGVyZW5jaWFcblxuLy9TZXJ2ZWl4IHBlciBjYW1iaWFyIGxhIGZ1bmNpw7Mgb3JpZ2luYWwuXG5QZXJzb25hLnByb3RvdHlwZS5zYXlIZWxsbyA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc29sZS5sb2coJ0hvbGEgJysgdGhpcy5uYW1lKTtcbn07XG5cbmNvbnNvbGUubG9nKFBlcnNvbmEpO1xuXG52YXIgcGVyc29uZXRhID0gbmV3IFBlcnNvbmEoJ0RhdmlkJyk7XG5cbmNvbnNvbGUubG9nKHBlcnNvbmV0YS5uYW1lKTtcblxuY29uc29sZS5sb2cocGVyc29uZXRhLnNheUhlbGxvKCkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);