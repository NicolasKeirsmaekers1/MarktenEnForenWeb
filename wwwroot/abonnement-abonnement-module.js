(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["abonnement-abonnement-module"],{

/***/ "+7Qg":
/*!***********************************************************************!*\
  !*** ./ClientApp/app/abonnement/elektriciteit-historiek.component.ts ***!
  \***********************************************************************/
/*! exports provided: ElektriciteitHistoriekComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElektriciteitHistoriekComponent", function() { return ElektriciteitHistoriekComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_elektriciteit_historiek_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/elektriciteit-historiek.component.html */ "dgvW");
/* harmony import */ var _raw_loader_html_elektriciteit_historiek_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_elektriciteit_historiek_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_abonnement_elektriciteit_wijziging_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/abonnement-elektriciteit-wijziging.service */ "ijnu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");





var ElektriciteitHistoriekComponent = /** @class */ (function () {
    function ElektriciteitHistoriekComponent(abonnementElektriciteitWijzigingService, datePipe) {
        this.abonnementElektriciteitWijzigingService = abonnementElektriciteitWijzigingService;
        this.datePipe = datePipe;
        this.gridOptions = {
            stripedRows: true,
            fields: [
                {
                    field: "wijzigingdatum",
                    title: "Wijzigingdatum"
                },
                {
                    field: "behoefte",
                    title: "Vorige behoefte"
                },
                {
                    field: "begindatum",
                    title: "Vorige begindatum"
                },
                {
                    field: "einddatum",
                    title: "Vorige einddatum"
                }
            ]
        };
    }
    ElektriciteitHistoriekComponent.prototype.ngOnChanges = function (changes) {
        if (changes && changes.elekAboGewijzigdCode) {
            this.fetchData(this.page);
        }
    };
    ElektriciteitHistoriekComponent.prototype.fetchData = function (page) {
        var _this = this;
        if (!this.page)
            this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }
        this.abonnementElektriciteitWijzigingService.getAll(this.data.id, this.page).subscribe(function (x) {
            _this.historiekElektriciteit = {
                page: x.page,
                embedded: {
                    resourceList: x.embedded.resourceList.map(function (x) {
                        return {
                            begindatum: "" + _this.datePipe.transform(x.begindatum, 'dd/MM/yyyy'),
                            einddatum: "" + _this.datePipe.transform(x.einddatum, 'dd/MM/yyyy'),
                            behoefte: ("" + x.elektriciteitOmschrijving).toUpperCase(),
                            wijzigingdatum: "" + _this.datePipe.transform(x.createdOn, 'dd/MM/yyyy')
                        };
                    })
                },
                links: x.links
            };
        });
    };
    ElektriciteitHistoriekComponent.ctorParameters = function () { return [
        { type: _services_abonnement_elektriciteit_wijziging_service__WEBPACK_IMPORTED_MODULE_3__["AbonnementElektriciteitWijzigingService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }
    ]; };
    ElektriciteitHistoriekComponent.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        elekAboGewijzigdCode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    ElektriciteitHistoriekComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "mafo-elektriciteit-historiek",
            template: _raw_loader_html_elektriciteit_historiek_component_html__WEBPACK_IMPORTED_MODULE_1___default.a
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_abonnement_elektriciteit_wijziging_service__WEBPACK_IMPORTED_MODULE_3__["AbonnementElektriciteitWijzigingService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]])
    ], ElektriciteitHistoriekComponent);
    return ElektriciteitHistoriekComponent;
}());



/***/ }),

/***/ "+J2K":
/*!*****************************************************************!*\
  !*** ./ClientApp/app/abonnement/html/standplaats.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".kavel-detail {\r\n    width: 80px;\r\n}\r\n.badge, .kavel-detail {\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n.badge {\r\n    border-radius: 5px;\r\n    margin: 2px;\r\n    box-sizing: border-box;\r\n}\r\n.badge-border {\r\n    box-sizing: border-box;\r\n}\r\n.right-slider {\r\n    border-left: 2px solid #e5e5e5;\r\n    position: fixed;\r\n    min-height: 100%;\r\n    /*overflow: hidden;*/\r\n    overflow-y: scroll;\r\n    background-color: #f3f3f3;\r\n    top: 0;\r\n    padding-top: 70px;\r\n    -ms-opacity: 0;\r\n    opacity: 0;\r\n    transition: right .5s cubic-bezier(0, 1, 0.5, 1), opacity .3s cubic-bezier(0, 1, 0.5, 1);\r\n}\r\n.right-slider.slide {\r\n        right: 0 !important;\r\n        opacity: 1 !important;\r\n    }\r\n/*Detail*/\r\n#kavel-detail-wrapper {\r\n    width: 100%;\r\n    right: -100%;\r\n    z-index: 12;\r\n}\r\n.KavelOpmerking{\r\n    color: grey;\r\n    font-size: 10px;\r\n}\r\n#kavel-detail-wrapper.slide {\r\n        border-left: 0;\r\n    }\r\n@media (min-width: 768px) {\r\n    #kavel-detail-wrapper.slide {\r\n        left: 220px;\r\n        padding-right: 240px;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvYWJvbm5lbWVudC9odG1sL3N0YW5kcGxhYXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBR1gsc0JBQXNCO0FBQzFCO0FBRUE7SUFHSSxzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLE1BQU07SUFDTixpQkFBaUI7SUFDakIsY0FBYztJQUNkLFVBQVU7SUFJVix3RkFBd0Y7QUFDNUY7QUFFSTtRQUNJLG1CQUFtQjtRQUNuQixxQkFBcUI7SUFDekI7QUFFSixTQUFTO0FBQ1Q7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFFSTtRQUNJLGNBQWM7SUFDbEI7QUFFSjtJQUNJO1FBQ0ksV0FBVztRQUNYLG9CQUFvQjtJQUN4QjtBQUNKIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvYWJvbm5lbWVudC9odG1sL3N0YW5kcGxhYXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua2F2ZWwtZGV0YWlsIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG59XHJcbi5iYWRnZSwgLmthdmVsLWRldGFpbCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmJhZGdlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmJhZGdlLWJvcmRlciB7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ucmlnaHQtc2xpZGVyIHtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2U1ZTVlNTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAvKm92ZXJmbG93OiBoaWRkZW47Ki9cclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcclxuICAgIC1tcy1vcGFjaXR5OiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiByaWdodCAuNXMgY3ViaWMtYmV6aWVyKDAsIDEsIDAuNSwgMSksIG9wYWNpdHkgLjNzIGN1YmljLWJlemllcigwLCAxLCAwLjUsIDEpO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogcmlnaHQgLjVzIGN1YmljLWJlemllcigwLCAxLCAwLjUsIDEpLCBvcGFjaXR5IC4zcyBjdWJpYy1iZXppZXIoMCwgMSwgMC41LCAxKTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogcmlnaHQgLjVzIGN1YmljLWJlemllcigwLCAxLCAwLjUsIDEpLCBvcGFjaXR5IC4zcyBjdWJpYy1iZXppZXIoMCwgMSwgMC41LCAxKTtcclxuICAgIHRyYW5zaXRpb246IHJpZ2h0IC41cyBjdWJpYy1iZXppZXIoMCwgMSwgMC41LCAxKSwgb3BhY2l0eSAuM3MgY3ViaWMtYmV6aWVyKDAsIDEsIDAuNSwgMSk7XHJcbn1cclxuXHJcbiAgICAucmlnaHQtc2xpZGVyLnNsaWRlIHtcclxuICAgICAgICByaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbi8qRGV0YWlsKi9cclxuI2thdmVsLWRldGFpbC13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcmlnaHQ6IC0xMDAlO1xyXG4gICAgei1pbmRleDogMTI7XHJcbn1cclxuLkthdmVsT3BtZXJraW5ne1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbiAgICAja2F2ZWwtZGV0YWlsLXdyYXBwZXIuc2xpZGUge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAja2F2ZWwtZGV0YWlsLXdyYXBwZXIuc2xpZGUge1xyXG4gICAgICAgIGxlZnQ6IDIyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0MHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "5Y0k":
/*!*****************************************************************!*\
  !*** ./ClientApp/app/abonnement/abonnement-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: AbonnementDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbonnementDetailComponent", function() { return AbonnementDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_abonnement_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/abonnement-detail.component.html */ "syha");
/* harmony import */ var _raw_loader_html_abonnement_detail_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_abonnement_detail_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "mZsw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");





var AbonnementDetailComponent = /** @class */ (function () {
    function AbonnementDetailComponent(abonnementService, route) {
        this.abonnementService = abonnementService;
        this.route = route;
        this.pageTitle = "Abonnement detail";
    }
    AbonnementDetailComponent.prototype.ngOnInit = function () {
        this.abonnement = this.route.snapshot.data['abonnement'];
    };
    AbonnementDetailComponent.prototype.elekAboGewijzigd = function (elekAboGewijzigdCode) {
        this.elekAboGewijzigdCode = elekAboGewijzigdCode;
    };
    AbonnementDetailComponent.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["AbonnementService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    AbonnementDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: _raw_loader_html_abonnement_detail_component_html__WEBPACK_IMPORTED_MODULE_1___default.a
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["AbonnementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AbonnementDetailComponent);
    return AbonnementDetailComponent;
}());



/***/ }),

/***/ "5e+M":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/abonnement/html/abonnement-huidig.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <mafo-panel selector=\"title\" [collapsable]=\"false\" [open]=\"true\">\r\n            <mafo-panel-heading>\r\n                <h3 class=\"row\">\r\n                    <span class=\"col-xs-12\">\r\n                        <span class=\"fa fa-list-alt\" id=\"title-huidig\"></span>&nbsp;\r\n                        {{pageTitle}}\r\n                    </span>\r\n                </h3>\r\n            </mafo-panel-heading>\r\n            <mafo-panel-body>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <search id=\"abonnement-input-search\" [(ngModel)]=\"abonnementSearchCriteria.query\" (ngModelChange)=\"onFilterChange()\"></search>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <code-select id=\"verkoop-dropdown\" placeholder=\"- Verkoop -\" type=\"Verkoop\" [(ngModel)]=\"abonnementSearchCriteria.verkoopCode\" (ngModelChange)=\"onFilterChange()\"></code-select>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <code-select id=\"status-dropdown\" placeholder=\"- Status -\" type=\"Abonnementstatus\" [(ngModel)]=\"abonnementSearchCriteria.statusCode\" (ngModelChange)=\"onFilterChange()\"></code-select>\r\n                    </div>\r\n                </div>\r\n                <br/>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <select id=\"markt-dropdown\" class=\"form-control\" [class.ajax-loading]=\"isLoading\" [attr.disabled]=\"isLoading || disabled ? true : null\" [(ngModel)]=\"abonnementSearchCriteria.marktId\" (ngModelChange)=\"fetchData(page)\">\r\n                            <option value=\"0\">- Markt -</option>\r\n                            <option *ngFor=\"let markt of markten\" [value]=\"markt.id\">{{markt.naam}}</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <product-select id=\"product-dropdown\" placeholder=\"- Product -\" [(ngModel)]=\"abonnementSearchCriteria.productId\" (change)=\"onFilterChange()\"></product-select>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <datepicker id=\"begindatum-datepicker\" placeholder=\"Begindatum\" [(ngModel)]=\"abonnementSearchCriteria.beginDatum\" (ngModelChange)=\"onFilterChange()\"></datepicker>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <datepicker id=\"einddatum-datepicker\" placeholder=\"Einddatum\" [(ngModel)]=\"abonnementSearchCriteria.eindDatum\" (ngModelChange)=\"onFilterChange()\"></datepicker>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <br />\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12\">\r\n                        <dp-datagrid [data]=\"abonnementen\" [options]=\"gridOptions\" (fetchData)=\"fetchData($event)\" (rowClicked)=\"rowClicked($event)\">\r\n                            <ng-template #rowTemplate let-item=\"item\" let-index=\"i\">\r\n                                <td>\r\n                                    {{item.markt.naam}}&nbsp;({{item.markt.afkorting}})\r\n                                </td>\r\n                                <td>\r\n                                    {{item.firmanaam}}\r\n                                </td>\r\n                                <td>{{item.ondernemingsNr}}</td>\r\n                                <td>\r\n                                    {{concatProducts(item.producten)}}\r\n                                </td>\r\n                                <td>\r\n                                    <code-display type=\"Verkoop\" [value]=\"item.verkoopCode\"></code-display>\r\n                                </td>\r\n                                <td>\r\n                                    {{item.begindatum | date:'dd/MM/yyyy'}}\r\n                                </td>\r\n                                <td>\r\n                                    {{item.einddatum | date:'dd/MM/yyyy'}}\r\n                                </td>\r\n                                <td>\r\n                                    <code-display type=\"AbonnementStatus\" [value]=\"item.statusCode\"></code-display>\r\n                                </td>\r\n                            </ng-template>\r\n                        </dp-datagrid>\r\n                    </div>\r\n                </div>\r\n            </mafo-panel-body>\r\n        </mafo-panel>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "CHGY":
/*!*****************************************************!*\
  !*** ./ClientApp/app/abonnement/klant.component.ts ***!
  \*****************************************************/
/*! exports provided: KlantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlantComponent", function() { return KlantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_klant_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/klant.component.html */ "bUer");
/* harmony import */ var _raw_loader_html_klant_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_klant_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



var KlantComponent = /** @class */ (function () {
    function KlantComponent() {
    }
    KlantComponent.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    KlantComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "mafo-klant",
            template: _raw_loader_html_klant_component_html__WEBPACK_IMPORTED_MODULE_1___default.a
        })
    ], KlantComponent);
    return KlantComponent;
}());



/***/ }),

/***/ "F0pT":
/*!******************************************************!*\
  !*** ./ClientApp/app/abonnement/status.component.ts ***!
  \******************************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_status_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/status.component.html */ "s9Ge");
/* harmony import */ var _raw_loader_html_status_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_status_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-modialog/plugins/bootstrap */ "e7Ax");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth */ "qec8");
/* harmony import */ var _componenten_code_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componenten/code-select */ "HW5m");
/* harmony import */ var _componenten_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../componenten/validators */ "2/Vv");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core */ "BxFb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services */ "mZsw");












var StatusComponent = /** @class */ (function () {
    function StatusComponent(fb, auth, abonnementSvc, kavelService, validationSvc, modal, toastr) {
        var _this = this;
        this.fb = fb;
        this.auth = auth;
        this.abonnementSvc = abonnementSvc;
        this.kavelService = kavelService;
        this.validationSvc = validationSvc;
        this.modal = modal;
        this.toastr = toastr;
        this.edit = false;
        this.status = '';
        this.aard = '';
        this.reden = '';
        this.today = new Date(Date.now());
        this.isHistory = false;
        this.eerstVolgendeKwartaalEindDatum = new Date().eerstVolgendeKwartaalEindDatum();
        this.nieuwKlantCreatie = false;
        this.onBeforeRenderAard = function (x) {
            var filter = ['NORMAAL', 'DIRECT'];
            if (_this.status.toUpperCase() === 'OPGEZEGD') {
                x.data = x.data.filter(function (data) {
                    return filter.includes(data.code.toUpperCase());
                });
            }
            else {
                x.data = x.data.filter(function (data) { return !filter.includes(data.code.toUpperCase()); });
            }
        };
        this.onBeforeRenderRedenen = function (x) {
            var filter;
            switch (_this.status.toUpperCase()) {
                case 'GESCHORST':
                    filter = ['EVENEMENT', 'FOOR', 'OPENBAREWERKEN'];
                    break;
                case 'INOVERDRACHT':
                    filter = [
                        'STOPZETTINGZAAKOFLEURHANDEL',
                        'OVERLIJDENZAAKVOERDER',
                        'ECHTSCHEIDING',
                        'ANDERE',
                    ];
                    break;
                case 'OPGESCHORT':
                    filter = [
                        'ZIEKTE',
                        'OVERMACHT',
                        'SEIZOENSGEBONDENACTIVITEIT',
                        'ONGEVAL',
                    ];
                    break;
                case 'OPGEZEGD':
                    filter = ['ZIEKTE', 'OVERMACHT', 'OVERLIJDENZAAKVOERDER', 'ONGEVAL'];
                    break;
                case 'INGETROKKEN':
                    filter = [
                        'FAILLISSEMENT',
                        'VRIJWILLIGESTOPZETTINGZAAK',
                        'ONGELDIGELEURKAART',
                    ];
                    break;
                case 'LOPEND':
                    if (_this.currentStatus === 'OPGESCHORT' ||
                        _this.currentStatus === 'INOVERDRACHT' ||
                        _this.currentStatus === 'INGETROKKEN' ||
                        _this.currentStatus === 'OPGEZEGD') {
                        filter = ['OPVRAAGKLANT', 'ADMINISTRATIEVERECHTZETTING'];
                        break;
                    }
                    if (_this.currentStatus === 'GESCHORST') {
                        filter = ['VOORTIJDIGBEEINDIGD', 'ADMINISTRATIEVERECHTZETTING'];
                        break;
                    }
                default:
                    filter = [];
                    break;
            }
            x.data = x.data.filter(function (data) { return filter.includes(data.code.toUpperCase()); });
        };
        this.onBeforeRenderStatus = function (x) {
            if (!x)
                return;
            var filter = [];
            switch (_this.currentStatus) {
                case 'OPGESCHORT':
                    filter.push('OPGESCHORT', 'LOPEND');
                    break;
                case 'GESCHORST':
                case 'INOVERDRACHT':
                case 'INGETROKKEN':
                case 'OPGEZEGD':
                    filter.push('LOPEND');
                    break;
                case 'LOPEND':
                    filter.push('GESCHORST', 'OPGESCHORT', 'INOVERDRACHT', 'INGETROKKEN', 'OPGEZEGD');
                    break;
            }
            x.data = x.data.filter(function (data) { return filter.includes(data.code.toUpperCase()); });
        };
        this.files = {};
    }
    Object.defineProperty(StatusComponent.prototype, "heeftReden", {
        get: function () {
            return this.statusForm.get('reden').enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StatusComponent.prototype, "heeftAard", {
        get: function () {
            return this.statusForm.get('aard').enabled;
        },
        enumerable: false,
        configurable: true
    });
    StatusComponent.prototype.ngOnInit = function () {
        this.statusForm = this.fb.group({
            status: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            aard: this.fb.control({ value: '', disabled: true }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            reden: this.fb.control({ value: '', disabled: true }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            opmerkingen: this.fb.control(''),
            beginDatum: this.fb.control({ value: new Date(), disabled: true }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            eindDatum: this.fb.control({ value: new Date(), disabled: true }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            ondernemingsnummerOvernemer: this.fb.control({ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            eindDatumHuidigAbonnenemt: this.fb.control({ value: new Date(), disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            ontvangstAanvraagOpschortingDatum: this.fb.control({ value: new Date(), disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            eindDatumAbonnement: this.fb.control({ value: new Date(), disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            briefBetekeningOpzegDatum: this.fb.control({ value: new Date(), disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            datumOntvangstOpzeg: this.fb.control({ value: new Date(), disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
        this.origineleBegindatum = this.data.abonnementStatusBeginDatum;
        this.security();
        this.mogelijkeEindData = new Array();
    };
    StatusComponent.prototype.resetFormGroup = function () {
        var excludes = ['status', 'aard', 'reden', 'opmerkingen'];
        for (var ctrlName in this.statusForm.controls) {
            if (excludes.includes(ctrlName)) {
                if (ctrlName === 'status')
                    continue;
                if (ctrlName === 'opmerkingen')
                    this.statusForm.get(ctrlName).setValue('');
            }
            else {
                var control = this.statusForm.get(ctrlName);
                control.disable();
                control.reset();
                control.markAsPristine({ onlySelf: true });
            }
        }
        this.files = {};
        this.onderneming = null;
    };
    StatusComponent.prototype.ondernemingFound = function ($event) {
        var _this = this;
        if (!$event.data || $event.data.id <= 0) {
            this.modal
                .confirm()
                .title('Creatie nieuwe klant')
                .message('Wil u een nieuwe klant aanmaken als overnemer van dit abonnement?')
                .cancelBtn('Annuleren')
                .okBtn('Bevestig')
                .open()
                .result.catch() // catch error not related to the result (modal open...)
                .then(function (dialog) { return dialog.result; }) // dialog has more properties,lets just return the promise for a result.
                .then(function (x) {
                _this.onderneming = {
                    ondernemingsnr: _this.statusForm.get('ondernemingsnummerOvernemer')
                        .value,
                };
                _this.nieuwKlantCreatie = true;
            }) // if were here ok was clicked.
                .catch(function (x) { return (_this.nieuwKlantCreatie = false); }); // if were here cancel was clicked.
        }
        else
            this.klantCreated($event.data);
    };
    StatusComponent.prototype.klantCreated = function ($event) {
        this.statusForm.patchValue({
            ondernemingsnummerOvernemer: $event.ondernemingsnr,
        });
        this.onderneming = $event;
        this.nieuwKlantCreatie = false;
    };
    StatusComponent.prototype.beginDatumChange = function ($event) {
        if (!$event)
            return;
        var date = $event;
        switch (this.status.toUpperCase()) {
            case 'GESCHORST':
            case 'OPGESCHORT':
                date = $event.addMonths(1).addDays(-1);
                if (date < this.today) {
                    this.statusForm.patchValue({ einddatum: this.today });
                    this.isHistory = true;
                }
                else {
                    this.statusForm.patchValue({ eindDatum: date });
                    this.isHistory = false;
                }
                break;
            case 'OPGEZEGD':
                if (this.aard && this.aard.toUpperCase() === 'NORMAAL') {
                    date = $event.eerstVolgendeKwartaalEindDatum();
                    this.statusForm.patchValue({ eindDatum: date });
                }
                else if (this.aard && this.aard.toUpperCase() === 'DIRECT') {
                    this.statusForm.patchValue({ eindDatum: date });
                }
                break;
            default:
        }
    };
    StatusComponent.prototype.configureStatus = function (value) {
        if (!value)
            return;
        this.status = '';
        this.resetFormGroup();
        switch (value.toUpperCase()) {
            case 'GESCHORST':
                this.enableControl('beginDatum', new Date());
                this.enableControl('eindDatum', new Date());
                this.disableControl('aard');
                this.enableControl('reden', '');
                break;
            case 'INGETROKKEN':
                this.disableControl('reden');
                this.enableControl('aard', '');
                break;
            case 'INOVERDRACHT':
                this.enableControl('ondernemingsnummerOvernemer', '');
                this.enableControl('eindDatumAbonnement', new Date().eerstVolgendeSemesterEindDatum(true));
                this.enableControl('reden', '');
                this.disableControl('aard');
                this.disableDates();
                this.getKavels();
                break;
            case 'OPGESCHORT':
                this.enableControl('reden', '');
                this.disableControl('aard');
                var startDate = new Date();
                if (this.currentStatus === 'OPGESCHORT') {
                    startDate = new Date(this.data.abonnementStatusEindDatum).addDays(1);
                }
                this.enableControl('ontvangstAanvraagOpschortingDatum', startDate);
                this.enableControl('beginDatum', startDate);
                this.enableControl('eindDatum', startDate.addMonths(1));
                break;
            case 'OPGEZEGD':
                this.disableControl('reden');
                this.enableControl('aard', '');
                this.disableDates();
                break;
            case 'LOPEND':
                this.enableControl('reden', '');
                this.disableControl('aard');
                break;
        }
        this.status = value;
        if (this.redenSelector) {
            this.statusForm.patchValue({ reden: '' });
            this.redenSelector.reload();
        }
        if (this.aardSelector) {
            this.statusForm.patchValue({ aard: '' });
            this.aardSelector.reload();
        }
    };
    Object.defineProperty(StatusComponent.prototype, "currentStatus", {
        get: function () {
            return this.data.abonnementStatus.code.toUpperCase();
        },
        enumerable: false,
        configurable: true
    });
    StatusComponent.prototype.configureAard = function (value) {
        console.log(this.statusForm.get('eindDatum').value);
        switch (this.status.toUpperCase()) {
            case 'INGETROKKEN':
                switch (value.toUpperCase()) {
                    case 'OPENBAREWERKEN':
                    case 'SANCTIE':
                        this.disableControl('reden');
                        this.enableControl('eindDatumAbonnement', new Date());
                        break;
                    case 'METOPZEG':
                        this.disableControl('reden');
                        this.enableControl('eindDatumAbonnement', new Date().addMonths(6));
                        this.enableControl('briefBetekeningOpzegDatum', new Date());
                        break;
                    case 'ONGELDIGABONNEMENT':
                        this.enableControl('reden', '');
                        this.statusForm.get('reden').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                        this.enableControl('eindDatumAbonnement', new Date());
                        break;
                }
                break;
            case 'OPGEZEGD':
                switch (value.toUpperCase()) {
                    case 'NORMAAL':
                        this.enableControl('datumOntvangstOpzeg', new Date());
                        this.enableControl('eindDatum', new Date().eerstVolgendeKwartaalEindDatum());
                        this.disableControl('reden');
                        this.disableDates();
                        break;
                    case 'DIRECT':
                        this.enableControl('reden', '');
                        this.enableControl('datumOntvangstOpzeg', new Date());
                        this.enableControl('eindDatum', new Date());
                        break;
                }
                break;
        }
        this.aard = value;
    };
    StatusComponent.prototype.configureReden = function (value) {
        this.reden = value;
    };
    StatusComponent.prototype.editStatus = function () {
        this.edit = !this.edit;
        this.status = '';
        this.statusForm.reset();
        this.statusForm.markAsPristine();
    };
    StatusComponent.prototype.security = function () {
        var _this = this;
        this.canUpdate = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_7__["Privilege"].Abonnement.Update).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (x) {
            var states = [
                _core__WEBPACK_IMPORTED_MODULE_10__["ApplicationConstants"].AbonnementStatus.LopendCode,
                _core__WEBPACK_IMPORTED_MODULE_10__["ApplicationConstants"].AbonnementStatus.GeschorstCode,
                _core__WEBPACK_IMPORTED_MODULE_10__["ApplicationConstants"].AbonnementStatus.OpgeschortCode,
                _core__WEBPACK_IMPORTED_MODULE_10__["ApplicationConstants"].AbonnementStatus.InOverdrachtCode,
                _core__WEBPACK_IMPORTED_MODULE_10__["ApplicationConstants"].AbonnementStatus.IngetrokkenCode,
                _core__WEBPACK_IMPORTED_MODULE_10__["ApplicationConstants"].AbonnementStatus.OpgezegdCode,
            ];
            return x && states.indexOf(_this.data.abonnementStatus.code) >= 0;
        }));
    };
    StatusComponent.prototype.save = function () {
        var _this = this;
        if (!this.statusForm.valid) {
            this.validationSvc.valideFormGroup(this.statusForm);
            this.toastr.warning('Sommige velden bevatten geen geldige waarden', 'Ongeldig formulier');
            return;
        }
        if (this.status === 'INOVERDRACHT') {
            var kavelsFromForm = this.statusForm.get('overTeNemenKavelIds');
            if (!kavelsFromForm || !kavelsFromForm.value.every(function (val) { return val > 0; })) {
                this.toastr.error('Er iets misgelopen bij de kavelselectie voor de overdracht!');
                return;
            }
        }
        if (!this.kavelsBeschikbaarVoorTerugLopend) {
            this.toastr.error('Eén of meerdere kavels zijn niet meer beschikbaar.');
            return;
        }
        if (this.status === 'INGETROKKEN' && this.aard === 'METOPZEG') {
            this.modal
                .confirm()
                .title('Abonnementen markt intrekken')
                .message('Wilt u alle abonnementen en aanvragen van deze markt intrekken?')
                .cancelBtn('Nee')
                .okBtn('Ja')
                .open()
                .result.catch() // catch error not related to the result (modal open...)
                .then(function (dialog) { return dialog.result; }) // dialog has more properties,lets just return the promise for a result.
                .then(function (x) {
                var value = _this.statusForm.value;
                value['globaal'] = true;
                _this.persist();
            })
                .catch(function (x) {
                var value = _this.statusForm.value;
                value['globaal'] = false;
                _this.persist();
            });
        }
        else if (this.status === 'INGETROKKEN' && this.aard === 'SANCTIE') {
            this.modal
                .confirm()
                .title('Abonnementen klant intrekken')
                .message('Wilt u alle abonnementen van deze klant op alle markten intrekken?')
                .cancelBtn('Nee')
                .okBtn('Ja')
                .open()
                .result.catch() // catch error not related to the result (modal open...)
                .then(function (dialog) { return dialog.result; }) // dialog has more properties,lets just return the promise for a result.
                .then(function (x) {
                var value = _this.statusForm.value;
                value['globaal'] = true;
                _this.persist();
            })
                .catch(function (x) {
                var value = _this.statusForm.value;
                value['globaal'] = false;
                _this.persist();
            });
        }
        else if (this.status === 'LOPEND' &&
            this.currentStatus === 'OPGESCHORT') {
            this.modal
                .confirm()
                .title('Creditnota aanmaken')
                .message('Wilt u dat er een creditnota wordt aangemaakt voor de periode dat het abonnement opgeschort was?')
                .cancelBtn('Nee')
                .okBtn('Ja')
                .open()
                .result.catch() // catch error not related to the result (modal open...)
                .then(function (dialog) { return dialog.result; }) // dialog has more properties,lets just return the promise for a result.
                .then(function (x) {
                var value = _this.statusForm.value;
                value['creditnota'] = true;
                _this.persist();
            })
                .catch(function (x) {
                var value = _this.statusForm.value;
                value['creditnota'] = false;
                _this.persist();
            });
        }
        else if (this.isHistory) {
            this.showPersistModal();
        }
        else
            this.persist();
    };
    StatusComponent.prototype.persist = function (value) {
        var _this = this;
        var data = value || this.statusForm.value;
        if (this.status === _core__WEBPACK_IMPORTED_MODULE_10__["ApplicationConstants"].AbonnementStatus.LopendCode) {
            data.vorigeStatus = this.currentStatus;
        }
        if (this.currentStatus == 'OPGESCHORT' && this.status == 'OPGESCHORT') {
            data.startDatumEersteOpschorting = this.origineleBegindatum;
        }
        this.abonnementSvc
            .wijzigStatus(this.data.id, this.status, data, this.files)
            .subscribe(function (x) {
            _this.data.abonnementStatusBeginDatum =
                data.startDatumEersteOpschorting ||
                    data.beginDatum ||
                    data.datumOntvangstOpzeg ||
                    new Date();
            _this.data.abonnementStatusEindDatum =
                data.eindDatum || data.eindDatumAbonnement || null;
            _this.data.abonnementStatus.code = _this.status;
            _this.edit = false;
            _this.toastr.success('Statuswijziging succesvol doorgevoerd');
            if (data.vorigeStatus == 'INOVERDRACHT') {
                _this.modal
                    .alert()
                    .title('OPGELET')
                    .message('Voor deze overdracht werd al een eindfactuur voor de overdrager aangemaakt. Gelieve de nodige stappen hiervoor te ondernemen.')
                    .okBtn('Ok')
                    .open()
                    .result.catch(); // catch error not related to the result (modal open...)
            }
            if (data.vorigeStatus == 'OPGEZEGD') {
                _this.modal
                    .alert()
                    .title('OPGELET')
                    .message('Voor deze opzegging werd al een eindfactuur aangemaakt. Gelieve de nodige stappen hiervoor te ondernemen.')
                    .okBtn('Ok')
                    .open()
                    .result.catch(); // catch error not related to the result (modal open...)
            }
        }, function (x) {
            _this.toastr.error('Kon de abonnement wijzigingen niet doorvoeren', 'Wijzig Status');
            if (x.ExtraInfo) {
                for (var xtra in x.ExtraInfo) {
                    _this.toastr.warning(xtra, x.ExtraInfo[xtra].join(','));
                }
            }
            else if (x) {
                _this.toastr.warning(x.replace(/(<([^>]+)>)/gi, ''));
            }
        });
    };
    StatusComponent.prototype.enableControl = function (name, defaultValue) {
        var ctrl = this.statusForm.get(name);
        if (ctrl) {
            ctrl.enable();
            ctrl.reset();
            ctrl.setValue(defaultValue);
            ctrl.markAsPristine({ onlySelf: true });
        }
    };
    StatusComponent.prototype.disableControl = function (name) {
        var ctrl = this.statusForm.get(name);
        if (ctrl) {
            ctrl.disable();
            ctrl.reset();
        }
    };
    StatusComponent.prototype.disableDates = function () {
        this.mogelijkeEindData = new Array();
        new Date().endDates(5).forEach(function (item) {
            this.mogelijkeEindData.push(item);
        }, this);
    };
    StatusComponent.prototype.enableDates = function () {
        this.mogelijkeEindData = new Array();
    };
    StatusComponent.prototype.kavelsBeschikbaarVoorTerugLopend = function () {
        for (var _i = 0, _a = this.kavels; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.kavelStatus === _services__WEBPACK_IMPORTED_MODULE_11__["KavelStatusEnum"].Gereserveerd ||
                _services__WEBPACK_IMPORTED_MODULE_11__["KavelStatusEnum"].BezetGereserveerd) {
                return false;
            }
        }
        return true;
    };
    StatusComponent.prototype.getKavels = function () {
        var _this = this;
        this.kavelService
            .getAllKavelsForAbonnement(this.data.markt.id, this.data.id)
            .subscribe(function (kavels) {
            _this.kavels = kavels;
            if (_this.statusForm.get('overTeNemenKavelIds'))
                _this.statusForm.removeControl('overTeNemenKavelIds');
            _this.statusForm.addControl('overTeNemenKavelIds', _this.fb.array(_this.kavels.map(function (x) {
                x['enabled'] = false;
                return {
                    value: x.id,
                    disabled: true,
                };
            })));
        }, function (error) {
            _this.toastr.error('Kon de kavels voor dit abonnement niet inladen');
        });
    };
    StatusComponent.prototype.selectKavel = function (index, kavel) {
        var kavels = this.statusForm.get('overTeNemenKavelIds');
        var kavelCtrl = kavels.at(index);
        if (kavelCtrl.enabled) {
            kavelCtrl.disable();
            kavel['enabled'] = false;
        }
        else {
            kavelCtrl.enable();
            kavel['enabled'] = true;
        }
    };
    StatusComponent.prototype.fileUploaded = function ($event) {
        this.files[$event.name] = $event.files;
    };
    StatusComponent.prototype.briefBetekeningOpzegDatumChanged = function ($event) {
        var newDate = $event.addMonths(6);
        this.statusForm.patchValue({ eindDatumAbonnement: newDate });
    };
    StatusComponent.prototype.showPersistModal = function () {
        var _this = this;
        var message = 'De startdatum van uw ' +
            (this.status === 'GESCHORST' ? 'schorsing' : 'opschorting') +
            ' ligt in het verleden. Wenst u hiermee verder te gaan?';
        var isFilesEmpty = !Object.keys(this.files).length;
        this.modal
            .confirm()
            .title('Bevestig status wijziging')
            .body(message)
            .okBtn('Bevestigen')
            .cancelBtn('Terug')
            .open()
            .result.catch() // catch error not related to the result (modal open...)
            .then(function (dialog) { return dialog.result; }) // dialog has more properties,lets just return the promise for a result.
            .then(function (x) { return _this.persist(); }) // if were here ok was clicked.
            .catch(function (x) { }); // if were here cancel was clicked.
    };
    StatusComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _auth__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_11__["AbonnementService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_11__["KavelService"] },
        { type: _componenten_validators__WEBPACK_IMPORTED_MODULE_9__["ValidatorService"] },
        { type: ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    StatusComponent.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        aardSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['aardSelector', { static: false },] }],
        redenSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['redenSelector', { static: false },] }]
    };
    StatusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'mafo-status',
            template: _raw_loader_html_status_component_html__WEBPACK_IMPORTED_MODULE_1___default.a,
            styles: ["\n      .right-slider {\n        border-left: 2px solid #e5e5e5;\n        position: fixed;\n        min-height: 100%;\n        /*overflow: hidden;*/\n        overflow-y: scroll;\n        background-color: #f3f3f3;\n        top: 0;\n        padding-top: 70px;\n        -ms-opacity: 0;\n        opacity: 0;\n        -ms-transition: right 0.5s cubic-bezier(0, 1, 0.5, 1),\n          opacity 0.3s cubic-bezier(0, 1, 0.5, 1);\n        -o-transition: right 0.5s cubic-bezier(0, 1, 0.5, 1),\n          opacity 0.3s cubic-bezier(0, 1, 0.5, 1);\n        -webkit-transition: right 0.5s cubic-bezier(0, 1, 0.5, 1),\n          opacity 0.3s cubic-bezier(0, 1, 0.5, 1);\n        transition: right 0.5s cubic-bezier(0, 1, 0.5, 1),\n          opacity 0.3s cubic-bezier(0, 1, 0.5, 1);\n      }\n      a.kavel-detail {\n        text-decoration: none;\n      }\n\n      .right-slider.slide {\n        right: 0 !important;\n        opacity: 1 !important;\n      }\n\n      /*Detail*/\n      #klant-detail {\n        width: 100%;\n        right: -100%;\n        z-index: 12;\n      }\n\n      #klant-detail.slide {\n        border-left: 0;\n      }\n\n      @media (min-width: 768px) {\n        #klant-detail.slide {\n          left: 220px;\n          padding-right: 240px;\n        }\n      }\n    "]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _auth__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _services__WEBPACK_IMPORTED_MODULE_11__["AbonnementService"],
            _services__WEBPACK_IMPORTED_MODULE_11__["KavelService"],
            _componenten_validators__WEBPACK_IMPORTED_MODULE_9__["ValidatorService"],
            ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "IP/r":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/abonnement/html/dieptekavels-historiek.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <mafo-panel selector=\"dieptekavelshistoriek\" [collapsable]=\"true\" [open]=\"true\">\r\n            <mafo-panel-heading>\r\n                <h5>\r\n                    DIEPTEKAVELS HISTORIEK\r\n                </h5>\r\n            </mafo-panel-heading>\r\n            <mafo-panel-body>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12\">\r\n                        <dp-datagrid [data]=\"historiekDieptekavels\" [options]=\"gridOptions\" (fetchData)=\"fetchData($event)\" (rowClicked)=\"rowClicked($event)\">\r\n                        </dp-datagrid>\r\n                    </div>\r\n                </div>\r\n            </mafo-panel-body>\r\n        </mafo-panel>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "K1eH":
/*!**********************************************************************!*\
  !*** ./ClientApp/app/abonnement/dieptekavels-historiek.component.ts ***!
  \**********************************************************************/
/*! exports provided: DieptekavelsHistoriekComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DieptekavelsHistoriekComponent", function() { return DieptekavelsHistoriekComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_dieptekavels_historiek_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/dieptekavels-historiek.component.html */ "IP/r");
/* harmony import */ var _raw_loader_html_dieptekavels_historiek_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_dieptekavels_historiek_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_abonnement_dieptekavels_wijziging_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/abonnement-dieptekavels-wijziging.service */ "Uw01");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");





var DieptekavelsHistoriekComponent = /** @class */ (function () {
    function DieptekavelsHistoriekComponent(abonnementDieptekavelsWijzigingService, datePipe) {
        this.abonnementDieptekavelsWijzigingService = abonnementDieptekavelsWijzigingService;
        this.datePipe = datePipe;
        this.gridOptions = {
            stripedRows: true,
            fields: [
                {
                    field: "wijzigingdatum",
                    title: "Wijzigingdatum"
                },
                {
                    field: "status",
                    title: "Vorige status"
                },
                {
                    field: "aanvraagdatum",
                    title: "Vorige aanvraagdatum"
                },
                {
                    field: "begindatum",
                    title: "Vorige begindatum"
                },
                {
                    field: "einddatum",
                    title: "Vorige einddatum"
                },
                {
                    field: "diepte",
                    title: "Vorige Diepte"
                },
                {
                    field: "kavels",
                    title: "Vorige Kavels"
                }
            ]
        };
    }
    DieptekavelsHistoriekComponent.prototype.fetchData = function (page) {
        var _this = this;
        if (!this.page)
            this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }
        this.abonnementDieptekavelsWijzigingService.getAll(this.data.id, this.page).subscribe(function (x) {
            _this.historiekDieptekavels = {
                page: x.page,
                embedded: {
                    resourceList: x.embedded.resourceList.map(function (x) {
                        return {
                            wijzigingdatum: "" + (_this.datePipe.transform(x.createdOn, 'dd/MM/yyyy') || "-"),
                            status: "" + x.dieptekavelStatusOmschrijving,
                            aanvraagdatum: "" + (_this.datePipe.transform(x.dieptekavelsAanvraagDatum, 'dd/MM/yyyy') || "-"),
                            begindatum: "" + (_this.datePipe.transform(x.dieptekavelsBeginDatum, 'dd/MM/yyyy') || "-"),
                            einddatum: "" + (_this.datePipe.transform(x.dieptekavelsEindDatum, 'dd/MM/yyyy') || "-"),
                            diepte: "" + x.dieptekavelsDiepte,
                            kavels: "" + x.gebruikteDieptekavels
                        };
                    })
                },
                links: x.links
            };
        });
    };
    DieptekavelsHistoriekComponent.ctorParameters = function () { return [
        { type: _services_abonnement_dieptekavels_wijziging_service__WEBPACK_IMPORTED_MODULE_3__["AbonnementDieptekavelsWijzigingService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }
    ]; };
    DieptekavelsHistoriekComponent.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    DieptekavelsHistoriekComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "mafo-dieptekavels-historiek",
            template: _raw_loader_html_dieptekavels_historiek_component_html__WEBPACK_IMPORTED_MODULE_1___default.a
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_abonnement_dieptekavels_wijziging_service__WEBPACK_IMPORTED_MODULE_3__["AbonnementDieptekavelsWijzigingService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]])
    ], DieptekavelsHistoriekComponent);
    return DieptekavelsHistoriekComponent;
}());



/***/ }),

/***/ "KscG":
/*!*****************************************************************!*\
  !*** ./ClientApp/app/abonnement/abonnement-huidig.component.ts ***!
  \*****************************************************************/
/*! exports provided: HuidigAbonnementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuidigAbonnementComponent", function() { return HuidigAbonnementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_abonnement_huidig_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/abonnement-huidig.component.html */ "5e+M");
/* harmony import */ var _raw_loader_html_abonnement_huidig_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_abonnement_huidig_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "mZsw");
/* harmony import */ var _componenten_markt_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componenten/markt-select */ "3vM0");
/* harmony import */ var _componenten_datagrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componenten/datagrid */ "z4/g");
/* harmony import */ var _core_null_safe_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/null-safe.pipe */ "YQPj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");









var HuidigAbonnementComponent = /** @class */ (function () {
    function HuidigAbonnementComponent(marktService, router, datePipe, abonnementService, nullSafePipe) {
        this.marktService = marktService;
        this.router = router;
        this.datePipe = datePipe;
        this.abonnementService = abonnementService;
        this.nullSafePipe = nullSafePipe;
        this.isLoading = true;
        this.pageTitle = "Abonnementen";
        this.abonnementSearchCriteria = {
            marktId: 0,
            query: "",
            productId: 0,
            verkoopCode: "",
            statusCode: "",
            beginDatum: null,
            eindDatum: null
        };
        this.gridOptions = {
            stripedRows: true,
            fields: [
                {
                    field: "markt.naam",
                    title: "Markt",
                    sortable: true,
                    sort: _componenten_datagrid__WEBPACK_IMPORTED_MODULE_5__["SortOrder"].Ascending
                },
                {
                    field: "aanvraag.klant.firmanaam",
                    title: "Firmanaam",
                    sortable: true
                },
                {
                    field: "aanvraag.klant.ondernemingsnr",
                    title: "OndernemingsNr",
                    sortable: true
                },
                {
                    field: "producten",
                    title: "Producten"
                },
                {
                    field: "verkoop.code",
                    title: "Verkoop",
                    sortable: true
                },
                {
                    field: "begindatum",
                    title: "Begindatum",
                    sortable: true
                },
                {
                    field: "einddatum",
                    title: "Einddatum",
                    sortable: true
                },
                {
                    field: "abonnementstatus.code",
                    title: "Status",
                    sortable: true
                }
            ]
        };
    }
    HuidigAbonnementComponent.prototype.getMarkten = function () {
        var _this = this;
        this.marktService.getAll()
            .subscribe(function (markten) { _this.markten = markten.embedded.resourceList.sort(_this.compareMarkten); _this.isLoading = false; }, function (error) { return _this.errorMessage = error; });
    };
    HuidigAbonnementComponent.prototype.fetchData = function (page) {
        var _this = this;
        if (!this.page)
            this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }
        this.abonnementService.getAll(this.page, this.abonnementSearchCriteria).subscribe(function (x) {
            _this.abonnementen = x;
            _this.isLoading = false;
        });
    };
    HuidigAbonnementComponent.prototype.concatProducts = function (productens) {
        return productens.map(function (m) { return m.omschrijving; }).join(", ");
    };
    HuidigAbonnementComponent.prototype.ngOnInit = function () {
        this.getMarkten();
    };
    HuidigAbonnementComponent.prototype.rowClicked = function (row) {
        this.router.navigate(["abonnement", row.data.id]);
    };
    HuidigAbonnementComponent.prototype.compareMarkten = function (a, b) {
        if (a.naam.toLowerCase() < b.naam.toLowerCase())
            return -1;
        if (a.naam.toLowerCase() > b.naam.toLowerCase())
            return 1;
        return 0;
    };
    HuidigAbonnementComponent.prototype.onFilterChange = function () {
        if (!this.isLoading)
            this.fetchData(this.page);
    };
    HuidigAbonnementComponent.ctorParameters = function () { return [
        { type: _componenten_markt_select__WEBPACK_IMPORTED_MODULE_4__["MarktService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["AbonnementService"] },
        { type: _core_null_safe_pipe__WEBPACK_IMPORTED_MODULE_6__["NullSafePipe"] }
    ]; };
    HuidigAbonnementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: _raw_loader_html_abonnement_huidig_component_html__WEBPACK_IMPORTED_MODULE_1___default.a,
            styles: [".ajax-loading {    \n                background-color: #ffffff;\n                background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPSc2NHB4JyBoZWlnaHQ9JzY0cHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLXJpbmciPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgc3Ryb2tlLWRhc2hhcnJheT0iMTYzLjM2MjgxNzk4NjY2OTI2IDg3Ljk2NDU5NDMwMDUxNDIiIHN0cm9rZT0iI2QyNTM1MyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDsxODAgNTAgNTA7MzYwIDUwIDUwOyIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMHMiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L3N2Zz4=);\n                background-size: 25px 25px;\n                background-position: right 25px center;\n                background-repeat: no-repeat;\n            }"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_componenten_markt_select__WEBPACK_IMPORTED_MODULE_4__["MarktService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AbonnementService"],
            _core_null_safe_pipe__WEBPACK_IMPORTED_MODULE_6__["NullSafePipe"]])
    ], HuidigAbonnementComponent);
    return HuidigAbonnementComponent;
}());



/***/ }),

/***/ "OoeC":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/abonnement/html/dieptekavels.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"dieptekavelForm\" ngNoForm autocomplete=\"off\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\" ng-if=\"data.dieptekavelStatusCode?.toUpperCase() === 'NIETBESCHIKBAAR'\">\r\n            <mafo-panel selector=\"dieptekavels\" [collapsable]=\"data.dieptekavelStatusCode?.toUpperCase() !== 'NIETBESCHIKBAAR'\" [open]=\"false\">\r\n                <mafo-panel-heading>\r\n                    <h5>\r\n                        DIEPTEKAVELS\r\n                    </h5>\r\n                </mafo-panel-heading>\r\n                <mafo-panel-actions>\r\n                    <span class=\"badge pull-right text-uppercase\" style=\"margin: 2px;\">\r\n                        <code-display type=\"DIEPTEKAVELSTATUS\" [value]=\"data.dieptekavelStatusCode\"></code-display>\r\n                    </span>\r\n                </mafo-panel-actions>\r\n                <mafo-panel-body>\r\n                    <div *ngIf=\"!edit\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-6 col-md-3\">\r\n                                <strong>Status</strong>\r\n                            </div>\r\n                            <div class=\"col-xs-6 col-md-9\">\r\n                                <span class=\"form-control-static\">\r\n                                    <code-display type=\"DIEPTEKAVELSTATUS\" [value]=\"data.dieptekavelStatusCode\"></code-display>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <hr />\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\" col-xs-6 col-md-3\">\r\n                            <strong>Aanvraagdatum gebruik dieptekavels</strong>\r\n                        </div>\r\n                        <div class=\"col-xs-6 col-md-3\">\r\n                            <div *ngIf=\"!edit\">\r\n                                <span class=\"form-control-static\">\r\n                                    {{data.dieptekavelsAanvraagDatum | date: 'dd/MM/yyyy' | nullSafe}}\r\n                                </span>\r\n                            </div>\r\n                            <div *ngIf=\"edit\">\r\n                                <form-group>\r\n                                    <datepicker formControlName=\"dieptekavelsAanvraagDatum\"></datepicker>\r\n                                    <help-block type=\"required\">Aanvraagdatum is vereist</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-6 col-md-3\">\r\n                            <strong>Diepte</strong>\r\n                        </div>\r\n                        <div class=\"col-xs-6 col-md-3\">\r\n                            <div *ngIf=\"!edit\">\r\n                                {{data.dieptekavelsDiepte | nullSafe}} meter\r\n                            </div>\r\n                            <div *ngIf=\"edit\">\r\n                                <form-group>\r\n                                    <select class=\"form-control\" formControlName=\"dieptekavelsDiepte\">\r\n                                        <option value=\"\">- maak uw keuze</option>\r\n                                        <option value=\"1\">1 meter</option>\r\n                                        <option value=\"2\">2 meter</option>\r\n                                        <option value=\"3\">3 meter</option>\r\n                                    </select>\r\n                                    <help-block type=\"required\">Diepte is vereist</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr />\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-6 col-md-3\">\r\n                            <strong>Begindatum gebruik dieptekavels</strong>\r\n                        </div>\r\n                        <div class=\"col-xs-6 col-md-3\">\r\n                            <div *ngIf=\"!edit\">\r\n                                {{data.dieptekavelsBeginDatum | date: 'dd/MM/yyyy' | nullSafe}}\r\n                            </div>\r\n                            <div *ngIf=\"edit\">\r\n                                <form-group>\r\n                                    <datepicker formControlName=\"dieptekavelsBeginDatum\"></datepicker>\r\n                                    <help-block type=\"required\">Begindatum is vereist</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-6 col-md-3\">\r\n                            <strong>Einddatum gebruik dieptekavels</strong>\r\n                        </div>\r\n                        <div class=\"col-xs-6 col-md-3\">\r\n                            <div *ngIf=\"!edit\">\r\n                                {{data.dieptekavelsEindDatum | date: 'dd/MM/yyyy' | nullSafe}}\r\n                            </div>\r\n                            <div *ngIf=\"edit\">\r\n                                <datepicker formControlName=\"dieptekavelsEindDatum\"></datepicker>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <hr />\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-6 col-md-3\">\r\n                            <strong>Kavels</strong>\r\n                        </div>\r\n                        <div class=\"col-xs-6 col-md-9\">\r\n                            <span *ngFor=\"let kavel of data.kavels; let i=index; trackBy:i\" class=\"badge\" style=\"margin-right: 2px;\"\r\n                                  [ngClass]=\"setKavelColor(kavel.diepteKavelStatusCode)\"\r\n                                  (click)=\"editDiepteKavelStatus(kavel)\"\r\n                                  [attr.data-value]=\"kavel.diepteKavelStatusCode\"\r\n                                  [title]=\"setKavelTitle()\">{{kavel.oudeNaam}}</span>\r\n                        </div>\r\n                    </div>\r\n                </mafo-panel-body>\r\n                <mafo-panel-footer>\r\n                    <div class=\"pull-right\" *ngIf=\"updateAbonnement | async\">\r\n            \r\n                        <button type=\"button\" class=\"btn btn-primary\" value=\"data.dieptekavelStatusCode?.toUpperCase() === 'NIET BESCHIKBAAR'\" (click)=\"toggleEditDieptekavels(kavel)\" *ngIf=\"!edit\">\r\n                            <i class=\"fa fa-pencil\"></i>&nbsp;Info dieptekavels wijzigen\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveAbonnementDiepteKavelsWijziging()\" *ngIf=\"edit\">Bewaren</button>\r\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"toggleEditDieptekavels(kavel)\" *ngIf=\"edit\">Annuleren</button>\r\n                    </div>\r\n                </mafo-panel-footer>\r\n            </mafo-panel>\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "Qu6X":
/*!*******************************************************!*\
  !*** ./ClientApp/app/abonnement/abonnement.module.ts ***!
  \*******************************************************/
/*! exports provided: AbonnementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbonnementModule", function() { return AbonnementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "tBJz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "mZsw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _abonnement_module_definitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./abonnement.module.definitions */ "S1Ky");
/* harmony import */ var _services_abonnement_elektriciteit_wijziging_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/abonnement-elektriciteit-wijziging.service */ "ijnu");
/* harmony import */ var _services_abonnement_dieptekavels_wijziging_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/abonnement-dieptekavels-wijziging.service */ "Uw01");
/* harmony import */ var _componenten_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../componenten/search */ "su0z");
/* harmony import */ var _componenten_code_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../componenten/code-select */ "HW5m");
/* harmony import */ var _abonnement_resolve__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./abonnement.resolve */ "h6vv");
/* harmony import */ var _componenten_datetimepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../componenten/datetimepicker */ "RyTg");
/* harmony import */ var _core_null_safe_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/null-safe.pipe */ "YQPj");
/* harmony import */ var _componenten_product_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../componenten/product-select */ "yxRt");
/* harmony import */ var _componenten_validators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../componenten/validators */ "2/Vv");
/* harmony import */ var _componenten_file_upload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../componenten/file-upload */ "mW7B");
/* harmony import */ var _componenten_klant_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../componenten/klant-core */ "TDej");



















var AbonnementModule = /** @class */ (function () {
    function AbonnementModule() {
    }
    AbonnementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _services__WEBPACK_IMPORTED_MODULE_4__["ServiceModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _componenten_search__WEBPACK_IMPORTED_MODULE_9__["SearchModule"],
                _componenten_code_select__WEBPACK_IMPORTED_MODULE_10__["CodeSelectModule"],
                _componenten_datetimepicker__WEBPACK_IMPORTED_MODULE_12__["DateTimePickerhModule"],
                _componenten_product_select__WEBPACK_IMPORTED_MODULE_14__["ProductSelectModule"],
                _componenten_validators__WEBPACK_IMPORTED_MODULE_15__["ValidatorsModule"],
                _componenten_file_upload__WEBPACK_IMPORTED_MODULE_16__["FileUploadModule"],
                _componenten_klant_core__WEBPACK_IMPORTED_MODULE_17__["KlantCoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_abonnement_module_definitions__WEBPACK_IMPORTED_MODULE_6__["routes"]))
            ],
            providers: [
                _abonnement_resolve__WEBPACK_IMPORTED_MODULE_11__["AbonnementResolve"],
                _services_abonnement_elektriciteit_wijziging_service__WEBPACK_IMPORTED_MODULE_7__["AbonnementElektriciteitWijzigingService"],
                _services_abonnement_dieptekavels_wijziging_service__WEBPACK_IMPORTED_MODULE_8__["AbonnementDieptekavelsWijzigingService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
                _core_null_safe_pipe__WEBPACK_IMPORTED_MODULE_13__["NullSafePipe"]
            ],
            declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_abonnement_module_definitions__WEBPACK_IMPORTED_MODULE_6__["abonnementComponents"]),
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AbonnementModule);
    return AbonnementModule;
}());



/***/ }),

/***/ "S1Ky":
/*!*******************************************************************!*\
  !*** ./ClientApp/app/abonnement/abonnement.module.definitions.ts ***!
  \*******************************************************************/
/*! exports provided: abonnementComponents, abonnementDirectives, abonnementPipes, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abonnementComponents", function() { return abonnementComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abonnementDirectives", function() { return abonnementDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abonnementPipes", function() { return abonnementPipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _klant_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./klant.component */ "CHGY");
/* harmony import */ var _standplaats_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./standplaats.component */ "mGNO");
/* harmony import */ var _dieptekavels_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dieptekavels.component */ "qlv2");
/* harmony import */ var _dieptekavels_historiek_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dieptekavels-historiek.component */ "K1eH");
/* harmony import */ var _status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./status.component */ "F0pT");
/* harmony import */ var _elektriciteit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elektriciteit.component */ "jGmu");
/* harmony import */ var _elektriciteit_historiek_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elektriciteit-historiek.component */ "+7Qg");
/* harmony import */ var _abonnement_huidig_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./abonnement-huidig.component */ "KscG");
/* harmony import */ var _abonnement_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./abonnement-detail.component */ "5Y0k");
/* harmony import */ var _abonnement_resolve__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./abonnement.resolve */ "h6vv");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth */ "qec8");











var abonnementComponents = [
    _klant_component__WEBPACK_IMPORTED_MODULE_0__["KlantComponent"],
    _standplaats_component__WEBPACK_IMPORTED_MODULE_1__["StandplaatsComponent"],
    _dieptekavels_component__WEBPACK_IMPORTED_MODULE_2__["DieptekavelsComponent"],
    _dieptekavels_historiek_component__WEBPACK_IMPORTED_MODULE_3__["DieptekavelsHistoriekComponent"],
    _status_component__WEBPACK_IMPORTED_MODULE_4__["StatusComponent"],
    _elektriciteit_component__WEBPACK_IMPORTED_MODULE_5__["ElektriciteitComponent"],
    _elektriciteit_historiek_component__WEBPACK_IMPORTED_MODULE_6__["ElektriciteitHistoriekComponent"],
    _abonnement_huidig_component__WEBPACK_IMPORTED_MODULE_7__["HuidigAbonnementComponent"],
    _abonnement_detail_component__WEBPACK_IMPORTED_MODULE_8__["AbonnementDetailComponent"],
];
var abonnementDirectives = [];
var abonnementPipes = [];
var routes = [
    {
        path: "huidig",
        component: _abonnement_huidig_component__WEBPACK_IMPORTED_MODULE_7__["HuidigAbonnementComponent"],
        canActivate: [_auth__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        data: {
            privileges: [_auth__WEBPACK_IMPORTED_MODULE_10__["Privilege"].Abonnement.GetAllFilteredAndPaged]
        }
    },
    {
        path: ":id",
        component: _abonnement_detail_component__WEBPACK_IMPORTED_MODULE_8__["AbonnementDetailComponent"],
        resolve: {
            abonnement: _abonnement_resolve__WEBPACK_IMPORTED_MODULE_9__["AbonnementResolve"]
        },
        canActivate: [_auth__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        data: {
            privileges: [_auth__WEBPACK_IMPORTED_MODULE_10__["Privilege"].Abonnement.Get]
        }
    }
];


/***/ }),

/***/ "Uw01":
/*!*****************************************************************************!*\
  !*** ./ClientApp/app/services/abonnement-dieptekavels-wijziging.service.ts ***!
  \*****************************************************************************/
/*! exports provided: AbonnementDieptekavelsWijzigingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbonnementDieptekavelsWijzigingService", function() { return AbonnementDieptekavelsWijzigingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.settings */ "HRaI");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-slim-loading-bar */ "k+RO");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core */ "BxFb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");







var AbonnementDieptekavelsWijzigingService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AbonnementDieptekavelsWijzigingService, _super);
    function AbonnementDieptekavelsWijzigingService(_http, loader) {
        var _this = _super.call(this, _http, loader) || this;
        _this._http = _http;
        _this.loader = loader;
        _this.urlBase = _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "subscriptions/";
        return _this;
    }
    AbonnementDieptekavelsWijzigingService.prototype.getAll = function (abonnementId, query) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]();
        if (query) {
            params = params.set("page", query.page.toString());
            params = params.set("pageSize", query.pageSize.toString());
            if (query.sort && query.sort.length > 0)
                params = params.set("sort", query.sort.join(","));
        }
        this.loader.start();
        return this._http.get(this.urlBase + abonnementId + "/lotdepthchanges", { headers: this.jsonHeaders, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }));
    };
    AbonnementDieptekavelsWijzigingService.prototype.addAbonnementDiepteKavelWijziging = function (abonnementDiepteKavelWijziging) {
        var _this = this;
        this.loader.start();
        return this._http.post(this.urlBase + abonnementDiepteKavelWijziging.abonnementId + '/lotdepthchanges', abonnementDiepteKavelWijziging, { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    AbonnementDieptekavelsWijzigingService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__["SlimLoadingBarService"] }
    ]; };
    AbonnementDieptekavelsWijzigingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__["SlimLoadingBarService"]])
    ], AbonnementDieptekavelsWijzigingService);
    return AbonnementDieptekavelsWijzigingService;
}(_core__WEBPACK_IMPORTED_MODULE_5__["BaseService"]));



/***/ }),

/***/ "ZUT2":
/*!************************************************************************!*\
  !*** ./ClientApp/app/componenten/file-upload/file-upload.component.ts ***!
  \************************************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent() {
        this.multiple = false;
        this.fileChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.files = [];
    }
    FileUploadComponent.prototype.ngOnInit = function () {
        if (!this.name)
            throw new Error("name is a required setting for file-upload");
    };
    FileUploadComponent.prototype.filesChanged = function ($event) {
        if (this.fileChange.observers.length > 0) {
            this.files = $event.target.files;
            this.fileChange.emit({
                name: this.name,
                files: this.files
            });
        }
    };
    FileUploadComponent.propDecorators = {
        fileTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], { static: false },] }],
        multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        fileChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    FileUploadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "file-upload",
            template: "\n            <input [attr.id]=\"name\" [attr.name]=\"name\" type=\"file\" [attr.multiple]=\"multiple ? 'multiple' : null\" class=\"inputfile\" (change)=\"filesChanged($event)\" />\n            <label [attr.for]=\"name\">\n                <ng-template [ngTemplateOutlet]=\"fileTemplate\" [ngTemplateOutletContext]=\"{ files: files }\">\n                </ng-template>\n            </label>\n            ",
            styles: ["\n        .inputfile {\n\t        width: 0.1px;\n\t        height: 0.1px;\n\t        opacity: 0;\n\t        overflow: hidden;\n\t        position: absolute;\n\t        z-index: -1;\n        }\n\n        .inputfile + label {\n\t        cursor: pointer;\n            display: block;\n            margin-bottom: 0;\n            font-weight: normal;\n        }\n    "]
        })
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "bUer":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/abonnement/html/klant.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <mafo-panel selector=\"klant\" [collapsable]=\"true\" [open]=\"true\">\r\n            <mafo-panel-heading>\r\n                <h5>\r\n                    KLANT\r\n                </h5>\r\n            </mafo-panel-heading>\r\n            <mafo-panel-actions>\r\n                <span class=\"badge pull-right\" style=\"margin: 2px;\">{{data.klant.ondernemingsnr | stringformat : 'xxxx.xxx.xxx'}}</span>\r\n            </mafo-panel-actions>\r\n            <mafo-panel-body>\r\n                <div class=\"row pointercursor\" routerLink=\"/klant/{{data.klant.id}}\">\r\n                    <div class=\"col-md-3\">\r\n                        {{data.klant.ondernemingsnr | stringformat : 'xxxx.xxx.xxx'}}\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <strong>{{data.klant.firmanaam}}</strong>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <strong>{{data.klant.contactpersoon.voornaam}} {{data.klant.contactpersoon.naam}}</strong>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <i class=\"fa fa-phone-square\"></i>\r\n                        &nbsp;&nbsp;\r\n                        <span class=\"marked-text\">{{data.klant.contactpersoon.telefoon}}</span>\r\n                    </div>\r\n                    <div class=\"col-md-1\">\r\n                        <i class=\"fa fa-angle-right pull-right\"></i>\r\n                    </div>\r\n                </div>\r\n            </mafo-panel-body>\r\n        </mafo-panel>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "dgvW":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/abonnement/html/elektriciteit-historiek.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <mafo-panel selector=\"elektriciteithistoriek\" [collapsable]=\"true\" [open]=\"true\">\r\n            <mafo-panel-heading>\r\n                <h5>\r\n                    ELEKTRICITEIT HISTORIEK\r\n                </h5>\r\n            </mafo-panel-heading>\r\n            <mafo-panel-body>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12\">\r\n                        <dp-datagrid [data]=\"historiekElektriciteit\" [options]=\"gridOptions\" (fetchData)=\"fetchData($event)\">\r\n                        </dp-datagrid>\r\n                    </div>\r\n                </div>\r\n            </mafo-panel-body>\r\n        </mafo-panel>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "h6vv":
/*!********************************************************!*\
  !*** ./ClientApp/app/abonnement/abonnement.resolve.ts ***!
  \********************************************************/
/*! exports provided: AbonnementResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbonnementResolve", function() { return AbonnementResolve; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "mZsw");



var AbonnementResolve = /** @class */ (function () {
    function AbonnementResolve(abonnementService) {
        this.abonnementService = abonnementService;
    }
    AbonnementResolve.prototype.resolve = function (route) {
        return this.abonnementService.get(route.params['id']);
    };
    AbonnementResolve.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_2__["AbonnementService"] }
    ]; };
    AbonnementResolve = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AbonnementService"]])
    ], AbonnementResolve);
    return AbonnementResolve;
}());



/***/ }),

/***/ "ijnu":
/*!******************************************************************************!*\
  !*** ./ClientApp/app/services/abonnement-elektriciteit-wijziging.service.ts ***!
  \******************************************************************************/
/*! exports provided: AbonnementElektriciteitWijzigingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbonnementElektriciteitWijzigingService", function() { return AbonnementElektriciteitWijzigingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.settings */ "HRaI");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-slim-loading-bar */ "k+RO");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core */ "BxFb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");







var AbonnementElektriciteitWijzigingService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AbonnementElektriciteitWijzigingService, _super);
    function AbonnementElektriciteitWijzigingService(_http, loader) {
        var _this = _super.call(this, _http, loader) || this;
        _this._http = _http;
        _this.loader = loader;
        _this.urlBase = _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "subscriptions/";
        return _this;
    }
    AbonnementElektriciteitWijzigingService.prototype.getAll = function (abonnementId, query) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]();
        if (query) {
            params = params.set("page", query.page.toString());
            params = params.set("pageSize", query.pageSize.toString());
            if (query.sort && query.sort.length > 0)
                params = params.set("sort", query.sort.join(","));
        }
        this.loader.start();
        return this._http.get(this.urlBase + abonnementId + "/electricitychanges", { headers: this.jsonHeaders, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }));
    };
    AbonnementElektriciteitWijzigingService.prototype.addAbonnementElektriciteitWijziging = function (abonnementElektriciteitWijziging) {
        var _this = this;
        this.loader.start();
        return this._http.post(this.urlBase + abonnementElektriciteitWijziging.abonnementId + '/electricitychanges', abonnementElektriciteitWijziging, { headers: this.jsonHeaders, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }));
    };
    AbonnementElektriciteitWijzigingService.prototype.updateAbonnementElektriciteitWijziging = function (abonnementElektriciteitWijziging) {
        var _this = this;
        this.loader.start();
        return this._http.put(this.urlBase + abonnementElektriciteitWijziging.abonnementId + '/electricitychanges', abonnementElektriciteitWijziging, { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    AbonnementElektriciteitWijzigingService.prototype.deleteAbonnementElektriciteitWijziging = function (abonnementElektriciteitWijziging) {
        var _this = this;
        this.loader.start();
        return this._http.delete(this.urlBase + abonnementElektriciteitWijziging.abonnementId + '/electricitychanges', { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    AbonnementElektriciteitWijzigingService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__["SlimLoadingBarService"] }
    ]; };
    AbonnementElektriciteitWijzigingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__["SlimLoadingBarService"]])
    ], AbonnementElektriciteitWijzigingService);
    return AbonnementElektriciteitWijzigingService;
}(_core__WEBPACK_IMPORTED_MODULE_5__["BaseService"]));



/***/ }),

/***/ "jGmu":
/*!*************************************************************!*\
  !*** ./ClientApp/app/abonnement/elektriciteit.component.ts ***!
  \*************************************************************/
/*! exports provided: ElektriciteitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElektriciteitComponent", function() { return ElektriciteitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_elektriciteit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/elektriciteit.component.html */ "ts8k");
/* harmony import */ var _raw_loader_html_elektriciteit_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_elektriciteit_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shared_helper_datetimehelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/helper/datetimehelper */ "CS9P");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services */ "mZsw");
/* harmony import */ var _services_abonnement_elektriciteit_wijziging_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/abonnement-elektriciteit-wijziging.service */ "ijnu");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth */ "qec8");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _componenten_validators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../componenten/validators */ "2/Vv");











var ElektriciteitComponent = /** @class */ (function () {
    function ElektriciteitComponent(datetimeHelper, fb, abonnementService, abonnementElektriciteitWijzigingService, auth, toastr, router) {
        this.datetimeHelper = datetimeHelper;
        this.fb = fb;
        this.abonnementService = abonnementService;
        this.abonnementElektriciteitWijzigingService = abonnementElektriciteitWijzigingService;
        this.auth = auth;
        this.toastr = toastr;
        this.router = router;
        this.elekAboGewijzigdCode = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.edit = false;
        this.disabled = false;
    }
    ElektriciteitComponent.prototype.editElektriciteit = function () {
        this.edit = !this.edit;
        if (this.edit) {
            this.elektriciteitForm.get('elektriciteitCode').reset();
            this.elektriciteitForm.get('begindatum').clearValidators();
            this.elektriciteitForm.get('begindatum').setValue("");
            this.elektriciteitForm.get('einddatum').clearValidators();
            this.elektriciteitForm.get('einddatum').setValue("");
        }
    };
    ElektriciteitComponent.prototype.saveAbonnementElektriciteitWijziging = function () {
        var _this = this;
        if (this.validate()) {
            this.abonnementElektriciteitWijzigingService.addAbonnementElektriciteitWijziging(this.elektriciteitForm.value)
                .subscribe(function (x) {
                _this.data.elektriciteit.code = _this.code;
                _this.elekAboGewijzigdCode.emit(_this.code);
                if (isNaN(_this.elektriciteitForm.get('einddatum').value)) { //if Invalid Date
                    _this.data.elektriciteitEindDatum = undefined;
                }
                else {
                    _this.data.elektriciteitEindDatum = _this.elektriciteitForm.get('einddatum').value;
                }
                _this.data.elektriciteitBeginDatum = _this.elektriciteitForm.get('begindatum').value;
                _this.toastr.success("De elektriciteitsbehoefte is succesvol aangepast.");
                _this.editElektriciteit();
                _this.router.navigate(["abonnement", _this.data.id]);
            }, function (x) {
                if (x.ExtraInfo) {
                    for (var xtra in x.ExtraInfo) {
                        _this.toastr.error(xtra, x.ExtraInfo[xtra].join(","));
                    }
                }
                else {
                    _this.toastr.error("De elektriciteitsbehoefte is niet aangepast.");
                }
            });
        }
    };
    ElektriciteitComponent.prototype.validate = function () {
        var _this = this;
        var valid = true;
        if (this.data.elektriciteit.code == this.elektriciteitForm.get('elektriciteitCode').value) {
            this.toastr.info("De elektriciteitsbehoefte is ongewijzigd.");
            valid = false;
        }
        if (new Date(this.elektriciteitForm.get('einddatum').value) < new Date(this.elektriciteitForm.get('begindatum').value)) {
            this.toastr.warning("Einddatum mag niet voor de begindatum liggen.");
            valid = false;
        }
        if (new Date(this.elektriciteitForm.get('begindatum').value) < this.datetimeHelper.getFirstDayOfQuarter(new Date()).addQuarter()) {
            this.toastr.warning("Begindatum mag niet voor de instapdatum van het volgende kwartaal liggen.");
            valid = false;
        }
        //Controleer of dit één van de mogelijke begindatums is
        if (typeof (this.mogelijkeStartData.find(function (x) { return x.getTime() == new Date(_this.elektriciteitForm.get('begindatum').value).getTime(); })) === 'undefined') {
            this.toastr.warning("Begindatum valt niet op het begin van een kwartaal.");
            valid = false;
        }
        //Als de einddatum een geldige datum bevat, controleer of dit één van de mogelijke einddatums is.
        if ((!isNaN(this.elektriciteitForm.get('einddatum').value)) && (typeof (this.mogelijkeEindData.find(function (x) { return x.getTime() == new Date(_this.elektriciteitForm.get('einddatum').value).getTime(); })) === 'undefined')) {
            this.toastr.warning("Einddatum valt niet op het einde van een kwartaal.");
            valid = false;
        }
        return valid;
    };
    ElektriciteitComponent.prototype.ngOnInit = function () {
        this.mogelijkeStartData = new Array();
        new Date().startDates(5).forEach(function (item) {
            this.mogelijkeStartData.push(item);
        }, this);
        this.mogelijkeEindData = new Array();
        new Date().endDates(5).forEach(function (item) {
            this.mogelijkeEindData.push(item);
        }, this);
        this.buildForm();
        this.security();
    };
    ElektriciteitComponent.prototype.buildForm = function () {
        this.elektriciteitForm = this.fb.group({
            'begindatum': [this.data.elektriciteitBeginDatum, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            'einddatum': [this.data.elektriciteitEindDatum, []],
            'elektriciteitCode': [this.data.elektriciteit.code],
            'abonnementId': [this.data.id]
        }, { validator: _componenten_validators__WEBPACK_IMPORTED_MODULE_10__["CustomValidators"].dateAfter("einddatum", "begindatum") });
    };
    ElektriciteitComponent.prototype.changeElektriciteitsBehoefte = function ($event) {
        if ($event != null && $event != "") {
            this.code = $event;
        }
        this.elektriciteitForm.get("begindatum").enable();
        this.elektriciteitForm.get("einddatum").enable();
        if (this.code == 'WINTERABONNEMENTGEWONEAANSLUITING') {
            this.elektriciteitForm.get('einddatum').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
            this.elektriciteitForm.get('begindatum').setValue(this.datetimeHelper.nextWinterStartDate());
            this.elektriciteitForm.get('einddatum').setValue(this.datetimeHelper.nextWinterEndDate());
        }
        else {
            this.elektriciteitForm.get('begindatum').setValue(this.datetimeHelper.getFirstDayOfQuarter(new Date()).addQuarter());
            this.elektriciteitForm.get('einddatum').clearValidators();
            this.elektriciteitForm.get('einddatum').setValue("clear");
            if (this.code == 'GEENBEHOEFTE') {
                this.elektriciteitForm.get('begindatum').clearValidators();
                this.elektriciteitForm.get('begindatum').setValue(this.datetimeHelper.getFirstDayOfQuarter(new Date()).addQuarter());
                ;
                this.elektriciteitForm.get('einddatum').setValue("clear");
                this.elektriciteitForm.get("einddatum").disable();
            }
        }
    };
    ElektriciteitComponent.prototype.security = function () {
        this.updateAbonnement = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_7__["Privilege"].Abonnement.Update);
    };
    ElektriciteitComponent.ctorParameters = function () { return [
        { type: _shared_helper_datetimehelper__WEBPACK_IMPORTED_MODULE_4__["DateTimeHelper"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["AbonnementService"] },
        { type: _services_abonnement_elektriciteit_wijziging_service__WEBPACK_IMPORTED_MODULE_6__["AbonnementElektriciteitWijzigingService"] },
        { type: _auth__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
    ]; };
    ElektriciteitComponent.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        elekAboGewijzigdCode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    ElektriciteitComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            providers: [_shared_helper_datetimehelper__WEBPACK_IMPORTED_MODULE_4__["DateTimeHelper"], _services__WEBPACK_IMPORTED_MODULE_5__["AbonnementService"], _services_abonnement_elektriciteit_wijziging_service__WEBPACK_IMPORTED_MODULE_6__["AbonnementElektriciteitWijzigingService"]],
            selector: "mafo-elektriciteit",
            template: _raw_loader_html_elektriciteit_component_html__WEBPACK_IMPORTED_MODULE_1___default.a
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_helper_datetimehelper__WEBPACK_IMPORTED_MODULE_4__["DateTimeHelper"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services__WEBPACK_IMPORTED_MODULE_5__["AbonnementService"],
            _services_abonnement_elektriciteit_wijziging_service__WEBPACK_IMPORTED_MODULE_6__["AbonnementElektriciteitWijzigingService"],
            _auth__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], ElektriciteitComponent);
    return ElektriciteitComponent;
}());



/***/ }),

/***/ "l8x7":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/abonnement/html/standplaats.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" [formGroup]=\"standplaatsForm\" [hidden]=\"kavelConfirmDisplayed\">\r\n    <div class=\"col-xs-12 \">\r\n        <mafo-panel selector=\"standplaats\" [collapsable]=\"true\" [open]=\"true\">\r\n            <mafo-panel-heading>\r\n                <h5>\r\n                    STANDPLAATS\r\n                </h5>\r\n            </mafo-panel-heading>\r\n            <mafo-panel-actions>\r\n                <span class=\"badge pull-right\" style=\"margin: 2px;\">{{data.markt.naam}}</span>\r\n            </mafo-panel-actions>\r\n            <mafo-panel-body>\r\n                <div class=\"row\" [hidden]=\"kavelConfirmDisplayed\">\r\n                    <form-group>\r\n                        <label class=\"col-sm-6 col-md-3 control-label\"><strong>Markt</strong></label>\r\n                        <div class=\"col-sm-6 col-md-3\">\r\n                            <p class=\"form-control-static\">{{data.markt.naam}}</p>\r\n                        </div>\r\n                    </form-group>\r\n                    <form-group>\r\n                        <label class=\"col-sm-6 col-md-3 control-label\"><strong>Aantal kavels</strong></label>\r\n                        <div class=\"col-sm-6 col-md-3\">\r\n                            <p class=\"form-control-static\">{{data.aantalKavels}}&nbsp;kavels</p>\r\n                        </div>\r\n                    </form-group>\r\n                </div>\r\n                <hr style=\"margin: 5px;\" />\r\n                <div class=\"row\" [hidden]=\"kavelConfirmDisplayed\">\r\n                    <form-group>\r\n                        <label class=\"col-sm-6 col-md-3 control-label\"><strong>Begindatum</strong></label>\r\n                        <div class=\"col-sm-6 col-md-3\">\r\n                            <p class=\"form-control-static\" *ngIf=\"!edit\">{{data.beginDatum | date: 'dd/MM/yyyy' | nullSafe}}</p>\r\n                            <datepicker formControlName=\"begindatum\" *ngIf=\"edit\"></datepicker>\r\n                            <help-block type=\"required\">Begindatum is verplicht</help-block>\r\n                        </div>\r\n                    </form-group>\r\n                    <form-group>\r\n                        <label class=\"col-sm-6 col-md-3 control-label\"><strong>Einddatum</strong></label>\r\n                        <div class=\"col-sm-6 col-md-3\">\r\n                            <p class=\"form-control-static\" *ngIf=\"!edit\">{{data.eindDatum | date: 'dd/MM/yyyy' | nullSafe}}</p>\r\n                            <datepicker formControlName=\"einddatum\" *ngIf=\"edit\"></datepicker>\r\n                        </div>\r\n                    </form-group>\r\n                </div>\r\n                <hr style=\"margin: 5px;\" />\r\n                <div class=\"row\" [hidden]=\"kavelConfirmDisplayed\">\r\n                    <form-group>\r\n                        <label class=\"col-sm-6 col-md-3 control-label\"><strong>Soort uitstalling</strong></label>\r\n                        <div class=\"col-sm-6 col-md-3\">\r\n                            <p class=\"form-control-static\" *ngIf=\"!edit\">\r\n                                <code-display type=\"Uitstalling\" [value]=\"data.uitstalling.code\"></code-display>\r\n                            </p>\r\n                            <code-select type=\"Uitstalling\" formControlName=\"uitstallingCode\" *ngIf=\"edit\"></code-select>\r\n                        </div>\r\n                    </form-group>\r\n                    <form-group>\r\n                        <label class=\"col-sm-6 col-md-3 control-label\"><strong>Verkoop</strong></label>\r\n                        <div class=\"col-sm-6 col-md-3\">\r\n                            <p class=\"form-control-static\" *ngIf=\"!edit\">\r\n                                <code-display type=\"Verkoop\" [value]=\"data.verkoop.code\"></code-display>\r\n                            </p>\r\n                            <code-select type=\"Verkoop\" formControlName=\"verkoopCode\" *ngIf=\"edit\"></code-select>\r\n                        </div>\r\n                    </form-group>\r\n                </div>\r\n                <hr style=\"margin-top: 5px;\" />\r\n                <div class=\"row\" [hidden]=\"kavelConfirmDisplayed\">\r\n                    <div class=\"col-md-12\">\r\n                        <product-panel id=\"producten-section\" [formGroup]=\"standplaatsForm\" [data]=\"data.producten\" [edit]=\"edit\" [open]=\"true\"></product-panel>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" [hidden]=\"kavelConfirmDisplayed\">\r\n                    <div class=\"col-md-12\">\r\n                        <mafo-panel id=\"kavels-section\" selector=\"kavels\" [collapsable]=\"true\" [open]=\"true\">\r\n                            <mafo-panel-heading>\r\n                                <h5>\r\n                                    Kavels\r\n                                </h5>\r\n                            </mafo-panel-heading>\r\n                            <mafo-panel-body>\r\n                                <div class=\"row\" *ngIf=\"kavels && !lessKavels\" [hidden]=\"kavelConfirmDisplayed\">\r\n                                    <div class=\"col-xs-12\" (mousedown)=\"mousedown($event)\">\r\n                                        <ng-container *ngFor=\"let kavel of kavels\">\r\n                                            <a *ngIf=\"!kavel.hidden\" class=\"kavel-detail\" [attr.data-id]=\"kavel.id\">\r\n                                                <span class=\"badge large\" [ngClass]=\"setKavelColor(kavel)\">{{kavel.oudeNaam}}</span>\r\n                                            </a>\r\n                                        </ng-container>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\" *ngIf=\"edit && !lessKavels && (data.abonnementStatus.code === 'LOPEND' || data.abonnementStatus.code === 'OPGESCHORT')\" [hidden]=\"kavelConfirmDisplayed\">\r\n                                    <div class=\"col-xs-12\">\r\n                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"lessKavels =!lessKavels\" *ngIf=\"!allBezetTeBedelenKavels\">\r\n                                            <i class=\"fa fa-pencil\"></i> Aantal kavels verminderen\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-default\" (click)=\"cancelScaleDown()\" *ngIf=\"bezetTeBedelenKavels\">\r\n                                            <i class=\"fa fa-ban\"></i> Inkrimping annuleren\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\" *ngIf=\"edit && lessKavels\">\r\n                                    <div class=\"col-xs-12\">\r\n                                        \r\n                                        <div>\r\n                                            <ng-container *ngFor=\"let kavel of kavels\">\r\n                                                <a *ngIf=\"!kavel.hidden\" class=\"kavel-detail\" [attr.data-id]=\"kavel.id\" (click)=\"selectKavel($event, kavel)\">\r\n                                                    <span class=\"badge large\">{{kavel.oudeNaam}}</span>\r\n                                                </a>\r\n                                            </ng-container>\r\n                                            <p>Kies de kavels om te verwijderen van dit abonnement</p>\r\n                                        </div>\r\n                                        <div class=\"col-sm-6 col-md-3\">\r\n                                            <b>Startdatum:</b>\r\n                                            <datepicker [startDate]=\"eerstVolgendeKwartaalDatum\" formControlName=\"kavelDatum\" [dates]=\"mogelijkeData\"></datepicker>\r\n                                            <help-block type=\"required\">Startdatum is verplicht</help-block>\r\n                                        </div>\r\n                                        <div class=\"col-sm-6 col-md-12\">\r\n                                            <button type=\"button\" class=\"btn btn-warning\" (click)=\"lessKavels = !lessKavels; selectedKavelsLeegmaken()\">\r\n                                                <i class=\"fa fa-times\"></i> Annuleer\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </mafo-panel-body>\r\n                        </mafo-panel>\r\n                    </div>\r\n                </div>\r\n            </mafo-panel-body>\r\n            <mafo-panel-footer>\r\n                <div class=\"pull-right\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"OpenPanelsStandplaats(); edit = true\" *ngIf=\"!edit\">\r\n                        <i class=\"fa fa-pencil\"></i> Info standplaats wijzigen\r\n                    </button>\r\n                    <div *ngIf=\"edit && canUpdate | async\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"bewaren()\">Bewaren</button>\r\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"edit=!edit; lessKavels=false\">Annuleren</button>\r\n                    </div>\r\n                </div>\r\n            </mafo-panel-footer>\r\n        </mafo-panel>\r\n    </div>\r\n</div>\r\n<div id=\"kavel-detail-wrapper\" class=\"body-content right-slider\" [ngClass]=\"{'slide' : detailDisplayed }\">\r\n    <div class=\"row\" [hidden]=\"kavelConfirmDisplayed\">\r\n        <div class=\"col-xs-12\">\r\n            <button class=\"btn btn-primary\" (click)=\"hideDetail()\">\r\n                <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <br />\r\n            <br />\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"kavel\">\r\n        <div class=\"row\" [hidden]=\"kavelConfirmDisplayed\">\r\n            <div class=\"col-xs-12\">\r\n                <mafo-panel selector=\"kavel\" [collapsable]=\"false\" [open]=\"true\">\r\n                    <mafo-panel-heading>\r\n                        <h5>\r\n                            Kavel details\r\n                        </h5>\r\n                    </mafo-panel-heading>\r\n                    <mafo-panel-body>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Kavelnummer</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.oudeNaam}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Kavelstatus</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{toDisplayFormat(kavel.kavelStatus)}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Dieptekavel mogelijk</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.mogelijkheidDieptekavel ? \"Ja\" : \"Nee\"}}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </mafo-panel-body>\r\n                </mafo-panel>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"kavel && kavel.abonnement\" [hidden]=\"kavelConfirmDisplayed\">\r\n            <div class=\"col-xs-12\">\r\n                <mafo-panel selector=\"abonnement\" [collapsable]=\"true\" [open]=\"true\">\r\n                    <mafo-panel-heading>\r\n                        <h5>\r\n                            Abonnement\r\n                        </h5>\r\n                    </mafo-panel-heading>\r\n                    <mafo-panel-body>\r\n                        <div class=\"row\" [hidden]=\"kavelConfirmDisplayed\">\r\n                            <div class=\"col-xs-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Firmanaam</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.abonnement.firmaNaam}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">GSM</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.abonnement.telefoon | nullSafe}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Hoofd contactpersoon</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.abonnement.contactPersoon}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Begindatum</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.abonnement.beginDatum | date: 'dd/MM/yyyy' | nullSafe }}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Einddatum</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{ kavel.abonnement.eindDatum | date: 'dd/MM/yyyy' | nullSafe}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Status</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.abonnement.status | nullSafe}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Soort uitstalling</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.abonnement.uitstalling| nullSafe}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Verkoop</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.abonnement.verkoop| nullSafe}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Elektriciteit</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.abonnement.elektriciteit| nullSafe}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Kavels</label><br />\r\n                                    <ng-container *ngFor=\"let kavel of kavel.abonnement.abonnementKavels\">\r\n                                        <a *ngIf=\"!kavel.hidden\" class=\"kavel-detail\" [attr.data-id]=\"kavel.id\">\r\n                                            <span class=\"badge large\" [ngClass]=\"setKavelColor(kavel)\">{{kavel.oudeNaam}}</span>\r\n                                        </a>\r\n                                    </ng-container>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </mafo-panel-body>\r\n                </mafo-panel>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"kavel && kavel.abonnement\" [hidden]=\"kavelConfirmDisplayed\">\r\n            <div class=\"col-xs-12\">\r\n                <mafo-panel selector=\"producten\" [collapsable]=\"true\" [open]=\"true\">\r\n                    <mafo-panel-heading>\r\n                        <h5>\r\n                            Producten\r\n                        </h5>\r\n                    </mafo-panel-heading>\r\n                    <mafo-panel-body>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12\">\r\n                                <div class=\"list-group\">\r\n                                    <div class=\"list-group-item\" *ngFor=\"let product of kavel.abonnement.producten\">\r\n                                        <h4 class=\"list-group-item-heading\">{{product.omschrijving}}</h4>\r\n                                        <p class=\"list-group-item-text\">{{product.detail}}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </mafo-panel-body>\r\n                </mafo-panel>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" [hidden]=\"kavelConfirmDisplayed\">\r\n            <div class=\"col-xs-12\">\r\n                <mafo-panel selector=\"opmerkingen\" [collapsable]=\"true\" [open]=\"true\">\r\n                    <mafo-panel-heading>\r\n                        <h5>\r\n                            Opmerkingen\r\n                        </h5>\r\n                    </mafo-panel-heading>\r\n                    <mafo-panel-body>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12\">\r\n                                <div class=\"list-group\">\r\n                                    <div class=\"list-group-item\" *ngFor=\"let kavelOpmerking of kavel.opmerkingen\">\r\n                                        <span class=\"KavelOpmerking\">{{ (kavelOpmerking.createdOn | date: 'dd/MM/yyyy') || ( currentDate | date: 'dd/MM/yyyy' ) }}</span>\r\n                                        <p class=\"list-group-item-text\">{{kavelOpmerking.opmerking}}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12\">\r\n                                <div class=\"form-group\">\r\n                                    <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"opmerking\"></textarea>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" [hidden]=\"kavelConfirmDisplayed\">\r\n                            <div class=\"col-xs-12\">\r\n                                <div class=\"pull-right\">\r\n                                    <button class=\"btn btn-primary\" type=\"button\" (click)=\"updateKavelOpmerking($event)\">Opmerking toevoegen</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </mafo-panel-body>\r\n                </mafo-panel>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "mGNO":
/*!***********************************************************!*\
  !*** ./ClientApp/app/abonnement/standplaats.component.ts ***!
  \***********************************************************/
/*! exports provided: StandplaatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandplaatsComponent", function() { return StandplaatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_standplaats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/standplaats.component.html */ "l8x7");
/* harmony import */ var _raw_loader_html_standplaats_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_standplaats_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _html_standplaats_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html/standplaats.component.css */ "+J2K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-modialog/plugins/bootstrap */ "e7Ax");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth */ "qec8");
/* harmony import */ var _componenten_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componenten/validators */ "2/Vv");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services */ "mZsw");










var StandplaatsComponent = /** @class */ (function () {
    function StandplaatsComponent(fb, modal, productService, kavelService, toastr, abonnementSvc, validatorSvc, auth) {
        this.fb = fb;
        this.modal = modal;
        this.productService = productService;
        this.kavelService = kavelService;
        this.toastr = toastr;
        this.abonnementSvc = abonnementSvc;
        this.validatorSvc = validatorSvc;
        this.auth = auth;
        this.edit = false;
        this.lessKavels = false;
        this.bezetTeBedelenKavels = false;
        this.allBezetTeBedelenKavels = false;
        this.kavelConfirmDisplayed = false;
        this.detailDisplayed = false;
        this.eerstVolgendeKwartaalDatum = new Date().eerstVolgendeKwartaalEindDatum(true);
        this.kavelStatusEnum = _services__WEBPACK_IMPORTED_MODULE_9__["KavelStatusEnum"];
        this.currentDate = new Date();
    }
    StandplaatsComponent.prototype.ngOnInit = function () {
        this.getKavels();
        this.buildForm();
        this.security();
        this.mogelijkeData = new Array();
        this.selectedKavels = new Array();
        this.enableControl('kavelDatum', new Date().eerstVolgendeKwartaalEindDatum(true));
        this.disableDates();
    };
    StandplaatsComponent.prototype.buildForm = function () {
        this.standplaatsForm = this.fb.group({
            begindatum: [this.data.beginDatum, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            einddatum: [this.data.eindDatum],
            uitstallingCode: [this.data.uitstalling.code, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            verkoopCode: [this.data.verkoop.code, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            producten: this.fb.array([]),
            kavelDatum: new Date().eerstVolgendeKwartaalEindDatum(true),
        });
    };
    StandplaatsComponent.prototype.bewaren = function () {
        var _this = this;
        var status = this.data.abonnementStatus;
        if (this.standplaatsForm
            .get('producten')
            .value.some(function (x) { return x.isHoofdcategorie; })) {
            if (status.code == 'LOPEND' || status.code == 'OPGESCHORT') {
                var returnValue = this.standplaatsForm.value;
                returnValue.selectedKavels = this.selectedKavels;
                var ctrl = this.standplaatsForm.get('kavelDatum');
                var kavelDatum = new Date(ctrl.value);
                var offset = kavelDatum.getTimezoneOffset() * 60000;
                var localISOTime = new Date(ctrl.value - offset)
                    .toISOString()
                    .slice(0, -1);
                returnValue.kavelDatum = localISOTime;
                if (kavelDatum < new Date().addDays(30)) {
                    this.modal
                        .confirm()
                        .title('Kavel datum')
                        .message('De door u gekozen startdatum ligt op minder dan 30 kalenderdagen van vandaag. Wenst u hiermee verder te gaan?')
                        .cancelBtn('Annuleren')
                        .okBtn('Bevestig')
                        .open()
                        .result.catch() // catch error not related to the result (modal open...)
                        .then(function (dialog) { return dialog.result; }) // dialog has more properties,lets just return the promise for a result.
                        .then(function (x) {
                        if (!_this.standplaatsForm.valid) {
                            _this.validatorSvc.valideFormGroup(_this.standplaatsForm);
                            return;
                        }
                        _this.abonnementSvc.post(_this.data.id, returnValue).subscribe(function (x) {
                            var value = _this.standplaatsForm.value;
                            _this.data.begindatum = value.begindatum;
                            _this.data.einddatum = value.einddatum;
                            _this.data.uitstalling.code = value.uitstallingCode;
                            _this.data.verkoop.code = value.verkoopCode;
                            _this.data.producten = value.producten;
                            _this.getKavels();
                            _this.toastr.success('Standplaats bewaard.', 'Standplaats');
                            _this.edit = false;
                        }, function (x) {
                            _this.toastr.error('Kon standplaats niet bewaren.', 'Standplaats');
                            if (x.ExtraInfo) {
                                for (var xtra in x.ExtraInfo) {
                                    _this.toastr.warning(xtra, x.ExtraInfo[xtra].join(','));
                                }
                            }
                        });
                    }) // if were here ok was clicked.
                        .catch(function (x) { }); // if were here cancel was clicked.
                }
                else {
                    if (!this.standplaatsForm.valid) {
                        this.validatorSvc.valideFormGroup(this.standplaatsForm);
                        return;
                    }
                    this.abonnementSvc.post(this.data.id, returnValue).subscribe(function (x) {
                        var value = _this.standplaatsForm.value;
                        _this.data.begindatum = value.begindatum;
                        _this.data.einddatum = value.einddatum;
                        _this.data.uitstalling.code = value.uitstallingCode;
                        _this.data.verkoop.code = value.verkoopCode;
                        _this.data.producten = value.producten;
                        _this.getKavels();
                        _this.toastr.success('Standplaats bewaard.', 'Standplaats');
                        _this.edit = false;
                        _this.lessKavels = false;
                    }, function (x) {
                        _this.toastr.error('Kon standplaats niet bewaren.', 'Standplaats');
                        if (x.ExtraInfo) {
                            for (var xtra in x.ExtraInfo) {
                                _this.toastr.warning(xtra, x.ExtraInfo[xtra].join(','));
                            }
                        }
                    });
                }
            }
            else {
                this.toastr.error('Deze actie is niet mogelijk op een abonnement met status ' +
                    status.omschrijving, 'Kavels verminderen');
            }
        }
        else {
            this.toastr.error('Er is geen hoofdproduct aangeduid', 'Producten');
        }
    };
    StandplaatsComponent.prototype.updateKavelOpmerking = function ($event) {
        var _this = this;
        $event.preventDefault();
        $event.stopImmediatePropagation();
        this.kavelOpmerking = {
            kavelId: this.kavel.kavelId,
            marktId: this.kavel.marktId,
            opmerking: this.opmerking,
        };
        if (this.kavel.opmerkingen == undefined) {
            this.kavel.opmerkingen = [];
        }
        this.kavel.opmerkingen.push(this.kavelOpmerking);
        this.kavelService.save(this.kavel).subscribe(function (x) {
            _this.opmerking = '';
            _this.toastr.success('opmerking succesvol opgeslagen.');
        }, function (x) {
            _this.toastr.error('opmerking kon niet worden bewaard.');
            _this.kavel.opmerkingen.pop();
        });
    };
    StandplaatsComponent.prototype.selectedKavelsLeegmaken = function () {
        this.selectedKavels = [];
    };
    StandplaatsComponent.prototype.security = function () {
        this.canUpdate = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_7__["Privilege"].Abonnement.Update);
    };
    StandplaatsComponent.prototype.getKavels = function () {
        var _this = this;
        this.kavelService
            .getAllKavelsForAbonnement(this.data.markt.Id, this.data.id)
            .subscribe(function (kavels) {
            _this.kavels = kavels;
            _this.checkBezetTeBedelen();
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    StandplaatsComponent.prototype.checkBezetTeBedelen = function () {
        var aantalBezetTeBedelen = 0;
        this.bezetTeBedelenKavels = false;
        this.allBezetTeBedelenKavels = false;
        for (var i = 0; i < this.kavels.length; i++) {
            if (this.kavels[i].kavelStatus === _services__WEBPACK_IMPORTED_MODULE_9__["KavelStatusEnum"].BezetTeBedelen) {
                this.bezetTeBedelenKavels = true;
                aantalBezetTeBedelen++;
            }
        }
        if (aantalBezetTeBedelen === this.kavels.length) {
            this.allBezetTeBedelenKavels = true;
        }
    };
    StandplaatsComponent.prototype.mousedown = function ($event) {
        var _this = this;
        $event.preventDefault();
        $event.stopImmediatePropagation();
        setTimeout(function () {
            var link = $event.target.closest('a');
            if (!link)
                return;
            var kavelId = Number(link.getAttribute('data-id'));
            _this.kavelService
                .getKavelDetail(_this.data.markt.id, kavelId)
                .subscribe(function (x) {
                _this.kavel = x;
                _this.detailDisplayed = true;
            });
        }, 300);
    };
    StandplaatsComponent.prototype.selectKavel = function ($event) {
        $event.preventDefault();
        var link = $event.target.closest('a');
        if (!link)
            return;
        var kavelId = Number(link.getAttribute('data-id'));
        if (this.selectedKavels.indexOf(kavelId) != -1) {
            this.selectedKavels.splice(this.selectedKavels.indexOf(kavelId), 1);
            var span = $event.target.closest('span');
            span.className = 'badge large bg-gray';
        }
        else {
            var span = $event.target.closest('span');
            span.className = 'badge large bg-blue';
            //this.kavels.filter(function (x) { return x.id == kavelId })[0].kavelStatus.code = "SELECTED";
            this.selectedKavels.push(kavelId);
        }
    };
    StandplaatsComponent.prototype.hideDetail = function () {
        this.detailDisplayed = false;
        this.kavelConfirmDisplayed = false;
    };
    StandplaatsComponent.prototype.OpenPanelsStandplaats = function () {
        var linkProducten = document.getElementsByName('producten');
        var panelProducten = document.getElementById('producten');
        if (linkProducten &&
            linkProducten[0] &&
            !panelProducten.classList.contains('in')) {
            linkProducten[0].click();
        }
        var linkKavels = document.getElementsByName('kavels');
        var panelKavels = document.getElementById('kavels');
        if (linkKavels && linkKavels[0] && !panelKavels.classList.contains('in')) {
            linkKavels[0].click();
        }
    };
    StandplaatsComponent.prototype.setKavelColor = function (kavel) {
        return {
            //'bg-blue': kavel.kavelStatus === "SELECTED",
            'bg-green': kavel.kavelStatus === _services__WEBPACK_IMPORTED_MODULE_9__["KavelStatusEnum"].Vrij,
            'bg-red': kavel.kavelStatus === _services__WEBPACK_IMPORTED_MODULE_9__["KavelStatusEnum"].Bezet ||
                kavel.kavelStatus === _services__WEBPACK_IMPORTED_MODULE_9__["KavelStatusEnum"].InOverdracht,
            'bg-orange': kavel.kavelStatus === _services__WEBPACK_IMPORTED_MODULE_9__["KavelStatusEnum"].Gereserveerd,
            'badge-border': kavel.mogelijkheidDieptekavel,
            'bg-orange-striped': kavel.kavelStatus === _services__WEBPACK_IMPORTED_MODULE_9__["KavelStatusEnum"].BezetGereserveerd,
            'bg-green-striped': kavel.kavelStatus === _services__WEBPACK_IMPORTED_MODULE_9__["KavelStatusEnum"].BezetTeBedelen,
        };
    };
    StandplaatsComponent.prototype.cancelScaleDown = function () {
        var _this = this;
        if (this.kavels.some(function (x) {
            return x.kavelStatus.toString().lastIndexOf('BEZET') !== 0 ||
                x.kavelStatus == _services__WEBPACK_IMPORTED_MODULE_9__["KavelStatusEnum"].BezetGereserveerd;
        })) {
            this.modal
                .alert()
                .title('Inkrimping annuleren')
                .message('Deze kavels hebben een andere bestemming gekregen. Het ongedaan maken van deze inkrimping kan niet verdergezet worden.')
                .okBtn('Ok')
                .open()
                .result.catch(); // catch error not related to the result (modal open...)
        }
        else if (this.kavels.every(function (x) {
            return x.kavelStatus == _services__WEBPACK_IMPORTED_MODULE_9__["KavelStatusEnum"].Bezet ||
                x.kavelStatus == _services__WEBPACK_IMPORTED_MODULE_9__["KavelStatusEnum"].BezetTeBedelen;
        })) {
            var returnValue = this.standplaatsForm.value;
            returnValue.selectedKavels = this.kavels.map(function (x) { return x.id; });
            returnValue.inkrimpingAnnulatie = true;
            this.selectedKavels;
            this.modal
                .confirm()
                .title('Inkrimping annuleren')
                .message('Wenst u de gemaakte inkrimping te annuleren? Hierdoor zullen alle kavels terug de status ‘bezet’ bezet krijgen.')
                .cancelBtn('Annuleren')
                .okBtn('Bevestig')
                .open()
                .result.catch() // catch error not related to the result (modal open...)
                .then(function (dialog) { return dialog.result; }) // dialog has more properties,lets just return the promise for a result.
                .then(function (x) {
                _this.abonnementSvc.post(_this.data.id, returnValue).subscribe(function (x) {
                    var value = _this.standplaatsForm.value;
                    _this.data.begindatum = value.begindatum;
                    _this.data.einddatum = value.einddatum;
                    _this.data.uitstalling.code = value.uitstallingCode;
                    _this.data.verkoop.code = value.verkoopCode;
                    _this.data.producten = value.producten;
                    _this.getKavels();
                    _this.toastr.success('Inkrimping geannuleerd.', 'Inkrimpen');
                    _this.lessKavels = false;
                }, function (x) {
                    _this.toastr.error('Kon annulering niet bewaren.', 'Inkrimpen');
                    if (x.ExtraInfo) {
                        for (var xtra in x.ExtraInfo) {
                            _this.toastr.warning(xtra, x.ExtraInfo[xtra].join(','));
                        }
                    }
                });
            }) // if were here ok was clicked.
                .catch(function (x) { }); // if were here cancel was clicked.
        }
    };
    StandplaatsComponent.prototype.toDisplayFormat = function (status) {
        switch (status) {
            case _services__WEBPACK_IMPORTED_MODULE_9__["KavelStatusEnum"].BezetGereserveerd:
                return 'Bezet gereserveerd';
            case _services__WEBPACK_IMPORTED_MODULE_9__["KavelStatusEnum"].BezetTeBedelen:
                return 'Bezet te bedelen';
            case _services__WEBPACK_IMPORTED_MODULE_9__["KavelStatusEnum"].InOverdracht:
                return 'In overdracht';
            default:
                return _services__WEBPACK_IMPORTED_MODULE_9__["KavelStatusEnum"][status];
        }
    };
    StandplaatsComponent.prototype.enableControl = function (name, defaultValue) {
        var ctrl = this.standplaatsForm.get(name);
        if (ctrl) {
            ctrl.enable();
            ctrl.reset();
            ctrl.setValue(defaultValue);
            ctrl.markAsPristine({ onlySelf: true });
        }
    };
    StandplaatsComponent.prototype.disableDates = function () {
        this.mogelijkeData = new Array();
        new Date().endDates(5).forEach(function (item) {
            this.mogelijkeData.push(item);
        }, this);
    };
    StandplaatsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_9__["ProductService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_9__["KavelService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_9__["AbonnementService"] },
        { type: _componenten_validators__WEBPACK_IMPORTED_MODULE_8__["ValidatorService"] },
        { type: _auth__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
    ]; };
    StandplaatsComponent.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    StandplaatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            providers: [_services__WEBPACK_IMPORTED_MODULE_9__["ProductService"]],
            selector: 'mafo-standplaats',
            template: _raw_loader_html_standplaats_component_html__WEBPACK_IMPORTED_MODULE_1___default.a,
            styles: [_html_standplaats_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"],
            _services__WEBPACK_IMPORTED_MODULE_9__["ProductService"],
            _services__WEBPACK_IMPORTED_MODULE_9__["KavelService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _services__WEBPACK_IMPORTED_MODULE_9__["AbonnementService"],
            _componenten_validators__WEBPACK_IMPORTED_MODULE_8__["ValidatorService"],
            _auth__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], StandplaatsComponent);
    return StandplaatsComponent;
}());



/***/ }),

/***/ "mW7B":
/*!********************************************************!*\
  !*** ./ClientApp/app/componenten/file-upload/index.ts ***!
  \********************************************************/
/*! exports provided: FileUploadModule, FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadModule", function() { return FileUploadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _file_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file-upload.component */ "ZUT2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return _file_upload_component__WEBPACK_IMPORTED_MODULE_4__["FileUploadComponent"]; });






var FileUploadModule = /** @class */ (function () {
    function FileUploadModule() {
    }
    FileUploadModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _file_upload_component__WEBPACK_IMPORTED_MODULE_4__["FileUploadComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            exports: [_file_upload_component__WEBPACK_IMPORTED_MODULE_4__["FileUploadComponent"]]
        })
    ], FileUploadModule);
    return FileUploadModule;
}());




/***/ }),

/***/ "qlv2":
/*!************************************************************!*\
  !*** ./ClientApp/app/abonnement/dieptekavels.component.ts ***!
  \************************************************************/
/*! exports provided: DieptekavelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DieptekavelsComponent", function() { return DieptekavelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_dieptekavels_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/dieptekavels.component.html */ "OoeC");
/* harmony import */ var _raw_loader_html_dieptekavels_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_dieptekavels_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core */ "BxFb");
/* harmony import */ var _services_abonnement_dieptekavels_wijziging_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/abonnement-dieptekavels-wijziging.service */ "Uw01");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth */ "qec8");
/* harmony import */ var _componenten_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componenten/validators */ "2/Vv");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "EApP");









var DieptekavelsComponent = /** @class */ (function () {
    function DieptekavelsComponent(fb, abonnementDieptekavelsWijzigingService, toastr, validationService, auth) {
        this.fb = fb;
        this.abonnementDieptekavelsWijzigingService = abonnementDieptekavelsWijzigingService;
        this.toastr = toastr;
        this.validationService = validationService;
        this.auth = auth;
        this.edit = false;
    }
    DieptekavelsComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.security();
    };
    DieptekavelsComponent.prototype.setKavelColor = function (value) {
        return {
            'bg-grey': value === _core__WEBPACK_IMPORTED_MODULE_4__["ApplicationConstants"].DieptekavelStatusNietBeschikbaarCode,
            'bg-green': value === _core__WEBPACK_IMPORTED_MODULE_4__["ApplicationConstants"].DieptekavelStatusNietInGebruikCode,
            'bg-red': value === _core__WEBPACK_IMPORTED_MODULE_4__["ApplicationConstants"].DieptekavelStatusInGebruikCode
        };
    };
    ;
    DieptekavelsComponent.prototype.setKavelTitle = function (value) {
        switch (value) {
            case _core__WEBPACK_IMPORTED_MODULE_4__["ApplicationConstants"].DieptekavelStatusNietInGebruikCode:
                return "Dieptekavel niet in gebruik";
            case _core__WEBPACK_IMPORTED_MODULE_4__["ApplicationConstants"].DieptekavelStatusInGebruikCode:
                return "Dieptekavel in gebruik";
            default:
            case _core__WEBPACK_IMPORTED_MODULE_4__["ApplicationConstants"].DieptekavelStatusNietBeschikbaarCode:
                return "Dieptekavel niet beschikbaar";
        }
    };
    ;
    DieptekavelsComponent.prototype.editDiepteKavelStatus = function (kavel) {
        if (this.edit) {
            if (kavel.diepteKavelStatusCode === _core__WEBPACK_IMPORTED_MODULE_4__["ApplicationConstants"].DieptekavelStatusNietInGebruikCode)
                kavel.diepteKavelStatusCode = _core__WEBPACK_IMPORTED_MODULE_4__["ApplicationConstants"].DieptekavelStatusInGebruikCode;
            else if (kavel.diepteKavelStatusCode === _core__WEBPACK_IMPORTED_MODULE_4__["ApplicationConstants"].DieptekavelStatusInGebruikCode)
                kavel.diepteKavelStatusCode = _core__WEBPACK_IMPORTED_MODULE_4__["ApplicationConstants"].DieptekavelStatusNietInGebruikCode;
        }
    };
    DieptekavelsComponent.prototype.toggleEditDieptekavels = function (kavel) {
        this.edit = !this.edit;
    };
    DieptekavelsComponent.prototype.saveAbonnementDiepteKavelsWijziging = function () {
        var _this = this;
        if (!this.dieptekavelForm.valid) {
            this.validationService.valideFormGroup(this.dieptekavelForm);
            this.toastr.warning("Sommige velden bevatten geen geldige waarden", "Ongeldig formulier");
            return;
        }
        this.abonnementDieptekavelsWijzigingService.addAbonnementDiepteKavelWijziging(this.dieptekavelForm.value)
            .subscribe(function (abonnementDiepteKavelWijziging) {
            _this.dieptekavelForm.patchValue(abonnementDiepteKavelWijziging);
            _this.data.dieptekavelsAanvraagDatum = abonnementDiepteKavelWijziging.dieptekavelsAanvraagDatum;
            _this.data.dieptekavelsDiepte = abonnementDiepteKavelWijziging.dieptekavelsDiepte;
            _this.data.dieptekavelsBeginDatum = abonnementDiepteKavelWijziging.dieptekavelsBeginDatum;
            _this.data.dieptekavelsEindDatum = abonnementDiepteKavelWijziging.dieptekavelsEindDatum;
            _this.data.dieptekavelStatusCode = abonnementDiepteKavelWijziging.dieptekavelStatusCode;
            _this.data.kavels = abonnementDiepteKavelWijziging.kavels;
            _this.toggleEditDieptekavels(_this.data.kavel);
            _this.toastr.success("Dieptekavels bewaard.", "Dieptekavels");
        }, function (x) {
            _this.toastr.error("Kon Dieptekavels niet bewaren.", "Dieptekavels");
            if (x.ExtraInfo) {
                for (var xtra in x.ExtraInfo) {
                    _this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                }
            }
        });
    };
    DieptekavelsComponent.prototype.buildForm = function () {
        //let dieptekavelsDiepte: string = this.data.dieptekavelsDiepte ? this.data.dieptekavelsDiepte : null;
        this.dieptekavelForm = this.fb.group({
            'abonnementId': [this.data.id],
            'dieptekavelsAanvraagDatum': [this.data.dieptekavelsAanvraagDatum, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            'dieptekavelsDiepte': [this.data.dieptekavelsDiepte, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            'dieptekavelsBeginDatum': [this.data.dieptekavelsBeginDatum, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            'dieptekavelsEindDatum': [this.data.dieptekavelsEindDatum],
            'kavels': [this.data.kavels],
            'diepteKavelStatusCode': [this.data.dieptekavelStatusCode]
        });
    };
    DieptekavelsComponent.prototype.security = function () {
        this.updateAbonnement = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_6__["Privilege"].Abonnement.Update);
    };
    DieptekavelsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_abonnement_dieptekavels_wijziging_service__WEBPACK_IMPORTED_MODULE_5__["AbonnementDieptekavelsWijzigingService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
        { type: _componenten_validators__WEBPACK_IMPORTED_MODULE_7__["ValidatorService"] },
        { type: _auth__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
    ]; };
    DieptekavelsComponent.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    DieptekavelsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            providers: [_services_abonnement_dieptekavels_wijziging_service__WEBPACK_IMPORTED_MODULE_5__["AbonnementDieptekavelsWijzigingService"]],
            selector: "mafo-dieptekavels",
            template: _raw_loader_html_dieptekavels_component_html__WEBPACK_IMPORTED_MODULE_1___default.a
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_abonnement_dieptekavels_wijziging_service__WEBPACK_IMPORTED_MODULE_5__["AbonnementDieptekavelsWijzigingService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _componenten_validators__WEBPACK_IMPORTED_MODULE_7__["ValidatorService"],
            _auth__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], DieptekavelsComponent);
    return DieptekavelsComponent;
}());



/***/ }),

/***/ "s9Ge":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/abonnement/html/status.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <mafo-panel selector=\"status\" [collapsable]=\"true\" [open]=\"true\">\r\n            <mafo-panel-heading>\r\n                <h5>STATUS</h5>\r\n            </mafo-panel-heading>\r\n            <mafo-panel-actions>\r\n                <span class=\"badge pull-right text-uppercase\" style=\"margin: 2px;\">\r\n                    <code-display type=\"AbonnementStatus\" [value]=\"data.abonnementStatus.code\"></code-display>\r\n                </span>\r\n            </mafo-panel-actions>\r\n            <mafo-panel-body [formGroup]=\"statusForm\">\r\n                <!--Read-Only-->\r\n                <div class=\"row\" *ngIf=\"!edit\">\r\n                    <label class=\"col-xs-6 col-md-2\">Status</label>\r\n                    <p class=\"col-xs-6 col-md-2\">\r\n                        <code-display id=\"Abonnement-status-value\" type=\"AbonnementStatus\" [value]=\"data.abonnementStatus.code\"></code-display>\r\n                    </p>\r\n                    <label class=\"col-xs-6 col-md-2\">Begindatum status</label>\r\n                    <p class=\"col-xs-6 col-md-2\">\r\n                        {{data.abonnementStatusBeginDatum | date: 'dd/MM/yyyy'}}\r\n                    </p>\r\n                    <label class=\"col-xs-6 col-md-2\">Einddatum status</label>\r\n                    <p class=\"col-xs-6 col-md-2\">\r\n                        {{data.abonnementStatusEindDatum | date: 'dd/MM/yyyy' | nullSafe}}\r\n                    </p>\r\n                </div>\r\n                <ng-container *ngIf=\"edit\">\r\n                    <!--Edit Mode-->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <form-group label=\"Status\">\r\n                                <code-select formControlName=\"status\"\r\n                                             (ngModelChange)=\"configureStatus($event)\"\r\n                                             type=\"AbonnementStatus\"\r\n                                             [onBeforeRender]=\"onBeforeRenderStatus\">\r\n                                </code-select>\r\n                                <help-block type=\"required\">Status is verplicht</help-block>\r\n                            </form-group>\r\n                        </div>\r\n                        <div class=\"col-md-4\" *ngIf=\"status && heeftAard\">\r\n                            <form-group label=\"Aard\">\r\n                                <code-select #aardSelector\r\n                                             formControlName=\"aard\"\r\n                                             (ngModelChange)=\"configureAard($event)\"\r\n                                             type=\"AbonnementStatusWijzigingAard\"\r\n                                             [onBeforeRender]=\"onBeforeRenderAard\">\r\n                                </code-select>\r\n                                <help-block type=\"required\">Aard is verplicht</help-block>\r\n                            </form-group>\r\n                        </div>\r\n                        <div class=\"col-md-4\" *ngIf=\"status && heeftReden\">\r\n                            <form-group label=\"Reden\">\r\n                                <code-select #redenSelector\r\n                                             formControlName=\"reden\"\r\n                                             (ngModelChange)=\"configureReden($event)\"\r\n                                             type=\"AbonnementStatusWijzigingReden\"\r\n                                             [onBeforeRender]=\"onBeforeRenderRedenen\">\r\n                                </code-select>\r\n                                <help-block type=\"required\">Reden is verplicht</help-block>\r\n                            </form-group>\r\n                        </div>\r\n                    </div>\r\n                    <hr *ngIf=\"status\" />\r\n                    <!--GESCHORST-->\r\n                    <div class=\"row\" *ngIf=\"status == 'GESCHORST'\">\r\n                        <div class=\"col-md-6\">\r\n                            <form-group label=\"Begindatum schorsing\">\r\n                                <datepicker formControlName=\"beginDatum\" (ngModelChange)=\"beginDatumChange($event)\"></datepicker>\r\n                                <help-block type=\"required\">Begindatum is verplicht</help-block>\r\n                            </form-group>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <form-group label=\"Einddatum schorsing\">\r\n                                <datepicker formControlName=\"eindDatum\" [startDate]=\"today\"></datepicker>\r\n                                <help-block type=\"required\">EindDatum is verplicht</help-block>\r\n                            </form-group>\r\n                        </div>\r\n                    </div>\r\n                    <!--INGETROKKEN-->\r\n                    <div *ngIf=\"status == 'INGETROKKEN'\">\r\n                        <!--METOPZEG-->\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\" *ngIf=\"aard == 'METOPZEG'\">\r\n                                <form-group label=\"Datum brief betekening opzeg\">\r\n                                    <datepicker formControlName=\"briefBetekeningOpzegDatum\" (ngModelChange)=\"briefBetekeningOpzegDatumChanged($event)\"></datepicker>\r\n                                    <help-block type=\"required\">Verplicht veld</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                            <div class=\"col-md-6\" *ngIf=\"aard\">\r\n                                <form-group label=\"Einddatum abonnement\">\r\n                                    <datepicker [startDate]=\"statusForm.get('eindDatumAbonnement').value\" formControlName=\"eindDatumAbonnement\"></datepicker>\r\n                                    <help-block type=\"required\">Verplicht veld</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--INOVERDRACHT-->\r\n                    <div *ngIf=\"status == 'INOVERDRACHT'\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <form-group label=\"Einddatum huidige abonnement\">\r\n                                    <datepicker [startDate]=\"eerstVolgendeKwartaalEindDatum\" formControlName=\"eindDatumAbonnement\" [dates]=\"mogelijkeEindData\"></datepicker>\r\n                                    <help-block type=\"required\">Verplicht veld</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <form-group label=\"Ondernemingsnummer overnemer\">\r\n                                    <onderneming-select (onResult)=\"ondernemingFound($event)\" formControlName=\"ondernemingsnummerOvernemer\"></onderneming-select>\r\n                                    <help-block type=\"required\">Verplicht veld</help-block>\r\n                                    <help-block *ngIf=\"onderneming\">Onderneming:&nbsp;{{onderneming?.firmanaam}}</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                        </div>\r\n                        <hr />\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <label class=\"control-label\">Over te nemen kavels</label>\r\n                                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"!kavels || kavels.length <= 0\">\r\n                                    <i class=\"fa fa-exclamation-triangle\"> </i>\r\n                                    Er kan geen overdracht van dit abonnement gebeuren, omdat het abonnement geen overdraagbare kavels (meer) heeft.\r\n                                </div>\r\n                                <div formArrayName=\"overTeNemenKavelIds\" *ngIf=\"kavels && kavels.length > 0\">\r\n                                    <a *ngFor=\"let kavel of kavels; let i=index; trackBy:i\" class=\"kavel-detail\" (click)=\"selectKavel(i, kavel)\">\r\n                                        <span class=\"badge bg-green large\" style=\"margin: 2px;\" [ngClass]=\"{'bg-green': !kavel.enabled, 'bg-blue': kavel.enabled}\">\r\n                                            {{kavel.oudeNaam}}\r\n                                            <input type=\"hidden\" [value]=\"kavel.id\" [formControlName]=\"i\" />\r\n                                        </span>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <hr />\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <form-group label=\"Bewijsstukken overlater\">\r\n                                    <file-upload name=\"bewijsstukkenOverlater\" (fileChange)=\"fileUploaded($event)\" [multiple]=\"true\">\r\n                                        <ng-template let-files=\"files\">\r\n                                            <div class=\"panel panel-default\">\r\n                                                <div class=\"panel-body\">\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-1\">\r\n                                                            <a class=\"text-info\"><i class=\"fa fa-plus-circle\"></i></a>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-11\" *ngIf=\"files.length <= 0\">\r\n                                                            <span>Bewijsstuk toevoegen</span>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-11\" *ngIf=\"files.length > 0\">\r\n                                                            <span>{{files.length}}&nbsp;bestanden geselecteerd</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </ng-template>\r\n                                    </file-upload>\r\n                                    <help-block>\r\n                                        Bewijsstuk van de overlater toe te voegen indien gewenst.\r\n                                    </help-block>\r\n\r\n                                </form-group>\r\n                            </div>\r\n                            <div class=\"form-group col-md-6\">\r\n                                <form-group label=\"Bewijsstukken overnemer\">\r\n                                    <file-upload name=\"bewijsstukkenOvernemer\" (fileChange)=\"fileUploaded($event)\" [multiple]=\"true\">\r\n                                        <ng-template let-files=\"files\">\r\n                                            <div class=\"panel panel-default\">\r\n                                                <div class=\"panel-body\">\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-1\">\r\n                                                            <a class=\"text-info\"><i class=\"fa fa-plus-circle\"></i></a>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-11\" *ngIf=\"files.length <= 0\">\r\n                                                            <span>Bewijsstuk toevoegen</span>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-11\" *ngIf=\"files.length > 0\">\r\n                                                            <span>{{files.length }}&nbsp;bestanden geselecteerd</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </ng-template>\r\n                                    </file-upload>\r\n                                    <help-block>\r\n                                        Bewijsstuk van de overnemer toe te voegen indien gewenst.\r\n                                    </help-block>\r\n                                </form-group>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--OPGESCHORT-->\r\n                    <div *ngIf=\"status =='OPGESCHORT'\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"alert alert-info\" *ngIf=\"data.abonnementStatus.code.toUpperCase() === 'OPGESCHORT'\">\r\n                                    <span>Dit abonnement is momenteel reeds opgeschort. De opschorting zal verlengd worden.</span>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <form-group label=\"Datum ontvangst aanvraag opschorting\">\r\n                                    <datepicker formControlName=\"ontvangstAanvraagOpschortingDatum\"></datepicker>\r\n                                    <help-block type=\"required\">Verplicht veld</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <form-group label=\"Begindatum opschorting\">\r\n                                    <datepicker formControlName=\"beginDatum\" (ngModelChange)=\"beginDatumChange($event)\"></datepicker>\r\n                                    <help-block type=\"required\">Verplicht veld</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <form-group label=\"Einddatum opschorting\" [startDate]=\"today\">\r\n                                    <datepicker formControlName=\"eindDatum\"></datepicker>\r\n                                    <help-block type=\"required\">Verplicht veld</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" *ngIf=\"reden && reden != 'SEIZOENSGEBONDENACTIVITEIT'\">\r\n                            <div class=\"col-md-6\">\r\n                                <form-group label=\"Bewijsstukken\">\r\n                                    <file-upload name=\"files\" (fileChange)=\"fileUploaded($event)\" [multiple]=\"true\">\r\n                                        <ng-template let-files=\"files\">\r\n                                            <div class=\"panel panel-default\">\r\n                                                <div class=\"panel-body\">\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-1\">\r\n                                                            <a class=\"text-info\"><i class=\"fa fa-plus-circle\"></i></a>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-11\" *ngIf=\"files.length <= 0\">\r\n                                                            <span>Bewijsstuk toevoegen</span>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-11\" *ngIf=\"files.length > 0\">\r\n                                                            <span>{{files.length }}&nbsp;bestanden geselecteerd</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </ng-template>\r\n                                    </file-upload>\r\n                                    <help-block *ngIf=\"reden == 'ZIEKTE'\">Bewijsstuk toe te voegen indien gewenst</help-block>\r\n                                    <help-block *ngIf=\"reden == 'OVERMACHT'\">Bewijs toe te voegen ter motivatie indien gewenst (bv. overlijdensakte / rouwbrief)</help-block>\r\n                                    <help-block *ngIf=\"reden == 'ONGEVAL'\">Bewijs van het ongeval toe te voegen indien gewenst</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--OPGEZEGD-->\r\n                    <div *ngIf=\"status == 'OPGEZEGD' && aard\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <form-group label=\"Datum ontvangst opzeg\">\r\n                                    <datepicker [startDate]=\"data.abonnementStatusBeginDatum\" formControlName=\"datumOntvangstOpzeg\" (ngModelChange)=\"beginDatumChange($event)\"></datepicker>\r\n                                    <help-block type=\"required\">Verplicht veld</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <form-group label=\"Einddatum abonnement\">\r\n                                    <datepicker [disabled]=\"aard =='DIRECT'\" formControlName=\"eindDatum\" [dates]=\"mogelijkeEindData\"></datepicker>\r\n                                    <help-block type=\"required\">Verplicht veld</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                        </div>\r\n                        <hr *ngIf=\"aard == 'DIRECT' && reden\" />\r\n                        <div class=\"row\" *ngIf=\"aard == 'DIRECT' && reden\">\r\n                            <div class=\"col-md-6\">\r\n                                <form-group label=\"Bewijsstukken\">\r\n                                    <file-upload name=\"files\" (fileChange)=\"fileUploaded($event)\" [multiple]=\"true\">\r\n                                        <ng-template let-files=\"files\">\r\n                                            <div class=\"panel panel-default\">\r\n                                                <div class=\"panel-body\">\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-1\">\r\n                                                            <a class=\"text-info\"><i class=\"fa fa-plus-circle\"></i></a>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-11\" *ngIf=\"files.length <= 0\">\r\n                                                            <span>Bewijsstuk toevoegen</span>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-11\" *ngIf=\"files.length > 0\">\r\n                                                            <span>{{files.length }}&nbsp;bestanden geselecteerd</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </ng-template>\r\n                                    </file-upload>\r\n                                    <help-block *ngIf=\"reden == 'ZIEKTE'\">Bewijsstuk toe te voegen indien gewenst</help-block>\r\n                                    <help-block *ngIf=\"reden == 'OVERMACHT' || reden == 'OVERLIJDENZAAKVOERDER'\">\r\n                                        Bewijs toe te voegen ter motivatie indien gewenst (bv. overlijdensakte / rouwbrief)\r\n                                    </help-block>\r\n                                    <help-block *ngIf=\"reden == 'ONGEVAL'\">Bewijs van het ongeval toe te voegen indien gewenst</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                            <div class=\"col-md-6\"></div>\r\n                        </div>\r\n                        <hr />\r\n                    </div>\r\n                    <div class=\"row\" *ngIf=\"status && (heeftReden || aard)\">\r\n                        <div class=\"form-group col-md-12\">\r\n                            <form-group label=\"Opmerkingen\">\r\n                                <textarea formControlName=\"opmerkingen\" class=\"form-control\" rows=\"5\"></textarea>\r\n                            </form-group>\r\n                        </div>\r\n                    </div>\r\n                    <!--FOOTER STATUS-->\r\n                </ng-container>\r\n            </mafo-panel-body>\r\n            <mafo-panel-footer>\r\n                <div class=\"pull-right\" *ngIf=\"canUpdate | async\">\r\n                    <button class=\"btn btn-primary\" (click)=\"editStatus()\" *ngIf=\"!edit\">\r\n                        <i class=\"fa fa-pencil\"></i>\r\n                        Status abonnement wijzigen\r\n                    </button>\r\n                    <button class=\"btn btn-primary\" (click)=\"save()\" *ngIf=\"edit status\" [disabled]=\"status==='INOVERDRACHT' ? !onderneming : false\">\r\n                        Bewaren\r\n                    </button>\r\n                    <button class=\"btn btn-default\" (click)=\"editStatus()\" *ngIf=\"edit\">\r\n                        Annuleren\r\n                    </button>\r\n                </div>\r\n            </mafo-panel-footer>\r\n        </mafo-panel>\r\n    </div>\r\n</div>\r\n<div id=\"klant-detail\" class=\"body-content right-slider\" [ngClass]=\"{'slide' : nieuwKlantCreatie }\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <button class=\"btn btn-primary\" (click)=\"nieuwKlantCreatie = false\">\r\n                <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <br />\r\n            <br />\r\n        </div>\r\n    </div>\r\n    <klant-detail *ngIf=\"onderneming\" [klant]=\"onderneming\" (onCreated)=\"klantCreated($event)\"></klant-detail>\r\n</div>"

/***/ }),

/***/ "syha":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/abonnement/html/abonnement-detail.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"abonnement\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <mafo-panel selector=\"title\" [collapsable]=\"false\" [open]=\"true\">\r\n                <mafo-panel-heading>\r\n                    <h3>\r\n                        <span class=\"fa fa-list-alt\"></span>&nbsp;\r\n                        <span id=\"title-abonnment-klant\">\r\n                            {{abonnement.klant.contactpersoon.voornaam}} {{abonnement.klant.contactpersoon.naam}} > Abonnement {{abonnement.markt.afkorting}} {{abonnement.abonnementStatusBeginDatum | date: 'dd/MM/yyyy'}}\r\n                        </span>\r\n                    </h3>\r\n                </mafo-panel-heading>\r\n            </mafo-panel>\r\n        </div>\r\n    </div>\r\n    <mafo-klant id=\"abonnement-section-klant\" [data]=\"abonnement\"></mafo-klant>\r\n    <mafo-standplaats id=\"abonnement-section-standplaats\" [data]=\"abonnement\"></mafo-standplaats>\r\n    <mafo-dieptekavels id=\"abonnement-section-dieptekavels\" [data]=\"abonnement\"></mafo-dieptekavels>\r\n    <mafo-dieptekavels-historiek id=\"abonnement-section-dieptekavels-historiek\" [data]=\"abonnement\"></mafo-dieptekavels-historiek>\r\n    <mafo-status id=\"abonnement-section-status\" [data]=\"abonnement\"></mafo-status>\r\n    <mafo-elektriciteit id=\"abonnement-section-elektriciteit\" [data]=\"abonnement\" (elekAboGewijzigdCode)=\"elekAboGewijzigd($event)\"></mafo-elektriciteit>\r\n    <mafo-elektriciteit-historiek id=\"abonnement-section-elektriciteit-historiek\" [data]=\"abonnement\" [elekAboGewijzigdCode]=\"elekAboGewijzigdCode\"></mafo-elektriciteit-historiek>\r\n</div>"

/***/ }),

/***/ "ts8k":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/abonnement/html/elektriciteit.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"elektriciteitForm\" ngNoForm autocomplete=\"off\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <mafo-panel selector=\"elektriciteit\" [collapsable]=\"true\" [open]=\"true\">\r\n                <mafo-panel-heading>\r\n                    <h5>\r\n                        ELEKTRICITEIT\r\n                    </h5>\r\n                </mafo-panel-heading>\r\n                <mafo-panel-actions>\r\n                    <span class=\"badge pull-right text-uppercase\" style=\"margin: 2px;\">\r\n                        <code-display type=\"Elektriciteit\" [value]=\"data.elektriciteit.code\"></code-display>\r\n                    </span>\r\n                </mafo-panel-actions>\r\n                <mafo-panel-body>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\">\r\n                            <strong>Behoefte</strong>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div *ngIf=\"!edit\">\r\n                                <code-display type=\"Elektriciteit\" [value]=\"data.elektriciteit.code\"></code-display>\r\n                            </div>\r\n                            <div *ngIf=\"edit\">\r\n                                <code-select type=\"Elektriciteit\" formControlName=\"elektriciteitCode\" (ngModelChange)=\"changeElektriciteitsBehoefte($event)\"></code-select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\"><hr></div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\">\r\n                            <strong>Begindatum elektriciteit</strong>\r\n                        </div>\r\n                        <div class=\"col-md-3 form-group\">\r\n                            <div *ngIf=\"!edit\">\r\n                                {{data.elektriciteitBeginDatum | date: 'dd/MM/yyyy'}}\r\n                            </div>\r\n                            <div *ngIf=\"edit\">\r\n                                <datepicker formControlName=\"begindatum\" [dates]=\"mogelijkeStartData\"></datepicker>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <strong>Einddatum elektriciteit</strong>\r\n                        </div>\r\n                        <div class=\"col-md-3 form-group\">\r\n                            <div *ngIf=\"!edit\">\r\n                                {{data.elektriciteitEindDatum | date: 'dd/MM/yyyy'}}\r\n                            </div>\r\n                            <div *ngIf=\"edit\">\r\n                                <form-group>\r\n                                    <datepicker formControlName=\"einddatum\" [dates]=\"mogelijkeEindData\"></datepicker>\r\n                                    <help-block type=\"dateAfter\">Einddatum mag niet voor Begindatum liggen</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </mafo-panel-body>\r\n                <mafo-panel-footer>\r\n                    <div class=\"pull-right\" *ngIf=\"updateAbonnement | async\">\r\n                        <button class=\"btn btn-primary\" (click)=\"editElektriciteit()\" *ngIf=\"!edit\">\r\n                            <i class=\"fa fa-pencil\"></i>&nbsp;Info elektriciteit wijzigen\r\n                        </button>\r\n                        <button class=\"btn btn-primary\" (click)=\"saveAbonnementElektriciteitWijziging()\" *ngIf=\"edit\">Bewaren</button>\r\n                        <button class=\"btn btn-default\" (click)=\"editElektriciteit()\" *ngIf=\"edit\">Annuleren</button>\r\n                    </div>\r\n                </mafo-panel-footer>\r\n            </mafo-panel>\r\n        </div>\r\n    </div>\r\n</form>"

/***/ })

}]);
//# sourceMappingURL=abonnement-abonnement-module.js.map