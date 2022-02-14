"use strict";
exports.id = "component---src-pages-index-tsx";
exports.ids = ["component---src-pages-index-tsx"];
exports.modules = {

/***/ "./src/components/about/aboutSection.tsx":
/*!***********************************************!*\
  !*** ./src/components/about/aboutSection.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/sharedStyles */ "./src/styles/sharedStyles.ts");


 // ******* start styled components 

const PhotoPlaceholder = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "aboutSection__PhotoPlaceholder"
})(["background-color:darkblue;"]);
const TextBlock = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "aboutSection__TextBlock"
})(["display:flex;flex-direction:row;div:nth-child(1){margin-right:3em;}div:nth-child(2){h2{margin-bottom:1em;}p{margin-bottom:1em;}}"]);
const Grid = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "aboutSection__Grid"
})(["display:grid;height:140vh;gap:3em 6em;grid-template-columns:[col1-line] 1fr [col2-line] 1fr [col3-line] 1fr [col4-line] 1fr [col5-line];grid-template-rows:[row1-start] 1fr  [row2-start] 1fr  [row3-start] 1fr [row4-start] 1fr [row5-start] 1fr [row6-start] 1fr [row7-start] 1fr;", ":nth-child(1){grid-column:col1-line / span 2;grid-row:row1-start / span 4;}", ":nth-child(2){grid-column:col3-line / span 2;grid-row:row1-start / span 3;}", ":nth-child(3){grid-column:col3-line / span 2;grid-row:row4-start / span 4;position:relative;top:3em;}"], PhotoPlaceholder, TextBlock, PhotoPlaceholder); // ******** end styled components 

const AboutSection = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__.GridHolder, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Grid, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PhotoPlaceholder, null, "photo 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TextBlock, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "01")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Innovation in Africa is ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "shaping the world's  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "future."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "This year\u2019s conference will explore how innovations across various sectors in Africa can influence the global economy. What role does African innovation play in shaping the global future? How do current ventures on the continent position Africa to become a leader in the global economy?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "At this conference we would like to challenge the narrative that \u201CAfrica is the future\u201D and explore whether \u201CAfrica is now\u201D.  We will welcome diverse perspectives on Africa\u2019s unique opportunities and challenges as our speakers discuss what they see as Africa\u2019s role in today\u2019s economy."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", null, "Join Us Online + In-Person"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PhotoPlaceholder, null, "photo 2")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutSection);

/***/ }),

/***/ "./src/components/about/index.tsx":
/*!****************************************!*\
  !*** ./src/components/about/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3159585216_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/page-data/sq/d/3159585216.json */ "./public/page-data/sq/d/3159585216.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aboutSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutSection */ "./src/components/about/aboutSection.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var styles_sharedStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/sharedStyles */ "./src/styles/sharedStyles.ts");





const Section = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section.withConfig({
  displayName: "about__Section"
})(["margin:0 10%;"]);

const AboutIndex = () => {
  const data = _public_page_data_sq_d_3159585216_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("title", null, data.site.siteMetadata.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_aboutSection__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(styles_sharedStyles__WEBPACK_IMPORTED_MODULE_3__.SectionSeperator, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutIndex);

/***/ }),

/***/ "./src/components/landing/index.tsx":
/*!******************************************!*\
  !*** ./src/components/landing/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/sharedStyles */ "./src/styles/sharedStyles.ts");



 // start styled components 

const Section = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "landing__Section"
})(["margin:0 14%;"]);
const Grid = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "landing__Grid"
})(["display:grid;grid-template-columns:[col1-line] 1fr [col2-line] 1fr [col3-line] 1fr [col4-line] 1fr [col5-line] 1fr [col6-line];grid-template-rows:[row1-start] 14vh  [row2-start] 14vh  [row3-start] 14vh  [row4-start] 14vh  [row5-start];div:nth-child(1){grid-column:col3-line / span 2;grid-row:row1-start / span 1;align-self:center;}div:nth-child(2){grid-column:col1-line / span 2;grid-row:row2-start / span 2;font-style:italic;align-self:center;justify-self:center;}div:nth-child(3){grid-column:col2-line / span 2;grid-row:row4-start / span 1;justify-self:center;}div:nth-child(4){grid-column:col4-line  / span 2;grid-row:row2-start / span 2;justify-self:end;align-self:center;h2{text-transform:uppercase;margin:3px;}}"]); // end of styled components 

const LandingIndex = ({
  scrollWidth
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__.SectionSeperator, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__.GridHolder, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Grid, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "14th Anniversary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Stanford")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Africa ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Business")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, " Forum")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "African Innovation Shaping the Global Future"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "May XX, 2022"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", null, "Join Us Online + In-Person")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__.SectionSeperator, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingIndex);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_landing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/landing */ "./src/components/landing/index.tsx");
/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/theme */ "./src/styles/theme.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var styles_globalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/globalStyles */ "./src/styles/globalStyles.ts");
/* harmony import */ var components_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/about */ "./src/components/about/index.tsx");
// Step 1: Import React






const ColorChange = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.keyframes)(["0%{background-color:", ";}100%{background-color:", ";}"], styles_theme__WEBPACK_IMPORTED_MODULE_2__.darkColor, styles_theme__WEBPACK_IMPORTED_MODULE_2__.lightColor);
const NoColorChange = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.keyframes)(["0%{background-color:", ";}100%{background-color:", ";}"], styles_theme__WEBPACK_IMPORTED_MODULE_2__.lightColor, styles_theme__WEBPACK_IMPORTED_MODULE_2__.darkColor);
const BackgroundColor = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].html.attrs(props => ({
  lightBg: props.lightBg
})).withConfig({
  displayName: "pages__BackgroundColor"
})(["animation-name:", ";animation-duration:0.8s;animation-timing-function:cubic-bezier(0.455,0.030,0.515,0.955);animation-fill-mode:both;padding:20px;"], props => props.lightBg ? ColorChange : NoColorChange);

const IndexPage = () => {
  // keep track of scroll pos 
  // for changing background color + image zoom
  const {
    0: scrollPosition,
    1: setScrollPosition
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: lightBg,
    1: setLightBg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position); // console.log(position)

    setLightBg(position > 150 ? true : false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const defaultWidth = 700;
  let scrollWidth = 1 + (defaultWidth + scrollPosition) / 1000;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styled_components__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {
    theme: styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BackgroundColor, {
    lightBg: lightBg
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styles_globalStyles__WEBPACK_IMPORTED_MODULE_3__.GlobalStyle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_landing__WEBPACK_IMPORTED_MODULE_1__["default"], {
    scrollWidth: scrollWidth
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_about__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

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


const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)(["html{font-family:", ";color:white;}body{margin:0;}h1,h2,p,a{font-size:clamp(var(--min),var(--val),var(--max));margin:0;font-weight:normal;}a{text-decoration:underline;}h1{--min:2em;--val:5vw;--max:3em;}h2{--min:1.5em;--val:2vw;--max:2.25em;}p,a{--min:0.8em;--val:1.2vw;--max:1.5em;}"], _theme__WEBPACK_IMPORTED_MODULE_0__.fontFamily);

/***/ }),

/***/ "./src/styles/sharedStyles.ts":
/*!************************************!*\
  !*** ./src/styles/sharedStyles.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionSeperator": () => (/* binding */ SectionSeperator),
/* harmony export */   "GridHolder": () => (/* binding */ GridHolder)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
 // export const VerticalFlexDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   /* text-align: right; */
// `;

const SectionSeperator = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "sharedStyles__SectionSeperator"
})(["height:7em;"]);
const GridHolder = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "sharedStyles__GridHolder"
})(["display:flex;justify-content:center;"]);

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
const darkColor = '#1e1e1e';
const lightColor = 'rgb(217, 217, 217)';
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

/***/ }),

/***/ "./public/page-data/sq/d/3159585216.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3159585216.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Stanford Africa Business Conference 2022"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-tsx.js.map