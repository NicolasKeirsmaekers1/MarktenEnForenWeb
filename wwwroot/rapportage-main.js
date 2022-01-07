(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rapportage-main"],{

/***/ "SxV6V":
/*!*********************************************************************!*\
  !*** ./ClientApp/app/rapportage/rapportage-csv-export.component.ts ***!
  \*********************************************************************/
/*! exports provided: CsvExportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvExportComponent", function() { return CsvExportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_rapportage_csv_export_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/rapportage-csv-export.component.html */ "bcOC");
/* harmony import */ var _raw_loader_html_rapportage_csv_export_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_rapportage_csv_export_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _rapportage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rapportage.service */ "zOAn");




var CsvExportComponent = /** @class */ (function () {
    function CsvExportComponent(service) {
        this.service = service;
        this.pageTitle = 'Csv Export';
    }
    CsvExportComponent.prototype.download = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        var href = $event.target.closest("a");
        if (!href)
            return;
        var type = href.getAttribute("data-type");
        if (!type)
            return;
        this.service.download(type);
    };
    CsvExportComponent.ctorParameters = function () { return [
        { type: _rapportage_service__WEBPACK_IMPORTED_MODULE_3__["RapportageService"] }
    ]; };
    CsvExportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: _raw_loader_html_rapportage_csv_export_component_html__WEBPACK_IMPORTED_MODULE_1___default.a,
            styles: [".well .btn { margin-right: 20px;} a { text-decoration: none; color: inherit !important; } .well { cursor: pointer; }"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_rapportage_service__WEBPACK_IMPORTED_MODULE_3__["RapportageService"]])
    ], CsvExportComponent);
    return CsvExportComponent;
}());



/***/ }),

/***/ "bcOC":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/rapportage/html/rapportage-csv-export.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <mafo-panel selector=\"title\" [collapsable]=\"false\" [open]=\"true\">\r\n            <mafo-panel-heading>\r\n                <h3 class=\"row\">\r\n                    <span class=\"col-xs-12\" id=\"title-rapportage\">\r\n                        <span class=\"fa fa-file-text-o\"></span>&nbsp;\r\n                        Rapportage - CSV Export\r\n                    </span>\r\n                </h3>\r\n            </mafo-panel-heading>\r\n            <mafo-panel-body (click)=\"download($event)\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <a data-type=\"MARKTOVERZICHT\" id=\"markten-overzicht-button\">\r\n                            <div class=\"well\">\r\n                                <span class=\"btn btn-success btn-xs btn-edit\">\r\n                                    <i class=\"fa fa-download\"></i>\r\n                                </span>\r\n                                Markten - overzicht\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <a data-type=\"AANVRAAGOVERZICHT\" id=\"aanvragen-overzicht-button\">\r\n                            <div class=\"well\">\r\n                                <span class=\"btn btn-success btn-xs btn-edit\">\r\n                                    <i class=\"fa fa-download\"></i>\r\n                                </span>\r\n                                Aanvragen - overzicht\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <a data-type=\"AANVRAAGWACHTLIJST\" id=\"aanvragen-overzicht-wachtlijsten-button\">\r\n                            <div class=\"well\">\r\n                                <span class=\"btn btn-success btn-xs btn-edit\">\r\n                                    <i class=\"fa fa-download\"></i>\r\n                                </span>\r\n                                Aanvragen - overzicht wachtlijsten (registratie)\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <a data-type=\"AANVRAAGWACHTLIJSTPERMARKT\" id=\"aanvragen-wachtlijst-per-markt-button\">\r\n                            <div class=\"well\">\r\n                                <span class=\"btn btn-success btn-xs btn-edit\">\r\n                                    <i class=\"fa fa-download\"></i>\r\n                                </span>\r\n                                Aanvragen - wachtlijst per markt (registratie)\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <a data-type=\"AANVRAAGRESERVATIE\" id=\"aanvragen-reservaties-button\">\r\n                            <div class=\"well\">\r\n                                <span class=\"btn btn-success btn-xs btn-edit\">\r\n                                    <i class=\"fa fa-download\"></i>\r\n                                </span>\r\n                                Aanvragen - reservaties\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <a data-type=\"ABONNEMENTOVERZICHT\" id=\"abonnementen-overzicht-button\">\r\n                            <div class=\"well\">\r\n                                <span class=\"btn btn-success btn-xs btn-edit\">\r\n                                    <i class=\"fa fa-download\"></i>\r\n                                </span>\r\n                                Abonnementen - overzicht\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <a data-type=\"ABONNEMENTOPGESCHORT\"id=\"abonnementen-opgeschort-button\">\r\n                            <div class=\"well\">\r\n                                <span class=\"btn btn-success btn-xs btn-edit\">\r\n                                    <i class=\"fa fa-download\"></i>\r\n                                </span>\r\n                                Abonnementen - opgeschort\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <a data-type=\"ABONNEMENTGESCHORST\" id=\"abonnenementen-geschorst-button\">\r\n                            <div class=\"well\">\r\n                                <span class=\"btn btn-success btn-xs btn-edit\">\r\n                                    <i class=\"fa fa-download\"></i>\r\n                                </span>\r\n                                Abonnementen - geschorst\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <a data-type=\"ABONNEMENTOVERDRACHT\" id=\"abonnementen-overdracht-button\">\r\n                            <div class=\"well\">\r\n                                <span class=\"btn btn-success btn-xs btn-edit\">\r\n                                    <i class=\"fa fa-download\"></i>\r\n                                </span>\r\n                                Abonnementen - overdracht\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <a data-type=\"ABONNEMENTINTREKKING\" id=\"abonnementen-intrekking-button\">\r\n                            <div class=\"well\">\r\n                                <span class=\"btn btn-success btn-xs btn-edit\">\r\n                                    <i class=\"fa fa-download\"></i>\r\n                                </span>\r\n                                Abonnementen - intrekking\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <a data-type=\"ABONNEMENTOPZEGGING\" id=\"abonnementen-opzegging-button\">\r\n                            <div class=\"well\">\r\n                                <span class=\"btn btn-success btn-xs btn-edit\">\r\n                                    <i class=\"fa fa-download\"></i>\r\n                                </span>\r\n                                Abonnementen - opzegging\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <a data-type=\"KLANTOVERZICHT\" id=\"klanten-overzicht-button\">\r\n                            <div class=\"well\">\r\n                                <span class=\"btn btn-success btn-xs btn-edit\">\r\n                                    <i class=\"fa fa-download\"></i>\r\n                                </span>\r\n                                Klanten - overzicht\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <a data-type=\"HISTORIEK\" id=\"historiek-button\">\r\n                            <div class=\"well\">\r\n                                <span class=\"btn btn-success btn-xs btn-edit\">\r\n                                    <i class=\"fa fa-download\"></i>\r\n                                </span>\r\n                                Historiek\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </mafo-panel-body>\r\n        </mafo-panel>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "paSI":
/*!******************************************!*\
  !*** ./ClientApp/app/rapportage/main.ts ***!
  \******************************************/
/*! exports provided: RapportageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapportageModule", function() { return RapportageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "tBJz");
/* harmony import */ var _rapportage_csv_export_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rapportage-csv-export.component */ "SxV6V");
/* harmony import */ var _rapportage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rapportage.service */ "zOAn");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth */ "qec8");







var RapportageModule = /** @class */ (function () {
    function RapportageModule() {
    }
    RapportageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: "csv-export",
                        component: _rapportage_csv_export_component__WEBPACK_IMPORTED_MODULE_4__["CsvExportComponent"],
                        data: {
                            privileges: [_auth__WEBPACK_IMPORTED_MODULE_6__["Privilege"].Rapportage.Get]
                        }
                    }
                ])
            ],
            declarations: [_rapportage_csv_export_component__WEBPACK_IMPORTED_MODULE_4__["CsvExportComponent"]],
            providers: [_rapportage_service__WEBPACK_IMPORTED_MODULE_5__["RapportageService"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], RapportageModule);
    return RapportageModule;
}());



/***/ }),

/***/ "zOAn":
/*!********************************************************!*\
  !*** ./ClientApp/app/rapportage/rapportage.service.ts ***!
  \********************************************************/
/*! exports provided: RapportageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapportageService", function() { return RapportageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.settings */ "HRaI");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-slim-loading-bar */ "k+RO");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/do */ "92bn");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/catch */ "S7rW");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/map */ "4XzM");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/observable/throw */ "Drjo");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core */ "BxFb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! file-saver */ "JEAp");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_11__);












var RapportageService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RapportageService, _super);
    function RapportageService(http, loader) {
        var _this = _super.call(this, http, loader) || this;
        _this.http = http;
        _this.loader = loader;
        _this.url = _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "reports/";
        return _this;
    }
    RapportageService.prototype.download = function (type) {
        var _this = this;
        this.loader.start();
        this.http.get(this.url + type, { headers: this.csvHeaders, observe: 'response', responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            var blob = new Blob([resp.body], { type: "text/csv" });
            var name = resp.headers.get("content-disposition");
            file_saver__WEBPACK_IMPORTED_MODULE_11__["saveAs"](blob, name.substr(name.lastIndexOf("'") + 1));
        }))
            .subscribe();
    };
    RapportageService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] },
        { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__["SlimLoadingBarService"] }
    ]; };
    RapportageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__["SlimLoadingBarService"]])
    ], RapportageService);
    return RapportageService;
}(_core__WEBPACK_IMPORTED_MODULE_9__["BaseService"]));



/***/ })

}]);
//# sourceMappingURL=rapportage-main.js.map