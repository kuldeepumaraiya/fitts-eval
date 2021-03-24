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

  while (!checkInside(next[0], next[1], distanceRadius, pad)) {
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

function checkInside(x, y, radius, pad) {
  if (x + radius + pad < screen.width && x - radius - pad > 0) {
    if (y + radius + pad < screen.height && y - radius - pad > 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDT05TVCIsIm1pbl9kaXN0Iiwic2l6ZTEiLCJzaXplMiIsInNpemUzIiwicm91bmRzIiwiY29udmVydFRvQ1NWIiwib2JqQXJyYXkiLCJhcnJheSIsIkpTT04iLCJwYXJzZSIsInN0ciIsIk9iamVjdCIsImtleXMiLCJqb2luIiwiaSIsImxlbmd0aCIsImxpbmUiLCJpbmRleCIsIlRhcmdldCIsInRhcmdldCIsInJhZGl1cyIsImRpc3RhbmNlUmFkaXVzIiwibGVmdCIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwicmFuZEludCIsInJhbmdlIiwibWluIiwiTWF0aCIsImNlaWwiLCJtYXgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRGbG9hdCIsIm5leHRQb3MiLCJib3VuZHMiLCJwYWQiLCJuZXh0IiwidCIsImdldFBvaW50T25DaXJjdW1mZXJlbmNlIiwiY2hlY2tJbnNpZGUiLCJjZW50ZXIiLCJ0ZW1wX3giLCJjb3MiLCJ0ZW1wX3kiLCJzaW4iLCJ4IiwieSIsInNjcmVlbiIsImNhbGNEaXN0IiwiZnJvbSIsInRvIiwicGFyc2VGbG9hdCIsInNxcnQiLCJIb21lIiwic2V0UGFkIiwidXNlU3RhdGUiLCJzZXRSYWRpdXMiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiYWdlIiwic2V0QWdlIiwic2V0RGlzdGFuY2VSYWRpdXMiLCJzZXRCb3VuZHMiLCJzZXRUYXJnZXQiLCJ0b3VjaCIsInNldFRvdWNoIiwic2V0TmV4dCIsInJvdW5kIiwic2V0Um91bmQiLCJ0aW1lIiwic2V0VGltZSIsInByZXZUaW1lIiwic2V0UHJldlRpbWUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJsb2ciLCJzZXRMb2ciLCJoYW5kbGVUb3VjaFN0YXJ0IiwiZXZlbnQiLCJjb25zb2xlIiwiY2hhbmdlZFRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsImluaXQiLCJEYXRlIiwibm93IiwidXNlRWZmZWN0IiwicGFyc2VJbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic2F2ZUNzdiIsImRhdGEiLCJjc3ZTdHIiLCJjc3ZDb250ZW50IiwiZW5jb2RlZFVyaSIsImVuY29kZVVSSSIsImxpbmsiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidG9JU09TdHJpbmciLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsImNvbmNhdCIsImZpbHRlciIsImhpdCIsImUiLCJ2YWx1ZSIsIm1hcmdpbiIsInN0cmluZ2lmeSIsIm1hcCIsImRpc3QiLCJlX3RpbWUiLCJzX3RpbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxl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LEdBQUosQ0FBUWxFLENBQUMsSUFBRSxDQUFDQSxDQUFDLENBQUNzQixLQUFILEVBQVN0QixDQUFDLENBQUNtRSxJQUFYLEVBQWdCbkUsQ0FBQyxDQUFDb0UsTUFBRixHQUFTcEUsQ0FBQyxDQUFDcUUsTUFBM0IsQ0FBWCxDQUFmLEVBQThELElBQTlELEVBQW1FLENBQW5FO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixFQWFJekMsTUFBTSxLQUFHLElBQVYsZ0JBQWdCLHFFQUFDLE1BQUQ7QUFBUSxjQUFNLEVBQUV2RCxNQUFoQjtBQUF3QixjQUFNLEVBQUVELE1BQWhDO0FBQXdDLHNCQUFjLEVBQUVFO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBaEIsR0FBMkYsRUFiOUYsRUFjSXNELE1BQU0sS0FBRyxLQUFWLGdCQUFpQjtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUEwQixlQUFPLEVBQUUsTUFBSWtCLE9BQU8sQ0FBQ2hCLEdBQUQsQ0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBakIsR0FBcUYsRUFkeEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQSxrQkFERjtBQTJCRCxDOzs7Ozs7Ozs7OztBQ2hQRCxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcblxyXG5jb25zdCBDT05TVCA9IHtcclxuICBtaW5fZGlzdCA6IDMwLFxyXG4gIHNpemUxIDogNDcsXHJcbiAgc2l6ZTIgOiA1NCxcclxuICBzaXplMyA6IDYxLFxyXG4gIHJvdW5kcyA6IDMwXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRUb0NTVihvYmpBcnJheSkge1xyXG4gIHZhciBhcnJheSA9IHR5cGVvZiBvYmpBcnJheSAhPSAnb2JqZWN0JyA/IEpTT04ucGFyc2Uob2JqQXJyYXkpIDogb2JqQXJyYXk7XHJcbiAgdmFyIHN0ciA9IE9iamVjdC5rZXlzKGFycmF5WzBdKS5qb2luKCcsJyk7XHJcbiAgc3RyPXN0cisnXFxyXFxuJztcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGxpbmUgPSAnJztcclxuICAgIGZvciAodmFyIGluZGV4IGluIGFycmF5W2ldKSB7XHJcbiAgICAgIGlmIChsaW5lICE9ICcnKSBsaW5lICs9ICcsJ1xyXG4gICAgICBsaW5lICs9IGFycmF5W2ldW2luZGV4XTtcclxuICAgIH1cclxuICAgIHN0ciArPSBsaW5lICsgJ1xcclxcbic7XHJcbiAgfVxyXG4gIHJldHVybiBzdHI7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBUYXJnZXQoe3RhcmdldCxyYWRpdXMsIGRpc3RhbmNlUmFkaXVzfSkge1xyXG5cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRhcmdldC1ib3hcIiBzdHlsZT17e1xyXG4gICAgICBsZWZ0OmAke3RhcmdldFswXS0yKnJhZGl1c31weGAsXHJcbiAgICAgIHRvcDpgJHt0YXJnZXRbMV0tMipyYWRpdXN9cHhgLFxyXG4gICAgICB3aWR0aDpgJHs0KnJhZGl1c31weGAsXHJcbiAgICAgIGhlaWdodDpgJHs0KnJhZGl1c31weGBcclxuICAgIH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhcmdldC1jb3JlXCIgc3R5bGU9e3tcclxuICAgICAgICBsZWZ0OmAke3JhZGl1c31weGAsXHJcbiAgICAgICAgdG9wOmAke3JhZGl1c31weGAsXHJcbiAgICAgICAgd2lkdGg6YCR7MipyYWRpdXN9cHhgLFxyXG4gICAgICAgIGhlaWdodDpgJHsyKnJhZGl1c31weGBcclxuICAgICAgfX0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJhbmRJbnQocmFuZ2UpIHtcclxuICB2YXIgbWluID0gTWF0aC5jZWlsKHJhbmdlWzBdKTtcclxuICB2YXIgbWF4ID0gTWF0aC5mbG9vcihyYW5nZVsxXSk7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZEZsb2F0KHJhbmdlKSB7XHJcbiAgdmFyIG1pbiA9IE1hdGguY2VpbChyYW5nZVswXSk7XHJcbiAgdmFyIG1heCA9IE1hdGguZmxvb3IocmFuZ2VbMV0pO1xyXG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBuZXh0UG9zKHRhcmdldCxib3VuZHMscmFkaXVzLHBhZCwgZGlzdGFuY2VSYWRpdXMpe1xyXG5cclxuICAvLyBjb25zdCBtaW5fZGlzdCA9IENPTlNULm1pbl9kaXN0O1xyXG4gIC8vIGNvbnN0IHhfcmFuZ2UgPSBbcGFkK3JhZGl1cyxib3VuZHNbMF0tcGFkLXJhZGl1c11cclxuICAvLyBjb25zdCB5X3JhbmdlID0gW3BhZCtyYWRpdXMsYm91bmRzWzFdLXBhZC1yYWRpdXNdXHJcblxyXG4gIGxldCBuZXh0ID0gWzAsMF1cclxuICBsZXQgdCA9IHJhbmRGbG9hdChbMCAsMzYwXSlcclxuICBuZXh0ID0gZ2V0UG9pbnRPbkNpcmN1bWZlcmVuY2UodCx0YXJnZXQsIGRpc3RhbmNlUmFkaXVzKVxyXG5cclxuICB3aGlsZSghY2hlY2tJbnNpZGUobmV4dFswXSwgbmV4dFsxXSwgZGlzdGFuY2VSYWRpdXMsIHBhZCkpe1xyXG4gICAgbGV0IHQgPSByYW5kRmxvYXQoWzAgLDM2MF0pXHJcbiAgICBuZXh0ID0gZ2V0UG9pbnRPbkNpcmN1bWZlcmVuY2UodCx0YXJnZXQsIGRpc3RhbmNlUmFkaXVzKVxyXG4gIH1cclxuXHJcbiAgLy8gd2hpbGUoY2FsY0Rpc3QodGFyZ2V0LG5leHQpPG1pbl9kaXN0KXtcclxuICAvLyAgIG5leHQgPSBbcmFuZEludCh4X3JhbmdlKSxyYW5kSW50KHlfcmFuZ2UpXVxyXG4gIC8vIH1cclxuICByZXR1cm4gbmV4dFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0UG9pbnRPbkNpcmN1bWZlcmVuY2UodCwgY2VudGVyLCByYWRpdXMpe1xyXG4gIGxldCB0ZW1wX3ggPSByYWRpdXMgKiBNYXRoLmNvcyh0KSArIGNlbnRlclswXTtcclxuICBsZXQgdGVtcF95ID0gcmFkaXVzICogTWF0aC5zaW4odCkgKyBjZW50ZXJbMV07XHJcbiAgcmV0dXJuIFt0ZW1wX3gsIHRlbXBfeV07XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjaGVja0luc2lkZSh4LHksIHJhZGl1cywgcGFkKXtcclxuICBpZih4ICsgcmFkaXVzICsgcGFkIDwgc2NyZWVuLndpZHRoICYmIHggLSByYWRpdXMgLSBwYWQgPiAwKXtcclxuICAgIGlmKHkgKyByYWRpdXMgKyBwYWQ8IHNjcmVlbi5oZWlnaHQgJiYgeSAtIHJhZGl1cyAtIHBhZD4gMCl7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH0gIFxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY0Rpc3QoZnJvbSx0byl7XHJcblxyXG4gIHRyeXtcclxuICAgIHZhciB4PXBhcnNlRmxvYXQoZnJvbVswXSktcGFyc2VGbG9hdCh0b1swXSlcclxuICAgIHZhciB5PXBhcnNlRmxvYXQoZnJvbVsxXSktcGFyc2VGbG9hdCh0b1sxXSlcclxuICAgIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5KTtcclxuICB9XHJcbiAgY2F0Y2h7XHJcbiAgICByZXR1cm4gLTFcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gIGNvbnN0IFtwYWQsc2V0UGFkXSA9IHVzZVN0YXRlKENPTlNULnNpemUxKVxyXG4gIGNvbnN0IFtyYWRpdXMsc2V0UmFkaXVzXSA9IHVzZVN0YXRlKENPTlNULnNpemUxKVxyXG4gIGNvbnN0IFt1c2VybmFtZSxzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIkxNQU9cIilcclxuICBjb25zdCBbYWdlLHNldEFnZV0gPSB1c2VTdGF0ZSgyMClcclxuICBjb25zdCBbZGlzdGFuY2VSYWRpdXMsc2V0RGlzdGFuY2VSYWRpdXNdID0gdXNlU3RhdGUoQ09OU1Quc2l6ZTEpXHJcbiAgY29uc3QgW2JvdW5kcywgc2V0Qm91bmRzXSA9IHVzZVN0YXRlKFswLDBdKVxyXG4gIGNvbnN0IFt0YXJnZXQsIHNldFRhcmdldF0gPSB1c2VTdGF0ZShbMCwwXSlcclxuICBjb25zdCBbdG91Y2gsIHNldFRvdWNoXSA9IHVzZVN0YXRlKFtyYWRpdXMscmFkaXVzXSlcclxuICBjb25zdCBbbmV4dCwgc2V0TmV4dF0gPSB1c2VTdGF0ZShbcmFkaXVzLHJhZGl1c10pXHJcbiAgXHJcbiAgY29uc3QgW3JvdW5kLHNldFJvdW5kXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbcHJldlRpbWUsc2V0UHJldlRpbWVdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgY29uc3QgW3N0YXR1cyxzZXRTdGF0dXNdID0gdXNlU3RhdGUoJ3dhaXQnKVxyXG4gIGNvbnN0IFtsb2csc2V0TG9nXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydChldmVudCl7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkpXHJcbiAgICBzZXRUb3VjaChbZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXSlcclxuICB9XHJcbiAgXHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgIHNldFN0YXR1cygnZ28nKVxyXG4gICAgc2V0VGltZShEYXRlLm5vdygpKVxyXG4gICAgc2V0UHJldlRpbWUoRGF0ZS5ub3coKSlcclxuICAgIFxyXG4gICAgY29uc3QgbmV4dCA9IG5leHRQb3ModGFyZ2V0LGJvdW5kcyxyYWRpdXMscGFkLCBkaXN0YW5jZVJhZGl1cylcclxuICAgIHNldFRhcmdldChuZXh0KVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBzZXRCb3VuZHMoW1xyXG4gICAgICBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdWNoLWJvdW5kXCIpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKSxcclxuICAgICAgcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3VjaC1ib3VuZFwiKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpXHJcbiAgICBdKVxyXG4gICAgc2V0VGFyZ2V0KFtyYWRpdXMrcGFkLHJhZGl1cytwYWRdKVxyXG4gIH0sW10pXHJcblxyXG5cclxuICBmdW5jdGlvbiBzYXZlQ3N2KGRhdGEpe1xyXG4gICAgbGV0IGNzdlN0ciA9IGNvbnZlcnRUb0NTVihkYXRhKVxyXG4gICAgbGV0IGNzdkNvbnRlbnQgPSBcImRhdGE6dGV4dC9jc3Y7Y2hhcnNldD11dGYtOCxcIitjc3ZTdHJcclxuICAgIHZhciBlbmNvZGVkVXJpID0gZW5jb2RlVVJJKGNzdkNvbnRlbnQpO1xyXG4gICAgXHJcbiAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGVuY29kZWRVcmkpO1xyXG4gICAgbGluay5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBgZml0dHNfJHsobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKX0uY3N2YCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspOyBcclxuXHJcbiAgICBsaW5rLmNsaWNrKCk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMoKT0+e1xyXG4gICAgaWYoc3RhdHVzIT09J2dvJylyZXR1cm47XHJcbiAgICBcclxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcclxuICAgIFxyXG5cclxuICAgIGF3YWl0IHNldFJvdW5kKHJvdW5kKzEpXHJcblxyXG4gICAgYXdhaXQgc2V0UHJldlRpbWUobm93KVxyXG5cclxuICAgIGlmKGNhbGNEaXN0KHRvdWNoLHRhcmdldCk8cmFkaXVzKXtcclxuICAgICAgc2V0TG9nKGxvZy5jb25jYXQoW3tcclxuICAgICAgICAncm91bmQnOiByb3VuZCsxLFxyXG4gICAgICAgICd0YXJnZXRfeCcgOiBNYXRoLnJvdW5kKHRhcmdldFswXSksXHJcbiAgICAgICAgJ3RhcmdldF95JyA6IE1hdGgucm91bmQodGFyZ2V0WzFdKSxcclxuICAgICAgICAndG91Y2hfeCcgOiBNYXRoLnJvdW5kKHRvdWNoWzBdKSxcclxuICAgICAgICAndG91Y2hfeScgOiBNYXRoLnJvdW5kKHRvdWNoWzFdKSxcclxuICAgICAgICAnc190aW1lJzogcHJldlRpbWUtdGltZSxcclxuICAgICAgICAnZV90aW1lJzogbm93LXRpbWUsXHJcbiAgICAgICAgJ2R1cmF0aW9uJyA6IG5vdyAtIHByZXZUaW1lLFxyXG4gICAgICAgICdkaXN0YW5jZScgOiBNYXRoLnJvdW5kKGNhbGNEaXN0KHRvdWNoLHRhcmdldCkpLFxyXG4gICAgICAgICdoaXQnIDogKGNhbGNEaXN0KHRvdWNoLHRhcmdldCk8KHJhZGl1cykpLFxyXG4gICAgICAgICd1c2VybmFtZSc6IHVzZXJuYW1lLFxyXG4gICAgICAgICdpbnB1dERpc3RhbmNlUmFkaXVzJzogZGlzdGFuY2VSYWRpdXMsXHJcbiAgICAgICAgJ2lucHV0VGFyZ2V0UmFkaXVzJzogcmFkaXVzLFxyXG4gICAgICAgICdpbnB1dEFnZSc6IGFnZSxcclxuICAgICAgfV0pKVxyXG4gICAgICBjb25zdCBuZXh0ID0gbmV4dFBvcyh0YXJnZXQsYm91bmRzLHJhZGl1cyxwYWQsIGRpc3RhbmNlUmFkaXVzKVxyXG4gICAgICBzZXRUYXJnZXQobmV4dClcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYobG9nLmZpbHRlcih4PT4oeC5oaXQpKS5sZW5ndGg+PUNPTlNULnJvdW5kcyl7XHJcbiAgICAgIHNldFN0YXR1cygnZW5kJylcclxuICAgIH1cclxuICAgICAgXHJcbiAgfSxbdG91Y2hdKVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5GaXR0cyBFdmFsPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9MCwgdmlld3BvcnQtZml0PWNvdmVyJy8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cIm1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCIvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICBcclxuICAgICAgPGRpdiBpZD1cInRvdWNoLWJvdW5kXCIgY2xhc3NOYW1lPVwiYm9hcmRcIiBvblRvdWNoRW5kPXsoZSk9PntoYW5kbGVUb3VjaFN0YXJ0KGUpfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51SXRlbUNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgeyhzdGF0dXM9PT0nd2FpdCcpPzxkaXYgY2xhc3NOYW1lPVwic3RhcnRCdG5cIiBvbkNsaWNrPXtpbml0fT5TdGFydDwvZGl2PjonJ31cclxuICAgICAgICAgIHsoc3RhdHVzPT09J3dhaXQnKT88PjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJkaXN0YW5jZSByYWRpdXNcIiBjbGFzc05hbWU9XCJpbnB1dEJveFwiIG9uQ2hhbmdlPXtlID0+IHNldERpc3RhbmNlUmFkaXVzKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9Lz48Lz46Jyd9XHJcbiAgICAgICAgICB7KHN0YXR1cz09PSd3YWl0Jyk/PD48aW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwidGFyZ2V0IGJ1dHRvbiByYWRpdXNcIiBjbGFzc05hbWU9XCJpbnB1dEJveFwiIG9uQ2hhbmdlPXtlID0+IHNldFJhZGl1cyhwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfS8+PC8+OicnfVxyXG4gICAgICAgICAgeyhzdGF0dXM9PT0nd2FpdCcpPzw+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBZ2VcIiBjbGFzc05hbWU9XCJpbnB1dEJveFwiIG9uQ2hhbmdlPXtlID0+IHNldEFnZShwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfS8+PC8+OicnfVxyXG4gICAgICAgICAgeyhzdGF0dXM9PT0nd2FpdCcpPzw+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJVc2VyIG5hbWVcIiBjbGFzc05hbWU9XCJpbnB1dEJveFwiIG9uQ2hhbmdlPXtlID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX0vPjwvPjonJ31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbnZhc1wiIHN0eWxlPXt7bWFyZ2luOiBgJHtwYWR9cHhgfX0+XHJcbiAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cImxvZy1ib3hcIj5cclxuICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KGxvZy5tYXAoeD0+W3gucm91bmQseC5kaXN0LHguZV90aW1lLXguc190aW1lXSksbnVsbCwxKX1cclxuICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsoc3RhdHVzPT09J2dvJyk/PFRhcmdldCByYWRpdXM9e3JhZGl1c30gdGFyZ2V0PXt0YXJnZXR9IGRpc3RhbmNlUmFkaXVzPXtkaXN0YW5jZVJhZGl1c30gLz46Jyd9XHJcbiAgICAgICAgeyhzdGF0dXM9PT0nZW5kJyk/PGRpdiBjbGFzc05hbWU9XCJzdGFydEJ0blwiIG9uQ2xpY2s9eygpPT5zYXZlQ3N2KGxvZyl9PkRvd25sb2FkPC9kaXY+OicnfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=