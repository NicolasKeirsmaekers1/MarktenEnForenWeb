(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["markt-markt-module"],{

/***/ "+Np2":
/*!********************************************************************!*\
  !*** ./ClientApp/app/markt/html/markt-boekje-detail.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".kavel-detail {\r\n    width: 80px;\r\n}\r\n#KavelOpmerking{\r\n    color: grey;\r\n    font-size: 10px;\r\n}\r\n.badge, .kavel-detail {\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n.badge {\r\n    border-radius: 5px;\r\n    margin: 2px;\r\n    box-sizing: border-box;\r\n}\r\n.badge-border {\r\n    box-sizing: border-box;\r\n}\r\n.right-slider {\r\n    border-left: 2px solid #e5e5e5;\r\n    position: fixed;\r\n    min-height: 100%;\r\n    /*overflow: hidden;*/\r\n    overflow-y: scroll;\r\n    background-color: #f3f3f3;\r\n    top: 0;\r\n    padding-top: 70px;\r\n    -ms-opacity: 0;\r\n    opacity: 0;\r\n    transition: right .5s cubic-bezier(0, 1, 0.5, 1), opacity .3s cubic-bezier(0, 1, 0.5, 1);\r\n}\r\n.right-slider.slide {\r\n        right: 0 !important;\r\n        opacity: 1 !important;\r\n    }\r\n/*Detail*/\r\n#marktboekje-kavel-detail {\r\n    width: 100%;\r\n    right: -100%;\r\n    z-index: 12;\r\n}\r\n#marktboekje-kavel-detail.slide {\r\n        border-left: 0;\r\n    }\r\n@media (min-width: 768px) {\r\n    #marktboekje-kavel-detail.slide {\r\n        left: 220px;\r\n        padding-right: 240px;\r\n    }\r\n}\r\n/*DagpasOverview*/\r\n#marktboekje-dagpas-overview {\r\n    width: 100%;\r\n    right: -100%;\r\n    /*z-index: 9;*/\r\n}\r\n#marktboekje-dagpas-overview.slide {\r\n        border-left: 0;\r\n    }\r\n@media (min-width: 768px) {\r\n    #marktboekje-dagpas-overview.slide {\r\n        left: 220px;\r\n        padding-right: 240px;\r\n    }\r\n}\r\n/*Tooltip*/\r\n#marktboekje-kavel-tooltip {\r\n    border-top: 2px solid #e5e5e5;\r\n    position: fixed;\r\n    height: 25%;\r\n    background-color: #f3f3f3;\r\n    width: 100%;\r\n    bottom: -25%;\r\n    left: 0;\r\n    z-index: 10;\r\n    -ms-opacity: 0;\r\n    opacity: 0;\r\n    transition: bottom .5s cubic-bezier(0, 1, 0.5, 1), opacity .5s cubic-bezier(0, 1, 0.5, 1);\r\n}\r\n#marktboekje-kavel-tooltip.slide {\r\n        bottom: 0;\r\n        opacity: 1;\r\n    }\r\n@media (min-width: 768px) {\r\n    #marktboekje-kavel-tooltip {\r\n        left: 220px;\r\n        height: 20%;\r\n        bottom: -20%;\r\n    }\r\n}\r\n/*Filter*/\r\n#marktboekje-kavel-filter {\r\n    width: 200px;\r\n    right: -200px;\r\n    z-index: 11;\r\n}\r\n#marktboekje-kavel-filter .checkbox-list ul {\r\n        list-style: none;\r\n        padding: 0;\r\n    }\r\n#marktboekje-kavel-filter .checkbox-list ul li {\r\n            width: 100%;\r\n            padding: 5px 0;\r\n            margin-bottom: 5px;\r\n        }\r\n\r\n        \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvbWFya3QvaHRtbC9tYXJrdC1ib2VramUtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUdYLHNCQUFzQjtBQUMxQjtBQUVBO0lBR0ksc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixNQUFNO0lBQ04saUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxVQUFVO0lBSVYsd0ZBQXdGO0FBQzVGO0FBRUk7UUFDSSxtQkFBbUI7UUFDbkIscUJBQXFCO0lBQ3pCO0FBRUosU0FBUztBQUNUO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFFSTtRQUNJLGNBQWM7SUFDbEI7QUFFSjtJQUNJO1FBQ0ksV0FBVztRQUNYLG9CQUFvQjtJQUN4QjtBQUNKO0FBQ0EsaUJBQWlCO0FBQ2pCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0FBQ2xCO0FBRUk7UUFDSSxjQUFjO0lBQ2xCO0FBRUo7SUFDSTtRQUNJLFdBQVc7UUFDWCxvQkFBb0I7SUFDeEI7QUFDSjtBQUVBLFVBQVU7QUFDVjtJQUNJLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtJQUNaLE9BQU87SUFDUCxXQUFXO0lBQ1gsY0FBYztJQUNkLFVBQVU7SUFJVix5RkFBeUY7QUFDN0Y7QUFFSTtRQUNJLFNBQVM7UUFDVCxVQUFVO0lBQ2Q7QUFFSjtJQUNJO1FBQ0ksV0FBVztRQUNYLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0FBQ0o7QUFFQSxTQUFTO0FBQ1Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUVJO1FBQ0ksZ0JBQWdCO1FBQ2hCLFVBQVU7SUFDZDtBQUVJO1lBQ0ksV0FBVztZQUNYLGNBQWM7WUFDZCxrQkFBa0I7UUFDdEIiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9tYXJrdC9odG1sL21hcmt0LWJvZWtqZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5rYXZlbC1kZXRhaWwge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbn1cclxuI0thdmVsT3BtZXJraW5ne1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLmJhZGdlLCAua2F2ZWwtZGV0YWlsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uYmFkZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uYmFkZ2UtYm9yZGVyIHtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5yaWdodC1zbGlkZXIge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZTVlNWU1O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIC8qb3ZlcmZsb3c6IGhpZGRlbjsqL1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxuICAgIHRvcDogMDtcclxuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xyXG4gICAgLW1zLW9wYWNpdHk6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IHJpZ2h0IC41cyBjdWJpYy1iZXppZXIoMCwgMSwgMC41LCAxKSwgb3BhY2l0eSAuM3MgY3ViaWMtYmV6aWVyKDAsIDEsIDAuNSwgMSk7XHJcbiAgICAtby10cmFuc2l0aW9uOiByaWdodCAuNXMgY3ViaWMtYmV6aWVyKDAsIDEsIDAuNSwgMSksIG9wYWNpdHkgLjNzIGN1YmljLWJlemllcigwLCAxLCAwLjUsIDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiByaWdodCAuNXMgY3ViaWMtYmV6aWVyKDAsIDEsIDAuNSwgMSksIG9wYWNpdHkgLjNzIGN1YmljLWJlemllcigwLCAxLCAwLjUsIDEpO1xyXG4gICAgdHJhbnNpdGlvbjogcmlnaHQgLjVzIGN1YmljLWJlemllcigwLCAxLCAwLjUsIDEpLCBvcGFjaXR5IC4zcyBjdWJpYy1iZXppZXIoMCwgMSwgMC41LCAxKTtcclxufVxyXG5cclxuICAgIC5yaWdodC1zbGlkZXIuc2xpZGUge1xyXG4gICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuLypEZXRhaWwqL1xyXG4jbWFya3Rib2VramUta2F2ZWwtZGV0YWlsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcmlnaHQ6IC0xMDAlO1xyXG4gICAgei1pbmRleDogMTI7XHJcbn1cclxuXHJcbiAgICAjbWFya3Rib2VramUta2F2ZWwtZGV0YWlsLnNsaWRlIHtcclxuICAgICAgICBib3JkZXItbGVmdDogMDtcclxuICAgIH1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgI21hcmt0Ym9la2plLWthdmVsLWRldGFpbC5zbGlkZSB7XHJcbiAgICAgICAgbGVmdDogMjIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjQwcHg7XHJcbiAgICB9XHJcbn1cclxuLypEYWdwYXNPdmVydmlldyovXHJcbiNtYXJrdGJvZWtqZS1kYWdwYXMtb3ZlcnZpZXcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICByaWdodDogLTEwMCU7XHJcbiAgICAvKnotaW5kZXg6IDk7Ki9cclxufVxyXG5cclxuICAgICNtYXJrdGJvZWtqZS1kYWdwYXMtb3ZlcnZpZXcuc2xpZGUge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAjbWFya3Rib2VramUtZGFncGFzLW92ZXJ2aWV3LnNsaWRlIHtcclxuICAgICAgICBsZWZ0OiAyMjBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLypUb29sdGlwKi9cclxuI21hcmt0Ym9la2plLWthdmVsLXRvb2x0aXAge1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlNWU1ZTU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IDI1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogLTI1JTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIC1tcy1vcGFjaXR5OiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBib3R0b20gLjVzIGN1YmljLWJlemllcigwLCAxLCAwLjUsIDEpLCBvcGFjaXR5IC41cyBjdWJpYy1iZXppZXIoMCwgMSwgMC41LCAxKTtcclxuICAgIC1vLXRyYW5zaXRpb246IGJvdHRvbSAuNXMgY3ViaWMtYmV6aWVyKDAsIDEsIDAuNSwgMSksIG9wYWNpdHkgLjVzIGN1YmljLWJlemllcigwLCAxLCAwLjUsIDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3R0b20gLjVzIGN1YmljLWJlemllcigwLCAxLCAwLjUsIDEpLCBvcGFjaXR5IC41cyBjdWJpYy1iZXppZXIoMCwgMSwgMC41LCAxKTtcclxuICAgIHRyYW5zaXRpb246IGJvdHRvbSAuNXMgY3ViaWMtYmV6aWVyKDAsIDEsIDAuNSwgMSksIG9wYWNpdHkgLjVzIGN1YmljLWJlemllcigwLCAxLCAwLjUsIDEpO1xyXG59XHJcblxyXG4gICAgI21hcmt0Ym9la2plLWthdmVsLXRvb2x0aXAuc2xpZGUge1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAjbWFya3Rib2VramUta2F2ZWwtdG9vbHRpcCB7XHJcbiAgICAgICAgbGVmdDogMjIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgICAgYm90dG9tOiAtMjAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKkZpbHRlciovXHJcbiNtYXJrdGJvZWtqZS1rYXZlbC1maWx0ZXIge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgcmlnaHQ6IC0yMDBweDtcclxuICAgIHotaW5kZXg6IDExO1xyXG59XHJcblxyXG4gICAgI21hcmt0Ym9la2plLWthdmVsLWZpbHRlciAuY2hlY2tib3gtbGlzdCB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICAgICAjbWFya3Rib2VramUta2F2ZWwtZmlsdGVyIC5jaGVja2JveC1saXN0IHVsIGxpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAiXX0= */");

/***/ }),

/***/ "/nyj":
/*!**************************************************************!*\
  !*** ./ClientApp/app/markt/markt-boekje-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: MarktBoekjeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarktBoekjeDetailComponent", function() { return MarktBoekjeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_markt_boekje_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/markt-boekje-detail.component.html */ "nWWF");
/* harmony import */ var _raw_loader_html_markt_boekje_detail_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_markt_boekje_detail_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _html_markt_boekje_detail_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html/markt-boekje-detail.component.css */ "+Np2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services */ "mZsw");
/* harmony import */ var _componenten_code_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componenten/code-select */ "HW5m");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _componenten_klant_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componenten/klant-core */ "TDej");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _componenten_validators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../componenten/validators */ "2/Vv");
/* harmony import */ var _shared_helper_datetimehelper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/helper/datetimehelper */ "CS9P");












var MarktBoekjeDetailComponent = /** @class */ (function () {
    function MarktBoekjeDetailComponent(kavelService, router, route, toastr, fb, validationService, dagpasService, dateTimeHelper, tariefService) {
        this.kavelService = kavelService;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.fb = fb;
        this.validationService = validationService;
        this.dagpasService = dagpasService;
        this.dateTimeHelper = dateTimeHelper;
        this.tariefService = tariefService;
        this.pageTitle = "Marktboekje";
        this.detailDisplayed = false;
        this.tooltipDisplayed = false;
        this.legendDisplayed = false;
        this.longPress = false;
        this.codeType = _componenten_code_select__WEBPACK_IMPORTED_MODULE_6__["CodeType"];
        this.dagpasDisplayed = false;
        this.isDagpasModus = false;
        this.filter = {
            vrij: false,
            bezet: false,
            inoverdracht: false,
            gereserveerd: false,
            onbeschikbaar: false
        };
        this.selectedKavels = [];
        this.dagpasOverviewDisplayed = false;
        this.kavelConfirmDisplayed = false;
        this.eenheidsprijsKavel = "";
        this.totaalprijsKavel = "";
        this.eenheidsprijsElektriciteit = "";
        this.totaalprijsElektriciteit = "";
        this.totaalprijs = "";
        this.kavelStatusEnum = _services__WEBPACK_IMPORTED_MODULE_5__["KavelStatusEnum"];
        this.currentDate = new Date();
    }
    MarktBoekjeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.marktId = this.route.snapshot.params["marktId"];
        this.kavelService.getAllKavelsForMarktOverview(this.marktId).subscribe(function (x) {
            _this.kavels = x;
        }, function (x) {
            _this.toastr.error("Kon de kavels niet inladen", "Kavels");
            if (x.ExtraInfo) {
                for (var xtra in x.ExtraInfo) {
                    _this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                }
            }
        });
        this.selectedKavels = [];
        this.subscribedKavels = [];
        this.takenKavels = [];
        var adres = new _componenten_klant_core__WEBPACK_IMPORTED_MODULE_8__["Adres"]();
        this.klant = {
            id: 0,
            juridischeEntiteit: "",
            elektriciteit: "",
            firmanaam: "",
            ondernemingsnr: "",
            telefoon: "",
            gsm: "",
            email: "",
            fax: "",
            maatschappelijkeZetel: adres,
            contactPersonen: [new _componenten_klant_core__WEBPACK_IMPORTED_MODULE_8__["Persoon"](true)]
        };
        this.buildForm();
        this.getTakenKavels();
    };
    MarktBoekjeDetailComponent.prototype.downloadKavelsCsv = function () {
        this.kavelService.downloadKavels(this.marktId);
    };
    MarktBoekjeDetailComponent.prototype.setKavelColor = function (kavel) {
        if (!this.takenKavels) {
            this.getTakenKavels();
        }
        if (this.takenKavels.some(function (x) { return x.id == kavel.id; })) {
            return {
                'bg-gray': true,
                "badge-border": kavel.mogelijkheidDieptekavel
            };
        }
        else {
            return {
                'bg-green': kavel.kavelStatus === _services__WEBPACK_IMPORTED_MODULE_5__["KavelStatusEnum"].Vrij,
                'bg-red': kavel.kavelStatus === _services__WEBPACK_IMPORTED_MODULE_5__["KavelStatusEnum"].Bezet || kavel.kavelStatus === _services__WEBPACK_IMPORTED_MODULE_5__["KavelStatusEnum"].InOverdracht,
                'bg-orange': kavel.kavelStatus === _services__WEBPACK_IMPORTED_MODULE_5__["KavelStatusEnum"].Gereserveerd,
                "badge-border": kavel.mogelijkheidDieptekavel,
                'bg-orange-striped': kavel.kavelStatus === _services__WEBPACK_IMPORTED_MODULE_5__["KavelStatusEnum"].BezetGereserveerd,
                'bg-green-striped': kavel.kavelStatus === _services__WEBPACK_IMPORTED_MODULE_5__["KavelStatusEnum"].BezetTeBedelen
            };
        }
    };
    ;
    MarktBoekjeDetailComponent.prototype.updateKavelOpmerking = function ($event) {
        var _this = this;
        $event.preventDefault();
        $event.stopImmediatePropagation();
        this.kavelOpmerking = {
            kavelId: this.kavel.kavelId,
            marktId: this.marktId,
            opmerking: this.opmerking
        };
        if (this.kavel.opmerkingen == undefined) {
            this.kavel.opmerkingen = [];
        }
        this.kavel.opmerkingen.push(this.kavelOpmerking);
        this.kavel.marktId = this.marktId;
        this.kavelService.save(this.kavel).subscribe(function (x) {
            _this.opmerking = "";
            _this.toastr.success("opmerking succesvol opgeslagen.");
        }, function (x) {
            _this.toastr.error("opmerking kon niet worden bewaard.");
            _this.kavel.opmerkingen.pop();
        });
    };
    MarktBoekjeDetailComponent.prototype.showKavelDetail = function (kavelId) {
        var _this = this;
        this.kavelService.getKavelDetail(this.marktId, kavelId)
            .subscribe(function (x) {
            _this.kavel = x;
            console.log(_this.kavel);
        }, function (error) {
            _this.toastr.error("Fout bij het ophalen van kavel details");
        }, function () {
            _this.detailDisplayed = true;
        });
    };
    MarktBoekjeDetailComponent.prototype.mouseup = function () {
        this.longPress = false;
    };
    MarktBoekjeDetailComponent.prototype.showLegend = function () {
        this.tooltipDisplayed = false;
        this.legendDisplayed = !this.legendDisplayed;
    };
    MarktBoekjeDetailComponent.prototype.hideDetail = function () {
        this.detailDisplayed = false;
        this.kavelConfirmDisplayed = false;
    };
    MarktBoekjeDetailComponent.prototype.hideTooltip = function () {
        this.tooltipDisplayed = false;
    };
    MarktBoekjeDetailComponent.prototype.hideDagpas = function () {
        this.dagpasOverviewDisplayed = false;
        this.kavelConfirmDisplayed = false;
    };
    MarktBoekjeDetailComponent.prototype.setFilter = function ($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
        var displayAll = false;
        if (!this.filter.vrij
            && !this.filter.bezet
            && !this.filter.inoverdracht
            && !this.filter.gereserveerd
            && !this.filter.onbeschikbaar)
            displayAll = true;
        var kavelDisplay = true;
        for (var _i = 0, _a = this.kavels; _i < _a.length; _i++) {
            var kavel = _a[_i];
            switch (kavel.kavelStatus) {
                case _services__WEBPACK_IMPORTED_MODULE_5__["KavelStatusEnum"].Vrij:
                    kavelDisplay = this.filter.vrij;
                    break;
                case _services__WEBPACK_IMPORTED_MODULE_5__["KavelStatusEnum"].Gereserveerd:
                    kavelDisplay = this.filter.gereserveerd;
                    break;
                case _services__WEBPACK_IMPORTED_MODULE_5__["KavelStatusEnum"].Bezet:
                    kavelDisplay = this.filter.bezet;
                    break;
                case _services__WEBPACK_IMPORTED_MODULE_5__["KavelStatusEnum"].InOverdracht:
                    kavelDisplay = this.filter.inoverdracht;
                    break;
                default:
            }
            kavel["hidden"] = displayAll ? false : !kavelDisplay;
        }
    };
    MarktBoekjeDetailComponent.prototype.createDagpas = function () {
        this.dagpasDisplayed = !this.dagpasDisplayed;
        this.isDagpasModus = true;
    };
    MarktBoekjeDetailComponent.prototype.endDagpasCreation = function () {
        this.dagpasDisplayed = false;
        this.isDagpasModus = false;
        this.kavelConfirmDisplayed = false;
        this.dagpasOverviewDisplayed = false;
        this.selectedKavels.length = 0;
        var adres = new _componenten_klant_core__WEBPACK_IMPORTED_MODULE_8__["Adres"]();
        this.klant = {
            id: 0,
            juridischeEntiteit: "",
            elektriciteit: "",
            firmanaam: "",
            ondernemingsnr: "",
            telefoon: "",
            gsm: "",
            email: "",
            fax: "",
            maatschappelijkeZetel: adres,
            contactPersonen: [new _componenten_klant_core__WEBPACK_IMPORTED_MODULE_8__["Persoon"](true)]
        };
    };
    MarktBoekjeDetailComponent.prototype.confirmKavels = function () {
        if (!this.elektriciteitForm.valid || this.klant.id == 0 || this.selectedKavels.length == 0) {
            this.validationService.valideFormGroup(this.elektriciteitForm);
            this.toastr.warning("Sommige velden bevatten geen geldige waarden", "Ongeldig formulier");
        }
        else {
            this.dagpasOverviewDisplayed = true;
            this.klant.elektriciteit = this.elektriciteitForm.get("elektriciteitCode").value;
            if (this.selectedKavels.some(function (x) { return x.kavelStatus.code == "BEZET"; })) {
                this.kavelConfirmDisplayed = true;
            }
            else {
                this.kavelConfirmDisplayed = false;
            }
            this.getEenheidsprijsElektriciteit();
            this.getEenheidsprijsKavel();
            this.getTotaalprijsElektriciteit();
            this.getTotaalprijsKavels();
        }
    };
    MarktBoekjeDetailComponent.prototype.contiueSave = function () {
        this.kavelConfirmDisplayed = false;
    };
    MarktBoekjeDetailComponent.prototype.saveDagpas = function () {
        var _this = this;
        if (!this.elektriciteitForm.valid || this.klant.id == 0 || this.selectedKavels.length == 0) {
            this.validationService.valideFormGroup(this.elektriciteitForm);
            this.dagpasDisplayed = true;
            this.toastr.warning("Sommige velden bevatten geen geldige waarden", "Ongeldig formulier");
        }
        else {
            this.dagpasService.save(this.marktId, this.klant, this.selectedKavels).subscribe(function (x) {
                _this.data = x;
                _this.toastr.success("Dagpas bewaard", "In orde!");
                _this.endDagpasCreation();
            }, function (x) {
                _this.toastr.error("Kon de dagpas niet opslaan", "Dagpas");
                if (x.ExtraInfo) {
                    for (var xtra in x.ExtraInfo) {
                        _this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                    }
                }
            });
        }
    };
    MarktBoekjeDetailComponent.prototype.compareKavels = function (a, b) {
        if (a.oudeNaam < b.oudeNaam)
            return -1;
        if (a.oudeNaam > b.oudeNaam)
            return 1;
        return 0;
    };
    MarktBoekjeDetailComponent.prototype.klantCreated = function ($event) {
        this.klant = $event;
    };
    MarktBoekjeDetailComponent.prototype.buildForm = function () {
        this.elektriciteitForm = this.fb.group({
            'elektriciteitCode': [this.klant.elektriciteit, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]]
        });
    };
    MarktBoekjeDetailComponent.prototype.checkAvailable = function (kavelId) {
        this.getTakenKavels();
        //TODO contains
        return !this.takenKavels.some(function (x) { return x.id == kavelId; });
    };
    MarktBoekjeDetailComponent.prototype.getTakenKavels = function () {
        var _this = this;
        this.kavelService.getTakenKavels(this.marktId)
            .subscribe(function (x) { return _this.takenKavels = x.map(function (kavel) {
            kavel["hidden"] = false;
            return kavel;
        }); }, function (x) {
            _this.toastr.error("Kon de bezette kavels niet inladen", "dagpas");
            if (x.ExtraInfo) {
                for (var xtra in x.ExtraInfo) {
                    _this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                }
            }
        });
    };
    MarktBoekjeDetailComponent.prototype.getEenheidsprijsKavel = function () {
        var _this = this;
        var dag = this.dateTimeHelper.getCurrentDate().getDay() == 6 ? "DAGPASZONDAG" : "DAGPASWEEKDAG";
        this.tariefService.getStandplaatsTariefByCode(dag).subscribe(function (x) { return _this.eenheidsprijsKavel = "€" + x.eenheidsPrijs; }, function (x) {
            _this.toastr.error("Kon de eenheidsprijs van  kavels niet inladen", "Tarief");
            if (x.ExtraInfo) {
                for (var xtra in x.ExtraInfo) {
                    _this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                }
            }
        });
    };
    MarktBoekjeDetailComponent.prototype.getTotaalprijsKavels = function () {
        var _this = this;
        var dag = this.dateTimeHelper.getCurrentDate().getDay() == 6 ? "DAGPASZONDAG" : "DAGPASWEEKDAG";
        this.tariefService.getStandplaatsTariefByCode(dag).subscribe(function (x) { _this.totaalprijsKavel = "€" + ((x.eenheidsPrijs * _this.selectedKavels.length) + ((x.eenheidsPrijs * _this.selectedKavels.length) / 100 * 21)), _this.totaalKavelNumber = ((x.eenheidsPrijs * _this.selectedKavels.length + (x.eenheidsPrijs * _this.selectedKavels.length) / 100 * 21)); }, function (x) {
            _this.toastr.error("Kon de totaalprijs van  kavels niet inladen", "Tarief");
            if (x.ExtraInfo) {
                for (var xtra in x.ExtraInfo) {
                    _this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                }
            }
        });
    };
    MarktBoekjeDetailComponent.prototype.getEenheidsprijsElektriciteit = function () {
        var _this = this;
        this.tariefService.getElektriciteitTariefByCode("DAGPASGEWONEAANSLUITING").subscribe(function (x) { return _this.eenheidsprijsElektriciteit = "€" + x.eenheidsPrijs; }, function (x) {
            _this.toastr.error("Kon de eenheidsprijs van  elektriciteit niet inladen", "Tarief");
            if (x.ExtraInfo) {
                for (var xtra in x.ExtraInfo) {
                    _this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                }
            }
        });
    };
    MarktBoekjeDetailComponent.prototype.getTotaalprijsElektriciteit = function () {
        var _this = this;
        this.tariefService.getElektriciteitTariefByCode("DAGPASGEWONEAANSLUITING").subscribe(function (x) { _this.totaalprijsElektriciteit = "€" + (x.eenheidsPrijs * _this.selectedKavels.length + (x.eenheidsPrijs * _this.selectedKavels.length / 100 * 6)), _this.totaalElektricteitNumber = (x.eenheidsPrijs * _this.selectedKavels.length + (x.eenheidsPrijs * _this.selectedKavels.length / 100 * 6)); }, function (x) {
            _this.toastr.error("Kon de totaalprijs van  elektriciteit niet inladen", "Tarief");
            if (x.ExtraInfo) {
                for (var xtra in x.ExtraInfo) {
                    _this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                }
            }
        });
    };
    MarktBoekjeDetailComponent.prototype.toDisplayFormat = function (status) {
        switch (status) {
            case _services__WEBPACK_IMPORTED_MODULE_5__["KavelStatusEnum"].BezetGereserveerd:
                return "Bezet gereserveerd";
            case _services__WEBPACK_IMPORTED_MODULE_5__["KavelStatusEnum"].BezetTeBedelen:
                return "Bezet te bedelen";
            case _services__WEBPACK_IMPORTED_MODULE_5__["KavelStatusEnum"].InOverdracht:
                return "In overdracht";
            default:
                return _services__WEBPACK_IMPORTED_MODULE_5__["KavelStatusEnum"][status];
                ;
        }
        ;
    };
    MarktBoekjeDetailComponent.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["KavelService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
        { type: _componenten_validators__WEBPACK_IMPORTED_MODULE_10__["ValidatorService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["DagpasService"] },
        { type: _shared_helper_datetimehelper__WEBPACK_IMPORTED_MODULE_11__["DateTimeHelper"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["TariefService"] }
    ]; };
    MarktBoekjeDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "mafo-app",
            template: _raw_loader_html_markt_boekje_detail_component_html__WEBPACK_IMPORTED_MODULE_1___default.a,
            styles: [_html_markt_boekje_detail_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_5__["KavelService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
            _componenten_validators__WEBPACK_IMPORTED_MODULE_10__["ValidatorService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["DagpasService"],
            _shared_helper_datetimehelper__WEBPACK_IMPORTED_MODULE_11__["DateTimeHelper"],
            _services__WEBPACK_IMPORTED_MODULE_5__["TariefService"]])
    ], MarktBoekjeDetailComponent);
    return MarktBoekjeDetailComponent;
}());



/***/ }),

/***/ "4WcL":
/*!********************************************************!*\
  !*** ./ClientApp/app/componenten/dagpas-form/index.ts ***!
  \********************************************************/
/*! exports provided: DagpasFormComponent, DagpasFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dagpas_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dagpas-form.component */ "6ilw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DagpasFormComponent", function() { return _dagpas_form_component__WEBPACK_IMPORTED_MODULE_0__["DagpasFormComponent"]; });

/* harmony import */ var _dagpas_form_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dagpas-form.module */ "o133");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DagpasFormModule", function() { return _dagpas_form_module__WEBPACK_IMPORTED_MODULE_1__["DagpasFormModule"]; });





/***/ }),

/***/ "5pmh":
/*!*************************************************************!*\
  !*** ./ClientApp/app/markt/kavel-detail.modal.component.ts ***!
  \*************************************************************/
/*! exports provided: KavelDetailModalContext, KavelDetailModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KavelDetailModalContext", function() { return KavelDetailModalContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KavelDetailModal", function() { return KavelDetailModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_kavel_detail_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/kavel-detail.modal.component.html */ "C5lM");
/* harmony import */ var _raw_loader_html_kavel_detail_modal_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_kavel_detail_modal_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_modialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-modialog */ "ROqb");
/* harmony import */ var ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-modialog/plugins/bootstrap */ "e7Ax");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _componenten_code_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componenten/code-select */ "HW5m");
/* harmony import */ var _services_kavel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/kavel.service */ "FVUk");









var KavelDetailModalContext = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KavelDetailModalContext, _super);
    function KavelDetailModalContext(kavelId, marktId, hideKlant) {
        var _this = _super.call(this) || this;
        _this.kavelId = kavelId;
        _this.marktId = marktId;
        _this.hideKlant = hideKlant;
        return _this;
    }
    return KavelDetailModalContext;
}(ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BSModalContext"]));

var KavelDetailModal = /** @class */ (function () {
    function KavelDetailModal(dialog, kavelService, fb, toastr) {
        this.dialog = dialog;
        this.kavelService = kavelService;
        this.fb = fb;
        this.toastr = toastr;
        this.codeType = _componenten_code_select__WEBPACK_IMPORTED_MODULE_7__["CodeType"];
        this.formErrors = {
            'id': '',
            'marktId': '',
            'mogelijkheidDieptekavel': '',
            'longitude': '',
            'latitude': '',
            'oudeNaam': ''
        };
        this.validationMessages = {
            'id': {},
            'marktId': {},
            'mogelijkheidDieptekavel': {},
            'longitude': {},
            'latitude': {},
            'oudeNaam': {
                'required': 'Oude naam is verplicht.'
            }
        };
        this.context = dialog.context;
    }
    KavelDetailModal.prototype.onKeyUp = function (value) {
    };
    KavelDetailModal.prototype.getKavel = function (marktId, kavelId) {
        var _this = this;
        this.kavelService.get(marktId, kavelId)
            .subscribe(function (x) {
            _this.kavel = x;
            _this.buildForm();
        }, function (error) { return _this.errorMessage = error; });
    };
    KavelDetailModal.prototype.ngOnInit = function () {
        if (this.context.kavelId > 0) {
            this.getKavel(this.context.marktId, this.context.kavelId);
        }
        else {
            this.kavel = {
                id: 0,
                marktId: this.context.marktId,
                mogelijkheidDieptekavel: false,
                longitude: 0,
                latitude: 0,
                oudeNaam: ''
            };
            this.buildForm();
        }
    };
    KavelDetailModal.prototype.buildForm = function () {
        var _this = this;
        this.kavelDetailForm = this.fb.group({
            'id': [this.kavel.id],
            'marktId': [this.kavel.marktId],
            'mogelijkheidDieptekavel': [this.kavel.mogelijkheidDieptekavel],
            'longitude': [this.kavel.longitude],
            'latitude': [this.kavel.latitude],
            'oudeNaam': [this.kavel.oudeNaam, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.kavelDetailForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
    };
    KavelDetailModal.prototype.onValueChanged = function (data) {
        if (!this.kavelDetailForm)
            return;
        var form = this.kavelDetailForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    KavelDetailModal.prototype.save = function () {
        var _this = this;
        this.kavel.latitude = this.kavelDetailForm.value.latitude;
        this.kavel.longitude = this.kavelDetailForm.value.longitude;
        this.kavel.oudeNaam = this.kavelDetailForm.value.oudeNaam;
        this.kavel.mogelijkheidDieptekavel = this.kavelDetailForm.value.mogelijkheidDieptekavel;
        if (this.kavelDetailForm.valid) {
            this.kavelService.save(this.kavel)
                .subscribe(function (success) {
                _this.toastr.success("Kavel succesvol bewaard");
                return _this.dialog.close(true);
            }, function (error) {
                _this.toastr.error("Kavel kon niet worden bewaard.");
            });
        }
    };
    KavelDetailModal.ctorParameters = function () { return [
        { type: ngx_modialog__WEBPACK_IMPORTED_MODULE_4__["DialogRef"] },
        { type: _services_kavel_service__WEBPACK_IMPORTED_MODULE_8__["KavelService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
    ]; };
    KavelDetailModal = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "modal-content",
            template: _raw_loader_html_kavel_detail_modal_component_html__WEBPACK_IMPORTED_MODULE_1___default.a
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_modialog__WEBPACK_IMPORTED_MODULE_4__["DialogRef"],
            _services_kavel_service__WEBPACK_IMPORTED_MODULE_8__["KavelService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], KavelDetailModal);
    return KavelDetailModal;
}());



/***/ }),

/***/ "6ilw":
/*!************************************************************************!*\
  !*** ./ClientApp/app/componenten/dagpas-form/dagpas-form.component.ts ***!
  \************************************************************************/
/*! exports provided: DagpasFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DagpasFormComponent", function() { return DagpasFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dagpas_form_layout_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dagpas-form.layout.html */ "jBRe");
/* harmony import */ var _raw_loader_dagpas_form_layout_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_dagpas_form_layout_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validators */ "2/Vv");
/* harmony import */ var _services_onderneming_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/onderneming.service */ "gcOs");
/* harmony import */ var _klant_core_klant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../klant-core/klant.service */ "msyP");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _klant_core_app_address__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../klant-core/app.address */ "+qOC");
/* harmony import */ var _klant_core_contactpersoon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../klant-core/contactpersoon.component */ "vRQ+");










var DagpasFormComponent = /** @class */ (function () {
    function DagpasFormComponent(fb, ondernemingService, toastr, klantService, validationService) {
        this.fb = fb;
        this.ondernemingService = ondernemingService;
        this.toastr = toastr;
        this.klantService = klantService;
        this.validationService = validationService;
        this.klantOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.isReadonly = false;
    }
    DagpasFormComponent.prototype.searchOndernemingsnummer = function (e) {
        var _this = this;
        if (e) {
            var ondernemingen = this.ondernemingService.search(e.value)
                .subscribe(function (x) {
                _this.klant = x;
                _this.getContactpersoon();
                //this.klantForm.patchValue(x);
                //this.klantForm.controls['contactpersoonGSM'].setValue(this.contact.gsm);
                //this.klantForm.controls['contactpersoonNaam'].setValue(this.contact.naam);
                //this.klantForm.controls['contactpersoonVoornaam'].setValue(this.contact.voornaam);
                //this.klantForm.get('juridischeEntiteit').disable();
                _this.isReadonly = true;
            }, function (error) {
                _this.toastr.warning("Onderneming niet gevonden in het systeem.", "Onderneming niet gevonden");
                //this.klantForm.get('juridischeEntiteit').enable();
                _this.isReadonly = false;
            });
        }
    };
    DagpasFormComponent.prototype.ngOnInit = function () {
        var adres = new _klant_core_app_address__WEBPACK_IMPORTED_MODULE_8__["Adres"]();
        this.klant = {
            id: 0,
            juridischeEntiteit: "",
            elektriciteit: "",
            firmanaam: "",
            ondernemingsnr: "",
            telefoon: "",
            gsm: "",
            email: "",
            fax: "",
            maatschappelijkeZetel: adres,
            contactPersonen: [new _klant_core_contactpersoon_component__WEBPACK_IMPORTED_MODULE_9__["Persoon"](true)]
        };
        this.contact = new _klant_core_contactpersoon_component__WEBPACK_IMPORTED_MODULE_9__["Persoon"](true);
        this.buildForm();
    };
    DagpasFormComponent.prototype.buildForm = function () {
        //this.klantForm = this.fb.group({
        //    id: [this.klant.id],
        //    'ondernemingsnr': [this.klant.ondernemingsnr],
        //    'firmanaam': [this.klant.firmanaam, [Validators.required, Validators.maxLength(100)]],
        //    'juridischeEntiteit': [this.klant.juridischeEntiteit, [Validators.required]],
        //    'telefoon': [this.klant.telefoon, [Validators.maxLength(30), Validators.pattern("(\\+|0)\\d+")]],
        //    'fax': [this.klant.fax, [Validators.maxLength(30), Validators.pattern("(\\+|0)\\d+")]],
        //    'gsm': [this.klant.gsm, [Validators.maxLength(30), Validators.pattern("(\\+|0)\\d+")]],
        //    'email': [this.klant.email, [Validators.required, Validators.maxLength(50), CustomValidators.validEmail]],
        //    'contactpersoonNaam': [this.contact.naam, [Validators.required, Validators.maxLength(50)]],
        //    'contactpersoonGSM': [this.contact.gsm, [Validators.required, Validators.maxLength(30), Validators.pattern("(\\+|0)\\d+")]],
        //    'contactpersoonVoornaam': [this.contact.voornaam, [Validators.required, Validators.maxLength(50)]],
        //    'maatschappelijkeZetel': this.fb.group({}),
        //    'elektriciteitCode': [this.klant.elektriciteit, [Validators.required]]
        //});
        this.elektriciteitForm = this.fb.group({
            'elektriciteitCode': [this.klant.elektriciteit, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    DagpasFormComponent.prototype.getContactpersoon = function () {
        if (this.klant.contactPersonen.filter(function (item) { return item.isHoofdcontactPersoon; })) {
            this.contact = this.klant.contactPersonen.filter(function (item) { return item.isHoofdcontactPersoon; })[0];
        }
    };
    DagpasFormComponent.prototype.getKlant = function (kavels) {
        if (!this.elektriciteitForm.valid) {
            this.validationService.valideFormGroup(this.elektriciteitForm);
            this.toastr.warning("Sommige velden bevatten geen geldige waarden", "Ongeldig formulier");
        }
        else {
        }
        return "testString";
    };
    DagpasFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_onderneming_service__WEBPACK_IMPORTED_MODULE_5__["OndernemingService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
        { type: _klant_core_klant_service__WEBPACK_IMPORTED_MODULE_6__["KlantService"] },
        { type: _validators__WEBPACK_IMPORTED_MODULE_4__["ValidatorService"] }
    ]; };
    DagpasFormComponent.propDecorators = {
        selector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        klantOutput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        elektriciteitForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ["group",] }]
    };
    DagpasFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "mafo-dagpas-form",
            template: _raw_loader_dagpas_form_layout_html__WEBPACK_IMPORTED_MODULE_1___default.a
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_onderneming_service__WEBPACK_IMPORTED_MODULE_5__["OndernemingService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _klant_core_klant_service__WEBPACK_IMPORTED_MODULE_6__["KlantService"],
            _validators__WEBPACK_IMPORTED_MODULE_4__["ValidatorService"]])
    ], DagpasFormComponent);
    return DagpasFormComponent;
}());



/***/ }),

/***/ "86vR":
/*!*******************************************************!*\
  !*** ./ClientApp/app/markt/markt-beheer.component.ts ***!
  \*******************************************************/
/*! exports provided: MarktBeheerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarktBeheerComponent", function() { return MarktBeheerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_markt_beheer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/markt-beheer.component.html */ "xjQk");
/* harmony import */ var _raw_loader_html_markt_beheer_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_markt_beheer_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-modialog/plugins/bootstrap */ "e7Ax");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth */ "qec8");
/* harmony import */ var _componenten_datagrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componenten/datagrid */ "z4/g");
/* harmony import */ var _componenten_markt_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componenten/markt-select */ "3vM0");









var MarktBeheerComponent = /** @class */ (function () {
    function MarktBeheerComponent(marktService, router, toastr, route, modal, auth) {
        this.marktService = marktService;
        this.router = router;
        this.toastr = toastr;
        this.route = route;
        this.modal = modal;
        this.auth = auth;
        this.pageTitle = 'Markt beheer';
        this.gridOptions = {
            stripedRows: true,
            fields: [
                {
                    field: 'naam',
                    title: 'Naam',
                    sortable: true,
                    sort: _componenten_datagrid__WEBPACK_IMPORTED_MODULE_7__["SortOrder"].Ascending,
                },
                {
                    field: 'afkorting',
                    title: 'Afkorting',
                    sortable: true,
                },
            ],
        };
    }
    MarktBeheerComponent.prototype.fetchData = function (page) {
        var _this = this;
        if (!this.page)
            this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }
        this.marktService.getAll(this.page).subscribe(function (x) { return (_this.data = x); });
    };
    MarktBeheerComponent.prototype.rowClicked = function (row) {
        this.router.navigate(['markt', row.data.id]);
    };
    MarktBeheerComponent.prototype.searchMarkten = function ($event) {
        if (this.page) {
            this.page.page = 1;
            this.page['query'] = $event.value;
            this.fetchData(this.page);
        }
    };
    MarktBeheerComponent.prototype.delete = function (marktId) {
        var _this = this;
        this.marktService.delete(marktId).subscribe(function () {
            _this.fetchData(_this.page);
        }, function (error) {
            _this.toastr.warning('Deze markt kan niet verwijderd worden omdat er momenteel lopende aanvragen en / of abonnementen voor de markt zijn.', 'Markt');
        });
    };
    MarktBeheerComponent.prototype.showDeleteModal = function ($event) {
        var _this = this;
        this.modal
            .confirm()
            .title('Bevestig verwijderen')
            .body('Weet u zeker dat u deze markt wilt verwijderen?')
            .okBtn('verwijderen')
            .open()
            .result.catch() // catch error not related to the result (modal open...)
            .then(function (dialog) { return dialog.result; }) // dialog has more properties,lets just return the promise for a result.
            .then(function (x) { return _this.delete($event.id); }) // if were here ok was clicked.
            .catch(function (x) { }); // if were here cancel was clicked.
    };
    MarktBeheerComponent.prototype.ngOnInit = function () {
        this.security();
    };
    MarktBeheerComponent.prototype.security = function () {
        this.addMarkt = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_6__["Privilege"].Markt.Add);
        this.deleteMarkt = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_6__["Privilege"].Markt.Delete);
    };
    MarktBeheerComponent.ctorParameters = function () { return [
        { type: _componenten_markt_select__WEBPACK_IMPORTED_MODULE_8__["MarktService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"] },
        { type: _auth__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
    ]; };
    MarktBeheerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'mafo-app',
            template: _raw_loader_html_markt_beheer_component_html__WEBPACK_IMPORTED_MODULE_1___default.a,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_componenten_markt_select__WEBPACK_IMPORTED_MODULE_8__["MarktService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"],
            _auth__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], MarktBeheerComponent);
    return MarktBeheerComponent;
}());



/***/ }),

/***/ "C5lM":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/markt/html/kavel-detail.modal.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "﻿<div *ngIf=\"kavel\">\r\n    <form [formGroup]=\"kavelDetailForm\" ngNoForm autocomplete=\"off\">\r\n        <div class=\"modal-header\">\r\n            <button aria-label=\"Close\" class=\"close\" type=\"button\" (click)=\"dialog.close(false)\">\r\n                <span aria-hidden=\"true\">×</span>\r\n            </button>\r\n            <h3 class=\"modal-title\">Kavel details</h3>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n                <div *ngIf=\"context.hideKlant\">\r\n                    <div class=\"col-xs-12 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Oude naam</label>\r\n                            <div [ngClass]=\"{ 'has-error': kavelDetailForm.get('oudeNaam').invalid && kavelDetailForm.get('oudeNaam').dirty, 'has-success': kavelDetailForm.get('oudeNaam').valid && kavelDetailForm.get('oudeNaam').dirty, 'has-feedback': true }\">\r\n                                <input type=\"text\" class=\"form-control\" formControlName=\"oudeNaam\" />\r\n                            </div>\r\n                            <div *ngIf=\"kavelDetailForm.get('oudeNaam').dirty && !kavelDetailForm.get('oudeNaam').valid\">\r\n                                <p *ngIf=\"kavelDetailForm.get('oudeNaam').errors\" class=\"text-danger\">\r\n                                    {{formErrors.oudeNaam}}\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-md-6\">\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"!context.hideKlant\">\r\n                    <div class=\"col-xs-12 col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label>Oude naam</label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"oudeNaam\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-md-4\">\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-md-4\">\r\n                        <label>Klant</label>\r\n                        <br>\r\n                        <label>{{kavel.klant.firmanaam}}</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label>Latitude</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"latitude\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-12 col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label>Longitude</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"longitude\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12\">\r\n                    <div class=\"checkbox\">\r\n                        <!--<div *ngIf=\"kavel.mogelijkheidDieptekavel == true\">-->\r\n                        <label><input type=\"checkbox\" formControlName=\"mogelijkheidDieptekavel\" checked>Is dieptekavel mogelijk</label>\r\n                        <!--</div>-->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\" [disabled]=\"!kavelDetailForm.valid\">Kavel bewaren</button>\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"dialog.close(false)\">Annuleren</button>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "F5H3":
/*!****************************************************************!*\
  !*** ./ClientApp/app/markt/markt-boekje-overview.component.ts ***!
  \****************************************************************/
/*! exports provided: MarktBoekjeOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarktBoekjeOverviewComponent", function() { return MarktBoekjeOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_markt_boekje_overview_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/markt-boekje-overview.component.html */ "rWNy");
/* harmony import */ var _raw_loader_html_markt_boekje_overview_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_markt_boekje_overview_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _componenten_markt_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componenten/markt-select */ "3vM0");
/* harmony import */ var _componenten_datagrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componenten/datagrid */ "z4/g");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");






var MarktBoekjeOverviewComponent = /** @class */ (function () {
    function MarktBoekjeOverviewComponent(marktService, router, route) {
        this.marktService = marktService;
        this.router = router;
        this.route = route;
        this.pageTitle = "Marktboekje";
        this.gridOptions = {
            stripedRows: true,
            fields: [
                {
                    field: "naam",
                    title: "Naam",
                    sortable: true,
                    sort: _componenten_datagrid__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].Ascending,
                    width: "50%"
                },
                {
                    field: "afkorting",
                    title: "Afkorting",
                    sortable: true,
                    width: "50%"
                }
            ]
        };
    }
    MarktBoekjeOverviewComponent.prototype.fetchData = function (page) {
        var _this = this;
        if (!this.page)
            this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }
        this.marktService.getAll(this.page).subscribe(function (x) { return _this.data = x; });
    };
    MarktBoekjeOverviewComponent.prototype.rowClicked = function (row) {
        this.router.navigate([row.data.id], { relativeTo: this.route });
    };
    MarktBoekjeOverviewComponent.prototype.searchMarkten = function ($event) {
        if (this.page) {
            this.page.page = 1;
            this.page["query"] = $event.value;
            this.fetchData(this.page);
        }
    };
    MarktBoekjeOverviewComponent.ctorParameters = function () { return [
        { type: _componenten_markt_select__WEBPACK_IMPORTED_MODULE_3__["MarktService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    MarktBoekjeOverviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "mafo-app",
            template: _raw_loader_html_markt_boekje_overview_component_html__WEBPACK_IMPORTED_MODULE_1___default.a
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_componenten_markt_select__WEBPACK_IMPORTED_MODULE_3__["MarktService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], MarktBoekjeOverviewComponent);
    return MarktBoekjeOverviewComponent;
}());



/***/ }),

/***/ "XGPR":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/markt/html/markt-bewerken.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"markt\">\r\n    <form [formGroup]=\"bewerkMarktForm\" (ngSubmit)=\"updateMarkt()\" ngNoForm autocomplete=\"off\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n                <mafo-panel selector=\"title\" [collapsable]=\"false\">\r\n                    <mafo-panel-heading>\r\n                        <h3>\r\n                            <span class=\"fa fa-dot-circle-o\"></span>&nbsp;\r\n                            {{pageTitle}}\r\n                        </h3>\r\n                    </mafo-panel-heading>\r\n                    <mafo-panel-body>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <form-group label=\"Naam markt\">\r\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"naam\">\r\n                                    <help-block type=\"required\">Naam markt is verplicht</help-block>\r\n                                    <help-block type=\"max\">Naam markt kan max 50 characters bevatten</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <form-group label=\"Afkorting\">\r\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"afkorting\">\r\n                                    <help-block type=\"required\">Afkorting is verplicht</help-block>\r\n                                    <help-block type=\"max\">Afkorting kan max 11 characters bevatten</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                            <div class=\"col-md-2\">\r\n                                <form-group label=\"Aantal kavels\">\r\n                                    <quantity-selector formControlName=\"aantalKavels\"></quantity-selector>\r\n                                    <help-block type=\"rangevalidator\">Aantal kavels moet tussen 1 en 9999 liggen</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <form-group label=\"District\">\r\n                                    <code-id-select type=\"District\" formControlName=\"districtId\" (ngModelChange)=\"districtChanged($event)\"></code-id-select>\r\n                                    <help-block type=\"required\">District is verplicht</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <form-group label=\"Locatie\">\r\n                                    <location-districtid-select formControlName=\"locatieId\" [district]=\"bewerkMarktForm.get('districtId').value\"></location-districtid-select>\r\n                                    <help-block type=\"required\">Locatie is verplicht</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                        </div>\r\n                    </mafo-panel-body>\r\n                </mafo-panel>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n                <mafo-panel [collapsable]=\"false\" [open]=\"true\">\r\n                    <mafo-panel-heading>\r\n                        <h5>\r\n                            Agenda\r\n                        </h5>\r\n                    </mafo-panel-heading>\r\n                    <mafo-panel-body>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <form-group label=\"Startdatum\">\r\n                                    <datepicker formControlName=\"startdatum\"></datepicker>\r\n                                    <help-block type=\"required\">Startdatum is verplicht</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <form-group label=\"Einddatum\">\r\n                                    <datepicker formControlName=\"einddatum\"></datepicker>\r\n                                </form-group>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <form-group label=\"Herhaling\">\r\n                                    <code-id-select type=\"Interval\" formControlName=\"intervalId\"></code-id-select>\r\n                                    <help-block type=\"required\">Herhaling is verplicht</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <form-group label=\"Dag van de week\">\r\n                                    <code-id-select type=\"Dagvandeweek\" formControlName=\"dagVanDeWeekId\"></code-id-select>\r\n                                    <help-block type=\"required\">Dag van de week is verplicht</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                            <div class=\"col-md-2\">\r\n                                <form-group label=\"Van\">\r\n                                    <timepicker formControlName=\"beginuur\"></timepicker>\r\n                                    <help-block type=\"required\">Van is verplicht</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                            <div class=\"col-md-2\">\r\n                                <form-group label=\"Tot\">\r\n                                    <timepicker formControlName=\"einduur\"></timepicker>\r\n                                    <help-block type=\"required\">Tot is verplicht</help-block>\r\n                                </form-group>\r\n                            </div>\r\n                        </div>\r\n                    </mafo-panel-body>\r\n                </mafo-panel>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"markt.id\">\r\n            <div class=\"col-md-12\">\r\n                <mafo-panel selector=\"kavels\" [collapsable]=\"true\" [open]=\"true\">\r\n                    <mafo-panel-heading>\r\n                        <h5>\r\n                            Kavels\r\n                        </h5>\r\n                    </mafo-panel-heading>\r\n                    <mafo-panel-actions>\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"showKavelModal($event)\"><i class=\"fa fa-plus\"></i>&nbsp;Kavel toevoegen</button>\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"downloadKavelsCsv()\"><i class=\"glyphicon glyphicon-save\"></i>&nbsp;Exporteer</button>\r\n                        <label for=\"upload-kavels\" class=\"btn btn-primary\">\r\n                            <input style=\"display: none;\" type=\"file\" (change)=\"uploadKavelsCsv($event)\" placeholder=\"Selecteer en laad op\" name=\"upload-kavels\" id=\"upload-kavels\" accept=\".csv\" />\r\n                            <i class=\"fa fa-upload\"></i>\r\n                            <span class=\"hidden-mobile\">Importeer</span>\r\n                        </label>\r\n                    </mafo-panel-actions>\r\n                    <mafo-panel-body>\r\n                        <div class=\"row\" *ngIf=\"kavels\">\r\n                            <div class=\"col-xs-12\" (click)=\"showKavelModal($event)\">\r\n                                <a *ngFor=\"let kavel of kavels\" class=\"kavel-detail\" [attr.data-id]=\"kavel.id\">\r\n                                    <span class=\"badge large\" [ngClass]=\"setKavelColor(kavel)\" style=\"margin: 2px;\">{{kavel.oudeNaam}}</span>\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </mafo-panel-body>\r\n                </mafo-panel>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n                <div class=\"pull-right\">\r\n                    <button *ngIf=\"update | async\" class=\"btn btn-primary\" type=\"submit\">Markt bewaren</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "XvhZ":
/*!*********************************************************!*\
  !*** ./ClientApp/app/markt/markt-bewerken.component.ts ***!
  \*********************************************************/
/*! exports provided: MarktBewerkenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarktBewerkenComponent", function() { return MarktBewerkenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_markt_bewerken_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/markt-bewerken.component.html */ "XGPR");
/* harmony import */ var _raw_loader_html_markt_bewerken_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_markt_bewerken_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_modialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-modialog */ "ROqb");
/* harmony import */ var ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-modialog/plugins/bootstrap */ "e7Ax");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth */ "qec8");
/* harmony import */ var _componenten_markt_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../componenten/markt-select */ "3vM0");
/* harmony import */ var _componenten_validators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../componenten/validators */ "2/Vv");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services */ "mZsw");
/* harmony import */ var _shared_quantity_selector_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/quantity-selector.component */ "e7Ub");
/* harmony import */ var _kavel_detail_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./kavel-detail.modal.component */ "5pmh");














var MarktBewerkenComponent = /** @class */ (function () {
    function MarktBewerkenComponent(marktService, kavelService, fb, route, modal, viewContainerRef, auth, toastr, validationService, router) {
        this.marktService = marktService;
        this.kavelService = kavelService;
        this.fb = fb;
        this.route = route;
        this.modal = modal;
        this.viewContainerRef = viewContainerRef;
        this.auth = auth;
        this.toastr = toastr;
        this.validationService = validationService;
        this.router = router;
        this.pageTitle = 'Markt bewerken';
        this.today = new Date(Date.now());
        this.page = {
            page: 1,
            pageSize: Number.MAX_SAFE_INTEGER,
        };
        this.document = {
            bestand: null,
        };
    }
    MarktBewerkenComponent.prototype.getKavels = function (id) {
        var _this = this;
        this.kavelService.getAllKavelsForMarktOverview(id).subscribe(function (kavels) {
            _this.kavels = kavels;
            _this.kavels.sort(function (a, b) {
                return a.oudeNaam > b.oudeNaam ? 1 : b.oudeNaam > a.oudeNaam ? -1 : 0;
            });
        }, function (error) { return (_this.errorMessage = error); });
    };
    MarktBewerkenComponent.prototype.downloadKavelsCsv = function () {
        this.kavelService.downloadKavels(this.markt.id, false);
    };
    MarktBewerkenComponent.prototype.uploadKavelsCsv = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var fileContent_1;
            var reader = new FileReader();
            reader.onload = function (e) {
                var binaryString = e.target.result;
                fileContent_1 = btoa(binaryString);
                _this.document.bestand = fileContent_1;
            };
            reader.onloadend = function (e) {
                _this.kavelService.uploadKavels(_this.markt.id, _this.document).subscribe(function (x) {
                    _this.toastr.success('Kavels toegevoegd', 'Kavels');
                    _this.getKavels(_this.markt.id);
                }, function (x) {
                    _this.toastr.error('Kon niet alle kavels toevoegen', 'Kavels');
                    if (x.ExtraInfo) {
                        for (var xtra in x.ExtraInfo) {
                            _this.toastr.warning(xtra, x.ExtraInfo[xtra].join(','));
                        }
                    }
                }, function () { return _this.router.navigate(['markt', _this.markt.id]); });
            };
            reader.readAsBinaryString(file);
        }
        else {
            this.toastr.error('Geen bestand', 'Upload Kavels');
        }
    };
    MarktBewerkenComponent.prototype.updateMarkt = function () {
        var _this = this;
        if (!this.bewerkMarktForm.valid) {
            this.validationService.valideFormGroup(this.bewerkMarktForm);
            this.toastr.warning('Sommige velden bevatten geen geldige waarden', 'Ongeldig formulier');
            return;
        }
        this.marktService.save(this.bewerkMarktForm.value).subscribe(function (markt) {
            _this.toastr.success(_this.markt.id > 0
                ? 'Markt succesvol geupdated'
                : 'Markt succesvol aangemaakt');
            _this.router.navigate(['markt', markt.id]);
            _this.validationService.resetValidation(_this.bewerkMarktForm);
        }, function (x) {
            _this.toastr.error('Kon markt niet bewaren.', 'Markt');
            if (x.ExtraInfo) {
                for (var xtra in x.ExtraInfo) {
                    _this.toastr.warning(xtra, x.ExtraInfo[xtra].join(','));
                }
            }
        });
    };
    MarktBewerkenComponent.prototype.setKavelColor = function (kavel) {
        return {
            'bg-green': kavel.kavelStatus === _services__WEBPACK_IMPORTED_MODULE_11__["KavelStatusEnum"].Vrij,
            'bg-red': kavel.kavelStatus === _services__WEBPACK_IMPORTED_MODULE_11__["KavelStatusEnum"].Bezet ||
                kavel.kavelStatus === _services__WEBPACK_IMPORTED_MODULE_11__["KavelStatusEnum"].InOverdracht,
            'bg-orange': kavel.kavelStatus === _services__WEBPACK_IMPORTED_MODULE_11__["KavelStatusEnum"].Gereserveerd,
            'bg-orange-striped': kavel.kavelStatus === _services__WEBPACK_IMPORTED_MODULE_11__["KavelStatusEnum"].BezetGereserveerd,
            'bg-green-striped': kavel.kavelStatus === _services__WEBPACK_IMPORTED_MODULE_11__["KavelStatusEnum"].BezetTeBedelen,
        };
    };
    MarktBewerkenComponent.prototype.ngOnInit = function () {
        this.markt = this.route.snapshot.data['markt'] || {
            id: 0,
            aantalKavels: 0,
            naam: '',
            afkorting: '',
            startDatum: this.today,
            eindDatum: null,
            beginUur: '',
            eindUur: '',
            districtId: null,
            locatieId: null,
            dagVanDeWeekId: null,
            intervalId: null,
        };
        this.buildForm();
        this.security();
        if (this.markt.id > 0)
            this.getKavels(this.markt.id);
    };
    MarktBewerkenComponent.prototype.buildForm = function () {
        this.bewerkMarktForm = this.fb.group({
            id: [this.markt.id],
            naam: [this.markt.naam, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]],
            afkorting: [
                this.markt.afkorting,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(11)],
            ],
            aantalKavels: [this.markt.aantalKavels, [Object(_shared_quantity_selector_component__WEBPACK_IMPORTED_MODULE_12__["rangeValidator"])(1, 9999)]],
            districtId: [this.markt.districtId, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            locatieId: [
                { value: this.markt.locatieId, disabled: !this.markt.districtId },
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ],
            startdatum: [this.markt.startDatum, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            einddatum: [this.markt.eindDatum],
            beginuur: [this.markt.beginUur, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            einduur: [this.markt.eindUur, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            dagVanDeWeekId: [this.markt.dagVanDeWeekId, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            intervalId: [this.markt.intervalId, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    };
    MarktBewerkenComponent.prototype.districtChanged = function (value) {
        var location = this.bewerkMarktForm.get('locatieId');
        if (value)
            location.enable();
        else
            location.disable();
        location.reset();
    };
    MarktBewerkenComponent.prototype.showKavelModal = function ($event) {
        var _this = this;
        $event.preventDefault();
        $event.stopPropagation();
        var link = $event.target.closest('button');
        if (!link)
            return;
        var kavelId = Number(link.getAttribute('data-id'));
        if (isNaN(kavelId)) {
            kavelId = 0;
        }
        this.modal
            .open(_kavel_detail_modal_component__WEBPACK_IMPORTED_MODULE_13__["KavelDetailModal"], Object(ngx_modialog__WEBPACK_IMPORTED_MODULE_5__["overlayConfigFactory"])(new _kavel_detail_modal_component__WEBPACK_IMPORTED_MODULE_13__["KavelDetailModalContext"](kavelId, this.markt.id, this.hideKlant(kavelId)), _kavel_detail_modal_component__WEBPACK_IMPORTED_MODULE_13__["KavelDetailModalContext"], {
            viewContainer: this.viewContainerRef,
        }))
            .result.then(function (dialogRef) {
            return dialogRef.result.then(function (result) {
                if (result)
                    _this.getKavels(_this.markt.id);
            });
        });
    };
    MarktBewerkenComponent.prototype.hideKlant = function (kavelId) {
        return kavelId === 0
            ? true
            : this.kavels.find(function (x) { return x.id == kavelId; }).kavelStatus ===
                _services__WEBPACK_IMPORTED_MODULE_11__["KavelStatusEnum"].Vrij;
    };
    MarktBewerkenComponent.prototype.security = function () {
        this.update = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_8__["Privilege"].Markt.Update);
    };
    MarktBewerkenComponent.ctorParameters = function () { return [
        { type: _componenten_markt_select__WEBPACK_IMPORTED_MODULE_9__["MarktService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_11__["KavelService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] },
        { type: _auth__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
        { type: _componenten_validators__WEBPACK_IMPORTED_MODULE_10__["ValidatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    MarktBewerkenComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            providers: [ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"]],
            selector: 'mafo-app',
            template: _raw_loader_html_markt_bewerken_component_html__WEBPACK_IMPORTED_MODULE_1___default.a,
            styles: ["\n      .badge,\n      .kavel-detail {\n        cursor: pointer;\n        text-decoration: none;\n      }\n    "]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_componenten_markt_select__WEBPACK_IMPORTED_MODULE_9__["MarktService"],
            _services__WEBPACK_IMPORTED_MODULE_11__["KavelService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"],
            _auth__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _componenten_validators__WEBPACK_IMPORTED_MODULE_10__["ValidatorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MarktBewerkenComponent);
    return MarktBewerkenComponent;
}());



/***/ }),

/***/ "jBRe":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/componenten/dagpas-form/dagpas-form.layout.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<klant-detail [selectType]=\"false\" [klant]=\"klant\"></klant-detail>\r\n\r\n<form [formGroup]=\"elektriciteitForm\" ngNoForm autocomplete=\"off\" (ngSubmit)=\"onKlantSubmit()\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-md-4\">\r\n            <form-group label=\"Elektriciteit\">\r\n                <code-select type=\"ElektriciteitDagpas\" formControlName=\"elektriciteitCode\"></code-select>\r\n                <help-block type=\"required\">Elektriciteit is verplicht</help-block>\r\n            </form-group>\r\n        </div>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "jOGI":
/*!*********************************************************!*\
  !*** ./ClientApp/app/markt/markt.module.definitions.ts ***!
  \*********************************************************/
/*! exports provided: marktComponents, marktDirectives, marktPipes, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marktComponents", function() { return marktComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marktDirectives", function() { return marktDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marktPipes", function() { return marktPipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _markt_beheer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markt-beheer.component */ "86vR");
/* harmony import */ var _markt_boekje_overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markt-boekje-overview.component */ "F5H3");
/* harmony import */ var _markt_boekje_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markt-boekje-detail.component */ "/nyj");
/* harmony import */ var _markt_bewerken_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markt-bewerken.component */ "XvhZ");
/* harmony import */ var _markt_resolve__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markt.resolve */ "VRMf");
/* harmony import */ var _kavel_detail_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kavel-detail.modal.component */ "5pmh");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth */ "qec8");







var marktComponents = [
    _markt_beheer_component__WEBPACK_IMPORTED_MODULE_0__["MarktBeheerComponent"],
    _markt_boekje_overview_component__WEBPACK_IMPORTED_MODULE_1__["MarktBoekjeOverviewComponent"],
    _markt_boekje_detail_component__WEBPACK_IMPORTED_MODULE_2__["MarktBoekjeDetailComponent"],
    _markt_bewerken_component__WEBPACK_IMPORTED_MODULE_3__["MarktBewerkenComponent"],
    _kavel_detail_modal_component__WEBPACK_IMPORTED_MODULE_5__["KavelDetailModal"]
];
var marktDirectives = [];
var marktPipes = [];
var routes = [
    {
        path: "beheer",
        component: _markt_beheer_component__WEBPACK_IMPORTED_MODULE_0__["MarktBeheerComponent"],
        canActivate: [_auth__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        data: {
            privileges: [_auth__WEBPACK_IMPORTED_MODULE_6__["Privilege"].Markt.GetAllFilteredAndPaged]
        }
    },
    {
        path: "boekje",
        children: [
            {
                path: "",
                component: _markt_boekje_overview_component__WEBPACK_IMPORTED_MODULE_1__["MarktBoekjeOverviewComponent"],
                canActivate: [_auth__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
                data: {
                    privileges: [_auth__WEBPACK_IMPORTED_MODULE_6__["Privilege"].Markt.GetMarktBoekjes]
                }
            },
            {
                path: ":marktId",
                component: _markt_boekje_detail_component__WEBPACK_IMPORTED_MODULE_2__["MarktBoekjeDetailComponent"],
                canActivate: [_auth__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
                data: {
                    privileges: [_auth__WEBPACK_IMPORTED_MODULE_6__["Privilege"].Markt.Get]
                }
            }
        ]
    },
    {
        path: "nieuw",
        component: _markt_bewerken_component__WEBPACK_IMPORTED_MODULE_3__["MarktBewerkenComponent"],
        canActivate: [_auth__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        data: {
            privileges: [_auth__WEBPACK_IMPORTED_MODULE_6__["Privilege"].Markt.Add]
        }
    },
    {
        path: ":id",
        component: _markt_bewerken_component__WEBPACK_IMPORTED_MODULE_3__["MarktBewerkenComponent"],
        resolve: {
            markt: _markt_resolve__WEBPACK_IMPORTED_MODULE_4__["MarktResolve"]
        },
        canActivate: [_auth__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        data: {
            privileges: [_auth__WEBPACK_IMPORTED_MODULE_6__["Privilege"].Markt.Get]
        }
    },
    {
        path: "dagpassen",
        component: _markt_boekje_detail_component__WEBPACK_IMPORTED_MODULE_2__["MarktBoekjeDetailComponent"],
        resolve: {
            markt: _markt_resolve__WEBPACK_IMPORTED_MODULE_4__["MarktResolve"]
        },
        canActivate: [_auth__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        data: {
            privileges: [_auth__WEBPACK_IMPORTED_MODULE_6__["Privilege"].Markt.GetAllFilteredAndPaged]
        }
    }
];


/***/ }),

/***/ "nWWF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/markt/html/markt-boekje-detail.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <mafo-panel selector=\"kavels\" [collapsable]=\"false\" [open]=\"dagpasDisplayed\">\r\n            <mafo-panel-heading>\r\n                <h5 class=\"header-left\">\r\n                    <markt-display [value]=\"marktId\"></markt-display>\r\n                </h5>\r\n            </mafo-panel-heading>\r\n            <!--<mafo-panel-actions>\r\n                <button class=\"btn btn-primary\" (click)=\"createDagpas()\">Dagpas registreren</button>\r\n            </mafo-panel-actions>-->\r\n            <mafo-panel-body>\r\n                <klant-detail [klant]=\"klant\" (onCreated)=\"klantCreated($event)\" [limitedView]=\"true\"></klant-detail>\r\n            </mafo-panel-body>\r\n        </mafo-panel>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <mafo-panel selector=\"kavels\" [collapsable]=\"false\" [open]=\"true\">\r\n            <mafo-panel-heading>\r\n                <h5>Kavels</h5>\r\n            </mafo-panel-heading>\r\n            <mafo-panel-actions>\r\n                <button class=\"btn btn-primary\" (click)=\"downloadKavelsCsv()\"><i class=\"glyphicon glyphicon-save\"></i></button>\r\n                <button class=\"btn btn-primary\" (click)=\"showLegend()\"><i class=\"fa fa-info-circle\"></i></button>\r\n                <button class=\"btn btn-primary\" (click)=\"showLegend()\"><i class=\"fa fa-filter\"></i></button>\r\n            </mafo-panel-actions>\r\n            <mafo-panel-body>\r\n                <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                    <!-- <div class=\"col-xs-12\" (touchstart)=\"mousedown($event)\" (mousedown)=\"mousedown($event)\" (touchend)=\"mouseup($event)\" (mouseup)=\"mouseup($event)\"> -->\r\n                        <ng-container *ngFor=\"let kavel of kavels\">\r\n                            <a class=\"kavel-detail\" *ngIf=\"!kavel.hidden\" [attr.data-id]=\"kavel.id\" (click)=\"showKavelDetail(kavel.id)\">\r\n                                <span class=\"badge large\" [ngClass]=\"setKavelColor(kavel)\">{{kavel.oudeNaam}}</span>\r\n                            </a>\r\n                        </ng-container>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" [hidden]=\"selectedKavels.length==0\">\r\n                    <div class=\"col-xs-12\" (touchstart)=\"mousedown($event)\" (mousedown)=\"mousedown($event)\" (touchend)=\"mouseup($event)\" (mouseup)=\"mouseup($event)\">\r\n                        <label class=\"control-label\">Geselecteerde kavels</label>\r\n                        <p>\r\n                            <ng-container *ngFor=\"let kavel of selectedKavels\">\r\n                                <a *ngIf=\"!kavel.hidden\" class=\"kavel-detail\" [attr.data-id]=\"kavel.id\">\r\n                                    <span class=\"badge large\" [ngClass]=\"setKavelColor(kavel)\">{{kavel.oudeNaam}}</span>\r\n                                </a>\r\n                            </ng-container>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" [hidden]=\"selectedKavels.length==0\">\r\n                    <div class=\"col-xs-12 col-md-4\">\r\n                        <form [formGroup]=\"elektriciteitForm\" ngNoForm autocomplete=\"off\" (ngSubmit)=\"onKlantSubmit()\">\r\n                            <form-group label=\"Elektriciteit\">\r\n                                <code-select type=\"ElektriciteitDagpas\" formControlName=\"elektriciteitCode\"></code-select>\r\n                                <help-block type=\"required\">Elektriciteit is verplicht</help-block>\r\n                            </form-group>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" [hidden]=\"selectedKavels.length==0\">\r\n                    <div class=\"col-xs-12\">\r\n                        <div class=\"pull-right\">\r\n\r\n                            <button class=\"btn btn-primary\" type=\"submit\" (click)=\"confirmKavels()\">Volgende</button>\r\n                            <!--  <button class=\"btn btn-primary\" type=\"submit\" (click)=\"saveDagpas()\">Dagpas bewaren</button>-->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mafo-panel-body>\r\n        </mafo-panel>\r\n    </div>\r\n</div>\r\n<!--Tooltip-->\r\n<div id=\"marktboekje-kavel-tooltip\" class=\"body-content\" [ngClass]=\"{'slide' : tooltipDisplayed }\" *ngIf=\"kavel && kavel.klant\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-1\">\r\n            <button class=\"btn btn-primary\" (click)=\"hideTooltip()\">\r\n                <i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>\r\n            </button>\r\n        </div>\r\n        <div class=\"col-xs-11\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-3\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\">Firmanaam</label>\r\n                        <p class=\"form-control-static\">{{kavel.klant.firmanaam}}</p>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\">GSM</label>\r\n                        <p class=\"form-control-static\">{{kavel.klant.telefoon | nullSafe}}</p>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\">Elektriciteit</label>\r\n                        <p class=\"form-control-static\">{{kavel.abonnement.elektriciteit.omschrijving | nullSafe}}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-3\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\">Hoofd contactpersoon</label>\r\n                        <p class=\"form-control-static\">{{kavel.klant.contactPersoon}}</p>\r\n                    </div>\r\n                    <div class=\"form-group\" *ngIf=\"kavel && kavel.abonnementStatus\">\r\n                        <label class=\"control-label\">Status</label>\r\n                        <p class=\"form-control-static\">\r\n                            <code-display [type]=\"codeType.Abonnementstatus\" [value]=\"kavel.abonnementStatus.code\"></code-display>\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"form-group\" *ngIf=\"kavel.abonnementOvernemer\">\r\n                        <label class=\"control-label\">Overnemener Firmanaam</label>\r\n                        <p class=\"form-control-static\">\r\n                            {{kavel.abonnementOvernemer.firmanaam}}\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-3\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\">Ondernemingsnummer</label>\r\n                        <p class=\"form-control-static\">{{kavel.klant.ondernemingsnr}}</p>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\">Kavels</label><br /><p>\r\n                            <ng-container *ngFor=\"let kavel of kavel.abonnement.kavels\">\r\n                                <span *ngIf=\"!kavel.hidden\">{{kavel.oudeNaam}}</span>\r\n                            </ng-container>\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"form-group\" *ngIf=\"kavel.abonnementOvernemer\">\r\n                        <label class=\"control-label\">Overnemer Ondernemingsnummer</label>\r\n                        <p class=\"form-control-static\">{{kavel.abonnementOvernemer.ondernemingsNr}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--Detail-->\r\n<div id=\"marktboekje-kavel-detail\" class=\"body-content right-slider\" [ngClass]=\"{'slide' : detailDisplayed }\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <button class=\"btn btn-primary\" (click)=\"hideDetail()\">\r\n                <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <br />\r\n            <br />\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"kavel\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n                <mafo-panel selector=\"kavel\" [collapsable]=\"false\" [open]=\"true\">\r\n                    <mafo-panel-heading>\r\n                        <h5>\r\n                            Kavel details\r\n                        </h5>\r\n                    </mafo-panel-heading>\r\n                    <mafo-panel-body>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Kavelnummer</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.oudeNaam}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Kavelstatus</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{toDisplayFormat(kavel.kavelStatus)}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Dieptekavel mogelijk</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.mogelijkheidDieptekavel ? \"Ja\" : \"Nee\"}}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </mafo-panel-body>\r\n                </mafo-panel>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"kavel && kavel.abonnement\">\r\n            <div class=\"col-xs-12\">\r\n                <mafo-panel selector=\"abonnement\" [collapsable]=\"true\" [open]=\"true\">\r\n                    <mafo-panel-heading>\r\n                        <h5>\r\n                            Abonnement\r\n                        </h5>\r\n                    </mafo-panel-heading>\r\n                    <mafo-panel-body>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Firmanaam</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.abonnement.firmaNaam}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Ondernemingsnummer</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.abonnement.ondernemingsNummer}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">GSM</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.abonnement.telefoon | nullSafe}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Hoofd contactpersoon</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.abonnement.contactPersoon}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Begindatum</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.abonnement.beginDatum | date: 'dd/MM/yyyy' | nullSafe }}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Einddatum</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{ kavel.abonnement.eindDatum | date: 'dd/MM/yyyy' | nullSafe}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Status</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.abonnement.status | nullSafe}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Soort uitstalling</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.abonnement.uitstalling| nullSafe}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Verkoop</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.abonnement.verkoop | nullSafe}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Elektriciteit</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.abonnement.elektriciteit | nullSafe}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Kavels</label><br />\r\n                                    <ng-container *ngFor=\"let kavel of kavel.abonnement.abonnementKavels\">\r\n                                        <a *ngIf=\"!kavel.hidden\" class=\"kavel-detail\" [attr.data-id]=\"kavel.id\">\r\n                                            <span class=\"badge large\" [ngClass]=\"setKavelColor(kavel)\">{{kavel.oudeNaam}}</span>\r\n                                        </a>\r\n                                    </ng-container>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </mafo-panel-body>\r\n                </mafo-panel>\r\n            </div>\r\n        </div><div class=\"row\" *ngIf=\"kavel && kavel.abonnementOvernemer\">\r\n            <div class=\"col-xs-12\">\r\n                <mafo-panel selector=\"abonnement\" [collapsable]=\"true\" [open]=\"true\">\r\n                    <mafo-panel-heading>\r\n                        <h5>\r\n                            Abonnement Overnemer\r\n                        </h5>\r\n                    </mafo-panel-heading>\r\n                    <mafo-panel-body>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Firmanaam</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.abonnementOvernemer.firmanaam}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Ondernemingsnummer</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.abonnementOvernemer.ondernemingsNr}}</p>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Begindatum</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.abonnementOvernemer.begindatum | date: 'dd/MM/yyyy' | nullSafe }}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Einddatum</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{ kavel.abonnementOvernemer.einddatum | date: 'dd/MM/yyyy' | nullSafe}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Status</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.abonnementOvernemer.status.omschrijving | nullSafe}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Soort uitstalling</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.abonnementOvernemer.uitstalling.omschrijving | nullSafe}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Verkoop</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.abonnementOvernemer.verkoop.omschrijving | nullSafe}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Elektriciteit</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <p class=\"form-control-static\">{{kavel.abonnementOvernemer.elektriciteit.omschrijving | nullSafe}}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-4 control-label\">Kavels</label><br />\r\n                                    <ng-container *ngFor=\"let kavel of kavel.abonnementOvernemer.kavels\">\r\n                                        <a *ngIf=\"!kavel.hidden\" class=\"kavel-detail\" [attr.data-id]=\"kavel.id\">\r\n                                            <span class=\"badge large\" [ngClass]=\"setKavelColor(kavel)\">{{kavel.oudeNaam}}</span>\r\n                                        </a>\r\n                                    </ng-container>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </mafo-panel-body>\r\n                </mafo-panel>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"kavel && kavel.abonnement\">\r\n            <div class=\"col-xs-12\">\r\n                <mafo-panel selector=\"producten\" [collapsable]=\"true\" [open]=\"true\">\r\n                    <mafo-panel-heading>\r\n                        <h5>\r\n                            Producten\r\n                        </h5>\r\n                    </mafo-panel-heading>\r\n                    <mafo-panel-body>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12\">\r\n                                <div class=\"list-group\">\r\n                                    <div class=\"list-group-item\" *ngFor=\"let product of kavel.abonnement.producten\">\r\n                                        <h4 class=\"list-group-item-heading\">{{product.omschrijving}}</h4>\r\n                                        <p class=\"list-group-item-text\">{{product.detail}}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </mafo-panel-body>\r\n                </mafo-panel>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n                <mafo-panel selector=\"opmerkingen\" [collapsable]=\"true\" [open]=\"true\">\r\n                    <mafo-panel-heading>\r\n                        <h5>\r\n                            Opmerkingen\r\n                        </h5>\r\n                    </mafo-panel-heading>\r\n                    <mafo-panel-body>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12\">\r\n                                <div class=\"list-group\">\r\n                                    <div class=\"list-group-item\" *ngFor=\"let kavelOpmerking of kavel.opmerkingen\">\r\n                                        <span id=\"KavelOpmerking\">{{ (kavelOpmerking.createdOn | date: 'dd/MM/yyyy') || ( currentDate | date: 'dd/MM/yyyy' ) }}</span>\r\n                                        <p class=\"list-group-item-text\">{{kavelOpmerking.opmerking}}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12\">\r\n                                <div class=\"form-group\">\r\n                                    <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"opmerking\" name=\"opmerkingen\"></textarea>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12\">\r\n                                <div class=\"pull-right\">\r\n                                    <button class=\"btn btn-primary\" type=\"button\" (click)=\"updateKavelOpmerking($event)\">Opmerking toevoegen</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </mafo-panel-body>\r\n                </mafo-panel>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--Dagpas Kavels bevestigen-->\r\n<div id=\"marktboekje-dagpas-overview\" class=\"body-content right-slider\" [ngClass]=\"{'slide' : dagpasOverviewDisplayed }\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <button class=\"btn btn-primary\" (click)=\"hideDagpas()\">\r\n                <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <br />\r\n            <br />\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" [hidden]=\"!kavelConfirmDisplayed\">\r\n        <div class=\"col-xs-12\">\r\n            <mafo-panel selector=\"dagpasConfirm\" [collapsable]=\"true\" [open]=\"true\">\r\n                <mafo-panel-heading>\r\n                    <h5>\r\n                        Bezette kavels\r\n                    </h5>\r\n                </mafo-panel-heading>\r\n                <mafo-panel-body>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <p>Volgende kavels staan momenteel op een abonnement. Wilt u hier mee verder gaan?</p>\r\n                            <ng-container *ngFor=\"let kavel of subscribedKavels\">\r\n                                <a *ngIf=\"!kavel.hidden\" class=\"kavel-detail\" [attr.data-id]=\"kavel.id\">\r\n                                    <span class=\"badge large\" [ngClass]=\"setKavelColor(kavel)\">{{kavel.oudeNaam}}</span>\r\n                                </a>\r\n                            </ng-container>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" [hidden]=\"selectedKavels.length==0\">\r\n                        <div class=\"col-xs-12\">\r\n                            <div class=\"pull-right\">\r\n                                <button class=\"btn btn-primary\" type=\"button\" (click)=\"contiueSave()\">Bewaren</button>\r\n                                <button class=\"btn btn-warning\" type=\"button\" (click)=\"hideDagpas()\">Terug</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </mafo-panel-body>\r\n            </mafo-panel>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" [hidden]=\"kavelConfirmDisplayed\">\r\n        <div class=\"col-xs-12\">\r\n            <mafo-panel selector=\"abonnement\" [collapsable]=\"true\" [open]=\"true\">\r\n                <mafo-panel-heading>\r\n                    <h5>\r\n                        Overzicht\r\n                    </h5>\r\n                </mafo-panel-heading>\r\n                <mafo-panel-body>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-sm-4 control-label\">Geselecteerde kavels</label>\r\n                                <ng-container *ngFor=\"let kavel of selectedKavels\">\r\n                                    <a *ngIf=\"!kavel.hidden\" class=\"kavel-detail\" [attr.data-id]=\"kavel.id\">\r\n                                        <span class=\"badge large\" [ngClass]=\"setKavelColor(kavel)\">{{kavel.oudeNaam}}</span>\r\n                                    </a>\r\n                                </ng-container>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-sm-4 control-label\">Firmanaam</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <p class=\"form-control-static\">{{klant.firmanaam}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-sm-4 control-label\">Juridische entiteit</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <p class=\"form-control-static\">\r\n                                        <code-display [type]=\"codeType.Juridischeentiteit\" [value]=\"klant.juridischeEntiteit\"></code-display>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-sm-4 control-label\">Ondernemingsnummer</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <p class=\"form-control-static\">{{klant.ondernemingsnr}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-sm-4 control-label\">GSM</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <p class=\"form-control-static\">{{klant.telefoon | nullSafe}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <p>Test3</p>\r\n                                <label class=\"col-sm-4 control-label\">Hoofd contactpersoon</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <p class=\"form-control-static\">\r\n                                        {{klant.contactPersonen[0].voornaam | nullSafe}} {{klant.contactPersonen[0].naam | nullSafe}}\r\n                                        <br />Tel: {{klant.contactPersonen[0].gsm | nullSafe}}  GSM: {{klant.contactPersonen[0].telefoon | nullSafe}}\r\n                                        <br />Email: {{klant.contactPersonen[0].email | nullSafe}}\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-sm-4 control-label\">Omschrijving</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <p class=\"form-control-static\">\r\n                                        Dagpas <markt-display [value]=\"marktId\"></markt-display> voor kavels\r\n                                        <ng-container *ngFor=\"let kavel of selectedKavels\">\r\n                                            <span *ngIf=\"!kavel.hidden\" class=\"kavel-detail\" [attr.data-id]=\"kavel.id\">\r\n                                                {{kavel.oudeNaam}}\r\n                                            </span>\r\n                                        </ng-container>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-sm-4 control-label\">Totaal aantal kavels</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <ng-container *ngFor=\"let kavel of subscribedKavels\">\r\n                                        <a *ngIf=\"!kavel.hidden\" class=\"kavel-detail\" [attr.data-id]=\"kavel.id\">\r\n                                            <span class=\"badge large\" [ngClass]=\"setKavelColor(kavel)\">{{kavel.oudeNaam}}</span>\r\n                                        </a>\r\n                                    </ng-container>\r\n                                    <p class=\"form-control-static\">{{selectedKavels.length}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-sm-4 control-label\">Eenheidsprijs kavel dagpas zonder BTWs</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <p class=\"form-control-static\">{{eenheidsprijsKavel}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-sm-4 control-label\">BTW-voet kavels</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <p class=\"form-control-static\">21%</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-sm-4 control-label\">Totaalprijs kavels</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <p class=\"form-control-static\">{{totaalprijsKavel}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-sm-4 control-label\">Elektriciteit</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <p class=\"form-control-static\">\r\n                                        <code-display [type]=\"codeType.ElektriciteitDagpas\" [value]=\"klant.elektriciteit\"></code-display>\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-sm-4 control-label\">Eenheidsprijs elektriciteit dagpas zonder BTW</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <p class=\"form-control-static\">{{eenheidsprijsElektriciteit}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-sm-4 control-label\">BTW-voet elektriciteit </label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <p class=\"form-control-static\">6%</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-sm-4 control-label\">Totaalprijs elektriciteit dagpas met BTW</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <p class=\"form-control-static\">{{totaalprijsElektriciteit}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"col-sm-4 control-label\">Totaal te betalen</label>\r\n                                <div class=\"col-sm-8\">\r\n                                    <p class=\"form-control-static\">€{{this.totaalElektricteitNumber + this.totaalKavelNumber}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <p><input type=\"checkbox\" name=\"isPayed\" [(ngModel)]=\"isPayed\"> Deze betaling werd ontvangen</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <div class=\"pull-right\">\r\n                                <button class=\"btn btn-primary\" type=\"submit\" (click)=\"saveDagpas()\">Dagpas bewaren</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </mafo-panel-body>\r\n            </mafo-panel>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--Filter-->\r\n<div id=\"marktboekje-kavel-filter\" class=\"body-content right-slider\" [ngClass]=\"{'slide' : legendDisplayed }\">\r\n    <button class=\"btn btn-primary\" (click)=\"showLegend()\">\r\n        <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>\r\n    </button>\r\n    <h3>Filter</h3>\r\n    <div class=\"checkbox checkbox-list\">\r\n        <ul style=\"list-style: none;\" (change)=\"setFilter($event)\">\r\n            <li><label><input id=\"vrij\" type=\"checkbox\" [(ngModel)]=\"filter.vrij\">Vrij</label></li>\r\n            <li><label><input id=\"bezet\" type=\"checkbox\" [(ngModel)]=\"filter.bezet\">Bezet</label></li>\r\n            <li><label><input id=\"inoverdracht\" type=\"checkbox\" [(ngModel)]=\"filter.inoverdracht\">In overdracht</label></li>\r\n            <li><label><input id=\"gereserveerd\" type=\"checkbox\" [(ngModel)]=\"filter.gereserveerd\">Gereserveerd</label></li>\r\n            <li><label><input id=\"onbeschikbaar\" type=\"checkbox\" [(ngModel)]=\"filter.onbeschikbaar\">Onbeschikbaar</label></li>\r\n        </ul>\r\n    </div>\r\n    <hr />\r\n    <h3>Legend</h3>\r\n    <div class=\"checkbox checkbox-list\">\r\n        <ul>\r\n            <li class=\"badge bg-green\">Vrij</li>\r\n            <li class=\"badge bg-red\">Bezet</li>\r\n            <li class=\"badge bg-red\">In overdracht</li>\r\n            <li class=\"badge bg-orange\">Gereserveerd</li>\r\n            <li class=\"badge bg-grey\">Onbeschikbaar</li>\r\n            <li class=\"badge bg-green-striped\">Bezet-Te Bedelen</li>\r\n            <li class=\"badge bg-orange-striped\">Bezet-Gereserveerd</li>\r\n            <li class=\"badge bg-white badge-border\">Dieptekavel mogelijk</li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "o133":
/*!*********************************************************************!*\
  !*** ./ClientApp/app/componenten/dagpas-form/dagpas-form.module.ts ***!
  \*********************************************************************/
/*! exports provided: DagpasFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DagpasFormModule", function() { return DagpasFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _dagpas_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dagpas-form.component */ "6ilw");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search */ "su0z");
/* harmony import */ var _code_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../code-select */ "HW5m");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "tBJz");
/* harmony import */ var _klant_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../klant-core */ "TDej");









var DagpasFormModule = /** @class */ (function () {
    function DagpasFormModule() {
    }
    DagpasFormModule_1 = DagpasFormModule;
    DagpasFormModule.forRoot = function () {
        return {
            ngModule: DagpasFormModule_1,
        };
    };
    var DagpasFormModule_1;
    DagpasFormModule = DagpasFormModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dagpas_form_component__WEBPACK_IMPORTED_MODULE_4__["DagpasFormComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _search__WEBPACK_IMPORTED_MODULE_5__["SearchModule"],
                _code_select__WEBPACK_IMPORTED_MODULE_6__["CodeSelectModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _klant_core__WEBPACK_IMPORTED_MODULE_8__["KlantCoreModule"],
            ],
            exports: [_dagpas_form_component__WEBPACK_IMPORTED_MODULE_4__["DagpasFormComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], DagpasFormModule);
    return DagpasFormModule;
}());



/***/ }),

/***/ "rWNy":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/markt/html/markt-boekje-overview.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <mafo-panel selector=\"title\" [collapsable]=\"false\" [open]=\"true\">\r\n            <mafo-panel-heading>\r\n                <h3>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <span class=\"fa fa-dot-circle-o\" id=\"title-marktboekje\"></span>&nbsp;\r\n                            {{pageTitle}}\r\n                        </div>\r\n                    </div>\r\n                </h3>\r\n            </mafo-panel-heading>\r\n            <mafo-panel-body>\r\n                <div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\">\r\n                            <search (search)=\"searchMarkten($event)\"></search>\r\n                        </div>\r\n                    </div>\r\n                    <br />\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <dp-datagrid [data]=\"data\" [options]=\"gridOptions\" (fetchData)=\"fetchData($event)\" (rowClicked)=\"rowClicked($event)\">\r\n                            </dp-datagrid>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mafo-panel-body>\r\n        </mafo-panel>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "xKiN":
/*!*********************************************!*\
  !*** ./ClientApp/app/markt/markt.module.ts ***!
  \*********************************************/
/*! exports provided: MarktModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarktModule", function() { return MarktModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_service_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/service.module */ "1g0q");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "tBJz");
/* harmony import */ var _componenten_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componenten/search */ "su0z");
/* harmony import */ var _componenten_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componenten/validators */ "2/Vv");
/* harmony import */ var _componenten_code_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componenten/code-select */ "HW5m");
/* harmony import */ var _componenten_location_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componenten/location-select */ "Fgbf");
/* harmony import */ var _componenten_datetimepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../componenten/datetimepicker */ "RyTg");
/* harmony import */ var _componenten_markt_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../componenten/markt-select */ "3vM0");
/* harmony import */ var _componenten_dagpas_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../componenten/dagpas-form */ "4WcL");
/* harmony import */ var _markt_module_definitions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./markt.module.definitions */ "jOGI");
/* harmony import */ var _markt_resolve__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./markt.resolve */ "VRMf");
/* harmony import */ var _kavel_detail_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./kavel-detail.modal.component */ "5pmh");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services */ "mZsw");
/* harmony import */ var _componenten_klant_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../componenten/klant-core */ "TDej");
/* harmony import */ var _shared_helper_datetimehelper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/helper/datetimehelper */ "CS9P");


















var MarktModule = /** @class */ (function () {
    function MarktModule() {
    }
    MarktModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _services_service_module__WEBPACK_IMPORTED_MODULE_3__["ServiceModule"],
                _componenten_search__WEBPACK_IMPORTED_MODULE_5__["SearchModule"],
                _componenten_code_select__WEBPACK_IMPORTED_MODULE_7__["CodeSelectModule"],
                _componenten_location_select__WEBPACK_IMPORTED_MODULE_8__["LocatieSelectModule"],
                _componenten_validators__WEBPACK_IMPORTED_MODULE_6__["ValidatorsModule"],
                _componenten_datetimepicker__WEBPACK_IMPORTED_MODULE_9__["DateTimePickerhModule"],
                _componenten_markt_select__WEBPACK_IMPORTED_MODULE_10__["MarktSelectModule"],
                _componenten_dagpas_form__WEBPACK_IMPORTED_MODULE_11__["DagpasFormModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_markt_module_definitions__WEBPACK_IMPORTED_MODULE_12__["routes"])),
                _componenten_klant_core__WEBPACK_IMPORTED_MODULE_16__["KlantCoreModule"]
            ],
            providers: [
                _markt_resolve__WEBPACK_IMPORTED_MODULE_13__["MarktResolve"],
                _services__WEBPACK_IMPORTED_MODULE_15__["OndernemingService"],
                _componenten_klant_core__WEBPACK_IMPORTED_MODULE_16__["KlantService"],
                _services__WEBPACK_IMPORTED_MODULE_15__["DagpasService"],
                _services__WEBPACK_IMPORTED_MODULE_15__["TariefService"],
                _shared_helper_datetimehelper__WEBPACK_IMPORTED_MODULE_17__["DateTimeHelper"]
            ],
            declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_markt_module_definitions__WEBPACK_IMPORTED_MODULE_12__["marktComponents"]),
            entryComponents: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([_kavel_detail_modal_component__WEBPACK_IMPORTED_MODULE_14__["KavelDetailModal"]], _markt_module_definitions__WEBPACK_IMPORTED_MODULE_12__["marktComponents"]),
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MarktModule);
    return MarktModule;
}());



/***/ }),

/***/ "xjQk":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/markt/html/markt-beheer.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <mafo-panel selector=\"title\" [collapsable]=\"false\" [open]=\"true\">\r\n            <mafo-panel-heading>\r\n                <h3>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-10\">\r\n                            <span class=\"fa fa-dot-circle-o\" id=\"title-markt-beheer\"></span>&nbsp;\r\n                            {{pageTitle}}\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <a *ngIf=\"addMarkt | async\" id=\"new-markt-button\" class=\"btn btn-primary pull-right\" routerLink=\"/markt/nieuw\">\r\n                                <i class=\"fa fa-plus\"></i>\r\n                                <span class=\"hidden-sm hidden-xs\">&nbsp;&nbsp;Nieuwe markt</span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </h3>\r\n            </mafo-panel-heading>\r\n            <mafo-panel-body>\r\n                <div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\">\r\n                            <search (search)=\"searchMarkten($event)\"></search>\r\n                        </div>\r\n                    </div>\r\n                    <br />\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <dp-datagrid [data]=\"data\" [options]=\"gridOptions\" (fetchData)=\"fetchData($event)\" (rowClicked)=\"rowClicked($event)\">\r\n                                <ng-template #rowTemplate let-item=\"item\" let-index=\"index\">\r\n                                    <td>{{item.naam}}</td>\r\n                                    <td>{{item.afkorting}}</td>\r\n                                </ng-template>\r\n                                <ng-template #rowActions let-item=\"item\" let-index=\"index\">\r\n                                    <button *ngIf=\"deleteMarkt | async\" title=\"Verwijderen\" class=\"btn btn-danger btn-xs btn-delete\" [attr.data-id]=\"item.id\" (click)=\"showDeleteModal(item)\">\r\n                                        <i class=\"fa fa-trash-o\"></i>\r\n                                    </button>\r\n                                </ng-template>\r\n                            </dp-datagrid>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mafo-panel-body>\r\n        </mafo-panel>\r\n    </div>\r\n</div>"

/***/ })

}]);
//# sourceMappingURL=markt-markt-module.js.map