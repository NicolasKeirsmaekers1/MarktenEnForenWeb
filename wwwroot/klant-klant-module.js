(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["klant-klant-module"],{

/***/ "/bNh":
/*!*********************************************!*\
  !*** ./ClientApp/app/klant/klant.module.ts ***!
  \*********************************************/
/*! exports provided: KlantModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlantModule", function() { return KlantModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_service_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/service.module */ "1g0q");
/* harmony import */ var _klant_module_definitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./klant.module.definitions */ "tTTl");
/* harmony import */ var _componenten_klant_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componenten/klant-core */ "TDej");
/* harmony import */ var _klant_resolve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./klant.resolve */ "/01Y");







var KlantModule = /** @class */ (function () {
    function KlantModule() {
    }
    KlantModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _services_service_module__WEBPACK_IMPORTED_MODULE_3__["ServiceModule"],
                _componenten_klant_core__WEBPACK_IMPORTED_MODULE_5__["KlantCoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_klant_module_definitions__WEBPACK_IMPORTED_MODULE_4__["routes"]))
            ],
            providers: [
                _klant_resolve__WEBPACK_IMPORTED_MODULE_6__["KlantResolve"]
            ],
            declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_klant_module_definitions__WEBPACK_IMPORTED_MODULE_4__["klantComponents"]),
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], KlantModule);
    return KlantModule;
}());



/***/ }),

/***/ "Re1L":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/klant/html/klant-detail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<klant-detail [selectType]=\"selectType\" [klant]=\"klant\"></klant-detail>"

/***/ }),

/***/ "USFS":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/klant/html/klant-overview.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <mafo-panel selector=\"title\" [collapsable]=\"false\" [open]=\"true\">\r\n            <mafo-panel-heading>\r\n                <h3 id=\"title-klanten\">\r\n                    <span class=\"fa fa-users\"></span>&nbsp;\r\n                    {{pageTitle}} \r\n                </h3>\r\n            </mafo-panel-heading>\r\n            <mafo-panel-actions>\r\n                <a *ngIf=\"(addKlant | async) || (updateKlant | async)\" id=\"new-klant-button\" class=\"btn btn-primary pull-right\" routerLink=\"/klant/nieuw\">\r\n                    <i class=\"fa fa-plus\"></i>\r\n                    <span class=\"hidden-sm hidden-xs\">&nbsp;&nbsp;Nieuwe Klant</span>\r\n                </a>\r\n            </mafo-panel-actions>\r\n            <mafo-panel-body>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <search (search)=\"searchKlanten($event)\"></search>\r\n                    </div>\r\n                </div>\r\n                <br />\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12\">\r\n                        <dp-datagrid [data]=\"data\" [options]=\"gridOptions\" (fetchData)=\"fetchData($event)\" (rowClicked)=\"rowClicked($event)\">\r\n                            <ng-template #rowTemplate let-item=\"item\" let-index=\"i\">\r\n                                <td>\r\n                                    {{item.firmanaam}}\r\n                                </td>\r\n                                <td>\r\n                                    {{item.ondernemingsnr}}\r\n                                </td>\r\n                                <td>{{item.contactPersoon}}</td>\r\n                                <td>{{item.telefoon}}</td>\r\n                            </ng-template>\r\n                            <ng-template #rowActions let-item=\"item\" let-index=\"index\">\r\n                                <button *ngIf=\"deleteKlant\" title=\"Verwijderen\" class=\"btn btn-danger btn-xs btn-delete\" [attr.data-id]=\"item.id\" (click)=\"showDeleteModal(item)\">\r\n                                    <i class=\"fa fa-trash-o\"></i>\r\n                                </button>\r\n                            </ng-template>\r\n                        </dp-datagrid>\r\n                    </div>\r\n                </div>\r\n            </mafo-panel-body>\r\n        </mafo-panel>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "dMPE":
/*!*********************************************************!*\
  !*** ./ClientApp/app/klant/klant-overview.component.ts ***!
  \*********************************************************/
/*! exports provided: KlantOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlantOverviewComponent", function() { return KlantOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_klant_overview_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/klant-overview.component.html */ "USFS");
/* harmony import */ var _raw_loader_html_klant_overview_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_klant_overview_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-modialog/plugins/bootstrap */ "e7Ax");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth */ "qec8");
/* harmony import */ var _componenten_datagrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componenten/datagrid */ "z4/g");
/* harmony import */ var _componenten_klant_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componenten/klant-core */ "TDej");









var KlantOverviewComponent = /** @class */ (function () {
    function KlantOverviewComponent(klantService, router, modal, route, toastr, auth) {
        this.klantService = klantService;
        this.router = router;
        this.modal = modal;
        this.route = route;
        this.toastr = toastr;
        this.auth = auth;
        this.commercieel = true;
        this.gridOptions = {
            stripedRows: true,
            fields: [
                {
                    field: 'firmanaam',
                    title: 'Firmanaam',
                    sortable: true,
                    sort: _componenten_datagrid__WEBPACK_IMPORTED_MODULE_7__["SortOrder"].Ascending,
                    width: '25%',
                },
                {
                    field: 'ondernemingsnr',
                    title: 'Ondernemingsnummer',
                    width: '25%',
                },
                {
                    field: 'contactPersoon',
                    title: 'Contactpersoon',
                    width: '25%',
                },
                {
                    field: 'telefoon',
                    title: 'Telefoon',
                    width: '25%',
                },
            ],
        };
        this.commercieel = this.route.snapshot.data['commercieel'];
        this.pageTitle =
            (this.commercieel ? 'Commerciële' : 'Niet-commerciële') + ' klanten';
    }
    KlantOverviewComponent.prototype.fetchData = function (page) {
        var _this = this;
        if (!this.page)
            this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }
        this.klantService.getAll(this.commercieel, undefined, this.page).subscribe(function (x) {
            _this.data = x;
        }, function (x) { return _this.toastr.error('Kon de klanten niet inladen'); });
    };
    KlantOverviewComponent.prototype.rowClicked = function (row) {
        this.router.navigate(['klant', row.data.id]);
    };
    KlantOverviewComponent.prototype.searchKlanten = function ($event) {
        if (this.page) {
            this.page.page = 1;
            this.page['filter'] = $event.value;
            this.fetchData(this.page);
        }
    };
    KlantOverviewComponent.prototype.showDeleteModal = function ($event) {
        var _this = this;
        this.modal
            .confirm()
            .title('Bevestig verwijderen')
            .body('Weet u zeker dat u deze klant wilt verwijderen?')
            .okBtn('verwijderen')
            .open()
            .result.catch() // catch error not related to the result (modal open...)
            .then(function (dialog) { return dialog.result; }) // dialog has more properties,lets just return the promise for a result.
            .then(function (x) { return _this.delete($event.id); }) // if were here ok was clicked.
            .catch(function (x) { }); // if were here cancel was clicked.
    };
    KlantOverviewComponent.prototype.delete = function (klantId) {
        var _this = this;
        this.klantService.delete(klantId).subscribe(function () {
            _this.fetchData(_this.page);
        }, function (x) {
            if (x.ExtraInfo) {
                for (var xtra in x.ExtraInfo) {
                    _this.toastr.warning(xtra, x.ExtraInfo[xtra].join(','));
                }
            }
        });
    };
    KlantOverviewComponent.prototype.ngOnInit = function () {
        this.security();
    };
    KlantOverviewComponent.prototype.security = function () {
        this.addKlant = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_6__["Privilege"].Klant.Add);
        this.deleteKlant = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_6__["Privilege"].Klant.Delete);
    };
    KlantOverviewComponent.ctorParameters = function () { return [
        { type: _componenten_klant_core__WEBPACK_IMPORTED_MODULE_8__["KlantService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _auth__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
    ]; };
    KlantOverviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: _raw_loader_html_klant_overview_component_html__WEBPACK_IMPORTED_MODULE_1___default.a,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_componenten_klant_core__WEBPACK_IMPORTED_MODULE_8__["KlantService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _auth__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], KlantOverviewComponent);
    return KlantOverviewComponent;
}());



/***/ }),

/***/ "iUTb":
/*!*******************************************************!*\
  !*** ./ClientApp/app/klant/klant-detail.component.ts ***!
  \*******************************************************/
/*! exports provided: KlantDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlantDetailComponent", function() { return KlantDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_klant_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/klant-detail.component.html */ "Re1L");
/* harmony import */ var _raw_loader_html_klant_detail_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_klant_detail_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _componenten_klant_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componenten/klant-core */ "TDej");





var KlantDetailComponent = /** @class */ (function () {
    function KlantDetailComponent(route) {
        this.route = route;
        this.selectType = false;
    }
    KlantDetailComponent.prototype.ngOnInit = function () {
        this.selectType = this.route.snapshot.data['selectType'] || false;
        this.klant = this.route.snapshot.data['klant'] || {
            id: 0,
            isCommercieel: true,
            firmanaam: "",
            ondernemingsnr: "",
            telefoon: "",
            gsm: "",
            email: "",
            fax: "",
            contactPersonen: [new _componenten_klant_core__WEBPACK_IMPORTED_MODULE_4__["Persoon"](true)]
        };
    };
    KlantDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    KlantDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: _raw_loader_html_klant_detail_component_html__WEBPACK_IMPORTED_MODULE_1___default.a
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], KlantDetailComponent);
    return KlantDetailComponent;
}());



/***/ }),

/***/ "tTTl":
/*!*********************************************************!*\
  !*** ./ClientApp/app/klant/klant.module.definitions.ts ***!
  \*********************************************************/
/*! exports provided: klantComponents, klantDirectives, klantPipes, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "klantComponents", function() { return klantComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "klantDirectives", function() { return klantDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "klantPipes", function() { return klantPipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _klant_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./klant-detail.component */ "iUTb");
/* harmony import */ var _klant_overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./klant-overview.component */ "dMPE");
/* harmony import */ var _klant_resolve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./klant.resolve */ "/01Y");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth */ "qec8");




var klantComponents = [
    _klant_detail_component__WEBPACK_IMPORTED_MODULE_0__["KlantDetailComponent"],
    _klant_overview_component__WEBPACK_IMPORTED_MODULE_1__["KlantOverviewComponent"]
];
var klantDirectives = [];
var klantPipes = [];
var routes = [
    {
        path: "nieuw",
        component: _klant_detail_component__WEBPACK_IMPORTED_MODULE_0__["KlantDetailComponent"],
        canActivate: [_auth__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
            privileges: [_auth__WEBPACK_IMPORTED_MODULE_3__["Privilege"].Klant.Add]
        }
    },
    {
        path: "commercieel",
        component: _klant_overview_component__WEBPACK_IMPORTED_MODULE_1__["KlantOverviewComponent"],
        data: {
            commercieel: true,
            privileges: [_auth__WEBPACK_IMPORTED_MODULE_3__["Privilege"].Klant.GetCommerciele]
        },
        canActivate: [_auth__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: "nietcommercieel",
        component: _klant_overview_component__WEBPACK_IMPORTED_MODULE_1__["KlantOverviewComponent"],
        canActivate: [_auth__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
            commercieel: false,
            privileges: [_auth__WEBPACK_IMPORTED_MODULE_3__["Privilege"].Klant.GetNietCommerciele]
        }
    },
    {
        path: ":id",
        component: _klant_detail_component__WEBPACK_IMPORTED_MODULE_0__["KlantDetailComponent"],
        resolve: {
            klant: _klant_resolve__WEBPACK_IMPORTED_MODULE_2__["KlantResolve"]
        },
        canActivate: [_auth__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
            privileges: [_auth__WEBPACK_IMPORTED_MODULE_3__["Privilege"].Klant.Get]
        }
    },
    {
        path: "",
        redirectTo: "commercieel",
        canActivate: [_auth__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
            privileges: [_auth__WEBPACK_IMPORTED_MODULE_3__["Privilege"].Klant.GetCommerciele]
        }
    }
];


/***/ })

}]);
//# sourceMappingURL=klant-klant-module.js.map