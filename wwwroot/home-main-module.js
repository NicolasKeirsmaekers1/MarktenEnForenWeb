(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-main-module"],{

/***/ "EL2m":
/*!**********************************************!*\
  !*** ./ClientApp/app/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_home_component_layout_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/home.component.layout.html */ "VOXZ");
/* harmony import */ var _raw_loader_html_home_component_layout_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_home_component_layout_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: _raw_loader_html_home_component_layout_html__WEBPACK_IMPORTED_MODULE_1___default.a
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "VOXZ":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/home/html/home.component.layout.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "﻿<mafo-panel selector=\"title\" [collapsable]=\"false\" [open]=\"true\">\r\n    <mafo-panel-heading>\r\n        <h1>\r\n            <span class=\"fa fa-home\"></span>&nbsp;\r\n            Mafo\r\n        </h1>\r\n    </mafo-panel-heading>\r\n    <mafo-panel-body>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                Markten&nbsp;&amp;&nbsp;Foren v4.0\r\n            </div>\r\n        </div>\r\n    </mafo-panel-body>\r\n</mafo-panel>"

/***/ }),

/***/ "zB8N":
/*!*******************************************!*\
  !*** ./ClientApp/app/home/main.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "EL2m");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "tBJz");





var homeRoutes = [
    {
        path: "",
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(homeRoutes)
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-main-module.js.map