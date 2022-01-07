(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wachtlijst-wachtlijst-module"],{

/***/ "3/Co":
/*!****************************************************************************!*\
  !*** ./ClientApp/app/wachtlijst/wachtlijst-registratie.markt.component.ts ***!
  \****************************************************************************/
/*! exports provided: WachtlijstRegistratieMarktComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WachtlijstRegistratieMarktComponent", function() { return WachtlijstRegistratieMarktComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_wachtlijst_registratie_markt_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/wachtlijst-registratie.markt.component.html */ "PRaj");
/* harmony import */ var _raw_loader_html_wachtlijst_registratie_markt_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_wachtlijst_registratie_markt_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core */ "BxFb");
/* harmony import */ var _services_markt_wachtlijst_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/markt-wachtlijst.service */ "5urO");







var WachtlijstRegistratieMarktComponent = /** @class */ (function () {
    function WachtlijstRegistratieMarktComponent(marktWachtlijstService, toastr, router, route) {
        this.marktWachtlijstService = marktWachtlijstService;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.gridOptions = {
            stripedRows: true,
            fields: [
                {
                    field: "district.omschrijving",
                    title: "Type"
                },
                {
                    field: "dagVanDeWeek.omschrijving",
                    title: "Nr"
                },
                {
                    field: "locatie.naam",
                    title: "OND"
                },
                {
                    field: "naam",
                    title: "Bedrijfsnaam"
                },
                {
                    field: "naam",
                    title: "Uitgesteld"
                },
                {
                    field: "",
                    title: ""
                }
            ]
        };
    }
    WachtlijstRegistratieMarktComponent.prototype.ngOnInit = function () {
        this.markt = this.route.snapshot.data["markt"];
    };
    WachtlijstRegistratieMarktComponent.prototype.fetchData = function (page) {
        var _this = this;
        if (!this.page)
            this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }
        this.marktWachtlijstService.getWachtlijst(this.markt.id, this.page).subscribe(function (x) {
            _this.data = x;
            var filter = _this.data.embedded.resourceList.filter(function (item) { return item.verkoopCode === _core__WEBPACK_IMPORTED_MODULE_5__["ApplicationConstants"].Verkoop.Demonstreerder || item.soortCode === _core__WEBPACK_IMPORTED_MODULE_5__["ApplicationConstants"].AanvraagSoort.RuilingCode; });
            if (filter && filter.length > 0 && _this.data.embedded.resourceList.length !== filter.length) {
                filter[filter.length - 1]["priorityItem"] = true;
            }
        }, function (error) {
            _this.toastr.error("Kon de registraties niet inladen");
        });
    };
    ;
    WachtlijstRegistratieMarktComponent.prototype.rowClicked = function (row) {
        this.router.navigate(["wachtlijst", "registratie", row.data.aanvraagId]);
    };
    WachtlijstRegistratieMarktComponent.ctorParameters = function () { return [
        { type: _services_markt_wachtlijst_service__WEBPACK_IMPORTED_MODULE_6__["MarktWachtlijstService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    WachtlijstRegistratieMarktComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: _raw_loader_html_wachtlijst_registratie_markt_component_html__WEBPACK_IMPORTED_MODULE_1___default.a,
            styles: ["td.priority-item { border-bottom: 0px solid black !important;}"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_markt_wachtlijst_service__WEBPACK_IMPORTED_MODULE_6__["MarktWachtlijstService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WachtlijstRegistratieMarktComponent);
    return WachtlijstRegistratieMarktComponent;
}());



/***/ }),

/***/ "5urO":
/*!************************************************************!*\
  !*** ./ClientApp/app/services/markt-wachtlijst.service.ts ***!
  \************************************************************/
/*! exports provided: MarktWachtlijstService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarktWachtlijstService", function() { return MarktWachtlijstService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "BxFb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.settings */ "HRaI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-slim-loading-bar */ "k+RO");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6__);







var MarktWachtlijstService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MarktWachtlijstService, _super);
    function MarktWachtlijstService(http, loader) {
        var _this = _super.call(this, http, loader) || this;
        _this.http = http;
        _this.loader = loader;
        _this.url = _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + 'marketwaitinglists/';
        return _this;
    }
    MarktWachtlijstService.prototype.getRegistratieWachtlijstOverizcht = function (query) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
        if (query) {
            if (query.page)
                params = params.set("page", query.page.toString());
            if (query.pageSize)
                params = params.set("pageSize", query.pageSize.toString());
            if (query.query)
                params = params.set("query", query.query);
            if (query.sort && query.sort.length > 0)
                params = params.set("sort", query.sort.join(","));
            if (query.district)
                params = params.set("district", query.district);
            if (query.toeTeWijzen)
                params = params.set("toeTeWijzen", query.toeTeWijzen);
        }
        this.loader.start();
        return this.http.get(this.url, { headers: this.jsonHeaders, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (x) { return _this.loader.complete(); }));
    };
    MarktWachtlijstService.prototype.getWachtlijst = function (marktId, query) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
        if (query) {
            if (query.page)
                params = params.set("page", query.page.toString());
            if (query.pageSize)
                params = params.set("pageSize", query.pageSize.toString());
            if (query.query)
                params = params.set("query", query.query);
        }
        this.loader.start();
        return this.http.get(this.url + marktId + "/waitinglists", { headers: this.jsonHeaders, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (x) { return _this.loader.complete(); }));
    };
    MarktWachtlijstService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6__["SlimLoadingBarService"] }
    ]; };
    MarktWachtlijstService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6__["SlimLoadingBarService"]])
    ], MarktWachtlijstService);
    return MarktWachtlijstService;
}(_core__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "9R9U":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/wachtlijst/html/wachtlijst-intake.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <mafo-panel selector=\"title\" [collapsable]=\"false\" [open]=\"true\">\r\n            <mafo-panel-heading>\r\n                <h3>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-10\" id=\"title-intake\">\r\n                            <span class=\"fa fa-dot-circle-o\"></span>&nbsp;\r\n                            {{pageTitle}}\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div *ngIf=\"intake\">\r\n                                <a *ngIf=\"addAanvraag | async\" id=\"new-intake-button\" class=\"btn btn-primary pull-right\" routerLink=\"/wachtlijst/intake/klant\">\r\n                                    <i class=\"fa fa-plus\"></i>\r\n                                    <span class=\"hidden-sm hidden-xs\">&nbsp;&nbsp;Nieuwe intake</span>\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </h3>\r\n            </mafo-panel-heading>\r\n            <mafo-panel-body>\r\n                <div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <search (search)=\"searchIntakes($event)\"></search>\r\n                        </div>\r\n                    </div>\r\n                    <hr />\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <dp-datagrid [data]=\"data\" [options]=\"gridOptions\" (fetchData)=\"fetchData($event)\" (rowClicked)=\"rowClicked($event)\">\r\n                                <ng-template #rowTemplate let-item=\"item\" let-index=\"index\">\r\n                                    <td>{{item.datum | date: 'dd/MM/yyyy'}}</td>\r\n                                    <td>{{item.ondernemingsNr | stringformat: 'xxxx.xxx.xxx'}}</td>\r\n                                    <td>{{item.firmanaam}}</td>\r\n                                    <td>\r\n                                        <code-display type=\"aanvraagsoort\" [value]=\"item.soort\"></code-display>\r\n                                    </td>\r\n                                    <td>\r\n                                        <span class=\"markt-in-overview\"><span class=\"badge\">{{item.markten[0]}}</span></span>\r\n                                        <span *ngIf=\"item.markten.length > 1\" [attr.title]=\"marktenTooltip(item.markten)\" class=\"markt-in-overview\"><span class=\"badge\">+{{item.markten.length-1}}</span></span>\r\n                                    </td>\r\n                                </ng-template>\r\n                                <ng-template #rowActions let-item=\"item\" let-index=\"index\">\r\n                                    <button title=\"Edit\" *ngIf=\"updateAanvraag\" class=\"btn btn-primary btn-xs btn-delete\" [attr.data-id]=\"item.id\" (click)=\"edit(item)\">\r\n                                        <i class=\"fa fa-pencil\"></i>\r\n                                    </button>\r\n                                    <button title=\"Verwijderen\" *ngIf=\"deleteAanvraag | async\" class=\"btn btn-danger btn-xs btn-delete\" [attr.data-id]=\"item.id\" (click)=\"showDeleteModal(item)\">\r\n                                        <i class=\"fa fa-trash-o\"></i>\r\n                                    </button>\r\n                                </ng-template>\r\n                            </dp-datagrid>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mafo-panel-body>\r\n        </mafo-panel>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "AE+a":
/*!************************************************************************!*\
  !*** ./ClientApp/app/wachtlijst/wachtlijst-intake-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: WachtlijstIntakeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WachtlijstIntakeDetailComponent", function() { return WachtlijstIntakeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_wachtlijst_intake_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/wachtlijst-intake-detail.component.html */ "SCRV");
/* harmony import */ var _raw_loader_html_wachtlijst_intake_detail_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_wachtlijst_intake_detail_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-modialog/plugins/bootstrap */ "e7Ax");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth */ "qec8");
/* harmony import */ var _componenten_markt_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../componenten/markt-select */ "3vM0");
/* harmony import */ var _componenten_product_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../componenten/product-select */ "yxRt");
/* harmony import */ var _componenten_validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../componenten/validators */ "2/Vv");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core */ "BxFb");
/* harmony import */ var _services_aanvraag_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/aanvraag.service */ "TpEi");
/* harmony import */ var _services_abonnement_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/abonnement.service */ "nzAR");
/* harmony import */ var _services_intake_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/intake.service */ "ubql");
/* harmony import */ var _shared_helper_datetimehelper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/helper/datetimehelper */ "CS9P");

















var WachtlijstIntakeDetailComponent = /** @class */ (function () {
    function WachtlijstIntakeDetailComponent(toastr, route, fb, aanvraagService, abonnementService, auth, router, modal, dateTimeHelper, validationService, intakeService) {
        this.toastr = toastr;
        this.route = route;
        this.fb = fb;
        this.aanvraagService = aanvraagService;
        this.abonnementService = abonnementService;
        this.auth = auth;
        this.router = router;
        this.modal = modal;
        this.dateTimeHelper = dateTimeHelper;
        this.validationService = validationService;
        this.intakeService = intakeService;
        this.aanvraagSoort = _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagSoort;
        this.aantalKavels = 0;
        this.teBetalen = 0;
        this.isRuiling = false;
        this.deleted = false;
        this.marktDisabled = false;
        this.geregistreerd = false;
        this.maxKavels = 8;
        this.page = { page: 1, pageSize: Number.MAX_VALUE, sort: [''] };
        this.abonnementSearchCriteria = {
            marktId: 0,
            query: '',
            productId: 0,
            verkoopCode: '',
            statusCode: '',
            beginDatum: null,
            eindDatum: null,
            klantId: 0,
        };
        this.disabled = false;
    }
    Object.defineProperty(WachtlijstIntakeDetailComponent.prototype, "producten", {
        get: function () {
            return this.intakeForm.get('producten');
        },
        enumerable: false,
        configurable: true
    });
    WachtlijstIntakeDetailComponent.prototype.ngOnInit = function () {
        this.klant = this.route.snapshot.data['klant'] || {};
        this.intake = this.route.snapshot.data['intake'] || {
            id: 0,
            soortCode: '',
            uitstallingCode: '',
            verkoopCode: '',
            elektriciteitCode: '',
            opmerking: '',
            isBetaald: false,
            isDocumentenOk: false,
            isUitgesteld: false,
            producten: [],
            aanvraagMarkten: [],
            klantId: 0,
            officieleInschrijvingsDatum: '',
            statusCode: _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Intake,
        };
        this.klantId =
            this.intake.statusCode === _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Intake &&
                this.intake.id === 0
                ? this.klant.id
                : this.intake.klantId;
        this.buildForm();
        this.setModus();
        if (typeof this.intake.deletedOn !== 'undefined' &&
            this.intake.deletedOn != null) {
            this.deleted = true;
            this.intakeForm.get('soortCode').disable();
            this.intakeForm.get('uitstallingCode').disable();
            this.intakeForm.get('verkoopCode').disable();
            this.intakeForm.get('elektriciteitCode').disable();
            this.intakeForm.get('opmerking').disable();
            this.intakeForm.get('isBetaald').disable();
            this.intakeForm.get('officieleInschrijvingsDatum').disable();
            this.intakeForm.get('isDocumentenOk').disable();
            this.intakeForm.get('isUitgesteld').disable();
            this.intakeForm.get('uitgesteldDatum').disable();
        }
        if (this.intake.soortCode ==
            _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagSoort.PlaatsKwijtgeraaktCode) {
            this.marktDisabled = true;
        }
        if (this.intake.id !== 0) {
            this.getTotaalAantalKavels(this.intake.aanvraagMarkten);
        }
    };
    WachtlijstIntakeDetailComponent.prototype.buildForm = function () {
        this.intakeForm = this.fb.group({
            id: [this.intake.id],
            soortCode: [
                { value: this.intake.soortCode, disabled: this.intake.id > 0 },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ],
            uitstallingCode: [this.intake.uitstallingCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            verkoopCode: [this.intake.verkoopCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            elektriciteitCode: [this.intake.elektriciteitCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            opmerking: [this.intake.opmerking],
            isBetaald: [this.intake.isBetaald],
            isDocumentenOk: [this.intake.isDocumentenOk],
            isUitgesteld: [this.intake.isUitgesteld],
            klantId: [this.klantId],
            officieleInschrijvingsDatum: [this.intake.officieleInschrijvingsDatum],
            uitgesteldDatum: [this.intake.uitgesteldDatum],
            statusCode: [this.intake.statusCode],
            datum: [this.intake.datum],
        });
    };
    WachtlijstIntakeDetailComponent.prototype.getTotaalAantalKavels = function (aanvraagMarkten) {
        for (var _i = 0, aanvraagMarkten_1 = aanvraagMarkten; _i < aanvraagMarkten_1.length; _i++) {
            var aanvraagmarkt = aanvraagMarkten_1[_i];
            this.aantalKavels += aanvraagmarkt.aantalKavels;
        }
        if (this.intake.soortCode ==
            _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagSoort.PlaatsKwijtgeraaktCode ||
            this.intake.soortCode ==
                _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagSoort.NieuwePlaatsCode) {
            this.teBetalen = this.aantalKavels * 5;
        }
        else {
            this.teBetalen = 5;
        }
    };
    WachtlijstIntakeDetailComponent.prototype.marktenChanged = function ($event) {
        var totaalAantalKavels = $event
            .map(function (x) { return x.aantalKavels; })
            .reduce(function (a, b) { return a + b; }, 0);
        if (this.intake.soortCode ==
            _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagSoort.PlaatsKwijtgeraaktCode ||
            this.intake.soortCode ==
                _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagSoort.NieuwePlaatsCode ||
            this.intakeForm.get('soortCode').value ==
                _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagSoort.NieuwePlaatsCode ||
            this.intakeForm.get('soortCode').value ==
                _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagSoort.PlaatsKwijtgeraaktCode) {
            this.teBetalen = totaalAantalKavels * 5;
        }
        else {
            this.teBetalen = 5;
        }
        this.aantalKavels = totaalAantalKavels;
    };
    WachtlijstIntakeDetailComponent.prototype.isBetaaldChanged = function ($event) {
        if ($event && !this.intakeForm.get('officieleInschrijvingsDatum').value) {
            this.intakeForm.get('officieleInschrijvingsDatum').setValue(new Date());
        }
        else {
            this.intakeForm.get('officieleInschrijvingsDatum').setValue(null);
        }
    };
    WachtlijstIntakeDetailComponent.prototype.statusChange = function () {
        var valid = true;
        if (this.intake.soortCode !==
            _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagSoort.PlaatsKwijtgeraaktCode) {
            if (!this.validateMarkten()) {
                this.toastr.info('Kies ten minste 1 markt', 'Aanvraag bewaren');
                valid = false;
            }
        }
        if (!this.validateProducten() &&
            (this.intakeForm.value.soortCode ===
                _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagSoort.NieuwePlaatsCode ||
                this.intakeForm.value.soortCode ===
                    _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagSoort.PlaatsKwijtgeraaktCode)) {
            this.toastr.info('Kies ten minste 1 product', 'Aanvraag bewaren');
            valid = false;
        }
        var hasMain = false;
        if (this.validateProducten()) {
            for (var i = 0; i < this.intakeForm.value.producten.length; i++) {
                if (this.intakeForm.value.producten[i].isHoofdcategorie) {
                    hasMain = true;
                }
            }
            if (!hasMain) {
                this.toastr.warning('Kies ten minste 1 hoofdproduct', 'Aanvraag bewaren');
                valid = false;
            }
        }
        if (!this.intakeForm.valid && !valid)
            this.intakeForm.markAsDirty();
        else {
            switch (this.intake.statusCode) {
                case _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Intake:
                    this.preregistreren();
                    break;
                case _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Gepreregistreerd:
                    this.registreren();
                    break;
            }
        }
    };
    WachtlijstIntakeDetailComponent.prototype.preregistreren = function () {
        if (!this.validateDocuments())
            this.toastr.info("Kan aanvraag niet naar 'gepreregistreerd' zetten omdat de documenten nog niet in orde zijn.");
        else
            this.showPreregistratieModal();
    };
    WachtlijstIntakeDetailComponent.prototype.registreren = function () {
        var valid = true;
        if (!this.validateDocuments()) {
            this.toastr.info("Kan aanvraag niet naar 'geregistreerd' zetten omdat de documenten nog niet in orde zijn.");
            valid = false;
        }
        if (this.intakeForm.value.isBetaald == null ||
            this.intakeForm.value.isBetaald === false) {
            this.toastr.info("Kan aanvraag niet naar 'geregistreerd' zetten omdat er nog niet betaald werd.");
            valid = false;
        }
        if (valid)
            this.showRegistratieModal();
    };
    WachtlijstIntakeDetailComponent.prototype.setModus = function () {
        this.directBewarenButton = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_8__["Privilege"].Aanvraag.DirectRegistreren);
        this.directBewarenButtonText = 'Direct registreren';
        switch (this.intake.statusCode) {
            case _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Intake:
                if (this.intake.id === 0) {
                    this.title = 'Nieuw intake > ' + this.klant.firmanaam;
                }
                else {
                    this.title = 'Intake bewerken > ' + this.intake.klant.firmanaam;
                    this.statusChangeButton = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_8__["Privilege"].Aanvraag.VeranderNaarGepreregistreerd);
                    this.statusChangeButtonText = 'Pre-registreren';
                }
                this.bewaarButtonText = 'Intake bewaren';
                this.bewaarButton = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_8__["Privilege"].Aanvraag.Add);
                break;
            case _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Gepreregistreerd:
                this.title =
                    'Pre-registratie bewerken > ' + this.intake.klant.firmanaam;
                this.bewaarButtonText = 'Pre-registratie bewaren';
                this.bewaarButton = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_8__["Privilege"].Aanvraag.PreregistratieBewerken);
                this.statusChangeButton = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_8__["Privilege"].Aanvraag.VeranderNaarGepreregistreerd);
                this.statusChangeButtonText = 'Registreren';
                break;
            case _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Geregistreerd:
                this.geregistreerd = true;
                this.title = 'Registratie bewerken > ' + this.intake.klant.firmanaam;
                this.bewaarButtonText = 'Registratie bewaren';
                this.bewaarButton = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_8__["Privilege"].Aanvraag.RegistratieBewerken);
                this.deleteButton = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_8__["Privilege"].Aanvraag.RegistratieVerwijderen);
                break;
        }
    };
    WachtlijstIntakeDetailComponent.prototype.showPreregistratieModal = function () {
        var _this = this;
        this.modal
            .confirm()
            .title('Bevestig pre-registratie')
            .body('Bent u zeker dat u deze intake wilt pre-registreren?')
            .okBtn('Bevestig')
            .open()
            .result.catch() // catch error not related to the result (modal open...)
            .then(function (dialog) { return dialog.result; }) // dialog has more properties, let's just return the promise for a result.
            .then(function (x) {
            return _this.aanvraagService
                .changeStatus(_this.intake.id, _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Gepreregistreerd, _this.intakeForm.getRawValue())
                .subscribe(function (x) {
                _this.router.navigate(['wachtlijst', 'preregistratie']);
            }, function (x) {
                _this.toastr.error("Kan aanvraag niet naar 'gepreregistreerd' zetten.");
                _this.displayErrors(x);
            });
        }) // if we're here, ok was clicked.
            .catch(function (x) { }); // if we're here, cancel was clicked.
    };
    WachtlijstIntakeDetailComponent.prototype.showRegistratieModal = function () {
        var _this = this;
        this.modal
            .confirm()
            .title('Bevestig registratie')
            .body('Bent u zeker dat u deze pre-registratie wilt registreren?')
            .okBtn('Bevestig')
            .open()
            .result.catch() // catch error not related to the result (modal open...)
            .then(function (dialog) { return dialog.result; }) // dialog has more properties, let's just return the promise for a result.
            .then(function (x) {
            return _this.aanvraagService
                .changeStatus(_this.intake.id, _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Geregistreerd, _this.intakeForm.getRawValue())
                .subscribe(function (x) {
                _this.router.navigate(['wachtlijst', 'registratie']);
            }, function (x) {
                var error = 'de status kan niet veranderd worden.';
                _this.toastr.error('de status kan niet veranderd worden.');
                if (_this.toastr.error.length != error.length) {
                    _this.displayErrors(x);
                }
            });
        }) // if we're here, ok was clicked.
            .catch(function (x) { }); // if we're here, cancel was clicked.
    };
    WachtlijstIntakeDetailComponent.prototype.showRegistratieDeleteModal = function () {
        var _this = this;
        var currentDate = this.dateTimeHelper.getCurrentDate();
        var text = '';
        currentDate.setHours(0, 0, 0, 0);
        var geldig = this.intake.officieleInschrijvingsDatum != null &&
            new Date(currentDate) <=
                new Date(this.intake.officieleInschrijvingsDatum) &&
            new Date(currentDate.setFullYear(currentDate.getFullYear() + 1)) >=
                new Date(this.intake.officieleInschrijvingsDatum);
        if (geldig)
            text += 'Het inschrijvingsrecht is nog steeds geldig. ';
        text +=
            'Weet u zeker dat u deze aanvraag wilt verwijderen? Deze actie is onomkeerbaard.';
        this.modal
            .confirm()
            .title('Bevestig verwijderen registratie')
            .body(text.toString())
            .okBtn('Bevestig')
            .open()
            .result.catch() // catch error not related to the result (modal open...)
            .then(function (dialog) { return dialog.result; }) // dialog has more properties, let's just return the promise for a result.
            .then(function (x) {
            return _this.aanvraagService.delete(_this.intake.id).subscribe(function (x) {
                _this.toastr.info('Registratie succesvol verwijderd');
                _this.router.navigate(['wachtlijst', 'registratie']);
            }, function (x) {
                _this.toastr.error('Kon registratie niet verwijderen.');
                _this.displayErrors(x);
            });
        }) // if we're here, ok was clicked.
            .catch(function (x) { }); // if we're here, cancel was clicked.
    };
    WachtlijstIntakeDetailComponent.prototype.showDirectModal = function () {
        var _this = this;
        if (this.intakeForm.value.aanvraagMarkten &&
            this.intakeForm.value.aanvraagMarkten.length > 1) {
            this.toastr.warning('Niet meer dan 1 aanvraagmarkt selecteren!');
            return;
        }
        this.modal
            .confirm()
            .title('Direct registreren')
            .body('Wilt u deze intake rechtstreeks omzetten naar een registratie?')
            .okBtn('Bevestig')
            .open()
            .result.catch() // catch error not related to the result (modal open...)
            .then(function (dialog) { return dialog.result; }) // dialog has more properties, let's just return the promise for a result.
            .then(function (x) {
            return _this.aanvraagService
                .changeStatus(_this.intake.id, _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Geregistreerd, _this.intakeForm.getRawValue())
                .subscribe(function (x) {
                _this.router.navigate(['wachtlijst', 'registratie']);
            }, function (x) {
                _this.toastr.error("Kan aanvraag niet naar 'geregistreerd' zetten.");
                var error = 'de status kan niet veranderd worden.';
                if (_this.toastr.error.length != error.length) {
                    _this.displayErrors(x);
                }
            });
        }) // if we're here, ok was clicked.
            .catch(function (x) { }); // if we're here, cancel was clicked.
    };
    WachtlijstIntakeDetailComponent.prototype.changeSoortCode = function ($event) {
        var _this = this;
        this.intakeForm.get('uitstallingCode').reset();
        this.intakeForm.get('verkoopCode').reset();
        this.intakeForm.get('elektriciteitCode').reset();
        this.teBetalen = 0;
        if (this.marktPanel)
            this.marktPanel.reset();
        if (this.productPanel)
            this.productPanel.reset();
        switch ($event) {
            case _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagSoort.NieuwePlaatsCode:
                this.intakeForm.get('uitstallingCode').enable();
                this.intakeForm.get('verkoopCode').enable();
                this.intakeForm.get('elektriciteitCode').enable();
                this.isRuiling = false;
                this.maxKavels = 8;
                break;
            case _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagSoort.PlaatsKwijtgeraaktCode:
                this.intakeForm.get('uitstallingCode').enable();
                this.intakeForm.get('verkoopCode').enable();
                this.intakeForm.get('elektriciteitCode').enable();
                this.isRuiling = false;
                if (!this.page) {
                    this.page.page = 1;
                    this.page.pageSize = Number.MAX_VALUE;
                    this.page.sort = [''];
                }
                this.abonnementSearchCriteria.klantId = this.klantId;
                this.abonnementSearchCriteria.statusCode =
                    _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AbonnementStatus.IngetrokkenCode;
                this.abonnementService
                    .getAll(this.page, this.abonnementSearchCriteria)
                    .subscribe(function (abonnementen) {
                    if (abonnementen.embedded.resourceList.length > 0) {
                        _this.intakeForm
                            .get('uitstallingCode')
                            .setValue(abonnementen.embedded.resourceList[0].uitstallingCode);
                        _this.intakeForm
                            .get('verkoopCode')
                            .setValue(abonnementen.embedded.resourceList[0].verkoopCode);
                        _this.intakeForm
                            .get('elektriciteitCode')
                            .setValue(abonnementen.embedded.resourceList[0].elektriciteitCode);
                        _this.maxKavels = 0;
                        for (var _i = 0, _a = abonnementen.embedded.resourceList; _i < _a.length; _i++) {
                            var abonnement = _a[_i];
                            if (abonnement.aantalKavels > _this.maxKavels)
                                _this.maxKavels = abonnement.aantalKavels;
                        }
                    }
                    else {
                        _this.toastr.info('Deze klant heeft geen ingetrokken abonnementen.');
                        _this.intakeForm
                            .get('soortCode')
                            .setValue(_core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagSoort.NieuwePlaatsCode);
                    }
                });
                break;
            default:
                this.intakeForm.get('uitstallingCode').disable();
                this.intakeForm.get('verkoopCode').disable();
                this.intakeForm.get('elektriciteitCode').disable();
                this.isRuiling = true;
                this.maxKavels = 8;
                break;
        }
    };
    WachtlijstIntakeDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        var valid = true;
        if (!this.intakeForm.valid) {
            this.toastr.warning('Sommige velden bevatten geen geldige waarden', 'Ongeldig formulier');
            valid = false;
        }
        if (this.intakeForm.value.aanvraagMarkten &&
            this.intakeForm.value.aanvraagMarkten.length > 1) {
            this.toastr.warning('Niet meer dan 1 aanvraagmarkt selecteren!');
            valid = false;
        }
        if (this.intake.soortCode !==
            _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagSoort.PlaatsKwijtgeraaktCode) {
            if (!this.validateMarkten() && this.intakeForm.get('soortCode').value) {
                this.toastr.warning('Kies ten minste 1 markt', 'Aanvraag bewaren');
                valid = false;
            }
        }
        if (!this.validateProducten() &&
            (this.intakeForm.value.soortCode ===
                _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagSoort.NieuwePlaatsCode ||
                this.intakeForm.value.soortCode ===
                    _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagSoort.PlaatsKwijtgeraaktCode)) {
            this.toastr.warning('Kies ten minste 1 product', 'Aanvraag bewaren');
            valid = false;
        }
        var hasMain = false;
        if (this.validateProducten()) {
            for (var i = 0; i < this.intakeForm.value.producten.length; i++) {
                if (this.intakeForm.value.producten[i].isHoofdcategorie) {
                    hasMain = true;
                }
            }
            if (!hasMain) {
                this.toastr.warning('Kies ten minste 1 hoofdproduct', 'Aanvraag bewaren');
                valid = false;
            }
        }
        if (!valid) {
            this.validationService.valideFormGroup(this.intakeForm);
            return;
        }
        this.aanvraagService
            .save(this.intakeForm.getRawValue())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) {
            _this.aanvraag = response;
            _this.intakeForm.patchValue({
                id: _this.intake.id,
                soortCode: _this.intake.soortCode,
                uitstallingCode: _this.intake.uitstallingCode,
                verkoopCode: _this.intake.verkoopCode,
                elektriciteitCode: _this.intake.elektriciteitCode,
                opmerking: _this.intake.opmerking,
                isBetaald: _this.intake.isBetaald,
                isDocumentenOk: _this.intake.isDocumentenOk,
                isUitgesteld: _this.intake.isUitgesteld,
                officieleInschrijvingsDatum: _this.intake.officieleInschrijvingsDatum,
                uitgesteldDatum: _this.intake.uitgesteldDatum,
                statusCode: _this.intake.statusCode,
                datum: _this.intake.datum,
            });
        }))
            .subscribe(function () {
            _this.toastr.success('Aanvraag succesvol bewaard', 'Aanvraag bewaren');
            var route;
            switch (_this.intake.statusCode.toUpperCase()) {
                case 'GEPREREGISTREERD':
                    route = 'preregistratie';
                    break;
                case 'GEREGISTREERD':
                    route = 'registratie';
                    break;
                case 'GERESERVEERD':
                    route = 'reservatie';
                    break;
                default:
                    route = 'intake';
                    break;
            }
            _this.router.navigate(['wachtlijst', route]);
        }, function (x) {
            _this.toastr.error('Aanvraag kon niet worden bewaard.', 'Aanvraag bewaren');
            _this.displayErrors(x);
        });
    };
    WachtlijstIntakeDetailComponent.prototype.validateDocuments = function () {
        return (this.intakeForm.value && this.intakeForm.value.isDocumentenOk === true);
    };
    WachtlijstIntakeDetailComponent.prototype.validateMarkten = function () {
        return (this.intakeForm.value.aanvraagMarkten &&
            this.intakeForm.value.aanvraagMarkten.length > 0);
    };
    WachtlijstIntakeDetailComponent.prototype.validateProducten = function () {
        return (this.intakeForm.value.producten &&
            this.intakeForm.value.producten.length > 0);
    };
    WachtlijstIntakeDetailComponent.prototype.displayErrors = function (x) {
        if (x.ExtraInfo) {
            for (var xtra in x.ExtraInfo) {
                this.toastr.warning(x.ExtraInfo[xtra].join(','), xtra);
            }
        }
    };
    WachtlijstIntakeDetailComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_aanvraag_service__WEBPACK_IMPORTED_MODULE_13__["AanvraagService"] },
        { type: _services_abonnement_service__WEBPACK_IMPORTED_MODULE_14__["AbonnementService"] },
        { type: _auth__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"] },
        { type: _shared_helper_datetimehelper__WEBPACK_IMPORTED_MODULE_16__["DateTimeHelper"] },
        { type: _componenten_validators__WEBPACK_IMPORTED_MODULE_11__["ValidatorService"] },
        { type: _services_intake_service__WEBPACK_IMPORTED_MODULE_15__["IntakeService"] }
    ]; };
    WachtlijstIntakeDetailComponent.propDecorators = {
        marktPanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_componenten_markt_select__WEBPACK_IMPORTED_MODULE_9__["MarktPanelComponent"], { static: false },] }],
        productPanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_componenten_product_select__WEBPACK_IMPORTED_MODULE_10__["ProductPanelComponent"], { static: false },] }]
    };
    WachtlijstIntakeDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: _raw_loader_html_wachtlijst_intake_detail_component_html__WEBPACK_IMPORTED_MODULE_1___default.a,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_aanvraag_service__WEBPACK_IMPORTED_MODULE_13__["AanvraagService"],
            _services_abonnement_service__WEBPACK_IMPORTED_MODULE_14__["AbonnementService"],
            _auth__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"],
            _shared_helper_datetimehelper__WEBPACK_IMPORTED_MODULE_16__["DateTimeHelper"],
            _componenten_validators__WEBPACK_IMPORTED_MODULE_11__["ValidatorService"],
            _services_intake_service__WEBPACK_IMPORTED_MODULE_15__["IntakeService"]])
    ], WachtlijstIntakeDetailComponent);
    return WachtlijstIntakeDetailComponent;
}());



/***/ }),

/***/ "EU32":
/*!********************************************!*\
  !*** ./ClientApp/app/services/aanvraag.ts ***!
  \********************************************/
/*! exports provided: RequestPatchEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPatchEvent", function() { return RequestPatchEvent; });
var RequestPatchEvent = /** @class */ (function () {
    function RequestPatchEvent(init) {
        Object.assign(this, init);
    }
    return RequestPatchEvent;
}());



/***/ }),

/***/ "EVxA":
/*!*********************************************************!*\
  !*** ./ClientApp/app/componenten/alert/alert.module.ts ***!
  \*********************************************************/
/*! exports provided: AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.component */ "NkUj");





var AlertModule = /** @class */ (function () {
    function AlertModule() {
    }
    AlertModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            exports: [_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"]]
        })
    ], AlertModule);
    return AlertModule;
}());



/***/ }),

/***/ "G3V0":
/*!**********************************************************************!*\
  !*** ./ClientApp/app/wachtlijst/wachtlijst-registratie.component.ts ***!
  \**********************************************************************/
/*! exports provided: WachtlijstRegistratieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WachtlijstRegistratieComponent", function() { return WachtlijstRegistratieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_wachtlijst_registratie_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/wachtlijst-registratie.component.html */ "tUjx");
/* harmony import */ var _raw_loader_html_wachtlijst_registratie_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_wachtlijst_registratie_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _componenten_datagrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componenten/datagrid */ "z4/g");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_markt_wachtlijst_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/markt-wachtlijst.service */ "5urO");







var WachtlijstRegistratieComponent = /** @class */ (function () {
    function WachtlijstRegistratieComponent(marktWachtlijstService, toastr, router, route) {
        this.marktWachtlijstService = marktWachtlijstService;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.filter = {
            query: "",
            district: null,
            toeTeWijzen: false,
            wachtlijst: true
        };
        this.gridOptions = {
            stripedRows: true,
            fields: [
                {
                    field: "district.code",
                    title: "District",
                    sortable: true,
                    sort: _componenten_datagrid__WEBPACK_IMPORTED_MODULE_3__["SortOrder"].Ascending
                },
                {
                    field: "dagVanDeWeek.omschrijving",
                    title: "Weekdag",
                    sortable: true
                },
                {
                    field: "locatie.naam",
                    title: "Locatie",
                    sortable: true
                },
                {
                    field: "naam",
                    title: "Markt",
                    sortable: true
                }
            ]
        };
    }
    WachtlijstRegistratieComponent.prototype.fetchData = function (page) {
        var _this = this;
        if (!this.page)
            this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }
        this.page["wachtlijst"] = this.filter.wachtlijst;
        this.page["toeTeWijzen"] = this.filter.toeTeWijzen;
        this.page["district"] = this.filter.district;
        this.page["query"] = this.filter.query;
        this.fetching = true;
        this.marktWachtlijstService.getRegistratieWachtlijstOverizcht(this.page).subscribe(function (x) {
            _this.data = x;
            _this.fetching = false;
        }, function (error) {
            _this.toastr.error("Kon de registraties niet inladen");
            _this.fetching = false;
        });
    };
    ;
    WachtlijstRegistratieComponent.prototype.rowClicked = function (row) {
        this.router.navigate(["wachtlijst", "registratie", "markt", row.data.id]);
    };
    WachtlijstRegistratieComponent.prototype.filterRegistraties = function ($event) {
        if (this.page && this.fetching == false) {
            this.page.page = 1;
            this.fetchData(this.page);
        }
    };
    WachtlijstRegistratieComponent.prototype.districtChanged = function ($event) {
        if (this.page && this.fetching == false) {
            this.page.page = 1;
            this.fetchData(this.page);
        }
    };
    WachtlijstRegistratieComponent.prototype.filterToeTeWijzen = function ($event) {
        if (this.page && this.fetching == false) {
            this.page.page = 1;
            this.fetchData(this.page);
        }
    };
    WachtlijstRegistratieComponent.ctorParameters = function () { return [
        { type: _services_markt_wachtlijst_service__WEBPACK_IMPORTED_MODULE_6__["MarktWachtlijstService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    WachtlijstRegistratieComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: _raw_loader_html_wachtlijst_registratie_component_html__WEBPACK_IMPORTED_MODULE_1___default.a
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_markt_wachtlijst_service__WEBPACK_IMPORTED_MODULE_6__["MarktWachtlijstService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], WachtlijstRegistratieComponent);
    return WachtlijstRegistratieComponent;
}());



/***/ }),

/***/ "Jd6f":
/*!**********************************************************!*\
  !*** ./ClientApp/app/services/aanvraag-markt.service.ts ***!
  \**********************************************************/
/*! exports provided: AanvraagMarktService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AanvraagMarktService", function() { return AanvraagMarktService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core */ "BxFb");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-slim-loading-bar */ "k+RO");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "IheW");






var AanvraagMarktService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AanvraagMarktService, _super);
    function AanvraagMarktService(http, loader) {
        var _this = _super.call(this, http, loader) || this;
        _this.http = http;
        _this.loader = loader;
        _this.url = _this.apiEndpoint + 'marketrequests/';
        return _this;
    }
    AanvraagMarktService.prototype.getAll = function (query) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]();
        if (query) {
            params = params.set("page", query.page.toString());
            params = params.set("pageSize", query.pageSize.toString());
            if (query.filter)
                params = params.set("query.filter", query.filter);
            if (query.aanvraagstatuscode)
                params = params.set("query.aanvraagStatusCode", query.aanvraagstatuscode);
            if (query.hernieuwing)
                params = params.set("query.ishernieuwing", query.hernieuwing);
            if (query.sort && query.sort.length > 0)
                params = params.set("sort", query.sort.join(","));
        }
        this.loader.start();
        return this.http.get(this.url, { headers: this.jsonHeaders, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }));
    };
    AanvraagMarktService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__["SlimLoadingBarService"] }
    ]; };
    AanvraagMarktService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__["SlimLoadingBarService"]])
    ], AanvraagMarktService);
    return AanvraagMarktService;
}(_core__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "Mmvo":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/wachtlijst/html/wachtlijst-reservatie.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <mafo-panel selector=\"title\" [collapsable]=\"false\" [open]=\"true\">\r\n            <mafo-panel-heading>\r\n                <h3 id=\"title-reservatie\">\r\n                    Reservaties\r\n                </h3>\r\n            </mafo-panel-heading>\r\n            <mafo-panel-body>\r\n                <div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <search (search)=\"searchReservaties($event)\"></search>\r\n                        </div>\r\n                    </div>\r\n                    <hr />\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <dp-datagrid [data]=\"data\" [options]=\"gridOptions\" (fetchData)=\"fetchData($event)\" (rowClicked)=\"rowClicked($event)\">\r\n                                <ng-template #rowTemplate let-item=\"item\" let-index=\"index\">\r\n                                    <td [style.color]=\"item.weigeringstermijnGestart === true ? 'green' : 'red'\">\r\n                                        {{item.datum | date: 'dd/MM/yyyy'}}\r\n                                    </td>\r\n                                    <td [style.color]=\"item.weigeringstermijnGestart ? 'green' : 'red'\">{{item.ondernemingsNr| stringformat: 'xxxx.xxx.xxx'}}</td>\r\n                                    <td [style.color]=\"item.weigeringstermijnGestart ? 'green' : 'red'\">{{item.firmanaam}}</td>\r\n                                    <td [style.color]=\"item.weigeringstermijnGestart ? 'green' : 'red'\">\r\n                                        <code-display type=\"aanvraagsoort\" [value]=\"item.soort\"></code-display>\r\n                                    </td>\r\n                                    <td [style.color]=\"item.weigeringstermijnGestart ? 'green' : 'red'\">\r\n                                        <span class=\"markt-in-overview\"><span class=\"badge\">{{item.markten[0]}}</span></span>\r\n                                        <span *ngIf=\"item.markten.length > 1\" [attr.title]=\"marktenTooltip(item.markten)\"><span class=\"badge\">+{{item.markten.length-1}}</span></span>\r\n                                    </td>\r\n                                </ng-template>\r\n                            </dp-datagrid>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mafo-panel-body>\r\n        </mafo-panel>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "NkUj":
/*!************************************************************!*\
  !*** ./ClientApp/app/componenten/alert/alert.component.ts ***!
  \************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_add_observable_fromEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/fromEvent */ "sx9y");
/* harmony import */ var rxjs_add_observable_fromEvent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_observable_fromEvent__WEBPACK_IMPORTED_MODULE_3__);




var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this.text = "";
        this.strongtext = "";
    }
    AlertComponent_1 = AlertComponent;
    var AlertComponent_1;
    AlertComponent.propDecorators = {
        text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        strongtext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    AlertComponent = AlertComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "alert",
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return AlertComponent_1; }), multi: true }
            ],
            template: "\n        <div class=\"alert alert-warning alert-dismissible\" role=\"alert\"><i class=\"fa fa-warning\" > </i>\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            {{text}} \n            <strong *ngIf=\"strongtext\">{{strongtext}}</strong>\n        </div>\n    "
        })
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "PRaj":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/wachtlijst/html/wachtlijst-registratie.markt.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <mafo-panel selector=\"title\" [collapsable]=\"false\" [open]=\"true\">\r\n            <mafo-panel-heading>\r\n                <h3><strong>Wachtlijst</strong></h3>\r\n                <h5>\r\n                    <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>&nbsp;\r\n                    <code-display type=\"district\" [value]=\"markt.districtCode\"></code-display>&nbsp;&nbsp;\r\n                    <i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"></i>&nbsp;\r\n                    <location-display [value]=\"markt.locatieId\"></location-display>&nbsp;&nbsp;\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>&nbsp;\r\n                    <code-display type=\"dagvandeweek\" [value]=\"markt.dagVanDeWeekCode\"></code-display>\r\n                </h5>\r\n            </mafo-panel-heading>\r\n            <mafo-panel-body>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12\">\r\n                        <dp-datagrid [data]=\"data\" [options]=\"gridOptions\" (fetchData)=\"fetchData($event)\" (rowClicked)=\"rowClicked($event)\">\r\n                            <ng-template #rowTemplate let-item=\"item\" let-index=\"index\">\r\n                                <td [ngClass]=\"{'priority-item': item.priorityItem}\">\r\n                                    <code-display type=\"AanvraagSoort\" [value]=\"item?.soortCode\"></code-display><span *ngIf=\"item.verkoopCode === 'DEMONSTREERDER'\">&nbsp;(Demo)</span>\r\n                                </td>\r\n                                <td [ngClass]=\"{'priority-item': item.priorityItem}\">\r\n                                    {{item.volgnummer + 1}}\r\n                                </td>\r\n                                <td [ngClass]=\"{'priority-item': item.priorityItem}\">\r\n                                    {{item.ondernemingsNummer| stringformat: 'xxxx.xxx.xxx'}}\r\n                                </td>\r\n                                <td [ngClass]=\"{'priority-item': item.priorityItem}\">\r\n                                    {{item.firmanaam}}\r\n                                </td>\r\n                                <td [ngClass]=\"{'priority-item': item.priorityItem}\">\r\n                                    {{item.UitgesteldDatum | nullSafe}}\r\n                                </td>\r\n                                <td [ngClass]=\"{'priority-item': item.priorityItem}\">\r\n                                    <span title=\"Aantal aangevraagde kavels\" class=\"badge\" [ngClass]=\"{'bg-red': item.toewijsbareKavels!=0}\">\r\n                                        {{item.aangevraagdeKavels}}\r\n                                    </span>\r\n                                </td>\r\n                            </ng-template>\r\n                        </dp-datagrid>\r\n                    </div>\r\n                </div>\r\n            </mafo-panel-body>\r\n        </mafo-panel>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "SCRV":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/wachtlijst/html/wachtlijst-intake-detail.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"intake && intakeForm\">\r\n    <form [formGroup]=\"intakeForm\" ngNoForm autocomplete=\"off\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n                <alert *ngIf=\"intake.id > 0 && !intakeForm.get('isBetaald').value\" text=\"Inschrijvingsgeld aanvraag\" strongtext=\"nog niet betaald\"></alert>\r\n                <alert *ngIf=\"intake.id > 0 && !intakeForm.get('isDocumentenOk').value\" text=\"Documenten aanvraag\" strongtext=\"nog niet gecontroleerd\"></alert>\r\n\r\n                <mafo-panel selector=\"title\" [collapsable]=\"false\" [open]=\"true\" [edit]=\"!deleted\">\r\n                    <mafo-panel-heading>\r\n                        <h3 id=\"title-nieuwe-intake\">{{title}}\r\n                            <span class=\"badge pull-right\" style=\"margin: 2px; background-color: red\" *ngIf=\"deleted\">DELETED</span>\r\n                        </h3>\r\n\r\n                    </mafo-panel-heading>\r\n                    <mafo-panel-body>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <form-group label=\"Soort\">\r\n                                    <code-select type=\"Aanvraagsoort\" formControlName=\"soortCode\" (ngModelChange)=\"changeSoortCode($event)\"></code-select>\r\n                                    <help-block type=\"required\">Soort is vereist</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <form-group label=\"Uitstalling\">\r\n                                    <code-select type=\"Uitstalling\" formControlName=\"uitstallingCode\"></code-select>\r\n                                    <help-block type=\"required\">Uitstalling is vereist</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <form-group label=\"Verkoop\">\r\n                                    <code-select type=\"Verkoop\" formControlName=\"verkoopCode\"></code-select>\r\n                                    <help-block type=\"required\">Verkoop is vereist</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <form-group label=\"Elektriciteit\">\r\n                                    <code-select type=\"Elektriciteit\" formControlName=\"elektriciteitCode\"></code-select>\r\n                                    <help-block type=\"required\">Elektriciteit is vereist</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12\">\r\n                                <form-group label=\"Opmerkingen\">\r\n                                    <textarea id=\"opmerking-text-input\" class=\"form-control\" placeholder=\"Uitleg &amp; opmerkingen over deze aanvraag (optioneel)\" rows=\"5\" formControlName=\"opmerking\"></textarea>\r\n                                </form-group>\r\n                            </div>\r\n                        </div>\r\n                    </mafo-panel-body>\r\n                </mafo-panel>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"intakeForm.get('soortCode')?.value === aanvraagSoort.NieuwePlaatsCode || intakeForm.get('soortCode')?.value === aanvraagSoort.PlaatsKwijtgeraaktCode || intakeForm.get('soortCode')?.value === aanvraagSoort.UitbreidingCode || intakeForm.get('soortCode')?.value === aanvraagSoort.RuilingCode\">\r\n            <div class=\"col-xs-12\">\r\n                <product-panel id=\"intake-product-section\"\r\n                    [formGroup]=\"intakeForm\"\r\n                    [data]=\"intake.producten\"\r\n                    [disabled]=\"intakeForm.get('soortCode')?.value === aanvraagSoort.UitbreidingCode || intakeForm.get('soortCode')?.value === aanvraagSoort.RuilingCode\"\r\n                    [componentsDisabled]=\"deleted\">\r\n                </product-panel>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"intakeForm.get('soortCode')?.value\">\r\n            <div class=\"col-xs-12\">\r\n                <markt-panel id=\"intake-markt-section\"\r\n                    [type]=\"intakeForm.get('soortCode')?.value\"\r\n                    [max]=\"1\"\r\n                    [disabled]=\"!intakeForm.get('soortCode')?.value || geregistreerd\"\r\n                    [klantId]=\"klantId\"\r\n                    [aanvraagId]=\"intake.id\"\r\n                    [formGroup]=\"intakeForm\"\r\n                    [data]=\"intake.aanvraagMarkten\"\r\n                    (onChange)=\"marktenChanged($event)\"\r\n                    [componentsDisabled]=\"deleted || marktDisabled\"\r\n                    [maxKavels]=\"maxKavels\">\r\n                </markt-panel>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n                <dp-document-panel id=\"intake-documenten-section\" [klantId]=\"klantId\" [componentsDisabled]=\"deleted\"></dp-document-panel>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n                <mafo-panel id=\"intake-tebetalen-section\" selector=\"tebetalen\" [collapsable]=\"false\" [open]=\"true\">\r\n                    <mafo-panel-heading>\r\n                        <h5>\r\n                            TE BETALEN\r\n                        </h5>\r\n                    </mafo-panel-heading>\r\n                    <mafo-panel-body>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\" *ngIf=\"intakeForm.get('soortCode')?.value === aanvraagSoort.NieuwePlaatsCode\">\r\n                                Nieuwe Plaats aanvraag\r\n                            </div>\r\n                            <div class=\"col-md-6\" *ngIf=\"intakeForm.get('soortCode')?.value === aanvraagSoort.PlaatsKwijtgeraaktCode\">\r\n                                Nieuwe Plaats kwijtgeraakt aanvraag\r\n                            </div>\r\n                            <div class=\"col-md-6\" *ngIf=\"intakeForm.get('soortCode')?.value === aanvraagSoort.RuilingCode\">\r\n                                Nieuwe Ruiling aanvraag\r\n                            </div>\r\n                            <div class=\"col-md-6\"*ngIf=\"intakeForm.get('soortCode')?.value === aanvraagSoort.UitbreidingCode\">\r\n                                Nieuwe Uitbreiding aanvraag\r\n                            </div>\r\n                            <div class=\"col-md-6 pull-right\" *ngIf=\"intakeForm.get('soortCode')?.value === aanvraagSoort.NieuwePlaatsCode || intakeForm.get('soortCode')?.value === aanvraagSoort.PlaatsKwijtgeraaktCode\">\r\n                                €5 / kavel\r\n                            </div>\r\n                            <div class=\"col-md-6 pull-right\" *ngIf=\"intakeForm.get('soortCode')?.value === aanvraagSoort.RuilingCode || intakeForm.get('soortCode')?.value === aanvraagSoort.UitbreidingCode\">\r\n                                €5 / markt\r\n                            </div>\r\n                        </div>\r\n                        <hr *ngIf=\"intakeForm.get('soortCode')?.value\"/>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                Aantal kavels\r\n                            </div>\r\n                            <div class=\"col-md-6 pull-right\">\r\n                                {{aantalKavels}}\r\n                            </div>\r\n                        </div>\r\n                        <hr />\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                Totaal te betalen\r\n                            </div>\r\n                            <div class=\"col-md-6 pull-right\">\r\n                                €{{teBetalen}}\r\n                            </div>\r\n                        </div>\r\n                        <hr />\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <strong>Betaling ontvangen</strong>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"pull-right\">\r\n                                    <dp-slider id=\"betaling-ontvangen-checkbox\" formControlName=\"isBetaald\" (ngModelChange)=\"isBetaaldChanged($event)\"></dp-slider>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"intakeForm.get('isBetaald').value\">\r\n                            <hr />\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-10\">\r\n                                    <strong>Betalingsdatum</strong>\r\n                                </div>\r\n                                <div class=\"col-md-2\">\r\n                                    <div class=\"pull-right\">\r\n                                        <datepicker id=\"betalingsdatum-datepicker\" formControlName=\"officieleInschrijvingsDatum\"></datepicker>                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\"><hr></div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <strong>Documenten nagekeken</strong>\r\n                            </div>\r\n                            <div class=\"col-md-6 pull-right\">\r\n                                <div class=\"pull-right\">\r\n                                    <dp-slider id=\"documenten-nagekeken-checkbox\" formControlName=\"isDocumentenOk\"></dp-slider>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\" *ngIf=\"intakeForm.get('soortCode')?.value === aanvraagSoort.NieuwePlaatsCode || intakeForm.get('soortCode')?.value === aanvraagSoort.PlaatsKwijtgeraaktCode\"><hr></div>\r\n                        </div>\r\n                        <div class=\"row\" *ngIf=\"intakeForm.get('soortCode')?.value === aanvraagSoort.NieuwePlaatsCode || intakeForm.get('soortCode')?.value === aanvraagSoort.PlaatsKwijtgeraaktCode\">\r\n                            <div class=\"col-md-6\">\r\n                                <strong>Uitgestelde toewijzing</strong>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"pull-right\">\r\n                                    <dp-slider formControlName=\"isUitgesteld\"></dp-slider>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"intakeForm.get('isUitgesteld').value && (intakeForm.get('soortCode')?.value === aanvraagSoort.NieuwePlaatsCode || intakeForm.get('soortCode')?.value === aanvraagSoort.PlaatsKwijtgeraaktCode)\">\r\n                            <div class=\"col-md-12\"><hr></div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-10\">\r\n                                    <strong>Uitgesteld tot</strong>\r\n                                </div>\r\n                                <div class=\"col-md-2\">\r\n                                    <div class=\"pull-right\">\r\n                                        <datepicker formControlName=\"uitgesteldDatum\"></datepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </mafo-panel-body>\r\n                </mafo-panel>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n                <div class=\"pull-right\">\r\n                    <button *ngIf=\"(deleteButton | async) && !deleted\" type=\"submit\" class=\"btn btn-danger\" (click)=\"showRegistratieDeleteModal()\">Registratie verwijderen</button>\r\n                    <button *ngIf=\"(bewaarButton | async) && !deleted\" type=\"submit\" class=\"btn btn-primary\" (click)=\"onSubmit()\">{{bewaarButtonText}}</button>\r\n                    <button *ngIf=\"(statusChangeButton | async) && !deleted\" type=\"submit\" class=\"btn btn-primary\" (click)=\"statusChange()\">{{statusChangeButtonText}}</button>\r\n                    <button id=\"direct-registreren-button\" *ngIf=\"(directBewarenButton | async) && !deleted\" type=\"submit\" class=\"btn btn-primary\" (click)=\"showDirectModal()\">{{directBewarenButtonText}}</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "TpEi":
/*!****************************************************!*\
  !*** ./ClientApp/app/services/aanvraag.service.ts ***!
  \****************************************************/
/*! exports provided: AanvraagService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AanvraagService", function() { return AanvraagService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _aanvraag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aanvraag */ "EU32");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-slim-loading-bar */ "k+RO");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core */ "BxFb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/observable/throw */ "Drjo");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_8__);










var AanvraagService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AanvraagService, _super);
    function AanvraagService(_http, loader) {
        var _this = _super.call(this, _http, loader) || this;
        _this._http = _http;
        _this.loader = loader;
        _this.url = _this.apiEndpoint + "requests/";
        return _this;
    }
    AanvraagService.prototype.getAll = function (query) {
        var _this = this;
        var params = this.registerDefaultParameters(query);
        if (query) {
            if (query.aanvraagstatuscode)
                params.set("query.aanvraagStatusCode", query.aanvraagstatuscode);
        }
        this.loader.start();
        return this._http.get(this.url, { headers: this.jsonHeaders, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (x) { return _this.loader.complete(); }));
    };
    AanvraagService.prototype.get = function (id) {
        var _this = this;
        this.loader.start();
        return this.http.get(this.url + id, { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    AanvraagService.prototype.save = function (aanvraag) {
        var _this = this;
        this.loader.start();
        var toAdd = JSON.stringify(aanvraag);
        var action = aanvraag.id && aanvraag.id > 0
            ? this.http.put(this.url + aanvraag.id, toAdd, { headers: this.jsonHeaders })
            : this.http.post(this.url, toAdd, { headers: this.jsonHeaders });
        return action.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    AanvraagService.prototype.patchDatumLaatsteHernieuwing = function (id, datumLaatsteHernieuwing) {
        var _this = this;
        this.loader.start();
        return this.http.patch(this.url + id, new _aanvraag__WEBPACK_IMPORTED_MODULE_4__["RequestPatchEvent"]({ Type: _core__WEBPACK_IMPORTED_MODULE_6__["ApplicationConstants"].AanvraagPatchType.Renewaldate, Value: datumLaatsteHernieuwing.toUTCString() }), { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    AanvraagService.prototype.changeStatus = function (id, status, aanvraag) {
        var _this = this;
        this.loader.start();
        // change to pre-registratie
        if (status === _core__WEBPACK_IMPORTED_MODULE_6__["ApplicationConstants"].AanvraagStatus.Gepreregistreerd)
            return this._http.patch(this.url + id, new _aanvraag__WEBPACK_IMPORTED_MODULE_4__["RequestPatchEvent"]({ Type: _core__WEBPACK_IMPORTED_MODULE_6__["ApplicationConstants"].AanvraagPatchType.Status, Value: _core__WEBPACK_IMPORTED_MODULE_6__["ApplicationConstants"].AanvraagStatus.Gepreregistreerd, Request: aanvraag }), { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return { result: true }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        //change to registratie
        if (status === _core__WEBPACK_IMPORTED_MODULE_6__["ApplicationConstants"].AanvraagStatus.Geregistreerd)
            return this._http.patch(this.url + id, new _aanvraag__WEBPACK_IMPORTED_MODULE_4__["RequestPatchEvent"]({ Type: _core__WEBPACK_IMPORTED_MODULE_6__["ApplicationConstants"].AanvraagPatchType.Status, Value: _core__WEBPACK_IMPORTED_MODULE_6__["ApplicationConstants"].AanvraagStatus.Geregistreerd, Request: aanvraag }), { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return { result: true }; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        this.loader.complete();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])({ result: false });
    };
    AanvraagService.prototype.delete = function (id) {
        var _this = this;
        this.loader.start();
        return this._http.delete(this.url + id, { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    AanvraagService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
        { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_5__["SlimLoadingBarService"] }
    ]; };
    AanvraagService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_5__["SlimLoadingBarService"]])
    ], AanvraagService);
    return AanvraagService;
}(_core__WEBPACK_IMPORTED_MODULE_6__["BaseService"]));



/***/ }),

/***/ "U4nl":
/*!*******************************************************************!*\
  !*** ./ClientApp/app/wachtlijst/wachtlijst.module.definitions.ts ***!
  \*******************************************************************/
/*! exports provided: wachtlijstComponents, wachtlijstDirectives, wachtlijstPipes, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wachtlijstComponents", function() { return wachtlijstComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wachtlijstDirectives", function() { return wachtlijstDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wachtlijstPipes", function() { return wachtlijstPipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _wachtlijst_intake_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wachtlijst-intake.component */ "rDcF");
/* harmony import */ var _wachtlijst_intake_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wachtlijst-intake-view.component */ "nhNQ");
/* harmony import */ var _wachtlijst_intake_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wachtlijst-intake-detail.component */ "AE+a");
/* harmony import */ var _wachtlijst_intake_klant_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wachtlijst-intake-klant.component */ "t+BL");
/* harmony import */ var _wachtlijst_registratie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wachtlijst-registratie.component */ "G3V0");
/* harmony import */ var _wachtlijst_registratie_markt_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wachtlijst-registratie.markt.component */ "3/Co");
/* harmony import */ var _wachtlijst_reservatie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wachtlijst-reservatie.component */ "dAj2");
/* harmony import */ var _wachtlijst_hernieuwing_inschrijving_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wachtlijst-hernieuwing-inschrijving.component */ "dgNa");
/* harmony import */ var _wachtlijst_resolve__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wachtlijst.resolve */ "bWHi");
/* harmony import */ var _klant_klant_resolve__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../klant/klant.resolve */ "/01Y");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth */ "qec8");
/* harmony import */ var _markt_markt_resolve__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../markt/markt.resolve */ "VRMf");












var wachtlijstComponents = [
    _wachtlijst_intake_component__WEBPACK_IMPORTED_MODULE_0__["WachtlijstIntakeComponent"],
    _wachtlijst_intake_view_component__WEBPACK_IMPORTED_MODULE_1__["WachtlijstIntakeViewComponent"],
    _wachtlijst_intake_detail_component__WEBPACK_IMPORTED_MODULE_2__["WachtlijstIntakeDetailComponent"],
    _wachtlijst_intake_klant_component__WEBPACK_IMPORTED_MODULE_3__["WachtlijstIntakeKlantComponent"],
    _wachtlijst_registratie_component__WEBPACK_IMPORTED_MODULE_4__["WachtlijstRegistratieComponent"],
    _wachtlijst_registratie_markt_component__WEBPACK_IMPORTED_MODULE_5__["WachtlijstRegistratieMarktComponent"],
    _wachtlijst_reservatie_component__WEBPACK_IMPORTED_MODULE_6__["WachtlijstReservatieComponent"],
    _wachtlijst_hernieuwing_inschrijving_component__WEBPACK_IMPORTED_MODULE_7__["WachtlijstHernieuwingInschrijvingComponent"]
];
var wachtlijstDirectives = [];
var wachtlijstPipes = [];
var routes = [
    {
        path: "intake",
        children: [
            {
                path: "",
                component: _wachtlijst_intake_component__WEBPACK_IMPORTED_MODULE_0__["WachtlijstIntakeComponent"],
                canActivate: [_auth__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
                data: {
                    intake: true,
                    privileges: [_auth__WEBPACK_IMPORTED_MODULE_10__["Privilege"].Aanvraag.Get]
                }
            },
            {
                path: "klant",
                component: _wachtlijst_intake_klant_component__WEBPACK_IMPORTED_MODULE_3__["WachtlijstIntakeKlantComponent"],
                canActivate: [_auth__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
                data: {
                    privileges: [
                        _auth__WEBPACK_IMPORTED_MODULE_10__["Privilege"].Klant.GetAllFilteredAndPaged,
                        _auth__WEBPACK_IMPORTED_MODULE_10__["Privilege"].Klant.GetCommerciele,
                        _auth__WEBPACK_IMPORTED_MODULE_10__["Privilege"].Klant.GetNietCommerciele
                    ]
                }
            },
            {
                path: "nieuw/:id",
                component: _wachtlijst_intake_detail_component__WEBPACK_IMPORTED_MODULE_2__["WachtlijstIntakeDetailComponent"],
                resolve: {
                    klant: _klant_klant_resolve__WEBPACK_IMPORTED_MODULE_9__["KlantResolve"]
                },
                canActivate: [_auth__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
                data: {
                    privileges: [_auth__WEBPACK_IMPORTED_MODULE_10__["Privilege"].Aanvraag.Get, _auth__WEBPACK_IMPORTED_MODULE_10__["Privilege"].Klant.Get]
                }
            },
            {
                path: ":id",
                children: [
                    {
                        path: "",
                        component: _wachtlijst_intake_view_component__WEBPACK_IMPORTED_MODULE_1__["WachtlijstIntakeViewComponent"],
                        resolve: {
                            aanvraag: _wachtlijst_resolve__WEBPACK_IMPORTED_MODULE_8__["WachtlijstResolve"]
                        },
                        canActivate: [_auth__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
                        data: {
                            privileges: [_auth__WEBPACK_IMPORTED_MODULE_10__["Privilege"].Aanvraag.Get]
                        }
                    },
                    {
                        path: "edit",
                        component: _wachtlijst_intake_detail_component__WEBPACK_IMPORTED_MODULE_2__["WachtlijstIntakeDetailComponent"],
                        resolve: {
                            intake: _wachtlijst_resolve__WEBPACK_IMPORTED_MODULE_8__["WachtlijstResolve"]
                        },
                        canActivate: [_auth__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
                        data: {
                            privileges: [_auth__WEBPACK_IMPORTED_MODULE_10__["Privilege"].Aanvraag.Get, _auth__WEBPACK_IMPORTED_MODULE_10__["Privilege"].Aanvraag.Update]
                        }
                    }
                ]
            }
        ]
    },
    {
        path: "preregistratie",
        children: [
            {
                path: "",
                component: _wachtlijst_intake_component__WEBPACK_IMPORTED_MODULE_0__["WachtlijstIntakeComponent"],
                canActivate: [_auth__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
                data: {
                    intake: false,
                    privileges: [_auth__WEBPACK_IMPORTED_MODULE_10__["Privilege"].Aanvraag.GetAllByStatusFilteredAndPaged]
                }
            },
            {
                path: ":id",
                children: [
                    {
                        path: "",
                        component: _wachtlijst_intake_view_component__WEBPACK_IMPORTED_MODULE_1__["WachtlijstIntakeViewComponent"],
                        resolve: {
                            aanvraag: _wachtlijst_resolve__WEBPACK_IMPORTED_MODULE_8__["WachtlijstResolve"]
                        },
                        canActivate: [_auth__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
                        data: {
                            privileges: [_auth__WEBPACK_IMPORTED_MODULE_10__["Privilege"].Aanvraag.Get]
                        }
                    },
                    {
                        path: "edit",
                        component: _wachtlijst_intake_detail_component__WEBPACK_IMPORTED_MODULE_2__["WachtlijstIntakeDetailComponent"],
                        resolve: {
                            intake: _wachtlijst_resolve__WEBPACK_IMPORTED_MODULE_8__["WachtlijstResolve"]
                        },
                        canActivate: [_auth__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
                        data: {
                            privileges: [_auth__WEBPACK_IMPORTED_MODULE_10__["Privilege"].Aanvraag.PreregistratieBewerken]
                        }
                    }
                ]
            }
        ]
    }, {
        path: "registratie",
        children: [
            {
                path: "",
                component: _wachtlijst_registratie_component__WEBPACK_IMPORTED_MODULE_4__["WachtlijstRegistratieComponent"],
                canActivate: [_auth__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
                data: {
                    privileges: [_auth__WEBPACK_IMPORTED_MODULE_10__["Privilege"].Aanvraag.GetAllByStatusFilteredAndPaged]
                }
            }, {
                path: "markt/:id",
                component: _wachtlijst_registratie_markt_component__WEBPACK_IMPORTED_MODULE_5__["WachtlijstRegistratieMarktComponent"],
                canActivate: [_auth__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
                resolve: {
                    markt: _markt_markt_resolve__WEBPACK_IMPORTED_MODULE_11__["MarktResolve"]
                },
                data: {
                    privileges: [_auth__WEBPACK_IMPORTED_MODULE_10__["Privilege"].Aanvraag.GetAllByStatusFilteredAndPaged]
                }
            }, {
                path: ":id",
                children: [
                    {
                        path: "",
                        component: _wachtlijst_intake_view_component__WEBPACK_IMPORTED_MODULE_1__["WachtlijstIntakeViewComponent"],
                        resolve: {
                            aanvraag: _wachtlijst_resolve__WEBPACK_IMPORTED_MODULE_8__["WachtlijstResolve"]
                        },
                        canActivate: [_auth__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
                        data: {
                            privileges: [_auth__WEBPACK_IMPORTED_MODULE_10__["Privilege"].Aanvraag.Get]
                        }
                    },
                    {
                        path: "edit",
                        component: _wachtlijst_intake_detail_component__WEBPACK_IMPORTED_MODULE_2__["WachtlijstIntakeDetailComponent"],
                        resolve: {
                            intake: _wachtlijst_resolve__WEBPACK_IMPORTED_MODULE_8__["WachtlijstResolve"]
                        },
                        canActivate: [_auth__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
                        data: {
                            privileges: [_auth__WEBPACK_IMPORTED_MODULE_10__["Privilege"].Aanvraag.RegistratieBewerken]
                        }
                    }
                ]
            }
        ]
    }, {
        path: "reservatie",
        children: [
            {
                path: "",
                component: _wachtlijst_reservatie_component__WEBPACK_IMPORTED_MODULE_6__["WachtlijstReservatieComponent"],
                canActivate: [_auth__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
                data: {
                    privileges: [_auth__WEBPACK_IMPORTED_MODULE_10__["Privilege"].Aanvraag.GetAllByStatusFilteredAndPaged]
                }
            },
            {
                path: ":id",
                component: _wachtlijst_intake_view_component__WEBPACK_IMPORTED_MODULE_1__["WachtlijstIntakeViewComponent"],
                resolve: {
                    aanvraag: _wachtlijst_resolve__WEBPACK_IMPORTED_MODULE_8__["WachtlijstResolve"]
                },
                canActivate: [_auth__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
                data: {
                    privileges: [_auth__WEBPACK_IMPORTED_MODULE_10__["Privilege"].Aanvraag.Get]
                }
            }
        ]
    },
    {
        path: "hernieuwinginschrijving",
        children: [
            {
                path: "",
                component: _wachtlijst_hernieuwing_inschrijving_component__WEBPACK_IMPORTED_MODULE_7__["WachtlijstHernieuwingInschrijvingComponent"],
                canActivate: [_auth__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
                data: {
                    privileges: [_auth__WEBPACK_IMPORTED_MODULE_10__["Privilege"].Aanvraag.Update]
                }
            }
        ]
    }
];


/***/ }),

/***/ "ZwzV":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/wachtlijst/html/wachtlijst-intake-view.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"intake\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <mafo-panel selector=\"title\" [collapsable]=\"false\" [open]=\"true\">\r\n                <mafo-panel-heading>\r\n                    <h3 id=\"title-wachtlijst-intake-detail\"><span class=\"fa fa-list-alt\"></span>&nbsp;{{pageTitle}}</h3>\r\n                </mafo-panel-heading>\r\n                <mafo-panel-actions>\r\n                    <a id=\"bewerk-intake-button\" *ngIf=\"!reservatie &&(updateAanvraag | async) && !deleted && !stopgezet\" class=\"btn btn-primary\" routerLink={{routerlink}}>\r\n                        <i class=\"fa fa-pencil\"></i>\r\n                        <span>&nbsp;&nbsp;Bewerk</span>\r\n                    </a>\r\n                </mafo-panel-actions>\r\n            </mafo-panel>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <mafo-panel id=\"registratie-wachtlijst-klant-section\" selector=\"klant\" [collapsable]=\"false\" [open]=\"true\">\r\n                <mafo-panel-heading>\r\n                    <h5>KLANT</h5>\r\n                </mafo-panel-heading>\r\n                <mafo-panel-body>\r\n                    <div class=\"row pointercursor\" routerLink=\"/klant/{{intake.klant.id}}\">\r\n                        <div class=\"col-md-3\">\r\n                            {{intake.klant.ondernemingsnr}}\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <strong>{{intake.klant.firmanaam}}</strong>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div *ngIf=\"intake.klant.contactPersoon\">\r\n                                <strong>{{intake.klant.contactPersoon}}</strong>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <i class=\"fa fa-phone-square\"></i>\r\n                            &nbsp;&nbsp;\r\n                            <span *ngIf=\"hoofdcontactPersoon\" class=\"marked-text\">{{intake.klant.telefoon}}</span>\r\n                        </div>\r\n                        <div class=\"col-md-1\">\r\n                            <i class=\"fa fa-angle-right pull-right\"></i>\r\n                        </div>\r\n                    </div>\r\n                </mafo-panel-body>\r\n            </mafo-panel>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <mafo-panel id=\"registratie-wachtlijst-aanvraag-section\" selector=\"aanvraag\" [collapsable]=\"false\" [open]=\"true\">\r\n                <mafo-panel-heading>\r\n                    <h5>AANVRAAG</h5>\r\n                </mafo-panel-heading>\r\n                <mafo-panel-actions>\r\n                    <span class=\"badge pull-right\" style=\"margin: 2px;\">{{status}}</span>\r\n                    <span class=\"badge pull-right\" style=\"margin: 2px; background-color: red\" *ngIf=\"deleted\">DELETED</span>\r\n                </mafo-panel-actions>\r\n                <mafo-panel-body>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-3\">\r\n                            <strong>Datum Intake</strong>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            {{intake.datum | date: 'dd/MM/yyyy'}}\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            <strong>Officiële Inschrijvingsdatum</strong>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            {{intake.officieleInschrijvingsDatum | date: 'dd/MM/yyyy'}}\r\n                        </div>  \r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\"><hr></div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-3\">\r\n                            <strong>Type</strong>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            <code-display type=\"Aanvraagsoort\" [value]=\"intake.soortCode\"></code-display>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            <strong>Soort Uitstalling</strong>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            <code-display type=\"Uitstalling\" [value]=\"intake.uitstallingCode\"></code-display>\r\n                        </div>                   \r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\"><hr></div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-3\">\r\n                            <strong>Verkoop</strong>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            <code-display type=\"Verkoop\" [value]=\"intake.verkoopCode\"></code-display>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            <strong>Elektriciteit</strong>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <code-display type=\"Elektriciteit\" [value]=\"intake.elektriciteitCode\"></code-display>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                        </div>\r\n                    </div>\r\n                    <br />\r\n                </mafo-panel-body>\r\n            </mafo-panel>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <product-panel id=\"registratie-wachtlijst-producten-section\" [data]=\"intake.producten\" [collapsable]=\"false\" [edit]=\"false\" [open]=\"true\"></product-panel>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <mafo-panel id=\"registratie-wachtlijst-markt-section\" selector=\"markt\" [collapsable]=\"false\" [open]=\"true\">\r\n                <mafo-panel-heading>\r\n                    <h5>\r\n                        MARKT\r\n                    </h5>\r\n                </mafo-panel-heading>\r\n                <mafo-panel-body>\r\n                    <div *ngIf=\"aanvraagMarkten\">\r\n                        <div *ngFor=\"let aanvraagMarkt of aanvraagMarkten; let i=index; trackBy:i\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-3 marked-text\">\r\n                                    <form-group>\r\n                                        {{aanvraagMarkt.naam}}&nbsp;({{aanvraagMarkt.afkorting}})\r\n                                    </form-group>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <form-group>\r\n                                        {{aanvraagMarkt.aantalKavels}} {{aanvraagMarkt.aantalKavels > 1 ? \"kavels\" : \"kavel\"}}\r\n                                    </form-group>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <form-group>\r\n                                        <div class=\"pull-right\">\r\n                                            <button id=\"kavels-toewijzen-button\" class=\"btn btn-primary\" (click)=\"showKavel(aanvraagMarkt)\" [disabled]=\"kavelsToewijzenEdit\" *ngIf=\"(intake.statusCode === aanvraagStatus.Geregistreerd && !deleted && !stopgezet && !toegewezen) && ((aanvraagMarkt.toewijsbareKavels > 0) || (aanvraagMarkt.toewijsbareKavels == 0 && (toewijzenAanvragenNietInAanmerking | async)) )\">Kavels toewijzen</button>\r\n                                            <a class=\"btn btn-primary\" routerLink=\"/markt/{{aanvraagMarkt.marktId}}\">\r\n                                                <i class=\"fa fa-angle-right pull-right\"></i>\r\n                                            </a>\r\n                                        </div>\r\n                                    </form-group>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" *ngIf=\"aanvraagMarkt.kavels\">\r\n                                <div class=\"col-xs-12\">\r\n                                    <br />\r\n                                    <mafo-panel [collapsable]=\"true\" [open]=\"true\">\r\n                                        <mafo-panel-heading >\r\n                                            <h5>\r\n                                                Kavels\r\n                                            </h5>\r\n                                        </mafo-panel-heading>\r\n                                        <mafo-panel-body>\r\n                                            <div *ngIf=\"kavelsLoading\" [class.ajax-loading]=\"kavelsLoading\" style=\"height:50px\"></div>\r\n                                            <div class=\"row\" >\r\n                                                <div class=\"col-xs-12\">\r\n                                                    <a *ngFor=\"let kavel of kavelObservables\" class=\"kavel-detail\" (click)=\"selectKavel($event, aanvraagMarkt, kavel)\">\r\n                                                        <span class=\"badge large\" [ngClass]=\"setKavelColor(kavel)\" style=\"margin: 2px;\">{{kavel.oudeNaam}}</span>\r\n                                                    </a>\r\n                                                </div>\r\n                                            </div>\r\n                                        </mafo-panel-body>\r\n                                        <mafo-panel-footer>\r\n                                            <div class=\"pull-right\">\r\n                                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"kavelsToewijzen(aanvraagMarkt)\" [disabled]=\"assigningKavelsLoading\">Bevestigen</button>\r\n                                                <button type=\"reset\" class=\"btn btn-default\" (click)=\"cancelSelectKavels(aanvraagMarkt)\">Annuleren</button>\r\n                                            </div>\r\n                                        </mafo-panel-footer>\r\n                                    </mafo-panel>\r\n                                </div>\r\n                            </div>\r\n                            <hr *ngIf=\"i < aanvraagMarkten.length - 1\" />\r\n                        </div>\r\n                    </div>\r\n                </mafo-panel-body>\r\n            </mafo-panel>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"reservatie\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n                <mafo-panel selector=\"weigeringen\" [collapsable]=\"false\" [open]=\"true\">\r\n                    <mafo-panel-heading>\r\n                        <h5>Weigeringstermijnen</h5>\r\n                    </mafo-panel-heading>\r\n                    <mafo-panel-actions>\r\n                        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!startWeigeringendisplay && !sluitWeigeringAfDisplay && kanWeigeringStarten\" (click)=\"startWeigeringen()\">Weigeringstermijn starten</button>\r\n                    </mafo-panel-actions>\r\n                    <mafo-panel-body>\r\n                        <dp-datagrid [data]=\"dataWeigering\" [options]=\"gridWeigeringOptions\" (fetchData)=\"fetchWeigeringData($event)\" *ngIf=\"!startWeigeringendisplay && !sluitWeigeringAfDisplay\">\r\n                            <ng-template #rowTemplate let-item=\"item\" let-index=\"index\">\r\n                                <td>\r\n                                    Termijn {{index + 1}}\r\n                                </td>\r\n                                <td>\r\n                                    {{item.startDatum | date: 'dd/MM/yyyy'}}\r\n                                </td>\r\n                                <td>{{item.weigeringsDatum | date: 'dd/MM/yyyy'}}</td>\r\n                                <td>{{item.motivatie}}</td>\r\n                            </ng-template>\r\n                            <ng-template #rowActions let-item=\"item\" let-index=\"index\">\r\n                                <button title=\"Weigering registreren\" class=\"btn btn-primary btn-xs\" (click)=\"afsluitenWeigering(item.id)\" *ngIf=\"!item.weigeringsDatum\">\r\n                                    <i class=\"fa fa-registered\" aria-hidden=\"true\"></i>\r\n                                </button>\r\n                                <button title=\"Weigering annuleren\" class=\"btn btn-danger btn-xs\" (click)=\"annuleerWeigeringsTermijn(item.id)\" *ngIf=\"!item.weigeringsDatum\">\r\n                                    <i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\r\n                                </button>\r\n                            </ng-template>\r\n                        </dp-datagrid>\r\n                        <form [formGroup]=\"weigeringForm\" *ngIf=\"startWeigeringendisplay || sluitWeigeringAfDisplay\" (ngSubmit)=\"submitWeigering($event)\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xs-12\">\r\n                                    <h6>Weigeringstermijn starten</h6>\r\n                                    <hr />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" *ngIf=\"startWeigeringendisplay\">\r\n                                <div class=\"col-md-6\">\r\n                                    <form-group label=\"Startdatum weigeringstermijn\">\r\n                                        <datepicker formControlName=\"startDatum\" startDate=\"-30d\" (ngModelChange)=\"changeDate($event)\"></datepicker>\r\n                                        <help-block type=\"required\">Startdatum weigeringstermijn is vereist</help-block>\r\n                                    </form-group>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <form-group label=\"Einddatum weigeringstermijn\">\r\n                                        <datepicker formControlName=\"eindDatum\"></datepicker>\r\n                                    </form-group>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" *ngIf=\"sluitWeigeringAfDisplay\">\r\n                                <div class=\"col-md-6\">\r\n                                    <form-group label=\"Weigeringsdatum\">\r\n                                        <datepicker formControlName=\"weigeringsDatum\"></datepicker>\r\n                                        <help-block type=\"required\">Weigeringsdatum weigeringstermijn is vereist</help-block>\r\n                                    </form-group>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <form-group label=\"Motivatie\">\r\n                                        <textarea class=\"form-control\" rows=\"5\" formControlName=\"motivatie\"></textarea>\r\n                                    </form-group>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"pull-right\" *ngIf=\"startWeigeringendisplay || sluitWeigeringAfDisplay\">\r\n                                <button type=\"submit\" class=\"btn btn-primary\">Bewaren</button>\r\n                                <button type=\"button\" class=\"btn btn-default\" (click)=\"cancelWeigering()\">Annuleren</button>\r\n                            </div>\r\n                        </form>\r\n                    </mafo-panel-body>\r\n                </mafo-panel>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "bWHi":
/*!********************************************************!*\
  !*** ./ClientApp/app/wachtlijst/wachtlijst.resolve.ts ***!
  \********************************************************/
/*! exports provided: WachtlijstResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WachtlijstResolve", function() { return WachtlijstResolve; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_intake_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/intake.service */ "ubql");



var WachtlijstResolve = /** @class */ (function () {
    function WachtlijstResolve(intakeService) {
        this.intakeService = intakeService;
    }
    WachtlijstResolve.prototype.resolve = function (route) {
        return this.intakeService.get(route.params['id']);
    };
    WachtlijstResolve.ctorParameters = function () { return [
        { type: _services_intake_service__WEBPACK_IMPORTED_MODULE_2__["IntakeService"] }
    ]; };
    WachtlijstResolve = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_intake_service__WEBPACK_IMPORTED_MODULE_2__["IntakeService"]])
    ], WachtlijstResolve);
    return WachtlijstResolve;
}());



/***/ }),

/***/ "c6a7":
/*!*******************************************************!*\
  !*** ./ClientApp/app/wachtlijst/wachtlijst.module.ts ***!
  \*******************************************************/
/*! exports provided: WachtlijstModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WachtlijstModule", function() { return WachtlijstModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "tBJz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "mZsw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _wachtlijst_module_definitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wachtlijst.module.definitions */ "U4nl");
/* harmony import */ var _componenten_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componenten/search */ "su0z");
/* harmony import */ var _componenten_code_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componenten/code-select */ "HW5m");
/* harmony import */ var _wachtlijst_resolve__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wachtlijst.resolve */ "bWHi");
/* harmony import */ var _services_intake_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/intake.service */ "ubql");
/* harmony import */ var _componenten_klant_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../componenten/klant-core */ "TDej");
/* harmony import */ var _klant_klant_resolve__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../klant/klant.resolve */ "/01Y");
/* harmony import */ var _services_aanvraag_weigering_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/aanvraag-weigering.service */ "wcVw");
/* harmony import */ var _services_aanvraag_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/aanvraag.service */ "TpEi");
/* harmony import */ var _services_aanvraag_markt_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/aanvraag-markt.service */ "Jd6f");
/* harmony import */ var _componenten_product_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../componenten/product-select */ "yxRt");
/* harmony import */ var _componenten_datetimepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../componenten/datetimepicker */ "RyTg");
/* harmony import */ var _componenten_alert_alert_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../componenten/alert/alert.module */ "EVxA");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../auth */ "qec8");
/* harmony import */ var _componenten_document_upload__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../componenten/document-upload */ "zY+x");
/* harmony import */ var _shared_helper_datetimehelper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/helper/datetimehelper */ "CS9P");
/* harmony import */ var _componenten_markt_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../componenten/markt-select */ "3vM0");
/* harmony import */ var _markt_markt_resolve__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../markt/markt.resolve */ "VRMf");
/* harmony import */ var _componenten_location_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../componenten/location-select */ "Fgbf");
/* harmony import */ var _componenten_validators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../componenten/validators */ "2/Vv");
/* harmony import */ var _services_markt_wachtlijst_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../services/markt-wachtlijst.service */ "5urO");



























var WachtlijstModule = /** @class */ (function () {
    function WachtlijstModule() {
    }
    WachtlijstModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _services__WEBPACK_IMPORTED_MODULE_4__["ServiceModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _componenten_search__WEBPACK_IMPORTED_MODULE_7__["SearchModule"],
                _componenten_code_select__WEBPACK_IMPORTED_MODULE_8__["CodeSelectModule"],
                _componenten_product_select__WEBPACK_IMPORTED_MODULE_16__["ProductSelectModule"],
                _componenten_datetimepicker__WEBPACK_IMPORTED_MODULE_17__["DateTimePickerhModule"],
                _componenten_alert_alert_module__WEBPACK_IMPORTED_MODULE_18__["AlertModule"],
                _componenten_document_upload__WEBPACK_IMPORTED_MODULE_20__["DocumentUploadModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_wachtlijst_module_definitions__WEBPACK_IMPORTED_MODULE_6__["routes"])),
                _componenten_markt_select__WEBPACK_IMPORTED_MODULE_22__["MarktSelectModule"],
                _componenten_location_select__WEBPACK_IMPORTED_MODULE_24__["LocatieSelectModule"],
                _componenten_validators__WEBPACK_IMPORTED_MODULE_25__["ValidatorsModule"]
            ],
            providers: [
                _wachtlijst_resolve__WEBPACK_IMPORTED_MODULE_9__["WachtlijstResolve"],
                _services_intake_service__WEBPACK_IMPORTED_MODULE_10__["IntakeService"],
                _componenten_klant_core__WEBPACK_IMPORTED_MODULE_11__["KlantService"],
                _componenten_markt_select__WEBPACK_IMPORTED_MODULE_22__["MarktService"], ,
                _services_markt_wachtlijst_service__WEBPACK_IMPORTED_MODULE_26__["MarktWachtlijstService"],
                _klant_klant_resolve__WEBPACK_IMPORTED_MODULE_12__["KlantResolve"],
                _services_aanvraag_weigering_service__WEBPACK_IMPORTED_MODULE_13__["AanvraagWeigeringService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
                _services_aanvraag_service__WEBPACK_IMPORTED_MODULE_14__["AanvraagService"],
                _services_aanvraag_markt_service__WEBPACK_IMPORTED_MODULE_15__["AanvraagMarktService"],
                _auth__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"],
                _shared_helper_datetimehelper__WEBPACK_IMPORTED_MODULE_21__["DateTimeHelper"],
                _markt_markt_resolve__WEBPACK_IMPORTED_MODULE_23__["MarktResolve"]
            ],
            declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_wachtlijst_module_definitions__WEBPACK_IMPORTED_MODULE_6__["wachtlijstComponents"]),
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], WachtlijstModule);
    return WachtlijstModule;
}());



/***/ }),

/***/ "dAj2":
/*!*********************************************************************!*\
  !*** ./ClientApp/app/wachtlijst/wachtlijst-reservatie.component.ts ***!
  \*********************************************************************/
/*! exports provided: WachtlijstReservatieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WachtlijstReservatieComponent", function() { return WachtlijstReservatieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_wachtlijst_reservatie_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/wachtlijst-reservatie.component.html */ "Mmvo");
/* harmony import */ var _raw_loader_html_wachtlijst_reservatie_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_wachtlijst_reservatie_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_intake_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/intake.service */ "ubql");





var WachtlijstReservatieComponent = /** @class */ (function () {
    function WachtlijstReservatieComponent(intakeService, router, route) {
        this.intakeService = intakeService;
        this.router = router;
        this.route = route;
        this.gridOptions = {
            stripedRows: true,
            fields: [
                {
                    field: "datum",
                    title: "Datum",
                    sortable: true
                },
                {
                    field: "ondernemingsNr",
                    title: "OndernemingsNr",
                    sortable: true
                },
                {
                    field: "firmanaam",
                    title: "Firmanaam",
                    sortable: true
                },
                {
                    field: "soort",
                    title: "Soort",
                    sortable: true
                },
                {
                    field: "markten",
                    title: "Markten"
                }
            ]
        };
    }
    WachtlijstReservatieComponent.prototype.searchReservaties = function ($event) {
        if (this.page) {
            this.page.page = 1;
            this.page["filter"] = $event.value;
            this.fetchData(this.page);
        }
    };
    WachtlijstReservatieComponent.prototype.rowClicked = function (row) {
        this.router.navigate(["wachtlijst", "reservatie", row.data.id]);
    };
    WachtlijstReservatieComponent.prototype.fetchData = function (page) {
        var _this = this;
        if (!this.page)
            this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }
        this.page["aanvraagstatuscode"] = "GERESERVEERD";
        this.intakeService.getAll(this.page).subscribe(function (x) {
            _this.data = x;
        });
    };
    WachtlijstReservatieComponent.prototype.marktenTooltip = function (markten) {
        var first = markten.shift();
        var result = markten.join(", ");
        markten.unshift(first);
        return result;
    };
    WachtlijstReservatieComponent.ctorParameters = function () { return [
        { type: _services_intake_service__WEBPACK_IMPORTED_MODULE_4__["IntakeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    WachtlijstReservatieComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'mafo-app',
            template: _raw_loader_html_wachtlijst_reservatie_component_html__WEBPACK_IMPORTED_MODULE_1___default.a
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_intake_service__WEBPACK_IMPORTED_MODULE_4__["IntakeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WachtlijstReservatieComponent);
    return WachtlijstReservatieComponent;
}());



/***/ }),

/***/ "dgNa":
/*!***********************************************************************************!*\
  !*** ./ClientApp/app/wachtlijst/wachtlijst-hernieuwing-inschrijving.component.ts ***!
  \***********************************************************************************/
/*! exports provided: WachtlijstHernieuwingInschrijvingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WachtlijstHernieuwingInschrijvingComponent", function() { return WachtlijstHernieuwingInschrijvingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_wachtlijst_hernieuwing_inschrijving_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/wachtlijst-hernieuwing-inschrijving.component.html */ "qrYu");
/* harmony import */ var _raw_loader_html_wachtlijst_hernieuwing_inschrijving_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_wachtlijst_hernieuwing_inschrijving_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-modialog/plugins/bootstrap */ "e7Ax");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _componenten_datagrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componenten/datagrid */ "z4/g");
/* harmony import */ var _services_aanvraag_markt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/aanvraag-markt.service */ "Jd6f");
/* harmony import */ var _services_aanvraag_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/aanvraag.service */ "TpEi");








var WachtlijstHernieuwingInschrijvingComponent = /** @class */ (function () {
    function WachtlijstHernieuwingInschrijvingComponent(toastr, aanvraagMarktService, aanvraagService, modal) {
        this.toastr = toastr;
        this.aanvraagMarktService = aanvraagMarktService;
        this.aanvraagService = aanvraagService;
        this.modal = modal;
        this.gridOptions = {
            stripedRows: true,
            fields: [
                {
                    field: 'klant.firmanaam',
                    title: 'Firmanaam',
                    sortable: true,
                },
                {
                    field: 'klant.ondernemingsNr',
                    title: 'OndernemingsNr',
                    sortable: true,
                },
                {
                    field: 'markt.naam',
                    title: 'Markt',
                    sortable: true,
                },
                {
                    field: 'datumLaatsteHernieuwing',
                    title: 'Vervaldag inschrijving',
                    sortable: true,
                    sort: _componenten_datagrid__WEBPACK_IMPORTED_MODULE_5__["SortOrder"].Ascending,
                },
            ],
        };
    }
    WachtlijstHernieuwingInschrijvingComponent.prototype.fetchData = function (page) {
        var _this = this;
        if (!this.page)
            this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }
        this.page['hernieuwing'] = true;
        this.aanvraagMarktService.getAll(this.page).subscribe(function (x) {
            _this.data = x;
        }, function (x) { return alert('error'); });
    };
    WachtlijstHernieuwingInschrijvingComponent.prototype.berekenVervaldag = function (value) {
        var d = new Date(value);
        d.setFullYear(d.getFullYear() + 1);
        d.setDate(d.getDate() - 1);
        return d;
    };
    WachtlijstHernieuwingInschrijvingComponent.prototype.berekenDatumLaatsteHernieuwing = function (value) {
        var d = new Date(value);
        return new Date(new Date().getFullYear(), d.getMonth(), d.getDate());
    };
    WachtlijstHernieuwingInschrijvingComponent.prototype.search = function ($event) {
        if (this.page) {
            this.page.page = 1;
            this.page['filter'] = $event.value;
            this.page['ishernieuwing'] = true;
            this.fetchData(this.page);
        }
    };
    WachtlijstHernieuwingInschrijvingComponent.prototype.showModalRenew = function ($event) {
        var _this = this;
        this.modal
            .confirm()
            .title('Bevestig hernieuwing')
            .body('Weet u zeker dat u deze aanvraag wilt hernieuwen?')
            .okBtn('Ok')
            .open()
            .result.catch() // catch error not related to the result (modal open...)
            .then(function (dialog) { return dialog.result; }) // dialog has more properties,lets just return the promise for a result.
            .then(function (x) { return _this.hernieuwing($event.id); }) // if were here ok was clicked.
            .catch(function (x) { }); // if were here cancel was clicked.
    };
    WachtlijstHernieuwingInschrijvingComponent.prototype.showModalDelete = function ($event) {
        var _this = this;
        this.modal
            .confirm()
            .title('Bevestig verwijdering')
            .body('Weet u zeker dat u deze aanvraag wilt verwijderen?')
            .okBtn('Ok')
            .open()
            .result.catch() // catch error not related to the result (modal open...)
            .then(function (dialog) { return dialog.result; }) // dialog has more properties,lets just return the promise for a result.
            .then(function (x) { return _this.delete($event.id); }) // if were here ok was clicked.
            .catch(function (x) { }); // if were here cancel was clicked.
    };
    WachtlijstHernieuwingInschrijvingComponent.prototype.hernieuwing = function (aanvraagId) {
        var _this = this;
        this.aanvraagService.get(aanvraagId).subscribe(function (aanvraag) {
            _this.aanvraagService
                .patchDatumLaatsteHernieuwing(aanvraagId, _this.berekenDatumLaatsteHernieuwing(_this.berekenDatumLaatsteHernieuwing(aanvraag.datumLaatstehernieuwing)))
                .subscribe(function (x) {
                _this.fetchData(_this.page);
            });
        }, function (x) {
            return _this.toastr.warning(x.ExtraInfo[x].join(','), aanvraagId + ' kon niet vernieuwd worden');
        });
    };
    WachtlijstHernieuwingInschrijvingComponent.prototype.delete = function (aanvraagId) {
        var _this = this;
        this.aanvraagService.delete(aanvraagId).subscribe(function (aanvraag) {
            _this.toastr.info(aanvraagId + ' verwijderd.');
            _this.fetchData(_this.page);
        }, function (x) {
            return _this.toastr.warning(x.ExtraInfo[x].join(','), aanvraagId + ' kon niet verwijderd worden');
        });
    };
    WachtlijstHernieuwingInschrijvingComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _services_aanvraag_markt_service__WEBPACK_IMPORTED_MODULE_6__["AanvraagMarktService"] },
        { type: _services_aanvraag_service__WEBPACK_IMPORTED_MODULE_7__["AanvraagService"] },
        { type: ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"] }
    ]; };
    WachtlijstHernieuwingInschrijvingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'mafo-app',
            template: _raw_loader_html_wachtlijst_hernieuwing_inschrijving_component_html__WEBPACK_IMPORTED_MODULE_1___default.a,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _services_aanvraag_markt_service__WEBPACK_IMPORTED_MODULE_6__["AanvraagMarktService"],
            _services_aanvraag_service__WEBPACK_IMPORTED_MODULE_7__["AanvraagService"],
            ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"]])
    ], WachtlijstHernieuwingInschrijvingComponent);
    return WachtlijstHernieuwingInschrijvingComponent;
}());



/***/ }),

/***/ "nhNQ":
/*!**********************************************************************!*\
  !*** ./ClientApp/app/wachtlijst/wachtlijst-intake-view.component.ts ***!
  \**********************************************************************/
/*! exports provided: WachtlijstIntakeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WachtlijstIntakeViewComponent", function() { return WachtlijstIntakeViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_wachtlijst_intake_view_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/wachtlijst-intake-view.component.html */ "ZwzV");
/* harmony import */ var _raw_loader_html_wachtlijst_intake_view_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_wachtlijst_intake_view_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_add_operator_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/share */ "eZA3");
/* harmony import */ var rxjs_add_operator_share__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_share__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-modialog/plugins/bootstrap */ "e7Ax");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth */ "qec8");
/* harmony import */ var _componenten_validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../componenten/validators */ "2/Vv");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core */ "BxFb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services */ "mZsw");
/* harmony import */ var _services_aanvraag_weigering_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/aanvraag-weigering.service */ "wcVw");
/* harmony import */ var _services_kavel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/kavel */ "ufGB");
















var WachtlijstIntakeViewComponent = /** @class */ (function () {
    function WachtlijstIntakeViewComponent(toastr, modal, router, kavelService, abonnementService, validatorSvc, route, fb, aanvraagWeigeringService, datePipe, auth) {
        this.toastr = toastr;
        this.modal = modal;
        this.router = router;
        this.kavelService = kavelService;
        this.abonnementService = abonnementService;
        this.validatorSvc = validatorSvc;
        this.route = route;
        this.fb = fb;
        this.aanvraagWeigeringService = aanvraagWeigeringService;
        this.datePipe = datePipe;
        this.auth = auth;
        this.aanvraagStatus = _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus;
        this.registratie = false;
        this.reservatie = false;
        this.preregistratie = false;
        this.stopgezet = false;
        this.geannuleerd = false;
        this.deleted = false;
        this.toegewezen = false;
        this.kavelsLoading = false;
        this.kavelsToewijzenEdit = false;
        this.assigningKavelsLoading = false;
        this.kavelObservables = new Array();
        this.gridWeigeringOptions = {
            stripedRows: true,
            showPaging: false,
            fields: [
                {
                    field: '',
                    title: 'Termijn',
                    width: '15%',
                },
                {
                    field: 'startDatum',
                    title: 'Startdatum',
                    width: '15%',
                },
                {
                    field: 'weigeringsDatum',
                    title: 'Datum Weigering',
                    width: '20%',
                },
                {
                    field: 'motivatie',
                    title: 'Motivatie',
                    width: '25%',
                },
            ],
        };
        this.startWeigeringendisplay = false;
        this.sluitWeigeringAfDisplay = false;
        this.kanWeigeringStarten = false;
    }
    WachtlijstIntakeViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.intake = data['aanvraag'] || {};
            _this.aanvraagMarkten = _this.intake.aanvraagMarkten;
            if (_this.intake.deletedOn != null) {
                _this.deleted = true;
            }
            _this.onload();
        });
        this.security();
    };
    WachtlijstIntakeViewComponent.prototype.onload = function () {
        this.setLabels();
        if (this.preregistratie) {
            this.routerlink =
                '/wachtlijst/preregistratie/' + this.intake.id + '/edit';
        }
        else if (this.registratie) {
            this.routerlink = '/wachtlijst/registratie/' + this.intake.id + '/edit';
        }
        else if (this.reservatie) {
            this.routerlink = '/wachtlijst/reservatie/' + this.intake.id + '/edit';
        }
        else {
            this.routerlink = '/wachtlijst/intake/' + this.intake.id + '/edit';
        }
    };
    WachtlijstIntakeViewComponent.prototype.setLabels = function () {
        // set status label
        if (this.intake.statusCode ===
            _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Gereserveerd) {
            this.reservatie = true;
            this.status = _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Gereserveerd;
        }
        else {
            this.status = _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Geregistreerd;
        }
        if (this.intake.statusCode === _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Intake) {
            this.status = _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Intake;
        }
        if (this.intake.statusCode ===
            _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Gepreregistreerd) {
            this.preregistratie = true;
            this.status = _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Gepreregistreerd;
        }
        if (this.intake.statusCode ===
            _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Geregistreerd) {
            this.registratie = true;
            this.status = _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Geregistreerd;
        }
        if (this.intake.statusCode === _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Stopgezet) {
            this.stopgezet = true;
            this.status = _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Stopgezet;
        }
        if (this.intake.statusCode === _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Geannuleerd) {
            this.geannuleerd = true;
            this.status = _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Geannuleerd;
        }
        // set button label
        this.pageTitle = this.intake.klant.firmanaam + " > " + this.intake.statusCode + " " + this.datePipe.transform(this.intake.datum, 'dd/MM/yyyy');
    };
    WachtlijstIntakeViewComponent.prototype.showKavel = function (aanvraagMarkt) {
        aanvraagMarkt.kavels = [];
        this.kavelsToewijzenEdit = true;
        this.kavelObservables = [];
        this.kavelsLoading = true;
        this.fetchKavels(aanvraagMarkt.marktId);
    };
    WachtlijstIntakeViewComponent.prototype.fetchKavels = function (marktId) {
        var _this = this;
        this.kavelService.getAllKavelsForMarktOverview(marktId).subscribe(function (x) {
            _this.kavelObservables = x;
            _this.kavelsLoading = false;
        });
        this.kavelService.getAvailableAmount(marktId).subscribe(function (x) {
            _this.availableKavels = x.valueOf();
        });
    };
    WachtlijstIntakeViewComponent.prototype.selectKavel = function ($event, aanvraagMarkt, kavel) {
        $event.preventDefault();
        $event.stopPropagation();
        if (kavel.kavelStatus === _services_kavel__WEBPACK_IMPORTED_MODULE_15__["KavelStatusEnum"].Bezet ||
            kavel.kavelStatus === _services_kavel__WEBPACK_IMPORTED_MODULE_15__["KavelStatusEnum"].BezetGereserveerd ||
            kavel.kavelStatus === _services_kavel__WEBPACK_IMPORTED_MODULE_15__["KavelStatusEnum"].Gereserveerd)
            return;
        var index = aanvraagMarkt.kavels.indexOf(kavel.id);
        if (index > -1) {
            kavel.selected = false;
            this.availableKavels++;
            aanvraagMarkt.kavels.splice(index, 1);
        }
        else if (this.availableKavels == 0) {
            kavel.selected = false;
            this.toastr.error('Er moeten 5% kavels vrij gehouden worden', 'Kavels niet beschikbaar');
        }
        else {
            if (aanvraagMarkt.aantalKavels === aanvraagMarkt.kavels.length) {
                this.toastr.warning('Er kunnen geen kavels meer gekozen worden omdat het maximum aantal bereikt is', 'Kavels');
                return;
            }
            kavel.selected = true;
            this.availableKavels--;
            aanvraagMarkt.kavels.push(kavel.id);
        }
    };
    WachtlijstIntakeViewComponent.prototype.cancelSelectKavels = function (aanvraagMarkt) {
        delete aanvraagMarkt.kavels;
        this.kavelsToewijzenEdit = false;
    };
    WachtlijstIntakeViewComponent.prototype.kavelsToewijzen = function (aanvraagMarkt) {
        var _this = this;
        if (this.aanvraagMarkten.length < 0) {
            this.toastr.error('Er is geen markt gekoppeld aan deze aanvraag', 'Markt');
            return;
        }
        var markt = this.aanvraagMarkten[0];
        if (!markt.kavels || markt.kavels.length < 0) {
            this.toastr.error('Er zijn geen kavels aangeduid op de markt van deze aanvraag', 'Kavels');
            return;
        }
        if (markt.aantalKavels > markt.kavels.length) {
            this.toastr.error('Er zijn niet voldoende kavels aangeduid op deze aanvraag', 'Kavels');
            return;
        }
        this.assigningKavelsLoading = true;
        this.abonnementService
            .create({
            aanvraagId: this.intake.id,
            kavels: markt.kavels,
        })
            .subscribe(function (x) {
            _this.toegewezen = true;
            delete aanvraagMarkt.kavels;
            _this.assigningKavelsLoading = false;
            _this.toastr.info('Kavel(s) zijn toegewezen', 'Kavels');
            _this.router.navigate(['abonnement', x.id]);
            _this.kavelsToewijzenEdit = false;
        }, function (x) {
            _this.toastr.error('Kon de kavel(s) niet toewijzen', 'Kavels');
            _this.assigningKavelsLoading = false;
            if (x.ExtraInfo) {
                for (var xtra in x.ExtraInfo) {
                    _this.toastr.warning(x.ExtraInfo[xtra].join(','), xtra);
                }
            }
        });
    };
    WachtlijstIntakeViewComponent.prototype.setKavelColor = function (kavel) {
        if (kavel.selected)
            return {
                'bg-blue': true,
            };
        else
            return {
                'bg-green': kavel.kavelStatus === _services_kavel__WEBPACK_IMPORTED_MODULE_15__["KavelStatusEnum"].Vrij,
                'bg-red': kavel.kavelStatus === _services_kavel__WEBPACK_IMPORTED_MODULE_15__["KavelStatusEnum"].Bezet ||
                    kavel.kavelStatus === _services_kavel__WEBPACK_IMPORTED_MODULE_15__["KavelStatusEnum"].InOverdracht,
                'bg-orange': kavel.kavelStatus === _services_kavel__WEBPACK_IMPORTED_MODULE_15__["KavelStatusEnum"].Gereserveerd,
                'bg-orange-striped': kavel.kavelStatus === _services_kavel__WEBPACK_IMPORTED_MODULE_15__["KavelStatusEnum"].BezetGereserveerd,
                'bg-green-striped': kavel.kavelStatus === _services_kavel__WEBPACK_IMPORTED_MODULE_15__["KavelStatusEnum"].BezetTeBedelen,
            };
    };
    WachtlijstIntakeViewComponent.prototype.security = function () {
        this.updateAanvraag = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_10__["Privilege"].Aanvraag.Update);
        this.toewijzenAanvragenNietInAanmerking = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_10__["Privilege"].Aanvraag.ToewijzenAanvragenNietInAanmerking);
    };
    WachtlijstIntakeViewComponent.prototype.fetchWeigeringData = function (page) {
        var _this = this;
        this.aanvraagWeigeringService.getAll(this.intake.id).subscribe(function (x) {
            _this.dataWeigering = x;
            _this.kanWeigeringStarten =
                x.embedded.resourceList.findIndex(function (x) { return !x.weigeringsDatum; }) === -1;
        }, function (x) {
            return _this.toastr.error('Kon de Weigeringstermijnen niet inladen', 'Termijn');
        });
    };
    WachtlijstIntakeViewComponent.prototype.startWeigeringen = function () {
        this.weigeringForm = this.fb.group({
            startDatum: [new Date(Date.now()), [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            eindDatum: [
                {
                    value: new Date(Date.now()).addMonths(1).addDays(-1),
                    disabled: true,
                },
            ],
        });
        this.startWeigeringendisplay = true;
    };
    WachtlijstIntakeViewComponent.prototype.afsluitenWeigering = function (id) {
        this.weigeringForm = this.fb.group({
            id: [id],
            weigeringsDatum: [new Date(Date.now()), [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            motivatie: [''],
        });
        this.sluitWeigeringAfDisplay = true;
    };
    WachtlijstIntakeViewComponent.prototype.annuleerWeigeringsTermijn = function (id) {
        var _this = this;
        this.modal
            .confirm()
            .title('Weigeringstermijn annuleren')
            .body('Bent u zeker dat u deze weigeringstermijn wenst te annuleren?')
            .okBtn('Bevestigen')
            .cancelBtn('Annuleren')
            .open()
            .result.catch() // catch error not related to the result (modal open...)
            .then(function (dialog) { return dialog.result; }) // dialog has more properties,lets just return the promise for a result.
            .then(function (x) {
            _this.weigeringAnnuleren({
                id: id,
                weigeringsDatum: new Date(Date.now()),
                negeerRegistratie: true,
            });
        }) // if were here ok was clicked.
            .catch(function (x) { }); // if were here cancel was clicked.
    };
    WachtlijstIntakeViewComponent.prototype.cancelWeigering = function () {
        this.startWeigeringendisplay = false;
        this.sluitWeigeringAfDisplay = false;
        this.weigeringForm = null;
    };
    WachtlijstIntakeViewComponent.prototype.submitWeigering = function ($event) {
        var _this = this;
        if (!this.weigeringForm.valid) {
            this.validatorSvc.valideFormGroup(this.weigeringForm);
            return;
        }
        if (this.startWeigeringendisplay) {
            this.modal
                .confirm()
                .title('Weigeringstermijn starten')
                .body('Bent u zeker dat u de weigeringstermijn wenst te starten op de gekozen datum?')
                .okBtn('Bevestigen')
                .cancelBtn('Annuleren')
                .open()
                .result.catch() // catch error not related to the result (modal open...)
                .then(function (dialog) { return dialog.result; }) // dialog has more properties,lets just return the promise for a result.
                .then(function (x) {
                _this.aanvraagWeigeringService
                    .starten(_this.intake.id, _this.weigeringForm.value)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function (b) {
                    _this.weigeringForm = null;
                    _this.startWeigeringendisplay = false;
                }))
                    .subscribe(function (b) {
                    _this.toastr.success('Weigeringstermijn is gestart', 'Termijn');
                }, function (b) {
                    _this.toastr.error('Kon de Weigeringstermijn niet starten', 'Termijn');
                    if (b.ExtraInfo) {
                        for (var xtra in b.ExtraInfo) {
                            _this.toastr.warning(b.ExtraInfo[xtra].join(','), xtra);
                        }
                    }
                });
            }) // if were here ok was clicked.
                .catch(function (x) { }); // if were here cancel was clicked.
        }
        if (this.sluitWeigeringAfDisplay) {
            this.modal
                .confirm()
                .title('Aanvraagweigering registreren')
                .body('Wilt u deze weigering van de aanvraag registreren?')
                .okBtn('Bevestigen')
                .cancelBtn('Annuleren')
                .open()
                .result.catch() // catch error not related to the result (modal open...)
                .then(function (dialog) { return dialog.result; }) // dialog has more properties,lets just return the promise for a result.
                .then(function (x) {
                _this.weigeringRegistreren(_this.weigeringForm.value);
            }) // if were here ok was clicked.
                .catch(function (x) { }); // if were here cancel was clicked.
        }
    };
    WachtlijstIntakeViewComponent.prototype.weigeringAnnuleren = function (data) {
        var _this = this;
        this.aanvraagWeigeringService
            .registreren(this.intake.id, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function (x) {
            _this.fetchWeigeringData(null);
        }))
            .subscribe(function (x) {
            _this.toastr.success('Weigeringstermijn is geannuleerd', 'Weigeringstermijn');
        }, function (x) {
            _this.toastr.error('Kon de weigeringstermijn niet annuleren', 'Weigeringstermijn');
            if (x.ExtraInfo) {
                for (var xtra in x.ExtraInfo) {
                    _this.toastr.warning(xtra, x.ExtraInfo[xtra].join(','));
                }
            }
        });
    };
    WachtlijstIntakeViewComponent.prototype.weigeringRegistreren = function (data) {
        var _this = this;
        this.aanvraagWeigeringService
            .registreren(this.intake.id, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function (x) {
            _this.weigeringForm = null;
            _this.sluitWeigeringAfDisplay = false;
        }))
            .subscribe(function (x) {
            _this.toastr.success('Weigeringen is geregistreerd', 'Weigering');
            location.replace('/wachtlijst/registratie/' + _this.intake.id);
        }, function (x) {
            _this.toastr.error('Kon de weigering niet registreren', 'Weigering');
            if (x.ExtraInfo) {
                for (var xtra in x.ExtraInfo) {
                    _this.toastr.warning(xtra, x.ExtraInfo[xtra].join(','));
                }
            }
        });
    };
    WachtlijstIntakeViewComponent.prototype.displayErrors = function (x) {
        if (x.ExtraInfo) {
            for (var xtra in x.ExtraInfo) {
                this.toastr.warning(x.ExtraInfo[xtra].join(','), xtra);
            }
        }
    };
    WachtlijstIntakeViewComponent.prototype.changeDate = function ($event) {
        this.weigeringForm.controls['eindDatum'].patchValue($event.addMonths(1).addDays(-1));
    };
    WachtlijstIntakeViewComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
        { type: ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Modal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_13__["KavelService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_13__["AbonnementService"] },
        { type: _componenten_validators__WEBPACK_IMPORTED_MODULE_11__["ValidatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_aanvraag_weigering_service__WEBPACK_IMPORTED_MODULE_14__["AanvraagWeigeringService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _auth__WEBPACK_IMPORTED_MODULE_10__["AuthService"] }
    ]; };
    WachtlijstIntakeViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            template: _raw_loader_html_wachtlijst_intake_view_component_html__WEBPACK_IMPORTED_MODULE_1___default.a,
            styles: [".badge, .kavel-detail { cursor: pointer; text-decoration: none;}", "\n      .ajax-loading {\n        background-color: #ffffff;\n        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPSc2NHB4JyBoZWlnaHQ9JzY0cHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLXJpbmciPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgc3Ryb2tlLWRhc2hhcnJheT0iMTYzLjM2MjgxNzk4NjY2OTI2IDg3Ljk2NDU5NDMwMDUxNDIiIHN0cm9rZT0iI2QyNTM1MyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDsxODAgNTAgNTA7MzYwIDUwIDUwOyIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMHMiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L3N2Zz4=);\n        background-size: 50px 50px;\n        background-position: center;\n        background-repeat: no-repeat;\n      }\n    "]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Modal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_13__["KavelService"],
            _services__WEBPACK_IMPORTED_MODULE_13__["AbonnementService"],
            _componenten_validators__WEBPACK_IMPORTED_MODULE_11__["ValidatorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_aanvraag_weigering_service__WEBPACK_IMPORTED_MODULE_14__["AanvraagWeigeringService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _auth__WEBPACK_IMPORTED_MODULE_10__["AuthService"]])
    ], WachtlijstIntakeViewComponent);
    return WachtlijstIntakeViewComponent;
}());



/***/ }),

/***/ "ocNT":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/wachtlijst/html/wachtlijst-intake-klant.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <mafo-panel selector=\"title\" [collapsable]=\"false\" [open]=\"true\">\r\n            <mafo-panel-heading>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12\">\r\n                        <h3>\r\n                            <span class=\"fa fa-dot-circle-o\"></span>&nbsp;\r\n                            {{pageTitle}}\r\n                        </h3>\r\n                    </div>\r\n                </div>\r\n            </mafo-panel-heading>\r\n            <mafo-panel-body>\r\n                <div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-2\">\r\n                            <select class=\"form-control\" (change)=\"isCommercieel($event.target.value)\">\r\n                                <option selected=\"selected\" value=\"TRUE\">Commercieel</option>\r\n                                <option value=\"FALSE\">Niet-commercieel</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <search (search)=\"searchKlanten($event)\"></search>\r\n                        </div>\r\n                        <div class=\"col-md-7\">\r\n                            <a class=\"btn btn-primary pull-right\" (click)=\"nieuweKlant()\">\r\n                                <i class=\"fa fa-plus\"></i>\r\n                                <span class=\"hidden-sm hidden-xs\">&nbsp;&nbsp;Nieuwe klant</span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                    <br />\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <dp-datagrid id=\"new-intake-klanten-table\" [data]=\"data\" [options]=\"gridOptions\" (fetchData)=\"fetchData($event)\" (rowClicked)=\"rowClicked($event)\">\r\n                            </dp-datagrid>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mafo-panel-body>\r\n        </mafo-panel>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "qrYu":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/wachtlijst/html/wachtlijst-hernieuwing-inschrijving.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <mafo-panel selector=\"title\" [collapsable]=\"false\" [open]=\"true\">\r\n            <mafo-panel-heading>\r\n                <h3 id=\"title-hernieuwing-inschrijving\">\r\n                    <span class=\"fa fa-dot-circle-o\"></span>&nbsp;\r\n                    Hernieuwing inschrijving\r\n                </h3>\r\n            </mafo-panel-heading>\r\n            <mafo-panel-body>\r\n                <div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\">\r\n                            <search (search)=\"search($event)\"></search>\r\n                        </div>\r\n                    </div>\r\n                    <br />\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <dp-datagrid [data]=\"data\" [options]=\"gridOptions\" (fetchData)=\"fetchData($event)\">\r\n                                <ng-template #rowTemplate let-item=\"item\" let-index=\"index\">\r\n                                    <td>{{item.klant.firmanaam}}</td>\r\n                                    <td>{{item.klant.ondernemingsnr}}</td>\r\n                                    <td>{{item.markt.naam}}</td>\r\n                                    <td>{{berekenVervaldag(item.datumLaatsteHernieuwing) | date: 'dd/MM/yyyy'}}</td>\r\n                                </ng-template>\r\n                                <ng-template #rowActions let-item=\"item\" let-index=\"index\">\r\n                                    <button *ngIf=\"item.status=='GEREGISTREERD'\" title=\"Verwijderen\" class=\"btn btn-danger btn-xs btn-danger\" [attr.data-id]=\"item.id\" (click)=\"showModalDelete(item)\">\r\n                                        <i class=\"fa fa-trash-o\"></i>\r\n                                    </button>\r\n                                    <button title=\"Hernieuw\" class=\"btn btn-success btn-xs btn-success\" [attr.data-id]=\"item.id\" (click)=\"showModalRenew(item)\">\r\n                                        <i class=\"fa fa-repeat\"></i>\r\n                                    </button>\r\n                                </ng-template>\r\n                            </dp-datagrid>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mafo-panel-body>\r\n        </mafo-panel>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "rDcF":
/*!*****************************************************************!*\
  !*** ./ClientApp/app/wachtlijst/wachtlijst-intake.component.ts ***!
  \*****************************************************************/
/*! exports provided: WachtlijstIntakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WachtlijstIntakeComponent", function() { return WachtlijstIntakeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_wachtlijst_intake_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/wachtlijst-intake.component.html */ "9R9U");
/* harmony import */ var _raw_loader_html_wachtlijst_intake_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_wachtlijst_intake_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-modialog/plugins/bootstrap */ "e7Ax");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth */ "qec8");
/* harmony import */ var _componenten_datagrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componenten/datagrid */ "z4/g");
/* harmony import */ var _services_intake_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/intake.service */ "ubql");








var WachtlijstIntakeComponent = /** @class */ (function () {
    function WachtlijstIntakeComponent(intakeService, router, modal, route, auth) {
        this.intakeService = intakeService;
        this.router = router;
        this.modal = modal;
        this.route = route;
        this.auth = auth;
        this.intake = true;
        this.gridOptions = {
            stripedRows: true,
            fields: [
                {
                    field: 'datum',
                    title: 'Datum',
                    sortable: true,
                    sort: _componenten_datagrid__WEBPACK_IMPORTED_MODULE_6__["SortOrder"].Descending,
                },
                {
                    field: 'ondernemingsNr',
                    title: 'OndernemingsNr',
                    sortable: true,
                },
                {
                    field: 'firmanaam',
                    title: 'Firmanaam',
                    sortable: true,
                },
                {
                    field: 'soort',
                    title: 'Soort',
                    sortable: true,
                },
                {
                    field: 'eerstemarkt',
                    title: 'Markten',
                    sortable: true,
                },
            ],
        };
    }
    WachtlijstIntakeComponent.prototype.fetchData = function (page) {
        var _this = this;
        if (!this.page)
            this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }
        if (this.intake) {
            this.page['aanvraagstatuscode'] = 'INTAKE';
        }
        else {
            this.page['aanvraagstatuscode'] = 'GEPREREGISTREERD';
        }
        this.intakeService.getAll(this.page).subscribe(function (x) {
            _this.data = x;
        });
    };
    WachtlijstIntakeComponent.prototype.rowClicked = function (row) {
        if (this.intake) {
            this.router.navigate(['wachtlijst', 'intake', row.data.id]);
        }
        else {
            this.router.navigate(['wachtlijst', 'preregistratie', row.data.id]);
        }
    };
    WachtlijstIntakeComponent.prototype.searchIntakes = function ($event) {
        if (this.page) {
            this.page.page = 1;
            this.page['filter'] = $event.value;
            this.fetchData(this.page);
        }
    };
    WachtlijstIntakeComponent.prototype.marktenTooltip = function (markten) {
        var first = markten.shift();
        var result = markten.join(', ');
        markten.unshift(first);
        return result;
        //let result: string = "";
        //markten.join()
        //for (var i = 1; i < markten.length; i++) {
        //    result += markten[i];
        //}
        //return result;
    };
    WachtlijstIntakeComponent.prototype.showDeleteModal = function ($event) {
        var _this = this;
        this.modal
            .confirm()
            .title('Bevestig verwijderen')
            .body('Weet u zeker dat u dit record wilt verwijderen?')
            .okBtn('verwijderen')
            .open()
            .result.catch() // catch error not related to the result (modal open...)
            .then(function (dialog) { return dialog.result; }) // dialog has more properties,lets just return the promise for a result.
            .then(function (x) { return _this.delete($event.id); }) // if were here ok was clicked.
            .catch(function (x) { }); // if were here cancel was clicked.
    };
    WachtlijstIntakeComponent.prototype.delete = function (intakeId) {
        var _this = this;
        this.intakeService.delete(intakeId).subscribe(function (x) {
            _this.fetchData(_this.page);
        }, function (error) { return (_this.errorMessage = error); });
    };
    WachtlijstIntakeComponent.prototype.edit = function ($event) {
        if (this.intake) {
            this.router.navigate(['wachtlijst', 'intake', $event.id, 'edit']);
        }
        else {
            this.router.navigate(['wachtlijst', 'preregistratie', $event.id, 'edit']);
        }
    };
    WachtlijstIntakeComponent.prototype.ngOnInit = function () {
        this.intake = this.route.snapshot.data['intake'];
        this.pageTitle = this.intake ? 'Intakes' : 'Preregistraties';
        this.security();
    };
    WachtlijstIntakeComponent.prototype.security = function () {
        this.addAanvraag = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_5__["Privilege"].Aanvraag.Add);
        this.updateAanvraag = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_5__["Privilege"].Aanvraag.Update);
        this.deleteAanvraag = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_5__["Privilege"].Aanvraag.Delete);
    };
    WachtlijstIntakeComponent.ctorParameters = function () { return [
        { type: _services_intake_service__WEBPACK_IMPORTED_MODULE_7__["IntakeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _auth__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    WachtlijstIntakeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'mafo-app',
            template: _raw_loader_html_wachtlijst_intake_component_html__WEBPACK_IMPORTED_MODULE_1___default.a,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_intake_service__WEBPACK_IMPORTED_MODULE_7__["IntakeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _auth__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], WachtlijstIntakeComponent);
    return WachtlijstIntakeComponent;
}());



/***/ }),

/***/ "t+BL":
/*!***********************************************************************!*\
  !*** ./ClientApp/app/wachtlijst/wachtlijst-intake-klant.component.ts ***!
  \***********************************************************************/
/*! exports provided: WachtlijstIntakeKlantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WachtlijstIntakeKlantComponent", function() { return WachtlijstIntakeKlantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_wachtlijst_intake_klant_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/wachtlijst-intake-klant.component.html */ "ocNT");
/* harmony import */ var _raw_loader_html_wachtlijst_intake_klant_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_wachtlijst_intake_klant_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _componenten_klant_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componenten/klant-core */ "TDej");
/* harmony import */ var _componenten_datagrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componenten/datagrid */ "z4/g");






var WachtlijstIntakeKlantComponent = /** @class */ (function () {
    function WachtlijstIntakeKlantComponent(klantService, router, route) {
        this.klantService = klantService;
        this.router = router;
        this.route = route;
        this.pageTitle = "Nieuwe intake";
        this.commercieel = true;
        this.gridOptions = {
            stripedRows: true,
            fields: [{
                    field: "firmanaam",
                    title: "Firmanaam",
                    sortable: true,
                    sort: _componenten_datagrid__WEBPACK_IMPORTED_MODULE_5__["SortOrder"].Ascending,
                    width: "25%"
                }, {
                    field: "ondernemingsnr",
                    title: "Ondernemingsnummer",
                    width: "25%"
                }, {
                    field: "contactPersoon",
                    title: "Contactpersoon",
                    width: "25%"
                }, {
                    field: "telefoon",
                    title: "Telefoon",
                    width: "25%"
                }]
        };
    }
    WachtlijstIntakeKlantComponent.prototype.fetchData = function (page) {
        var _this = this;
        if (!this.page)
            this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }
        this.klantService.getAll(this.commercieel, false, this.page).subscribe(function (x) { return _this.data = x; });
    };
    WachtlijstIntakeKlantComponent.prototype.searchKlanten = function ($event) {
        if (this.page) {
            this.page.page = 1;
            this.page["filter"] = $event.value;
            this.fetchData(this.page);
        }
    };
    WachtlijstIntakeKlantComponent.prototype.isCommercieel = function (value) {
        if (value == 'TRUE')
            this.commercieel = true;
        else
            this.commercieel = false;
        this.fetchData(this.page);
    };
    WachtlijstIntakeKlantComponent.prototype.nieuweKlant = function () {
        this.router.navigate(["klant", "nieuw"]);
    };
    WachtlijstIntakeKlantComponent.prototype.rowClicked = function (row) {
        this.router.navigate(["wachtlijst", "intake", "nieuw", row.data.id]);
    };
    WachtlijstIntakeKlantComponent.ctorParameters = function () { return [
        { type: _componenten_klant_core__WEBPACK_IMPORTED_MODULE_4__["KlantService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    WachtlijstIntakeKlantComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: _raw_loader_html_wachtlijst_intake_klant_component_html__WEBPACK_IMPORTED_MODULE_1___default.a
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_componenten_klant_core__WEBPACK_IMPORTED_MODULE_4__["KlantService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WachtlijstIntakeKlantComponent);
    return WachtlijstIntakeKlantComponent;
}());



/***/ }),

/***/ "tUjx":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/wachtlijst/html/wachtlijst-registratie.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <mafo-panel selector=\"title\" [collapsable]=\"false\" [open]=\"true\">\r\n            <mafo-panel-heading>\r\n                <h3 id=\"title-registraties\">Registraties</h3>\r\n            </mafo-panel-heading>\r\n            <mafo-panel-body>\r\n                <div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <form-group>\r\n                                <search [(ngModel)]=\"filter.query\" (search)=\"filterRegistraties($event)\"></search>\r\n                            </form-group>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <form-group>\r\n                                <code-select type=\"District\" [(ngModel)]=\"filter.district\" (ngModelChange)=\"districtChanged($event)\"></code-select>\r\n                            </form-group>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"pull-right\">\r\n                                <form-group>\r\n                                    <dp-slider label=\"Toon enkel toe te wijzen\" [(ngModel)]=\"filter.toeTeWijzen\" (ngModelChange)=\"filterToeTeWijzen($event)\"></dp-slider>\r\n                                </form-group>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr />\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <dp-datagrid id =\"registraties-table\" [data]=\"data\" [options]=\"gridOptions\" (fetchData)=\"fetchData($event)\" (rowClicked)=\"rowClicked($event)\">\r\n                                <ng-template #rowTemplate let-item=\"item\" let-index=\"index\">\r\n                                    <td>\r\n                                        <code-display type=\"district\" [value]=\"item.district.code\"></code-display>\r\n                                    </td>\r\n                                    <td>\r\n                                        <code-display type=\"dagvandeweek\" [value]=\"item.dagVanDeWeek.code\"></code-display>\r\n                                    </td>\r\n                                    <td>\r\n                                        {{item.locatie.naam}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{item.naam}}\r\n                                    </td>\r\n                                </ng-template>\r\n                                <ng-template #rowActions let-item=\"item\" let-index=\"index\">\r\n                                    <span title=\"Nog te bedelen kavels\" class=\"badge bg-red\">{{item.toewijsbareKavels}}</span>\r\n                                    <span title=\"Totaal aantal aangevraagde kavels\" class=\"badge\">{{item.openstaandeGeregistreerdeKavels}}</span>\r\n                                </ng-template>\r\n                            </dp-datagrid>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mafo-panel-body>\r\n        </mafo-panel>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "ubql":
/*!**************************************************!*\
  !*** ./ClientApp/app/services/intake.service.ts ***!
  \**************************************************/
/*! exports provided: IntakeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntakeService", function() { return IntakeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.settings */ "HRaI");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-slim-loading-bar */ "k+RO");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core */ "BxFb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");







var IntakeService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(IntakeService, _super);
    function IntakeService(_http, loader) {
        var _this = _super.call(this, _http, loader) || this;
        _this._http = _http;
        _this.loader = loader;
        _this.url = _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "intakes/";
        return _this;
    }
    IntakeService.prototype.getAll = function (query) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]();
        if (query) {
            params = params.set("page", query.page.toString());
            params = params.set("pageSize", query.pageSize.toString());
            if (query.filter)
                params = params.set("filter", query.filter);
            if (query.aanvraagstatuscode)
                params = params.set("aanvraagStatusCode", query.aanvraagstatuscode);
            if (query.sort && query.sort.length > 0)
                params = params.set("sort", query.sort.join(","));
        }
        this.loader.start();
        return this._http.get(this.url, { headers: this.jsonHeaders, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }));
    };
    IntakeService.prototype.get = function (id) {
        var _this = this;
        this.loader.start();
        return this._http.get(this.url + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    IntakeService.prototype.delete = function (id) {
        var _this = this;
        this.loader.start();
        return this._http.delete(this.url + id, { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    IntakeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__["SlimLoadingBarService"] }
    ]; };
    IntakeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__["SlimLoadingBarService"]])
    ], IntakeService);
    return IntakeService;
}(_core__WEBPACK_IMPORTED_MODULE_5__["BaseService"]));



/***/ }),

/***/ "wcVw":
/*!**************************************************************!*\
  !*** ./ClientApp/app/services/aanvraag-weigering.service.ts ***!
  \**************************************************************/
/*! exports provided: AanvraagWeigeringService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AanvraagWeigeringService", function() { return AanvraagWeigeringService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.settings */ "HRaI");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-slim-loading-bar */ "k+RO");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core */ "BxFb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");







var AanvraagWeigeringService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AanvraagWeigeringService, _super);
    function AanvraagWeigeringService(_http, loader) {
        var _this = _super.call(this, _http, loader) || this;
        _this._http = _http;
        _this.loader = loader;
        _this.url = _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT;
        return _this;
    }
    AanvraagWeigeringService.prototype.getAll = function (aanvraagId) {
        var _this = this;
        this.loader.start();
        return this._http.get(this.url + "requests/" + aanvraagId + "/refusals").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (data) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    AanvraagWeigeringService.prototype.starten = function (aanvraagId, item) {
        var _this = this;
        this.loader.start();
        return this._http.post(this.url + "requests/" + aanvraagId + "/refusals", item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (data) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    AanvraagWeigeringService.prototype.registreren = function (aanvraagId, item) {
        var _this = this;
        this.loader.start();
        return this._http.put(this.url + "requests/" + aanvraagId + "/refusals/" + item.id, item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (data) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    AanvraagWeigeringService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__["SlimLoadingBarService"] }
    ]; };
    AanvraagWeigeringService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__["SlimLoadingBarService"]])
    ], AanvraagWeigeringService);
    return AanvraagWeigeringService;
}(_core__WEBPACK_IMPORTED_MODULE_5__["BaseService"]));



/***/ })

}]);
//# sourceMappingURL=wachtlijst-wachtlijst-module.js.map