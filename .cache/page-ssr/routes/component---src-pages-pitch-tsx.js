"use strict";
exports.id = "component---src-pages-pitch-tsx";
exports.ids = ["component---src-pages-pitch-tsx"];
exports.modules = {

/***/ "./src/components/general/form.tsx":
/*!*****************************************!*\
  !*** ./src/components/general/form.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/theme */ "./src/styles/theme.ts");



const StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "form__StyledForm"
})(["display:flex;flex-direction:row;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "form__Button"
})(["margin-left:2em;background-color:", ";flex-grow:1;border-radius:0.12em;border-color:white;border-width:4px;color:white;border-style:solid;transition:0.3s background-color ease-in-out;:hover{background-color:navy;}}"], styles_theme__WEBPACK_IMPORTED_MODULE_1__.skyBlue);
const Field = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "form__Field"
})(["flex-grow:2;height:56px;border-radius:4px;position:relative;background-color:rgba(255,255,255,0.3);transition:0.3s background-color ease-in-out,0.3s box-shadow ease-in-out;:hover{background-color:#ffffff;box-shadow:0px 4px 20px 0px rgba(0,0,0,0.05);}:focus{background-color:#ffffff;box-shadow:0px 4px 20px 0px rgba(0,0,0,0.2);}:active{background-color:#ffffff;box-shadow:0px 4px 20px 0px rgba(0,0,0,0.2);}input{width:100%;height:56px;position:relative;padding:0px 16px;border:none;border-radius:4px;font-size:16px;font-weight:400;line-height:normal;background-color:transparent;color:#282828;outline:none;box-shadow:0px 4px 20px 0px transparent;transition:0.3s background-color ease-in-out,0.3s box-shadow ease-in-out,0.1s padding ease-in-out;}"]); ////// end of styles

const sendToDatabase = email => {
  var data = JSON.stringify({
    "email": email
  });
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });
  xhr.open("POST", "https://sabf2022emails-1ad9.restdb.io/rest/emails");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("x-apikey", "61fe7b1c6a791555010217f5");
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.send(data);
};

const Form = ({}) => {
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  const handleSubmit = evt => {
    evt.preventDefault();
    alert(`Submitting Name ${email}`);
    sendToDatabase(email);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledForm, {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Field, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "Email address",
    value: email,
    onChange: e => setEmail(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Button, {
    type: "submit"
  }, "Submit"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

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





 // const Body = styled.body`
//   padding-left: ${edgePadding};
//   padding-right: 10em;
// `;

const Header = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].header.withConfig({
  displayName: "layout__Header"
})(["margin-top:", ";;padding-left:", ";padding-right:", ";div{height:1px;width:50%;background-color:white;}"], styles_theme__WEBPACK_IMPORTED_MODULE_2__.edgeSpace + "em", styles_theme__WEBPACK_IMPORTED_MODULE_2__.edgeSpace + "em", styles_theme__WEBPACK_IMPORTED_MODULE_2__.edgeSpace + "em");

const Layout = ({
  pageTitle,
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styled_components__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
    theme: styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styles_globalStyles__WEBPACK_IMPORTED_MODULE_3__.GlobalStyle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("html", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, pageTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_navBar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, pageTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)), children)));
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
})(["z-index:100;padding-top:2em;padding-bottom:2em;padding-left:1em;padding-right:1em;position:sticky;top:0;"]);
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

/***/ "./src/pages/pitch.tsx":
/*!*****************************!*\
  !*** ./src/pages/pitch.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_general_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/general/form */ "./src/components/general/form.tsx");
/* harmony import */ var components_navigation_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/navigation/layout */ "./src/components/navigation/layout.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/theme */ "./src/styles/theme.ts");





const Section = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section.withConfig({
  displayName: "pitch__Section"
})(["margin-top:", ";padding-left:", ";padding-right:", ";"], styles_theme__WEBPACK_IMPORTED_MODULE_3__.edgeSpace + "em", styles_theme__WEBPACK_IMPORTED_MODULE_3__.edgeSpace + "em", styles_theme__WEBPACK_IMPORTED_MODULE_3__.edgeSpace + "em");

const PitchPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(components_navigation_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pageTitle: "Pitch Competition"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", {
    style: {
      marginBottom: "2em"
    }
  }, "Launching soon! Enter your email below to be notified about new updates."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(components_general_form__WEBPACK_IMPORTED_MODULE_0__["default"], null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PitchPage);

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
/* harmony export */   "skyBlue": () => (/* binding */ skyBlue),
/* harmony export */   "fontFamily": () => (/* binding */ fontFamily),
/* harmony export */   "edgeSpace": () => (/* binding */ edgeSpace),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// hack untill figure out problem with global styles and typescript...
const darkColor = "#000000"; // '#1e1e1e' //"#000000"

const lightColor = '#00021f';
const skyBlue = "#7DC9EC";
const fontFamily = 'Arial, Helvetica, sans-serif';
const edgeSpace = 2;
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
//# sourceMappingURL=component---src-pages-pitch-tsx.js.map