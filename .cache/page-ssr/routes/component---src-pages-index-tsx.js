exports.id = "component---src-pages-index-tsx";
exports.ids = ["component---src-pages-index-tsx"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./src/components/about/genericSection.tsx":
/*!*************************************************!*\
  !*** ./src/components/about/genericSection.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/sharedStyles */ "./src/styles/sharedStyles.ts");
/* harmony import */ var hooks_use_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks/use-content */ "./src/hooks/use-content.ts");
/* harmony import */ var gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-plugin-mdx */ "./node_modules/gatsby-plugin-mdx/index.js");
/* harmony import */ var gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_3__);




 // ******* start styled components 

const PhotoPlaceholder = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "genericSection__PhotoPlaceholder"
})(["background-color:darkblue;"]);
const TextBlock = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "genericSection__TextBlock"
})(["display:flex;flex-direction:row;div:nth-child(1){margin-right:3em;}div:nth-child(2){h2{margin-bottom:1em;}p{margin-bottom:1em;}}"]);
const Grid = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "genericSection__Grid"
})(["display:grid;height:140vh;gap:3em 6em;grid-template-columns:[col1-line] 1fr [col2-line] 1fr [col3-line] 1fr [col4-line] 1fr [col5-line];grid-template-rows:[row1-start] 1fr  [row2-start] 1fr  [row3-start] 1fr [row4-start] 1fr [row5-start] 1fr [row6-start] 1fr [row7-start] 1fr;", ":nth-child(1){grid-column:col1-line / span 2;grid-row:row1-start / span 4;}", ":nth-child(2){grid-column:col3-line / span 2;grid-row:row1-start / span 3;}", ":nth-child(3){grid-column:col3-line / span 2;grid-row:row4-start / span 4;position:relative;top:3em;}"], PhotoPlaceholder, TextBlock, PhotoPlaceholder); // ******** end styled components {number, title, body}

const GenericSection = ({
  sectionNumber
}) => {
  var _currentNode$frontmat, _currentNode$frontmat2;

  const nodes = (0,hooks_use_content__WEBPACK_IMPORTED_MODULE_2__.useContent)();
  const currentNode = nodes.find(node => {
    var _node$frontmatter;

    return ((_node$frontmatter = node.frontmatter) === null || _node$frontmatter === void 0 ? void 0 : _node$frontmatter.number) === sectionNumber;
  });
  console.log(currentNode);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__.GridHolder, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Grid, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PhotoPlaceholder, null, "photo 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TextBlock, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, currentNode === null || currentNode === void 0 ? void 0 : (_currentNode$frontmat = currentNode.frontmatter) === null || _currentNode$frontmat === void 0 ? void 0 : _currentNode$frontmat.number)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, currentNode === null || currentNode === void 0 ? void 0 : (_currentNode$frontmat2 = currentNode.frontmatter) === null || _currentNode$frontmat2 === void 0 ? void 0 : _currentNode$frontmat2.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_3__.MDXRenderer, null, currentNode === null || currentNode === void 0 ? void 0 : currentNode.body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PhotoPlaceholder, null, "photo 2")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenericSection);

/***/ }),

/***/ "./src/components/about/index.tsx":
/*!****************************************!*\
  !*** ./src/components/about/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/sharedStyles */ "./src/styles/sharedStyles.ts");
/* harmony import */ var _genericSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./genericSection */ "./src/components/about/genericSection.tsx");




const Section = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].section.withConfig({
  displayName: "about__Section"
})(["margin:0 10%;"]);

const AboutIndex = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_genericSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sectionNumber: "01"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__.SectionSeperator, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_genericSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sectionNumber: "02"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__.SectionSeperator, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_genericSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sectionNumber: "03"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__.SectionSeperator, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutIndex);

/***/ }),

/***/ "./src/components/landing/index.tsx":
/*!******************************************!*\
  !*** ./src/components/landing/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/hooks/use-content.ts":
/*!**********************************!*\
  !*** ./src/hooks/use-content.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useContent": () => (/* binding */ useContent)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_1185362758_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/1185362758.json */ "./public/page-data/sq/d/1185362758.json");

const useContent = () => {
  const {
    allMdx
  } = _public_page_data_sq_d_1185362758_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return allMdx.nodes;
};

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./node_modules/gatsby-plugin-mdx/index.js":
/*!*************************************************!*\
  !*** ./node_modules/gatsby-plugin-mdx/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Welcome to gatsby-plugin-mdx!
 *
 * Start reading in gatsby-node.js
 */
const MDXRenderer = __webpack_require__(/*! ./mdx-renderer */ "./node_modules/gatsby-plugin-mdx/mdx-renderer.js");

module.exports = {
  MDXRenderer: MDXRenderer
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-mdx/mdx-renderer.js":
/*!********************************************************!*\
  !*** ./node_modules/gatsby-plugin-mdx/mdx-renderer.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

var _objectWithoutProperties = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");

const _excluded = ["scope", "children"];

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

const React = __webpack_require__(/*! react */ "react");

const {
  mdx
} = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");

const {
  useMDXScope
} = __webpack_require__(/*! ./context */ "./node_modules/gatsby-plugin-mdx/context.js");

module.exports = function MDXRenderer(_ref) {
  let {
    scope,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const mdxScope = useMDXScope(scope); // Memoize the compiled component

  const End = React.useMemo(() => {
    if (!children) {
      return null;
    }

    const fullScope = _objectSpread({
      // React is here just in case the user doesn't pass them in
      // in a manual usage of the renderer
      React,
      mdx
    }, mdxScope);

    const keys = Object.keys(fullScope);
    const values = keys.map(key => fullScope[key]);
    const fn = new Function(`_fn`, ...keys, `${children}`);
    return fn({}, ...values);
  }, [children, scope]);
  return React.createElement(End, _objectSpread({}, props));
};

/***/ }),

/***/ "./public/page-data/sq/d/1185362758.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/1185362758.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"allMdx":{"nodes":[{"id":"5fe91c3b-3662-5e32-9104-b44f37d517c8","frontmatter":{"title":"Innovation in Africa is shaping the world\'s future","number":"01"},"body":"var _excluded = [\\"components\\"];\\n\\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\\n\\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\\n\\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\\n\\n/* @jsxRuntime classic */\\n\\n/* @jsx mdx */\\nvar _frontmatter = {\\n  \\"title\\": \\"Innovation in Africa is shaping the world\'s future\\",\\n  \\"number\\": \\"01\\"\\n};\\nvar layoutProps = {\\n  _frontmatter: _frontmatter\\n};\\nvar MDXLayout = \\"wrapper\\";\\nreturn function MDXContent(_ref) {\\n  var components = _ref.components,\\n      props = _objectWithoutProperties(_ref, _excluded);\\n\\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\\n    components: components,\\n    mdxType: \\"MDXLayout\\"\\n  }), mdx(\\"p\\", null, \\"This year\\\\u2019s conference will explore how innovations across various sectors in Africa can influence the global economy.\\\\nWhat role does African innovation play in shaping the global future?\\\\nHow do current ventures on the continent position Africa to become a leader in the global economy? \\"), mdx(\\"p\\", null, \\"At this conference we would like to challenge the narrative that \\\\u201CAfrica is the future\\\\u201D and explore whether \\\\u201CAfrica is now\\\\u201D.\\", mdx(\\"br\\", {\\n    parentName: \\"p\\"\\n  }), \\"\\\\n\\", \\"We will welcome diverse perspectives on Africa\\\\u2019s unique opportunities\\\\nand challenges as our speakers discuss what they see as Africa\\\\u2019s role in today\\\\u2019s economy. \\"), mdx(\\"p\\", null, \\"Join Us Online + In-Person\\"));\\n}\\n;\\nMDXContent.isMDXComponent = true;"},{"id":"8314ac2e-aa01-5366-bd4b-6bfae9338086","frontmatter":{"title":"A long history of cultivating forward-looking conversation","number":"03"},"body":"var _excluded = [\\"components\\"];\\n\\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\\n\\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\\n\\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\\n\\n/* @jsxRuntime classic */\\n\\n/* @jsx mdx */\\nvar _frontmatter = {\\n  \\"title\\": \\"A long history of cultivating forward-looking conversation\\",\\n  \\"number\\": \\"03\\"\\n};\\nvar layoutProps = {\\n  _frontmatter: _frontmatter\\n};\\nvar MDXLayout = \\"wrapper\\";\\nreturn function MDXContent(_ref) {\\n  var components = _ref.components,\\n      props = _objectWithoutProperties(_ref, _excluded);\\n\\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\\n    components: components,\\n    mdxType: \\"MDXLayout\\"\\n  }), mdx(\\"p\\", null, \\"This year marks the 13th anniversary of the Africa Business Forum.\\\\nIn 2007, the forum theme was \\\\u201CFostering Entrepreneurial Activities in Africa\\\\u201D.\\\\nIts objective was to portray Africa in a more positive light than that more\\\\ncommonly seen in the media and create awareness of the diverse and burgeoning opportunities.\\\\nThe first forum was organized by a group of enthusiastic students headed by\\\\nWilson Irungu Nyakera and Kwame Ansong-Dwamena. \\"), mdx(\\"p\\", null, \\"Though the theme has changed from year to year,\\\\nthe underlying motivation behind the forum hasn\\\\u2019t changed.\\\\nThe forum has always been aimed at creating awareness of the opportunities on the\\\\nAfrican continent and bring together Africans and friends of Africa from the continent\\\\nand the diaspora to engage on the most important issues affecting the continent\\\\u2019s growth.\\\\nClick to learn more about conferences in 2020, 2019, 2018, and 2017.\\"), mdx(\\"p\\", null, \\"Meet this Year\'s Team \\"));\\n}\\n;\\nMDXContent.isMDXComponent = true;"},{"id":"677ebb5c-2f98-5dd2-a2f5-f9c1f15940e7","frontmatter":{"title":"Events to Look Forward To","number":"02"},"body":"var _excluded = [\\"components\\"];\\n\\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\\n\\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\\n\\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\\n\\n/* @jsxRuntime classic */\\n\\n/* @jsx mdx */\\nvar _frontmatter = {\\n  \\"title\\": \\"Events to Look Forward To\\",\\n  \\"number\\": \\"02\\"\\n};\\nvar layoutProps = {\\n  _frontmatter: _frontmatter\\n};\\nvar MDXLayout = \\"wrapper\\";\\nreturn function MDXContent(_ref) {\\n  var components = _ref.components,\\n      props = _objectWithoutProperties(_ref, _excluded);\\n\\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\\n    components: components,\\n    mdxType: \\"MDXLayout\\"\\n  }), mdx(\\"p\\", null, \\"Some Slightly Larger Text All About Events\\"), mdx(\\"p\\", null, \\"\\\\u201CThis year we will have speakers who are creating innovative ways of tackling challenges in\\\\nhealthcare, fintech, clean energy, cryptocurrencies, investing (private equity and venture capital),\\\\ninfrastructure & cities and entrepreneurship.\\\\u201D\\"), mdx(\\"p\\", null, \\"Schedule\\"), mdx(\\"p\\", null, \\"Speakers + Panels\\"), mdx(\\"p\\", null, \\"Pitch Competition \\"));\\n}\\n;\\nMDXContent.isMDXComponent = true;"}]}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-tsx.js.map