"use strict";
exports.id = "component---src-pages-press-tsx";
exports.ids = ["component---src-pages-press-tsx"];
exports.modules = {

/***/ "./src/components/navigation/layout.tsx":
/*!**********************************************!*\
  !*** ./src/components/navigation/layout.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navBar */ "./src/components/navigation/navBar.tsx");
/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/theme */ "./src/styles/theme.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var styles_globalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/globalStyles */ "./src/styles/globalStyles.ts");






const Layout = ({
  pageTitle,
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styled_components__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
    theme: styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styles_globalStyles__WEBPACK_IMPORTED_MODULE_3__.GlobalStyle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("html", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, pageTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_navBar__WEBPACK_IMPORTED_MODULE_1__["default"], null), children)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/navigation/navBar.tsx":
/*!**********************************************!*\
  !*** ./src/components/navigation/navBar.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavLink": () => (/* binding */ NavLink),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");



const NavBarNav = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav.withConfig({
  displayName: "navBar__NavBarNav"
})(["background-color:blueviolet;z-index:100;padding-top:2em;padding-bottom:2em;padding-left:1em;padding-right:1em;position:sticky;"]);
const NavBarDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "navBar__NavBarDiv"
})(["display:flex;flex-direction:row;justify-content:space-between;"]);
const NavMenuDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "navBar__NavMenuDiv"
})(["display:flex;flex-direction:row;justify-content:space-between;"]);
const NavLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link).withConfig({
  displayName: "navBar__NavLink"
})(["color:lightblue;margin-left:1em;margin-right:1em;text-decoration:none;"]);

const NavBar = ({}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(NavBarNav, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(NavBarDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(NavLink, {
    to: "/"
  }, "Logo")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(NavMenuDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(NavLink, {
    to: "/press"
  }, "Press + Videos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(NavLink, {
    to: "/pitch"
  }, "Pitch Competition"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(NavLink, {
    to: "/speakers"
  }, "Speakers + Panels"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(NavLink, {
    to: "/attend"
  }, "Attend"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ "./src/pages/press.tsx":
/*!*****************************!*\
  !*** ./src/pages/press.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_navigation_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/navigation/layout */ "./src/components/navigation/layout.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const PressPage = ({}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(components_navigation_layout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    pageTitle: "Press + Videos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", null, "Press + Videos!"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PressPage);

/***/ }),

/***/ "./src/styles/globalStyles.ts":
/*!************************************!*\
  !*** ./src/styles/globalStyles.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalStyle": () => (/* binding */ GlobalStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ "./src/styles/theme.ts");


const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)(["html{background-color:", ";font-family:", ";color:white;}body{margin:0;}h1,h2,p,a{font-size:clamp(var(--min),var(--val),var(--max));margin:0;font-weight:normal;}a{text-decoration:underline;}h1{--min:2em;--val:5vw;--max:3em;}h2{--min:1.5em;--val:2vw;--max:2.25em;}p,a{--min:0.8em;--val:1.2vw;--max:1.5em;}"], _theme__WEBPACK_IMPORTED_MODULE_0__.darkColor, _theme__WEBPACK_IMPORTED_MODULE_0__.fontFamily);

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "darkColor": () => (/* binding */ darkColor),
/* harmony export */   "lightColor": () => (/* binding */ lightColor),
/* harmony export */   "fontFamily": () => (/* binding */ fontFamily),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// hack untill figure out problem with global styles and typescript...
const darkColor = '#1e1e1e'; //"#000000"

const lightColor = '#00021f';
const fontFamily = 'Arial, Helvetica, sans-serif';
const mainTheme = {
  palette: {
    dark: darkColor,
    light: lightColor,
    white: "#fff"
  },
  font: {
    sans: fontFamily
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainTheme);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-press-tsx.js.map