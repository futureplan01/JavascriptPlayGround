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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Plugin/Preset files are not allowed to export objects, only functions. In /Users/jesaiahprayor/Desktop/Node_JS/JavascriptPlayGround/client/node_modules/babel-preset-react/lib/index.js\n    at createDescriptor (/Users/jesaiahprayor/Desktop/Node_JS/JavascriptPlayGround/client/node_modules/@babel/core/lib/config/config-descriptors.js:138:11)\n    at items.map (/Users/jesaiahprayor/Desktop/Node_JS/JavascriptPlayGround/client/node_modules/@babel/core/lib/config/config-descriptors.js:69:50)\n    at Array.map (<anonymous>)\n    at createDescriptors (/Users/jesaiahprayor/Desktop/Node_JS/JavascriptPlayGround/client/node_modules/@babel/core/lib/config/config-descriptors.js:69:29)\n    at createPresetDescriptors (/Users/jesaiahprayor/Desktop/Node_JS/JavascriptPlayGround/client/node_modules/@babel/core/lib/config/config-descriptors.js:61:10)\n    at presets (/Users/jesaiahprayor/Desktop/Node_JS/JavascriptPlayGround/client/node_modules/@babel/core/lib/config/config-descriptors.js:43:19)\n    at mergeChainOpts (/Users/jesaiahprayor/Desktop/Node_JS/JavascriptPlayGround/client/node_modules/@babel/core/lib/config/config-chain.js:304:26)\n    at /Users/jesaiahprayor/Desktop/Node_JS/JavascriptPlayGround/client/node_modules/@babel/core/lib/config/config-chain.js:267:7\n    at buildRootChain (/Users/jesaiahprayor/Desktop/Node_JS/JavascriptPlayGround/client/node_modules/@babel/core/lib/config/config-chain.js:114:22)\n    at loadPrivatePartialConfig (/Users/jesaiahprayor/Desktop/Node_JS/JavascriptPlayGround/client/node_modules/@babel/core/lib/config/partial.js:55:55)\n    at loadFullConfig (/Users/jesaiahprayor/Desktop/Node_JS/JavascriptPlayGround/client/node_modules/@babel/core/lib/config/full.js:43:39)\n    at transformSync (/Users/jesaiahprayor/Desktop/Node_JS/JavascriptPlayGround/client/node_modules/@babel/core/lib/transform.js:41:38)\n    at Object.transform (/Users/jesaiahprayor/Desktop/Node_JS/JavascriptPlayGround/client/node_modules/@babel/core/lib/transform.js:22:38)\n    at transpile (/Users/jesaiahprayor/Desktop/Node_JS/JavascriptPlayGround/client/node_modules/babel-loader/lib/index.js:50:20)\n    at Object.module.exports (/Users/jesaiahprayor/Desktop/Node_JS/JavascriptPlayGround/client/node_modules/babel-loader/lib/index.js:173:20)");

/***/ })
/******/ ]);