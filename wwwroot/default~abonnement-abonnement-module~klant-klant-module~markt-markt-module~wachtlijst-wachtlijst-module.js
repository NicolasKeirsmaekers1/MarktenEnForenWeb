(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~abonnement-abonnement-module~klant-klant-module~markt-markt-module~wachtlijst-wachtlijst-module"],{

/***/ "+qOC":
/*!*************************************************************!*\
  !*** ./ClientApp/app/componenten/klant-core/app.address.ts ***!
  \*************************************************************/
/*! exports provided: AddressComponent, Adres */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adres", function() { return Adres; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_app_address_layout_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/app.address.layout.html */ "ZTOb");
/* harmony import */ var _raw_loader_html_app_address_layout_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_app_address_layout_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");




var AddressComponent = /** @class */ (function () {
    function AddressComponent(fb) {
        var _this = this;
        this.fb = fb;
        this.disable = false;
        this.required = false;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.buildForm = function () {
            var validators = [];
            if (_this.required)
                validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
            _this.addressForm.addControl("id", _this.fb.control(_this.address.id));
            _this.addressForm.addControl("straat", _this.fb.control(_this.address.straat, validators));
            _this.addressForm.addControl("nr", _this.fb.control(_this.address.nr, validators));
            _this.addressForm.addControl("postcode", _this.fb.control(_this.address.postcode, validators));
            _this.addressForm.addControl("gemeente", _this.fb.control(_this.address.gemeente, validators));
            _this.addressForm.addControl("isMaatschappelijkeZetel", _this.fb.control(_this.address.isMaatschappelijkeZetel, validators));
            _this.addressForm.addControl("isFacturatieAdres", _this.fb.control(_this.address.isFacturatieAdres, validators));
            if (_this.disable) {
                _this.addressForm.disable();
            }
        };
    }
    Object.defineProperty(AddressComponent.prototype, "address", {
        get: function () {
            return this._address || new Adres();
        },
        set: function (address) {
            this._address = address;
        },
        enumerable: false,
        configurable: true
    });
    AddressComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    AddressComponent.prototype.ngOnChanges = function (changes) {
        //Dynamic add or remove validation by Input parameter
        if (changes["disable"] !== undefined && this.addressForm !== undefined) {
            var disabled = changes["disable"].currentValue;
            if (disabled) {
                this.addressForm.disable();
            }
            else {
                this.addressForm.enable();
            }
        }
        var address = changes["address"];
        if (address && this.addressForm && Object.keys(this.addressForm.controls).length > 0) {
            this.addressForm.setValue(this._address);
        }
    };
    AddressComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    AddressComponent.propDecorators = {
        addressForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ["group",] }],
        disable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        address: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    AddressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "mafo-address",
            template: _raw_loader_html_app_address_layout_html__WEBPACK_IMPORTED_MODULE_1___default.a
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], AddressComponent);
    return AddressComponent;
}());

var Adres = /** @class */ (function () {
    function Adres(id, straat, nr, postcode, gemeente, isMaatschappelijkeZetel, isFacturatieAdres) {
        if (id === void 0) { id = 0; }
        if (straat === void 0) { straat = ""; }
        if (nr === void 0) { nr = ""; }
        if (postcode === void 0) { postcode = ""; }
        if (gemeente === void 0) { gemeente = ""; }
        if (isMaatschappelijkeZetel === void 0) { isMaatschappelijkeZetel = false; }
        if (isFacturatieAdres === void 0) { isFacturatieAdres = false; }
        this.id = 0;
        this.straat = "";
        this.nr = "";
        this.postcode = "";
        this.gemeente = "";
        this.isMaatschappelijkeZetel = false;
        this.isFacturatieAdres = false;
        this.id = id;
        this.straat = straat;
        this.nr = nr;
        this.postcode = postcode;
        this.gemeente = gemeente;
        this.isMaatschappelijkeZetel = isMaatschappelijkeZetel;
        this.isFacturatieAdres = isFacturatieAdres;
    }
    return Adres;
}());



/***/ }),

/***/ "0bzg":
/*!******************************************************************************!*\
  !*** ./ClientApp/app/componenten/klant-core/onderneming-select.component.ts ***!
  \******************************************************************************/
/*! exports provided: OndernemingSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OndernemingSelectComponent", function() { return OndernemingSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _onderneming_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onderneming.service */ "Vji0");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "EApP");





var OndernemingSelectComponent = /** @class */ (function () {
    function OndernemingSelectComponent(ondernemingSvc, toastr) {
        this.ondernemingSvc = ondernemingSvc;
        this.toastr = toastr;
        this._value = "";
        this.propagateChange = function (_) { };
        this.onResult = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    OndernemingSelectComponent_1 = OndernemingSelectComponent;
    Object.defineProperty(OndernemingSelectComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            this.propagateChange(this._value);
        },
        enumerable: false,
        configurable: true
    });
    ;
    OndernemingSelectComponent.prototype.validateOndernemingsnr = function (value) {
        if (value.length > 9) {
            return false;
        }
    };
    OndernemingSelectComponent.prototype.searchOndernemingsnummer = function ($event) {
        var _this = this;
        if (!$event || $event.value.length < 9) {
            this.toastr.warning("Ondernemingsnummer is te kort.", "Ongeldig ondernemingsnummer");
        }
        else {
            this.ondernemingSvc.search($event.value).subscribe(function (x) {
                _this.onResult.emit(x);
            }, function (error) {
                _this.toastr.error("Onderneming niet gevonden in het systeem.", "Onderneming niet gevonden");
                if (error.ExtraInfo) {
                    for (var xtra in error.ExtraInfo) {
                        _this.toastr.warning(error.ExtraInfo[xtra].join(","), xtra);
                    }
                }
                _this.onResult.emit(null);
            });
        }
    };
    OndernemingSelectComponent.prototype.writeValue = function (value) {
        this.value = value || "";
    };
    OndernemingSelectComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    OndernemingSelectComponent.prototype.registerOnTouched = function (fn) { };
    OndernemingSelectComponent.prototype.validate = function () {
        console.log("test");
    };
    var OndernemingSelectComponent_1;
    OndernemingSelectComponent.ctorParameters = function () { return [
        { type: _onderneming_service__WEBPACK_IMPORTED_MODULE_3__["OndernemingService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    OndernemingSelectComponent.propDecorators = {
        onResult: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    OndernemingSelectComponent = OndernemingSelectComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "onderneming-select",
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return OndernemingSelectComponent_1; }), multi: true }
            ],
            template: "<search [(ngModel)]=\"value\"(keypress)=\"validateOndernemingsnr(value)\" (search)=\"searchOndernemingsnummer($event)\"></search>"
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_onderneming_service__WEBPACK_IMPORTED_MODULE_3__["OndernemingService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], OndernemingSelectComponent);
    return OndernemingSelectComponent;
}());



/***/ }),

/***/ "8T0U":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/componenten/klant-core/html/contactpersoon.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"contactPersoonForm\">\r\n    <mafo-panel [selector]=\"selector\" [collapsable]=\"true\" [open]=\"true\">\r\n        <mafo-panel-heading>\r\n            <h6>\r\n                <i class=\"fa fa-remove fa-lg text-danger\" (click)=\"remove($event)\" *ngIf=\"!hoofdContact\"></i>\r\n                &nbsp;&nbsp;\r\n                {{title}}\r\n            </h6>\r\n        </mafo-panel-heading>\r\n        <mafo-panel-actions>\r\n            <div class=\"checkbox\">\r\n                <label>\r\n                    <input type=\"checkbox\" formControlName=\"isHoofdcontactPersoon\" (change)=\"hoofdcontactSelected()\" />\r\n                    <b>Hoofdcontact</b>\r\n                </label>\r\n            </div>\r\n        </mafo-panel-actions>\r\n        <mafo-panel-body>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-md-6\">\r\n                    <form-group label=\"Voornaam\">\r\n                        <input class=\"form-control\" type=\"text\" formControlName=\"voornaam\" />\r\n                        <help-block type=\"required\">Voornaam is verplicht</help-block>\r\n                        <help-block type=\"maxLength\">Maximaal 50 characters</help-block>\r\n                    </form-group>\r\n                </div>\r\n                <div class=\"col-xs-12 col-md-6\">\r\n                    <form-group label=\"Naam\">\r\n                        <input class=\"form-control\" type=\"text\" formControlName=\"naam\" />\r\n                        <help-block type=\"required\">Naam is verplicht</help-block>\r\n                        <help-block type=\"maxLength\">Maximaal 50 characters</help-block>\r\n                    </form-group>\r\n                </div>\r\n            </div>\r\n            <mafo-address [address]=\"persoon.adres\" [group]=\"contactPersoonForm.controls.adres\" [required]=\"false\"></mafo-address>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-md-6\">\r\n                    <form-group label=\"Telefoon\">\r\n                        <input class=\"form-control\" type=\"text\" formControlName=\"telefoon\" />\r\n                        <help-block type=\"pattern\">Geen geldig telefoon nummer</help-block>\r\n                        <help-block type=\"maxLength\">Maximaal 30 characters</help-block>\r\n                    </form-group>\r\n                </div>\r\n                <div class=\"col-xs-12 col-md-6\">\r\n                    <form-group label=\"Gsm\">\r\n                        <input class=\"form-control\" type=\"text\" formControlName=\"gsm\" />\r\n                        <help-block type=\"pattern\">Geen geldig gsm nummer</help-block>\r\n                        <help-block type=\"maxLength\">Maximaal 30 characters</help-block>\r\n                    </form-group>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-md-6\">\r\n                    <form-group label=\"Fax\">\r\n                        <input class=\"form-control\" type=\"text\" formControlName=\"fax\" />\r\n                        <help-block type=\"pattern\">Geen geldig fax nummer</help-block>\r\n                        <help-block type=\"maxLength\">Maximaal 30 characters</help-block>\r\n                    </form-group>\r\n                </div>\r\n                <div class=\"col-xs-12 col-md-6\">\r\n                    <form-group label=\"E-mail\">\r\n                        <input class=\"form-control\" type=\"text\" formControlName=\"email\" />\r\n                        <help-block type=\"validEmail\">Geen geldig e-mail</help-block>\r\n                        <help-block type=\"maxLength\">Maximaal 50 characters</help-block>\r\n                    </form-group>\r\n                </div>\r\n            </div>\r\n        </mafo-panel-body>\r\n    </mafo-panel>\r\n</div>"

/***/ }),

/***/ "TDej":
/*!*******************************************************!*\
  !*** ./ClientApp/app/componenten/klant-core/index.ts ***!
  \*******************************************************/
/*! exports provided: KlantCoreModule, AddressComponent, Adres, Persoon, ContactPersoonComponent, KlantDetailCoreComponent, KlantService, OndernemingService, OndernemingSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlantCoreModule", function() { return KlantCoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _app_address__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.address */ "+qOC");
/* harmony import */ var _contactpersoon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contactpersoon.component */ "vRQ+");
/* harmony import */ var _klant_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./klant-detail.component */ "UL9a");
/* harmony import */ var _onderneming_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./onderneming-select.component */ "0bzg");
/* harmony import */ var _onderneming_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./onderneming.service */ "Vji0");
/* harmony import */ var _klant_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./klant.service */ "msyP");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../validators */ "2/Vv");
/* harmony import */ var _document_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../document-upload */ "zY+x");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../bootstrap */ "CTaV");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared */ "T/Yl");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../search */ "su0z");
/* harmony import */ var _code_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../code-select */ "HW5m");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return _app_address__WEBPACK_IMPORTED_MODULE_4__["AddressComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Adres", function() { return _app_address__WEBPACK_IMPORTED_MODULE_4__["Adres"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Persoon", function() { return _contactpersoon_component__WEBPACK_IMPORTED_MODULE_5__["Persoon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactPersoonComponent", function() { return _contactpersoon_component__WEBPACK_IMPORTED_MODULE_5__["ContactPersoonComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KlantDetailCoreComponent", function() { return _klant_detail_component__WEBPACK_IMPORTED_MODULE_6__["KlantDetailCoreComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KlantService", function() { return _klant_service__WEBPACK_IMPORTED_MODULE_9__["KlantService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OndernemingService", function() { return _onderneming_service__WEBPACK_IMPORTED_MODULE_8__["OndernemingService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OndernemingSelectComponent", function() { return _onderneming_select_component__WEBPACK_IMPORTED_MODULE_7__["OndernemingSelectComponent"]; });

















var components = [
    _onderneming_select_component__WEBPACK_IMPORTED_MODULE_7__["OndernemingSelectComponent"], _app_address__WEBPACK_IMPORTED_MODULE_4__["AddressComponent"], _contactpersoon_component__WEBPACK_IMPORTED_MODULE_5__["ContactPersoonComponent"], _klant_detail_component__WEBPACK_IMPORTED_MODULE_6__["KlantDetailCoreComponent"]
];
var modules = [
    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
    _code_select__WEBPACK_IMPORTED_MODULE_15__["CodeSelectModule"],
    _search__WEBPACK_IMPORTED_MODULE_14__["SearchModule"],
    _validators__WEBPACK_IMPORTED_MODULE_10__["ValidatorsModule"],
    _document_upload__WEBPACK_IMPORTED_MODULE_11__["DocumentUploadModule"],
    _bootstrap__WEBPACK_IMPORTED_MODULE_12__["BootstrapModule"],
    _shared__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
];
var KlantCoreModule = /** @class */ (function () {
    function KlantCoreModule() {
    }
    KlantCoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: components,
            imports: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(modules),
            providers: [_klant_service__WEBPACK_IMPORTED_MODULE_9__["KlantService"], _onderneming_service__WEBPACK_IMPORTED_MODULE_8__["OndernemingService"]],
            exports: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(components, modules),
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], KlantCoreModule);
    return KlantCoreModule;
}());









/***/ }),

/***/ "UL9a":
/*!************************************************************************!*\
  !*** ./ClientApp/app/componenten/klant-core/klant-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: KlantDetailCoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlantDetailCoreComponent", function() { return KlantDetailCoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_klant_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/klant-detail.component.html */ "bHa5");
/* harmony import */ var _raw_loader_html_klant_detail_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_klant_detail_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _klant_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./klant.service */ "msyP");
/* harmony import */ var _onderneming_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./onderneming.service */ "Vji0");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services */ "mZsw");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../validators */ "2/Vv");
/* harmony import */ var _datagrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../datagrid */ "z4/g");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core */ "BxFb");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../auth */ "qec8");
/* harmony import */ var _contactpersoon_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contactpersoon.component */ "vRQ+");
/* harmony import */ var _app_address__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.address */ "+qOC");
















var KlantDetailCoreComponent = /** @class */ (function () {
    function KlantDetailCoreComponent(route, router, toastr, fb, klantSvc, ondernemingSvc, abonnementService, auth, validationService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.fb = fb;
        this.klantSvc = klantSvc;
        this.ondernemingSvc = ondernemingSvc;
        this.abonnementService = abonnementService;
        this.auth = auth;
        this.validationService = validationService;
        this.selectType = false;
        this.limitedView = false;
        this._klant = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.onCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.hasJuridischeEntiteitError = false;
        this.facturatieAdresDisabled = false;
        this.openstaandeAanvragenOptions = {
            stripedRows: true,
            fields: [{
                    field: "datum",
                    title: "Datum",
                    sortable: true,
                    sort: _datagrid__WEBPACK_IMPORTED_MODULE_11__["SortOrder"].Ascending
                }, {
                    field: "status",
                    title: "Status"
                }, {
                    field: "positie",
                    title: "Positie"
                }, {
                    field: "soort",
                    title: "Soort"
                }, {
                    field: "markt.naam",
                    title: "Markt"
                }, {
                    field: "district",
                    title: "District"
                }, {
                    field: "aantalKavels",
                    title: "Kavels"
                }, {
                    field: "opmerkingen",
                    title: "Opmerkingen"
                }]
        };
        this.abonnementenOptions = {
            stripedRows: true,
            fields: [{
                    field: "begindatum",
                    title: "Begin",
                    sortable: true,
                    sort: _datagrid__WEBPACK_IMPORTED_MODULE_11__["SortOrder"].Ascending
                }, {
                    field: "einddatum",
                    title: "Einde"
                }, {
                    field: "markt.naam",
                    title: "Markt"
                }, {
                    field: "markt.districtCode",
                    title: "District"
                }, {
                    field: "aantalKavels",
                    title: "# Kavels"
                }, {
                    field: "statusCode",
                    title: "Status"
                }, {
                    field: "uitstallingCode",
                    title: "Uitstalling"
                }, {
                    field: "verkoopCode",
                    title: "Verkoop"
                }, {
                    field: "elektriciteitCode",
                    title: "Elektriciteit"
                }]
        };
        //Form
        this.copyAddressToFacturation = function () {
            if (_this.facturatieAdresDisabled) {
                _this.klantForm.get("facturatieAdres").patchValue(_this.klantForm.get("maatschappelijkeZetel").value);
            }
        };
    }
    Object.defineProperty(KlantDetailCoreComponent.prototype, "klant", {
        get: function () {
            return this._klant.getValue();
        },
        set: function (value) {
            if (value.contactPersonen && value.contactPersonen.length === 0)
                value.contactPersonen = [new _contactpersoon_component__WEBPACK_IMPORTED_MODULE_14__["Persoon"](true)];
            var local = Object.assign({
                id: 0,
                isCommercieel: true,
                firmanaam: "",
                juridischeEntiteit: "",
                ondernemingsnr: "",
                telefoon: "",
                gsm: "",
                email: "",
                fax: "",
                contactPersonen: [new _contactpersoon_component__WEBPACK_IMPORTED_MODULE_14__["Persoon"](true)],
                maatschappelijkeZetel: new _app_address__WEBPACK_IMPORTED_MODULE_15__["Adres"](),
                facturatieAdres: new _app_address__WEBPACK_IMPORTED_MODULE_15__["Adres"](),
                kboStatus: ""
            }, value);
            if (this.klant !== local)
                this._klant.next(local);
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(KlantDetailCoreComponent.prototype, "title", {
        get: function () {
            var title = this.klantForm.get("firmanaam").value;
            return title.replace(/\s/g, "").length <= 0 ? "Nieuwe klant" : "Klant: " + title;
        },
        enumerable: false,
        configurable: true
    });
    KlantDetailCoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.security();
        this.buildForm();
        this._klant.subscribe(function (x) {
            if (_this.klant)
                _this.setKlant();
        });
        this.klantUpdating = false;
    };
    KlantDetailCoreComponent.prototype.checkChanges = function () {
        if (this.klantForm.controls['firmanaam'].value != this.klant.firmanaam) {
            this.naamChanged = true;
        }
        else {
            this.telChanged = false;
        }
        if (this.klantForm.controls['telefoon'].value != this.klant.telefoon) {
            this.telChanged = true;
        }
        else {
            this.telChanged = false;
        }
        if (this.klantForm.controls['gsm'].value != this.klant.gsm) {
            this.gsmChanged = true;
        }
        else {
            this.gsmChanged = false;
        }
        if (this.klantForm.controls['fax'].value != this.klant.fax) {
            this.faxChanged = true;
        }
        else {
            this.faxChanged = false;
        }
        if (this.klantForm.controls['juridischeEntiteit'].value != this.klant.juridischeEntiteit) {
            this.juridischChanged = true;
        }
        else {
            this.juridischChanged = false;
        }
        if (this.klantForm.controls['email'].value != this.klant.email) {
            this.emailChanged = true;
        }
        else {
            this.emailChanged = false;
        }
        if (this.klantForm.controls['kboStatus'].value != this.klant.kboStatus) {
            this.kboChanged = true;
        }
        else {
            this.kboChanged = false;
        }
    };
    KlantDetailCoreComponent.prototype.setKlant = function () {
        this.klantForm.markAsPristine();
        if (this.klantForm.controls['firmanaam'].value != "") {
            this.checkChanges();
        }
        this.klantForm.reset(this.klant);
        this.contactPersonen.controls.splice(0, this.contactPersonen.controls.length);
        for (var _i = 0, _a = this.klant.contactPersonen; _i < _a.length; _i++) {
            var persoon = _a[_i];
            this.contactPersonen.push(this.fb.group({}));
        }
        //if (this.klant.id <= 0) {
        //    const adres = new Adres();
        //    this.klant.maatschappelijkeZetel = adres;
        //}
        this.facturatieAdresDisabled = this.klant.id <= 0 ? true : JSON.stringify(this.klant.maatschappelijkeZetel) === JSON.stringify(this.klant.facturatieAdres);
    };
    KlantDetailCoreComponent.prototype.searchOndernemingsnummer = function (messageEnrichedOndernmingOndernmening) {
        if (messageEnrichedOndernmingOndernmening) {
            this.hasJuridischeEntiteitError = false;
            if ("Juridische Entiteit" in messageEnrichedOndernmingOndernmening.messages) {
                this.errorMessage = messageEnrichedOndernmingOndernmening.messages["Juridische Entiteit"];
                this.hasJuridischeEntiteitError = true;
            }
            this.klant = messageEnrichedOndernmingOndernmening.data;
        }
        if (this.klant)
            this.setKlant();
    };
    KlantDetailCoreComponent.prototype.fetchOpenstaandeAanvragen = function (page) {
        var _this = this;
        this.klantSvc.getAanvragen(this.klant.id, page).subscribe(function (succes) {
            _this.openstaandeAanvragenData = succes;
        }, function (x) {
            _this.toastr.error("Kon de openstaande aanvragen voor deze klant niet inladen", "Openstaande aanvragen");
            if (x.ExtraInfo) {
                for (var xtra in x.ExtraInfo) {
                    _this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                }
            }
        });
    };
    KlantDetailCoreComponent.prototype.openstaandeAanvragenRowClicked = function (row) {
        switch (row.data.status) {
            case _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Intake:
                this.router.navigate(["wachtlijst", "intake", row.data.id]);
                break;
            case _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Gepreregistreerd:
                this.router.navigate(["wachtlijst", "preregistratie", row.data.id]);
                break;
            case _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Geregistreerd:
                this.router.navigate(["wachtlijst", "registratie", row.data.id]);
                break;
            case _core__WEBPACK_IMPORTED_MODULE_12__["ApplicationConstants"].AanvraagStatus.Gereserveerd:
                this.router.navigate(["wachtlijst", "reservatie", row.data.id]);
                break;
            default: ;
        }
    };
    KlantDetailCoreComponent.prototype.fetchAbonnementen = function (page) {
        var _this = this;
        this.abonnementService.getAll(page, { klantId: this.klant.id }).subscribe(function (x) {
            _this.abonnementenData = x;
        }, function (error) {
            _this.toastr.error("Kon de lopende abonnementen voor deze klant niet inladen", "Lopende abonnementen");
        });
    };
    KlantDetailCoreComponent.prototype.abonnementenRowClicked = function (row) {
        this.router.navigate(["abonnement", row.data.id]);
    };
    Object.defineProperty(KlantDetailCoreComponent.prototype, "contactPersonen", {
        //Contactpersonen
        get: function () {
            return this.klantForm.get("contactPersonen");
        },
        enumerable: false,
        configurable: true
    });
    KlantDetailCoreComponent.prototype.hoofdContactChanged = function (index) {
        this.contactPersonen.controls.forEach(function (fg, idx) {
            if (idx === index)
                return;
            fg.get("isHoofdcontactPersoon").reset({ value: false, disabled: false });
        });
    };
    KlantDetailCoreComponent.prototype.removeContactpersoon = function (index) {
        this.contactPersonen.removeAt(index);
    };
    KlantDetailCoreComponent.prototype.addContact = function () {
        var control = this.klantForm.controls["contactPersonen"];
        control.push(this.fb.group({}));
    };
    ;
    KlantDetailCoreComponent.prototype.updateKlantFromKBO = function () {
        var _this = this;
        this.klantUpdating = true;
        this.hasJuridischeEntiteitError = false;
        if (this.klant.ondernemingsnr.length < 10) {
            this.toastr.warning("Ondernemingsnummer is te kort.", "Ongeldig ondernemingsnummer");
        }
        else {
            this.ondernemingSvc.updateFromKBO(this.klant.ondernemingsnr).subscribe(function (x) {
                _this.klant = x.data;
                _this.toastr.success("Gegevens van de klant zijn opgehaald uit KBO en geupdate", "Update onderneming");
                _this.klantUpdating = false;
                _this.klantUpdateAfgerond = true;
                if ("Juridische Entiteit" in x.messages) {
                    _this.errorMessage = x.messages["Juridische Entiteit"];
                    _this.hasJuridischeEntiteitError = true;
                }
                // if (this.klant) this.setKlant();
            }, function (error) {
                _this.toastr.warning("Onderneming niet gevonden in het systeem.", "Onderneming niet gevonden");
                //this.onResult.emit(null);
            });
        }
    };
    ;
    KlantDetailCoreComponent.prototype.disableFacturatieAdres = function () {
        this.facturatieAdresDisabled = !this.facturatieAdresDisabled;
        this.copyAddressToFacturation();
    };
    KlantDetailCoreComponent.prototype.buildForm = function () {
        this.klantForm = this.fb.group({
            'id': [0],
            'isCommercieel': [true],
            'ondernemingsnr': ["", this.buildOndernemingsNrValidation()],
            'firmanaam': ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]],
            'juridischeEntiteit': ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            'telefoon': ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("(\\+|0)\\d+")]],
            'fax': ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("(\\+|0)\\d+")]],
            'gsm': ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("(\\+|0)\\d+")]],
            'email': ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50), _validators__WEBPACK_IMPORTED_MODULE_10__["CustomValidators"].validEmail]],
            'kboStatus': ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]],
            'maatschappelijkeZetel': this.fb.group({}),
            'facturatieAdres': this.fb.group({}),
            'contactPersonen': this.fb.array([])
        });
    };
    KlantDetailCoreComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.klantForm.valid) {
            this.validationService.valideFormGroup(this.klantForm);
            this.toastr.warning("Sommige velden bevatten geen geldige waarden", "Ongeldig formulier");
        }
        else {
            this.klantSvc.save(this.klantForm.value).subscribe(function (response) {
                _this.klant = response;
                //this.klantForm.patchValue(this.klant);
                if (_this.onCreated.observers.length > 0) {
                    _this.onCreated.emit(_this.klant);
                }
                _this.toastr.success("Klant succesvol bewaard", "Klant bewaren");
            }, function (x) {
                _this.toastr.error("Klant kon niet worden bewaard.", "Klant bewaren");
                if (x.ExtraInfo) {
                    for (var xtra in x.ExtraInfo) {
                        _this.toastr.warning(x.ExtraInfo[xtra].join(","), xtra);
                    }
                }
            });
        }
    };
    ;
    //Validation
    KlantDetailCoreComponent.prototype.buildOndernemingsNrValidation = function () {
        var validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0]\\d{9}$")];
        return this.klant && this.klant.isCommercieel ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(validators, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]) : validators;
    };
    KlantDetailCoreComponent.prototype.security = function () {
        this.updateKlant = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_13__["Privilege"].Klant.Update);
    };
    KlantDetailCoreComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _klant_service__WEBPACK_IMPORTED_MODULE_7__["KlantService"] },
        { type: _onderneming_service__WEBPACK_IMPORTED_MODULE_8__["OndernemingService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_9__["AbonnementService"] },
        { type: _auth__WEBPACK_IMPORTED_MODULE_13__["AuthService"] },
        { type: _validators__WEBPACK_IMPORTED_MODULE_10__["ValidatorService"] }
    ]; };
    KlantDetailCoreComponent.propDecorators = {
        selectType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        limitedView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        klant: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        onCreated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    KlantDetailCoreComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "klant-detail",
            template: _raw_loader_html_klant_detail_component_html__WEBPACK_IMPORTED_MODULE_1___default.a
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _klant_service__WEBPACK_IMPORTED_MODULE_7__["KlantService"],
            _onderneming_service__WEBPACK_IMPORTED_MODULE_8__["OndernemingService"],
            _services__WEBPACK_IMPORTED_MODULE_9__["AbonnementService"],
            _auth__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
            _validators__WEBPACK_IMPORTED_MODULE_10__["ValidatorService"]])
    ], KlantDetailCoreComponent);
    return KlantDetailCoreComponent;
}());



/***/ }),

/***/ "Vji0":
/*!*********************************************************************!*\
  !*** ./ClientApp/app/componenten/klant-core/onderneming.service.ts ***!
  \*********************************************************************/
/*! exports provided: OndernemingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OndernemingService", function() { return OndernemingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-slim-loading-bar */ "k+RO");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core */ "BxFb");






var OndernemingService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OndernemingService, _super);
    function OndernemingService(_http, loader) {
        var _this = _super.call(this, _http, loader) || this;
        _this._http = _http;
        _this.loader = loader;
        _this.url = _this.apiEndpoint + 'companies';
        return _this;
    }
    OndernemingService.prototype.search = function (ondernemingsnummer) {
        var _this = this;
        this.loader.start();
        return this._http.get(this.url + "/" + ondernemingsnummer, { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    OndernemingService.prototype.updateFromKBO = function (ondernemingsnummer) {
        var _this = this;
        this.loader.start();
        return this._http.get(this.url + "/" + ondernemingsnummer + "/kbos", { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    OndernemingService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__["SlimLoadingBarService"] }
    ]; };
    OndernemingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__["SlimLoadingBarService"]])
    ], OndernemingService);
    return OndernemingService;
}(_core__WEBPACK_IMPORTED_MODULE_5__["BaseService"]));



/***/ }),

/***/ "ZTOb":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/componenten/klant-core/html/app.address.layout.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"addressForm\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-md-10\">\r\n            <form-group label=\"Straat\">\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"straat\" />\r\n                <help-block type=\"required\">Straat is verplicht</help-block>\r\n            </form-group>\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-2\">\r\n            <form-group label=\"Nr\">\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"nr\" />\r\n                <help-block type=\"required\">Nr is verplicht</help-block>\r\n            </form-group>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-md-2\">\r\n            <form-group label=\"Postcode\">\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"postcode\" />\r\n                <help-block type=\"required\">Postcode is verplicht</help-block>\r\n            </form-group>\r\n        </div>\r\n        <div class=\"col-xs-12 col-md-10\">\r\n            <form-group label=\"Gemeente\">\r\n                <input class=\"form-control\" type=\"text\" formControlName=\"gemeente\" />\r\n                <help-block type=\"required\">Gemeente is verplicht</help-block>\r\n            </form-group>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "bHa5":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/componenten/klant-core/html/klant-detail.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"klantForm\" (ngSubmit)=\"onSubmit(klantForm)\" ngNoForm autocomplete=\"off\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <mafo-panel selector=\"title\" [collapsable]=\"false\">\r\n                <mafo-panel-heading>\r\n                    <h3>\r\n                        <span class=\"fa fa-user\"></span>&nbsp;\r\n                        {{title}}\r\n                        <br />\r\n                        <span class=\"badge\" style=\"margin: 2px; background-color: red\" *ngIf=\"klant.isGesanctioneerd\">GESANCTIONEERD</span>\r\n                    </h3>\r\n\r\n                </mafo-panel-heading>\r\n                <mafo-panel-actions>\r\n                    <label>Commercieel</label>\r\n                    <dp-slider formControlName=\"isCommercieel\"></dp-slider>\r\n                </mafo-panel-actions>\r\n                <mafo-panel-body>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div *ngIf=\"hasJuridischeEntiteitError\" class=\"alert alert-danger\" role=\"alert\">\r\n                                {{errorMessage}}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" *ngIf=\"selectType\" [hidden]=\"limitedView\">\r\n                        <div class=\"col-xs-12\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label\">Type</label>\r\n                                <div class=\"radio\">\r\n                                    <label>\r\n                                        <input type=\"radio\" name=\"isCommercieel\" formControlName=\"isCommercieel\" [value]=\"true\" />\r\n                                        Commercieel\r\n                                    </label>\r\n                                    &nbsp;\r\n                                    <label>\r\n                                        <input type=\"radio\" name=\"isCommercieel\" formControlName=\"isCommercieel\" [value]=\"false\" />\r\n                                        Niet-commercieel\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-md-4\">\r\n                            <form-group label=\"Ondernemingsnummer\">\r\n                                <onderneming-select formControlName=\"ondernemingsnr\" (onResult)=\"searchOndernemingsnummer($event)\"></onderneming-select>\r\n                                <help-block type=\"required\">Ondernemingsnummer is verplicht</help-block>\r\n                            </form-group>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-md-4\">\r\n                            <form-group label=\"Naam onderneming\">\r\n                                <input class=\"form-control\" [ngClass]=\"naamChanged?'klant-changed':''\" type=\"text\" formControlName=\"firmanaam\" />\r\n                                <help-block type=\"required\">Naam onderneming is verplicht</help-block>\r\n                            </form-group>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-md-4\">\r\n                            <form-group label=\"Juridische entiteit\">\r\n                                <code-select type=\"Juridischeentiteit\" formControlName=\"juridischeEntiteit\" [ngClass]=\"juridischChanged?'klant-changed':''\"></code-select>\r\n                                <help-block type=\"required\">Juridische entiteit is verplicht</help-block>\r\n                            </form-group>\r\n                        </div>\r\n                    </div>\r\n                    <hr />\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-md-6\">\r\n                            <form-group label=\"Telefoon\">\r\n                                <input id=\"telefoon\" class=\"form-control\" type=\"text\" formControlName=\"telefoon\" [ngClass]=\"telChanged?'klant-changed':''\" />\r\n                                <help-block type=\"required\">Telefoon is verplicht</help-block>\r\n                                <help-block type=\"pattern\">Geen geldig formaat</help-block>\r\n                            </form-group>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-md-6\">\r\n                            <form-group label=\"Fax\">\r\n                                <input id=\"fax\" class=\"form-control\" type=\"text\" formControlName=\"fax\" [ngClass]=\"faxChanged?'klant-changed':''\" />\r\n                                <help-block type=\"required\">Fax is verplicht</help-block>\r\n                                <help-block type=\"pattern\">Geen geldig formaat</help-block>\r\n                            </form-group>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-md-6\">\r\n                            <form-group label=\"GSM\">\r\n                                <input id=\"gsm\" class=\"form-control\" type=\"text\" formControlName=\"gsm\" [ngClass]=\"gsmChanged?'klant-changed':''\" />\r\n                                <help-block type=\"required\">GSM is verplicht</help-block>\r\n                                <help-block type=\"pattern\">Geen geldig formaat</help-block>\r\n                            </form-group>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-md-6\">\r\n                            <form-group label=\"E-mail\">\r\n                                <input id=\"email\" class=\"form-control\" type=\"text\" formControlName=\"email\" [ngClass]=\"emailChanged?'klant-changed':''\" />\r\n                                <help-block type=\"required\">E-mail is verplicht</help-block>\r\n                                <help-block type=\"validEmail\">Geen geldig e-mail</help-block>\r\n                            </form-group>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-md-6\">\r\n                            <form-group label=\"KBO Status\">\r\n                                <input id=\"kboStatus\" class=\"form-control\" type=\"text\" formControlName=\"kboStatus\" [ngClass]=\"kboChanged?'klant-changed':''\" readonly />\r\n                            </form-group>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-md-6\">\r\n                            <div class=\"pull-right\">\r\n                                <a class=\"btn btn-info\" (click)=\"updateKlantFromKBO()\">\r\n                                    <i class=\"fa \" [ngClass]=\"{ 'fa-spin': klantUpdating,'fa-refresh': !klantUpdateAfgerond, 'fa-check':klantUpdateAfgerond }\"></i>\r\n                                    <span class=\"hidden-sm hidden-xs\">&nbsp;&nbsp;Klant updaten</span>\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </mafo-panel-body>\r\n            </mafo-panel>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"klant && klant.id\" [hidden]=\"limitedView\">\r\n        <div class=\"col-xs-12\">\r\n            <mafo-panel selector=\"lopendeaanvragen\" [collapsable]=\"true\" [open]=\"true\">\r\n                <mafo-panel-heading>\r\n                    <h5>\r\n                        Lopende aanvragen\r\n                    </h5>\r\n                </mafo-panel-heading>\r\n                <mafo-panel-body>\r\n                    <dp-datagrid [data]=\"openstaandeAanvragenData\" [options]=\"openstaandeAanvragenOptions\" (fetchData)=\"fetchOpenstaandeAanvragen($event)\" (rowClicked)=\"openstaandeAanvragenRowClicked($event)\">\r\n                        <ng-template #rowTemplate let-item=\"item\" let-index=\"i\">\r\n                            <td>\r\n                                {{item.datum | date:'dd/MM/yyyy'}}\r\n                            </td>\r\n                            <td>\r\n                                <code-display type=\"Aanvraagstatus\" [value]=\"item.status\"></code-display>\r\n                            </td>\r\n                            <td>{{item.positie >= 0 ? item.positie : '/'}}</td>\r\n                            <td>\r\n                                <code-display type=\"Aanvraagsoort\" [value]=\"item.soort\"></code-display>\r\n                            </td>\r\n                            <td>{{item.markt.naam}}</td>\r\n                            <td>\r\n                                <code-display type=\"District\" [value]=\"item.district\"></code-display>\r\n                            </td>\r\n                            <td>{{item.aantalKavels}}</td>\r\n                            <td>{{item.opmerkingen}}</td>\r\n                        </ng-template>\r\n                    </dp-datagrid>\r\n                </mafo-panel-body>\r\n            </mafo-panel>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"klant && klant.id\" [hidden]=\"limitedView\">\r\n        <div class=\"col-xs-12\">\r\n            <mafo-panel selector=\"abonnementen\" [collapsable]=\"true\" [open]=\"true\">\r\n                <mafo-panel-heading>\r\n                    <h5>\r\n                        Abonnementen\r\n                    </h5>\r\n                </mafo-panel-heading>\r\n                <mafo-panel-body>\r\n                    <dp-datagrid [data]=\"abonnementenData\" [options]=\"abonnementenOptions\" (fetchData)=\"fetchAbonnementen($event)\" (rowClicked)=\"abonnementenRowClicked($event)\">\r\n                        <ng-template #rowTemplate let-item=\"item\" let-index=\"i\">\r\n                            <td>\r\n                                {{item.begindatum | date:'dd/MM/yyyy'}}\r\n                            </td>\r\n                            <td>\r\n                                {{item.einddatum | date:'dd/MM/yyyy'}}\r\n                            </td>\r\n                            <td>{{item.markt.naam}}</td>\r\n                            <td>\r\n                                <code-display type=\"DISTRICT\" [value]=\"item.markt.districtCode\"></code-display>\r\n                            </td>\r\n                            <td>{{item.aantalKavels}}</td>\r\n                            <td>\r\n                                <code-display type=\"AbonnementStatus\" [value]=\"item.statusCode\"></code-display>\r\n                            </td>\r\n                            <td>\r\n                                <code-display type=\"Uitstalling\" [value]=\"item.uitstallingCode\"></code-display>\r\n                            </td>\r\n                            <td>\r\n                                <code-display type=\"Verkoop\" [value]=\"item.verkoopCode\"></code-display>\r\n                            </td>\r\n                            <td>\r\n                                <code-display type=\"Elektriciteit\" [value]=\"item.elektriciteitCode\"></code-display>\r\n                            </td>\r\n                        </ng-template>\r\n                    </dp-datagrid>\r\n                </mafo-panel-body>\r\n            </mafo-panel>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <mafo-panel selector=\"maatschappelijkeZetel\" [collapsable]=\"true\" [open]=\"true\">\r\n                <mafo-panel-heading>\r\n                    <h5>\r\n                        MAATSCHAPPELIJKE ZETEL\r\n                    </h5>\r\n                </mafo-panel-heading>\r\n                <mafo-panel-body>\r\n                    <mafo-address [address]=\"klant.maatschappelijkeZetel\" [group]=\"klantForm.controls.maatschappelijkeZetel\" [required]=\"true\" (change)=\"copyAddressToFacturation()\"></mafo-address>\r\n                </mafo-panel-body>\r\n            </mafo-panel>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" [hidden]=\"limitedView\">\r\n        <div class=\"col-xs-12\">\r\n            <mafo-panel selector=\"facturatieAdres\" [collapsable]=\"true\" [open]=\"true\">\r\n                <mafo-panel-heading>\r\n                    <h5>\r\n                        FACTURATIEADRES\r\n                    </h5>\r\n                </mafo-panel-heading>\r\n                <mafo-panel-actions>\r\n                    <div class=\"checkbox\">\r\n                        <label>\r\n                            <input type=\"checkbox\" [value]=\"facturatieAdresDisabled\" [attr.checked]=\"facturatieAdresDisabled ? true : null\" (click)=\"disableFacturatieAdres()\">\r\n                            Zelfde als maatschappelijke zetel\r\n                        </label>\r\n                    </div>\r\n                </mafo-panel-actions>\r\n                <mafo-panel-body>\r\n                    <mafo-address [address]=\"klant.facturatieAdres\"\r\n                                  [group]=\"klantForm.controls.facturatieAdres\"\r\n                                  [required]=\"true\"\r\n                                  [disable]=\"facturatieAdresDisabled\">\r\n                    </mafo-address>\r\n                </mafo-panel-body>\r\n            </mafo-panel>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\" formArrayName=\"contactPersonen\">\r\n            <mafo-panel selector=\"contactpersonen\" [collapsable]=\"true\" [open]=\"klant && !klant.id\">\r\n                <mafo-panel-heading>\r\n                    <h5>\r\n                        CONTACTPERSONEN\r\n                    </h5>\r\n                </mafo-panel-heading>\r\n                <mafo-panel-actions>\r\n                    <button type=\"button\" class=\"btn btn-toolbar\" (click)=\"addContact()\">\r\n                        <i class=\"fa fa-plus\"></i>\r\n                        <span class=\"hidden-xs hidden-sm\">Toevoegen</span>\r\n                    </button>\r\n                </mafo-panel-actions>\r\n                <mafo-panel-body>\r\n                    <div class=\"row\" *ngFor=\"let contactPersoon of klantForm.controls.contactPersonen.controls; let i=index; trackBy:i\">\r\n                        <div class=\"col-xs-12\" [formGroupName]=\"i\">\r\n                            <mafo-contactpersoon [persoon]=\"klant.contactPersonen[i]\" selector=\"{{'persoon' + i}}\" [group]=\"klantForm.controls.contactPersonen.controls[i]\" (hoofdContactChanged)=\"hoofdContactChanged(i)\" (removed)=\"removeContactpersoon(i)\"></mafo-contactpersoon>\r\n                        </div>\r\n                    </div>\r\n                </mafo-panel-body>\r\n            </mafo-panel>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"klant && klant.id\" [hidden]=\"limitedView\">\r\n        <div class=\"col-xs-12\">\r\n            <dp-document-panel [klantId]=\"klant.id\"></dp-document-panel>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"updateKlant | async\">\r\n        <div class=\"col-xs-12\">\r\n            <div class=\"pull-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Klant bewaren</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "msyP":
/*!***************************************************************!*\
  !*** ./ClientApp/app/componenten/klant-core/klant.service.ts ***!
  \***************************************************************/
/*! exports provided: KlantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlantService", function() { return KlantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-slim-loading-bar */ "k+RO");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core */ "BxFb");






var KlantService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KlantService, _super);
    function KlantService(http, loader) {
        var _this = _super.call(this, http, loader) || this;
        _this.http = http;
        _this.loader = loader;
        _this.url = _this.apiEndpoint + 'customers/';
        return _this;
    }
    KlantService.prototype.getAll = function (commercieel, isGesanctioneerd, query) {
        var _this = this;
        var params = this.registerDefaultParameters(query);
        params = params.set("commercieel", commercieel.toString());
        if (isGesanctioneerd != undefined) {
            params = params.set("isGesanctioneerd", isGesanctioneerd.toString());
        }
        if (query.ondernemingsnummer)
            params = params.set("ondernemingsnummer", query.ondernemingsnummer.toString());
        this.loader.start();
        return this.http.get(this.url, { headers: this.jsonHeaders, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }));
    };
    KlantService.prototype.get = function (id) {
        var _this = this;
        this.loader.start();
        return this.http.get(this.url + id, { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    KlantService.prototype.save = function (klant) {
        var _this = this;
        this.loader.start();
        var toAdd = JSON.stringify(klant);
        var action = klant.id && klant.id > 0
            ? this.http.put(this.url + klant.id, toAdd, { headers: this.jsonHeaders })
            : this.http.post(this.url, toAdd, { headers: this.jsonHeaders });
        return action.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    KlantService.prototype.delete = function (id) {
        var _this = this;
        this.loader.start();
        return this.http.delete(this.url + id, { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    KlantService.prototype.getAanvragen = function (klantId, query) {
        var _this = this;
        var params = this.registerDefaultParameters(query);
        this.loader.start();
        return this.http.get(this.url + (klantId + "/requests"), { headers: this.jsonHeaders, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    KlantService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__["SlimLoadingBarService"] }
    ]; };
    KlantService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__["SlimLoadingBarService"]])
    ], KlantService);
    return KlantService;
}(_core__WEBPACK_IMPORTED_MODULE_5__["BaseService"]));



/***/ }),

/***/ "vRQ+":
/*!**************************************************************************!*\
  !*** ./ClientApp/app/componenten/klant-core/contactpersoon.component.ts ***!
  \**************************************************************************/
/*! exports provided: Persoon, ContactPersoonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Persoon", function() { return Persoon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPersoonComponent", function() { return ContactPersoonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_contactpersoon_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/contactpersoon.component.html */ "8T0U");
/* harmony import */ var _raw_loader_html_contactpersoon_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_contactpersoon_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validators */ "2/Vv");





var Persoon = /** @class */ (function () {
    function Persoon(hoofdcontact, voornaam, naam) {
        if (voornaam === void 0) { voornaam = ""; }
        if (naam === void 0) { naam = ""; }
        this.id = 0;
        this.voornaam = voornaam;
        this.naam = naam;
        this.isHoofdcontactPersoon = hoofdcontact;
    }
    return Persoon;
}());

var ContactPersoonComponent = /** @class */ (function () {
    function ContactPersoonComponent(fb) {
        this.fb = fb;
        this.hoofdContactChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    Object.defineProperty(ContactPersoonComponent.prototype, "title", {
        get: function () {
            var title = this.contactPersoonForm.get("voornaam").value + " " + this.contactPersoonForm.get("naam").value;
            return title.replace(/\s/g, "").length <= 0 ? "Nieuwe contactpersoon" : title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContactPersoonComponent.prototype, "hoofdContact", {
        get: function () {
            return this.contactPersoonForm.get("isHoofdcontactPersoon").value;
        },
        set: function (value) {
            var control = this.contactPersoonForm.get("isHoofdcontactPersoon");
            control.setValue(value);
            //control.disable();
            this.hoofdContactChanged.emit();
        },
        enumerable: false,
        configurable: true
    });
    ContactPersoonComponent.prototype.ngOnInit = function () {
        if (!this.persoon)
            this.persoon = new Persoon(false);
        this.buildForm();
    };
    ContactPersoonComponent.prototype.hoofdcontactSelected = function () {
        this.hoofdContact = true;
    };
    ContactPersoonComponent.prototype.remove = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.removed.emit();
    };
    ContactPersoonComponent.prototype.buildForm = function () {
        this.contactPersoonForm.addControl("id", this.fb.control(this.persoon.id));
        this.contactPersoonForm.addControl("voornaam", this.fb.control(this.persoon.voornaam, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]));
        this.contactPersoonForm.addControl("naam", this.fb.control(this.persoon.naam, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]));
        this.contactPersoonForm.addControl("telefoon", this.fb.control(this.persoon.telefoon, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("(\\+|0)\\d+")]));
        this.contactPersoonForm.addControl("gsm", this.fb.control(this.persoon.gsm, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("(\\+|0)\\d+")]));
        this.contactPersoonForm.addControl("fax", this.fb.control(this.persoon.fax, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("(\\+|0)\\d+")]));
        this.contactPersoonForm.addControl("email", this.fb.control(this.persoon.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50), _validators__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].validEmail]));
        this.contactPersoonForm.addControl("isHoofdcontactPersoon", this.fb.control({ value: this.persoon.isHoofdcontactPersoon, disabled: false }, []));
        this.contactPersoonForm.addControl("adres", this.fb.group({}));
    };
    ContactPersoonComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    ContactPersoonComponent.propDecorators = {
        selector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        contactPersoonForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ["group",] }],
        hoofdContactChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        removed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        hoofdContact: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        persoon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    ContactPersoonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "mafo-contactpersoon",
            template: _raw_loader_html_contactpersoon_component_html__WEBPACK_IMPORTED_MODULE_1___default.a
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ContactPersoonComponent);
    return ContactPersoonComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~abonnement-abonnement-module~klant-klant-module~markt-markt-module~wachtlijst-wachtlijst-module.js.map