(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["factuur-factuur-module"],{

/***/ "/+B9":
/*!**************************************************************!*\
  !*** ./ClientApp/app/factuur/factuur-historiek.component.ts ***!
  \**************************************************************/
/*! exports provided: FactuurHistoriekComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactuurHistoriekComponent", function() { return FactuurHistoriekComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_factuur_historiek_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/factuur-historiek.component.html */ "rNFV");
/* harmony import */ var _raw_loader_html_factuur_historiek_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_factuur_historiek_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_modialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-modialog */ "ROqb");
/* harmony import */ var ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-modialog/plugins/bootstrap */ "e7Ax");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _componenten_datagrid_datagrid_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componenten/datagrid/datagrid.models */ "3Jkk");
/* harmony import */ var _factuur_detail_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./factuur-detail.modal.component */ "w0mW");
/* harmony import */ var _factuur_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./factuur.service */ "b2nx");










var FactuurHistoriekComponent = /** @class */ (function () {
    function FactuurHistoriekComponent(factuurService, datePipe, toastr, modal, viewContainerRef) {
        this.factuurService = factuurService;
        this.datePipe = datePipe;
        this.toastr = toastr;
        this.modal = modal;
        this.viewContainerRef = viewContainerRef;
        this.gridOptions = {
            stripedRows: true,
            //TODO: properties van children sortable krijgen
            fields: [
                {
                    field: "createdOn",
                    title: "Gecreëerd op",
                    sortable: true,
                    sort: _componenten_datagrid_datagrid_models__WEBPACK_IMPORTED_MODULE_7__["SortOrder"].Ascending,
                    width: "10%"
                },
                {
                    field: "klant.firmanaam",
                    title: "Firma",
                    sortable: true,
                    width: "30%"
                },
                {
                    field: "klant.ondernemingsnr",
                    title: "Ondernemingsnummer",
                    sortable: true,
                    width: "15%"
                },
                {
                    //entity property name = naam, model property name = omschrijving 
                    // => entity property name is used here for sorting purposes, model name is used in html
                    field: "district.naam",
                    title: "District",
                    sortable: true,
                    width: "15%"
                },
                {
                    field: "factuurNummer",
                    title: "Factuurnummer",
                    sortable: true,
                    width: "15%"
                },
                {
                    field: "bedrag",
                    title: "Totaal bedrag",
                    sortable: false,
                    width: "10%"
                }
            ]
        };
    }
    FactuurHistoriekComponent.prototype.fetchData = function (page) {
        var _this = this;
        if (!this.page)
            this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }
        this.page["isVerzondenNaarSAP"] = true;
        this.page["jaar"] = undefined;
        this.page["semester"] = undefined;
        if (this.selectedSemester && this.selectedSemester !== "") {
            var splittedSemester = this.selectedSemester.split('/');
            this.page["jaar"] = Number(splittedSemester[1]);
            this.page["semester"] = Number(splittedSemester[0]);
        }
        this.factuurService.getAll(this.page).subscribe(function (x) { return _this.historiekFactuur = x; }, function (x) {
            _this.toastr.error("Kon geen data inladen!", "Facturen");
            _this.historiekFactuur = null;
        });
    };
    FactuurHistoriekComponent.prototype.searchFacturen = function ($event) {
        if (this.page) {
            this.page.page = 1;
            this.page["filter"] = $event.value;
            this.fetchData(this.page);
        }
    };
    FactuurHistoriekComponent.prototype.showDetailModal = function (factuurId) {
        if (isNaN(factuurId)) {
            factuurId = 0;
        }
        this.modal.open(_factuur_detail_modal_component__WEBPACK_IMPORTED_MODULE_8__["FactuurDetailModal"], Object(ngx_modialog__WEBPACK_IMPORTED_MODULE_4__["overlayConfigFactory"])(new _factuur_detail_modal_component__WEBPACK_IMPORTED_MODULE_8__["FactuurDetailModalContext"](factuurId), _factuur_detail_modal_component__WEBPACK_IMPORTED_MODULE_8__["FactuurDetailModalContext"], {
            viewContainer: this.viewContainerRef
        }));
    };
    FactuurHistoriekComponent.prototype.rowClicked = function (row) {
        this.showDetailModal(row.data.id);
    };
    FactuurHistoriekComponent.ctorParameters = function () { return [
        { type: _factuur_service__WEBPACK_IMPORTED_MODULE_9__["FactuurService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }
    ]; };
    FactuurHistoriekComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            template: _raw_loader_html_factuur_historiek_component_html__WEBPACK_IMPORTED_MODULE_1___default.a
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_factuur_service__WEBPACK_IMPORTED_MODULE_9__["FactuurService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]])
    ], FactuurHistoriekComponent);
    return FactuurHistoriekComponent;
}());



/***/ }),

/***/ "2PYN":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/factuur/html/factuur-detail.modal.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "﻿<div *ngIf=\"factuur\">\r\n    <div class=\"modal-header\">\r\n        <button aria-label=\"Close\" class=\"close\" type=\"button\" (click)=\"dialog.close(false)\">\r\n            <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n        <h3 class=\"modal-title\">Detail factuur {{factuur.factuurNummer | nullSafe}}</h3>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-md-6\">\r\n                <label>Doorgestuurd naar SAP</label>\r\n            </div>\r\n            <div class=\"col-xs-12 col-md-6\">\r\n                <div class=\"pull-left\">\r\n                    <label>{{factuur.isDoorgestuurdNaarSAP === true ? 'Ja' : 'Nee' | nullSafe}}</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-12 col-md-6\">\r\n                <label>Klant naam</label>\r\n            </div>\r\n            <div class=\"col-xs-12 col-md-6\">\r\n                <div class=\"pull-left\">\r\n                    <label>{{factuur.klant.firmanaam | nullSafe}}</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-12 col-md-6\">\r\n                <div class=\"form-group\">\r\n                    <label>Klant nummer</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-12 col-md-6\">\r\n                <div class=\"pull-left\">\r\n                    <label>{{factuur.klant.ondernemingsnr | nullSafe}}</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-md-12\">\r\n                <label>Factuur lijnen</label>\r\n            </div>\r\n            <div class=\"col-xs-12 col-md-12\">\r\n                <dp-datagrid [data]=\"factuurLijnenData\" [options]=\"gridOptions\">\r\n                    <!-- Datagrid met template die een modal opent, waarin een nieuwe datagrid \r\n                    met een template zit veroorzaakt crash -->\r\n                    <ng-template #rowTemplate let-item=\"item\" let-index=\"index\">\r\n                        <td>{{item.omschrijving | nullSafe}}</td>\r\n                        <td>{{item.sapmateriaalCode | nullSafe}}</td>\r\n                        <td>€ {{item.eenheidsPrijs | nullSafe}}</td>\r\n                        <td>{{item.aantal | nullSafe}}</td>\r\n                        <td>€ {{item.totaal | nullSafe}}</td>\r\n                    </ng-template>\r\n                </dp-datagrid>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n       <button type=\"button\" class=\"btn btn-default\" (click)=\"dialog.close(false)\">Sluiten</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "4ZrP":
/*!**************************************************!*\
  !*** ./ClientApp/app/factuur/factuur.resolve.ts ***!
  \**************************************************/
/*! exports provided: FactuurResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactuurResolve", function() { return FactuurResolve; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _factuur_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factuur.service */ "b2nx");



var FactuurResolve = /** @class */ (function () {
    function FactuurResolve(factuurService) {
        this.factuurService = factuurService;
    }
    FactuurResolve.prototype.resolve = function (route) {
        return this.factuurService.get(route.params['id']);
    };
    FactuurResolve.ctorParameters = function () { return [
        { type: _factuur_service__WEBPACK_IMPORTED_MODULE_2__["FactuurService"] }
    ]; };
    FactuurResolve = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_factuur_service__WEBPACK_IMPORTED_MODULE_2__["FactuurService"]])
    ], FactuurResolve);
    return FactuurResolve;
}());



/***/ }),

/***/ "59Xd":
/*!*************************************************!*\
  !*** ./ClientApp/app/factuur/factuur.module.ts ***!
  \*************************************************/
/*! exports provided: FactuurModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactuurModule", function() { return FactuurModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_service_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/service.module */ "1g0q");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "tBJz");
/* harmony import */ var _componenten_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componenten/search */ "su0z");
/* harmony import */ var _componenten_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componenten/validators */ "2/Vv");
/* harmony import */ var _componenten_code_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componenten/code-select */ "HW5m");
/* harmony import */ var _componenten_datetimepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componenten/datetimepicker */ "RyTg");
/* harmony import */ var _factuur_module_definitions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./factuur.module.definitions */ "WLpk");
/* harmony import */ var _factuur_resolve__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./factuur.resolve */ "4ZrP");
/* harmony import */ var _factuur_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./factuur.service */ "b2nx");
/* harmony import */ var _factuur_detail_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./factuur-detail.modal.component */ "w0mW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "SVse");














var FactuurModule = /** @class */ (function () {
    function FactuurModule() {
    }
    FactuurModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _services_service_module__WEBPACK_IMPORTED_MODULE_3__["ServiceModule"],
                _componenten_search__WEBPACK_IMPORTED_MODULE_5__["SearchModule"],
                _componenten_code_select__WEBPACK_IMPORTED_MODULE_7__["CodeSelectModule"],
                _componenten_validators__WEBPACK_IMPORTED_MODULE_6__["ValidatorsModule"],
                _componenten_datetimepicker__WEBPACK_IMPORTED_MODULE_8__["DateTimePickerhModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_factuur_module_definitions__WEBPACK_IMPORTED_MODULE_9__["routes"]))
            ],
            providers: [
                _factuur_service__WEBPACK_IMPORTED_MODULE_11__["FactuurService"], _factuur_resolve__WEBPACK_IMPORTED_MODULE_10__["FactuurResolve"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]
            ],
            declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_factuur_module_definitions__WEBPACK_IMPORTED_MODULE_9__["factuurComponents"]),
            entryComponents: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([_factuur_detail_modal_component__WEBPACK_IMPORTED_MODULE_12__["FactuurDetailModal"]], _factuur_module_definitions__WEBPACK_IMPORTED_MODULE_9__["factuurComponents"]),
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], FactuurModule);
    return FactuurModule;
}());



/***/ }),

/***/ "RhlD":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs-compat/add/observable/interval.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var rxjs_1 = __webpack_require__(/*! rxjs */ "qCKp");

rxjs_1.Observable.interval = rxjs_1.interval;

/***/ }),

/***/ "TGZE":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/add/observable/interval.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(/*! rxjs-compat/add/observable/interval */ "RhlD");

/***/ }),

/***/ "WLpk":
/*!*************************************************************!*\
  !*** ./ClientApp/app/factuur/factuur.module.definitions.ts ***!
  \*************************************************************/
/*! exports provided: factuurComponents, factuurDirectives, factuurPipes, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factuurComponents", function() { return factuurComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factuurDirectives", function() { return factuurDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factuurPipes", function() { return factuurPipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _factuur_generic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factuur-generic.component */ "infH");
/* harmony import */ var _factuur_historiek_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factuur-historiek.component */ "/+B9");
/* harmony import */ var _factuur_resolve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factuur.resolve */ "4ZrP");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth */ "qec8");
/* harmony import */ var _factuur_detail_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factuur-detail.modal.component */ "w0mW");





var factuurComponents = [
    _factuur_generic_component__WEBPACK_IMPORTED_MODULE_0__["GenericFactuurComponent"],
    _factuur_historiek_component__WEBPACK_IMPORTED_MODULE_1__["FactuurHistoriekComponent"],
    _factuur_detail_modal_component__WEBPACK_IMPORTED_MODULE_4__["FactuurDetailModal"]
];
var factuurDirectives = [];
var factuurPipes = [];
var routes = [
    {
        path: "halfjaarlijkse",
        component: _factuur_generic_component__WEBPACK_IMPORTED_MODULE_0__["GenericFactuurComponent"],
        canActivate: [_auth__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
            privileges: [_auth__WEBPACK_IMPORTED_MODULE_3__["Privilege"].Factuur.GetFilteredAndPaged]
        }
    },
    {
        path: "tussentijdse",
        component: _factuur_generic_component__WEBPACK_IMPORTED_MODULE_0__["GenericFactuurComponent"],
        canActivate: [_auth__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
            privileges: [_auth__WEBPACK_IMPORTED_MODULE_3__["Privilege"].Factuur.GetFilteredAndPaged]
        }
    },
    {
        path: "terugbetalingen",
        component: _factuur_generic_component__WEBPACK_IMPORTED_MODULE_0__["GenericFactuurComponent"],
        canActivate: [_auth__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
            privileges: [_auth__WEBPACK_IMPORTED_MODULE_3__["Privilege"].Factuur.GetFilteredAndPaged]
        }
    },
    {
        path: "historiek",
        component: _factuur_historiek_component__WEBPACK_IMPORTED_MODULE_1__["FactuurHistoriekComponent"],
        canActivate: [_auth__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
            privileges: [_auth__WEBPACK_IMPORTED_MODULE_3__["Privilege"].Factuur.GetFilteredAndPaged]
        }
    },
    {
        path: ":id",
        component: _factuur_detail_modal_component__WEBPACK_IMPORTED_MODULE_4__["FactuurDetailModal"],
        resolve: {
            Factuur: _factuur_resolve__WEBPACK_IMPORTED_MODULE_2__["FactuurResolve"]
        },
        canActivate: [_auth__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
            privileges: [_auth__WEBPACK_IMPORTED_MODULE_3__["Privilege"].Factuur.Get]
        }
    }
];


/***/ }),

/***/ "b2nx":
/*!**************************************************!*\
  !*** ./ClientApp/app/factuur/factuur.service.ts ***!
  \**************************************************/
/*! exports provided: FactuurService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactuurService", function() { return FactuurService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.settings */ "HRaI");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-slim-loading-bar */ "k+RO");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core */ "BxFb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");







var FactuurService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FactuurService, _super);
    function FactuurService(_http, loader) {
        var _this = _super.call(this, _http, loader) || this;
        _this._http = _http;
        _this.loader = loader;
        _this.url = _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + 'invoices';
        return _this;
    }
    FactuurService.prototype.getAll = function (query) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]();
        if (query) {
            params = params.set("page", query.page.toString());
            params = params.set("pageSize", query.pageSize.toString());
            if (query.filter)
                params = params.set("filter", query.filter);
            if (query.factuurType)
                params = params.set("factuurType", query.factuurType);
            if (query.isVerzondenNaarSAP !== undefined)
                params = params.set("isVerzondenNaarSap", query.isVerzondenNaarSAP);
            if (query.jaar)
                params = params.set("jaar", query.jaar);
            if (query.semester !== undefined)
                params = params.set("semester", query.semester);
            if (query.sort && query.sort.length > 0)
                params = params.set("sort", query.sort.join(","));
            if (query.geenAantal)
                params = params.set("geenAantal", query.geenAantal);
        }
        this.loader.start();
        return this._http.get(this.url, { headers: this.jsonHeaders, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }));
    };
    FactuurService.prototype.get = function (id) {
        var _this = this;
        this.loader.start();
        return this._http.get(this.url + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    FactuurService.prototype.startGenerateFacturenJob = function () {
        var _this = this;
        this.loader.start();
        return this._http.post(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + 'invoicejobs', { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    FactuurService.prototype.getGenerateFacturenJob = function () {
        var _this = this;
        this.loader.start();
        return this._http.get(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + 'invoicejobs', { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    FactuurService.prototype.sendFacturenToSAP = function (query) {
        var _this = this;
        this.loader.start();
        return this._http.post(this.url, query, { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    FactuurService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__["SlimLoadingBarService"] }
    ]; };
    FactuurService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__["SlimLoadingBarService"]])
    ], FactuurService);
    return FactuurService;
}(_core__WEBPACK_IMPORTED_MODULE_5__["BaseService"]));



/***/ }),

/***/ "infH":
/*!************************************************************!*\
  !*** ./ClientApp/app/factuur/factuur-generic.component.ts ***!
  \************************************************************/
/*! exports provided: GenericFactuurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericFactuurComponent", function() { return GenericFactuurComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_factuur_generic_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/factuur-generic.component.html */ "yiA4");
/* harmony import */ var _raw_loader_html_factuur_generic_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_factuur_generic_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/interval */ "TGZE");
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_modialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-modialog */ "ROqb");
/* harmony import */ var ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-modialog/plugins/bootstrap */ "e7Ax");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../auth */ "qec8");
/* harmony import */ var _componenten_datagrid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../componenten/datagrid */ "z4/g");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core */ "BxFb");
/* harmony import */ var _factuur_factuur_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../factuur/factuur.service */ "b2nx");
/* harmony import */ var _factuur_detail_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./factuur-detail.modal.component */ "w0mW");
















var GenericFactuurComponent = /** @class */ (function () {
    function GenericFactuurComponent(factuurService, router, route, modal, viewContainerRef, toastr, auth) {
        this.factuurService = factuurService;
        this.router = router;
        this.route = route;
        this.modal = modal;
        this.viewContainerRef = viewContainerRef;
        this.toastr = toastr;
        this.auth = auth;
        this.hasMateriaalCodeError = false;
        this.gridOptions = {
            stripedRows: true,
            fields: [
                {
                    field: 'createdOn',
                    title: 'Gecreëerd op',
                    sortable: true,
                    sort: _componenten_datagrid__WEBPACK_IMPORTED_MODULE_12__["SortOrder"].Descending,
                    width: '10%',
                },
                {
                    field: 'klant.firmanaam',
                    title: 'Firma',
                    sortable: true,
                    width: '30%',
                },
                {
                    field: 'klant.ondernemingsnr',
                    title: 'Ondernemingsnummer',
                    sortable: true,
                    width: '15%',
                },
                {
                    //entity property name = naam, model property name = omschrijving
                    // => entity property name is used here for sorting purposes, model name is used in html
                    field: 'district.code',
                    title: 'District',
                    sortable: true,
                    width: '15%',
                },
                {
                    field: 'factuurNummer',
                    title: 'Factuurnummer',
                    sortable: true,
                    width: '15%',
                },
                {
                    field: 'bedrag',
                    title: 'Totaal bedrag',
                    sortable: false,
                    width: '10%',
                },
            ],
        };
    }
    GenericFactuurComponent.prototype.fetchData = function (page) {
        var _this = this;
        if (!this.page)
            this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }
        this.page['factuurType'] = this.factuurType;
        if (this.factuurType == _core__WEBPACK_IMPORTED_MODULE_13__["ApplicationConstants"].Terugbetaling) {
            this.page['geenAantal'] = true;
        }
        this.factuurService.getAll(this.page).subscribe(function (x) {
            _this.data = x;
            if (_this.data.page.totalElements == 0) {
                _this.geenFacturen = true;
                _this.sapButtonText = 'Geen Facturen';
            }
            else {
                _this.geenFacturen = false;
                if (_this.data.page.totalElements == 1) {
                    _this.sapButtonText =
                        'Stuur ' +
                            _this.data.page.totalElements +
                            ' factuur door naar SAP';
                }
                else {
                    _this.sapButtonText =
                        'Stuur ' +
                            _this.data.page.totalElements +
                            ' facturen door naar SAP';
                }
            }
        }, function (x) {
            _this.toastr.error('Kon geen data inladen!', 'Facturen');
            _this.data = null;
        });
    };
    GenericFactuurComponent.prototype.generateFacturen = function () {
        var _this = this;
        this.hasMateriaalCodeError = false;
        this.facturatieAfgerond = false;
        this.factuurGeneratieRunning = true;
        this.factuurGeneratieSubscription =
            this.pollGenerateFacturenStatus().subscribe(function (data) {
                _this.factuurGeneratieRunning = data.status === 'Bezig';
            });
        this.factuurService.startGenerateFacturenJob().subscribe(function (x) {
            _this.toastr.info('Facturen succesvol gegenereerd');
            _this.facturatieAfgerond = true;
            _this.fetchData(_this.page);
            if (_this.factuurGeneratieSubscription) {
                _this.factuurGeneratieSubscription.unsubscribe();
                _this.factuurGeneratieRunning = false;
            }
        }, function (x) {
            _this.toastr.error('Kon facturen niet genereren', 'Facturen genereren');
            if (x.ExtraInfo) {
                //if error of type
                if ('MaterialCodeError' in x.ExtraInfo) {
                    _this.errorMessage = x.ExtraInfo['MaterialCodeError'];
                    _this.hasMateriaalCodeError = true;
                }
                for (var xtra in x.ExtraInfo) {
                    _this.toastr.warning(xtra, x.ExtraInfo[xtra]);
                }
            }
            else if (x) {
                _this.toastr.warning(x.replace(/(<([^>]+)>)/gi, ''));
            }
            _this.facturatieAfgerond = false;
            if (_this.factuurGeneratieSubscription) {
                _this.factuurGeneratieSubscription.unsubscribe();
                _this.factuurGeneratieRunning = false;
            }
        });
    };
    GenericFactuurComponent.prototype.sendFacturenToSAP = function () {
        var _this = this;
        this.modal
            .confirm()
            .title(' Facturen naar SAP doorsturen')
            .body('Bent u zeker dat u <b>' +
            this.data.page.totalElements +
            '</b> facturen wil doorsturen naar SAP?')
            .cancelBtn('Nee')
            .okBtn('Ja')
            .open()
            .result.catch() // catch error not related to the result (modal open...)
            .then(function (dialog) { return dialog.result; }) // dialog has more properties,lets just return the promise for a result.
            .then(function (x) {
            return _this.factuurService.sendFacturenToSAP(_this.page).subscribe(function (x) { return x; }, function (x) {
                return _this.toastr.error('Er is een fout opgetreden bij het verzenden van facturen!');
            }, function () {
                _this.toastr.info('Facturen succesvol verzonden');
                _this.searchForm.setValue({ searchField: '' });
                _this.page['filter'] = '';
                _this.fetchData(_this.page);
            });
        }) // if we're here, ok was clicked.
            .catch(function (x) { }); // if we're here, cancel was clicked.
    };
    GenericFactuurComponent.prototype.pollGenerateFacturenStatus = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["interval"])(6000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function () { return _this.factuurService.getGenerateFacturenJob(); }));
    };
    GenericFactuurComponent.prototype.searchFacturen = function ($event) {
        if (this.page) {
            this.page.page = 1;
            this.page['filter'] = $event.value;
            this.page['factuurType'] = this.factuurType;
            this.page['geenaantal'] = this.geenAantal;
            this.fetchData(this.page);
        }
    };
    GenericFactuurComponent.prototype.showDetailModal = function (factuurId) {
        if (isNaN(factuurId)) {
            factuurId = 0;
        }
        this.modal.open(_factuur_detail_modal_component__WEBPACK_IMPORTED_MODULE_15__["FactuurDetailModal"], Object(ngx_modialog__WEBPACK_IMPORTED_MODULE_6__["overlayConfigFactory"])(new _factuur_detail_modal_component__WEBPACK_IMPORTED_MODULE_15__["FactuurDetailModalContext"](factuurId), _factuur_detail_modal_component__WEBPACK_IMPORTED_MODULE_15__["FactuurDetailModalContext"], {
            viewContainer: this.viewContainerRef,
        }));
    };
    GenericFactuurComponent.prototype.rowClicked = function (row) {
        this.showDetailModal(row.data.id);
    };
    GenericFactuurComponent.prototype.ngOnDestroy = function () {
        if (this.factuurGeneratieSubscription) {
            this.factuurGeneratieSubscription.unsubscribe();
        }
    };
    GenericFactuurComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({ searchField: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]() });
        this.facturatieAfgerond = false;
        if (this.route.snapshot.url[0].path) {
            var typeFactuurString = this.route.snapshot.url[0].path;
            switch (typeFactuurString) {
                case _core__WEBPACK_IMPORTED_MODULE_13__["ApplicationConstants"].HalfjaarlijksFactuurTypeRoute:
                    this.pageTitle = 'Facturen';
                    this.factuurType = _core__WEBPACK_IMPORTED_MODULE_13__["ApplicationConstants"].HalfjaarlijksFactuurType;
                    this.factuurGeneratieMelding =
                        'Even geduld... er wordt gecontroleerd of er reeds facturen gegenereerd worden...';
                    this.factuurGeneratieSubscription =
                        this.pollGenerateFacturenStatus().subscribe(function (data) {
                            _this.factuurGeneratieRunning = data.status === 'Bezig';
                            _this.showGenerateButton = true;
                            _this.showSendToSapButton = true;
                            _this.factuurGeneratieMelding = '';
                            if (!_this.factuurGeneratieRunning) {
                                _this.factuurGeneratieSubscription.unsubscribe();
                            }
                        });
                    break;
                case _core__WEBPACK_IMPORTED_MODULE_13__["ApplicationConstants"].TussentijdsFactuurTypeRoute:
                    this.showSendToSapButton = true;
                    this.pageTitle = 'Tussentijdse facturen';
                    this.factuurType = _core__WEBPACK_IMPORTED_MODULE_13__["ApplicationConstants"].TussentijdsFactuurType;
                    this.geenAantal = false;
                    break;
                case _core__WEBPACK_IMPORTED_MODULE_13__["ApplicationConstants"].TerugbetalingenRoute:
                    this.pageTitle = 'Terugbetalingen';
                    this.factuurType = _core__WEBPACK_IMPORTED_MODULE_13__["ApplicationConstants"].Terugbetaling;
                    this.geenAantal = true;
                    break;
                default:
                    this.pageTitle = 'Facturen';
                    this.factuurType = _core__WEBPACK_IMPORTED_MODULE_13__["ApplicationConstants"].OnbekendFactuurType;
                    this.geenAantal = false;
                    break;
            }
        }
        this.security();
    };
    GenericFactuurComponent.prototype.security = function () {
        this.genereer = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_11__["Privilege"].Factuur.Genereer);
        this.stuurDoorNaarSap = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_11__["Privilege"].Factuur.StuurNaarSap);
    };
    GenericFactuurComponent.ctorParameters = function () { return [
        { type: _factuur_factuur_service__WEBPACK_IMPORTED_MODULE_14__["FactuurService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Modal"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
        { type: _auth__WEBPACK_IMPORTED_MODULE_11__["AuthService"] }
    ]; };
    GenericFactuurComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            template: _raw_loader_html_factuur_generic_component_html__WEBPACK_IMPORTED_MODULE_1___default.a,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_factuur_factuur_service__WEBPACK_IMPORTED_MODULE_14__["FactuurService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Modal"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _auth__WEBPACK_IMPORTED_MODULE_11__["AuthService"]])
    ], GenericFactuurComponent);
    return GenericFactuurComponent;
}());



/***/ }),

/***/ "rNFV":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/factuur/html/factuur-historiek.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <mafo-panel selector=\"factuurHistoriek\" [collapsable]=\"false\" [open]=\"true\">\r\n            <mafo-panel-heading>\r\n                <h3 id=\"title-historiek\">\r\n                    <span class=\"fa fa-dot-circle-o\"></span>&nbsp;\r\n                    Factuur historiek\r\n                </h3>\r\n            </mafo-panel-heading>\r\n            <mafo-panel-body>\r\n                <div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\">\r\n                            <search (search)=\"searchFacturen($event)\"></search>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\" style=\"background-color: #428bca; border-color: #357ebd\">\r\n                                    <span class=\"btn-primary\" style=\"background-color: #428bca\">Semester</span>\r\n                                </span>\r\n                                <code-select placeholder=\"- Semester -\" type=\"FactuurSemester\" [(ngModel)]=\"selectedSemester\" (ngModelChange)=\"fetchData(page)\"></code-select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <br />\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <dp-datagrid [data]=\"historiekFactuur\" [options]=\"gridOptions\" (fetchData)=\"fetchData($event)\" (rowClicked)=\"rowClicked($event)\">\r\n                                    <ng-template #rowTemplate let-item=\"item\" let-index=\"index\">\r\n                                        <td>{{item.createdOn | date: 'dd/MM/yyyy'}}</td>\r\n                                        <td>{{item.klant.firmanaam | nullSafe}}</td>\r\n                                        <td>{{item.klant.ondernemingsnr | nullSafe}}</td>\r\n                                        <td>{{item.district.omschrijving | nullSafe}}</td>\r\n                                        <td>{{item.factuurNummer | nullSafe}}</td>\r\n                                        <td>€ {{item.bedrag | nullSafe}}</td>\r\n                                    </ng-template>\r\n                                    <ng-template #rowActions let-item=\"item\" let-index=\"index\">\r\n                                        <button title=\"Detail\" class=\"btn btn-default btn-xs btn-primary\" [attr.data-id]=\"item.id\" (click)=\"showDetailModal(item.id)\">\r\n                                            <i class=\"fa fa-info\"></i>\r\n                                        </button>\r\n                                    </ng-template>\r\n                                </dp-datagrid>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mafo-panel-body>\r\n        </mafo-panel>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "w0mW":
/*!*****************************************************************!*\
  !*** ./ClientApp/app/factuur/factuur-detail.modal.component.ts ***!
  \*****************************************************************/
/*! exports provided: FactuurDetailModalContext, FactuurDetailModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactuurDetailModalContext", function() { return FactuurDetailModalContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactuurDetailModal", function() { return FactuurDetailModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_factuur_detail_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/factuur-detail.modal.component.html */ "2PYN");
/* harmony import */ var _raw_loader_html_factuur_detail_modal_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_factuur_detail_modal_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_modialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-modialog */ "ROqb");
/* harmony import */ var ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-modialog/plugins/bootstrap */ "e7Ax");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _factuur_factuur_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../factuur/factuur.service */ "b2nx");







var FactuurDetailModalContext = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FactuurDetailModalContext, _super);
    function FactuurDetailModalContext(factuurId) {
        var _this = _super.call(this) || this;
        _this.factuurId = factuurId;
        return _this;
    }
    return FactuurDetailModalContext;
}(ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BSModalContext"]));

var FactuurDetailModal = /** @class */ (function () {
    function FactuurDetailModal(dialog, factuurService, toastr) {
        this.dialog = dialog;
        this.factuurService = factuurService;
        this.toastr = toastr;
        this.factuurLijnenData = {
            page: {
                number: 1,
                size: 0,
                totalElements: 0,
                totalPages: 1
            },
            embedded: { resourceList: new Array() },
            links: null
        };
        this.gridOptions = {
            stripedRows: true,
            showPaging: false,
            fields: [
                {
                    field: "omschrijving",
                    title: "Omschrijving",
                    sortable: false,
                    width: "35%"
                },
                {
                    field: "sapmateriaalCode",
                    title: "MateriaalCode SAP",
                    sortable: false,
                    width: "20%"
                },
                {
                    field: "eenheidsPrijs",
                    title: "Eenheidsprijs",
                    sortable: false,
                    width: "15%"
                },
                {
                    field: "aantal",
                    title: "Aantal",
                    sortable: false,
                    width: "15%"
                },
                {
                    field: "totaal",
                    title: "Totaalprijs",
                    sortable: false,
                    width: "15%"
                }
            ]
        };
        this.context = dialog.context;
        this.context.size = 'lg';
    }
    FactuurDetailModal.prototype.getFactuur = function (factuurId) {
        var _this = this;
        this.factuurService.get(factuurId)
            .subscribe(function (x) {
            _this.factuur = x;
            _this.factuurLijnenData = _this.factuur.factuurLijnen;
        }, function (error) { return _this.errorMessage = error; });
    };
    FactuurDetailModal.prototype.ngOnInit = function () {
        if (this.context.factuurId > 0) {
            this.getFactuur(this.context.factuurId);
        }
    };
    FactuurDetailModal.ctorParameters = function () { return [
        { type: ngx_modialog__WEBPACK_IMPORTED_MODULE_3__["DialogRef"] },
        { type: _factuur_factuur_service__WEBPACK_IMPORTED_MODULE_6__["FactuurService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    FactuurDetailModal = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: _raw_loader_html_factuur_detail_modal_component_html__WEBPACK_IMPORTED_MODULE_1___default.a
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_modialog__WEBPACK_IMPORTED_MODULE_3__["DialogRef"],
            _factuur_factuur_service__WEBPACK_IMPORTED_MODULE_6__["FactuurService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], FactuurDetailModal);
    return FactuurDetailModal;
}());



/***/ }),

/***/ "yiA4":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/factuur/html/factuur-generic.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <mafo-panel selector=\"title\" [collapsable]=\"false\" [open]=\"true\">\r\n            <mafo-panel-heading>\r\n                <h3>\r\n                    <span class=\"fa fa-dot-circle-o\" id=\"title-factuur\"></span>&nbsp;\r\n                    {{pageTitle}}\r\n                </h3>\r\n            </mafo-panel-heading>\r\n            <mafo-panel-actions>\r\n                <div id=\"factuur-generatie-melding\">{{factuurGeneratieMelding}}</div>\r\n                <a id=\"genereer-facturen-button\" class=\"btn btn-primary\" [ngClass]=\"{'disabled' : factuurGeneratieRunning }\" *ngIf=\"showGenerateButton && genereer | async\" (click)=\"generateFacturen()\">\r\n                    <i class=\"fa \" [ngClass]=\"{ 'fa-spin': factuurGeneratieRunning, 'fa-refresh': !facturatieAfgerond, 'fa-check':facturatieAfgerond }\"></i>\r\n                    <span class=\"hidden-sm hidden-xs\">&nbsp;&nbsp;Genereer facturen voor volgend semester</span>\r\n                </a>\r\n                <a id=\"sap-button\" class=\"btn btn-primary\" [ngClass]=\"{'disabled' : factuurGeneratieRunning  || geenFacturen }\" *ngIf=\"showSendToSapButton && stuurDoorNaarSap | async\" (click)=\"sendFacturenToSAP()\">\r\n                    <i class=\"fa fa-envelope\"></i>\r\n                    <span class=\"hidden-sm hidden-xs\">&nbsp;&nbsp;{{sapButtonText}}</span>\r\n                </a>\r\n            </mafo-panel-actions>\r\n            <mafo-panel-body>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div *ngIf=\"hasMateriaalCodeError\" class=\"alert alert-danger\" role=\"alert\">\r\n                            {{errorMessage}} Het instellen van de SAP materiaalcode gebeurt bij <a routerLink=\"/beheer/variabelen/standplaatssapmateriaalcode\">Beheer Variabelen</a>.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\">\r\n                            <form [formGroup]=\"searchForm\">\r\n                                <form-group>\r\n                                    <search (search)=\"searchFacturen($event)\" formControlName=\"searchField\"></search>\r\n                                </form-group>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                    <br />\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <dp-datagrid [data]=\"data\" [options]=\"gridOptions\" (fetchData)=\"fetchData($event)\" (rowClicked)=\"rowClicked($event)\">\r\n                                <ng-template #rowTemplate let-item=\"item\" let-index=\"index\">\r\n                                    <td>{{item.createdOn | date: 'dd/MM/yyyy'}}</td>\r\n                                    <td>{{item.klant.firmanaam | nullSafe}}</td>\r\n                                    <td>{{item.klant.ondernemingsnr | nullSafe}}</td>\r\n                                    <td>{{item.district.omschrijving | nullSafe}}</td>\r\n                                    <td>{{item.factuurNummer | nullSafe}}</td>\r\n                                    <td>€ {{item.bedrag | nullSafe}}</td>\r\n                                </ng-template>\r\n                                <ng-template #rowActions let-item=\"item\" let-index=\"index\">\r\n                                    <button title=\"Detail\" class=\"btn btn-default btn-xs btn-info\" [attr.data-id]=\"item.id\" (click)=\"showDetailModal(item.id)\">\r\n                                        <i class=\"fa fa-info\"></i>\r\n                                    </button>\r\n                                </ng-template>\r\n                            </dp-datagrid>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mafo-panel-body>\r\n        </mafo-panel>\r\n    </div>\r\n</div>"

/***/ })

}]);
//# sourceMappingURL=factuur-factuur-module.js.map