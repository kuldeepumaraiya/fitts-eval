module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\parth\\Videos\\Docs\\React\\Github\\fitts-eval\\pages\\index.js";


const CONST = {
  min_dist: 30,
  size1: 47,
  size2: 54,
  size3: 61,
  rounds: 30
};

function convertToCSV(objArray) {
  var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
  var str = Object.keys(array[0]).join(',');
  str = str + '\r\n';

  for (var i = 0; i < array.length; i++) {
    var line = '';

    for (var index in array[i]) {
      if (line != '') line += ',';
      line += array[i][index];
    }

    str += line + '\r\n';
  }

  return str;
}

function Target({
  target,
  radius,
  distanceRadius
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "target-box",
    style: {
      left: `${target[0] - 2 * radius}px`,
      top: `${target[1] - 2 * radius}px`,
      width: `${4 * radius}px`,
      height: `${4 * radius}px`
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "target-core",
      style: {
        left: `${radius}px`,
        top: `${radius}px`,
        width: `${2 * radius}px`,
        height: `${2 * radius}px`
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

function randInt(range) {
  var min = Math.ceil(range[0]);
  var max = Math.floor(range[1]);
  return Math.floor(Math.random() * (max - min) + min);
}

function randFloat(range) {
  var min = Math.ceil(range[0]);
  var max = Math.floor(range[1]);
  return Math.random() * (max - min) + min;
}

function nextPos(target, bounds, radius, pad, distanceRadius) {
  // const min_dist = CONST.min_dist;
  // const x_range = [pad+radius,bounds[0]-pad-radius]
  // const y_range = [pad+radius,bounds[1]-pad-radius]
  let next = [0, 0];
  let t = randFloat([0, 360]);
  next = getPointOnCircumference(t, target, distanceRadius);

  while (!checkInside(next[0], next[1], distanceRadius)) {
    let t = randFloat([0, 360]);
    next = getPointOnCircumference(t, target, distanceRadius);
  } // while(calcDist(target,next)<min_dist){
  //   next = [randInt(x_range),randInt(y_range)]
  // }


  return next;
}

function getPointOnCircumference(t, center, radius) {
  let temp_x = radius * Math.cos(t) + center[0];
  let temp_y = radius * Math.sin(t) + center[1];
  return [temp_x, temp_y];
}

function checkInside(x, y, radius) {
  if (x + radius < screen.width && x - radius > 0) {
    if (y + radius < screen.height && y - radius > 0) {
      return true;
    }
  }

  return false;
}

function calcDist(from, to) {
  try {
    var x = parseFloat(from[0]) - parseFloat(to[0]);
    var y = parseFloat(from[1]) - parseFloat(to[1]);
    return Math.sqrt(x * x + y * y);
  } catch {
    return -1;
  }
}

function Home() {
  const {
    0: pad,
    1: setPad
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(CONST.size1);
  const {
    0: radius,
    1: setRadius
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(CONST.size1);
  const {
    0: username,
    1: setUsername
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("LMAO");
  const {
    0: age,
    1: setAge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(20);
  const {
    0: distanceRadius,
    1: setDistanceRadius
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(CONST.size1);
  const {
    0: bounds,
    1: setBounds
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([0, 0]);
  const {
    0: target,
    1: setTarget
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([0, 0]);
  const {
    0: touch,
    1: setTouch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([radius, radius]);
  const {
    0: next,
    1: setNext
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([radius, radius]);
  const {
    0: round,
    1: setRound
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: time,
    1: setTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: prevTime,
    1: setPrevTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: status,
    1: setStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('wait');
  const {
    0: log,
    1: setLog
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  function handleTouchStart(event) {
    console.log(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
    setTouch([event.changedTouches[0].clientX, event.changedTouches[0].clientY]);
  }

  function init() {
    setStatus('go');
    setTime(Date.now());
    setPrevTime(Date.now());
    const next = nextPos(target, bounds, radius, pad, distanceRadius);
    setTarget(next);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setBounds([parseInt(document.getElementById("touch-bound").getBoundingClientRect().width), parseInt(document.getElementById("touch-bound").getBoundingClientRect().height)]);
    setTarget([radius + pad, radius + pad]);
  }, []);

  function saveCsv(data) {
    let csvStr = convertToCSV(data);
    let csvContent = "data:text/csv;charset=utf-8," + csvStr;
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `fitts_${new Date().toISOString()}.csv`);
    document.body.appendChild(link);
    link.click();
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(async () => {
    if (status !== 'go') return;
    const now = Date.now();
    await setRound(round + 1);
    await setPrevTime(now);

    if (calcDist(touch, target) < radius) {
      setLog(log.concat([{
        'round': round + 1,
        'target_x': Math.round(target[0]),
        'target_y': Math.round(target[1]),
        'touch_x': Math.round(touch[0]),
        'touch_y': Math.round(touch[1]),
        's_time': prevTime - time,
        'e_time': now - time,
        'duration': now - prevTime,
        'distance': Math.round(calcDist(touch, target)),
        'hit': calcDist(touch, target) < radius,
        'username': username,
        'inputDistanceRadius': distanceRadius,
        'inputTargetRadius': radius,
        'inputAge': age
      }]));
      const next = nextPos(target, bounds, radius, pad, distanceRadius);
      setTarget(next);
    }

    if (log.filter(x => x.hit).length >= CONST.rounds) {
      setStatus('end');
    }
  }, [touch]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Fitts Eval"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "mobile-web-app-capable",
        content: "yes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "touch-bound",
      className: "board",
      onTouchEnd: e => {
        handleTouchStart(e);
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "menuItemContainer",
        children: [status === 'wait' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "startBtn",
          onClick: init,
          children: "Start"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 30
        }, this) : '', status === 'wait' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "number",
            placeholder: "distance radius",
            className: "inputBox",
            onChange: e => setDistanceRadius(parseInt(e.target.value))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 32
          }, this)
        }, void 0, false) : '', status === 'wait' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "number",
            placeholder: "target button radius",
            className: "inputBox",
            onChange: e => setRadius(parseInt(e.target.value))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 32
          }, this)
        }, void 0, false) : '', status === 'wait' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Age",
            className: "inputBox",
            onChange: e => setAge(parseInt(e.target.value))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 32
          }, this)
        }, void 0, false) : '', status === 'wait' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            placeholder: "User name",
            className: "inputBox",
            onChange: e => setUsername(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 32
          }, this)
        }, void 0, false) : '']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "canvas",
        style: {
          margin: `${pad}px`
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pre", {
          className: "log-box",
          children: JSON.stringify(log.map(x => [x.round, x.dist, x.e_time - x.s_time]), null, 1)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 9
      }, this), status === 'go' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Target, {
        radius: radius,
        target: target,
        distanceRadius: distanceRadius
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 26
      }, this) : '', status === 'end' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "startBtn",
        onClick: () => saveCsv(log),
        children: "Download"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 27
      }, this) : '']
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDT05TVCIsIm1pbl9kaXN0Iiwic2l6ZTEiLCJzaXplMiIsInNpemUzIiwicm91bmRzIiwiY29udmVydFRvQ1NWIiwib2JqQXJyYXkiLCJhcnJheSIsIkpTT04iLCJwYXJzZSIsInN0ciIsIk9iamVjdCIsImtleXMiLCJqb2luIiwiaSIsImxlbmd0aCIsImxpbmUiLCJpbmRleCIsIlRhcmdldCIsInRhcmdldCIsInJhZGl1cyIsImRpc3RhbmNlUmFkaXVzIiwibGVmdCIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwicmFuZEludCIsInJhbmdlIiwibWluIiwiTWF0aCIsImNlaWwiLCJtYXgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRGbG9hdCIsIm5leHRQb3MiLCJib3VuZHMiLCJwYWQiLCJuZXh0IiwidCIsImdldFBvaW50T25DaXJjdW1mZXJlbmNlIiwiY2hlY2tJbnNpZGUiLCJjZW50ZXIiLCJ0ZW1wX3giLCJjb3MiLCJ0ZW1wX3kiLCJzaW4iLCJ4IiwieSIsInNjcmVlbiIsImNhbGNEaXN0IiwiZnJvbSIsInRvIiwicGFyc2VGbG9hdCIsInNxcnQiLCJIb21lIiwic2V0UGFkIiwidXNlU3RhdGUiLCJzZXRSYWRpdXMiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiYWdlIiwic2V0QWdlIiwic2V0RGlzdGFuY2VSYWRpdXMiLCJzZXRCb3VuZHMiLCJzZXRUYXJnZXQiLCJ0b3VjaCIsInNldFRvdWNoIiwic2V0TmV4dCIsInJvdW5kIiwic2V0Um91bmQiLCJ0aW1lIiwic2V0VGltZSIsInByZXZUaW1lIiwic2V0UHJldlRpbWUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJsb2ciLCJzZXRMb2ciLCJoYW5kbGVUb3VjaFN0YXJ0IiwiZXZlbnQiLCJjb25zb2xlIiwiY2hhbmdlZFRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsImluaXQiLCJEYXRlIiwibm93IiwidXNlRWZmZWN0IiwicGFyc2VJbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic2F2ZUNzdiIsImRhdGEiLCJjc3ZTdHIiLCJjc3ZDb250ZW50IiwiZW5jb2RlZFVyaSIsImVuY29kZVVSSSIsImxpbmsiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidG9JU09TdHJpbmciLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsImNvbmNhdCIsImZpbHRlciIsImhpdCIsImUiLCJ2YWx1ZSIsIm1hcmdpbiIsInN0cmluZ2lmeSIsIm1hcCIsImRpc3QiLCJlX3RpbWUiLCJzX3RpbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxl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Qm5FLENBQUMsQ0FBQ29FLE1BQUYsR0FBU3BFLENBQUMsQ0FBQ3FFLE1BQTNCLENBQVgsQ0FBZixFQUE4RCxJQUE5RCxFQUFtRSxDQUFuRTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkYsRUFhSXpDLE1BQU0sS0FBRyxJQUFWLGdCQUFnQixxRUFBQyxNQUFEO0FBQVEsY0FBTSxFQUFFdkQsTUFBaEI7QUFBd0IsY0FBTSxFQUFFRCxNQUFoQztBQUF3QyxzQkFBYyxFQUFFRTtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWhCLEdBQTJGLEVBYjlGLEVBY0lzRCxNQUFNLEtBQUcsS0FBVixnQkFBaUI7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBMEIsZUFBTyxFQUFFLE1BQUlrQixPQUFPLENBQUNoQixHQUFELENBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWpCLEdBQXFGLEVBZHhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGO0FBQUEsa0JBREY7QUEyQkQsQzs7Ozs7Ozs7Ozs7QUNoUEQsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5cclxuY29uc3QgQ09OU1QgPSB7XHJcbiAgbWluX2Rpc3QgOiAzMCxcclxuICBzaXplMSA6IDQ3LFxyXG4gIHNpemUyIDogNTQsXHJcbiAgc2l6ZTMgOiA2MSxcclxuICByb3VuZHMgOiAzMFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0VG9DU1Yob2JqQXJyYXkpIHtcclxuICB2YXIgYXJyYXkgPSB0eXBlb2Ygb2JqQXJyYXkgIT0gJ29iamVjdCcgPyBKU09OLnBhcnNlKG9iakFycmF5KSA6IG9iakFycmF5O1xyXG4gIHZhciBzdHIgPSBPYmplY3Qua2V5cyhhcnJheVswXSkuam9pbignLCcpO1xyXG4gIHN0cj1zdHIrJ1xcclxcbic7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBsaW5lID0gJyc7XHJcbiAgICBmb3IgKHZhciBpbmRleCBpbiBhcnJheVtpXSkge1xyXG4gICAgICBpZiAobGluZSAhPSAnJykgbGluZSArPSAnLCdcclxuICAgICAgbGluZSArPSBhcnJheVtpXVtpbmRleF07XHJcbiAgICB9XHJcbiAgICBzdHIgKz0gbGluZSArICdcXHJcXG4nO1xyXG4gIH1cclxuICByZXR1cm4gc3RyO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gVGFyZ2V0KHt0YXJnZXQscmFkaXVzLCBkaXN0YW5jZVJhZGl1c30pIHtcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0YXJnZXQtYm94XCIgc3R5bGU9e3tcclxuICAgICAgbGVmdDpgJHt0YXJnZXRbMF0tMipyYWRpdXN9cHhgLFxyXG4gICAgICB0b3A6YCR7dGFyZ2V0WzFdLTIqcmFkaXVzfXB4YCxcclxuICAgICAgd2lkdGg6YCR7NCpyYWRpdXN9cHhgLFxyXG4gICAgICBoZWlnaHQ6YCR7NCpyYWRpdXN9cHhgXHJcbiAgICB9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXJnZXQtY29yZVwiIHN0eWxlPXt7XHJcbiAgICAgICAgbGVmdDpgJHtyYWRpdXN9cHhgLFxyXG4gICAgICAgIHRvcDpgJHtyYWRpdXN9cHhgLFxyXG4gICAgICAgIHdpZHRoOmAkezIqcmFkaXVzfXB4YCxcclxuICAgICAgICBoZWlnaHQ6YCR7MipyYWRpdXN9cHhgXHJcbiAgICAgIH19PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByYW5kSW50KHJhbmdlKSB7XHJcbiAgdmFyIG1pbiA9IE1hdGguY2VpbChyYW5nZVswXSk7XHJcbiAgdmFyIG1heCA9IE1hdGguZmxvb3IocmFuZ2VbMV0pO1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRGbG9hdChyYW5nZSkge1xyXG4gIHZhciBtaW4gPSBNYXRoLmNlaWwocmFuZ2VbMF0pO1xyXG4gIHZhciBtYXggPSBNYXRoLmZsb29yKHJhbmdlWzFdKTtcclxuICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbmV4dFBvcyh0YXJnZXQsYm91bmRzLHJhZGl1cyxwYWQsIGRpc3RhbmNlUmFkaXVzKXtcclxuXHJcbiAgLy8gY29uc3QgbWluX2Rpc3QgPSBDT05TVC5taW5fZGlzdDtcclxuICAvLyBjb25zdCB4X3JhbmdlID0gW3BhZCtyYWRpdXMsYm91bmRzWzBdLXBhZC1yYWRpdXNdXHJcbiAgLy8gY29uc3QgeV9yYW5nZSA9IFtwYWQrcmFkaXVzLGJvdW5kc1sxXS1wYWQtcmFkaXVzXVxyXG5cclxuICBsZXQgbmV4dCA9IFswLDBdXHJcbiAgbGV0IHQgPSByYW5kRmxvYXQoWzAgLDM2MF0pXHJcbiAgbmV4dCA9IGdldFBvaW50T25DaXJjdW1mZXJlbmNlKHQsdGFyZ2V0LCBkaXN0YW5jZVJhZGl1cylcclxuXHJcbiAgd2hpbGUoIWNoZWNrSW5zaWRlKG5leHRbMF0sIG5leHRbMV0sIGRpc3RhbmNlUmFkaXVzKSl7XHJcbiAgICBsZXQgdCA9IHJhbmRGbG9hdChbMCAsMzYwXSlcclxuICAgIG5leHQgPSBnZXRQb2ludE9uQ2lyY3VtZmVyZW5jZSh0LHRhcmdldCwgZGlzdGFuY2VSYWRpdXMpXHJcbiAgfVxyXG5cclxuICAvLyB3aGlsZShjYWxjRGlzdCh0YXJnZXQsbmV4dCk8bWluX2Rpc3Qpe1xyXG4gIC8vICAgbmV4dCA9IFtyYW5kSW50KHhfcmFuZ2UpLHJhbmRJbnQoeV9yYW5nZSldXHJcbiAgLy8gfVxyXG4gIHJldHVybiBuZXh0XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRQb2ludE9uQ2lyY3VtZmVyZW5jZSh0LCBjZW50ZXIsIHJhZGl1cyl7XHJcbiAgbGV0IHRlbXBfeCA9IHJhZGl1cyAqIE1hdGguY29zKHQpICsgY2VudGVyWzBdO1xyXG4gIGxldCB0ZW1wX3kgPSByYWRpdXMgKiBNYXRoLnNpbih0KSArIGNlbnRlclsxXTtcclxuICByZXR1cm4gW3RlbXBfeCwgdGVtcF95XTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoZWNrSW5zaWRlKHgseSwgcmFkaXVzKXtcclxuICBpZih4ICsgcmFkaXVzIDwgc2NyZWVuLndpZHRoICYmIHggLSByYWRpdXMgPiAwKXtcclxuICAgIGlmKHkgKyByYWRpdXMgPCBzY3JlZW4uaGVpZ2h0ICYmIHkgLSByYWRpdXMgPiAwKXtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfSAgXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjRGlzdChmcm9tLHRvKXtcclxuXHJcbiAgdHJ5e1xyXG4gICAgdmFyIHg9cGFyc2VGbG9hdChmcm9tWzBdKS1wYXJzZUZsb2F0KHRvWzBdKVxyXG4gICAgdmFyIHk9cGFyc2VGbG9hdChmcm9tWzFdKS1wYXJzZUZsb2F0KHRvWzFdKVxyXG4gICAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkpO1xyXG4gIH1cclxuICBjYXRjaHtcclxuICAgIHJldHVybiAtMVxyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgY29uc3QgW3BhZCxzZXRQYWRdID0gdXNlU3RhdGUoQ09OU1Quc2l6ZTEpXHJcbiAgY29uc3QgW3JhZGl1cyxzZXRSYWRpdXNdID0gdXNlU3RhdGUoQ09OU1Quc2l6ZTEpXHJcbiAgY29uc3QgW3VzZXJuYW1lLHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiTE1BT1wiKVxyXG4gIGNvbnN0IFthZ2Usc2V0QWdlXSA9IHVzZVN0YXRlKDIwKVxyXG4gIGNvbnN0IFtkaXN0YW5jZVJhZGl1cyxzZXREaXN0YW5jZVJhZGl1c10gPSB1c2VTdGF0ZShDT05TVC5zaXplMSlcclxuICBjb25zdCBbYm91bmRzLCBzZXRCb3VuZHNdID0gdXNlU3RhdGUoWzAsMF0pXHJcbiAgY29uc3QgW3RhcmdldCwgc2V0VGFyZ2V0XSA9IHVzZVN0YXRlKFswLDBdKVxyXG4gIGNvbnN0IFt0b3VjaCwgc2V0VG91Y2hdID0gdXNlU3RhdGUoW3JhZGl1cyxyYWRpdXNdKVxyXG4gIGNvbnN0IFtuZXh0LCBzZXROZXh0XSA9IHVzZVN0YXRlKFtyYWRpdXMscmFkaXVzXSlcclxuICBcclxuICBjb25zdCBbcm91bmQsc2V0Um91bmRdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtwcmV2VGltZSxzZXRQcmV2VGltZV0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICBjb25zdCBbc3RhdHVzLHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnd2FpdCcpXHJcbiAgY29uc3QgW2xvZyxzZXRMb2ddID0gdXNlU3RhdGUoW10pXHJcblxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KGV2ZW50KXtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSlcclxuICAgIHNldFRvdWNoKFtldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFldKVxyXG4gIH1cclxuICBcclxuXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgc2V0U3RhdHVzKCdnbycpXHJcbiAgICBzZXRUaW1lKERhdGUubm93KCkpXHJcbiAgICBzZXRQcmV2VGltZShEYXRlLm5vdygpKVxyXG4gICAgXHJcbiAgICBjb25zdCBuZXh0ID0gbmV4dFBvcyh0YXJnZXQsYm91bmRzLHJhZGl1cyxwYWQsIGRpc3RhbmNlUmFkaXVzKVxyXG4gICAgc2V0VGFyZ2V0KG5leHQpXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIHNldEJvdW5kcyhbXHJcbiAgICAgIHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG91Y2gtYm91bmRcIikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpLFxyXG4gICAgICBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdWNoLWJvdW5kXCIpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodClcclxuICAgIF0pXHJcbiAgICBzZXRUYXJnZXQoW3JhZGl1cytwYWQscmFkaXVzK3BhZF0pXHJcbiAgfSxbXSlcclxuXHJcblxyXG4gIGZ1bmN0aW9uIHNhdmVDc3YoZGF0YSl7XHJcbiAgICBsZXQgY3N2U3RyID0gY29udmVydFRvQ1NWKGRhdGEpXHJcbiAgICBsZXQgY3N2Q29udGVudCA9IFwiZGF0YTp0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04LFwiK2NzdlN0clxyXG4gICAgdmFyIGVuY29kZWRVcmkgPSBlbmNvZGVVUkkoY3N2Q29udGVudCk7XHJcbiAgICBcclxuICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgZW5jb2RlZFVyaSk7XHJcbiAgICBsaW5rLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIGBmaXR0c18keyhuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpfS5jc3ZgKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7IFxyXG5cclxuICAgIGxpbmsuY2xpY2soKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdChhc3luYygpPT57XHJcbiAgICBpZihzdGF0dXMhPT0nZ28nKXJldHVybjtcclxuICAgIFxyXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxyXG4gICAgXHJcblxyXG4gICAgYXdhaXQgc2V0Um91bmQocm91bmQrMSlcclxuXHJcbiAgICBhd2FpdCBzZXRQcmV2VGltZShub3cpXHJcblxyXG4gICAgaWYoY2FsY0Rpc3QodG91Y2gsdGFyZ2V0KTxyYWRpdXMpe1xyXG4gICAgICBzZXRMb2cobG9nLmNvbmNhdChbe1xyXG4gICAgICAgICdyb3VuZCc6IHJvdW5kKzEsXHJcbiAgICAgICAgJ3RhcmdldF94JyA6IE1hdGgucm91bmQodGFyZ2V0WzBdKSxcclxuICAgICAgICAndGFyZ2V0X3knIDogTWF0aC5yb3VuZCh0YXJnZXRbMV0pLFxyXG4gICAgICAgICd0b3VjaF94JyA6IE1hdGgucm91bmQodG91Y2hbMF0pLFxyXG4gICAgICAgICd0b3VjaF95JyA6IE1hdGgucm91bmQodG91Y2hbMV0pLFxyXG4gICAgICAgICdzX3RpbWUnOiBwcmV2VGltZS10aW1lLFxyXG4gICAgICAgICdlX3RpbWUnOiBub3ctdGltZSxcclxuICAgICAgICAnZHVyYXRpb24nIDogbm93IC0gcHJldlRpbWUsXHJcbiAgICAgICAgJ2Rpc3RhbmNlJyA6IE1hdGgucm91bmQoY2FsY0Rpc3QodG91Y2gsdGFyZ2V0KSksXHJcbiAgICAgICAgJ2hpdCcgOiAoY2FsY0Rpc3QodG91Y2gsdGFyZ2V0KTwocmFkaXVzKSksXHJcbiAgICAgICAgJ3VzZXJuYW1lJzogdXNlcm5hbWUsXHJcbiAgICAgICAgJ2lucHV0RGlzdGFuY2VSYWRpdXMnOiBkaXN0YW5jZVJhZGl1cyxcclxuICAgICAgICAnaW5wdXRUYXJnZXRSYWRpdXMnOiByYWRpdXMsXHJcbiAgICAgICAgJ2lucHV0QWdlJzogYWdlLFxyXG4gICAgICB9XSkpXHJcbiAgICAgIGNvbnN0IG5leHQgPSBuZXh0UG9zKHRhcmdldCxib3VuZHMscmFkaXVzLHBhZCwgZGlzdGFuY2VSYWRpdXMpXHJcbiAgICAgIHNldFRhcmdldChuZXh0KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZihsb2cuZmlsdGVyKHg9Pih4LmhpdCkpLmxlbmd0aD49Q09OU1Qucm91bmRzKXtcclxuICAgICAgc2V0U3RhdHVzKCdlbmQnKVxyXG4gICAgfVxyXG4gICAgICBcclxuICB9LFt0b3VjaF0pXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkZpdHRzIEV2YWw8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT0wLCB2aWV3cG9ydC1maXQ9Y292ZXInLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwibW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIi8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCIvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGlkPVwidG91Y2gtYm91bmRcIiBjbGFzc05hbWU9XCJib2FyZFwiIG9uVG91Y2hFbmQ9eyhlKT0+e2hhbmRsZVRvdWNoU3RhcnQoZSl9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVJdGVtQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICB7KHN0YXR1cz09PSd3YWl0Jyk/PGRpdiBjbGFzc05hbWU9XCJzdGFydEJ0blwiIG9uQ2xpY2s9e2luaXR9PlN0YXJ0PC9kaXY+OicnfVxyXG4gICAgICAgICAgeyhzdGF0dXM9PT0nd2FpdCcpPzw+PGlucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cImRpc3RhbmNlIHJhZGl1c1wiIGNsYXNzTmFtZT1cImlucHV0Qm94XCIgb25DaGFuZ2U9e2UgPT4gc2V0RGlzdGFuY2VSYWRpdXMocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX0vPjwvPjonJ31cclxuICAgICAgICAgIHsoc3RhdHVzPT09J3dhaXQnKT88PjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJ0YXJnZXQgYnV0dG9uIHJhZGl1c1wiIGNsYXNzTmFtZT1cImlucHV0Qm94XCIgb25DaGFuZ2U9e2UgPT4gc2V0UmFkaXVzKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9Lz48Lz46Jyd9XHJcbiAgICAgICAgICB7KHN0YXR1cz09PSd3YWl0Jyk/PD48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFnZVwiIGNsYXNzTmFtZT1cImlucHV0Qm94XCIgb25DaGFuZ2U9e2UgPT4gc2V0QWdlKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9Lz48Lz46Jyd9XHJcbiAgICAgICAgICB7KHN0YXR1cz09PSd3YWl0Jyk/PD48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlVzZXIgbmFtZVwiIGNsYXNzTmFtZT1cImlucHV0Qm94XCIgb25DaGFuZ2U9e2UgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfS8+PC8+OicnfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FudmFzXCIgc3R5bGU9e3ttYXJnaW46IGAke3BhZH1weGB9fT5cclxuICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwibG9nLWJveFwiPlxyXG4gICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkobG9nLm1hcCh4PT5beC5yb3VuZCx4LmRpc3QseC5lX3RpbWUteC5zX3RpbWVdKSxudWxsLDEpfVxyXG4gICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgeyhzdGF0dXM9PT0nZ28nKT88VGFyZ2V0IHJhZGl1cz17cmFkaXVzfSB0YXJnZXQ9e3RhcmdldH0gZGlzdGFuY2VSYWRpdXM9e2Rpc3RhbmNlUmFkaXVzfSAvPjonJ31cclxuICAgICAgICB7KHN0YXR1cz09PSdlbmQnKT88ZGl2IGNsYXNzTmFtZT1cInN0YXJ0QnRuXCIgb25DbGljaz17KCk9PnNhdmVDc3YobG9nKX0+RG93bmxvYWQ8L2Rpdj46Jyd9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==