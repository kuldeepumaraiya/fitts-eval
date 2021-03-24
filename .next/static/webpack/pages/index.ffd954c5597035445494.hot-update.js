webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_parth_Videos_Docs_React_Github_fitts_eval_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_parth_Videos_Docs_React_Github_fitts_eval_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_parth_Videos_Docs_React_Github_fitts_eval_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_parth_Videos_Docs_React_Github_fitts_eval_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);





var _jsxFileName = "C:\\Users\\parth\\Videos\\Docs\\React\\Github\\fitts-eval\\pages\\index.js",
    _s = $RefreshSig$();



var CONST = {
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

function Target(_ref) {
  var target = _ref.target,
      radius = _ref.radius,
      distanceRadius = _ref.distanceRadius;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "target-box",
    style: {
      left: "".concat(target[0] - 2 * radius, "px"),
      top: "".concat(target[1] - 2 * radius, "px"),
      width: "".concat(4 * radius, "px"),
      height: "".concat(4 * radius, "px")
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "target-core",
      style: {
        left: "".concat(radius, "px"),
        top: "".concat(radius, "px"),
        width: "".concat(2 * radius, "px"),
        height: "".concat(2 * radius, "px")
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

_c = Target;

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
  var next = [0, 0];
  var t = randFloat([0, 360]);
  next = getPointOnCircumference(t, target, distanceRadius);

  while (!checkInside(next[0], next[1], distanceRadius)) {
    var _t = randFloat([0, 360]);

    next = getPointOnCircumference(_t, target, distanceRadius);
  } // while(calcDist(target,next)<min_dist){
  //   next = [randInt(x_range),randInt(y_range)]
  // }


  return next;
}

function getPointOnCircumference(t, center, radius) {
  var temp_x = radius * Math.cos(t) + center[0];
  var temp_y = radius * Math.sin(t) + center[1];
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
  } catch (_unused) {
    return -1;
  }
}

function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(CONST.size1),
      pad = _useState[0],
      setPad = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(CONST.size1),
      radius = _useState2[0],
      setRadius = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("LMAO"),
      username = _useState3[0],
      setUsername = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(20),
      age = _useState4[0],
      setAge = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(CONST.size1),
      distanceRadius = _useState5[0],
      setDistanceRadius = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([0, 0]),
      bounds = _useState6[0],
      setBounds = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([0, 0]),
      target = _useState7[0],
      setTarget = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([radius, radius]),
      touch = _useState8[0],
      setTouch = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([radius, radius]),
      next = _useState9[0],
      setNext = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      round = _useState10[0],
      setRound = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      time = _useState11[0],
      setTime = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      prevTime = _useState12[0],
      setPrevTime = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('wait'),
      status = _useState13[0],
      setStatus = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      log = _useState14[0],
      setLog = _useState14[1];

  function handleTouchStart(event) {
    console.log(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
    setTouch([event.changedTouches[0].clientX, event.changedTouches[0].clientY]);
  }

  function init() {
    setStatus('go');
    setTime(Date.now());
    setPrevTime(Date.now());
    var next = nextPos(target, bounds, radius, pad, distanceRadius);
    setTarget(next);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setBounds([parseInt(document.getElementById("touch-bound").getBoundingClientRect().width), parseInt(document.getElementById("touch-bound").getBoundingClientRect().height)]);
    setTarget([radius + pad, radius + pad]);
  }, []);

  function saveCsv(data) {
    var csvStr = convertToCSV(data);
    var csvContent = "data:text/csv;charset=utf-8," + csvStr;
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "fitts_".concat(new Date().toISOString(), ".csv"));
    document.body.appendChild(link);
    link.click();
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/Object(C_Users_parth_Videos_Docs_React_Github_fitts_eval_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_parth_Videos_Docs_React_Github_fitts_eval_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var now, _next;

    return C_Users_parth_Videos_Docs_React_Github_fitts_eval_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(status !== 'go')) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            now = Date.now();
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
              'hit': calcDist(touch, target) < 2 * radius,
              'username': username,
              'inputDistanceRadius': distanceRadius,
              'inputTargetRadius': radius,
              'inputAge': age
            }]));
            _context.next = 6;
            return setRound(round + 1);

          case 6:
            _context.next = 8;
            return setPrevTime(now);

          case 8:
            if (calcDist(touch, target) < 2 * radius) {
              _next = nextPos(target, bounds, radius, pad, distanceRadius);
              setTarget(_next);
            }

            if (log.filter(function (x) {
              return x.hit;
            }).length >= CONST.rounds) {
              setStatus('end');
            }

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [touch]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Fitts Eval"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "mobile-web-app-capable",
        content: "yes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "touch-bound",
      className: "board",
      onTouchEnd: function onTouchEnd(e) {
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
          lineNumber: 224,
          columnNumber: 30
        }, this) : '', status === 'wait' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "number",
            placeholder: "distance radius",
            className: "inputBox",
            onChange: function onChange(e) {
              return setDistanceRadius(parseInt(e.target.value));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 32
          }, this)
        }, void 0, false) : '', status === 'wait' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "number",
            placeholder: "target button radius",
            className: "inputBox",
            onChange: function onChange(e) {
              return setRadius(parseInt(e.target.value));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 32
          }, this)
        }, void 0, false) : '', status === 'wait' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Age",
            className: "inputBox",
            onChange: function onChange(e) {
              return setAge(parseInt(e.target.value));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 32
          }, this)
        }, void 0, false) : '', status === 'wait' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            placeholder: "User name",
            className: "inputBox",
            onChange: function onChange(e) {
              return setUsername(parseInt(e.target.value));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 32
          }, this)
        }, void 0, false) : '']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "canvas",
        style: {
          margin: "".concat(pad, "px")
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pre", {
          className: "log-box",
          children: JSON.stringify(log.map(function (x) {
            return [x.round, x.dist, x.e_time - x.s_time];
          }), null, 1)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 9
      }, this), status === 'go' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Target, {
        radius: radius,
        target: target,
        distanceRadius: distanceRadius
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 26
      }, this) : '', status === 'end' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "startBtn",
        onClick: function onClick() {
          return saveCsv(log);
        },
        children: "Download"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 27
      }, this) : '']
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "yAZ3oBM6rYuIGGEerve/m/jSNqs=");

_c2 = Home;

var _c, _c2;

$RefreshReg$(_c, "Target");
$RefreshReg$(_c2, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQ09OU1QiLCJtaW5fZGlzdCIsInNpemUxIiwic2l6ZTIiLCJzaXplMyIsInJvdW5kcyIsImNvbnZlcnRUb0NTViIsIm9iakFycmF5IiwiYXJyYXkiLCJKU09OIiwicGFyc2UiLCJzdHIiLCJPYmplY3QiLCJrZXlzIiwiam9pbiIsImkiLCJsZW5ndGgiLCJsaW5lIiwiaW5kZXgiLCJUYXJnZXQiLCJ0YXJnZXQiLCJyYWRpdXMiLCJkaXN0YW5jZVJhZGl1cyIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsInJhbmRJbnQiLCJyYW5nZSIsIm1pbiIsIk1hdGgiLCJjZWlsIiwibWF4IiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kRmxvYXQiLCJuZXh0UG9zIiwiYm91bmRzIiwicGFkIiwibmV4dCIsInQiLCJnZXRQb2ludE9uQ2lyY3VtZmVyZW5jZSIsImNoZWNrSW5zaWRlIiwiY2VudGVyIiwidGVtcF94IiwiY29zIiwidGVtcF95Iiwic2luIiwieCIsInkiLCJzY3JlZW4iLCJjYWxjRGlzdCIsImZyb20iLCJ0byIsInBhcnNlRmxvYXQiLCJzcXJ0IiwiSG9tZSIsInVzZVN0YXRlIiwic2V0UGFkIiwic2V0UmFkaXVzIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImFnZSIsInNldEFnZSIsInNldERpc3RhbmNlUmFkaXVzIiwic2V0Qm91bmRzIiwic2V0VGFyZ2V0IiwidG91Y2giLCJzZXRUb3VjaCIsInNldE5leHQiLCJyb3VuZCIsInNldFJvdW5kIiwidGltZSIsInNldFRpbWUiLCJwcmV2VGltZSIsInNldFByZXZUaW1lIiwic3RhdHVzIiwic2V0U3RhdHVzIiwibG9nIiwic2V0TG9nIiwiaGFuZGxlVG91Y2hTdGFydCIsImV2ZW50IiwiY29uc29sZSIsImNoYW5nZWRUb3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJpbml0IiwiRGF0ZSIsIm5vdyIsInVzZUVmZmVjdCIsInBhcnNlSW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNhdmVDc3YiLCJkYXRhIiwiY3N2U3RyIiwiY3N2Q29udGVudCIsImVuY29kZWRVcmkiLCJlbmNvZGVVUkkiLCJsaW5rIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInRvSVNPU3RyaW5nIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJjb25jYXQiLCJmaWx0ZXIiLCJoaXQiLCJlIiwidmFsdWUiLCJtYXJnaW4iLCJzdHJpbmdpZnkiLCJtYXAiLCJkaXN0IiwiZV90aW1lIiwic190aW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQSxJQUFNQSxLQUFLLEdBQUc7QUFDWkMsVUFBUSxFQUFHLEVBREM7QUFFWkMsT0FBSyxFQUFHLEVBRkk7QUFHWkMsT0FBSyxFQUFHLEVBSEk7QUFJWkMsT0FBSyxFQUFHLEVBSkk7QUFLWkMsUUFBTSxFQUFHO0FBTEcsQ0FBZDs7QUFXQSxTQUFTQyxZQUFULENBQXNCQyxRQUF0QixFQUFnQztBQUM5QixNQUFJQyxLQUFLLEdBQUcsT0FBT0QsUUFBUCxJQUFtQixRQUFuQixHQUE4QkUsSUFBSSxDQUFDQyxLQUFMLENBQVdILFFBQVgsQ0FBOUIsR0FBcURBLFFBQWpFO0FBQ0EsTUFBSUksR0FBRyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUwsS0FBSyxDQUFDLENBQUQsQ0FBakIsRUFBc0JNLElBQXRCLENBQTJCLEdBQTNCLENBQVY7QUFDQUgsS0FBRyxHQUFDQSxHQUFHLEdBQUMsTUFBUjs7QUFFQSxPQUFLLElBQUlJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdQLEtBQUssQ0FBQ1EsTUFBMUIsRUFBa0NELENBQUMsRUFBbkMsRUFBdUM7QUFDckMsUUFBSUUsSUFBSSxHQUFHLEVBQVg7O0FBQ0EsU0FBSyxJQUFJQyxLQUFULElBQWtCVixLQUFLLENBQUNP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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWpCLEdBQXFGLEVBZHhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGO0FBQUEsa0JBREY7QUEyQkQ7O0dBekh1QnRCLEk7O01BQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmZkOTU0YzU1OTcwMzU0NDU0OTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuXHJcbmNvbnN0IENPTlNUID0ge1xyXG4gIG1pbl9kaXN0IDogMzAsXHJcbiAgc2l6ZTEgOiA0NyxcclxuICBzaXplMiA6IDU0LFxyXG4gIHNpemUzIDogNjEsXHJcbiAgcm91bmRzIDogMzBcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY29udmVydFRvQ1NWKG9iakFycmF5KSB7XHJcbiAgdmFyIGFycmF5ID0gdHlwZW9mIG9iakFycmF5ICE9ICdvYmplY3QnID8gSlNPTi5wYXJzZShvYmpBcnJheSkgOiBvYmpBcnJheTtcclxuICB2YXIgc3RyID0gT2JqZWN0LmtleXMoYXJyYXlbMF0pLmpvaW4oJywnKTtcclxuICBzdHI9c3RyKydcXHJcXG4nO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgbGluZSA9ICcnO1xyXG4gICAgZm9yICh2YXIgaW5kZXggaW4gYXJyYXlbaV0pIHtcclxuICAgICAgaWYgKGxpbmUgIT0gJycpIGxpbmUgKz0gJywnXHJcbiAgICAgIGxpbmUgKz0gYXJyYXlbaV1baW5kZXhdO1xyXG4gICAgfVxyXG4gICAgc3RyICs9IGxpbmUgKyAnXFxyXFxuJztcclxuICB9XHJcbiAgcmV0dXJuIHN0cjtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFRhcmdldCh7dGFyZ2V0LHJhZGl1cywgZGlzdGFuY2VSYWRpdXN9KSB7XHJcblxyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGFyZ2V0LWJveFwiIHN0eWxlPXt7XHJcbiAgICAgIGxlZnQ6YCR7dGFyZ2V0WzBdLTIqcmFkaXVzfXB4YCxcclxuICAgICAgdG9wOmAke3RhcmdldFsxXS0yKnJhZGl1c31weGAsXHJcbiAgICAgIHdpZHRoOmAkezQqcmFkaXVzfXB4YCxcclxuICAgICAgaGVpZ2h0OmAkezQqcmFkaXVzfXB4YFxyXG4gICAgfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFyZ2V0LWNvcmVcIiBzdHlsZT17e1xyXG4gICAgICAgIGxlZnQ6YCR7cmFkaXVzfXB4YCxcclxuICAgICAgICB0b3A6YCR7cmFkaXVzfXB4YCxcclxuICAgICAgICB3aWR0aDpgJHsyKnJhZGl1c31weGAsXHJcbiAgICAgICAgaGVpZ2h0OmAkezIqcmFkaXVzfXB4YFxyXG4gICAgICB9fT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmFuZEludChyYW5nZSkge1xyXG4gIHZhciBtaW4gPSBNYXRoLmNlaWwocmFuZ2VbMF0pO1xyXG4gIHZhciBtYXggPSBNYXRoLmZsb29yKHJhbmdlWzFdKTtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kRmxvYXQocmFuZ2UpIHtcclxuICB2YXIgbWluID0gTWF0aC5jZWlsKHJhbmdlWzBdKTtcclxuICB2YXIgbWF4ID0gTWF0aC5mbG9vcihyYW5nZVsxXSk7XHJcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG5leHRQb3ModGFyZ2V0LGJvdW5kcyxyYWRpdXMscGFkLCBkaXN0YW5jZVJhZGl1cyl7XHJcblxyXG4gIC8vIGNvbnN0IG1pbl9kaXN0ID0gQ09OU1QubWluX2Rpc3Q7XHJcbiAgLy8gY29uc3QgeF9yYW5nZSA9IFtwYWQrcmFkaXVzLGJvdW5kc1swXS1wYWQtcmFkaXVzXVxyXG4gIC8vIGNvbnN0IHlfcmFuZ2UgPSBbcGFkK3JhZGl1cyxib3VuZHNbMV0tcGFkLXJhZGl1c11cclxuXHJcbiAgbGV0IG5leHQgPSBbMCwwXVxyXG4gIGxldCB0ID0gcmFuZEZsb2F0KFswICwzNjBdKVxyXG4gIG5leHQgPSBnZXRQb2ludE9uQ2lyY3VtZmVyZW5jZSh0LHRhcmdldCwgZGlzdGFuY2VSYWRpdXMpXHJcblxyXG4gIHdoaWxlKCFjaGVja0luc2lkZShuZXh0WzBdLCBuZXh0WzFdLCBkaXN0YW5jZVJhZGl1cykpe1xyXG4gICAgbGV0IHQgPSByYW5kRmxvYXQoWzAgLDM2MF0pXHJcbiAgICBuZXh0ID0gZ2V0UG9pbnRPbkNpcmN1bWZlcmVuY2UodCx0YXJnZXQsIGRpc3RhbmNlUmFkaXVzKVxyXG4gIH1cclxuXHJcbiAgLy8gd2hpbGUoY2FsY0Rpc3QodGFyZ2V0LG5leHQpPG1pbl9kaXN0KXtcclxuICAvLyAgIG5leHQgPSBbcmFuZEludCh4X3JhbmdlKSxyYW5kSW50KHlfcmFuZ2UpXVxyXG4gIC8vIH1cclxuICByZXR1cm4gbmV4dFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0UG9pbnRPbkNpcmN1bWZlcmVuY2UodCwgY2VudGVyLCByYWRpdXMpe1xyXG4gIGxldCB0ZW1wX3ggPSByYWRpdXMgKiBNYXRoLmNvcyh0KSArIGNlbnRlclswXTtcclxuICBsZXQgdGVtcF95ID0gcmFkaXVzICogTWF0aC5zaW4odCkgKyBjZW50ZXJbMV07XHJcbiAgcmV0dXJuIFt0ZW1wX3gsIHRlbXBfeV07XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjaGVja0luc2lkZSh4LHksIHJhZGl1cyl7XHJcbiAgaWYoeCArIHJhZGl1cyA8IHNjcmVlbi53aWR0aCAmJiB4IC0gcmFkaXVzID4gMCl7XHJcbiAgICBpZih5ICsgcmFkaXVzIDwgc2NyZWVuLmhlaWdodCAmJiB5IC0gcmFkaXVzID4gMCl7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH0gIFxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY0Rpc3QoZnJvbSx0byl7XHJcblxyXG4gIHRyeXtcclxuICAgIHZhciB4PXBhcnNlRmxvYXQoZnJvbVswXSktcGFyc2VGbG9hdCh0b1swXSlcclxuICAgIHZhciB5PXBhcnNlRmxvYXQoZnJvbVsxXSktcGFyc2VGbG9hdCh0b1sxXSlcclxuICAgIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5KTtcclxuICB9XHJcbiAgY2F0Y2h7XHJcbiAgICByZXR1cm4gLTFcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gIGNvbnN0IFtwYWQsc2V0UGFkXSA9IHVzZVN0YXRlKENPTlNULnNpemUxKVxyXG4gIGNvbnN0IFtyYWRpdXMsc2V0UmFkaXVzXSA9IHVzZVN0YXRlKENPTlNULnNpemUxKVxyXG4gIGNvbnN0IFt1c2VybmFtZSxzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIkxNQU9cIilcclxuICBjb25zdCBbYWdlLHNldEFnZV0gPSB1c2VTdGF0ZSgyMClcclxuICBjb25zdCBbZGlzdGFuY2VSYWRpdXMsc2V0RGlzdGFuY2VSYWRpdXNdID0gdXNlU3RhdGUoQ09OU1Quc2l6ZTEpXHJcbiAgY29uc3QgW2JvdW5kcywgc2V0Qm91bmRzXSA9IHVzZVN0YXRlKFswLDBdKVxyXG4gIGNvbnN0IFt0YXJnZXQsIHNldFRhcmdldF0gPSB1c2VTdGF0ZShbMCwwXSlcclxuICBjb25zdCBbdG91Y2gsIHNldFRvdWNoXSA9IHVzZVN0YXRlKFtyYWRpdXMscmFkaXVzXSlcclxuICBjb25zdCBbbmV4dCwgc2V0TmV4dF0gPSB1c2VTdGF0ZShbcmFkaXVzLHJhZGl1c10pXHJcbiAgXHJcbiAgY29uc3QgW3JvdW5kLHNldFJvdW5kXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbcHJldlRpbWUsc2V0UHJldlRpbWVdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgY29uc3QgW3N0YXR1cyxzZXRTdGF0dXNdID0gdXNlU3RhdGUoJ3dhaXQnKVxyXG4gIGNvbnN0IFtsb2csc2V0TG9nXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydChldmVudCl7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkpXHJcbiAgICBzZXRUb3VjaChbZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXSlcclxuICB9XHJcbiAgXHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgIHNldFN0YXR1cygnZ28nKVxyXG4gICAgc2V0VGltZShEYXRlLm5vdygpKVxyXG4gICAgc2V0UHJldlRpbWUoRGF0ZS5ub3coKSlcclxuICAgIFxyXG4gICAgY29uc3QgbmV4dCA9IG5leHRQb3ModGFyZ2V0LGJvdW5kcyxyYWRpdXMscGFkLCBkaXN0YW5jZVJhZGl1cylcclxuICAgIHNldFRhcmdldChuZXh0KVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBzZXRCb3VuZHMoW1xyXG4gICAgICBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdWNoLWJvdW5kXCIpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKSxcclxuICAgICAgcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3VjaC1ib3VuZFwiKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpXHJcbiAgICBdKVxyXG4gICAgc2V0VGFyZ2V0KFtyYWRpdXMrcGFkLHJhZGl1cytwYWRdKVxyXG4gIH0sW10pXHJcblxyXG5cclxuICBmdW5jdGlvbiBzYXZlQ3N2KGRhdGEpe1xyXG4gICAgbGV0IGNzdlN0ciA9IGNvbnZlcnRUb0NTVihkYXRhKVxyXG4gICAgbGV0IGNzdkNvbnRlbnQgPSBcImRhdGE6dGV4dC9jc3Y7Y2hhcnNldD11dGYtOCxcIitjc3ZTdHJcclxuICAgIHZhciBlbmNvZGVkVXJpID0gZW5jb2RlVVJJKGNzdkNvbnRlbnQpO1xyXG4gICAgXHJcbiAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGVuY29kZWRVcmkpO1xyXG4gICAgbGluay5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBgZml0dHNfJHsobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKX0uY3N2YCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspOyBcclxuXHJcbiAgICBsaW5rLmNsaWNrKCk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMoKT0+e1xyXG4gICAgaWYoc3RhdHVzIT09J2dvJylyZXR1cm47XHJcbiAgICBcclxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcclxuICAgIHNldExvZyhsb2cuY29uY2F0KFt7XHJcbiAgICAgICdyb3VuZCc6IHJvdW5kKzEsXHJcbiAgICAgICd0YXJnZXRfeCcgOiBNYXRoLnJvdW5kKHRhcmdldFswXSksXHJcbiAgICAgICd0YXJnZXRfeScgOiBNYXRoLnJvdW5kKHRhcmdldFsxXSksXHJcbiAgICAgICd0b3VjaF94JyA6IE1hdGgucm91bmQodG91Y2hbMF0pLFxyXG4gICAgICAndG91Y2hfeScgOiBNYXRoLnJvdW5kKHRvdWNoWzFdKSxcclxuICAgICAgJ3NfdGltZSc6IHByZXZUaW1lLXRpbWUsXHJcbiAgICAgICdlX3RpbWUnOiBub3ctdGltZSxcclxuICAgICAgJ2R1cmF0aW9uJyA6IG5vdyAtIHByZXZUaW1lLFxyXG4gICAgICAnZGlzdGFuY2UnIDogTWF0aC5yb3VuZChjYWxjRGlzdCh0b3VjaCx0YXJnZXQpKSxcclxuICAgICAgJ2hpdCcgOiAoY2FsY0Rpc3QodG91Y2gsdGFyZ2V0KTwoMipyYWRpdXMpKSxcclxuICAgICAgJ3VzZXJuYW1lJzogdXNlcm5hbWUsXHJcbiAgICAgICdpbnB1dERpc3RhbmNlUmFkaXVzJzogZGlzdGFuY2VSYWRpdXMsXHJcbiAgICAgICdpbnB1dFRhcmdldFJhZGl1cyc6IHJhZGl1cyxcclxuICAgICAgJ2lucHV0QWdlJzogYWdlLFxyXG4gICAgfV0pKVxyXG5cclxuICAgIGF3YWl0IHNldFJvdW5kKHJvdW5kKzEpXHJcblxyXG4gICAgYXdhaXQgc2V0UHJldlRpbWUobm93KVxyXG5cclxuICAgIGlmKGNhbGNEaXN0KHRvdWNoLHRhcmdldCk8MipyYWRpdXMpe1xyXG4gICAgICBjb25zdCBuZXh0ID0gbmV4dFBvcyh0YXJnZXQsYm91bmRzLHJhZGl1cyxwYWQsIGRpc3RhbmNlUmFkaXVzKVxyXG4gICAgICBzZXRUYXJnZXQobmV4dClcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYobG9nLmZpbHRlcih4PT4oeC5oaXQpKS5sZW5ndGg+PUNPTlNULnJvdW5kcyl7XHJcbiAgICAgIHNldFN0YXR1cygnZW5kJylcclxuICAgIH1cclxuICAgICAgXHJcbiAgfSxbdG91Y2hdKVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5GaXR0cyBFdmFsPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9MCwgdmlld3BvcnQtZml0PWNvdmVyJy8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cIm1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCIvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICBcclxuICAgICAgPGRpdiBpZD1cInRvdWNoLWJvdW5kXCIgY2xhc3NOYW1lPVwiYm9hcmRcIiBvblRvdWNoRW5kPXsoZSk9PntoYW5kbGVUb3VjaFN0YXJ0KGUpfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51SXRlbUNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgeyhzdGF0dXM9PT0nd2FpdCcpPzxkaXYgY2xhc3NOYW1lPVwic3RhcnRCdG5cIiBvbkNsaWNrPXtpbml0fT5TdGFydDwvZGl2PjonJ31cclxuICAgICAgICAgIHsoc3RhdHVzPT09J3dhaXQnKT88PjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJkaXN0YW5jZSByYWRpdXNcIiBjbGFzc05hbWU9XCJpbnB1dEJveFwiIG9uQ2hhbmdlPXtlID0+IHNldERpc3RhbmNlUmFkaXVzKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9Lz48Lz46Jyd9XHJcbiAgICAgICAgICB7KHN0YXR1cz09PSd3YWl0Jyk/PD48aW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwidGFyZ2V0IGJ1dHRvbiByYWRpdXNcIiBjbGFzc05hbWU9XCJpbnB1dEJveFwiIG9uQ2hhbmdlPXtlID0+IHNldFJhZGl1cyhwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfS8+PC8+OicnfVxyXG4gICAgICAgICAgeyhzdGF0dXM9PT0nd2FpdCcpPzw+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBZ2VcIiBjbGFzc05hbWU9XCJpbnB1dEJveFwiIG9uQ2hhbmdlPXtlID0+IHNldEFnZShwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfS8+PC8+OicnfVxyXG4gICAgICAgICAgeyhzdGF0dXM9PT0nd2FpdCcpPzw+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJVc2VyIG5hbWVcIiBjbGFzc05hbWU9XCJpbnB1dEJveFwiIG9uQ2hhbmdlPXtlID0+IHNldFVzZXJuYW1lKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9Lz48Lz46Jyd9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW52YXNcIiBzdHlsZT17e21hcmdpbjogYCR7cGFkfXB4YH19PlxyXG4gICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJsb2ctYm94XCI+XHJcbiAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShsb2cubWFwKHg9Plt4LnJvdW5kLHguZGlzdCx4LmVfdGltZS14LnNfdGltZV0pLG51bGwsMSl9XHJcbiAgICAgICAgICA8L3ByZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7KHN0YXR1cz09PSdnbycpPzxUYXJnZXQgcmFkaXVzPXtyYWRpdXN9IHRhcmdldD17dGFyZ2V0fSBkaXN0YW5jZVJhZGl1cz17ZGlzdGFuY2VSYWRpdXN9IC8+OicnfVxyXG4gICAgICAgIHsoc3RhdHVzPT09J2VuZCcpPzxkaXYgY2xhc3NOYW1lPVwic3RhcnRCdG5cIiBvbkNsaWNrPXsoKT0+c2F2ZUNzdihsb2cpfT5Eb3dubG9hZDwvZGl2PjonJ31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==