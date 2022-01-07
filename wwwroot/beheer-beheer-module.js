(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["beheer-beheer-module"],{

/***/ "E+iR":
/*!*************************************************************!*\
  !*** ./ClientApp/app/beheer/beheer-variabelen.component.ts ***!
  \*************************************************************/
/*! exports provided: BeheerVariabelenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeheerVariabelenComponent", function() { return BeheerVariabelenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_beheer_variabelen_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/beheer-variabelen.component.html */ "f2p/");
/* harmony import */ var _raw_loader_html_beheer_variabelen_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_beheer_variabelen_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/of */ "neMA");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-modialog/plugins/bootstrap */ "e7Ax");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _componenten_code_select_code_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componenten/code-select/code.service */ "Adg9");
/* harmony import */ var _componenten_location_select_locatie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../componenten/location-select/locatie.service */ "2CY5");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services */ "mZsw");











var BeheerVariabelenComponent = /** @class */ (function () {
    function BeheerVariabelenComponent(codeService, toastr, router, route, fb, modal, locatieService, tariefService, productService) {
        this.codeService = codeService;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.modal = modal;
        this.locatieService = locatieService;
        this.tariefService = tariefService;
        this.productService = productService;
        this.pageTitle = 'Beheer variabelen';
        this.code = '';
        this.boolToggleActive = false;
        this.gridOptions = {
            stripedRows: true,
            fields: [
                {
                    field: 'code',
                    title: 'Code',
                },
                {
                    field: 'omschrijving',
                    title: 'Omschrijving',
                },
                { field: 'actief', title: 'Actief' },
            ],
            showPaging: false,
            pageSizes: [Number.MAX_VALUE],
        };
    }
    BeheerVariabelenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.route.params.subscribe(function (params) {
            _this.code = params['code'];
            _this.configureGrid();
        });
    };
    BeheerVariabelenComponent.prototype.configureGrid = function () {
        var fields = [
            { field: 'code', title: 'Code' },
            { field: 'omschrijving', title: 'Omschrijving' },
        ];
        switch (this.code) {
            case 'locatie':
                fields = [
                    { field: 'naam', title: 'Naam' },
                    { field: 'districtCode', title: 'District code' },
                ];
                break;
            case 'product':
                fields = [
                    { field: 'omschrijving', title: 'Omschrijving' },
                    { field: 'geldigVan', title: 'Geldig van' },
                    { field: 'geldigTot', title: 'Geldig tot' },
                ];
                break;
            case 'standplaatsTarief':
                fields = [
                    { field: 'id', title: 'Id' },
                    { field: 'omschrijving', title: 'Dag van de week' },
                    { field: 'eenheidsPrijs', title: 'Eenheidsprijs' },
                ];
                break;
            case 'elektriciteitTarief':
                fields = [
                    { field: 'elektriciteitId', title: 'Id' },
                    { field: 'eenheidsPrijs', title: 'Eenheidsprijs' },
                    { field: 'omschrijving', title: 'Omschrijving' },
                ];
                break;
            case 'dieptekavelsapmateriaalcode':
                fields.push({
                    field: 'dieptekavelStatusId',
                    title: 'Dieptekavelstatus',
                });
                break;
            case 'elektriciteitsapmateriaalcode':
                fields.push({
                    field: 'elektriciteitId',
                    title: 'Elektriciteit',
                });
                break;
            case 'standplaatssapmateriaalcode':
                fields.push({
                    field: 'marktId',
                    title: 'Markt',
                });
                break;
            case 'juridischeentiteit':
                fields.push({
                    field: 'afkorting',
                    title: 'Afkorting',
                });
                break;
            case 'district':
            case 'uitstalling':
                break;
        }
        this.gridOptions.fields = fields;
        this.gridOptions = Object.assign({}, this.gridOptions);
        this.fetchData();
    };
    BeheerVariabelenComponent.prototype.fetchData = function () {
        var _this = this;
        if (!this.code) {
            this.data = [];
            return;
        }
        this.resetCodesForm();
        switch (this.code) {
            case 'locatie':
                this.locatieService.getLocaties(true).subscribe(function (x) {
                    _this.data = x;
                    _this.data.forEach(function (y) {
                        var group = _this.fb.group({
                            id: _this.fb.control(y.id),
                            districtCode: _this.fb.control(y.districtCode),
                            naam: _this.fb.control(y.naam),
                        });
                        group.addControl('naam', _this.fb.control(y.naam));
                        _this.codesForm.get('codes').push(group);
                    });
                }, function () { return _this.toastr.error('Kon locaties niet inladen'); });
                break;
            case 'product':
                var filter = {
                    page: 1,
                    pageSize: Number.MAX_VALUE,
                    sort: 'omschrijving',
                };
                this.productService.getProducten(filter).subscribe(function (x) {
                    _this.data = x;
                    _this.data.forEach(function (y) {
                        y.geldigVan = y.geldigVan.substring(0, 10);
                        y.geldigTot = y.geldigTot.substring(0, 10);
                        var group = _this.fb.group({
                            id: _this.fb.control(y.id),
                            geldigVan: _this.fb.control(y.geldigVan),
                            geldigTot: _this.fb.control(y.geldigTot),
                            omschrijving: _this.fb.control(y.omschrijving),
                            actief: _this.fb.control(y.actief),
                        });
                        group.addControl('geldigVan', _this.fb.control(y.geldigVan));
                        group.addControl('geldigTot', _this.fb.control(y.geldigTot));
                        _this.codesForm.get('codes').push(group);
                    });
                }, function () { return _this.toastr.error('Kon producten niet inladen'); });
                break;
            case 'standplaatsTarief':
                this.tariefService.getStandplaatsTarieven().subscribe(function (x) {
                    _this.data = x;
                    _this.data.forEach(function (y) {
                        var group = _this.fb.group({
                            id: _this.fb.control(y.id),
                            dagVanDeWeekId: _this.fb.control(y.dagVanDeWeekId),
                            code: _this.fb.control(y.eenheidsPrijs),
                            omschrijving: _this.fb.control(y.omschrijving),
                        });
                        group.addControl('eenheidsPrijs', _this.fb.control(y.eenheidsPrijs));
                        group.addControl('dagVanDeWeekId', _this.fb.control(y.dagVanDeWeekId));
                        group.addControl('omschrijving', _this.fb.control(y.omschrijving));
                        _this.codesForm.get('codes').push(group);
                    });
                }, function () { return _this.toastr.error('Kon standplaats tarieven niet inladen'); });
                break;
            case 'elektriciteitTarief':
                this.tariefService.getElektriciteitTarieven().subscribe(function (x) {
                    _this.data = x;
                    _this.data.forEach(function (y) {
                        var group = _this.fb.group({
                            id: _this.fb.control(y.id),
                            elektriciteitId: _this.fb.control(y.elektriciteitsId),
                            code: _this.fb.control(y.eenheidsPrijs),
                            omschrijving: _this.fb.control(y.omschrijving),
                            actief: _this.fb.control(y.isActief),
                            eenheidsPrijs: _this.fb.control(y.eenheidsPrijs),
                        });
                        _this.codesForm.get('codes').push(group);
                    });
                }, function () { return _this.toastr.error('Kon elektriciteit tarieven niet inladen'); });
                break;
            default:
                this.codeService
                    .getCodes(this.code, this.boolToggleActive, true)
                    .subscribe(function (x) {
                    _this.data = x;
                    _this.fillCodesForm(x);
                }, function () { return _this.toastr.error('Kon de codes niet inladen'); });
                break;
        }
    };
    BeheerVariabelenComponent.prototype.resetCodesForm = function () {
        while (this.codesForm.get('codes').length) {
            this.codesForm.get('codes').removeAt(0);
        }
    };
    BeheerVariabelenComponent.prototype.fillCodesForm = function (data) {
        var _this = this;
        while (this.codesForm.get('codes').length) {
            this.codesForm.get('codes').removeAt(0);
        }
        data.forEach(function (code) {
            var group = _this.fb.group({
                id: _this.fb.control(code.id),
                code: _this.fb.control(code.code),
                omschrijving: _this.fb.control(code.omschrijving),
                actief: _this.fb.control(code.actief),
            });
            switch (_this.code) {
                case 'district':
                    break;
                case 'dieptekavelsapmateriaalcode':
                    group.addControl('dieptekavelStatusId', _this.fb.control(code.dieptekavelStatusId));
                    break;
                case 'elektriciteitsapmateriaalcode':
                    group.addControl('elektriciteitId', _this.fb.control(code.elektriciteitId));
                    break;
                case 'standplaatssapmateriaalcode':
                    group.addControl('marktId', _this.fb.control(code.marktId));
                    break;
                case 'juridischeentiteit':
                    group.addControl('afkorting', _this.fb.control(code.afkorting));
                    break;
                case 'uitstalling':
                    break;
            }
            _this.codesForm.get('codes').push(group);
        });
    };
    BeheerVariabelenComponent.prototype.toggleEdit = function () {
        this.edit = !this.edit;
    };
    BeheerVariabelenComponent.prototype.buildForm = function () {
        this.codesForm = this.fb.group({
            codes: this.fb.array([]),
        });
    };
    BeheerVariabelenComponent.prototype.resetForm = function () {
        this.fetchData();
    };
    BeheerVariabelenComponent.prototype.submitForm = function () {
        var _this = this;
        switch (this.code) {
            case 'locatie':
                var payload = [];
                this.codesForm.get('codes').controls.forEach(function (x) {
                    var group = {
                        id: parseInt(x.get('id').value),
                        districtCode: x.get('districtCode').value,
                        naam: x.get('naam').value,
                    };
                    payload.push(group);
                });
                this.locatieService.save(payload).subscribe(function () {
                    _this.toastr.success('Locaties succesvol opgeslagen', 'Locaties');
                    _this.resetForm();
                }, function (x) {
                    if (x.ExtraInfo) {
                        for (var xtra in x.ExtraInfo) {
                            _this.toastr.warning(xtra, x.ExtraInfo[xtra].join(','));
                        }
                    }
                });
                break;
            case 'product':
                var payload = [];
                this.codesForm.get('codes').controls.forEach(function (x) {
                    var group = {
                        id: parseInt(x.get('id').value),
                        omschrijving: x.get('omschrijving').value,
                        geldigVan: new Date(x.get('geldigVan').value),
                        geldigTot: new Date(x.get('geldigTot').value),
                    };
                    payload.push(group);
                });
                this.productService.updateWithArray(payload).subscribe(function () {
                    _this.toastr.success('Producten succesvol opgeslagen', 'Producten');
                    _this.resetForm();
                }, function (x) {
                    if (x && x.ExtraInfo) {
                        for (var xtra in x.ExtraInfo) {
                            _this.toastr.warning(xtra, x.ExtraInfo[xtra].join(','));
                        }
                    }
                });
                break;
            case 'standplaatsTarief':
                var payload = [];
                this.codesForm.get('codes').controls.forEach(function (x) {
                    var group = {
                        id: parseInt(x.get('id').value),
                        omschrijving: x.get('omschrijving').value,
                        dagVanDeWeekId: parseInt(x.get('dagVanDeWeekId').value),
                        eenheidsprijs: parseFloat(x.get('eenheidsPrijs').value),
                    };
                    payload.push(group);
                });
                this.tariefService.saveStandplaats(payload).subscribe(function () {
                    _this.toastr.success('Standplaats succesvol opgeslagen', 'Standplaats');
                    _this.resetForm();
                }, function (x) {
                    if (x.ExtraInfo) {
                        for (var xtra in x.ExtraInfo) {
                            _this.toastr.warning(xtra, x.ExtraInfo[xtra].join(','));
                        }
                    }
                });
                break;
            case 'elektriciteitTarief':
                var payload = [];
                this.codesForm.get('codes').controls.forEach(function (x) {
                    var group = {
                        id: parseInt(x.get('id').value),
                        elektriciteitId: parseInt(x.get('elektriciteitId').value),
                        eenheidsprijs: parseFloat(x.get('eenheidsPrijs').value),
                        omschrijving: x.get('omschrijving').value,
                    };
                    payload.push(group);
                });
                this.tariefService.saveElektriciteit(payload).subscribe(function () {
                    _this.toastr.success('Elektriciteit succesvol opgeslagen', 'Elektriciteit');
                    _this.resetForm();
                }, function (x) {
                    if (x.ExtraInfo) {
                        for (var xtra in x.ExtraInfo) {
                            _this.toastr.warning(xtra, x.ExtraInfo[xtra].join(','));
                        }
                    }
                });
                break;
            default:
                var payload = [];
                this.codesForm.get('codes').controls.forEach(function (x) {
                    var group = {
                        id: parseInt(x.get('id').value),
                        code: x.get('code').value,
                        omschrijving: x.get('omschrijving').value,
                        actief: Boolean(x.get('actief').value),
                    };
                    payload.push(group);
                });
                this.codeService.save(this.code, payload, true).subscribe(function () {
                    _this.toastr.success(_this.code + ' succesvol opgeslagen', _this.code);
                    _this.resetForm();
                }, function (x) {
                    if (x.ExtraInfo) {
                        for (var xtra in x.ExtraInfo) {
                            _this.toastr.warning(xtra, x.ExtraInfo[xtra].join(','));
                        }
                    }
                });
                break;
        }
    };
    BeheerVariabelenComponent.prototype.toggleActive = function (value) {
        this.boolToggleActive = value;
    };
    BeheerVariabelenComponent.prototype.showDeleteModal = function ($event) {
        var _this = this;
        this.modal
            .confirm()
            .title('Bevestig verwijderen')
            .body('Weet u zeker dat u deze code wilt verwijderen?')
            .okBtn('Verwijderen')
            .open()
            .result.catch() // catch error not related to the result (modal open...)
            .then(function (dialog) { return dialog.result; }) // dialog has more properties,lets just return the promise for a result.
            .then(function (x) { return _this.delete($event.id); }) // if we're here, ok was clicked.
            .catch(function (x) { }); // if we're here, cancel was clicked.
    };
    BeheerVariabelenComponent.prototype.delete = function (itemId) {
        var _this = this;
        switch (this.code) {
            case 'locatie':
                this.locatieService.delete(itemId).subscribe(function () {
                    _this.toastr.success('Locatie succesvol verwijderd', 'Locatie');
                    _this.fetchData();
                }, function (x) {
                    _this.toastr.error('Locatie kon niet verwijderd worden', 'Locatie');
                    if (x.ExtraInfo) {
                        for (var xtra in x.ExtraInfo) {
                            _this.toastr.warning(x.ExtraInfo[xtra].join(','), 'Locatie');
                        }
                    }
                });
                break;
            case 'product':
                this.productService.delete(itemId).subscribe(function () {
                    _this.toastr.success('Product succesvol verwijderd', 'Product');
                    _this.fetchData();
                }, function (x) {
                    _this.toastr.warning('Product kon niet verwijderd worden', 'Product');
                    if (x.ExtraInfo) {
                        for (var xtra in x.ExtraInfo) {
                            _this.toastr.warning(x.ExtraInfo[xtra].join(','), 'Product  kon niet verwijderd worden');
                        }
                    }
                });
                break;
            default:
                this.codeService.delete(this.code, itemId).subscribe(function () {
                    _this.toastr.success('Code succesvol verwijderd', _this.code);
                    _this.fetchData();
                }, function (x) {
                    _this.toastr.warning(_this.code + ' kon niet verwijderd worden', _this.code);
                    if (x.ExtraInfo) {
                        for (var xtra in x.ExtraInfo) {
                            _this.toastr.warning(x.ExtraInfo[xtra].join(','), _this.code + ' kon niet verwijderd worden');
                        }
                    }
                });
                break;
        }
    };
    BeheerVariabelenComponent.prototype.onCodeChange = function (code) {
        this.router.navigate(['beheer/variabelen', code]);
    };
    BeheerVariabelenComponent.prototype.getValue = function (id) {
        switch (this.code) {
            case 'dieptekavelsapmateriaalcode':
                if (id == 1) {
                    return 'Niet Beschikbaar';
                }
                else if (id == 2) {
                    return 'Niet In Gebruik';
                }
                else if (id == 3) {
                    return 'In Gebruik';
                }
                else {
                    return id;
                }
            default:
                return id;
        }
    };
    BeheerVariabelenComponent.ctorParameters = function () { return [
        { type: _componenten_code_select_code_service__WEBPACK_IMPORTED_MODULE_8__["CodeService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"] },
        { type: _componenten_location_select_locatie_service__WEBPACK_IMPORTED_MODULE_9__["LocatieService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_10__["TariefService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_10__["ProductService"] }
    ]; };
    BeheerVariabelenComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'mafo-beheer-variabelen',
            template: _raw_loader_html_beheer_variabelen_component_html__WEBPACK_IMPORTED_MODULE_1___default.a,
            styles: [".disabled { pointer-events: none; cursor: default; }"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_componenten_code_select_code_service__WEBPACK_IMPORTED_MODULE_8__["CodeService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"],
            _componenten_location_select_locatie_service__WEBPACK_IMPORTED_MODULE_9__["LocatieService"],
            _services__WEBPACK_IMPORTED_MODULE_10__["TariefService"],
            _services__WEBPACK_IMPORTED_MODULE_10__["ProductService"]])
    ], BeheerVariabelenComponent);
    return BeheerVariabelenComponent;
}());



/***/ }),

/***/ "E5ID":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/beheer/html/beheer-variabelen-detail.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"codeForm\" (ngSubmit)=\"onSubmit($event)\" ngNoForm autocomplete=\"off\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <mafo-panel selector=\"title\" [collapsable]=\"false\" [open]=\"true\">\r\n                <mafo-panel-heading>\r\n                    <h3>\r\n                        <span class=\"fa fa-cogs\"></span>&nbsp;\r\n                        {{pageTitle}}\r\n                    </h3>\r\n                </mafo-panel-heading>\r\n                <mafo-panel-body>\r\n                    <div class=\"col-xs-12 col-md-6\" *ngIf=\"code !== 'locatie' && code!='product'\">\r\n                        <form-group label=\"Code\">\r\n                            <input class=\"form-control\" type=\"text\" formControlName=\"code\" />\r\n                            <help-block type=\"required\">Code is verplicht</help-block>\r\n                        </form-group>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-md-6\" *ngIf=\"code !== 'locatie' && code !=='district'\">\r\n                        <form-group label=\"Omschrijving\">\r\n                            <input class=\"form-control\" type=\"text\" formControlName=\"omschrijving\" />\r\n                            <help-block type=\"required\">Omschrijving is verplicht</help-block>\r\n                        </form-group>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-md-6\" *ngIf=\"code === 'locatie' || code ==='district'\">\r\n                        <form-group label=\"Naam\">\r\n                            <input class=\"form-control\" type=\"text\" formControlName=\"naam\" />\r\n                            <help-block type=\"required\">Naam is verplicht</help-block>\r\n                        </form-group>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-md-6\" *ngIf=\"code === 'dieptekavelsapmateriaalcode'\">\r\n                        <form-group label=\"Dieptekavelstatus\">\r\n                            <br />\r\n                            <select class=\"form-control\" ng-model=\"statusId\" formControlName=\"dieptekavelStatusId\">\r\n                                <option value=\"0\"></option>\r\n                                <option value=\"1\">Niet beschikbaar</option>\r\n                                <option value=\"2\">Niet in gebruik</option>\r\n                                <option value=\"3\">In gebruik</option>\r\n                            </select>\r\n                            <help-block type=\"required\">Dieptekavelstatus is verplicht</help-block>\r\n                        </form-group>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-md-6\" *ngIf=\"code === 'elektriciteitsapmateriaalcode'\">\r\n                        <form-group label=\"Elektriciteit\">\r\n                            <input class=\"form-control\" type=\"text\" formControlName=\"elektriciteitId\" />\r\n                            <help-block type=\"required\">elektriciteit id is verplicht</help-block>\r\n                        </form-group>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-md-6\" *ngIf=\"code === 'standplaatssapmateriaalcode'\">\r\n                        <form-group label=\"Markt\">\r\n                            <!--<input class=\"form-control\" type=\"text\" formControlName=\"marktId\"  />-->\r\n                            <select class=\"form-control\" formControlName=\"marktId\" *ngIf=\"markten\">\r\n                                <option value=\"0\">- Markt -</option>\r\n                                <option *ngFor=\"let markt of markten\" [value]=\"markt.id\">{{markt.naam}}</option>\r\n                            </select>\r\n                            <help-block type=\"required\">Markt is verplicht</help-block>\r\n                        </form-group>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-md-6\" *ngIf=\"code === 'juridischeentiteit'\">\r\n                        <form-group label=\"Afkorting\">\r\n                            <input class=\"form-control\" type=\"text\" formControlName=\"afkorting\" />\r\n                            <help-block type=\"required\">Afkorting is verplicht</help-block>\r\n                        </form-group>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-md-6\" *ngIf=\"code === 'locatie'\">\r\n                        <form-group label=\"District\">\r\n                            <code-select type=\"District\" formControlName=\"districtCode\" ></code-select>\r\n\r\n                            \r\n                            <help-block type=\"required\">District is verplicht</help-block>\r\n                        </form-group>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-md-6\" *ngIf=\"code === 'product'\">\r\n                        <form-group label=\"Geldig van\">\r\n                            <input class=\"form-control\" type=\"text\" formControlName=\"geldigVan\" />\r\n                           \r\n                            <help-block type=\"required\">Geldig van is verplicht</help-block>\r\n                        </form-group>\r\n                        <form-group label=\"Geldig tot\">\r\n                            <input class=\"form-control\" type=\"text\" formControlName=\"geldigTot\" />\r\n\r\n                            <help-block type=\"required\">Geldig tot is verplicht</help-block>\r\n                        </form-group>\r\n                    </div>\r\n                </mafo-panel-body>\r\n            </mafo-panel>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div class=\"pull-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Code bewaren</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "Y9/8":
/*!***********************************************!*\
  !*** ./ClientApp/app/beheer/beheer.module.ts ***!
  \***********************************************/
/*! exports provided: BeheerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeheerModule", function() { return BeheerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_service_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/service.module */ "1g0q");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "tBJz");
/* harmony import */ var _componenten_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componenten/search */ "su0z");
/* harmony import */ var _componenten_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componenten/validators */ "2/Vv");
/* harmony import */ var _componenten_code_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componenten/code-select */ "HW5m");
/* harmony import */ var _componenten_datetimepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componenten/datetimepicker */ "RyTg");
/* harmony import */ var _beheer_module_definitions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./beheer.module.definitions */ "c9oi");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services */ "mZsw");
/* harmony import */ var _componenten_location_select_locatie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../componenten/location-select/locatie.service */ "2CY5");












var BeheerModule = /** @class */ (function () {
    function BeheerModule() {
    }
    BeheerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _services_service_module__WEBPACK_IMPORTED_MODULE_3__["ServiceModule"],
                _componenten_search__WEBPACK_IMPORTED_MODULE_5__["SearchModule"],
                _componenten_code_select__WEBPACK_IMPORTED_MODULE_7__["CodeSelectModule"],
                _componenten_validators__WEBPACK_IMPORTED_MODULE_6__["ValidatorsModule"],
                _componenten_datetimepicker__WEBPACK_IMPORTED_MODULE_8__["DateTimePickerhModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_beheer_module_definitions__WEBPACK_IMPORTED_MODULE_9__["routes"]))
            ],
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_10__["TariefService"],
                _services__WEBPACK_IMPORTED_MODULE_10__["ProductService"],
                _componenten_location_select_locatie_service__WEBPACK_IMPORTED_MODULE_11__["LocatieService"],
                _services__WEBPACK_IMPORTED_MODULE_10__["ProductService"]
            ],
            declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_beheer_module_definitions__WEBPACK_IMPORTED_MODULE_9__["beheerComponents"]),
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], BeheerModule);
    return BeheerModule;
}());



/***/ }),

/***/ "c9oi":
/*!***********************************************************!*\
  !*** ./ClientApp/app/beheer/beheer.module.definitions.ts ***!
  \***********************************************************/
/*! exports provided: beheerComponents, beheerDirectives, beheerPipes, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beheerComponents", function() { return beheerComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beheerDirectives", function() { return beheerDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beheerPipes", function() { return beheerPipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _beheer_variabelen_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beheer-variabelen.component */ "E+iR");
/* harmony import */ var _beheer_variabelen_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beheer-variabelen-detail.component */ "sW1E");


var beheerComponents = [
    _beheer_variabelen_component__WEBPACK_IMPORTED_MODULE_0__["BeheerVariabelenComponent"],
    _beheer_variabelen_detail_component__WEBPACK_IMPORTED_MODULE_1__["BeheerVariabelenDetailComponent"]
];
var beheerDirectives = [];
var beheerPipes = [];
var routes = [
    {
        path: "variabelen",
        component: _beheer_variabelen_component__WEBPACK_IMPORTED_MODULE_0__["BeheerVariabelenComponent"]
        //TODO
        //canActivate: [AuthGuard]
        //data: {
        //    privileges: [Privilege.Factuur.GetFilteredAndPaged]
        //}
    },
    {
        path: "variabelen/:code",
        component: _beheer_variabelen_component__WEBPACK_IMPORTED_MODULE_0__["BeheerVariabelenComponent"]
    },
    {
        path: "variabelen/:code/nieuw",
        component: _beheer_variabelen_detail_component__WEBPACK_IMPORTED_MODULE_1__["BeheerVariabelenDetailComponent"]
    }
];


/***/ }),

/***/ "f2p/":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/beheer/html/beheer-variabelen.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <mafo-panel selector=\"title\" [collapsable]=\"false\" [open]=\"true\">\r\n            <mafo-panel-heading>\r\n                <h3 id=\"title-beheer-variabelen\">\r\n                    <span class=\"fa fa-cogs\"></span>&nbsp;\r\n                    {{pageTitle}}\r\n                </h3>\r\n            </mafo-panel-heading>\r\n            <mafo-panel-actions>\r\n                <div class=\"pull-right\">\r\n                    <a id=\"new-variabelen-button\" class=\"btn btn-primary\" [ngClass]=\"{'disabled' : edit }\" routerLink=\"/beheer/variabelen/{{code}}/nieuw\" *ngIf=\"code != 'standplaatsTarief'&&code != 'elektriciteitTarief'\">\r\n                        <i class=\"fa fa-plus\"></i>\r\n                        <span class=\"hidden-sm hidden-xs\">&nbsp;&nbsp;{{code=='district' || code=='product' ? 'Nieuw' : 'Nieuwe'}} {{code}}</span>\r\n                    </a>\r\n                    <a id=\"new-wijzigen-button\" class=\"btn btn-primary\" [ngClass]=\"{'disabled' : edit }\" (click)=\"toggleEdit()\">\r\n                        <i class=\"fa fa-edit\"></i>\r\n                        <span class=\"hidden-sm hidden-xs\">&nbsp;&nbsp;Wijzigen</span>\r\n                    </a>\r\n                </div>\r\n            </mafo-panel-actions>\r\n            <mafo-panel-body>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <select id=\"beheer-variabelen-dropdown\" class=\"form-control\" (ngModelChange)=\"onCodeChange($event)\" [disabled]=\"edit\" [ngModel]=\"code\">\r\n                            <option value=\"\" selected=\"selected\">- maak uw keuze -</option>\r\n                            <option value=\"standplaatsTarief\">Tarief standplaats</option>\r\n                            <option value=\"elektriciteitTarief\">Tarief elektriciteit</option>\r\n                            <option value=\"district\">District</option>\r\n                            <option value=\"dieptekavelsapmateriaalcode\">Dieptekavel Sap materiaalcode</option>\r\n                            <option value=\"elektriciteitsapmateriaalcode\">Elektriciteit Sap materiaalcode</option>\r\n                            <option value=\"standplaatssapmateriaalcode\">Standplaats Sap materiaalcode</option>\r\n                            <option value=\"juridischeentiteit\">Juridische entiteit</option>\r\n                            <option value=\"uitstalling\">Uitstalling</option>\r\n                            <option value=\"locatie\">Locatie</option>\r\n                            <option value=\"product\">Product</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <dp-slider label=\"Toon niet-actief\" [ngModel]=\"boolToggleActive\" (ngModelChange)=\"toggleActive($event)\"></dp-slider>\r\n                    </div>\r\n                </div>\r\n                <br /><!--huehuehueheheuehue-->\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12\">\r\n                        <form [formGroup]=\"codesForm\">\r\n                            <div formArrayName=\"codes\">\r\n                                <dp-datagrid #datagrid [data]=\"data\" [options]=\"gridOptions\">\r\n                                    <ng-template #rowTemplate let-item=\"item\" let-index=\"index\" *ngIf=\"!edit && code != 'locatie' && code != 'product'&& code != 'standplaatsTarief' && code !='elektriciteitTarief'\">\r\n                                        <!--Display mode-->\r\n                                        <!--Default template-->\r\n                                        <td>{{item.code}}</td>\r\n                                        <td>{{item.omschrijving}}</td>\r\n                                        <td *ngIf=\"code === 'dieptekavelsapmateriaalcode'\">{{getValue(item.dieptekavelStatusId)}}</td>\r\n                                        <td *ngIf=\"code === 'elektriciteitsapmateriaalcode'\">{{item.elektriciteitId}}</td>\r\n                                        <td *ngIf=\"code === 'standplaatssapmateriaalcode'\">{{item.marktId}}</td>\r\n                                        <td *ngIf=\"code === 'juridischeentiteit'\">{{item.afkorting}}</td>\r\n                                    </ng-template>\r\n                                    <ng-template #rowTemplate let-item=\"item\" let-index=\"index\" *ngIf=\"!edit && code === 'locatie'\">\r\n                                        <!--Display mode-->\r\n                                        <!--Location template-->\r\n                                        <td>{{item.naam}}</td>\r\n                                        <td>{{item.districtCode}}</td>\r\n                                    </ng-template>\r\n                                    <ng-template #rowTemplate let-item=\"item\" let-index=\"index\" *ngIf=\"!edit && code === 'product'\">\r\n                                        <!--Display mode-->\r\n                                        <!--Product template-->\r\n                                        <td>{{item.omschrijving}}</td>\r\n                                        <td>{{item.geldigVan}}</td>\r\n                                        <td>{{item.geldigTot}}</td>\r\n                                    </ng-template>\r\n                                    <ng-template #rowTemplate let-item=\"item\" let-index=\"index\" *ngIf=\"!edit && code === 'standplaatsTarief'\">\r\n                                        <!--Display mode-->\r\n                                        <!--Standplaats tarief template-->\r\n                                        <td>{{item.dagVanDeWeekId}}</td>\r\n                                        <td>{{item.omschrijving}}</td>\r\n                                        <td>{{item.eenheidsPrijs}}</td>\r\n                                    </ng-template>\r\n                                    <ng-template #rowTemplate let-item=\"item\" let-index=\"index\" *ngIf=\"!edit && code === 'elektriciteitTarief'\">\r\n                                        <!--Display mode-->\r\n                                        <!--Elektriciteit tarief template-->\r\n                                        <td>{{item.elektriciteitsId}}</td>\r\n                                        <td>{{item.eenheidsPrijs}}</td>\r\n                                        <td>{{item.omschrijving}}</td>\r\n                                    </ng-template>\r\n                                    <ng-template #rowTemplate let-item=\"item\" let-index=\"index\" *ngIf=\"edit && code != 'locatie' && code != 'product' && code != 'standplaatsTarief' && code !='elektriciteitTarief'\">\r\n                                        <!--Edit mode-->\r\n                                        <td [formGroupName]=\"index\">\r\n                                            <form-group>\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"code\" />\r\n                                            </form-group>\r\n                                        </td>\r\n                                        <td [formGroupName]=\"index\">\r\n                                            <form-group>\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"omschrijving\" />\r\n                                            </form-group>\r\n                                        </td>\r\n                                       \r\n                                        <td *ngIf=\"code === 'dieptekavelsapmateriaalcode'\" [formGroupName]=\"index\">\r\n                                            <form-group>\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"dieptekavelStatusId\" />\r\n                                            </form-group>\r\n                                        </td>\r\n                                        <td *ngIf=\"code === 'elektriciteitsapmateriaalcode'\" [formGroupName]=\"index\">\r\n                                            <form-group>\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"elektriciteitId\" />\r\n                                            </form-group>\r\n                                        </td>\r\n                                        <td *ngIf=\"code === 'standplaatssapmateriaalcode'\" [formGroupName]=\"index\">\r\n                                            <form-group>\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"marktId\" />\r\n                                            </form-group>\r\n                                        </td>\r\n                                        <td *ngIf=\"code === 'juridischeentiteit'\" [formGroupName]=\"index\">\r\n                                            <form-group>\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"afkorting\" />\r\n                                            </form-group>\r\n                                        </td>\r\n                                    </ng-template>\r\n                                    <ng-template #rowTemplate let-item=\"item\" let-index=\"index\" *ngIf=\"edit && code === 'locatie'\">\r\n                                        <!--Edit mode-->\r\n                                        <!--Location template-->\r\n                                        <td [formGroupName]=\"index\">\r\n                                            <form-group>\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"naam\" />\r\n                                            </form-group>\r\n                                        </td>\r\n                                        <td [formGroupName]=\"index\">\r\n                                            <form-group>\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"districtCode\" />\r\n                                            </form-group>\r\n                                        </td>\r\n                                    </ng-template>\r\n                                    <ng-template #rowTemplate let-item=\"item\" let-index=\"index\" *ngIf=\"edit && code === 'product'\">\r\n                                        <!--Edit mode-->\r\n                                        <!--Product template-->\r\n                                        <td [formGroupName]=\"index\">\r\n                                            <form-group>\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"omschrijving\" />\r\n                                            </form-group>\r\n                                        </td>\r\n                                        <td [formGroupName]=\"index\">\r\n                                            <form-group>\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"geldigVan\" />\r\n                                            </form-group>\r\n                                        </td>\r\n                                        <td [formGroupName]=\"index\">\r\n                                            <form-group>\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"geldigTot\" />\r\n                                            </form-group>\r\n                                        </td>\r\n                                    </ng-template>\r\n                                    <ng-template #rowTemplate let-item=\"item\" let-index=\"index\" *ngIf=\"edit && code === 'standplaatsTarief'\">\r\n                                        <!--Edit mode-->\r\n                                        <!--Standplaats tarief template-->\r\n                                        <td [formGroupName]=\"index\">\r\n                                            {{item.dagVanDeWeekId}}\r\n                                            <form-group hidden=\"hidden\">\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"dagVanDeWeekId\" />\r\n                                            </form-group>\r\n                                        </td>\r\n                                        <td [formGroupName]=\"index\">\r\n                                            {{item.omschrijving}}\r\n                                            <form-group hidden=\"hidden\">\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"omschrijving\" />\r\n                                            </form-group>\r\n                                        </td>\r\n                                        <td [formGroupName]=\"index\">\r\n                                            <form-group>\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"eenheidsPrijs\" />\r\n                                            </form-group>\r\n                                        </td>\r\n                                    </ng-template>\r\n                                    <ng-template #rowTemplate let-item=\"item\" let-index=\"index\" *ngIf=\"edit && code === 'elektriciteitTarief'\">\r\n                                        <!--Edit mode-->\r\n                                        <!--Elektriciteit tarief template-->\r\n                                        <td [formGroupName]=\"index\" >\r\n                                            {{item.elektriciteitsId}}\r\n                                            <form-group hidden=\"hidden\">\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"elektriciteitId\" />\r\n                                            </form-group>\r\n                                        </td>\r\n                                        <td [formGroupName]=\"index\">\r\n                                            <form-group>\r\n                                                <input type=\"text\" value=\"{{item.eenheidsPrijs}}\" class=\"form-control\" formControlName=\"eenheidsPrijs\" />\r\n                                            </form-group>\r\n                                        </td>\r\n                                        <td [formGroupName]=\"index\">\r\n                                            {{item.omschrijving}}\r\n                                            <form-group hidden=\"hidden\">\r\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"omschrijving\" />\r\n                                            </form-group>\r\n                                        </td>\r\n                                    </ng-template>\r\n                                    <ng-template #rowActions let-item=\"item\" let-index=\"index\" *ngIf=\"!edit && code !='elektriciteitTarief' && code != 'standplaatsTarief'\">\r\n                                        <ng-container>\r\n                                            <button title=\"Verwijderen\" class=\"btn btn-danger btn-xs btn-delete\" [attr.data-id]=\"item.id\" (click)=\"showDeleteModal(item)\">\r\n                                                <i class=\"fa fa-trash-o\"></i>\r\n                                            </button>\r\n                                        </ng-container>\r\n                                    </ng-template>\r\n                                </dp-datagrid>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </mafo-panel-body>\r\n        </mafo-panel>\r\n    </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"edit\">\r\n    <div class=\"col-xs-12\">\r\n        <div class=\"pull-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"codesForm.invalid\" (click)=\"submitForm(); toggleEdit()\">Bewaren</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"toggleEdit()\">Annuleren</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "sW1E":
/*!********************************************************************!*\
  !*** ./ClientApp/app/beheer/beheer-variabelen-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: BeheerVariabelenDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeheerVariabelenDetailComponent", function() { return BeheerVariabelenDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_beheer_variabelen_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/beheer-variabelen-detail.component.html */ "E5ID");
/* harmony import */ var _raw_loader_html_beheer_variabelen_detail_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_beheer_variabelen_detail_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _componenten_code_select_code_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componenten/code-select/code.service */ "Adg9");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _componenten_location_select_locatie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componenten/location-select/locatie.service */ "2CY5");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services */ "mZsw");
/* harmony import */ var _componenten_markt_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../componenten/markt-select */ "3vM0");











var BeheerVariabelenDetailComponent = /** @class */ (function () {
    function BeheerVariabelenDetailComponent(codeService, toastr, route, fb, locationService, productService, router, marktService) {
        var _this = this;
        this.codeService = codeService;
        this.toastr = toastr;
        this.route = route;
        this.fb = fb;
        this.locationService = locationService;
        this.productService = productService;
        this.router = router;
        this.marktService = marktService;
        this.filterDistricten = function ($event) {
            $event.data = $event.data.filter(function (x) { return _this.districten.includes(x.code.toUpperCase()); });
        };
    }
    BeheerVariabelenDetailComponent.prototype.ngOnInit = function () {
        this.code = this.route.snapshot.params["code"];
        this.pageTitle = "Nieuw(e) " + this.code + ":";
        this.getMarkten();
        this.buildForm();
    };
    BeheerVariabelenDetailComponent.prototype.onSubmit = function ($event) {
        $event.preventDefault();
        var payload = {};
        var isCode = false;
        payload.actief = true;
        payload.id = 0;
        switch (this.code) {
            case "district":
                payload.code = this.codeForm.get('code').value;
                payload.naam = this.codeForm.get('naam').value;
                this.commitCode(payload);
                break;
            case "dieptekavelsapmateriaalcode":
                payload.dieptekavelStatusId = this.codeForm.get('dieptekavelStatusId').value;
                payload.code = this.codeForm.get('code').value;
                payload.omschrijving = this.codeForm.get('omschrijving').value;
                this.commitCode(payload);
                break;
            case "elektriciteitsapmateriaalcode":
                payload.elektriciteitId = this.codeForm.get('elektriciteitId').value;
                payload.code = this.codeForm.get('code').value;
                payload.omschrijving = this.codeForm.get('omschrijving').value;
                this.commitCode(payload);
                break;
            case "standplaatssapmateriaalcode":
                payload.marktId = this.codeForm.get('marktId').value;
                payload.code = this.codeForm.get('code').value;
                payload.omschrijving = this.codeForm.get('omschrijving').value;
                this.commitCode(payload);
                break;
            case "juridischeentiteit":
                payload.afkorting = this.codeForm.get('afkorting').value;
                payload.code = this.codeForm.get('code').value;
                payload.omschrijving = this.codeForm.get('omschrijving').value;
                this.commitCode(payload);
                break;
            case "uitstalling":
                payload.code = this.codeForm.get('code').value;
                payload.omschrijving = this.codeForm.get('omschrijving').value;
                this.commitCode(payload);
                break;
            case "product":
                payload.geldigVan = this.codeForm.get('geldigVan').value;
                payload.geldigTot = this.codeForm.get('geldigTot').value;
                payload.omschrijving = this.codeForm.get('omschrijving').value;
                payload.actief = true;
                this.commitProduct(payload);
                break;
            case "locatie":
                payload.districtCode = this.codeForm.get('districtCode').value;
                payload.naam = this.codeForm.get('naam').value;
                this.commitLocatie(payload);
                break;
            case "standplaatsTarief":
                break;
            case "elektriciteitTarief":
                break;
        }
        this.router.navigate(['/beheer/variabelen/' + this.code]);
    };
    BeheerVariabelenDetailComponent.prototype.commitCode = function (payload) {
        var _this = this;
        this.codeService.save(this.code, payload, false).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            _this.toastr.success("Code succesvol bewaard", "Code bewaren");
        })).subscribe(function () {
        }, function (x) {
            _this.toastr.error("Code kon niet worden bewaard.", "Code bewaren");
        });
    };
    BeheerVariabelenDetailComponent.prototype.commitLocatie = function (payload) {
        var _this = this;
        this.locationService.save(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            _this.toastr.success("Locatie succesvol bewaard", "Locatie bewaren");
        })).subscribe(function () {
        }, function (x) {
            _this.toastr.error("Locatie kon niet worden bewaard.", "Locatie bewaren");
        });
    };
    BeheerVariabelenDetailComponent.prototype.commitProduct = function (payload) {
        var _this = this;
        this.productService.save(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            _this.toastr.success("Product succesvol bewaard", "Product bewaren");
        })).subscribe(function () {
        }, function (x) {
            _this.toastr.error("Product kon niet worden bewaard.", "Product bewaren");
        });
    };
    BeheerVariabelenDetailComponent.prototype.buildForm = function () {
        this.codeForm = this.fb.group({
            code: this.fb.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            omschrijving: this.fb.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        switch (this.code) {
            case "locatie":
                this.codeForm.addControl("naam", this.fb.control(""));
                this.codeForm.addControl("districtCode", this.fb.control(""));
                break;
            case "district":
                this.codeForm.addControl("naam", this.fb.control(""));
                break;
            case "dieptekavelsapmateriaalcode":
                this.codeForm.addControl("dieptekavelStatusId", this.fb.control(""));
                break;
            case "elektriciteitsapmateriaalcode":
                this.codeForm.addControl("elektriciteitId", this.fb.control(""));
                break;
            case "standplaatssapmateriaalcode":
                this.codeForm.addControl("marktId", this.fb.control(""));
                break;
            case "juridischeentiteit":
                this.codeForm.addControl("afkorting", this.fb.control(""));
                break;
            case "uitstalling":
                break;
            case "product":
                this.codeForm.addControl("geldigVan", this.fb.control(""));
                this.codeForm.addControl("geldigTot", this.fb.control(""));
                break;
        }
    };
    BeheerVariabelenDetailComponent.prototype.getMarkten = function () {
        var _this = this;
        this.marktService.getAll()
            .subscribe(function (markten) {
            _this.markten = markten.embedded.resourceList.sort(_this.compareMarkten);
            _this.districten = _this.markten.map(function (x) { return x.district.code; });
        }, function (error) { return _this.errorMessage = error; });
    };
    BeheerVariabelenDetailComponent.prototype.compareMarkten = function (a, b) {
        if (a.naam.toLowerCase() < b.naam.toLowerCase())
            return -1;
        if (a.naam.toLowerCase() > b.naam.toLowerCase())
            return 1;
        return 0;
    };
    BeheerVariabelenDetailComponent.ctorParameters = function () { return [
        { type: _componenten_code_select_code_service__WEBPACK_IMPORTED_MODULE_6__["CodeService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _componenten_location_select_locatie_service__WEBPACK_IMPORTED_MODULE_8__["LocatieService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_9__["ProductService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _componenten_markt_select__WEBPACK_IMPORTED_MODULE_10__["MarktService"] }
    ]; };
    BeheerVariabelenDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "mafo-beheer-variabelen",
            template: _raw_loader_html_beheer_variabelen_detail_component_html__WEBPACK_IMPORTED_MODULE_1___default.a
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_componenten_code_select_code_service__WEBPACK_IMPORTED_MODULE_6__["CodeService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _componenten_location_select_locatie_service__WEBPACK_IMPORTED_MODULE_8__["LocatieService"],
            _services__WEBPACK_IMPORTED_MODULE_9__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _componenten_markt_select__WEBPACK_IMPORTED_MODULE_10__["MarktService"]])
    ], BeheerVariabelenDetailComponent);
    return BeheerVariabelenDetailComponent;
}());



/***/ })

}]);
//# sourceMappingURL=beheer-beheer-module.js.map