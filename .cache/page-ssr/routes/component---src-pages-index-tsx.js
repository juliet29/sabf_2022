"use strict";
exports.id = "component---src-pages-index-tsx";
exports.ids = ["component---src-pages-index-tsx"];
exports.modules = {

/***/ "./src/components/about/index.tsx":
/*!****************************************!*\
  !*** ./src/components/about/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _largeText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./largeText */ "./src/components/about/largeText.tsx");
/* harmony import */ var _smallText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smallText */ "./src/components/about/smallText.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var styles_sharedStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/sharedStyles */ "./src/styles/sharedStyles.ts");





const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section.withConfig({
  displayName: "about__Wrapper"
})(["color:black;"]);

const AboutIndex = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_smallText__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_largeText__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styles_sharedStyles__WEBPACK_IMPORTED_MODULE_3__.SectionSeperator, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutIndex);

/***/ }),

/***/ "./src/components/about/largeText.tsx":
/*!********************************************!*\
  !*** ./src/components/about/largeText.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/sharedStyles */ "./src/styles/sharedStyles.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


 // TODO -> based on scroll position 
// TODO -> underline children 3, 4, 5 
// TODO -> fix line heights..

const NoOverflowDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "largeText__NoOverflowDiv"
})(["overflow:hidden;"]);
const textRotateUp = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.keyframes)(["0%{transform:rotate(4deg) translateY(10px);transform-origin:bottom left;opacity:0;}100%{transform:rotate(0) translateY(0);transform-origin:bottom left;}"]);
const H1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "largeText__H1"
})(["margin:0;font-weight:900;font-size:9vw;@media (max-width:768px){font-size:7vw;}animation-name:", ";animation-duration:1s;animation-timing-function:ease-in-out;animation-fill-mode:forwards;"], textRotateUp);
const text = "focusing on fashion, commercial, personal, projects";
var wordElements = text.split(" ").map(c => c);

const LargeText = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__.VerticalFlexDiv, null, wordElements.map((e, ix) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NoOverflowDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H1, null, e))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LargeText);

/***/ }),

/***/ "./src/components/about/smallText.tsx":
/*!********************************************!*\
  !*** ./src/components/about/smallText.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/sharedStyles */ "./src/styles/sharedStyles.ts");


 // const VerticalFlexDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   text-align: center;
//   /* text-transform: uppercase; */
// `;

const P = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "smallText__P"
})(["text-transform:uppercase;margin:0.3em 0;"]);

const SmallText = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__.VerticalFlexDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(P, null, "Hi, I am Daria Izbash"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(P, null, "Brands & People Photographer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(P, null, "Based in Moscow"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmallText);

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
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title */ "./src/components/landing/title.tsx");
/* harmony import */ var _subtitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subtitle */ "./src/components/landing/subtitle.tsx");
/* harmony import */ var _photos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photos */ "./src/components/landing/photos.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var styles_sharedStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/sharedStyles */ "./src/styles/sharedStyles.ts");






const Section = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].section.withConfig({
  displayName: "landing__Section"
})([""]);

const LandingIndex = ({
  scrollWidth
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_title__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_subtitle__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_photos__WEBPACK_IMPORTED_MODULE_3__["default"], {
    scrollWidth: scrollWidth
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styles_sharedStyles__WEBPACK_IMPORTED_MODULE_4__.SectionSeperator, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingIndex);

/***/ }),

/***/ "./src/components/landing/photos.tsx":
/*!*******************************************!*\
  !*** ./src/components/landing/photos.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
 // import { StaticImage } from "gatsby-plugin-image"



const images = ["https://placekitten.com/500/800", "https://placekitten.com/600/800", "https://placekitten.com/700/800"];
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "photos__Wrapper"
})(["display:flex;justify-content:center;margin:5% 0;"]);
const ImageGrowAnim = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(["0%{transform:scale(0);transform-origin:50% 100%;opacity:1;}100%{transform:scale(1);transform-origin:50% 100%;opacity:1;}"]);
const ImageAnimatorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "photos__ImageAnimatorWrapper"
})(["display:inline-block;width:400px;height:600px;animation-name:", ";animation-duration:0.8s;animation-timing-function:cubic-bezier(0.455,0.030,0.515,0.955);animation-fill-mode:forwards;overflow:hidden;"], ImageGrowAnim);
const Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "photos__Image"
})(["height:600px;transform:scale(", ");"], props => props.height);

const Photos = ({
  scrollWidth
}) => {
  const {
    0: imageNumber,
    1: setImageNumber
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const update = () => {
      setImageNumber(imageNumber => imageNumber + 1);
    };

    const interval = setInterval(update, 5000);
    return () => clearInterval(interval);
  }, []);
  const currentImage = images[imageNumber % 3]; // console.log("imageNumber", imageNumber)
  // console.log(currentImage)

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ImageAnimatorWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Image, {
    src: currentImage,
    alt: "A kitten",
    width: 400,
    height: scrollWidth
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Photos);

/***/ }),

/***/ "./src/components/landing/subtitle.tsx":
/*!*********************************************!*\
  !*** ./src/components/landing/subtitle.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


const HorizontalFlexDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "subtitle__HorizontalFlexDiv"
})(["display:flex;flex-direction:row;justify-content:space-between;"]);
const P = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "subtitle__P"
})(["text-transform:uppercase;margin:0.3em 0;"]);
const ItalicP = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(P).withConfig({
  displayName: "subtitle__ItalicP"
})(["font-style:italic;"]);

const Subtitle = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HorizontalFlexDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(P, null, "Based in Moscow"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ItalicP, null, " *Available Worldwide")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(P, null, "Brands & People Photographer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(P, null, "(2021), All Rights Reserved"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Subtitle);

/***/ }),

/***/ "./src/components/landing/title.tsx":
/*!******************************************!*\
  !*** ./src/components/landing/title.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "title__Wrapper"
})(["display:flex;flex-direction:column;margin-bottom:1em;"]);
const Line = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "title__Line"
})(["background-color:", ";height:0.05em;"], props => props.theme.palette.white);
const CenterDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "title__CenterDiv"
})(["display:flex;flex-direction:row;justify-content:center;"]);
const textAppearTopRightAnim = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(["0%{transform:scale(0);transform-origin:0% 100%;opacity:1;}100%{transform:scale(1);transform-origin:0% 100%;opacity:1;}"]);
const H1 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "title__H1"
})(["margin:0;letter-spacing:-0.5vw;line-height:0.9em;font-size:17vw;@media (max-width:768px){font-size:15vw;}animation-name:", ";animation-duration:0.4s;animation-timing-function:ease-in-out;animation-fill-mode:forwards;animation-delay:", "s;"], textAppearTopRightAnim, props => props.animationDelay);
const text = 'Daria' + "   " + 'Izbash';
var textElements = text.split("").map(c => c);

const Title = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Line, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CenterDiv, null, textElements.map((e, ix) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H1, {
    animationDelay: ix / 30
  }, e))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Line, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);

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


const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)(["html{font-family:", ";color:white;}body{margin:0;}h1,h2,p{font-size:clamp(var(--min),var(--val),var(--max));margin:0;}h1{--min:2em;--val:5vw;--max:3em;}h2{--min:1.5em;--val:4vw;--max:2.25em;}p{--min:0.8em;--val:1vw;--max:1.5em;}"], _theme__WEBPACK_IMPORTED_MODULE_0__.fontFamily);

/***/ }),

/***/ "./src/styles/sharedStyles.ts":
/*!************************************!*\
  !*** ./src/styles/sharedStyles.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalFlexDiv": () => (/* binding */ VerticalFlexDiv),
/* harmony export */   "SectionSeperator": () => (/* binding */ SectionSeperator)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const VerticalFlexDiv = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "sharedStyles__VerticalFlexDiv"
})(["display:flex;flex-direction:column;text-align:center;"]);
const SectionSeperator = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "sharedStyles__SectionSeperator"
})(["height:10em;"]);

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

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-tsx.js.map