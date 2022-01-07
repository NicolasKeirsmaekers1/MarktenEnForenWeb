(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/4mO":
/*!************************************************************************!*\
  !*** ./ClientApp/app/componenten/bootstrap/form-checkbox.component.ts ***!
  \************************************************************************/
/*! exports provided: FormCheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCheckboxComponent", function() { return FormCheckboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _help_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help-block.component */ "D5KN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");




var FormCheckboxComponent = /** @class */ (function () {
    function FormCheckboxComponent(renderer) {
        var _this = this;
        this.renderer = renderer;
        this.renderMessages = function () {
            if (_this.messages && _this.messages.length > 0) {
                _this.messages.forEach(function (message) {
                    if (!message.type)
                        message.visible = true;
                    else if (_this.input.valid || _this.input.disabled)
                        message.visible = false;
                    else if (_this.input.errors)
                        message.visible = _this.input.errors[message.type.toLowerCase()] !== undefined;
                    else
                        message.visible = false;
                });
                _this.input.control.markAsTouched({ onlySelf: true });
            }
        };
    }
    FormCheckboxComponent.prototype.ngAfterContentInit = function () {
        if (this.input) {
            this._subscribtion = this.input.statusChanges.subscribe(this.renderMessages);
        }
        if (this.inputRef) {
            this.renderer.listen(this.inputRef.nativeElement, "blur", this.renderMessages);
        }
    };
    FormCheckboxComponent.prototype.displayValidation = function () {
        return {
            'has-error': this.messages && this.messages.length > 0 && this.input && this.input.invalid && (this.input.touched || this.input.dirty),
            'has-success': this.messages && this.messages.length > 0 && this.input && this.input.value && this.input.valid && this.input.dirty
        };
    };
    FormCheckboxComponent.prototype.ngOnDestroy = function () {
        if (this._subscribtion)
            this._subscribtion.unsubscribe();
    };
    FormCheckboxComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    FormCheckboxComponent.propDecorators = {
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        messages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [_help_block_component__WEBPACK_IMPORTED_MODULE_2__["HelpBlockComponent"],] }],
        input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], { static: false },] }],
        inputRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false },] }]
    };
    FormCheckboxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "form-checkbox",
            template: "\n<div class=\"checkbox\" [ngClass]=\"displayValidation()\"> \n    <label>\n        <ng-content></ng-content>\n        {{label}}\n    </label>\n</div>\n            "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], FormCheckboxComponent);
    return FormCheckboxComponent;
}());



/***/ }),

/***/ "/7ul":
/*!********************************************************************************!*\
  !*** ./ClientApp/app/componenten/document-upload/document-upload.component.ts ***!
  \********************************************************************************/
/*! exports provided: DocumentUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentUploadComponent", function() { return DocumentUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _document_upload_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document-upload.component.css */ "Dgqe");
/* harmony import */ var _raw_loader_document_upload_layout_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raw-loader!./document-upload.layout.html */ "P6tn");
/* harmony import */ var _raw_loader_document_upload_layout_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_document_upload_layout_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _document_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./document.service */ "Xd4x");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "EApP");






var DocumentUploadComponent = /** @class */ (function () {
    function DocumentUploadComponent(documentService, toastr) {
        this.documentService = documentService;
        this.toastr = toastr;
        this.required = false;
        this.abonnementStatusWijzigingId = null;
        this.componentsDisabled = false;
        this.callbackFn = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.document = {
            documentTypeCode: "OVERIGE",
            naam: "",
            fileExtension: "",
            bestand: null,
            klantId: 0,
            geldigVan: null,
            geldigTot: null
        };
    }
    DocumentUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.klantId && this.documentType) {
            this.documentService.get(this.documentType, this.klantId, this.abonnementStatusWijzigingId)
                .subscribe(function (document) {
                if (document) {
                    _this.document = document;
                }
            }, function (x) {
            });
        }
    };
    DocumentUploadComponent.prototype.fileChange = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file_1 = fileList[0];
            var fileContent_1;
            var reader = new FileReader();
            reader.onload = function (e) {
                var binaryString = e.target.result;
                fileContent_1 = btoa(binaryString);
                var fileName = file_1.name.substr(0, file_1.name.lastIndexOf("."));
                var fileExtension = file_1.name.substr(file_1.name.lastIndexOf("."), file_1.name.length);
                _this.document.naam = fileName;
                _this.document.fileExtension = fileExtension;
                _this.document.bestand = fileContent_1;
                _this.document.klantId = _this.klantId;
                _this.document.abonnementStatusWijzigingId = _this.abonnementStatusWijzigingId;
                _this.document.documentTypeCode = _this.documentType;
            };
            reader.onloadend = function (e) {
                _this.documentService.saveDocument(_this.document).subscribe(function (x) {
                    _this.document = x;
                    _this.callbackFn.emit();
                }, function (x) {
                    if (x.ExtraInfo) {
                        for (var xtra in x.ExtraInfo) {
                            _this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                        }
                    }
                    _this.toastr.error("Kon document niet opslaan.", "Documenten");
                });
            };
            reader.readAsBinaryString(file_1);
        }
    };
    DocumentUploadComponent.prototype.downloadFile = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.documentService.downloadDocument(this.documentType, this.klantId, this.abonnementStatusWijzigingId);
    };
    DocumentUploadComponent.ctorParameters = function () { return [
        { type: _document_service__WEBPACK_IMPORTED_MODULE_4__["DocumentService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    DocumentUploadComponent.propDecorators = {
        klantId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        documentType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        abonnementStatusWijzigingId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        componentsDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        callbackFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    DocumentUploadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'dp-document-upload',
            template: _raw_loader_document_upload_layout_html__WEBPACK_IMPORTED_MODULE_2___default.a,
            styles: [_document_upload_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_document_service__WEBPACK_IMPORTED_MODULE_4__["DocumentService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], DocumentUploadComponent);
    return DocumentUploadComponent;
}());



/***/ }),

/***/ "/UFU":
/*!*******************************************************************!*\
  !*** ./ClientApp/app/auth/user-display/user-display.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDisplayComponent", function() { return UserDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_display_component_layout_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-display.component.layout.html */ "VhTn");
/* harmony import */ var _raw_loader_user_display_component_layout_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_user_display_component_layout_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user_display_component_styling_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-display.component.styling.scss */ "fSIX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "1bQf");






var UserDisplayComponent = /** @class */ (function () {
    function UserDisplayComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    UserDisplayComponent.prototype.ngOnInit = function () {
        this.userProfile = this.authService.getUserProfile();
    };
    UserDisplayComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    UserDisplayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "user-display",
            template: _raw_loader_user_display_component_layout_html__WEBPACK_IMPORTED_MODULE_1___default.a,
            styles: [_user_display_component_styling_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserDisplayComponent);
    return UserDisplayComponent;
}());



/***/ }),

/***/ "/dxr":
/*!*********************************************************************!*\
  !*** ./ClientApp/app/componenten/bootstrap/form-radio.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormRadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRadioComponent", function() { return FormRadioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _help_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help-block.component */ "D5KN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");




var FormRadioComponent = /** @class */ (function () {
    function FormRadioComponent(renderer) {
        var _this = this;
        this.renderer = renderer;
        this.renderMessages = function () {
            if (_this.messages && _this.messages.length > 0) {
                _this.messages.forEach(function (message) {
                    if (!message.type)
                        message.visible = true;
                    else if (_this.input.valid || _this.input.disabled)
                        message.visible = false;
                    else if (_this.input.errors)
                        message.visible = _this.input.errors[message.type.toLowerCase()] !== undefined;
                    else
                        message.visible = false;
                });
                _this.input.control.markAsTouched({ onlySelf: true });
            }
        };
    }
    FormRadioComponent.prototype.ngAfterContentInit = function () {
        if (this.input) {
            this._subscribtion = this.input.statusChanges.subscribe(this.renderMessages);
        }
        if (this.inputRef) {
            this.renderer.listen(this.inputRef.nativeElement, "blur", this.renderMessages);
        }
    };
    FormRadioComponent.prototype.displayValidation = function () {
        return {
            'has-error': this.messages && this.messages.length > 0 && this.input && this.input.invalid && (this.input.touched || this.input.dirty),
            'has-success': this.messages && this.messages.length > 0 && this.input && this.input.value && this.input.valid && this.input.dirty
        };
    };
    FormRadioComponent.prototype.ngOnDestroy = function () {
        if (this._subscribtion)
            this._subscribtion.unsubscribe();
    };
    FormRadioComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    FormRadioComponent.propDecorators = {
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        messages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [_help_block_component__WEBPACK_IMPORTED_MODULE_2__["HelpBlockComponent"],] }],
        input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], { static: false },] }],
        inputRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false },] }]
    };
    FormRadioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "form-radio",
            template: "\n<div class=\"radio\" [ngClass]=\"displayValidation()\"> \n    <label>\n        <ng-content></ng-content>\n        {{label}}\n    </label>\n</div>\n            "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], FormRadioComponent);
    return FormRadioComponent;
}());



/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./ClientApp/main.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jonah\Projects\MarktenEnForenWeb\ClientApp\main.ts */"QqbR");


/***/ }),

/***/ "1bQf":
/*!********************************************!*\
  !*** ./ClientApp/app/auth/auth.service.ts ***!
  \********************************************/
/*! exports provided: AuthService, readToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readToken", function() { return readToken; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "tl5U");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "h+n0");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/of */ "neMA");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_add_operator_share__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/share */ "eZA3");
/* harmony import */ var rxjs_add_operator_share__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_share__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");









var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        var _this = this;
        this.http = http;
        this.PERMISSION_URL = '/permissions';
        this.TOKENREFRESH_URL = "/refresh";
        this.USERINFO_URL = "/me";
        this.LOGOUT_URL = "/logout";
        this.LOGIN_URL = "/login";
        this.hasPermission = function () {
            var privileges = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                privileges[_i] = arguments[_i];
            }
            return _this.getPermissions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (permissions) {
                var result = false;
                var _loop_1 = function (i) {
                    if (permissions.findIndex(function (item) { return item === privileges[i]; }) > -1) {
                        result = true;
                        return "break";
                    }
                };
                for (var i = 0; i < privileges.length; i++) {
                    var state_1 = _loop_1(i);
                    if (state_1 === "break")
                        break;
                }
                return result;
            }));
        };
        this.token = this.decodeToken();
    }
    AuthService.prototype.isLoggedIn = function () {
        return !helper.isTokenExpired(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('jwt')) || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('jwt') === null;
    };
    AuthService.prototype.refreshToken = function () {
        this.http.get(this.TOKENREFRESH_URL).subscribe(function (data) {
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set("jwt", data.jwt, null, "/", null);
        }, function (error) { return console.log('Token refresh error: ', error); });
    };
    AuthService.prototype.getPermissions = function () {
        var _this = this;
        if (this.permissions || sessionStorage["permissions"]) {
            // if `data` is available just return it as `Observable`
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.permissions || JSON.parse(sessionStorage["permissions"]));
        }
        else if (this.observable) {
            // if `this.observable` is set then the request is in progress
            // return the `Observable` for the ongoing request
            return this.observable;
        }
        else {
            // create the request, store the `Observable` for subsequent subscribers
            this.observable = this.http.get(this.PERMISSION_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (response) {
                // when the cached data is available we don't need the `Observable` reference anymore
                _this.observable = null;
                _this.permissions = response;
                sessionStorage.setItem('permissions', JSON.stringify(_this.permissions));
                return _this.permissions;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["share"])());
            return this.observable;
        }
    };
    AuthService.prototype.getUserProfile = function () {
        var _this = this;
        var userProfile = {
            firstName: "",
            lastName: "",
            fullName: "",
            userName: ""
        };
        this.http.get(this.USERINFO_URL)
            .subscribe(function (res) {
            userProfile.userName = res.userName,
                userProfile.firstName = res.firstName,
                userProfile.lastName = res.lastName,
                userProfile.fullName = res.firstName + " " + res.lastName;
        }, function (error) {
            console.log(error);
            _this.logout(userProfile);
        });
        return userProfile;
    };
    AuthService.prototype.logout = function (user) {
        this.http.post(this.LOGOUT_URL, user)
            .subscribe(function (res) {
            console.log(user.fullName + ' logged out.');
        }, function (err) { return console.log(user.fullName + ' failed to log out succesfully!', err); });
        this.http.get(this.LOGOUT_URL);
    };
    AuthService.prototype.login = function () {
        this.http.get(this.LOGIN_URL, { observe: 'response' })
            .subscribe(function (res) {
            var redirectLocation = res.headers.get('Location');
            window.location.href = redirectLocation;
        }, function (err) { return console.log('login redirect failed!', err); });
    };
    AuthService.prototype.decodeToken = function () {
        var token = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get("jwt");
        if (token == null)
            return null;
        return helper.decodeToken(token);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());

function readToken() {
    var token = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get("jwt");
    return token;
}


/***/ }),

/***/ "1g0q":
/*!**************************************************!*\
  !*** ./ClientApp/app/services/service.module.ts ***!
  \**************************************************/
/*! exports provided: ServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return ServiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _kavel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kavel.service */ "FVUk");
/* harmony import */ var _abonnement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abonnement.service */ "nzAR");




var ServiceModule = /** @class */ (function () {
    function ServiceModule() {
    }
    ServiceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [],
            exports: [],
            providers: [_kavel_service__WEBPACK_IMPORTED_MODULE_2__["KavelService"], _abonnement_service__WEBPACK_IMPORTED_MODULE_3__["AbonnementService"]]
        })
    ], ServiceModule);
    return ServiceModule;
}());



/***/ }),

/***/ "2CY5":
/*!**********************************************************************!*\
  !*** ./ClientApp/app/componenten/location-select/locatie.service.ts ***!
  \**********************************************************************/
/*! exports provided: LocatieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocatieService", function() { return LocatieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.settings */ "HRaI");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core */ "BxFb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-slim-loading-bar */ "k+RO");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6__);







var LocatieService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LocatieService, _super);
    function LocatieService(http, loader) {
        var _this = _super.call(this, http, loader) || this;
        _this.http = http;
        _this.loader = loader;
        _this.url = _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "locations";
        return _this;
    }
    LocatieService.prototype.getLocaties = function (clear) {
        var _this = this;
        if (clear === void 0) { clear = false; }
        this.loader.start();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]();
        params = params.set("page", "1");
        params = params.set("pageSize", Number.MAX_SAFE_INTEGER.toString());
        var obs = this.http.get(this.url, { headers: this.jsonHeaders, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
        if (clear) {
            this.clearCache("locatie");
        }
        return this.cacheResult("locatie", obs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            return result.embedded.resourceList;
        }));
    };
    LocatieService.prototype.save = function (payload) {
        var _this = this;
        this.loader.start();
        var action = payload.id == 0
            ? this.http.post(this.url, payload)
            : this.http.put(this.url, payload);
        return action.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    LocatieService.prototype.delete = function (itemId) {
        var _this = this;
        this.loader.start();
        return this.http.delete(this.url + "/" + itemId, { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    LocatieService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6__["SlimLoadingBarService"] }
    ]; };
    LocatieService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6__["SlimLoadingBarService"]])
    ], LocatieService);
    return LocatieService;
}(_core__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "3Jkk":
/*!***************************************************************!*\
  !*** ./ClientApp/app/componenten/datagrid/datagrid.models.ts ***!
  \***************************************************************/
/*! exports provided: SortOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortOrder", function() { return SortOrder; });
var SortOrder;
(function (SortOrder) {
    SortOrder[SortOrder["Unsorted"] = 0] = "Unsorted";
    SortOrder[SortOrder["Ascending"] = 1] = "Ascending";
    SortOrder[SortOrder["Descending"] = 2] = "Descending";
})(SortOrder || (SortOrder = {}));


/***/ }),

/***/ "3QgZ":
/*!***************************************************************!*\
  !*** ./ClientApp/app/componenten/datagrid/datagrid.module.ts ***!
  \***************************************************************/
/*! exports provided: DataGridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataGridModule", function() { return DataGridModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _datagrid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datagrid.component */ "kkJf");
/* harmony import */ var _fill_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fill.pipe */ "ttqV");
/* harmony import */ var _datagrid_row_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datagrid.row.actions */ "q4/o");







var DataGridModule = /** @class */ (function () {
    function DataGridModule() {
    }
    DataGridModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _datagrid_component__WEBPACK_IMPORTED_MODULE_4__["DataGrid"],
                _fill_pipe__WEBPACK_IMPORTED_MODULE_5__["Fill"],
                Object(_datagrid_row_actions__WEBPACK_IMPORTED_MODULE_6__["createTemplateRenderer"])("item", "index")
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            exports: [
                _datagrid_component__WEBPACK_IMPORTED_MODULE_4__["DataGrid"],
                _fill_pipe__WEBPACK_IMPORTED_MODULE_5__["Fill"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], DataGridModule);
    return DataGridModule;
}());



/***/ }),

/***/ "3vM0":
/*!*********************************************************!*\
  !*** ./ClientApp/app/componenten/markt-select/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _markt_select_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markt-select.module */ "gZ9n");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarktSelectModule", function() { return _markt_select_module__WEBPACK_IMPORTED_MODULE_0__["MarktSelectModule"]; });

/* harmony import */ var _markt_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markt-panel.component */ "ZQqU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarktPanelComponent", function() { return _markt_panel_component__WEBPACK_IMPORTED_MODULE_1__["MarktPanelComponent"]; });

/* harmony import */ var _markt_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markt-display.component */ "T+F7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarktDisplayComponent", function() { return _markt_display_component__WEBPACK_IMPORTED_MODULE_2__["MarktDisplayComponent"]; });

/* harmony import */ var _markt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markt.service */ "Yk/u");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarktService", function() { return _markt_service__WEBPACK_IMPORTED_MODULE_3__["MarktService"]; });

/* harmony import */ var _markt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markt */ "CED5");
/* harmony import */ var _markt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_markt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _markt__WEBPACK_IMPORTED_MODULE_4__) if(["default","MarktSelectModule","MarktPanelComponent","MarktDisplayComponent","MarktService"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _markt__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));







/***/ }),

/***/ "4b30":
/*!********************************************!*\
  !*** ./ClientApp/app/core/base.service.ts ***!
  \********************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.settings */ "HRaI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/of */ "neMA");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_observable_empty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/empty */ "ZiWu");
/* harmony import */ var rxjs_add_observable_empty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_observable_empty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_add_operator_share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/share */ "eZA3");
/* harmony import */ var rxjs_add_operator_share__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_share__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ "JEAp");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);








var BaseService = /** @class */ (function () {
    function BaseService(http, loader) {
        var _this = this;
        this.http = http;
        this.loader = loader;
        this.jsonHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json', "Accept": 'application/json' });
        this.jsonHalHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/hal+json', "Accept": 'application/json, application/hal+json' });
        this.csvHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Accept': 'text/csv' });
        this.apiEndpoint = _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].API_ENDPOINT;
        this.cache = {};
        this.observable = {};
        this.handleError = function (error) {
            _this.loader.complete();
            var body;
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                try {
                    body = error.error;
                }
                catch (e) {
                    body = error.status + " - " + error.statusText;
                }
            }
            else {
                body = "Er heeft zich een fout voorgedaan";
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(body);
        };
        loader.color = '#FFFFFF';
    }
    BaseService.prototype.registerDefaultParameters = function (query, params) {
        params = params || new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        if (query) {
            if (query.page)
                params = params.set("page", query.page.toString());
            if (query.pageSize)
                params = params.set("pageSize", query.pageSize.toString());
            if (query.filter)
                params = params.set("filter", query.filter);
            if (query.sort && query.sort.length > 0)
                params = params.set("sort", query.sort.join(","));
        }
        return params;
    };
    BaseService.prototype.clearCache = function (key) {
        var oKey = key.toLowerCase();
        this.cache[oKey] = null;
    };
    BaseService.prototype.cacheResult = function (key, observable) {
        var _this = this;
        var oKey = key.toLowerCase();
        if (!oKey)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["empty"])();
        if (this.cache[oKey]) {
            // if `data` is available just return it as `Observable`
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.cache[oKey]);
        }
        else if (this.observable[oKey]) {
            // if `this.observable` is set then the request is in progress
            // return the `Observable` for the ongoing request
            return this.observable[oKey];
        }
        else {
            // create the request, store the `Observable` for subsequent subscribers
            this.observable[oKey] = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                // when the cached data is available we don't need the `Observable` reference anymore
                delete _this.observable[oKey];
                _this.cache[oKey] = response;
                return _this.cache[oKey];
                // make it shared so more than one subscriber can get the result
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["empty"])(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
            return this.observable[oKey];
        }
    };
    BaseService.prototype.saveAsFile = function (response, fileMimeType, fileName) {
        try {
            var blob = new Blob([response.body], { type: fileMimeType });
            if (!fileName) {
                fileName = response.headers.get("content-disposition");
                fileName = fileName.substr(fileName.lastIndexOf("'") + 1);
            }
            file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"](blob, fileName);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(response);
        }
        catch (e) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])({ error: "We konden het bestand niet klaar zetten voor download" });
        }
    };
    return BaseService;
}());



/***/ }),

/***/ "5HQ3":
/*!**************************************************!*\
  !*** ./ClientApp/app/services/dagpas.service.ts ***!
  \**************************************************/
/*! exports provided: DagpasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DagpasService", function() { return DagpasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.settings */ "HRaI");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core */ "BxFb");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-slim-loading-bar */ "k+RO");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");







var DagpasService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DagpasService, _super);
    function DagpasService(_http, loader) {
        var _this = _super.call(this, _http, loader) || this;
        _this._http = _http;
        _this.loader = loader;
        _this.url = _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + 'daypasses';
        return _this;
    }
    DagpasService.prototype.getAll = function (query) {
        var _this = this;
        var params = this.registerDefaultParameters(query);
        if (query) {
            if (query.aanvraagstatuscode)
                params.set("query.aanvraagStatusCode", query.aanvraagstatuscode);
        }
        this.loader.start();
        var tmp = this._http.get(this.url, { headers: this.jsonHeaders, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }));
        return tmp;
    };
    DagpasService.prototype.get = function (id) {
        var _this = this;
        this.loader.start();
        return this.http.get(this.url + id, { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    DagpasService.prototype.save = function (marktId, klant, kavels) {
        var _this = this;
        this.loader.start();
        var dagpasAanvraag = { elektriciteitCode: klant.elektriciteit, klantId: klant.id, marktId: marktId, selectedKavels: kavels.map(function (a) { return a.id; }) };
        var toAdd = JSON.stringify(dagpasAanvraag);
        //  const toAdd = JSON.stringify(dagpas);
        //const action: Observable<Response> = dagpas.id && dagpas.id > 0
        //    ? this.http.put(this.url + dagpas.id, toAdd, { headers: this.jsonHeaders })
        //    : this.http.post(this.url, toAdd, { headers: this.jsonHeaders });
        var action = this.http.post(this.url, toAdd, { headers: this.jsonHeaders });
        return action.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    DagpasService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_5__["SlimLoadingBarService"] }
    ]; };
    DagpasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_5__["SlimLoadingBarService"]])
    ], DagpasService);
    return DagpasService;
}(_core__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "6uJJ":
/*!*******************************************!*\
  !*** ./ClientApp/app/core/core.module.ts ***!
  \*******************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _null_safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./null-safe.pipe */ "YQPj");
/* harmony import */ var _stringFormatPipe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stringFormatPipe.pipe */ "NpWj");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rxjs-operators */ "SiM4");





var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _null_safe_pipe__WEBPACK_IMPORTED_MODULE_2__["NullSafePipe"],
                _stringFormatPipe_pipe__WEBPACK_IMPORTED_MODULE_3__["StringFormatPipe"]
            ],
            exports: [
                _null_safe_pipe__WEBPACK_IMPORTED_MODULE_2__["NullSafePipe"],
                _stringFormatPipe_pipe__WEBPACK_IMPORTED_MODULE_3__["StringFormatPipe"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "7fRg":
/*!*********************************************************************************!*\
  !*** ./ClientApp/app/componenten/location-select/location-display.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LocationDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationDisplayComponent", function() { return LocationDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _locatie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locatie.service */ "2CY5");



var LocationDisplayComponent = /** @class */ (function () {
    function LocationDisplayComponent(locatieSvc) {
        this.locatieSvc = locatieSvc;
    }
    Object.defineProperty(LocationDisplayComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            var _this = this;
            if (this._value === val)
                return;
            this._value = val;
            this.locatieSvc.getLocaties().subscribe(function (codes) {
                var items = codes.filter(function (x) { return x.id === val; });
                _this.selected = items.length > 0 ? items[0].naam : "";
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    LocationDisplayComponent.ctorParameters = function () { return [
        { type: _locatie_service__WEBPACK_IMPORTED_MODULE_2__["LocatieService"] }
    ]; };
    LocationDisplayComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    LocationDisplayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "location-display",
            template: "\n            <span>{{selected}}</span>\n            "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_locatie_service__WEBPACK_IMPORTED_MODULE_2__["LocatieService"]])
    ], LocationDisplayComponent);
    return LocationDisplayComponent;
}());



/***/ }),

/***/ "8LSe":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/componenten/markt-select/html/markt-panel.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mafo-panel selector=\"markten\" [collapsable]=\"true\" [open]=\"open\">\r\n    <mafo-panel-heading><h5>MARKTEN</h5></mafo-panel-heading>\r\n    <mafo-panel-actions>\r\n        <button id=\"intake-add-markt-button\" class=\"btn btn-primary pull-right\" (click)=\"addMarkt()\" *ngIf=\"!componentsDisabled\" [attr.disabled]=\"disabled || max === aanvraagMarkten.length ? 'disabled' : null\">\r\n            <span class=\"fa fa-plus\"></span>\r\n            <span class=\"hidden-xs hidden-sm\">Toevoegen</span>\r\n        </button>\r\n    </mafo-panel-actions>\r\n    <mafo-panel-body>\r\n        <div *ngIf=\"marktenLoading\" [class.ajax-loading]=\"marktenLoading\" style=\"height:50px\"></div>\r\n        <ng-container *ngIf=\"markten.length > 0\">\r\n            <ng-container *ngFor=\"let markt of aanvraagMarkten.controls; let i=index; trackBy:i\">\r\n                <div class=\"row\" [formGroup]=\"markt\">\r\n                    <div class=\"col-md-6\">\r\n                        <form-group label=\"District\">\r\n                            <code-select type=\"District\" formControlName=\"districtCode\" (ngModelChange)=\"districtChanged(i, $event)\" [onBeforeRender]=\"filterDistricten\"></code-select>\r\n                        </form-group>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <form-group label=\"Markt\">\r\n                            <div *ngIf=\"componentsDisabled\">\r\n                                <select id=\"intake-markt-component-disabled-dropdown\" class=\"form-control\" formControlName=\"marktId\">\r\n                                    <option value=\"\">- maak uw keuze -</option>\r\n                                    <option [ngValue]=\"markt.id\" *ngFor=\"let markt of filterMarkten(markt.controls.districtCode.value, markt.controls.marktId.value)\">{{markt.naam}}</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"input-group\" *ngIf=\"!componentsDisabled\">\r\n                                <select id=\"intake-markt-dropdown\" class=\"form-control\" formControlName=\"marktId\" (change)=\"marktChanged(i, $event.target.value)\">\r\n                                    <option value=\"\">- maak uw keuze -</option>\r\n                                    <option [ngValue]=\"markt.id\" *ngFor=\"let markt of filterMarkten(markt.controls.districtCode.value, markt.controls.marktId.value)\">{{markt.naam}}</option>\r\n                                </select>\r\n                                <span class=\"input-group-btn\">\r\n                                    <button class=\"btn btn-default pull-right\" (click)=\"removeMarkt(i)\">\r\n                                        <span class=\"fa fa-remove fa-lg text-danger\"></span>\r\n                                    </button>\r\n                                </span>\r\n                            </div>\r\n                        </form-group>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <form-group label=\"Kavels\">\r\n                            <quantity-selector id=\"aantal-kavels-numeric-input\" [min]=\"1\" [max]=\"maxKavels\" formControlName=\"aantalKavels\" [readonly]=\"type === aanvraagSoort.RuilingCode || componentsDisabled\"></quantity-selector>\r\n                        </form-group>\r\n                    </div>\r\n                    <div class=\"col-md-6 form-group\">\r\n                        <label class=\"control-label\">Voorkeur</label>\r\n                        <input id=\"voorkeur-input\" class=\"form-control\" formControlName=\"voorkeur\" type=\"text\" placeholder=\"Uitleg voorkeur plaats (optioneel)\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" [formGroup]=\"markt\">\r\n                    <div class=\"col-md-12\" *ngIf=\"(type !== aanvraagSoort.NieuwePlaatsCode && type !== aanvraagSoort.PlaatsKwijtgeraaktCode) && !componentsDisabled \">\r\n                        <mafo-panel>\r\n                            <mafo-panel-heading>\r\n                                <h5>\r\n                                    Abonnementen\r\n                                </h5>\r\n                            </mafo-panel-heading>\r\n                            <mafo-panel-body>\r\n                                <div class=\"row\" (click)=\"selectAbonnement(abonnement, i, $event)\" *ngFor=\"let abonnement of abonnementen; let j = index\">\r\n                                    <div class=\"col-xs-12\">\r\n                                        <div class=\"well\">\r\n                                            <div class=\"badge\">Abonnement {{j+1}}</div>\r\n                                            <span class=\"badge large\" style=\"margin: 2px;\" *ngFor=\"let kavel of abonnement.kavels\" [ngClass]=\"{ 'bg-blue' : abonnement.id === markt.controls.abonnementId.value, 'bg-green' : abonnement.id !== markt.controls.abonnementId.value }\">\r\n                                                {{kavel.oudeNaam}}\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </mafo-panel-body>\r\n                        </mafo-panel>\r\n                    </div>\r\n                </div>\r\n                <hr *ngIf=\"i < aanvraagMarkten.controls.length - 1\" />\r\n            </ng-container>\r\n        </ng-container>\r\n    </mafo-panel-body>\r\n</mafo-panel>"

/***/ }),

/***/ "9RDi":
/*!*********************************************************************!*\
  !*** ./ClientApp/app/componenten/bootstrap/form-group.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupComponent", function() { return FormGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _help_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help-block.component */ "D5KN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");




var FormGroupComponent = /** @class */ (function () {
    function FormGroupComponent(renderer) {
        var _this = this;
        this.renderer = renderer;
        this.renderMessages = function () {
            if (_this.messages && _this.messages.length > 0) {
                _this.messages.forEach(function (message) {
                    if (!message.type)
                        message.visible = true;
                    else if (_this.input.valid || _this.input.disabled)
                        message.visible = false;
                    else if (_this.input.errors)
                        message.visible = _this.input.errors[message.type.toLowerCase()] !== undefined;
                    else
                        message.visible = false;
                });
                _this.input.control.markAsTouched({ onlySelf: true });
            }
        };
    }
    FormGroupComponent.prototype.ngAfterContentInit = function () {
        if (this.input) {
            this._subscribtion = this.input.statusChanges.subscribe(this.renderMessages);
        }
        if (this.inputRef) {
            this._listen = this.renderer.listen(this.inputRef.nativeElement, "blur", this.renderMessages);
        }
    };
    FormGroupComponent.prototype.ngAfterContentChecked = function () {
        // contentChild is updated after the content has been checked
        if (this.input && !this._subscribtion) {
            this._subscribtion = this.input.statusChanges.subscribe(this.renderMessages);
        }
        if (this.inputRef && !this._listen) {
            this._listen = this.renderer.listen(this.inputRef.nativeElement, "blur", this.renderMessages);
        }
    };
    FormGroupComponent.prototype.displayValidation = function () {
        var canValidate = this.input && this.input.control && (this.input.control.validator || this.input.control.asyncValidator);
        return {
            'has-error': canValidate && this.input.invalid && (this.input.touched || this.input.dirty),
            'has-success': canValidate && this.input.value && this.input.valid && this.input.dirty
        };
    };
    FormGroupComponent.prototype.ngOnDestroy = function () {
        if (this._subscribtion)
            this._subscribtion.unsubscribe();
    };
    FormGroupComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    FormGroupComponent.propDecorators = {
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        messages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [_help_block_component__WEBPACK_IMPORTED_MODULE_2__["HelpBlockComponent"],] }],
        input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], { static: false },] }],
        inputRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false },] }]
    };
    FormGroupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "form-group",
            template: "\n<div class=\"form-group\" [ngClass]=\"displayValidation()\"> \n    <label class=\"control-label\" *ngIf=\"label\">{{label}}</label>        \n    <ng-content></ng-content>\n</div>\n            "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], FormGroupComponent);
    return FormGroupComponent;
}());

//@Directive({
//    selector: 'input,textarea,select',
//    exportAs: 'inputdirective',
//    host: {
//        '[style.background-color]': '"yellow"'
//    }
//})
//export class InputDirective {
//    constructor(public element: ElementRef) {
//    }
//    ngOnChanges(): void {
//        // ngOnChanges() can observe only properties defined from @Input Decorator...
//    }
//}


/***/ }),

/***/ "Adg9":
/*!***************************************************************!*\
  !*** ./ClientApp/app/componenten/code-select/code.service.ts ***!
  \***************************************************************/
/*! exports provided: CodeService, CodeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeService", function() { return CodeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeType", function() { return CodeType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.settings */ "HRaI");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/of */ "neMA");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core */ "BxFb");
/* harmony import */ var rxjs_add_operator_share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/share */ "eZA3");
/* harmony import */ var rxjs_add_operator_share__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_share__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-slim-loading-bar */ "k+RO");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_8__);









var CodeService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CodeService, _super);
    function CodeService(http, loader) {
        var _this = _super.call(this, http, loader) || this;
        _this.http = http;
        _this.loader = loader;
        _this.url = _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "codes/";
        return _this;
    }
    CodeService.prototype.get = function (codeType, id) {
        return this.http.get(this.url + id + '?code=' + codeType, { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    CodeService.prototype.getCodes = function (codeType, showNonActive, clear) {
        if (showNonActive === void 0) { showNonActive = false; }
        if (clear === void 0) { clear = false; }
        var type = typeof codeType === "string" ? codeType : CodeType[codeType];
        var link = this.url + '?code=' + type + '&showNonActive=' + showNonActive;
        var obs = this.http.get(link).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response.response;
        }));
        if (clear) {
            this.clearCache(type);
        }
        return this.cacheResult(type, obs);
    };
    CodeService.prototype.save = function (codeType, payload, isPut) {
        var _this = this;
        if (isPut === void 0) { isPut = true; }
        this.loader.start();
        var action = isPut
            ? this.http.put(this.url + codeType, payload)
            : this.http.post(this.url + "?code=" + codeType, payload);
        if (isPut) {
            return action.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
        }
        else {
            return action.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
        }
    };
    CodeService.prototype.delete = function (code, codeId) {
        var _this = this;
        this.loader.start();
        return this.http.delete(this.url + '?code=' + code + "&codeId=" + codeId, { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    CodeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
        { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_8__["SlimLoadingBarService"] }
    ]; };
    CodeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_8__["SlimLoadingBarService"]])
    ], CodeService);
    return CodeService;
}(_core__WEBPACK_IMPORTED_MODULE_5__["BaseService"]));

var CodeType;
(function (CodeType) {
    CodeType[CodeType["Aanvraagsoort"] = 0] = "Aanvraagsoort";
    CodeType[CodeType["Aanvraagstatus"] = 1] = "Aanvraagstatus";
    CodeType[CodeType["Abonnementstatus"] = 2] = "Abonnementstatus";
    CodeType[CodeType["Abonnementstatuswijzigingaard"] = 3] = "Abonnementstatuswijzigingaard";
    CodeType[CodeType["Abonnementstatuswijzigingreden"] = 4] = "Abonnementstatuswijzigingreden";
    CodeType[CodeType["Dagvandeweek"] = 5] = "Dagvandeweek";
    CodeType[CodeType["Dieptekavelsapmateriaalcode"] = 6] = "Dieptekavelsapmateriaalcode";
    CodeType[CodeType["Dieptekavelstatus"] = 7] = "Dieptekavelstatus";
    CodeType[CodeType["District"] = 8] = "District";
    CodeType[CodeType["Documenttype"] = 9] = "Documenttype";
    CodeType[CodeType["Elektriciteit"] = 10] = "Elektriciteit";
    CodeType[CodeType["ElektriciteitDagpas"] = 11] = "ElektriciteitDagpas";
    CodeType[CodeType["Elektriciteitsapmateriaalcode"] = 12] = "Elektriciteitsapmateriaalcode";
    CodeType[CodeType["Factuuractietype"] = 13] = "Factuuractietype";
    CodeType[CodeType["Factuurtype"] = 14] = "Factuurtype";
    CodeType[CodeType["Interval"] = 15] = "Interval";
    CodeType[CodeType["Juridischeentiteit"] = 16] = "Juridischeentiteit";
    CodeType[CodeType["Kavelstatus"] = 17] = "Kavelstatus";
    CodeType[CodeType["Toepassinginstelling"] = 18] = "Toepassinginstelling";
    CodeType[CodeType["Uitstalling"] = 19] = "Uitstalling";
    CodeType[CodeType["Verkoop"] = 20] = "Verkoop";
})(CodeType || (CodeType = {}));


/***/ }),

/***/ "BxFb":
/*!*************************************!*\
  !*** ./ClientApp/app/core/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ "6uJJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"]; });

/* harmony import */ var _core_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.interfaces */ "UNn+");
/* harmony import */ var _core_interfaces__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_interfaces__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _core_interfaces__WEBPACK_IMPORTED_MODULE_1__) if(["default","CoreModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _core_interfaces__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "4b30");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]; });

/* harmony import */ var _null_safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./null-safe.pipe */ "YQPj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NullSafePipe", function() { return _null_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["NullSafePipe"]; });

/* harmony import */ var _stringFormatPipe_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stringFormatPipe.pipe */ "NpWj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringFormatPipe", function() { return _stringFormatPipe_pipe__WEBPACK_IMPORTED_MODULE_4__["StringFormatPipe"]; });

/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rxjs-operators */ "SiM4");
/* empty/unused harmony star reexport *//* harmony import */ var _constants_applicationConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/applicationConstants */ "K7w+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationConstants", function() { return _constants_applicationConstants__WEBPACK_IMPORTED_MODULE_6__["ApplicationConstants"]; });










/***/ }),

/***/ "CED5":
/*!*********************************************************!*\
  !*** ./ClientApp/app/componenten/markt-select/markt.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "CTaV":
/*!******************************************************!*\
  !*** ./ClientApp/app/componenten/bootstrap/index.ts ***!
  \******************************************************/
/*! exports provided: BootstrapModule, FormGroupComponent, FormRadioComponent, FormCheckboxComponent, HelpBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _boostrap_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boostrap.module */ "FuOJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BootstrapModule", function() { return _boostrap_module__WEBPACK_IMPORTED_MODULE_0__["BootstrapModule"]; });

/* harmony import */ var _form_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-group.component */ "9RDi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormGroupComponent", function() { return _form_group_component__WEBPACK_IMPORTED_MODULE_1__["FormGroupComponent"]; });

/* harmony import */ var _form_radio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-radio.component */ "/dxr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormRadioComponent", function() { return _form_radio_component__WEBPACK_IMPORTED_MODULE_2__["FormRadioComponent"]; });

/* harmony import */ var _form_checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-checkbox.component */ "/4mO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormCheckboxComponent", function() { return _form_checkbox_component__WEBPACK_IMPORTED_MODULE_3__["FormCheckboxComponent"]; });

/* harmony import */ var _help_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./help-block.component */ "D5KN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HelpBlockComponent", function() { return _help_block_component__WEBPACK_IMPORTED_MODULE_4__["HelpBlockComponent"]; });








/***/ }),

/***/ "D5KN":
/*!*********************************************************************!*\
  !*** ./ClientApp/app/componenten/bootstrap/help-block.component.ts ***!
  \*********************************************************************/
/*! exports provided: HelpBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpBlockComponent", function() { return HelpBlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var HelpBlockComponent = /** @class */ (function () {
    function HelpBlockComponent() {
        this.visible = false;
    }
    HelpBlockComponent.prototype.ngOnInit = function () {
        this.visible = !this.type;
    };
    HelpBlockComponent.propDecorators = {
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    HelpBlockComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "help-block",
            template: "\n<span class=\"help-block\" *ngIf=\"visible\">\n        <ng-content></ng-content>\n</span>\n            "
        })
    ], HelpBlockComponent);
    return HelpBlockComponent;
}());



/***/ }),

/***/ "Dgqe":
/*!*********************************************************************************!*\
  !*** ./ClientApp/app/componenten/document-upload/document-upload.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=\"file\"] {\r\n    display: none;\r\n}\r\n\r\n.form-inline button {\r\n   padding: 3px 10px;\r\n}\r\n\r\n.form-inline span {\r\n    padding: 2px 5px;\r\n}\r\n\r\n/*.inputfile {\r\n    width: 0.1px;\r\n    height: 0.1px;\r\n    opacity: 0;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    z-index: -1;\r\n}\r\n\r\n    .inputfile + label {\r\n        margin-top: 1.65em;\r\n        display: inline-block;\r\n        margin-bottom: 0;\r\n        font-weight: 400;\r\n        text-align: center;\r\n        vertical-align: middle;\r\n        cursor: pointer;\r\n        background-image: none;\r\n        border: 1px solid transparent;\r\n        white-space: nowrap;\r\n        padding: 6px 12px;\r\n        font-size: 14px;\r\n        border-radius: 2px;\r\n        color: #fff;\r\n        background-color: #1c7ebb;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .inputfile:disabled + label {\r\n        cursor: not-allowed;\r\n        pointer-events: none;\r\n        opacity: .65;\r\n        filter: alpha(opacity=65);\r\n        -webkit-box-shadow: none;\r\n        box-shadow: none;\r\n    }\r\n\r\n    .inputfile:focus + label {\r\n        outline: 1px dotted #000;\r\n        outline: -webkit-focus-ring-color auto 5px;\r\n    }\r\n\r\n    .inputfile:focus + label,\r\n    .inputfile + label:hover {\r\n        color: #fff;\r\n        background-color: #176698;\r\n        border-color: #114b70;\r\n    }\r\n\r\n    .inputfile + label * {\r\n        pointer-events: none;\r\n    }*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50ZW4vZG9jdW1lbnQtdXBsb2FkL2RvY3VtZW50LXVwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtHQUNHLGlCQUFpQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BbURNIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvY29tcG9uZW50ZW4vZG9jdW1lbnQtdXBsb2FkL2RvY3VtZW50LXVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZvcm0taW5saW5lIGJ1dHRvbiB7XHJcbiAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG59XHJcblxyXG4uZm9ybS1pbmxpbmUgc3BhbiB7XHJcbiAgICBwYWRkaW5nOiAycHggNXB4O1xyXG59XHJcblxyXG4vKi5pbnB1dGZpbGUge1xyXG4gICAgd2lkdGg6IDAuMXB4O1xyXG4gICAgaGVpZ2h0OiAwLjFweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbiAgICAuaW5wdXRmaWxlICsgbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNjVlbTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM3ZWJiO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXRmaWxlOmRpc2FibGVkICsgbGFiZWwge1xyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgb3BhY2l0eTogLjY1O1xyXG4gICAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT02NSk7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0ZmlsZTpmb2N1cyArIGxhYmVsIHtcclxuICAgICAgICBvdXRsaW5lOiAxcHggZG90dGVkICMwMDA7XHJcbiAgICAgICAgb3V0bGluZTogLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yIGF1dG8gNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dGZpbGU6Zm9jdXMgKyBsYWJlbCxcclxuICAgIC5pbnB1dGZpbGUgKyBsYWJlbDpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3NjY5ODtcclxuICAgICAgICBib3JkZXItY29sb3I6ICMxMTRiNzA7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0ZmlsZSArIGxhYmVsICoge1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfSovXHJcbiJdfQ== */");

/***/ }),

/***/ "EcuB":
/*!*******************************************!*\
  !*** ./ClientApp/app/services/product.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "Euy4":
/*!**************************************************!*\
  !*** ./ClientApp/app/shared/slider.component.ts ***!
  \**************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");



var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        this._value = false;
        this.disabled = false;
        this.label = "";
        this.propagateChange = function (_) { };
    }
    SliderComponent_1 = SliderComponent;
    Object.defineProperty(SliderComponent.prototype, "value", {
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
    SliderComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
            this.value = value;
        }
    };
    SliderComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    SliderComponent.prototype.registerOnTouched = function (fn) { };
    SliderComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    var SliderComponent_1;
    SliderComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    SliderComponent = SliderComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "dp-slider",
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return SliderComponent_1; }), multi: true }
            ],
            template: "\n        <span>\n            <label>{{label}}</label>\n            <label class=\"switch\">\n            \n                <input [(ngModel)]=\"value\" type=\"checkbox\" [attr.disabled]=\"disabled ? true : null\" [attr.checked]=\"value ? true : null\"><i></i>\n            </label>\n        </span>\n"
        })
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "FQfM":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/app.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar [height]=\"'5px'\"></ng2-slim-loading-bar>\r\n<mafo-nav></mafo-nav>\r\n<div class=\"view-container\">\r\n    <section id=\"content\" class=\"animate-fade-up\">\r\n        <div class=\"body-content\">\r\n            <router-outlet *ngIf=\"!loggedOut\"></router-outlet>\r\n            <logged-out *ngIf=\"loggedOut\"></logged-out>\r\n        </div>\r\n    </section>\r\n</div>\r\n"

/***/ }),

/***/ "FVUk":
/*!*************************************************!*\
  !*** ./ClientApp/app/services/kavel.service.ts ***!
  \*************************************************/
/*! exports provided: KavelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KavelService", function() { return KavelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-slim-loading-bar */ "k+RO");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core */ "BxFb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");







var KavelService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KavelService, _super);
    function KavelService(http, loader, toastr) {
        var _this = _super.call(this, http, loader) || this;
        _this.http = http;
        _this.loader = loader;
        _this.toastr = toastr;
        return _this;
    }
    KavelService.prototype.getAllKavelsForMarktOverview = function (marktId) {
        var _this = this;
        return this.http.get(this.apiEndpoint + 'markets/' + marktId + '/lots').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) { return response.response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    KavelService.prototype.getAllKavelsForAbonnement = function (marktId, aboId) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]();
        params = params.set('subscriptionId', aboId.toString());
        return this.http.get(this.apiEndpoint + 'markets/' + marktId + '/lots', { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) { return response.response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    KavelService.prototype.getKavelDetail = function (marktId, kavelId) {
        var _this = this;
        this.loader.start();
        return this.http.get(this.apiEndpoint + 'markets/' + marktId + '/lots/' + kavelId, { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    KavelService.prototype.getAll = function (filter) {
        var _this = this;
        this.loader.start();
        var params = this.registerDefaultParameters(filter.query);
        if (filter.marktId)
            params = params.set("marketid", filter.marktId.toString());
        if (filter.klantId)
            params = params.set("subscriptionid", filter.klantId.toString());
        if (filter.abonnementId)
            params = params.set("subscriptionId", filter.abonnementId.toString());
        return this.http.get(this.apiEndpoint + 'markets/' + filter.marktId + '/lots', { headers: this.jsonHeaders, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) { return response.response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    KavelService.prototype.downloadKavels = function (marktId, detail, volgendKwartaal, huidigKwartaal) {
        var _this = this;
        if (detail === void 0) { detail = true; }
        if (volgendKwartaal === void 0) { volgendKwartaal = false; }
        if (huidigKwartaal === void 0) { huidigKwartaal = true; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]();
        params = params.set("detail", detail.toString());
        params = params.set("sort", "oudenaam");
        params = params.set("volgendkwartaal", volgendKwartaal.toString());
        params = params.set("huidigkwartaal", huidigKwartaal.toString());
        this.loader.start();
        this.http.get(this.apiEndpoint + 'markets/' + marktId + '/lotexports', { headers: this.csvHeaders, params: params, observe: 'response', responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (response) {
            return _this.saveAsFile(response, "text/csv");
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError))
            .subscribe(function (success) {
            _this.loader.complete();
            _this.toastr.success("Bestand klaar voor download", "Opslaan");
        }, function (error) {
            _this.toastr.error("We konden het bestand niet klaar zetten voor download", "Oeps...");
        });
    };
    KavelService.prototype.uploadKavels = function (marktId, file) {
        var _this = this;
        this.loader.start();
        return this.http.post(this.apiEndpoint + 'markets/' + marktId + '/lotexports', file, { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    KavelService.prototype.get = function (marktId, kavelId) {
        var _this = this;
        this.loader.start();
        return this.http.get(this.apiEndpoint + 'markets/' + marktId + '/lots/' + kavelId, { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    KavelService.prototype.getTakenKavels = function (marktId) {
        var _this = this;
        this.loader.start();
        return this.http.get(this.apiEndpoint + 'markets/' + marktId + '/lottasks', { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) { return response.response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    KavelService.prototype.save = function (kavel) {
        var _this = this;
        this.loader.start();
        var action = kavel.kavelId && kavel.kavelId > 0
            ? this.http.put(this.apiEndpoint + 'markets/' + kavel.marktId + '/lots/' + kavel.kavelId, kavel, { headers: this.jsonHeaders })
            : this.http.post(this.apiEndpoint + 'markets/' + kavel.marktId + '/lots', kavel, { headers: this.jsonHeaders });
        return action.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) { return response; }));
    };
    KavelService.prototype.getAvailableAmount = function (marktId) {
        var _this = this;
        this.loader.start();
        return this.http.head(this.apiEndpoint + 'markets/' + marktId + '/lots', { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    KavelService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__["SlimLoadingBarService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    KavelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__["SlimLoadingBarService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], KavelService);
    return KavelService;
}(_core__WEBPACK_IMPORTED_MODULE_5__["BaseService"]));



/***/ }),

/***/ "Fgbf":
/*!************************************************************!*\
  !*** ./ClientApp/app/componenten/location-select/index.ts ***!
  \************************************************************/
/*! exports provided: LocatieSelectModule, LocatieService, LocationSelectComponent, LocationDistrictIdSelectComponent, LocationDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocatieSelectModule", function() { return LocatieSelectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _location_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./location-select.component */ "wlK3");
/* harmony import */ var _location_districtid_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location-districtid-select.component */ "SiFK");
/* harmony import */ var _location_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location-display.component */ "7fRg");
/* harmony import */ var _locatie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locatie.service */ "2CY5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocatieService", function() { return _locatie_service__WEBPACK_IMPORTED_MODULE_7__["LocatieService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationSelectComponent", function() { return _location_select_component__WEBPACK_IMPORTED_MODULE_4__["LocationSelectComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationDistrictIdSelectComponent", function() { return _location_districtid_select_component__WEBPACK_IMPORTED_MODULE_5__["LocationDistrictIdSelectComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationDisplayComponent", function() { return _location_display_component__WEBPACK_IMPORTED_MODULE_6__["LocationDisplayComponent"]; });









var LocatieSelectModule = /** @class */ (function () {
    function LocatieSelectModule() {
    }
    LocatieSelectModule_1 = LocatieSelectModule;
    LocatieSelectModule.forRoot = function () {
        return {
            ngModule: LocatieSelectModule_1,
            providers: [_locatie_service__WEBPACK_IMPORTED_MODULE_7__["LocatieService"]],
        };
    };
    var LocatieSelectModule_1;
    LocatieSelectModule = LocatieSelectModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _location_select_component__WEBPACK_IMPORTED_MODULE_4__["LocationSelectComponent"],
                _location_districtid_select_component__WEBPACK_IMPORTED_MODULE_5__["LocationDistrictIdSelectComponent"],
                _location_display_component__WEBPACK_IMPORTED_MODULE_6__["LocationDisplayComponent"],
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            exports: [
                _location_select_component__WEBPACK_IMPORTED_MODULE_4__["LocationSelectComponent"],
                _location_districtid_select_component__WEBPACK_IMPORTED_MODULE_5__["LocationDistrictIdSelectComponent"],
                _location_display_component__WEBPACK_IMPORTED_MODULE_6__["LocationDisplayComponent"],
            ],
        })
    ], LocatieSelectModule);
    return LocatieSelectModule;
}());







/***/ }),

/***/ "FhR5":
/*!***********************************************!*\
  !*** ./ClientApp/environments/environment.ts ***!
  \***********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    passThroughApiUrl: 'passthroughapi',
    bffApiUrl: 'api',
};


/***/ }),

/***/ "FuOJ":
/*!****************************************************************!*\
  !*** ./ClientApp/app/componenten/bootstrap/boostrap.module.ts ***!
  \****************************************************************/
/*! exports provided: BootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapModule", function() { return BootstrapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _form_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-group.component */ "9RDi");
/* harmony import */ var _form_radio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-radio.component */ "/dxr");
/* harmony import */ var _form_checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-checkbox.component */ "/4mO");
/* harmony import */ var _help_block_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./help-block.component */ "D5KN");








var BootstrapModule = /** @class */ (function () {
    function BootstrapModule() {
    }
    BootstrapModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _form_group_component__WEBPACK_IMPORTED_MODULE_4__["FormGroupComponent"],
                _form_radio_component__WEBPACK_IMPORTED_MODULE_5__["FormRadioComponent"],
                _form_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["FormCheckboxComponent"],
                _help_block_component__WEBPACK_IMPORTED_MODULE_7__["HelpBlockComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            exports: [_form_group_component__WEBPACK_IMPORTED_MODULE_4__["FormGroupComponent"], _form_radio_component__WEBPACK_IMPORTED_MODULE_5__["FormRadioComponent"], _form_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["FormCheckboxComponent"], _help_block_component__WEBPACK_IMPORTED_MODULE_7__["HelpBlockComponent"]]
        })
    ], BootstrapModule);
    return BootstrapModule;
}());



/***/ }),

/***/ "HJlE":
/*!****************************************!*\
  !*** ./ClientApp/app/app.component.ts ***!
  \****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "FQfM");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "h+n0");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_modialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-modialog */ "ROqb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth */ "qec8");







var AppComponent = /** @class */ (function () {
    function AppComponent(overlay, vcRef, authService) {
        this.authService = authService;
    }
    Object.defineProperty(AppComponent.prototype, "loggedOut", {
        get: function () {
            var cookie = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('jwt');
            return cookie === null;
        },
        enumerable: false,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //refresh token every 20 minutes
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(1200000)
            .subscribe(function (val) {
            _this.authService.refreshToken();
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: ngx_modialog__WEBPACK_IMPORTED_MODULE_4__["Overlay"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] },
        { type: _auth__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "mafo-app",
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1___default.a
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_modialog__WEBPACK_IMPORTED_MODULE_4__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _auth__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "HRaI":
/*!***************************************!*\
  !*** ./ClientApp/app/app.settings.ts ***!
  \***************************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.API_ENDPOINT = "store/";
    AppSettings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AppSettings);
    return AppSettings;
}());



/***/ }),

/***/ "HW5m":
/*!********************************************************!*\
  !*** ./ClientApp/app/componenten/code-select/index.ts ***!
  \********************************************************/
/*! exports provided: CodeSelectModule, CodeService, CodeType, CodeSelectComponent, CodeSelectIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _code_select_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-select.module */ "wXWv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeSelectModule", function() { return _code_select_module__WEBPACK_IMPORTED_MODULE_0__["CodeSelectModule"]; });

/* harmony import */ var _code_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code.service */ "Adg9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeService", function() { return _code_service__WEBPACK_IMPORTED_MODULE_1__["CodeService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeType", function() { return _code_service__WEBPACK_IMPORTED_MODULE_1__["CodeType"]; });

/* harmony import */ var _code_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code-select.component */ "yE9j");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeSelectComponent", function() { return _code_select_component__WEBPACK_IMPORTED_MODULE_2__["CodeSelectComponent"]; });

/* harmony import */ var _code_id_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code-id-select.component */ "f/jx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeSelectIdComponent", function() { return _code_id_select_component__WEBPACK_IMPORTED_MODULE_3__["CodeSelectIdComponent"]; });







/***/ }),

/***/ "I8u7":
/*!****************************************************************************!*\
  !*** ./ClientApp/app/componenten/datetimepicker/datepicker.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .disabled {\n  display: none !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50ZW4vZGF0ZXRpbWVwaWNrZXIvZGF0ZXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHdCQUF3QjtBQUE1QiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudGVuL2RhdGV0aW1lcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLmRpc2FibGVkIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "Imnq":
/*!*****************************************************************************!*\
  !*** ./ClientApp/app/componenten/document-upload/document-upload.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DocumentUploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentUploadModule", function() { return DocumentUploadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "T/Yl");
/* harmony import */ var _document_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./document-upload.component */ "/7ul");
/* harmony import */ var _document_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./document-panel.component */ "zVYK");
/* harmony import */ var _code_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../code-select */ "HW5m");
/* harmony import */ var _datetimepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../datetimepicker */ "RyTg");
/* harmony import */ var _document_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./document.service */ "Xd4x");










var DocumentUploadModule = /** @class */ (function () {
    function DocumentUploadModule() {
    }
    DocumentUploadModule_1 = DocumentUploadModule;
    DocumentUploadModule.forRoot = function () {
        return {
            ngModule: DocumentUploadModule_1,
            providers: [_document_service__WEBPACK_IMPORTED_MODULE_9__["DocumentService"]],
        };
    };
    var DocumentUploadModule_1;
    DocumentUploadModule = DocumentUploadModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_document_upload_component__WEBPACK_IMPORTED_MODULE_5__["DocumentUploadComponent"], _document_panel_component__WEBPACK_IMPORTED_MODULE_6__["DocumentPanelComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _code_select__WEBPACK_IMPORTED_MODULE_7__["CodeSelectModule"],
                _datetimepicker__WEBPACK_IMPORTED_MODULE_8__["DateTimePickerhModule"],
            ],
            exports: [_document_upload_component__WEBPACK_IMPORTED_MODULE_5__["DocumentUploadComponent"], _document_panel_component__WEBPACK_IMPORTED_MODULE_6__["DocumentPanelComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], DocumentUploadModule);
    return DocumentUploadModule;
}());



/***/ }),

/***/ "J4hL":
/*!*************************************!*\
  !*** ./ClientApp/app/app.module.ts ***!
  \*************************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "tl5U");
/* harmony import */ var ngx_modialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-modialog */ "ROqb");
/* harmony import */ var ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-modialog/plugins/bootstrap */ "e7Ax");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "HJlE");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth */ "qec8");
/* harmony import */ var _auth_user_display_user_display_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/user-display/user-display.component */ "/UFU");
/* harmony import */ var _componenten_code_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componenten/code-select */ "HW5m");
/* harmony import */ var _componenten_document_upload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componenten/document-upload */ "zY+x");
/* harmony import */ var _componenten_location_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componenten/location-select */ "Fgbf");
/* harmony import */ var _componenten_markt_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componenten/markt-select */ "3vM0");
/* harmony import */ var _componenten_product_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./componenten/product-select */ "yxRt");
/* harmony import */ var _logged_out_logged_out_main__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./logged-out/logged-out.main */ "RG56");
/* harmony import */ var _navigation_navigation_main__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./navigation/navigation.main */ "xxp+");



















function tokenGetter() {
    return Object(_auth__WEBPACK_IMPORTED_MODULE_10__["readToken"])();
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _navigation_navigation_main__WEBPACK_IMPORTED_MODULE_18__["NavigationModule"],
                _logged_out_logged_out_main__WEBPACK_IMPORTED_MODULE_17__["LoggedOutModule"],
                ngx_modialog__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                _componenten_code_select__WEBPACK_IMPORTED_MODULE_12__["CodeSelectModule"].forRoot(),
                _componenten_product_select__WEBPACK_IMPORTED_MODULE_16__["ProductSelectModule"].forRoot(),
                _componenten_markt_select__WEBPACK_IMPORTED_MODULE_15__["MarktSelectModule"].forRoot(),
                _componenten_location_select__WEBPACK_IMPORTED_MODULE_14__["LocatieSelectModule"].forRoot(),
                _componenten_document_upload__WEBPACK_IMPORTED_MODULE_13__["DocumentUploadModule"].forRoot(),
                ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BootstrapModalModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({
                    timeOut: 10000,
                    positionClass: 'toast-top-right'
                }),
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter
                    }
                })
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _auth_user_display_user_display_component__WEBPACK_IMPORTED_MODULE_11__["UserDisplayComponent"]
            ],
            providers: [
                _auth__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
                _auth__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "K7w+":
/*!**************************************************************!*\
  !*** ./ClientApp/app/core/constants/applicationConstants.ts ***!
  \**************************************************************/
/*! exports provided: ApplicationConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationConstants", function() { return ApplicationConstants; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var ApplicationConstants = /** @class */ (function () {
    function ApplicationConstants() {
    }
    var _a, _b, _c, _d, _e;
    ApplicationConstants.DieptekavelStatusNietBeschikbaarCode = "NIETBESCHIKBAAR";
    ApplicationConstants.DieptekavelStatusNietBeschikbaarOmschrijving = "Niet beschikbaar";
    ApplicationConstants.DieptekavelStatusNietInGebruikCode = "NIETINGEBRUIK";
    ApplicationConstants.DieptekavelStatusNietInGebruikOmschrijving = "Niet in gebruik";
    ApplicationConstants.DieptekavelStatusInGebruikCode = "INGEBRUIK";
    ApplicationConstants.DieptekavelStatusInGebruikOmschrijving = "In gebruik";
    ApplicationConstants.HalfjaarlijksFactuurType = "HALFJAARLIJKSEFACTUUR";
    ApplicationConstants.TussentijdsFactuurType = "TUSSENTIJDSEFACTUUR";
    ApplicationConstants.Terugbetaling = "TERUGBETALING";
    ApplicationConstants.OnbekendFactuurType = "ONBEKEND";
    ApplicationConstants.HalfjaarlijksFactuurTypeRoute = "halfjaarlijkse";
    ApplicationConstants.TussentijdsFactuurTypeRoute = "tussentijdse";
    ApplicationConstants.TerugbetalingenRoute = "terugbetalingen";
    ApplicationConstants.AanvraagStatus = (_a = /** @class */ (function () {
            function class_1() {
            }
            return class_1;
        }()),
        _a.Intake = "INTAKE",
        _a.Gepreregistreerd = "GEPREREGISTREERD",
        _a.Geregistreerd = "GEREGISTREERD",
        _a.Toegewezen = "TOEGEWEZEN",
        _a.Gedeeltelijktoegewezen = "GEDEELTELIJKTOEGEWEZEN",
        _a.Stopgezet = "STOPGEZET",
        _a.Gereserveerd = "GERESERVEERD",
        _a.Geannuleerd = "GEANNULEERD",
        _a);
    ApplicationConstants.AanvraagPatchType = (_b = /** @class */ (function () {
            function class_2() {
            }
            return class_2;
        }()),
        _b.Status = 'STATUS',
        _b.Renewaldate = 'RENEWALDATE',
        _b);
    ApplicationConstants.AanvraagSoort = (_c = /** @class */ (function () {
            function class_3() {
            }
            return class_3;
        }()),
        _c.RuilingCode = "RUILING",
        _c.RuilingOmschrijving = "Ruiling",
        _c.RuilingUitbreidingCode = "RUILINGUITBREIDING",
        _c.RuilingUitbreidingOmschrijving = "Ruiling + uitbreiding",
        _c.UitbreidingCode = "UITBREIDING",
        _c.UitbreidingOmschrijving = "Uitbreiding",
        _c.NieuwePlaatsCode = "NIEUWEPLAATS",
        _c.NieuwePlaatsOmschrijving = "Nieuwe plaats",
        _c.PlaatsKwijtgeraaktCode = "PLAATSKWIJTGERAAKT",
        _c.PlaatsKwijtgeraaktOmschrijving = "Plaats kwijtgeraakt",
        _c);
    ApplicationConstants.AbonnementStatus = (_d = /** @class */ (function () {
            function class_4() {
            }
            return class_4;
        }()),
        _d.GereserveerdCode = "GERESERVEERD",
        _d.GereserveerdOmschrijving = "Gereserveerd",
        _d.LopendCode = "LOPEND",
        _d.LopendOmschrijving = "Lopend",
        _d.GeweigerdCode = "GEWEIGERD",
        _d.GeweigerdOmschrijving = "Geweigerd",
        _d.OpgezegdCode = "OPGEZEGD",
        _d.OpgezegdOmschrijving = "Opgezegd",
        _d.InOverdrachtCode = "INOVERDRACHT",
        _d.InOverdrachtOmschrijving = "In overdracht",
        _d.IngetrokkenCode = "INGETROKKEN",
        _d.IngetrokkenOmschrijving = "Ingetrokken",
        _d.OpgeschortCode = "OPGESCHORT",
        _d.OpgeschortOmschrijving = "Opgeschort",
        _d.GeschorstCode = "GESCHORST",
        _d.GeschorstOmschrijving = "Geschorst",
        _d.StopgezetCode = "STOPGEZET",
        _d.StopgezetOmschrijving = "Stopgezet",
        _d.WachtendOpActivatieCode = "WACHTENDOPACTIVATIE",
        _d.WachtendOpActivatieOmschrijving = "Wachtend op activatie",
        _d.GeannuleerdCode = "GEANNULEERD",
        _d.GeannuleerdOmschrijving = "Geannuleerd",
        _d);
    ApplicationConstants.Verkoop = (_e = /** @class */ (function () {
            function class_5() {
            }
            return class_5;
        }()),
        _e.GewoneVerkoop = "GEWONEVERKOOP",
        _e.Demonstreerder = "DEMONSTREERDER",
        _e.SeizoensgebondenVerkoop = "SEIZOENSGEBONDENVERKOOP",
        _e);
    ApplicationConstants = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ApplicationConstants);
    return ApplicationConstants;
}());



/***/ }),

/***/ "M+iq":
/*!***************************************************!*\
  !*** ./ClientApp/app/services/product.service.ts ***!
  \***************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.settings */ "HRaI");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-slim-loading-bar */ "k+RO");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core */ "BxFb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");







var ProductService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ProductService, _super);
    function ProductService(http, loader) {
        var _this = _super.call(this, http, loader) || this;
        _this.http = http;
        _this.loader = loader;
        _this.url = _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + 'products';
        return _this;
    }
    ProductService.prototype.getProducten = function (query) {
        var _this = this;
        this.loader.start();
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]();
        if (query) {
            if (query.sort)
                httpParams = httpParams.set('sort', query.sort.toString());
            if (query.page)
                httpParams = httpParams.set('page', query.page.toString());
            if (query.pageSize)
                httpParams = httpParams.set('pageSize', query.pageSize.toString());
        }
        return this.http.get(this.url + '/', { params: httpParams }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) { return response.embedded.resourceList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    ProductService.prototype.updateWithArray = function (payload) {
        var _this = this;
        this.loader.start();
        return this.http
            .post(this.url + '/update', payload, {
            headers: this.jsonHeaders,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) {
            _this.loader.complete();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    ProductService.prototype.update = function (payload) {
        var _this = this;
        this.loader.start();
        return this.http
            .put(this.url + '/' + payload.id, payload, {
            headers: this.jsonHeaders,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) {
            _this.loader.complete();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    ProductService.prototype.save = function (payload) {
        var _this = this;
        this.loader.start();
        return this.http
            .post(this.url, payload, { headers: this.jsonHalHeaders })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) {
            _this.loader.complete();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    ProductService.prototype.delete = function (itemId) {
        var _this = this;
        this.loader.start();
        return this.http
            .delete(this.url + '/' + itemId, { headers: this.jsonHeaders })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    ProductService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__["SlimLoadingBarService"] }
    ]; };
    ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__["SlimLoadingBarService"]])
    ], ProductService);
    return ProductService;
}(_core__WEBPACK_IMPORTED_MODULE_5__["BaseService"]));



/***/ }),

/***/ "NpWj":
/*!*****************************************************!*\
  !*** ./ClientApp/app/core/stringFormatPipe.pipe.ts ***!
  \*****************************************************/
/*! exports provided: StringFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringFormatPipe", function() { return StringFormatPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var StringFormatPipe = /** @class */ (function () {
    function StringFormatPipe() {
    }
    StringFormatPipe.prototype.transform = function (value, arg) {
        if (!value || value == null) {
            return null;
        }
        if (arg == null) {
            return value;
        }
        var arrFormats = new Array();
        arrFormats = arg.split(/(\x+)/g).filter(String);
        var formattedString = arg;
        var startLength = 0;
        arrFormats.forEach(function (pieceOfFormat) {
            if (pieceOfFormat.includes("x")) {
                formattedString = formattedString.replace(pieceOfFormat, value.toString().substring(startLength, startLength + pieceOfFormat.length));
                startLength += pieceOfFormat.length;
            }
        });
        return formattedString;
    };
    StringFormatPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'stringformat' })
    ], StringFormatPipe);
    return StringFormatPipe;
}());



/***/ }),

/***/ "P6tn":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/componenten/document-upload/document-upload.layout.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mafo-panel [collapsable]=\"false\" [open]=\"true\">\r\n    <mafo-panel-heading>\r\n        <code-display [value]=\"documentType\" type=\"DocumentType\"></code-display>&nbsp;\r\n    </mafo-panel-heading>\r\n    <mafo-panel-actions>\r\n        <label [attr.for]=\"documentType\" class=\"btn btn-default\" *ngIf=\"!componentsDisabled\">\r\n            <input style=\"display: none;\" type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Selecteer en laad op\" [name]=\"documentType\" [id]=\"documentType\" />\r\n            <i class=\"text-info glyphicon glyphicon-cloud-upload\"></i>\r\n        </label>\r\n    </mafo-panel-actions>\r\n    <mafo-panel-body>\r\n        <div class=\"form-inline\" *ngIf=\"document\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-7\">\r\n                    <div class=\"input-group\">\r\n                        <span>\r\n                            <button class=\"btn btn-xs btn-danger\" title=\"Verwijderen\" *ngIf=\"document.naam && !componentsDisabled\">\r\n                                <i class=\"glyphicon glyphicon-remove-sign\"></i>\r\n                            </button>\r\n                        </span>\r\n                        <p class=\"form-control-static\">\r\n                            <a href=\"#\" (click)=\"downloadFile($event)\" *ngIf=\"document.naam\">\r\n                                {{document.naam + document.fileExtension}}\r\n                            </a>\r\n                            <span *ngIf=\"!document.naam\">\r\n                                Geen bestand opgeladen\r\n                            </span>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-5\" *ngIf=\"document.geldigVan || document.geldigTot\">\r\n                    <div class=\"input-group input-daterange\">\r\n                        <input type=\"text\" class=\"form-control\"\r\n                               data-provide=\"datepicker\"\r\n                               data-date-language=\"nl-BE\"\r\n                               data-date-format=\"dd/mm/yyyy\"\r\n                               [ngModel]=\"document.geldigVan | date:'dd/MM/yyyy'\"\r\n                               (ngModelChange)=\"document.geldigVan=$event\" />\r\n                        <div class=\"input-group-addon\">tot</div>\r\n                        <input type=\"text\" class=\"form-control\"\r\n                               data-provide=\"datepicker\"\r\n                               data-date-language=\"nl-BE\"\r\n                               data-date-format=\"dd/mm/yyyy\"\r\n                               [ngModel]=\"document.geldigTot | date:'dd/MM/yyyy'\"\r\n                               (ngModelChange)=\"document.geldigTot=$event\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </mafo-panel-body>\r\n</mafo-panel>\r\n<span class=\"help-block\" *ngIf=\"required\">\r\n    Gelieve minstens één <code-display [value]=\"documentType\" type=\"DocumentType\"></code-display> toe te voegen.\r\n</span>"

/***/ }),

/***/ "PLhC":
/*!******************************************************!*\
  !*** ./ClientApp/app/shared/breadcrumb.component.ts ***!
  \******************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
        this.origin = 'origin';
        this.current = 'current';
    }
    BreadcrumbComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'breadcrumb-app',
            template: "\n        <h2><a href=\"#\"><i class=\"fa fa-arrow-circle-o-left lighter\"></i></a>&nbsp;{{origin}} &gt; {{current}}</h2>\n    "
        })
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "PSRL":
/*!**************************************************!*\
  !*** ./ClientApp/app/services/tarief.service.ts ***!
  \**************************************************/
/*! exports provided: TariefService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TariefService", function() { return TariefService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.settings */ "HRaI");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core */ "BxFb");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-slim-loading-bar */ "k+RO");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");








var TariefService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TariefService, _super);
    function TariefService(_http, loader) {
        var _this = _super.call(this, _http, loader) || this;
        _this._http = _http;
        _this.loader = loader;
        _this.url = _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT;
        return _this;
    }
    TariefService.prototype.getStandplaatsTarief = function (id) {
        var _this = this;
        this.loader.start();
        return this.http.get(this.url + "standrates?id=" + id, { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    TariefService.prototype.getStandplaatsTariefByCode = function (code) {
        var _this = this;
        this.loader.start();
        return this.http.get(this.url + "standrates?code=" + code, { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    TariefService.prototype.getStandplaatsTarieven = function () {
        var _this = this;
        this.loader.start();
        return this.http.get(this.url + "standrates", { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) { return response.response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    TariefService.prototype.saveStandplaats = function (payloads) {
        var _this = this;
        this.loader.start();
        var tasks$ = [];
        for (var i = 0; i < payloads.length; i++) {
            var payload = payloads[i];
            var action = this.http.put(this.url + "standrates/" + payload.id, payload);
            tasks$.push(action);
        }
        var groupAction = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(tasks$);
        return groupAction.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    TariefService.prototype.getElektriciteitTarief = function (id) {
        var _this = this;
        this.loader.start();
        return this.http.get(this.url + "electricityrates?id=" + id, { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    TariefService.prototype.getElektriciteitTariefByCode = function (code) {
        var _this = this;
        this.loader.start();
        return this.http.get(this.url + "electricityrates?code=" + code, { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    TariefService.prototype.getElektriciteitTarieven = function () {
        var _this = this;
        this.loader.start();
        return this.http.get(this.url + "electricityrates", { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) { return response.response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    TariefService.prototype.saveElektriciteit = function (payloads) {
        var _this = this;
        this.loader.start();
        var tasks$ = [];
        for (var i = 0; i < payloads.length; i++) {
            var payload = payloads[i];
            var action = this.http.put(this.url + "electricityrates/" + payload.id, payload);
            tasks$.push(action);
        }
        var groupAction = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(tasks$);
        return groupAction.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    TariefService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
        { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6__["SlimLoadingBarService"] }
    ]; };
    TariefService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6__["SlimLoadingBarService"]])
    ], TariefService);
    return TariefService;
}(_core__WEBPACK_IMPORTED_MODULE_5__["BaseService"]));



/***/ }),

/***/ "Pptj":
/*!******************************************************************************!*\
  !*** ./ClientApp/app/componenten/product-select/product-select.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProductSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSelectComponent", function() { return ProductSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.service */ "mpu8");




var ProductSelectComponent = /** @class */ (function () {
    function ProductSelectComponent(productService) {
        this.productService = productService;
        this.isLoading = true;
        this._value = "";
        this.propagateChange = function (_) { };
        this.placeholder = "- maak uw keuze -";
    }
    ProductSelectComponent_1 = ProductSelectComponent;
    Object.defineProperty(ProductSelectComponent.prototype, "value", {
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
    ProductSelectComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ProductSelectComponent.prototype.getData = function () {
        var _this = this;
        this.productService.get().subscribe(function (x) {
            _this.producten = x.sort(_this.compareProducten);
            _this.isLoading = false;
        });
    };
    ProductSelectComponent.prototype.writeValue = function (value) {
        this.value = value || "";
    };
    ProductSelectComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    ProductSelectComponent.prototype.registerOnTouched = function (fn) { };
    ProductSelectComponent.prototype.compareProducten = function (a, b) {
        if (a.omschrijving.toLowerCase() < b.omschrijving.toLowerCase())
            return -1;
        if (a.omschrijving.toLowerCase() > b.omschrijving.toLowerCase())
            return 1;
        return 0;
    };
    var ProductSelectComponent_1;
    ProductSelectComponent.ctorParameters = function () { return [
        { type: _products_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
    ]; };
    ProductSelectComponent.propDecorators = {
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    ProductSelectComponent = ProductSelectComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "product-select",
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return ProductSelectComponent_1; }), multi: true }
            ],
            template: "\n        <select id=\"intake-add-product-dropdown\" class=\"form-control\" [class.ajax-loading]=\"isLoading\" [attr.disabled]=\"isLoading || disabled ? true : null\" [(ngModel)]=\"value\">\n            <option value=\"\" selected>{{placeholder}}</option>\n            <option *ngFor=\"let product of producten\" [ngValue]=\"product.id\">{{product.omschrijving}}</option>\n        </select>\n        ",
            styles: [".ajax-loading {    \n                background-color: #ffffff;\n                background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPSc2NHB4JyBoZWlnaHQ9JzY0cHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLXJpbmciPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgc3Ryb2tlLWRhc2hhcnJheT0iMTYzLjM2MjgxNzk4NjY2OTI2IDg3Ljk2NDU5NDMwMDUxNDIiIHN0cm9rZT0iI2QyNTM1MyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDsxODAgNTAgNTA7MzYwIDUwIDUwOyIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMHMiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L3N2Zz4=);\n                background-size: 25px 25px;\n                background-position: right 25px center;\n                background-repeat: no-repeat;\n            }"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], ProductSelectComponent);
    return ProductSelectComponent;
}());



/***/ }),

/***/ "QqbR":
/*!***************************!*\
  !*** ./ClientApp/main.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "wAiw");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "J4hL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "FhR5");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    // tslint:disable-next-line: no-console
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "Quu4":
/*!***************************************************************************!*\
  !*** ./ClientApp/app/componenten/product-select/product-select.module.ts ***!
  \***************************************************************************/
/*! exports provided: ProductSelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSelectModule", function() { return ProductSelectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "T/Yl");
/* harmony import */ var _product_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-display.component */ "WmFH");
/* harmony import */ var _product_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-select.component */ "Pptj");
/* harmony import */ var _product_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-panel.component */ "RLTE");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products.service */ "mpu8");









var ProductSelectModule = /** @class */ (function () {
    function ProductSelectModule() {
    }
    ProductSelectModule_1 = ProductSelectModule;
    ProductSelectModule.forRoot = function () {
        return {
            ngModule: ProductSelectModule_1,
            providers: [_products_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"]],
        };
    };
    var ProductSelectModule_1;
    ProductSelectModule = ProductSelectModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _product_display_component__WEBPACK_IMPORTED_MODULE_5__["ProductDisplayComponent"],
                _product_select_component__WEBPACK_IMPORTED_MODULE_6__["ProductSelectComponent"],
                _product_panel_component__WEBPACK_IMPORTED_MODULE_7__["ProductPanelComponent"],
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
            exports: [
                _product_display_component__WEBPACK_IMPORTED_MODULE_5__["ProductDisplayComponent"],
                _product_select_component__WEBPACK_IMPORTED_MODULE_6__["ProductSelectComponent"],
                _product_panel_component__WEBPACK_IMPORTED_MODULE_7__["ProductPanelComponent"],
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], ProductSelectModule);
    return ProductSelectModule;
}());



/***/ }),

/***/ "RG56":
/*!*****************************************************!*\
  !*** ./ClientApp/app/logged-out/logged-out.main.ts ***!
  \*****************************************************/
/*! exports provided: LoggedOutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedOutModule", function() { return LoggedOutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _logged_out_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logged-out.component */ "o66+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");




var LoggedOutModule = /** @class */ (function () {
    function LoggedOutModule() {
    }
    LoggedOutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_logged_out_component__WEBPACK_IMPORTED_MODULE_2__["LoggedOutComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _logged_out_component__WEBPACK_IMPORTED_MODULE_2__["LoggedOutComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], LoggedOutModule);
    return LoggedOutModule;
}());



/***/ }),

/***/ "RLTE":
/*!*****************************************************************************!*\
  !*** ./ClientApp/app/componenten/product-select/product-panel.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPanelComponent", function() { return ProductPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");



var ProductPanelComponent = /** @class */ (function () {
    function ProductPanelComponent(fb) {
        this.fb = fb;
        this.data = [];
        this.disabled = false;
        this.edit = true;
        this.open = false;
        this.collapsable = true;
        this.componentsDisabled = false;
    }
    Object.defineProperty(ProductPanelComponent.prototype, "producten", {
        get: function () {
            return this.formGroup.get("producten");
        },
        enumerable: false,
        configurable: true
    });
    ProductPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.formGroup)
            this.formGroup = this.fb.group({});
        this.formGroup.addControl("producten", this.fb.array([]));
        if (this.data)
            this.data.map(function (x) { return _this.producten.push(_this.createProduct(x)); });
    };
    ProductPanelComponent.prototype.ngOnChanges = function (changes) {
        if (changes && changes.edit && !changes.edit.currentValue && changes.edit.previousValue === true) {
            this.revert();
        }
    };
    ProductPanelComponent.prototype.addProduct = function () {
        var link = document.getElementsByName('producten');
        var panel = document.getElementById('producten');
        if (link && link[0] && !panel.classList.contains('in')) {
            link[0].click();
        }
        this.producten.push(this.createProduct());
        //  this.open = true;
    };
    ProductPanelComponent.prototype.removeProduct = function (index) {
        this.producten.removeAt(index);
    };
    ProductPanelComponent.prototype.setAsMain = function (index) {
        this.producten.controls.forEach(function (x) { return x.get("isHoofdcategorie").setValue(false); });
        this.producten.controls[index].get("isHoofdcategorie").setValue(true);
    };
    ProductPanelComponent.prototype.isMain = function (index) {
        var value = this.producten.controls[index].get("isHoofdcategorie").value;
        if (value) {
            return true;
        }
        else {
            return false;
        }
    };
    ProductPanelComponent.prototype.reset = function () {
        for (var i = 0; i < this.producten.controls.length; i++) {
            this.producten.removeAt(i);
        }
    };
    ProductPanelComponent.prototype.revert = function () {
        var _this = this;
        if (!this.formGroup)
            this.formGroup = this.fb.group({});
        this.formGroup.removeControl("producten");
        this.formGroup.addControl("producten", this.fb.array([]));
        if (this.data)
            this.data.map(function (x) { return _this.producten.push(_this.createProduct(x)); });
    };
    ProductPanelComponent.prototype.createProduct = function (x) {
        var product = x || {
            aanvraagId: this.aanvraagId,
            productId: "",
            detail: "",
            isHoofdcategorie: "",
            omschrijving: ""
        };
        return this.fb.group({
            'id': [product.id],
            'aanvraagId': [product.aanvraagId],
            'productId': [product.productId, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'detail': [product.detail],
            'isHoofdcategorie': [product.isHoofdcategorie],
            'omschrijving': [product.omschrijving]
        });
    };
    ProductPanelComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    ProductPanelComponent.propDecorators = {
        formGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        aanvraagId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        edit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        collapsable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        componentsDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    ProductPanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "product-panel",
            template: "\n            <mafo-panel selector=\"producten\" [collapsable]=\"collapsable\" [open]=\"open\">\n                <mafo-panel-heading>\n                    <h5>\n                        PRODUCTEN\n                    </h5>\n                </mafo-panel-heading>\n                <mafo-panel-actions>\n                    <button id=\"intake-add-product-button\" class=\"btn btn-primary pull-right\" (click)=\"addProduct()\" *ngIf=\"edit && !componentsDisabled\" [attr.disabled]=\"disabled ? true : null\">\n                        <span class=\"fa fa-plus\"></span>\n                        <span class=\"hidden-xs hidden-sm\">Toevoegen</span>\n                    </button>\n                </mafo-panel-actions>\n                <mafo-panel-body>\n                    <div *ngIf=\"!edit || (edit && componentsDisabled)\">\n                        <ul class=\"list-group\">\n                            <li class=\"list-group-item\" *ngFor=\"let product of producten.controls; let i=index; trackBy:i\">\n                                <h4 class=\"list-group-item-heading\">\n                                    <strong>\n                                        <product-display [value]=\"product.get('productId').value\"></product-display>\n                                    </strong>\n                                </h4>\n                                <p class=\"list-group-item-text\">{{product.get('detail').value}}<p>\n                                <p class=\"list-group-item-text\" *ngIf=\"isMain(i)\">\n                                    <span >Hoofdcategorie</span>\n                                </p>\n                            </li>\n                        </ul>\n                    </div>\n                    <ng-container *ngIf=\"edit && !componentsDisabled\">\n                        <div class=\"row\" >\n                            <div class=\"col-xs-5\">\n                               Product                      \n                            </div>\n                            <div class=\"col-xs-6 form-group\">\n                               Opmerking\n                            </div>\n                           Hoofdproduct\n                        </div>\n                        <div class=\"row\" *ngFor=\"let product of producten.controls; let i=index; trackBy:i\"  [formGroup]=\"product\">\n                            <div class=\"col-xs-5\">\n                                <form-group>\n                                    <product-select formControlName=\"productId\"></product-select>\n                                </form-group>                                \n                            </div>\n                            <div class=\"col-xs-6 form-group\">\n                                <div class=\"input-group\">\n                                    <input id=\"intake-add-product-opmerking-text-input\" type=\"text\" formControlName=\"detail\" class=\"form-control\" />\n                                    <span class=\"input-group-btn\">\n                                        <button class=\"btn btn-default pull-right\" (click)=\"removeProduct(i)\">\n                                            <span class=\"fa fa-remove fa-lg text-danger\"></span>\n                                        </button>\n                                    </span>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-1 form-group\">\n                                <button id=\"intake-add-product-checkbox\" class=\"btn {{isMain(i)?'btn-success':'btn-default'}}\" (click)=\"setAsMain(i)\">\n                                    <span class=\"fa {{isMain(i)?'fa-check-square text-default':'fa-square-o text-default'}} fa-lg \"></span>\n                                </button>\n                            </div>\n                        </div>\n                    </ng-container>\n                </mafo-panel-body>\n            </mafo-panel>\n            "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ProductPanelComponent);
    return ProductPanelComponent;
}());



/***/ }),

/***/ "RyTg":
/*!***********************************************************!*\
  !*** ./ClientApp/app/componenten/datetimepicker/index.ts ***!
  \***********************************************************/
/*! exports provided: DateTimePickerhModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datetimepicker_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datetimepicker.module */ "Tzkj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateTimePickerhModule", function() { return _datetimepicker_module__WEBPACK_IMPORTED_MODULE_0__["DateTimePickerhModule"]; });




/***/ }),

/***/ "SiFK":
/*!*******************************************************************************************!*\
  !*** ./ClientApp/app/componenten/location-select/location-districtid-select.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LocationDistrictIdSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationDistrictIdSelectComponent", function() { return LocationDistrictIdSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _locatie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locatie.service */ "2CY5");




var LocationDistrictIdSelectComponent = /** @class */ (function () {
    function LocationDistrictIdSelectComponent(locatieSvc) {
        this.locatieSvc = locatieSvc;
        this._value = null;
        this.isLoading = true;
        this.disabled = false;
        this.placeholder = "- maak uw keuze -";
    }
    LocationDistrictIdSelectComponent_1 = LocationDistrictIdSelectComponent;
    Object.defineProperty(LocationDistrictIdSelectComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            if (this.propagateChange)
                this.propagateChange(this._value);
        },
        enumerable: false,
        configurable: true
    });
    ;
    LocationDistrictIdSelectComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    LocationDistrictIdSelectComponent.prototype.ngOnChanges = function (changes) {
        if (changes["district"])
            this.getData();
    };
    LocationDistrictIdSelectComponent.prototype.reload = function () {
        this.getData();
    };
    LocationDistrictIdSelectComponent.prototype.getData = function () {
        var _this = this;
        this.isLoading = true;
        this.locatieSvc.getLocaties().subscribe(function (x) {
            var result = { data: [] };
            if (_this.district) {
                var grouped = x.groupBy("districtId");
                result.data = grouped[_this.district];
            }
            else
                result.data = x;
            if (_this.onBeforeRender)
                _this.onBeforeRender(result);
            _this.data = result.data;
            _this.isLoading = false;
        }, function (x) { return _this.isLoading = false; });
    };
    LocationDistrictIdSelectComponent.prototype.writeValue = function (value) {
        this.value = value || -1;
    };
    LocationDistrictIdSelectComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    LocationDistrictIdSelectComponent.prototype.registerOnTouched = function (fn) { };
    LocationDistrictIdSelectComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    var LocationDistrictIdSelectComponent_1;
    LocationDistrictIdSelectComponent.ctorParameters = function () { return [
        { type: _locatie_service__WEBPACK_IMPORTED_MODULE_3__["LocatieService"] }
    ]; };
    LocationDistrictIdSelectComponent.propDecorators = {
        district: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        onBeforeRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    LocationDistrictIdSelectComponent = LocationDistrictIdSelectComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "location-districtid-select",
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return LocationDistrictIdSelectComponent_1; }), multi: true }
            ],
            template: "\n            <select class=\"form-control\" [class.ajax-loading]=\"isLoading\" [attr.disabled]=\"isLoading || disabled ? true : null\" [(ngModel)]=\"value\">\n                <option value=\"\" selected>{{placeholder}}</option>\n                <option *ngFor=\"let item of data\" [ngValue]=\"item.id\">{{item.naam}}</option>\n            </select>\n            ",
            styles: [".ajax-loading {    \n                background-color: #ffffff;\n                background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPSc2NHB4JyBoZWlnaHQ9JzY0cHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLXJpbmciPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgc3Ryb2tlLWRhc2hhcnJheT0iMTYzLjM2MjgxNzk4NjY2OTI2IDg3Ljk2NDU5NDMwMDUxNDIiIHN0cm9rZT0iI2QyNTM1MyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDsxODAgNTAgNTA7MzYwIDUwIDUwOyIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMHMiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L3N2Zz4=);\n                background-size: 25px 25px;\n                background-position: right 25px center;\n                background-repeat: no-repeat;\n            }"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_locatie_service__WEBPACK_IMPORTED_MODULE_3__["LocatieService"]])
    ], LocationDistrictIdSelectComponent);
    return LocationDistrictIdSelectComponent;
}());



/***/ }),

/***/ "SiM4":
/*!**********************************************!*\
  !*** ./ClientApp/app/core/rxjs-operators.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/observable/throw */ "Drjo");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/observable/of */ "G4OQ");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "S7rW");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "DlyV");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "98u3");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "4XzM");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "MKA9");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "EUDy");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/do */ "92bn");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_add_observable_fromEvent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/observable/fromEvent */ "sx9y");
/* harmony import */ var rxjs_add_observable_fromEvent__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_observable_fromEvent__WEBPACK_IMPORTED_MODULE_9__);
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable
// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators needed for THIS app.
// Statics


// Operators










/***/ }),

/***/ "T+F7":
/*!***************************************************************************!*\
  !*** ./ClientApp/app/componenten/markt-select/markt-display.component.ts ***!
  \***************************************************************************/
/*! exports provided: MarktDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarktDisplayComponent", function() { return MarktDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _markt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markt.service */ "Yk/u");



var MarktDisplayComponent = /** @class */ (function () {
    function MarktDisplayComponent(marktSvc) {
        this.marktSvc = marktSvc;
    }
    Object.defineProperty(MarktDisplayComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            var _this = this;
            if (this._value === val)
                return;
            this._value = val;
            this.marktSvc.get(this._value).subscribe(function (markt) {
                _this.selected = markt.naam + " (" + markt.afkorting + ")";
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    MarktDisplayComponent.ctorParameters = function () { return [
        { type: _markt_service__WEBPACK_IMPORTED_MODULE_2__["MarktService"] }
    ]; };
    MarktDisplayComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    MarktDisplayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "markt-display",
            template: "\n            <span>{{selected}}</span>\n            "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_markt_service__WEBPACK_IMPORTED_MODULE_2__["MarktService"]])
    ], MarktDisplayComponent);
    return MarktDisplayComponent;
}());



/***/ }),

/***/ "T/Yl":
/*!***************************************!*\
  !*** ./ClientApp/app/shared/index.ts ***!
  \***************************************/
/*! exports provided: SharedModule, SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "tBJz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });

/* harmony import */ var _slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.component */ "Euy4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return _slider_component__WEBPACK_IMPORTED_MODULE_1__["SliderComponent"]; });





/***/ }),

/***/ "T7pr":
/*!********************************************************!*\
  !*** ./ClientApp/app/shared/panel/app.shared.panel.ts ***!
  \********************************************************/
/*! exports provided: MafoPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MafoPanelComponent", function() { return MafoPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_shared_panel_layout_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.shared.panel.layout.html */ "yCy6");
/* harmony import */ var _raw_loader_app_shared_panel_layout_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_app_shared_panel_layout_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_shared_panel_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.shared.panel.css */ "bIWg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var MafoPanelComponent = /** @class */ (function () {
    function MafoPanelComponent() {
        this._firstRun = true;
        this._open = true;
        this.selector = new Date().getUTCMilliseconds().toString();
        this.collapsable = false;
        this.padding = true;
        this.loading = false;
        this.open = true;
        this.showHeader = false;
        this.showActions = false;
        this.showBody = false;
        this.showFooter = false;
    }
    MafoPanelComponent.prototype.ngAfterContentInit = function () {
        this.showHeader = this.header.nativeElement.children.length > 0;
        this.showActions = this.actions.nativeElement.children.length > 0;
        this.showBody = this.body.nativeElement.children.length > 0;
        this.showFooter = this.footer.nativeElement.children.length > 0 && this.footer.nativeElement.children[0].children.length > 0;
    };
    MafoPanelComponent.prototype.setPanelClasses = function () {
        var classes = {
            'panel-collapse': this.collapsable,
            //'panel-body': this.padding,
            'collapse': this.collapsable,
            'in': this.open
        };
        return classes;
    };
    MafoPanelComponent.propDecorators = {
        selector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        collapsable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        padding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["panelHeader", { static: true },] }],
        actions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["panelActions", { static: true },] }],
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["panelBody", { static: true },] }],
        footer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["panelFooter", { static: true },] }]
    };
    MafoPanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "mafo-panel",
            template: _raw_loader_app_shared_panel_layout_html__WEBPACK_IMPORTED_MODULE_1___default.a,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [_app_shared_panel_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], MafoPanelComponent);
    return MafoPanelComponent;
}());



/***/ }),

/***/ "Tzkj":
/*!***************************************************************************!*\
  !*** ./ClientApp/app/componenten/datetimepicker/datetimepicker.module.ts ***!
  \***************************************************************************/
/*! exports provided: DateTimePickerhModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimePickerhModule", function() { return DateTimePickerhModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _datepicker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datepicker.component */ "Vywq");
/* harmony import */ var _timepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timepicker.component */ "Wvk8");






var DateTimePickerhModule = /** @class */ (function () {
    function DateTimePickerhModule() {
    }
    DateTimePickerhModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _datepicker_component__WEBPACK_IMPORTED_MODULE_4__["DatePickerComponent"],
                _timepicker_component__WEBPACK_IMPORTED_MODULE_5__["TimePickerComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            exports: [_datepicker_component__WEBPACK_IMPORTED_MODULE_4__["DatePickerComponent"], _timepicker_component__WEBPACK_IMPORTED_MODULE_5__["TimePickerComponent"]]
        })
    ], DateTimePickerhModule);
    return DateTimePickerhModule;
}());



/***/ }),

/***/ "U5uA":
/*!*******************************************************************!*\
  !*** ./ClientApp/app/componenten/datagrid/datagrid.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 100%;\r\n}\r\n\r\n    table.fetchData {\r\n        position: initial !important;\r\n    }\r\n\r\n    table.fetchData thead, table.fetchData tbody {\r\n        display: table;\r\n        width: 100%;\r\n    }\r\n\r\n    table.fetchData tbody {\r\n        min-height: 70px;\r\n    }\r\n\r\n    table.fetchData tbody {\r\n        position: relative !important;\r\n    }\r\n\r\n    table.fetchData tbody:after {\r\n            position: absolute !important;\r\n            top: 0;\r\n            left: 0;\r\n            right: 0;\r\n            bottom: 0;\r\n            background-color: #000000;\r\n            background-color: rgba(0, 0, 0, 0.1);\r\n            background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPSc2NHB4JyBoZWlnaHQ9JzY0cHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLXJpbmciPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgc3Ryb2tlLWRhc2hhcnJheT0iMTYzLjM2MjgxNzk4NjY2OTI2IDg3Ljk2NDU5NDMwMDUxNDIiIHN0cm9rZT0iI2QyNTM1MyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDsxODAgNTAgNTA7MzYwIDUwIDUwOyIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMHMiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L3N2Zz4=);\r\n            background-position: center;\r\n            background-repeat: no-repeat;\r\n            background-size: 50px 50px;\r\n            content: \"\";\r\n        }\r\n\r\n    hr {\r\n    margin-top: 0;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n    .sortable {\r\n    cursor: pointer;\r\n}\r\n\r\n    th span.sort-icon {\r\n    margin-right: 5px;    \r\n}\r\n\r\n    tr.empty, tr.empty td {\r\n    background: inherit !important;\r\n}\r\n\r\n    tr.empty td {\r\n    padding-top: 10px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50ZW4vZGF0YWdyaWQvZGF0YWdyaWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7SUFFSTtRQUNJLDRCQUE0QjtJQUNoQzs7SUFFQTtRQUNJLGNBQWM7UUFDZCxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSw2QkFBNkI7SUFDakM7O0lBRUk7WUFDSSw2QkFBNkI7WUFDN0IsTUFBTTtZQUNOLE9BQU87WUFDUCxRQUFRO1lBQ1IsU0FBUztZQUNULHlCQUF5QjtZQUN6QixvQ0FBb0M7WUFDcEMsaXpCQUFpekI7WUFDanpCLDJCQUEyQjtZQUMzQiw0QkFBNEI7WUFDNUIsMEJBQTBCO1lBQzFCLFdBQVc7UUFDZjs7SUFHUjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0lBRUE7SUFDSSxlQUFlO0FBQ25COztJQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztJQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztJQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvY29tcG9uZW50ZW4vZGF0YWdyaWQvZGF0YWdyaWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4gICAgdGFibGUuZmV0Y2hEYXRhIHtcclxuICAgICAgICBwb3NpdGlvbjogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlLmZldGNoRGF0YSB0aGVhZCwgdGFibGUuZmV0Y2hEYXRhIHRib2R5IHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICB0YWJsZS5mZXRjaERhdGEgdGJvZHkge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDcwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUuZmV0Y2hEYXRhIHRib2R5IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAgICAgdGFibGUuZmV0Y2hEYXRhIHRib2R5OmFmdGVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejQ4YzNabklIZHBaSFJvUFNjMk5IQjRKeUJvWldsbmFIUTlKelkwY0hnbklIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2RtbGxkMEp2ZUQwaU1DQXdJREV3TUNBeE1EQWlJSEJ5WlhObGNuWmxRWE53WldOMFVtRjBhVzg5SW5oTmFXUlpUV2xrSWlCamJHRnpjejBpZFdsc0xYSnBibWNpUGp4eVpXTjBJSGc5SWpBaUlIazlJakFpSUhkcFpIUm9QU0l4TURBaUlHaGxhV2RvZEQwaU1UQXdJaUJtYVd4c1BTSnViMjVsSWlCamJHRnpjejBpWW1zaVBqd3ZjbVZqZEQ0OFkybHlZMnhsSUdONFBTSTFNQ0lnWTNrOUlqVXdJaUJ5UFNJME1DSWdjM1J5YjJ0bExXUmhjMmhoY25KaGVUMGlNVFl6TGpNMk1qZ3hOems0TmpZMk9USTJJRGczTGprMk5EVTVORE13TURVeE5ESWlJSE4wY205clpUMGlJMlF5TlRNMU15SWdabWxzYkQwaWJtOXVaU0lnYzNSeWIydGxMWGRwWkhSb1BTSXlNQ0krUEdGdWFXMWhkR1ZVY21GdWMyWnZjbTBnWVhSMGNtbGlkWFJsVG1GdFpUMGlkSEpoYm5ObWIzSnRJaUIwZVhCbFBTSnliM1JoZEdVaUlIWmhiSFZsY3owaU1DQTFNQ0ExTURzeE9EQWdOVEFnTlRBN016WXdJRFV3SURVd095SWdhMlY1VkdsdFpYTTlJakE3TUM0MU96RWlJR1IxY2owaU1YTWlJSEpsY0dWaGRFTnZkVzUwUFNKcGJtUmxabWx1YVhSbElpQmlaV2RwYmowaU1ITWlQand2WVc1cGJXRjBaVlJ5WVc1elptOXliVDQ4TDJOcGNtTnNaVDQ4TDNOMlp6ND0pO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNTBweCA1MHB4O1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5ociB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnNvcnRhYmxlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG50aCBzcGFuLnNvcnQtaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDsgICAgXHJcbn1cclxuXHJcbnRyLmVtcHR5LCB0ci5lbXB0eSB0ZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbn1cclxudHIuZW1wdHkgdGQge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "UNn+":
/*!***********************************************!*\
  !*** ./ClientApp/app/core/core.interfaces.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "VhTn":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/auth/user-display/user-display.component.layout.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"fullname\"><i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i> {{userProfile.userName}}</span>"

/***/ }),

/***/ "Vywq":
/*!**************************************************************************!*\
  !*** ./ClientApp/app/componenten/datetimepicker/datepicker.component.ts ***!
  \**************************************************************************/
/*! exports provided: DatePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return DatePickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _datepicker_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datepicker.component.scss */ "I8u7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-datepicker */ "76gO");
/* harmony import */ var bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_datepicker_dist_locales_bootstrap_datepicker_nl_BE_min__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap-datepicker/dist/locales/bootstrap-datepicker.nl-BE.min */ "9Ih3");
/* harmony import */ var bootstrap_datepicker_dist_locales_bootstrap_datepicker_nl_BE_min__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_datepicker_dist_locales_bootstrap_datepicker_nl_BE_min__WEBPACK_IMPORTED_MODULE_6__);







var DatePickerComponent = /** @class */ (function () {
    function DatePickerComponent() {
        this._value = "";
        this.propagateChange = function (_) { };
        this.placeholder = "../../...";
        this.disabled = false;
        this.startDate = "";
        this.endDate = "";
    }
    DatePickerComponent_1 = DatePickerComponent;
    DatePickerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var today = new Date();
        var datepair = {
            enabled: true,
            classes: ""
        };
        var dates = this.enabledDates;
        this._jqElement = jquery__WEBPACK_IMPORTED_MODULE_4__(this.input.nativeElement).datepicker({
            language: "nl-BE",
            showMeridian: false,
            autoclose: true,
            assumeNearbyYear: true,
            startDate: this.startDate,
            endDate: this.endDate,
            format: 'dd/mm/yyyy',
            enableOnReadonly: false,
            beforeShowDay: function (date) {
                if (dates) {
                    datepair.enabled = dates.some(function (x) { return x.getDate() == date.getDate() && x.getMonth() == date.getMonth(); });
                    datepair.classes = "";
                }
                return datepair;
            }
        });
        if (this.value)
            this._jqElement.datepicker('setDate', this.formatDate(new Date(this.value)));
        this._jqElement.on("changeDate", function (e) {
            _this.value = new Date(new Date(new Date(e.date).toString()).setHours(0));
        }).on("clearDate", function (e) {
            _this.value = null;
        });
    };
    DatePickerComponent.prototype.ngOnDestroy = function () {
        this._jqElement.datepicker('destroy');
    };
    Object.defineProperty(DatePickerComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            this.propagateChange(val);
        },
        enumerable: false,
        configurable: true
    });
    ;
    DatePickerComponent.prototype.formatDate = function (date) {
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        day = (day < 10 ? '0' : '') + day;
        month = (month < 10 ? '0' : '') + month;
        return day + "/" + month + "/" + year;
    };
    DatePickerComponent.prototype.writeValue = function (value) {
        if (value) {
            this.value = value;
            if (this._jqElement) {
                this._jqElement.datepicker('setDate', new Date(this.value));
            }
        }
        else if (value === "clear") {
            this._jqElement.datepicker('setDate', null);
        }
    };
    DatePickerComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    DatePickerComponent.prototype.registerOnTouched = function (fn) { };
    DatePickerComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled ? true : null;
    };
    var DatePickerComponent_1;
    DatePickerComponent.propDecorators = {
        input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['input', { static: false },] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        startDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        endDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        enabledDates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['dates',] }]
    };
    DatePickerComponent = DatePickerComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "datepicker",
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () { return DatePickerComponent_1; }), multi: true }
            ],
            template: "\n            <div #input class=\"input-group date\">\n                <input type=\"text\" class=\"form-control\" onkeydown=\"event.preventDefault()\" enableOnReadonly=\"true\" [attr.placeholder]=\"placeholder\" [attr.readonly]=\"disabled == true ? true : null\">\n                <div class=\"input-group-addon\" [ngClass]=\"{'disabled': disabled}\">\n                    <span class=\"fa fa-calendar\"></span>\n                </div>\n            </div>\n            ",
            styles: [_datepicker_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], DatePickerComponent);
    return DatePickerComponent;
}());



/***/ }),

/***/ "WmFH":
/*!*******************************************************************************!*\
  !*** ./ClientApp/app/componenten/product-select/product-display.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDisplayComponent", function() { return ProductDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.service */ "mpu8");



var ProductDisplayComponent = /** @class */ (function () {
    function ProductDisplayComponent(productService) {
        this.productService = productService;
    }
    Object.defineProperty(ProductDisplayComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            var _this = this;
            if (this._value === val)
                return;
            this._value = val;
            this.productService.get().subscribe(function (codes) {
                var items = codes.filter(function (x) { return x.id === val; });
                _this.selected = items.length > 0 ? items[0].omschrijving : "";
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    ProductDisplayComponent.ctorParameters = function () { return [
        { type: _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
    ]; };
    ProductDisplayComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    ProductDisplayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "product-display",
            template: "\n            <span>{{selected}}</span>\n            "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductDisplayComponent);
    return ProductDisplayComponent;
}());



/***/ }),

/***/ "Wvk8":
/*!**************************************************************************!*\
  !*** ./ClientApp/app/componenten/datetimepicker/timepicker.component.ts ***!
  \**************************************************************************/
/*! exports provided: TimePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePickerComponent", function() { return TimePickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_timepicker_js_bootstrap_timepicker_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-timepicker/js/bootstrap-timepicker.min */ "PXmU");
/* harmony import */ var bootstrap_timepicker_js_bootstrap_timepicker_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_timepicker_js_bootstrap_timepicker_min__WEBPACK_IMPORTED_MODULE_4__);





var TimePickerComponent = /** @class */ (function () {
    function TimePickerComponent() {
        this._value = "";
        this.disabled = null;
        this.propagateChange = function (_) { };
        this._regex = /P(T(([0-9]*\.?[0-9]*)H)?(([0-9]*\.?[0-9]*)M)?(([0-9]*\.?[0-9]*)S)?)/;
    }
    TimePickerComponent_1 = TimePickerComponent;
    TimePickerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._jqElement = jquery__WEBPACK_IMPORTED_MODULE_3__(this.input.nativeElement).timepicker({
            showMeridian: false,
            minuteStep: 1,
            defaultTime: false
        });
        if (this.value)
            this._jqElement.timepicker('setTime', this.value);
        this._jqElement.on('changeTime.timepicker', function (e) {
            var newValue = e.time.hours + ":" + e.time.minutes;
            _this.propagateChange(newValue);
        });
    };
    Object.defineProperty(TimePickerComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            this.propagateChange(val);
        },
        enumerable: false,
        configurable: true
    });
    ;
    TimePickerComponent.prototype.writeValue = function (value) {
        if (value) {
            this.value = value;
            if (this._jqElement)
                this._jqElement.timepicker('setTime', this.value);
        }
    };
    TimePickerComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    TimePickerComponent.prototype.registerOnTouched = function (fn) { };
    TimePickerComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled ? true : null;
    };
    var TimePickerComponent_1;
    TimePickerComponent.propDecorators = {
        input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['input', { static: false },] }]
    };
    TimePickerComponent = TimePickerComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "timepicker",
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return TimePickerComponent_1; }), multi: true }
            ],
            template: "\n            <div class=\"input-group bootstrap-timepicker timepicker\">\n                <input #input class=\"form-control\" type=\"text\" [attr.disabled]=\"disabled\" />\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-time\"></i></span>\n            </div>\n            ",
            queries: {
                vc: new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"]('input', { static: false })
            }
        })
    ], TimePickerComponent);
    return TimePickerComponent;
}());



/***/ }),

/***/ "Xd4x":
/*!***********************************************************************!*\
  !*** ./ClientApp/app/componenten/document-upload/document.service.ts ***!
  \***********************************************************************/
/*! exports provided: DocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return DocumentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.settings */ "HRaI");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-slim-loading-bar */ "k+RO");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core */ "BxFb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ "JEAp");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);








var DocumentService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DocumentService, _super);
    function DocumentService(http, loader) {
        var _this = _super.call(this, http, loader) || this;
        _this.http = http;
        _this.loader = loader;
        _this.url = _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "documents/";
        return _this;
    }
    DocumentService.prototype.get = function (documentTypeCode, klantId, abonnementWijzigingId) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]();
        if (documentTypeCode)
            params = params.set("documentTypeCode", documentTypeCode);
        if (klantId)
            params = params.set("klantId", klantId.toString());
        if (abonnementWijzigingId)
            params = params.set("abonnementWijzigingId", abonnementWijzigingId.toString());
        this.loader.start();
        return this.http.get(this.url, { headers: this.jsonHeaders, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    DocumentService.prototype.saveDocument = function (document) {
        var _this = this;
        this.loader.start();
        return this.http.post(this.url, document, { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    DocumentService.prototype.downloadDocument = function (documentTypeCode, klantId, abonnementWijzigingId) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]();
        if (documentTypeCode)
            params = params.set("documentTypeCode", documentTypeCode);
        if (klantId)
            params = params.set("klantId", klantId.toString());
        if (abonnementWijzigingId)
            params = params.set("abonnementWijzigingId", abonnementWijzigingId.toString());
        this.loader.start();
        this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + 'documentfiles/', { responseType: 'blob', observe: 'response', params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return [new Blob([res.body], { type: 'application/octet-stream' }), res.headers.get("X-FILENAME")];
        })).subscribe(function (data) {
            file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"](data[0], "" + data[1]);
        });
    };
    DocumentService.prototype.delete = function (documentTypeCode, klantId, abonnementWijzigingId) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]();
        if (documentTypeCode)
            params = params.set("documentTypeCode", documentTypeCode);
        if (klantId)
            params = params.set("klantId", klantId.toString());
        if (abonnementWijzigingId)
            params = params.set("abonnementWijzigingId", abonnementWijzigingId.toString());
        this.loader.start();
        return this.http.post(this.url, document, { headers: this.jsonHeaders, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    DocumentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__["SlimLoadingBarService"] }
    ]; };
    DocumentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__["SlimLoadingBarService"]])
    ], DocumentService);
    return DocumentService;
}(_core__WEBPACK_IMPORTED_MODULE_5__["BaseService"]));



/***/ }),

/***/ "YQPj":
/*!**********************************************!*\
  !*** ./ClientApp/app/core/null-safe.pipe.ts ***!
  \**********************************************/
/*! exports provided: NullSafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullSafePipe", function() { return NullSafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var NullSafePipe = /** @class */ (function () {
    function NullSafePipe() {
    }
    NullSafePipe.prototype.transform = function (value, placeholder) {
        if (placeholder === void 0) { placeholder = "/"; }
        return value != undefined && value ? value : placeholder;
    };
    NullSafePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'nullSafe' })
    ], NullSafePipe);
    return NullSafePipe;
}());



/***/ }),

/***/ "Yk/u":
/*!*****************************************************************!*\
  !*** ./ClientApp/app/componenten/markt-select/markt.service.ts ***!
  \*****************************************************************/
/*! exports provided: MarktService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarktService", function() { return MarktService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.settings */ "HRaI");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core */ "BxFb");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-slim-loading-bar */ "k+RO");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");







var MarktService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MarktService, _super);
    function MarktService(http, loader) {
        var _this = _super.call(this, http, loader) || this;
        _this.http = http;
        _this.loader = loader;
        _this.url = _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + 'markets/';
        return _this;
    }
    MarktService.prototype.getAll = function (query) {
        //TODO: Add chaching
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]();
        if (query) {
            if (query.page)
                params = params.set("page", query.page.toString());
            if (query.pageSize)
                params = params.set("pageSize", query.pageSize.toString());
            if (query.query)
                params = params.set("query", query.query);
            if (query.klantId)
                params = params.set("klantId", query.klantId.toString());
            if (query.district)
                params = params.set("district", query.district);
            if (query.toeTeWijzen)
                params = params.set("toeTeWijzen", query.toeTeWijzen);
            if (query.ingetrokken)
                params = params.set("ingetrokken", query.ingetrokken);
            if (query.wachtlijst)
                params = params.set("wachtlijst", query.wachtlijst);
            if (query.alleenLopendOpgeschortGeschorst)
                params = params.set("alleenLopendOpgeschortGeschorst", query.alleenLopendOpgeschortGeschorst);
            if (query.sort && query.sort.length > 0)
                params = params.set("sort", query.sort.join(","));
        }
        this.loader.start();
        return this.http.get(this.url, { headers: this.jsonHeaders, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }));
    };
    MarktService.prototype.get = function (id) {
        var _this = this;
        this.loader.start();
        return this.http.get(this.url + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    MarktService.prototype.save = function (markt) {
        var _this = this;
        this.loader.start();
        var toAdd = JSON.stringify(markt);
        var action = markt.id && markt.id > 0
            ? this.http.put(this.url + markt.id, toAdd, { headers: this.jsonHeaders })
            : this.http.post(this.url, toAdd, { headers: this.jsonHeaders });
        return action.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    MarktService.prototype.delete = function (id) {
        var _this = this;
        this.loader.start();
        return this.http.delete(this.url + id, { headers: this.jsonHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    MarktService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_5__["SlimLoadingBarService"] }
    ]; };
    MarktService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_5__["SlimLoadingBarService"]])
    ], MarktService);
    return MarktService;
}(_core__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "ZQqU":
/*!*************************************************************************!*\
  !*** ./ClientApp/app/componenten/markt-select/markt-panel.component.ts ***!
  \*************************************************************************/
/*! exports provided: MarktPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarktPanelComponent", function() { return MarktPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_html_markt_panel_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./html/markt-panel.component.html */ "8LSe");
/* harmony import */ var _raw_loader_html_markt_panel_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_html_markt_panel_component_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "mZsw");
/* harmony import */ var _markt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./markt.service */ "Yk/u");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core */ "BxFb");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/observable/of */ "neMA");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "EApP");









var MarktPanelComponent = /** @class */ (function () {
    function MarktPanelComponent(fb, marktService, kavelService, abonnementService, toastr) {
        var _this = this;
        this.fb = fb;
        this.marktService = marktService;
        this.kavelService = kavelService;
        this.abonnementService = abonnementService;
        this.toastr = toastr;
        this.aanvraagSoort = _core__WEBPACK_IMPORTED_MODULE_6__["ApplicationConstants"].AanvraagSoort;
        this.data = [];
        this.max = Number.MAX_VALUE;
        this.open = false;
        this.disabled = false;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.type = _core__WEBPACK_IMPORTED_MODULE_6__["ApplicationConstants"].AanvraagSoort.NieuwePlaatsCode;
        this.componentsDisabled = false;
        this.maxKavels = 8;
        this.marktenLoading = false;
        this.markten = [];
        this.abonnementen = [];
        this.filterDistricten = function ($event) {
            if (_this.klantId) {
                var districten_1 = _this.markten.map(function (x) { return x.district.code; });
                $event.data = $event.data.filter(function (x) { return districten_1.includes(x.code.toUpperCase()); });
            }
        };
    }
    Object.defineProperty(MarktPanelComponent.prototype, "aanvraagMarkten", {
        get: function () {
            return this.formGroup.get("aanvraagMarkten");
        },
        enumerable: false,
        configurable: true
    });
    MarktPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formGroup.addControl("aanvraagMarkten", this.fb.array(this.data.map(function (x) { return _this.createMarkt(x); })));
        this.getMarkten();
        this.aanvraagMarkten.valueChanges.subscribe(function (x) {
            if (_this.onChange.observers.length > 0)
                _this.onChange.emit(_this.aanvraagMarkten.getRawValue());
        });
        if (this.componentsDisabled) {
            this.formGroup.get("aanvraagMarkten").disable();
        }
    };
    MarktPanelComponent.prototype.ngOnChanges = function (changes) {
        if (changes && changes.type) {
            this.getMarkten();
            this.markten = [];
        }
    };
    MarktPanelComponent.prototype.reset = function () {
        for (var i = 0; i < this.aanvraagMarkten.controls.length; i++) {
            this.aanvraagMarkten.removeAt(i);
        }
    };
    MarktPanelComponent.prototype.createMarkt = function (x) {
        var markt = x || {
            marktId: "",
            aantalKavels: 0,
            voorkeur: "",
            districtCode: "",
            aanvraagId: this.aanvraagId,
            abonnementId: null
        };
        return this.fb.group({
            "id": [markt.id],
            "districtCode": [markt.districtCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            "aanvraagId": [markt.aanvraagId],
            "marktId": [markt.marktId, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            "aantalKavels": [markt.aantalKavels],
            "voorkeur": [markt.voorkeur],
            "abonnementId": [markt.abonnementId]
        });
    };
    MarktPanelComponent.prototype.getMarkten = function () {
        var _this = this;
        this.marktenLoading = true;
        var filter = { page: 1, pageSize: Number.MAX_VALUE };
        if (this.type !== _core__WEBPACK_IMPORTED_MODULE_6__["ApplicationConstants"].AanvraagSoort.NieuwePlaatsCode)
            filter['klantId'] = this.klantId;
        if (this.type === _core__WEBPACK_IMPORTED_MODULE_6__["ApplicationConstants"].AanvraagSoort.PlaatsKwijtgeraaktCode)
            filter['ingetrokken'] = true;
        if (this.type === _core__WEBPACK_IMPORTED_MODULE_6__["ApplicationConstants"].AanvraagSoort.RuilingCode || this.type === _core__WEBPACK_IMPORTED_MODULE_6__["ApplicationConstants"].AanvraagSoort.UitbreidingCode)
            filter['alleenLopendOpgeschortGeschorst'] = true;
        this.marktService.getAll(filter).subscribe(function (markten) {
            _this.markten = markten.embedded.resourceList;
            _this.marktenLoading = false;
        });
    };
    MarktPanelComponent.prototype.addMarkt = function () {
        var link = document.getElementsByName('markten');
        var panel = document.getElementById('markten');
        if (link && link[0] && !panel.classList.contains('in')) {
            link[0].click();
        }
        this.aanvraagMarkten.push(this.createMarkt());
    };
    MarktPanelComponent.prototype.removeMarkt = function (index) {
        this.aanvraagMarkten.removeAt(index);
    };
    MarktPanelComponent.prototype.filterMarkten = function (district, marktId) {
        if (this.markten.length <= 0)
            return [];
        var selectedMarkten = this.aanvraagMarkten.value.filter(function (markt) { return markt.marktId !== ""; }).map(function (markt) {
            return markt.marktId;
        });
        return this.markten.filter(function (markt) {
            return (markt.district.code === district && selectedMarkten.findIndex(function (value) { return value === markt.id; }) === -1) || markt.id === marktId;
        });
    };
    MarktPanelComponent.prototype.districtChanged = function (index, districtCode) {
        this.aanvraagMarkten.at(index).patchValue({ marktId: "", aantalKavels: 0, abonnementId: null });
    };
    MarktPanelComponent.prototype.marktChanged = function (index, selectedValue) {
        //selected value looks like this -> "{districtCode}: {marktId}"
        var marktId = selectedValue.substring(selectedValue.lastIndexOf(':') + 1).trim();
        this.getAbonnementen(marktId);
        this.aanvraagMarkten.at(index).patchValue({ aantalKavels: 0, abonnementId: null });
    };
    MarktPanelComponent.prototype.getAbonnementen = function (marktId) {
        var _this = this;
        if (!marktId) {
            this.abonnementen = [];
        }
        else {
            this.abonnementService.GetAllForKlantOpMarkt(this.klantId, marktId).subscribe(function (data) {
                _this.abonnementen = data;
            }, function (error) {
                _this.toastr.error("Kon abonnementen niet ophalen");
                _this.toastr.error(error);
            });
        }
    };
    MarktPanelComponent.prototype.selectAbonnement = function (abonnement, index, $event) {
        $event.preventDefault();
        $event.stopPropagation();
        var aanvraagMarkt = this.aanvraagMarkten.at(index);
        var abonnementCtrl = aanvraagMarkt.get("abonnementId");
        abonnement.selected = abonnementCtrl.value !== abonnement.id;
        abonnementCtrl.setValue(abonnementCtrl.value !== abonnement.id ? abonnement.id : null);
        if (this.type == _core__WEBPACK_IMPORTED_MODULE_6__["ApplicationConstants"].AanvraagSoort.RuilingCode) {
            aanvraagMarkt.patchValue({ aantalKavels: abonnement.selected ? abonnement.kavels.length : 0 });
        }
        //this.markten.filter(x => x.id === value.marktId).map(x => x.abonnementen).forEach(abonnementen => {
        //    abonnementen.forEach(ls => {
        //        ls.forEach(x => {
        //            x.selected = abonnement.id === x.id;
        //        });
        //    });
        //});
    };
    MarktPanelComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _markt_service__WEBPACK_IMPORTED_MODULE_5__["MarktService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["KavelService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["AbonnementService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }
    ]; };
    MarktPanelComponent.propDecorators = {
        formGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        aanvraagId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        klantId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        componentsDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        maxKavels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    MarktPanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "markt-panel",
            template: _raw_loader_html_markt_panel_component_html__WEBPACK_IMPORTED_MODULE_1___default.a,
            styles: [".badge { cursor: pointer;}", ".ajax-loading {    \n                background-color: #ffffff;\n                background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPSc2NHB4JyBoZWlnaHQ9JzY0cHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLXJpbmciPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgc3Ryb2tlLWRhc2hhcnJheT0iMTYzLjM2MjgxNzk4NjY2OTI2IDg3Ljk2NDU5NDMwMDUxNDIiIHN0cm9rZT0iI2QyNTM1MyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDsxODAgNTAgNTA7MzYwIDUwIDUwOyIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMHMiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L3N2Zz4=);\n                background-size: 50px 50px;\n                background-position: center;\n                background-repeat: no-repeat;\n            }"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _markt_service__WEBPACK_IMPORTED_MODULE_5__["MarktService"], _services__WEBPACK_IMPORTED_MODULE_4__["KavelService"], _services__WEBPACK_IMPORTED_MODULE_4__["AbonnementService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]])
    ], MarktPanelComponent);
    return MarktPanelComponent;
}());



/***/ }),

/***/ "bIWg":
/*!*********************************************************!*\
  !*** ./ClientApp/app/shared/panel/app.shared.panel.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".panel-heading {\r\n    position: relative;\r\n}\r\n\r\n    .panel-heading .panel-actions {\r\n        position: absolute;\r\n        top: 10px;\r\n        right: 15px;\r\n        height: 100%;\r\n        /*overflow-y: hidden;*/\r\n        padding: 15px 7.5px;\r\n        margin: -10px -15px 0 0;\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n\r\n    .panel-actions {\r\n        text-transform:none;\r\n    }\r\n\r\n    .panel-title > .small:active, .panel-title > .small:focus, .panel-title > .small:hover, .panel-title > .small > a:active, .panel-title > .small > a:focus, .panel-title > .small > a:hover, .panel-title > a:active, .panel-title > a:focus, .panel-title > a:hover, .panel-title > small:active, .panel-title > small:focus, .panel-title > small:hover, .panel-title > small > a:active, .panel-title > small > a:focus, .panel-title > small > a:hover {\r\n    color: inherit;\r\n    text-decoration: inherit;\r\n}\r\n\r\n    .panel-loading {\r\n    position: relative !important;\r\n}\r\n\r\n    .panel-loading:after {\r\n        position: absolute !important;\r\n        top: 0;\r\n        left: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        background-color: #000000;\r\n        background-color: rgba(0, 0, 0, 0.1);\r\n        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPSc2NHB4JyBoZWlnaHQ9JzY0cHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLXJpbmciPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgc3Ryb2tlLWRhc2hhcnJheT0iMTYzLjM2MjgxNzk4NjY2OTI2IDg3Ljk2NDU5NDMwMDUxNDIiIHN0cm9rZT0iI2QyNTM1MyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDsxODAgNTAgNTA7MzYwIDUwIDUwOyIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMHMiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L3N2Zz4=);\r\n        background-position: center;\r\n        background-repeat: no-repeat;\r\n        background-size: 50px 50px;\r\n        content: \"\";\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvc2hhcmVkL3BhbmVsL2FwcC5zaGFyZWQucGFuZWwuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztJQUVJO1FBQ0ksa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxXQUFXO1FBQ1gsWUFBWTtRQUNaLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBRXZCLGFBQWE7UUFHYixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0lBR0o7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0FBQzVCOztJQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztJQUVJO1FBQ0ksNkJBQTZCO1FBQzdCLE1BQU07UUFDTixPQUFPO1FBQ1AsUUFBUTtRQUNSLFNBQVM7UUFDVCx5QkFBeUI7UUFDekIsb0NBQW9DO1FBQ3BDLGl6QkFBaXpCO1FBQ2p6QiwyQkFBMkI7UUFDM0IsNEJBQTRCO1FBQzVCLDBCQUEwQjtRQUMxQixXQUFXO0lBQ2YiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9zaGFyZWQvcGFuZWwvYXBwLnNoYXJlZC5wYW5lbC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWwtaGVhZGluZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiAgICAucGFuZWwtaGVhZGluZyAucGFuZWwtYWN0aW9ucyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLypvdmVyZmxvdy15OiBoaWRkZW47Ki9cclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDcuNXB4O1xyXG4gICAgICAgIG1hcmdpbjogLTEwcHggLTE1cHggMCAwO1xyXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhbmVsLWFjdGlvbnMge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOm5vbmU7XHJcbiAgICB9XHJcblxyXG5cclxuLnBhbmVsLXRpdGxlID4gLnNtYWxsOmFjdGl2ZSwgLnBhbmVsLXRpdGxlID4gLnNtYWxsOmZvY3VzLCAucGFuZWwtdGl0bGUgPiAuc21hbGw6aG92ZXIsIC5wYW5lbC10aXRsZSA+IC5zbWFsbCA+IGE6YWN0aXZlLCAucGFuZWwtdGl0bGUgPiAuc21hbGwgPiBhOmZvY3VzLCAucGFuZWwtdGl0bGUgPiAuc21hbGwgPiBhOmhvdmVyLCAucGFuZWwtdGl0bGUgPiBhOmFjdGl2ZSwgLnBhbmVsLXRpdGxlID4gYTpmb2N1cywgLnBhbmVsLXRpdGxlID4gYTpob3ZlciwgLnBhbmVsLXRpdGxlID4gc21hbGw6YWN0aXZlLCAucGFuZWwtdGl0bGUgPiBzbWFsbDpmb2N1cywgLnBhbmVsLXRpdGxlID4gc21hbGw6aG92ZXIsIC5wYW5lbC10aXRsZSA+IHNtYWxsID4gYTphY3RpdmUsIC5wYW5lbC10aXRsZSA+IHNtYWxsID4gYTpmb2N1cywgLnBhbmVsLXRpdGxlID4gc21hbGwgPiBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xyXG59XHJcblxyXG4ucGFuZWwtbG9hZGluZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuICAgIC5wYW5lbC1sb2FkaW5nOmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0OGMzWm5JSGRwWkhSb1BTYzJOSEI0SnlCb1pXbG5hSFE5SnpZMGNIZ25JSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdkbWxsZDBKdmVEMGlNQ0F3SURFd01DQXhNREFpSUhCeVpYTmxjblpsUVhOd1pXTjBVbUYwYVc4OUluaE5hV1JaVFdsa0lpQmpiR0Z6Y3owaWRXbHNMWEpwYm1jaVBqeHlaV04wSUhnOUlqQWlJSGs5SWpBaUlIZHBaSFJvUFNJeE1EQWlJR2hsYVdkb2REMGlNVEF3SWlCbWFXeHNQU0p1YjI1bElpQmpiR0Z6Y3owaVltc2lQand2Y21WamRENDhZMmx5WTJ4bElHTjRQU0kxTUNJZ1kzazlJalV3SWlCeVBTSTBNQ0lnYzNSeWIydGxMV1JoYzJoaGNuSmhlVDBpTVRZekxqTTJNamd4TnprNE5qWTJPVEkySURnM0xqazJORFU1TkRNd01EVXhORElpSUhOMGNtOXJaVDBpSTJReU5UTTFNeUlnWm1sc2JEMGlibTl1WlNJZ2MzUnliMnRsTFhkcFpIUm9QU0l5TUNJK1BHRnVhVzFoZEdWVWNtRnVjMlp2Y20wZ1lYUjBjbWxpZFhSbFRtRnRaVDBpZEhKaGJuTm1iM0p0SWlCMGVYQmxQU0p5YjNSaGRHVWlJSFpoYkhWbGN6MGlNQ0ExTUNBMU1Ec3hPREFnTlRBZ05UQTdNell3SURVd0lEVXdPeUlnYTJWNVZHbHRaWE05SWpBN01DNDFPekVpSUdSMWNqMGlNWE1pSUhKbGNHVmhkRU52ZFc1MFBTSnBibVJsWm1sdWFYUmxJaUJpWldkcGJqMGlNSE1pUGp3dllXNXBiV0YwWlZSeVlXNXpabTl5YlQ0OEwyTnBjbU5zWlQ0OEwzTjJaejQ9KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwcHggNTBweDtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgfSJdfQ== */");

/***/ }),

/***/ "e7Ub":
/*!*************************************************************!*\
  !*** ./ClientApp/app/shared/quantity-selector.component.ts ***!
  \*************************************************************/
/*! exports provided: QuantitySelectorComponent, rangeValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuantitySelectorComponent", function() { return QuantitySelectorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeValidator", function() { return rangeValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");



var QuantitySelectorComponent = /** @class */ (function () {
    function QuantitySelectorComponent() {
        this._value = 0;
        this.isValid = true;
        this.disabled = false;
        this.max = Number.MAX_VALUE;
        this.min = Number.MIN_VALUE;
        this.readonly = false;
        this.propagateChange = function (_) { };
        this.validateFn = function () { };
    }
    QuantitySelectorComponent_1 = QuantitySelectorComponent;
    Object.defineProperty(QuantitySelectorComponent.prototype, "value", {
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
    QuantitySelectorComponent.prototype.ngOnInit = function () {
        this.validateFn = rangeValidator(this.min, this.max);
        if (this.readonly === false) {
            this.readonly = null;
        }
    };
    QuantitySelectorComponent.prototype.ngOnChanges = function (inputs) {
        if (inputs.max || inputs.min) {
            this.validateFn = rangeValidator(this.min, this.max);
        }
    };
    QuantitySelectorComponent.prototype.increment = function () {
        this.value++;
    };
    ;
    QuantitySelectorComponent.prototype.decrement = function () {
        this.value--;
    };
    ;
    QuantitySelectorComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
            this.value = value;
        }
    };
    QuantitySelectorComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    QuantitySelectorComponent.prototype.registerOnTouched = function (fn) { };
    QuantitySelectorComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    QuantitySelectorComponent.prototype.validate = function (c) {
        return this.validateFn(c);
    };
    var QuantitySelectorComponent_1;
    QuantitySelectorComponent.propDecorators = {
        max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    QuantitySelectorComponent = QuantitySelectorComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "quantity-selector",
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return QuantitySelectorComponent_1; }), multi: true },
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return QuantitySelectorComponent_1; }), multi: true }
            ],
            template: "\n    <div class=\"input-group\">\n        <span class=\"input-group-btn\" >\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"decrement()\" [attr.disabled]=\"readonly || value <= min ? true : null\">\n                <i class=\"fa fa-minus\" > </i>\n            </button>\n        </span>\n        <input type= \"number\" class=\"form-control\" [(ngModel)]=\"value\" [attr.readonly]=\"readonly\" />\n        <span class=\"input-group-btn\" >\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"increment()\" [attr.disabled]=\"readonly || value >= max ? true : null\">\n                <i class=\"fa fa-plus\"> </i>\n            </button>\n        </span>\n    </div>\n"
        })
    ], QuantitySelectorComponent);
    return QuantitySelectorComponent;
}());

function rangeValidator(min, max) {
    return function (c) {
        var err = {
            rangeValidator: {
                valid: false,
                given: c.value,
                max: max || Number.MAX_VALUE,
                min: min || Number.MIN_VALUE
            }
        };
        return (c.value > +max || c.value < +min) ? err : null;
    };
}


/***/ }),

/***/ "ePEz":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/navigation/app.navigation.layout.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\r\n    <div *ngIf=\"!loggedOut\" id=\"HeaderNAV\" [class]=\"container-fluid\" [ngClass]=\"{'acceptation-bar': environmentclass === 'acceptation', 'dev-bar': environmentclass === 'development', 'prod-bar' : environmentclass === 'production'}\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed right\" aria-expanded=\"false\" (click)=\"showMenu = !showMenu\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" routerLink=\"/\">\r\n                <div style='position: absolute; top: 0px; left: 0px'>\r\n                    <img src=\"../../assets/images/A.png\" alt=\"Logo stad Antwerpen\" />\r\n                    <span style=\"padding-left: 10px;\">Markten & Foren</span>\r\n                </div>\r\n            </a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <span class=\"glyphicon glyphicon-user\"></span>\r\n                        <span><strong>{{userProfile.fullName}}</strong></span>\r\n                        <span class=\"glyphicon glyphicon-chevron-down\"></span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li>\r\n                            <div class=\"navbar-login\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-lg-4\">\r\n                                        <p class=\"text-center\">\r\n                                            <span class=\"glyphicon glyphicon-user icon-size\"></span>\r\n                                        </p>\r\n                                    </div>\r\n                                    <div class=\"col-lg-8\">\r\n                                        <p class=\"text-left\"><strong>{{userProfile.fullName}}</strong></p>\r\n                                        <p class=\"text-left small\">{{userProfile.userName}}</p>\r\n                                        <p class=\"text-left\">\r\n                                            <a (click)=\"logout()\" class=\"btn btn-danger btn-block\">Afmelden</a>\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"loggedOut\" id=\"HeaderNAV\" [class]=\"container-fluid\" [ngClass]=\"{'acceptation-bar': environmentclass === 'acceptation', 'dev-bar': environmentclass === 'development', 'prod-bar' : environmentclass === 'production'}\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" (click)=\"login()\">\r\n                <div style='position: absolute; top: 0px; left: 0px'>\r\n                    <img src=\"../../assets/images/A.png\" alt=\"Logo stad Antwerpen\" />\r\n                    <span style=\"padding-left: 10px;\">Markten & Foren</span>\r\n                </div>\r\n            </a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <a (click)=\"login()\" class=\"btn btn-outline-secondary btn-block\">Login</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<aside *ngIf=\"!loggedOut\" id=\"nav-container\" [ngClass]=\"{ open : showMenu }\">\r\n    <div id=\"nav-wrapper\">\r\n        <ul id=\"nav\">\r\n            <li *ngIf=\"menuWachtlijst | async\" (click)=\"activate($event, 'wachtlijst')\" [class.open]=\"isActive(['wachtlijst'])\">\r\n                <a href=\"#\"><i class=\"fa fa-list-alt\"><span class=\"icon-bg bg-orange\"></span></i><span id=\"sidebar-item-wachtlijst\">Wachtlijst</span></a>\r\n                <ul>\r\n                    <li routerLinkActive=\"active\">\r\n                        <a id=\"sidebar-subitem-intake\" routerLink=\"/wachtlijst/intake\"><i class=\"fa fa-caret-right\"></i><span data-i18n=\"Intake\" >Intake</span></a>\r\n                    </li>\r\n                    <li routerLinkActive=\"active\">\r\n                        <a id=\"sidebar-subitem-pre-registratie\" routerLink=\"/wachtlijst/preregistratie\"><i class=\"fa fa-caret-right\"></i><span data-i18n=\"Pre-registratie\" >Pre-registratie</span></a>\r\n                    </li>\r\n                    <li routerLinkActive=\"active\">\r\n                        <a id=\"sidebar-subitem-registratie\" routerLink=\"/wachtlijst/registratie\"><i class=\"fa fa-caret-right\"></i><span data-i18n=\"Registratie\" >Registratie</span></a>\r\n                    </li>\r\n                    <li *ngIf=\"menuItemReservatie\" routerLinkActive=\"active\">\r\n                        <a id=\"sidebar-subitem-reservatie\" routerLink=\"/wachtlijst/reservatie\"><i class=\"fa fa-caret-right\"></i><span data-i18n=\"Reservatie\" >Reservatie</span></a>\r\n                    </li>\r\n                    <li routerLinkActive=\"active\">\r\n                        <a id=\"sidebar-subitem-hernieuwing-inschrijving\" routerLink=\"/wachtlijst/hernieuwinginschrijving\"><i class=\"fa fa-caret-right\"></i><span data-i18n=\"HernieuwingInschrijving\" >Hernieuwing inschrijving</span></a>\r\n                    </li>\r\n                </ul>\r\n                <i class=\"fa icon-has-ul\" [class.fa-caret-right]=\"!isActive(['wachtlijst'])\" [class.fa-caret-down]=\"isActive(['wachtlijst'])\"></i>\r\n            </li>\r\n            <li *ngIf=\"menuKlant | async\" (click)=\"activate($event, 'klant')\" [class.open]=\"isActive(['klant'])\">\r\n                <a href=\"#\" id=\"sidebar-item-klant\"><i class=\"fa fa-users\"><span class=\"icon-bg bg-danger\"></span></i><span >Klant</span></a>\r\n                <ul>\r\n                    <li routerLinkActive=\"active\">\r\n                        <a id=\"sidebar-subitem-commercieel\" routerLink=\"/klant/commercieel\"><i class=\"fa fa-caret-right\"></i><span >Commercieel</span></a>\r\n                    </li>\r\n                    <li routerLinkActive=\"active\">\r\n                        <a id=\"sidebar-subitem-niet-commercieel\" routerLink=\"/klant/nietcommercieel\"><i class=\"fa fa-caret-right\"></i><span >Niet-commercieel</span></a>\r\n                    </li>\r\n                </ul>\r\n                <i class=\"fa icon-has-ul\" [class.fa-caret-right]=\"!isActive(['klant'])\" [class.fa-caret-down]=\"isActive(['klant'])\"></i>\r\n            </li>\r\n            <li *ngIf=\"menuMarkt | async\" (click)=\"activate($event, 'markt')\" [class.open]=\"isActive(['markt'])\">\r\n                <a href=\"#\" id=\"sidebar-item-markt\"><i class=\"fa fa-dot-circle-o\"><span class=\"icon-bg bg-warning\"></span></i><span >Markt</span></a>\r\n                <ul>\r\n                    <li routerLinkActive=\"active\">\r\n                        <a id=\"sidebar-subitem-markt-beheren\" routerLink=\"/markt/beheer\"><i class=\"fa fa-caret-right\"></i><span >Markt beheren</span></a>\r\n                    </li>\r\n                    <li routerLinkActive=\"active\">\r\n                        <a id=\"sidebar-subitem-marktboekje\" routerLink=\"/markt/boekje\"><i class=\"fa fa-caret-right\"></i><span >Marktboekje</span></a>\r\n                    </li>\r\n                </ul>\r\n                <i class=\"fa icon-has-ul\" [class.fa-caret-right]=\"!isActive(['markt'])\" [class.fa-caret-down]=\"isActive(['markt'])\"></i>\r\n            </li>\r\n            <li *ngIf=\"menuAbonnement | async\" (click)=\"activate($event, 'abonnement')\" [class.open]=\"isActive(['abonnement'])\">\r\n                <a id=\"sidebar-item-abonnement\" href=\"#\"><i class=\"fa fa-list-alt\"><span class=\"icon-bg bg-info\"></span></i><span >Abonnement</span> </a>\r\n                <ul>\r\n                    <li routerLinkActive=\"active\">\r\n                        <a id=\"sidebar-subitem-huidig\" routerLink=\"/abonnement/huidig\"><i class=\"fa fa-caret-right\"></i><span >Huidig</span></a>\r\n                    </li>\r\n                </ul>\r\n                <i class=\"fa icon-has-ul\" [class.fa-caret-right]=\"!isActive(['abonnement'])\" [class.fa-caret-down]=\"isActive(['abonnement'])\"></i>\r\n            </li>\r\n            <li *ngIf=\"menuFacturatie | async\" (click)=\"activate($event, 'factuur')\" [class.open]=\"isActive(['factuur'])\">\r\n                <a id=\"sidebar-item-facturatie\" href=\"#\"><i class=\"fa fa-dot-circle-o\"><span class=\"icon-bg bg-success\"></span></i><span >Facturatie</span></a>\r\n                <ul>\r\n                    <li routerLinkActive=\"active\">\r\n                        <a  id=\"sidebar-subitem-halfjaarlijks\" routerLink=\"/factuur/halfjaarlijkse\"><i class=\"fa fa-caret-right\"></i><span>Halfjaarlijkse facturatie</span></a>\r\n                    </li>\r\n                    <li routerLinkActive=\"active\">\r\n                        <a id=\"sidebar-subitem-tussentijdse\" routerLink=\"/factuur/tussentijdse\"><i class=\"fa fa-caret-right\"></i><span>Tussentijdse facturatie</span></a>\r\n                    </li>\r\n                    <li routerLinkActive=\"active\">\r\n                        <a id=\"sidebar-subitem-terugbetaling\" routerLink=\"/factuur/terugbetalingen\"><i class=\"fa fa-caret-right\"></i><span>Terugbetalingen</span></a>\r\n                    </li>\r\n                    <li routerLinkActive=\"active\">\r\n                        <a id=\"sidebar-subitem-historiek\" routerLink=\"/factuur/historiek\"><i class=\"fa fa-caret-right\"></i><span>Historiek</span></a>\r\n                    </li>\r\n                </ul>\r\n                <i class=\"fa icon-has-ul\" [class.fa-caret-right]=\"!isActive(['factuur'])\" [class.fa-caret-down]=\"isActive(['factuur'])\"></i>\r\n            </li>\r\n            <li *ngIf=\"menuRapportage | async\" (click)=\"activate($event, 'rapportage')\" [class.open]=\"isActive(['rapportage'])\">\r\n                <a id=\"sidebar-item-rapportage\" href=\"#\"><i class=\"fa fa-file-text-o\"><span class=\"icon-bg bg-violet\"></span></i><span>Rapportage</span></a>\r\n                <ul>\r\n                    <li routerLinkActive=\"active\">\r\n                        <a id=\"sidebar-subitem-csv-export\" routerLink=\"rapportage/csv-export\"><i class=\"fa fa-caret-right\"></i><span>CSV Export</span></a>\r\n                    </li>\r\n                </ul>\r\n                <i class=\"fa icon-has-ul\" [class.fa-caret-right]=\"!isActive(['rapportage'])\" [class.fa-caret-down]=\"isActive(['rapportage'])\"></i>\r\n            </li>\r\n            <li *ngIf=\"menuBeheer | async\" (click)=\"activate($event, 'beheer')\" [class.open]=\"isActive(['beheer'])\">\r\n                <a id=\"sidebar-item-beheer\" href=\"#\"><i class=\"fa fa-cogs\"><span class=\"icon-bg bg-danger\"></span></i><span>Beheer</span></a>\r\n                <ul>\r\n                    <li routerLinkActive=\"active\">\r\n                        <a id=\"sidebar-subitem-beheer-variabelen\" routerLink=\"beheer/variabelen\"><i class=\"fa fa-caret-right\"></i><span>Beheer Variabelen</span></a>\r\n                    </li>\r\n                </ul>\r\n                <i class=\"fa icon-has-ul\" [class.fa-caret-right]=\"!isActive(['beheer'])\" [class.fa-caret-down]=\"isActive(['beheer'])\"></i>\r\n            </li>\r\n        </ul>\r\n        <footer class=\"copyright\">\r\n            <p>&copy; {{year}} - Digipolis Antwerpen</p>\r\n        </footer>\r\n    </div>\r\n</aside>"

/***/ }),

/***/ "f/jx":
/*!***************************************************************************!*\
  !*** ./ClientApp/app/componenten/code-select/code-id-select.component.ts ***!
  \***************************************************************************/
/*! exports provided: CodeSelectIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSelectIdComponent", function() { return CodeSelectIdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _code_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code.service */ "Adg9");




var CodeSelectIdComponent = /** @class */ (function () {
    function CodeSelectIdComponent(codeService) {
        this.codeService = codeService;
        this.isLoading = true;
        this.disabled = false;
        this.placeholder = "- maak uw keuze -";
    }
    CodeSelectIdComponent_1 = CodeSelectIdComponent;
    Object.defineProperty(CodeSelectIdComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            if (this.propagateChange)
                this.propagateChange(this._value);
        },
        enumerable: false,
        configurable: true
    });
    ;
    CodeSelectIdComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    CodeSelectIdComponent.prototype.ngOnChanges = function (changes) {
        if (changes["type"])
            this.getData();
    };
    CodeSelectIdComponent.prototype.reload = function () {
        this.getData();
    };
    CodeSelectIdComponent.prototype.getData = function () {
        var _this = this;
        this.isLoading = true;
        this.codeService.getCodes(this.type).subscribe(function (x) {
            var result = { data: x };
            if (_this.onBeforeRender)
                _this.onBeforeRender(result);
            _this.data = result.data;
            _this.isLoading = false;
        }, function (x) { return _this.isLoading = false; });
    };
    CodeSelectIdComponent.prototype.writeValue = function (value) {
        this.value = value || "";
    };
    CodeSelectIdComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    CodeSelectIdComponent.prototype.registerOnTouched = function (fn) { };
    CodeSelectIdComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    var CodeSelectIdComponent_1;
    CodeSelectIdComponent.ctorParameters = function () { return [
        { type: _code_service__WEBPACK_IMPORTED_MODULE_3__["CodeService"] }
    ]; };
    CodeSelectIdComponent.propDecorators = {
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        onBeforeRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    CodeSelectIdComponent = CodeSelectIdComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "code-id-select",
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return CodeSelectIdComponent_1; }), multi: true }
            ],
            template: "\n            <select id=\"{{type}}-dropdown\" class=\"form-control\" [class.ajax-loading]=\"isLoading\" [attr.disabled]=\"isLoading || disabled ? true : null\" [(ngModel)]=\"value\">\n                <option value=\"-1\" selected>{{placeholder}}</option>\n                <option *ngFor=\"let item of data\" [ngValue]=\"item.id\">{{item.omschrijving}}</option>\n            </select>\n            ",
            styles: [".ajax-loading {    \n                background-color: #ffffff;\n                background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPSc2NHB4JyBoZWlnaHQ9JzY0cHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLXJpbmciPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgc3Ryb2tlLWRhc2hhcnJheT0iMTYzLjM2MjgxNzk4NjY2OTI2IDg3Ljk2NDU5NDMwMDUxNDIiIHN0cm9rZT0iI2QyNTM1MyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDsxODAgNTAgNTA7MzYwIDUwIDUwOyIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMHMiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L3N2Zz4=);\n                background-size: 25px 25px;\n                background-position: right 25px center;\n                background-repeat: no-repeat;\n            }"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_code_service__WEBPACK_IMPORTED_MODULE_3__["CodeService"]])
    ], CodeSelectIdComponent);
    return CodeSelectIdComponent;
}());



/***/ }),

/***/ "fSIX":
/*!*****************************************************************************!*\
  !*** ./ClientApp/app/auth/user-display/user-display.component.styling.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fullname {\n  font-style: italic;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvYXV0aC91c2VyLWRpc3BsYXkvdXNlci1kaXNwbGF5LmNvbXBvbmVudC5zdHlsaW5nLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVSxrQkFBaUI7QUFFM0IiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9hdXRoL3VzZXItZGlzcGxheS91c2VyLWRpc3BsYXkuY29tcG9uZW50LnN0eWxpbmcuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsbmFtZXtmb250LXN0eWxlOml0YWxpY30iXX0= */");

/***/ }),

/***/ "g6hV":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/componenten/datagrid/datagrid.layout.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class.table-responsive]=\"settings.responsive\">\r\n    <table [ngClass]=\"setTableCss()\" [class.fetchData]=\"isLoading\">\r\n        <thead (click)=\"sortField($event)\">\r\n            <tr>\r\n                <th *ngFor=\"let field of settings.fields\" [attr.data-sort]=\"field.field\" [class.sortable]=\"field.sortable\" [ngStyle]=\"{ width: field.width }\">\r\n                    {{field.title || \"\"}}\r\n                    <span *ngIf=\"field.sortable\" [ngClass]=\"calculateSortOrder(field)\" class=\"sort-icon glyphicon pull-right\"></span>\r\n                </th>\r\n                <th [hidden]=\"!rowActions\">\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody (click)=\"clickRow($event)\">\r\n            <tr *ngIf=\"!resourceList || resourceList.length <= 0\" class=\"empty\">\r\n                <td [attr.colspan]=\"settings.fields.length + (!rowActions ? 1 : 0)\">\r\n                    Geen gegevens gevonden\r\n                </td>\r\n            </tr>\r\n            <tr *ngFor=\"let item of resourceList; let i=index; trackBy:i\" [attr.data-index]=\"i\" data-type=\"display\" [class.active]=\"i == settings.selectedIndex\" [style.cursor]=\"rowClicked.observers.length > 0 ? 'pointer' : 'inherit'\">\r\n                <ng-container *ngIf=\"!rowTemplate\">\r\n                    <td *ngFor=\"let field of settings.fields\" [ngStyle]=\"{ width: field.width }\">\r\n                        {{displayField(item, field.field)}}\r\n                    </td>\r\n                </ng-container>\r\n                <ng-template [ngTemplateOutlet]=\"rowTemplate\" [ngTemplateOutletContext]=\"{ item: item, index: i}\" *ngIf=\"rowTemplate\">\r\n                </ng-template>\r\n                <td data-type=\"actions\" class=\"text-right actions\" *ngIf=\"rowActions\">\r\n                    <ng-template [ngTemplateOutlet]=\"rowActions\" [ngTemplateOutletContext]=\"{ item: item, index: i}\">\r\n                    </ng-template>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<div *ngIf=\"settings.showPaging\">\r\n    <hr />\r\n    <div class=\"row form-inline\">\r\n        <div class=\"col-sm-12 col-md-6\">\r\n            <select class=\"form-control\" [(ngModel)]=\"settings.paging.size\" (ngModelChange)=\"pageSizeChanged()\" [disabled]=\"isLoading\">\r\n                <option *ngFor=\"let ps of settings.pageSizes\" [ngValue]=\"ps\">{{ps}}</option>\r\n            </select>\r\n            &nbsp;&nbsp;\r\n            <label id=\"records-count-display\">{{pageDisplayContext()}}</label>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-6 text-right\">\r\n            <nav>\r\n                <ul class=\"pagination\" (click)=\"currentPageChanged($event)\">\r\n                    <li [class.disabled]=\"settings.paging.number == 1 || isLoading\">\r\n                        <a href=\"javascript:void()\" data-action=\"first\">\r\n                            <span aria-hidden=\"true\" class=\"glyphicon glyphicon-fast-backward\"></span>\r\n                        </a>\r\n                    </li>\r\n                    <li [class.disabled]=\"settings.paging.number == 1 || isLoading\">\r\n                        <a href=\"javascript:void()\" data-action=\"previous\">\r\n                            <span aria-hidden=\"true\" class=\"glyphicon glyphicon-backward\"></span>\r\n                        </a>\r\n                    </li>\r\n                    <ng-container *ngFor=\"let p of settings.paging.totalPages | fill\">\r\n                        <li [class.active]=\"p == settings.paging.number\" *ngIf=\"pageIsVisible(p)\" [class.disabled]=\"isLoading\">\r\n                            <a [attr.data-page]=\"p\" href=\"#\">{{p}} <span class=\"sr-only\">(current)</span></a>\r\n                        </li>\r\n                    </ng-container>\r\n                    <li [class.disabled]=\"settings.paging.number == settings.paging.totalPages || isLoading\">\r\n                        <a href=\"javascript:void()\" data-action=\"next\">\r\n                            <span aria-hidden=\"true\" class=\"glyphicon glyphicon-forward\"></span>\r\n                        </a>\r\n                    </li>\r\n                    <li [class.disabled]=\"settings.paging.number == settings.paging.totalPages || isLoading\">\r\n                        <a href=\"javascript:void()\" data-action=\"last\">\r\n                            <span aria-hidden=\"true\" class=\"glyphicon glyphicon-fast-forward\"></span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </nav>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "gN2L":
/*!*************************************************************************!*\
  !*** ./ClientApp/app/componenten/code-select/code-display.component.ts ***!
  \*************************************************************************/
/*! exports provided: CodeDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeDisplayComponent", function() { return CodeDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code.service */ "Adg9");



var CodeDisplayComponent = /** @class */ (function () {
    function CodeDisplayComponent(codeService) {
        this.codeService = codeService;
    }
    Object.defineProperty(CodeDisplayComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            var _this = this;
            if (this._value === val)
                return;
            this._value = val;
            this.codeService.getCodes(this.type).subscribe(function (codes) {
                var items = codes.filter(function (x) { return x.code === val; });
                _this.selected = items.length > 0 ? items[0].omschrijving : "";
            });
        },
        enumerable: false,
        configurable: true
    });
    ;
    CodeDisplayComponent.ctorParameters = function () { return [
        { type: _code_service__WEBPACK_IMPORTED_MODULE_2__["CodeService"] }
    ]; };
    CodeDisplayComponent.propDecorators = {
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    CodeDisplayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "code-display",
            template: "\n            <span>{{selected}}</span>\n            "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_code_service__WEBPACK_IMPORTED_MODULE_2__["CodeService"]])
    ], CodeDisplayComponent);
    return CodeDisplayComponent;
}());



/***/ }),

/***/ "gZ9n":
/*!***********************************************************************!*\
  !*** ./ClientApp/app/componenten/markt-select/markt-select.module.ts ***!
  \***********************************************************************/
/*! exports provided: MarktSelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarktSelectModule", function() { return MarktSelectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "T/Yl");
/* harmony import */ var _markt_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./markt-panel.component */ "ZQqU");
/* harmony import */ var _markt_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./markt-display.component */ "T+F7");
/* harmony import */ var _markt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./markt.service */ "Yk/u");
/* harmony import */ var _code_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../code-select */ "HW5m");









var MarktSelectModule = /** @class */ (function () {
    function MarktSelectModule() {
    }
    MarktSelectModule_1 = MarktSelectModule;
    MarktSelectModule.forRoot = function () {
        return {
            ngModule: MarktSelectModule_1,
            providers: [_markt_service__WEBPACK_IMPORTED_MODULE_7__["MarktService"]],
        };
    };
    var MarktSelectModule_1;
    MarktSelectModule = MarktSelectModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_markt_panel_component__WEBPACK_IMPORTED_MODULE_5__["MarktPanelComponent"], _markt_display_component__WEBPACK_IMPORTED_MODULE_6__["MarktDisplayComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _code_select__WEBPACK_IMPORTED_MODULE_8__["CodeSelectModule"]],
            exports: [_markt_panel_component__WEBPACK_IMPORTED_MODULE_5__["MarktPanelComponent"], _markt_display_component__WEBPACK_IMPORTED_MODULE_6__["MarktDisplayComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], MarktSelectModule);
    return MarktSelectModule;
}());



/***/ }),

/***/ "gcOs":
/*!*******************************************************!*\
  !*** ./ClientApp/app/services/onderneming.service.ts ***!
  \*******************************************************/
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
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core */ "BxFb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "IheW");






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
    OndernemingService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__["SlimLoadingBarService"] }
    ]; };
    OndernemingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__["SlimLoadingBarService"]])
    ], OndernemingService);
    return OndernemingService;
}(_core__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "i7YP":
/*!****************************************************************!*\
  !*** ./ClientApp/$$_lazy_route_resource lazy namespace object ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "i7YP";

/***/ }),

/***/ "kkJf":
/*!******************************************************************!*\
  !*** ./ClientApp/app/componenten/datagrid/datagrid.component.ts ***!
  \******************************************************************/
/*! exports provided: DataGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataGrid", function() { return DataGrid; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _datagrid_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datagrid.component.css */ "U5uA");
/* harmony import */ var _raw_loader_datagrid_layout_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raw-loader!./datagrid.layout.html */ "g6hV");
/* harmony import */ var _raw_loader_datagrid_layout_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_datagrid_layout_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _datagrid_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datagrid.models */ "3Jkk");





var DataGrid = /** @class */ (function () {
    function DataGrid() {
        this.settings = {
            stripedRows: true,
            tableBordered: false,
            hoverRows: true,
            condensedTable: true,
            responsive: true,
            showPaging: true,
            fields: [],
            pageSizes: [10, 25, 50, 100],
            paging: {
                number: 1,
                size: 10,
                totalElements: 0,
                totalPages: 1
            },
            startElement: 1,
            endElement: 1,
            maxPagerSize: 10,
            selectedIndex: -1,
            singleSort: true
        };
        this.isLoading = true;
        this.fetchData = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.rowClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.rowActionClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    Object.defineProperty(DataGrid.prototype, "options", {
        set: function (options) {
            if (options.stripedRows !== undefined)
                this.settings.stripedRows = options.stripedRows;
            if (options.tableBordered !== undefined)
                this.settings.tableBordered = options.tableBordered;
            if (options.hoverRows !== undefined)
                this.settings.hoverRows = options.hoverRows;
            if (options.condensedTable !== undefined)
                this.settings.condensedTable = options.condensedTable;
            if (options.responsive !== undefined)
                this.settings.responsive = options.responsive;
            if (options.showPaging !== undefined)
                this.settings.showPaging = options.showPaging;
            if (options.fields !== undefined)
                this.settings.fields = options.fields;
            if (options.pageSizes !== undefined)
                this.settings.pageSizes = options.pageSizes;
            if (options.maxPagerSize !== undefined)
                this.settings.maxPagerSize = Math.abs(options.maxPagerSize);
        },
        enumerable: false,
        configurable: true
    });
    DataGrid.prototype.ngOnChanges = function (changes) {
        var options = changes["options"];
        if (options && options.isFirstChange()) {
            this.settings.paging.number = 1;
            this.settings.paging.size = this.settings.pageSizes[0] || 10;
        }
        var data = changes["data"];
        if (data && data.currentValue) {
            this.refresh(data.currentValue);
        }
    };
    DataGrid.prototype.ngOnInit = function () {
        this.pageSizeChanged();
    };
    DataGrid.prototype.refresh = function (data) {
        var x = this.constructPageResult(data);
        if (x.page.totalPages < this.settings.paging.number)
            this.settings.paging.number = 1;
        this.settings.paging.totalPages = x.page.totalPages;
        this.settings.paging.totalElements = x.page.totalElements;
        this.settings.endElement = x.page.totalPages === this.settings.paging.number
            ? x.page.totalElements
            : this.settings.paging.number * this.settings.paging.size;
        this.settings.startElement = x.page.totalElements < this.settings.paging.size
            ? 1
            : this.settings.endElement - (x.page.totalPages === this.settings.paging.number
                ? x.page.size
                : this.settings.paging.size - 1);
        this.resourceList = x.embedded.resourceList;
        this.isLoading = false;
    };
    DataGrid.prototype.constructPageResult = function (data) {
        var paged;
        if (data instanceof Array) {
            this.dataSource = data;
            var start = (this.settings.paging.number - 1) * this.settings.paging.size;
            var end = start + this.settings.paging.size;
            var sub = data.slice(start, end);
            paged = {
                embedded: { resourceList: sub },
                page: {
                    number: this.settings.paging.number,
                    size: this.settings.paging.size,
                    totalElements: data.length,
                    totalPages: Math.ceil(data.length / this.settings.paging.size)
                }
            };
        }
        else if (data.embedded && data.page)
            paged = data;
        else
            throw new Error("Invalid data type for grid data Source");
        return paged;
    };
    DataGrid.prototype.pageSizeChanged = function () {
        var page = this.constructQueryParameters();
        if (this.fetchData.observers.length > 0) {
            this.isLoading = true;
            this.fetchData.emit(page);
        }
        else if (this.dataSource && this.dataSource.length > 0) {
            this.refresh(this.dataSource);
        }
    };
    DataGrid.prototype.sortField = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        if (this.isLoading)
            return;
        var target = $event.target.closest("th");
        ;
        var sort = target.getAttribute("data-sort");
        if (sort) {
            var field_1 = this.settings.fields.filter(function (val) {
                return val.field === sort && val.sortable;
            }).shift();
            if (field_1) {
                if (this.settings.singleSort) {
                    this.settings.fields.forEach(function (item) {
                        if (item.field !== field_1.field)
                            item.sort = _datagrid_models__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].Unsorted;
                    });
                }
                switch (field_1.sort) {
                    case _datagrid_models__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].Unsorted:
                        field_1.sort = _datagrid_models__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].Ascending;
                        break;
                    case _datagrid_models__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].Ascending:
                        field_1.sort = _datagrid_models__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].Descending;
                        break;
                    case _datagrid_models__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].Descending:
                        field_1.sort = _datagrid_models__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].Unsorted;
                        break;
                    default:
                        field_1.sort = _datagrid_models__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].Ascending;
                        break;
                }
                this.settings.paging.number = 1;
                this.pageSizeChanged();
            }
        }
    };
    DataGrid.prototype.clickRow = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        if (this.isLoading)
            return;
        try {
            var cell = $event.target.closest("td");
            if (!cell)
                return;
            var type = cell.getAttribute("data-type");
            if (type === "actions") {
                var btn = $event.target.closest("[data-action]");
                if (!btn)
                    return;
                var action = btn.getAttribute("data-action");
                if (!action)
                    return;
                var id = btn.getAttribute("data-id");
                if (!id)
                    return;
                this.rowActionClicked.emit({ id: id });
                return;
            }
            if (this.rowClicked.observers.length > 0) {
                var target = cell.parentElement;
                if (target) {
                    var index = Number(target.getAttribute("data-index"));
                    if (index >= 0) {
                        var data = this.resourceList[index];
                        this.settings.selectedIndex = index;
                        this.rowClicked.emit({
                            index: index,
                            data: data
                        });
                    }
                }
            }
        }
        catch (e) {
            return;
        }
    };
    DataGrid.prototype.currentPageChanged = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        if (this.isLoading)
            return;
        var target = $event.target.closest("a");
        var classList = target.parentElement.classList || new DOMTokenList();
        if (classList.contains("disabled") || classList.contains("active"))
            return;
        var action = target.getAttribute("data-action");
        switch (action) {
            case "first":
                this.settings.paging.number = 1;
                break;
            case "previous":
                if (this.settings.paging.number > 1)
                    this.settings.paging.number--;
                break;
            case "next":
                if (this.settings.paging.number < this.settings.paging.totalPages)
                    this.settings.paging.number++;
                break;
            case "last":
                this.settings.paging.number = this.settings.paging.totalPages;
                break;
            default:
                var dataPage = Number(target.getAttribute("data-page"));
                this.settings.paging.number = dataPage;
                break;
        }
        this.pageSizeChanged();
    };
    DataGrid.prototype.setTableCss = function () {
        return {
            'table': true,
            'table-striped': this.settings.stripedRows || false,
            'table-bordered': this.settings.tableBordered || false,
            'table-hover': this.settings.hoverRows || false,
            'table-condensed': this.settings.hoverRows || false
        };
    };
    DataGrid.prototype.calculateSortOrder = function (field) {
        return {
            'glyphicon-sort': field.sortable && (field.sort === _datagrid_models__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].Unsorted || !field.sort),
            'glyphicon-sort-by-attributes': field.sortable && field.sort === _datagrid_models__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].Ascending,
            'glyphicon-sort-by-attributes-alt': field.sortable && field.sort === _datagrid_models__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].Descending
        };
    };
    DataGrid.prototype.pageDisplayContext = function () {
        return this.settings.startElement + " - " + this.settings.endElement + " van " + this.settings.paging.totalElements + " records";
    };
    DataGrid.prototype.constructQueryParameters = function () {
        return {
            page: this.settings.paging.number,
            pageSize: this.settings.paging.size,
            sort: this.settings.fields.filter(function (x) { return x.sortable && x.sort !== undefined && x.sort !== _datagrid_models__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].Unsorted; }).map(function (x) { return (x.sort === _datagrid_models__WEBPACK_IMPORTED_MODULE_4__["SortOrder"].Descending ? "-" : "") + x.field; })
        };
    };
    DataGrid.prototype.pageIsVisible = function (page) {
        if (this.settings.maxPagerSize >= this.settings.paging.totalPages)
            return true;
        var middle = Math.abs(this.settings.maxPagerSize / 2);
        var max = this.settings.paging.number + this.settings.maxPagerSize - (this.settings.paging.number - 1 < middle ? this.settings.paging.number - 1 : middle);
        if (max > this.settings.paging.totalPages + 1)
            max = this.settings.paging.totalPages + 1;
        var min = max - this.settings.maxPagerSize;
        return page < max && page >= min;
    };
    DataGrid.prototype.displayField = function (item, field) {
        var value = item;
        for (var _i = 0, _a = field.split("."); _i < _a.length; _i++) {
            var prop = _a[_i];
            value = value[prop];
        }
        return value;
    };
    DataGrid.prototype.isEven = function (value) {
        return value % 2 === 0;
    };
    DataGrid.propDecorators = {
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        fetchData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        rowClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        rowActionClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        rowActions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: ["rowActions", { static: false },] }],
        rowTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: ["rowTemplate", { static: false },] }]
    };
    DataGrid = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "dp-datagrid",
            template: _raw_loader_datagrid_layout_html__WEBPACK_IMPORTED_MODULE_2___default.a,
            styles: [_datagrid_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], DataGrid);
    return DataGrid;
}());



/***/ }),

/***/ "mZsw":
/*!*****************************************!*\
  !*** ./ClientApp/app/services/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kavel_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kavel.service */ "FVUk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KavelService", function() { return _kavel_service__WEBPACK_IMPORTED_MODULE_0__["KavelService"]; });

/* harmony import */ var _kavel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kavel */ "ufGB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KavelStatusEnum", function() { return _kavel__WEBPACK_IMPORTED_MODULE_1__["KavelStatusEnum"]; });

/* harmony import */ var _service_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service.module */ "1g0q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return _service_module__WEBPACK_IMPORTED_MODULE_2__["ServiceModule"]; });

/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.service */ "M+iq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]; });

/* harmony import */ var _abonnement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abonnement.service */ "nzAR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbonnementService", function() { return _abonnement_service__WEBPACK_IMPORTED_MODULE_4__["AbonnementService"]; });

/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product */ "EcuB");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_product__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _product__WEBPACK_IMPORTED_MODULE_5__) if(["default","KavelService","KavelStatusEnum","ServiceModule","ProductService","AbonnementService"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _product__WEBPACK_IMPORTED_MODULE_5__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _onderneming_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onderneming.service */ "gcOs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OndernemingService", function() { return _onderneming_service__WEBPACK_IMPORTED_MODULE_6__["OndernemingService"]; });

/* harmony import */ var _dagpas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dagpas.service */ "5HQ3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DagpasService", function() { return _dagpas_service__WEBPACK_IMPORTED_MODULE_7__["DagpasService"]; });

/* harmony import */ var _tarief_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tarief.service */ "PSRL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TariefService", function() { return _tarief_service__WEBPACK_IMPORTED_MODULE_8__["TariefService"]; });












/***/ }),

/***/ "mpu8":
/*!**********************************************************************!*\
  !*** ./ClientApp/app/componenten/product-select/products.service.ts ***!
  \**********************************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.settings */ "HRaI");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/of */ "neMA");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_share__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/share */ "eZA3");
/* harmony import */ var rxjs_add_operator_share__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_share__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core */ "BxFb");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-slim-loading-bar */ "k+RO");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_8__);









/**
 * OPGELET!!!
 * Deze service is bedoeld om enkel gebruikt te worden binnen deze module.
 * Ze wordt dan ook niet geexporteerd in de index.
 */
var ProductService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ProductService, _super);
    function ProductService(http, loader) {
        var _this = _super.call(this, http, loader) || this;
        _this.http = http;
        _this.loader = loader;
        _this.url = _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "products/";
        return _this;
    }
    ProductService.prototype.get = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]().set("page", "1")
            .set("pagesize", "9999");
        var obs = this.http.get(this.url, { headers: this.jsonHeaders, params: params });
        return this.cacheResult("products", obs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) { return result.embedded.resourceList; }));
    };
    ProductService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_8__["SlimLoadingBarService"] }
    ]; };
    ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_8__["SlimLoadingBarService"]])
    ], ProductService);
    return ProductService;
}(_core__WEBPACK_IMPORTED_MODULE_7__["BaseService"]));



/***/ }),

/***/ "nQfs":
/*!*****************************************!*\
  !*** ./ClientApp/app/auth/privilege.ts ***!
  \*****************************************/
/*! exports provided: Privilege */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Privilege", function() { return Privilege; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var Privilege = /** @class */ (function () {
    function Privilege() {
    }
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    Privilege.General = (_a = /** @class */ (function () {
            function class_1() {
            }
            return class_1;
        }()),
        _a.Unknown = "unknown",
        _a.UpdateOnderneming = "updateonderneming",
        _a.Nachtverwerking = "nachtverwerking",
        _a);
    Privilege.AbonnementDieptekavelWijziging = (_b = /** @class */ (function () {
            function class_2() {
            }
            return class_2;
        }()),
        _b.GetByAbonnementId = "getdieptekavelwijzigingenbyabonnementid",
        _b);
    Privilege.JuridischeEntiteit = (_c = /** @class */ (function () {
            function class_3() {
            }
            return class_3;
        }()),
        _c.Get = "getjuridischeentiteit",
        _c);
    Privilege.Beheer = (_d = /** @class */ (function () {
            function class_4() {
            }
            return class_4;
        }()),
        _d.BeheerMenu = "beheer",
        _d);
    Privilege.Rapportage = (_e = /** @class */ (function () {
            function class_5() {
            }
            return class_5;
        }()),
        _e.Get = "getrapportage",
        _e);
    Privilege.CodeTable = (_f = /** @class */ (function () {
            function class_6() {
            }
            return class_6;
        }()),
        _f.Get = "getcodetable",
        _f);
    Privilege.AbonnementStatus = (_g = /** @class */ (function () {
            function class_7() {
            }
            return class_7;
        }()),
        _g.ChangeStatus = "changeabonnementstatus",
        _g.AddWijziging = "addabonnementstatuswijziging",
        _g);
    Privilege.AbonnementElektriciteitwijziging = (_h = /** @class */ (function () {
            function class_8() {
            }
            return class_8;
        }()),
        _h.Add = "addabonnementelektriciteitwijziging",
        _h.Update = "updateabonnementelektriciteitwijziging",
        _h.Delete = "deleteabonnementelektriciteitwijziging",
        _h.GetByAbonnementId = "geteelektriciteitwijzigingenbyabonnementid",
        _h);
    Privilege.Klant = (_j = /** @class */ (function () {
            function class_9() {
            }
            return class_9;
        }()),
        _j.GetCommerciele = "getcommercieleklanten",
        _j.GetNietCommerciele = "getnietcommercieleklanten",
        _j.GetByOndernemingsnr = "getklantbyondernemingsnr",
        _j.GetAll = "getallklanten",
        _j.GetAllFilteredAndPaged = "getallklantenfilteredandpaged",
        _j.Get = "getklant",
        _j.Add = "addklant",
        _j.Update = "updateklant",
        _j.Delete = "deleteklant",
        _j.Select = "selectklant",
        _j);
    Privilege.Markt = (_k = /** @class */ (function () {
            function class_10() {
            }
            return class_10;
        }()),
        _k.Get = "getmarkt",
        _k.GetMarktBoekjes = "getmarktboekjes",
        _k.GetAll = "getallmarkten",
        _k.GetAllFilteredAndPaged = "getallmarktenfilteredandpaged",
        _k.GetByDistrictid = "getmarktenbydistrictid",
        _k.Add = "addmarkt",
        _k.Update = "updatemarkt",
        _k.Delete = "deletemarkt",
        _k);
    Privilege.AanvraagMarkt = (_l = /** @class */ (function () {
            function class_11() {
            }
            return class_11;
        }()),
        _l.Get = "getaanvraagmarkt",
        _l.Add = "addaanvraagmarkt",
        _l.Update = "updateaanvraagmarkt",
        _l.Delete = "deleteaanvraagmarkt",
        _l.GetByKlantId = "getmarktaanvragenbyklantid",
        _l);
    Privilege.Aanvraag = (_m = /** @class */ (function () {
            function class_12() {
            }
            return class_12;
        }()),
        _m.Get = "getaanvraag",
        _m.GetAll = "getallaanvragen",
        _m.GetAllFilteredAndPaged = "getallaanvragenfilteredandpaged",
        _m.GetAllByStatusFilteredAndPaged = "getallaanvragenbystatusfilteredandpaged",
        _m.Add = "addaanvraag",
        _m.Update = "updateaanvraag",
        _m.Delete = "deleteaanvraag",
        _m.Detail = "intakedetail",
        _m.CreateForKlant = "createintakeforklant",
        _m.VeranderNaarGepreregistreerd = "veranderintakenaargepreregistreerd",
        _m.ReservatieRaadplegen = "reservatieraadplegen",
        _m.RegistratieBewerken = "registratiebewerken",
        _m.RegistratieVerwijderen = "registratieverwijderen",
        _m.ToewijzenAanvragenNietInAanmerking = "toewijzenaanvragennietinaanmerking",
        _m.PreregistratieBewerken = "preregistratiebewerken",
        _m.DirectRegistreren = "directregistreren",
        _m);
    Privilege.Abonnement = (_o = /** @class */ (function () {
            function class_13() {
            }
            return class_13;
        }()),
        _o.Get = "getabonnement",
        _o.GetAll = "getallabonnementen",
        _o.GetAllFilteredAndPaged = "getallabonnementenfilteredandpaged",
        _o.GetAllByStatusFilteredAndPaged = "getallabonnementenbystatusfilteredandpaged",
        _o.Add = "addabonnement",
        _o.Update = "updateabonnement",
        _o.Delete = "deleteabonnement",
        _o.Detail = "abonnementdetail",
        _o.GetByKlantId = "getabonnementenbyklantid",
        _o);
    Privilege.Kavel = (_p = /** @class */ (function () {
            function class_14() {
            }
            return class_14;
        }()),
        _p.Get = "getkavel",
        _p.Update = "updatekavel",
        _p.Delete = "deletekavel",
        _p.Add = "addkavel",
        _p);
    Privilege.KavelOpmerking = (_q = /** @class */ (function () {
            function class_15() {
            }
            return class_15;
        }()),
        _q.Get = "getkavelopmerking",
        _q.Add = "addkavelopmerking",
        _q.Update = "updatekavelopmerking",
        _q.Delete = "deletekavelopmerking",
        _q.Toevoegen = "kavelopmerkingtoevoegen",
        _q);
    Privilege.Aanvraagweigering = (_r = /** @class */ (function () {
            function class_16() {
            }
            return class_16;
        }()),
        _r.GetByAanvraagId = "getaanvraagweigeringbyaanvraagid",
        _r.Add = "addaanvraagweigering",
        _r.Get = "getaanvraagweigering",
        _r.Update = "updateaanvraagweigering",
        _r.Delete = "deleteaanvraagweigering",
        _r);
    Privilege.Factuur = (_s = /** @class */ (function () {
            function class_17() {
            }
            return class_17;
        }()),
        _s.Get = "getfactuur",
        _s.GetAll = "getallfacturen",
        _s.GetFilteredAndPaged = "getfacturenfilteredandpaged",
        _s.Add = "addfactuur",
        _s.Update = "updatefactuur",
        _s.Delete = "deletefactuur",
        _s.Genereer = "genereerfacturen",
        _s.StuurNaarSap = "stuurfacturennaarsap",
        _s.FacturatieMenu = "facturatiemenu",
        _s);
    Privilege.Document = (_t = /** @class */ (function () {
            function class_18() {
            }
            return class_18;
        }()),
        _t.Get = "getdocument",
        _t.Add = "adddocument",
        _t.Update = "updatedocument",
        _t.Delete = "deletedocument",
        _t);
    Privilege.Locatie = (_u = /** @class */ (function () {
            function class_19() {
            }
            return class_19;
        }()),
        _u.Get = "getlocatie",
        _u.Add = "addlocatie",
        _u.Update = "updatelocatie",
        _u.Delete = "deletelocatie",
        _u);
    Privilege.Product = (_v = /** @class */ (function () {
            function class_20() {
            }
            return class_20;
        }()),
        _v.Get = "getproduct",
        _v.Add = "addproduct",
        _v.Update = "updateproduct",
        _v.Delete = "deleteproduct",
        _v);
    Privilege.AbonnementKavel = (_w = /** @class */ (function () {
            function class_21() {
            }
            return class_21;
        }()),
        _w.Add = "addabonnementkavel",
        _w.Update = "updateabonnementkavel",
        _w.Delete = "deleteabonnementkavel",
        _w.Get = "getabonnementkavelabonnementkavel",
        _w);
    Privilege.District = (_x = /** @class */ (function () {
            function class_22() {
            }
            return class_22;
        }()),
        _x.Get = "getdistrict",
        _x.Add = "adddistrict",
        _x.Update = "updatedistrict",
        _x.Delete = "deletedistrict",
        _x);
    Privilege = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Privilege);
    return Privilege;
}());



/***/ }),

/***/ "naYi":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/logged-out/html/logged-out.component.layout.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "﻿<mafo-panel selector=\"title\" [collapsable]=\"false\" [open]=\"true\">\r\n    <mafo-panel-heading>\r\n        <h1>\r\n            <span class=\"fa fa-home\"></span>&nbsp;\r\n            Mafo\r\n        </h1>\r\n    </mafo-panel-heading>\r\n    <mafo-panel-body>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                U bent afgemeld! <a class=\"btn btn-warning\" (click)=\"login()\">Aanmelden</a>\r\n            </div>\r\n        </div>\r\n    </mafo-panel-body>\r\n</mafo-panel>"

/***/ }),

/***/ "nzAR":
/*!******************************************************!*\
  !*** ./ClientApp/app/services/abonnement.service.ts ***!
  \******************************************************/
/*! exports provided: AbonnementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbonnementService", function() { return AbonnementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.settings */ "HRaI");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core */ "BxFb");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-slim-loading-bar */ "k+RO");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/base.service */ "4b30");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "IheW");









var AbonnementService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AbonnementService, _super);
    function AbonnementService(http, loader) {
        var _this = _super.call(this, http, loader) || this;
        _this.http = http;
        _this.loader = loader;
        _this.url = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_ENDPOINT + 'subScriptions';
        return _this;
    }
    AbonnementService.prototype.getAll = function (pageOptions, searchCriteria) {
        var _this = this;
        var params = this.registerDefaultParameters(pageOptions);
        if (searchCriteria) {
            if (searchCriteria.marktId)
                params = params.set("marktId", searchCriteria.marktId.toString());
            if (searchCriteria.klantId)
                params = params.set("klantId", searchCriteria.klantId.toString());
            if (searchCriteria.query)
                params = params.set("query", searchCriteria.query.toString());
            if (searchCriteria.productId)
                params = params.set("productId", searchCriteria.productId.toString());
            if (searchCriteria.verkoopCode)
                params = params.set("verkoopCode", searchCriteria.verkoopCode);
            if (searchCriteria.statusCode)
                params = params.set("statusCode", searchCriteria.statusCode);
            if (searchCriteria.beginDatum)
                params = params.set("beginDatum", searchCriteria.beginDatum.toString() == "" ? "" : new Date(searchCriteria.beginDatum.toString()).toISOString());
            if (searchCriteria.eindDatum)
                params = params.set("eindDatum", searchCriteria.eindDatum.toString() == "" ? "" : new Date(searchCriteria.eindDatum.toString()).toISOString());
        }
        this.loader.start();
        return this.http.get(this.url, { headers: this.jsonHeaders, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (x) { return _this.loader.complete(); }));
    };
    AbonnementService.prototype.get = function (id) {
        var _this = this;
        this.loader.start();
        return this.http.get(this.url + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    AbonnementService.prototype.GetAllForKlantOpMarkt = function (klantId, marktId) {
        var _this = this;
        this.loader.start();
        return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].API_ENDPOINT + "markets/" + marktId + "/subscriptions?customerId=" + klantId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    AbonnementService.prototype.create = function (data) {
        var _this = this;
        this.loader.start();
        return this.http.post(this.url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    AbonnementService.prototype.post = function (id, data) {
        var _this = this;
        this.loader.start();
        return this.http.post(this.url + "/" + id + "/stands", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    AbonnementService.prototype.wijzigStatus = function (id, statusCode, data, files) {
        var _this = this;
        var call;
        switch (statusCode) {
            case _core__WEBPACK_IMPORTED_MODULE_5__["ApplicationConstants"].AbonnementStatus.LopendCode:
                call = "ongoings";
                break;
            case _core__WEBPACK_IMPORTED_MODULE_5__["ApplicationConstants"].AbonnementStatus.GeschorstCode:
                call = "schorsing";
                break;
            case _core__WEBPACK_IMPORTED_MODULE_5__["ApplicationConstants"].AbonnementStatus.IngetrokkenCode:
                call = "withdrawals";
                break;
            case _core__WEBPACK_IMPORTED_MODULE_5__["ApplicationConstants"].AbonnementStatus.OpgeschortCode:
                var isFilesEmpty = !Object.keys(files).length;
                if (!isFilesEmpty) {
                    call = "suspensionfiles";
                }
                else {
                    call = "suspensions";
                }
                break;
            case _core__WEBPACK_IMPORTED_MODULE_5__["ApplicationConstants"].AbonnementStatus.OpgezegdCode:
                var isFilesEmpty = !Object.keys(files).length;
                if (!isFilesEmpty) {
                    call = "cancellationfiles";
                }
                else {
                    call = "cancellations";
                }
                break;
            case _core__WEBPACK_IMPORTED_MODULE_5__["ApplicationConstants"].AbonnementStatus.InOverdrachtCode:
                var isFilesEmpty = !Object.keys(files).length;
                if (!isFilesEmpty) {
                    call = "transferfiles";
                }
                else {
                    call = "transfers";
                }
                break;
            default:
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])("Geen geldige status wijziging");
        }
        this.loader.start();
        if (files && Object.keys(files).length > 0) {
            var formData = new FormData();
            for (var key in data) {
                if (key !== "files") {
                    var value = data[key].toISOString ? data[key].toISOString() : data[key];
                    formData.append(key, value);
                }
            }
            for (var key in files) {
                for (var i = 0; i < files[key].length; i++) {
                    formData.append(key, files[key][i]);
                }
            }
            return this.http.post(this.url + "/" + id + "/" + call, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
        for (var key in data) {
            if (key === "eindDatumAbonnement") {
                data[key].setHours(data[key].getHours() + 3).toISOString;
            }
        }
        return this.http.post(this.url + "/" + id + "/" + call, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (x) { return _this.loader.complete(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    AbonnementService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] },
        { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6__["SlimLoadingBarService"] }
    ]; };
    AbonnementService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_6__["SlimLoadingBarService"]])
    ], AbonnementService);
    return AbonnementService;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"]));



/***/ }),

/***/ "o66+":
/*!**********************************************************!*\
  !*** ./ClientApp/app/logged-out/logged-out.component.ts ***!
  \**********************************************************/
/*! exports provided: LoggedOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedOutComponent", function() { return LoggedOutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_logged_out_html_logged_out_component_layout_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!../logged-out/html/logged-out.component.layout.html */ "naYi");
/* harmony import */ var _raw_loader_logged_out_html_logged_out_component_layout_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_logged_out_html_logged_out_component_layout_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth */ "qec8");




var LoggedOutComponent = /** @class */ (function () {
    function LoggedOutComponent(auth) {
        this.auth = auth;
    }
    LoggedOutComponent.prototype.login = function () {
        this.auth.login();
    };
    LoggedOutComponent.ctorParameters = function () { return [
        { type: _auth__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    LoggedOutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "logged-out",
            template: _raw_loader_logged_out_html_logged_out_component_layout_html__WEBPACK_IMPORTED_MODULE_1___default.a
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoggedOutComponent);
    return LoggedOutComponent;
}());



/***/ }),

/***/ "q4/o":
/*!********************************************************************!*\
  !*** ./ClientApp/app/componenten/datagrid/datagrid.row.actions.ts ***!
  \********************************************************************/
/*! exports provided: createTemplateRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTemplateRenderer", function() { return createTemplateRenderer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


function createTemplateRenderer() {
    var propertyNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        propertyNames[_i] = arguments[_i];
    }
    // Let's convert the incoming sub-property names into namespaced inputs off the
    // "context" object. For example, convert "foo" into "context.foo".
    var contextProperties = propertyNames.map(function (propertyName) { return ("context." + propertyName); });
    var TemplateRendererDirective = /** @class */ (function () {
        // I initialize the directive.
        function TemplateRendererDirective(viewContainerRef) {
            // I hold the context that will be exposed to the embedded view.
            // --
            // NOTE: The context is an injectable input. However, it's sub-properties are
            // also individually injectable properties based on the arguments passed to the
            // factory function.
            this.context = {};
            this.viewContainerRef = viewContainerRef;
        }
        // ---
        // PUBLIC METHODS.
        // ---
        // I get called once, when the class is initialized, after the inputs have been
        // bound for the first time.
        TemplateRendererDirective.prototype.ngOnInit = function () {
            if (this.template && this.context) {
                this.viewContainerRef.createEmbeddedView(this.template, this.context);
            }
        };
        TemplateRendererDirective.ctorParameters = function () { return [
            { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
        ]; };
        TemplateRendererDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                selector: "template[render]",
                inputs: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(["template: render", "context"], contextProperties)
            }),
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
        ], TemplateRendererDirective);
        return TemplateRendererDirective;
    }());
    // Return the dynamically generated class.
    return (TemplateRendererDirective);
}


/***/ }),

/***/ "qec8":
/*!*************************************!*\
  !*** ./ClientApp/app/auth/index.ts ***!
  \*************************************/
/*! exports provided: AuthService, readToken, AuthGuard, Privilege */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "1bQf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readToken", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["readToken"]; });

/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-guard.service */ "wH73");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });

/* harmony import */ var _privilege__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./privilege */ "nQfs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Privilege", function() { return _privilege__WEBPACK_IMPORTED_MODULE_2__["Privilege"]; });






/***/ }),

/***/ "r1Rg":
/*!****************************************************!*\
  !*** ./ClientApp/app/navigation/app.navigation.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_navigation_layout_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.navigation.layout.html */ "ePEz");
/* harmony import */ var _raw_loader_app_navigation_layout_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_app_navigation_layout_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_navigation_styling_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.navigation.styling.scss */ "sER3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "1bQf");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth */ "qec8");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "h+n0");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__);








var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.showMenu = false;
        this.environmentclass = "development";
        this.year = new Date().getUTCFullYear();
        this.isDevelopment();
        this.userProfile = this.auth.getUserProfile();
        this.security();
    }
    Object.defineProperty(NavigationComponent.prototype, "loggedOut", {
        get: function () {
            var cookie = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__["Cookie"].get('jwt');
            return cookie === null;
        },
        enumerable: false,
        configurable: true
    });
    NavigationComponent.prototype.isActive = function (instruction) {
        return (this.node === undefined && this.router.isActive(this.router.createUrlTree(instruction), false)) || instruction.indexOf(this.node) > -1;
    };
    ;
    NavigationComponent.prototype.activate = function (event, node) {
        if (this.node != node) {
            this.node = node;
        }
        else {
            this.node = undefined;
        }
        event.preventDefault();
    };
    ;
    NavigationComponent.prototype.security = function () {
        this.menuWachtlijst = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_6__["Privilege"].Aanvraag.Get);
        this.menuItemReservatie = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_6__["Privilege"].Aanvraag.ReservatieRaadplegen);
        this.menuKlant = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_6__["Privilege"].Klant.Get);
        this.menuMarkt = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_6__["Privilege"].Markt.Get);
        this.menuAbonnement = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_6__["Privilege"].Abonnement.Get);
        this.menuFacturatie = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_6__["Privilege"].Factuur.FacturatieMenu);
        this.menuRapportage = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_6__["Privilege"].Rapportage.Get);
        //this.menuBeheer = this.auth.hasPermission(Privilege.Rapportage.Get);
        //TODO
        this.menuBeheer = this.auth.hasPermission(_auth__WEBPACK_IMPORTED_MODULE_6__["Privilege"].Beheer.BeheerMenu);
    };
    NavigationComponent.prototype.isDevelopment = function () {
        var url = window.location.href;
        if (url.search("mafoweb-a") != -1) {
            this.environmentclass = "acceptation";
        }
        else if (url.search("mafoweb-o") != -1) {
            this.environmentclass = "development";
        }
        else {
            this.environmentclass = "production";
        }
        console.log(url);
    };
    NavigationComponent.prototype.logout = function () {
        this.auth.logout(this.userProfile);
    };
    NavigationComponent.prototype.login = function () {
        this.auth.login();
    };
    NavigationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    NavigationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "mafo-nav",
            template: _raw_loader_app_navigation_layout_html__WEBPACK_IMPORTED_MODULE_1___default.a,
            styles: [_app_navigation_styling_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "sER3":
/*!**************************************************************!*\
  !*** ./ClientApp/app/navigation/app.navigation.styling.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#nav li.open ul {\n  max-height: 500px;\n  transition: max-height 0.5s ease-in-out;\n}\n\n#nav li ul {\n  display: block;\n  max-height: 0;\n  overflow-y: hidden;\n  transition: max-height 0.2s linear;\n}\n\n.acceptation-bar {\n  background-color: deeppink;\n}\n\n.dev-bar {\n  background-color: lawngreen;\n}\n\n.prod-bar {\n  background-color: #222222;\n}\n\n.navbar-login {\n  width: 305px;\n  padding: 10px;\n  padding-bottom: 0px;\n}\n\n.navbar-login-session {\n  padding: 10px;\n  padding-bottom: 0px;\n  padding-top: 0px;\n}\n\n.icon-size {\n  font-size: 87px;\n}\n\n.navbar-acc {\n  background-color: aquamarine;\n}\n\n.navbar-dev {\n  background-color: azure;\n}\n\n@media (max-width: 768px) {\n  #nav-container.open {\n    left: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvbmF2aWdhdGlvbi9hcHAubmF2aWdhdGlvbi5zdHlsaW5nLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHWSxpQkFBaUI7RUFJakIsdUNBQXVDO0FBRG5EOztBQU5BO0VBWVksY0FBYTtFQUNiLGFBQWE7RUFDYixrQkFBa0I7RUFJbEIsa0NBQWtDO0FBRjlDOztBQVFBO0VBQ0ksMEJBQ0o7QUFOQTs7QUFRQTtFQUNJLDJCQUEyQjtBQUwvQjs7QUFPQTtFQUNJLHlCQUF5QjtBQUo3Qjs7QUFNQTtFQUVJLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBSnZCOztBQU9BO0VBRUksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFMcEI7O0FBUUE7RUFFSSxlQUFlO0FBTm5COztBQVFBO0VBQ0ksNEJBQTRCO0FBTGhDOztBQU9BO0VBQ0ksdUJBQXVCO0FBSjNCOztBQU1BO0VBQ0U7SUFDRSxPQUFPO0VBSFQ7QUFDRiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL25hdmlnYXRpb24vYXBwLm5hdmlnYXRpb24uc3R5bGluZy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdiB7XHJcbiAgICBsaS5vcGVuIHtcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4OyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpIHtcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDA7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgbGluZWFyO1xyXG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBsaW5lYXI7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBsaW5lYXI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBsaW5lYXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFjY2VwdGF0aW9uLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkZWVwcGlua1xyXG59XHJcblxyXG4uZGV2LWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXduZ3JlZW47XHJcbn1cclxuLnByb2QtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XHJcbn1cclxuLm5hdmJhci1sb2dpblxyXG57XHJcbiAgICB3aWR0aDogMzA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLm5hdmJhci1sb2dpbi1zZXNzaW9uXHJcbntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5cclxuLmljb24tc2l6ZVxyXG57XHJcbiAgICBmb250LXNpemU6IDg3cHg7XHJcbn1cclxuLm5hdmJhci1hY2N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lOyBcclxufVxyXG4ubmF2YmFyLWRldntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICNuYXYtY29udGFpbmVyLm9wZW4ge1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "tBJz":
/*!***********************************************!*\
  !*** ./ClientApp/app/shared/shared.module.ts ***!
  \***********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_modialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-modialog */ "ROqb");
/* harmony import */ var ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-modialog/plugins/bootstrap */ "e7Ax");
/* harmony import */ var _componenten_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componenten/bootstrap */ "CTaV");
/* harmony import */ var _componenten_datagrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componenten/datagrid */ "z4/g");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core */ "BxFb");
/* harmony import */ var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./breadcrumb.component */ "PLhC");
/* harmony import */ var _panel_app_shared_panel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./panel/app.shared.panel */ "T7pr");
/* harmony import */ var _quantity_selector_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./quantity-selector.component */ "e7Ub");
/* harmony import */ var _slider_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./slider.component */ "Euy4");













var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbComponent"],
                _slider_component__WEBPACK_IMPORTED_MODULE_12__["SliderComponent"],
                _quantity_selector_component__WEBPACK_IMPORTED_MODULE_11__["QuantitySelectorComponent"],
                _panel_app_shared_panel__WEBPACK_IMPORTED_MODULE_10__["MafoPanelComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_modialog__WEBPACK_IMPORTED_MODULE_4__["ModalModule"],
                ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BootstrapModalModule"],
                _componenten_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BootstrapModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_modialog__WEBPACK_IMPORTED_MODULE_4__["ModalModule"],
                ngx_modialog_plugins_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BootstrapModalModule"],
                _componenten_datagrid__WEBPACK_IMPORTED_MODULE_7__["DataGridModule"],
                _breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbComponent"],
                _quantity_selector_component__WEBPACK_IMPORTED_MODULE_11__["QuantitySelectorComponent"],
                _panel_app_shared_panel__WEBPACK_IMPORTED_MODULE_10__["MafoPanelComponent"],
                _slider_component__WEBPACK_IMPORTED_MODULE_12__["SliderComponent"],
                _core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _componenten_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BootstrapModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "ttqV":
/*!*********************************************************!*\
  !*** ./ClientApp/app/componenten/datagrid/fill.pipe.ts ***!
  \*********************************************************/
/*! exports provided: Fill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fill", function() { return Fill; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var Fill = /** @class */ (function () {
    function Fill() {
    }
    Fill.prototype.transform = function (value, args) {
        var res = [];
        for (var i = 1; i <= value; i++) {
            res.push(i);
        }
        return res;
    };
    Fill = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: "fill" })
    ], Fill);
    return Fill;
}());



/***/ }),

/***/ "ufGB":
/*!*****************************************!*\
  !*** ./ClientApp/app/services/kavel.ts ***!
  \*****************************************/
/*! exports provided: KavelStatusEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KavelStatusEnum", function() { return KavelStatusEnum; });
var KavelStatusEnum;
(function (KavelStatusEnum) {
    KavelStatusEnum["Vrij"] = "Vrij";
    KavelStatusEnum["Gereserveerd"] = "Gereserveerd";
    KavelStatusEnum["Bezet"] = "Bezet";
    KavelStatusEnum["InOverdracht"] = "InOverdracht";
    KavelStatusEnum["BezetTeBedelen"] = "BezetTeBedelen";
    KavelStatusEnum["BezetGereserveerd"] = "BezetGereserveerd";
})(KavelStatusEnum || (KavelStatusEnum = {}));


/***/ }),

/***/ "wH73":
/*!**************************************************!*\
  !*** ./ClientApp/app/auth/auth-guard.service.ts ***!
  \**************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "1bQf");






var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (routeSnapshot) {
        var _a;
        var _this = this;
        var customRedirect = '/auth/unauthorized';
        var privileges = routeSnapshot.data['privileges'];
        var isUserLoggedIn = this.authService.isLoggedIn();
        return (_a = this.authService).hasPermission.apply(_a, privileges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            return result && isUserLoggedIn;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (result) {
            var redirect = !!customRedirect ? customRedirect : '/unrestricted';
            _this.router.navigate([redirect]);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(result);
        }));
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "wXWv":
/*!*********************************************************************!*\
  !*** ./ClientApp/app/componenten/code-select/code-select.module.ts ***!
  \*********************************************************************/
/*! exports provided: CodeSelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSelectModule", function() { return CodeSelectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _code_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code-select.component */ "yE9j");
/* harmony import */ var _code_id_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code-id-select.component */ "f/jx");
/* harmony import */ var _code_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code-display.component */ "gN2L");
/* harmony import */ var _code_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./code.service */ "Adg9");








var CodeSelectModule = /** @class */ (function () {
    function CodeSelectModule() {
    }
    CodeSelectModule_1 = CodeSelectModule;
    CodeSelectModule.forRoot = function () {
        return {
            ngModule: CodeSelectModule_1,
            providers: [_code_service__WEBPACK_IMPORTED_MODULE_7__["CodeService"]],
        };
    };
    var CodeSelectModule_1;
    CodeSelectModule = CodeSelectModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _code_select_component__WEBPACK_IMPORTED_MODULE_4__["CodeSelectComponent"],
                _code_id_select_component__WEBPACK_IMPORTED_MODULE_5__["CodeSelectIdComponent"],
                _code_display_component__WEBPACK_IMPORTED_MODULE_6__["CodeDisplayComponent"],
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            exports: [_code_select_component__WEBPACK_IMPORTED_MODULE_4__["CodeSelectComponent"], _code_id_select_component__WEBPACK_IMPORTED_MODULE_5__["CodeSelectIdComponent"], _code_display_component__WEBPACK_IMPORTED_MODULE_6__["CodeDisplayComponent"]],
        })
    ], CodeSelectModule);
    return CodeSelectModule;
}());



/***/ }),

/***/ "wlK3":
/*!********************************************************************************!*\
  !*** ./ClientApp/app/componenten/location-select/location-select.component.ts ***!
  \********************************************************************************/
/*! exports provided: LocationSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationSelectComponent", function() { return LocationSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _locatie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locatie.service */ "2CY5");




var LocationSelectComponent = /** @class */ (function () {
    function LocationSelectComponent(locatieSvc) {
        this.locatieSvc = locatieSvc;
        this._value = "";
        this.isLoading = true;
        this.disabled = false;
        this.placeholder = "- maak uw keuze -";
    }
    LocationSelectComponent_1 = LocationSelectComponent;
    Object.defineProperty(LocationSelectComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            if (this.propagateChange)
                this.propagateChange(this._value);
        },
        enumerable: false,
        configurable: true
    });
    ;
    LocationSelectComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    LocationSelectComponent.prototype.ngOnChanges = function (changes) {
        if (changes["district"])
            this.getData();
    };
    LocationSelectComponent.prototype.reload = function () {
        this.getData();
    };
    LocationSelectComponent.prototype.getData = function () {
        var _this = this;
        this.isLoading = true;
        this.locatieSvc.getLocaties().subscribe(function (x) {
            var result = { data: [] };
            if (_this.district) {
                var grouped = x.groupBy("districtCode");
                result.data = grouped[_this.district];
            }
            else
                result.data = x;
            if (_this.onBeforeRender)
                _this.onBeforeRender(result);
            _this.data = result.data;
            _this.isLoading = false;
        }, function (x) { return _this.isLoading = false; });
    };
    LocationSelectComponent.prototype.writeValue = function (value) {
        this.value = value || "";
    };
    LocationSelectComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    LocationSelectComponent.prototype.registerOnTouched = function (fn) { };
    LocationSelectComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    var LocationSelectComponent_1;
    LocationSelectComponent.ctorParameters = function () { return [
        { type: _locatie_service__WEBPACK_IMPORTED_MODULE_3__["LocatieService"] }
    ]; };
    LocationSelectComponent.propDecorators = {
        district: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        onBeforeRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    LocationSelectComponent = LocationSelectComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "location-select",
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return LocationSelectComponent_1; }), multi: true }
            ],
            template: "\n            <select class=\"form-control\" [class.ajax-loading]=\"isLoading\" [attr.disabled]=\"isLoading || disabled ? true : null\" [(ngModel)]=\"value\">\n                <option value=\"\" selected>{{placeholder}}</option>\n                <option *ngFor=\"let item of data\" [ngValue]=\"item.id\">{{item.naam}}</option>\n            </select>\n            ",
            styles: [".ajax-loading {    \n                background-color: #ffffff;\n                background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPSc2NHB4JyBoZWlnaHQ9JzY0cHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLXJpbmciPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgc3Ryb2tlLWRhc2hhcnJheT0iMTYzLjM2MjgxNzk4NjY2OTI2IDg3Ljk2NDU5NDMwMDUxNDIiIHN0cm9rZT0iI2QyNTM1MyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDsxODAgNTAgNTA7MzYwIDUwIDUwOyIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMHMiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L3N2Zz4=);\n                background-size: 25px 25px;\n                background-position: right 25px center;\n                background-repeat: no-repeat;\n            }"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_locatie_service__WEBPACK_IMPORTED_MODULE_3__["LocatieService"]])
    ], LocationSelectComponent);
    return LocationSelectComponent;
}());

Array.prototype.groupBy = function (key) {
    return this.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};


/***/ }),

/***/ "xxp+":
/*!*****************************************************!*\
  !*** ./ClientApp/app/navigation/navigation.main.ts ***!
  \*****************************************************/
/*! exports provided: NavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-slim-loading-bar */ "k+RO");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.navigation */ "r1Rg");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "T/Yl");






var routes = [
    {
        path: "wachtlijst",
        loadChildren: function () { return Promise.all(/*! import() | wachtlijst-wachtlijst-module */[__webpack_require__.e("default~abonnement-abonnement-module~beheer-beheer-module~factuur-factuur-module~klant-klant-module~~da232cc7"), __webpack_require__.e("default~abonnement-abonnement-module~klant-klant-module~markt-markt-module~wachtlijst-wachtlijst-module"), __webpack_require__.e("common"), __webpack_require__.e("wachtlijst-wachtlijst-module")]).then(__webpack_require__.bind(null, /*! ../wachtlijst/wachtlijst.module */ "c6a7")).then(function (m) { return m.WachtlijstModule; }); }
    },
    {
        path: "beheer",
        loadChildren: function () { return Promise.all(/*! import() | beheer-beheer-module */[__webpack_require__.e("default~abonnement-abonnement-module~beheer-beheer-module~factuur-factuur-module~klant-klant-module~~da232cc7"), __webpack_require__.e("beheer-beheer-module")]).then(__webpack_require__.bind(null, /*! ../beheer/beheer.module */ "Y9/8")).then(function (m) { return m.BeheerModule; }); }
    },
    {
        path: "markt",
        loadChildren: function () { return Promise.all(/*! import() | markt-markt-module */[__webpack_require__.e("default~abonnement-abonnement-module~beheer-beheer-module~factuur-factuur-module~klant-klant-module~~da232cc7"), __webpack_require__.e("default~abonnement-abonnement-module~klant-klant-module~markt-markt-module~wachtlijst-wachtlijst-module"), __webpack_require__.e("common"), __webpack_require__.e("markt-markt-module")]).then(__webpack_require__.bind(null, /*! ../markt/markt.module */ "xKiN")).then(function (m) { return m.MarktModule; }); }
    },
    {
        path: "klant",
        loadChildren: function () { return Promise.all(/*! import() | klant-klant-module */[__webpack_require__.e("default~abonnement-abonnement-module~beheer-beheer-module~factuur-factuur-module~klant-klant-module~~da232cc7"), __webpack_require__.e("default~abonnement-abonnement-module~klant-klant-module~markt-markt-module~wachtlijst-wachtlijst-module"), __webpack_require__.e("common"), __webpack_require__.e("klant-klant-module")]).then(__webpack_require__.bind(null, /*! ../klant/klant.module */ "/bNh")).then(function (m) { return m.KlantModule; }); }
    },
    {
        path: "abonnement",
        loadChildren: function () { return Promise.all(/*! import() | abonnement-abonnement-module */[__webpack_require__.e("default~abonnement-abonnement-module~beheer-beheer-module~factuur-factuur-module~klant-klant-module~~da232cc7"), __webpack_require__.e("default~abonnement-abonnement-module~klant-klant-module~markt-markt-module~wachtlijst-wachtlijst-module"), __webpack_require__.e("common"), __webpack_require__.e("abonnement-abonnement-module")]).then(__webpack_require__.bind(null, /*! ../abonnement/abonnement.module */ "Qu6X")).then(function (m) { return m.AbonnementModule; }); }
    },
    {
        path: "rapportage",
        loadChildren: function () { return __webpack_require__.e(/*! import() | rapportage-main */ "rapportage-main").then(__webpack_require__.bind(null, /*! ../rapportage/main */ "paSI")).then(function (m) { return m.RapportageModule; }); }
    },
    {
        path: "factuur",
        loadChildren: function () { return Promise.all(/*! import() | factuur-factuur-module */[__webpack_require__.e("default~abonnement-abonnement-module~beheer-beheer-module~factuur-factuur-module~klant-klant-module~~da232cc7"), __webpack_require__.e("factuur-factuur-module")]).then(__webpack_require__.bind(null, /*! ../factuur/factuur.module */ "59Xd")).then(function (m) { return m.FactuurModule; }); }
    },
    {
        path: "home",
        loadChildren: function () { return __webpack_require__.e(/*! import() | home-main-module */ "home-main-module").then(__webpack_require__.bind(null, /*! ../home/main.module */ "zB8N")).then(function (m) { return m.HomeModule; }); }
    },
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    }
];
var NavigationModule = /** @class */ (function () {
    function NavigationModule(router, slimLoader) {
        var _this = this;
        this.router = router;
        this.slimLoader = slimLoader;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.slimLoader.start();
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.slimLoader.complete();
            }
            // Set loading state to false in both of the below events to hide the spinner in case a request fails
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]) {
                _this.slimLoader.complete();
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                _this.slimLoader.complete();
            }
        });
    }
    NavigationModule.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__["SlimLoadingBarService"] }
    ]; };
    NavigationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_navigation__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"]],
            providers: [ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__["SlimLoadingBarService"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__["SlimLoadingBarModule"].forRoot(), _shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__["SlimLoadingBarModule"], _app_navigation__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"], _shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__["SlimLoadingBarService"]])
    ], NavigationModule);
    return NavigationModule;
}());



/***/ }),

/***/ "yCy6":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/shared/panel/app.shared.panel.layout.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section [attr.id]=\"selector + '-parent'\" class=\"panel panel-default\" [ngClass]=\"{'panel-loading': loading}\">\r\n    <div class=\"panel-heading\" [hidden]=\"!showHeader && !showActions\">\r\n        <div class=\"panel-title\" [hidden]=\"!showHeader\">\r\n            <a #panelHeader\r\n               [attr.aria-controls]=\"selector\"\r\n               [attr.data-toggle]=\"collapsable ? 'collapse' : null\"\r\n               [attr.data-parent]=\"collapsable ? '#' + selector + '-parent' : null\"\r\n               [attr.href]=\"collapsable ? '#' + selector : null\"\r\n               [class.accordion-toggle]=\"collapsable\"\r\n               [name]=\"selector\">\r\n                <ng-content select=\"mafo-panel-heading\"></ng-content>\r\n            </a>\r\n        </div>\r\n        <div #panelActions class=\"panel-actions\" [hidden]=\"!showActions\">\r\n            <ng-content select=\"mafo-panel-actions\"></ng-content>\r\n        </div>\r\n    </div>\r\n    <div [attr.id]=\"selector\" [ngClass]=\"setPanelClasses()\">\r\n        <div #panelBody [ngClass]=\"{'panel-body': padding}\" [hidden]=\"!showBody || (!open && !collapsable)\">\r\n            <ng-content select=\"mafo-panel-body\"></ng-content>\r\n        </div>\r\n        <div class=\"panel-footer\" [hidden]=\"!showFooter || (!open && !collapsable)\">\r\n            <div #panelFooter>\r\n                <ng-content select=\"mafo-panel-footer\"></ng-content>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "yE9j":
/*!************************************************************************!*\
  !*** ./ClientApp/app/componenten/code-select/code-select.component.ts ***!
  \************************************************************************/
/*! exports provided: CodeSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSelectComponent", function() { return CodeSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _code_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code.service */ "Adg9");




var CodeSelectComponent = /** @class */ (function () {
    function CodeSelectComponent(codeService) {
        this.codeService = codeService;
        this._value = "";
        this.isLoading = true;
        this.disabled = false;
        this.placeholder = "- maak uw keuze -";
    }
    CodeSelectComponent_1 = CodeSelectComponent;
    Object.defineProperty(CodeSelectComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            if (this.propagateChange)
                this.propagateChange(this._value);
        },
        enumerable: false,
        configurable: true
    });
    ;
    CodeSelectComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    CodeSelectComponent.prototype.ngOnChanges = function (changes) {
        if (changes["type"])
            this.getData();
    };
    CodeSelectComponent.prototype.reload = function () {
        this.getData();
    };
    CodeSelectComponent.prototype.getData = function () {
        var _this = this;
        this.isLoading = true;
        this.codeService.getCodes(this.type).subscribe(function (x) {
            var result = { data: x };
            if (_this.onBeforeRender)
                _this.onBeforeRender(result);
            _this.data = result.data;
            _this.isLoading = false;
        }, function (x) { return _this.isLoading = false; });
    };
    CodeSelectComponent.prototype.writeValue = function (value) {
        this.value = value || "";
    };
    CodeSelectComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    CodeSelectComponent.prototype.registerOnTouched = function (fn) { };
    CodeSelectComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    var CodeSelectComponent_1;
    CodeSelectComponent.ctorParameters = function () { return [
        { type: _code_service__WEBPACK_IMPORTED_MODULE_3__["CodeService"] }
    ]; };
    CodeSelectComponent.propDecorators = {
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        onBeforeRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    CodeSelectComponent = CodeSelectComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "code-select",
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return CodeSelectComponent_1; }), multi: true }
            ],
            template: "\n            <select id=\"{{type}}-dropdown\" class=\"form-control\" [class.ajax-loading]=\"isLoading\" [attr.disabled]=\"isLoading || disabled ? true : null\" [(ngModel)]=\"value\">\n                <option value=\"\" selected>{{placeholder}}</option>\n                <option *ngFor=\"let item of data\" [ngValue]=\"item.code\">{{item.omschrijving}}</option>\n            </select>\n            ",
            styles: [".ajax-loading {    \n                background-color: #ffffff;\n                background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPSc2NHB4JyBoZWlnaHQ9JzY0cHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLXJpbmciPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgc3Ryb2tlLWRhc2hhcnJheT0iMTYzLjM2MjgxNzk4NjY2OTI2IDg3Ljk2NDU5NDMwMDUxNDIiIHN0cm9rZT0iI2QyNTM1MyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDsxODAgNTAgNTA7MzYwIDUwIDUwOyIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMHMiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L3N2Zz4=);\n                background-size: 25px 25px;\n                background-position: right 25px center;\n                background-repeat: no-repeat;\n            }"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_code_service__WEBPACK_IMPORTED_MODULE_3__["CodeService"]])
    ], CodeSelectComponent);
    return CodeSelectComponent;
}());



/***/ }),

/***/ "yxRt":
/*!***********************************************************!*\
  !*** ./ClientApp/app/componenten/product-select/index.ts ***!
  \***********************************************************/
/*! exports provided: ProductSelectModule, ProductSelectComponent, ProductDisplayComponent, ProductPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_select_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-select.module */ "Quu4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductSelectModule", function() { return _product_select_module__WEBPACK_IMPORTED_MODULE_0__["ProductSelectModule"]; });

/* harmony import */ var _product_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-select.component */ "Pptj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductSelectComponent", function() { return _product_select_component__WEBPACK_IMPORTED_MODULE_1__["ProductSelectComponent"]; });

/* harmony import */ var _product_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-display.component */ "WmFH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductDisplayComponent", function() { return _product_display_component__WEBPACK_IMPORTED_MODULE_2__["ProductDisplayComponent"]; });

/* harmony import */ var _product_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-panel.component */ "RLTE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductPanelComponent", function() { return _product_panel_component__WEBPACK_IMPORTED_MODULE_3__["ProductPanelComponent"]; });







/***/ }),

/***/ "z4/g":
/*!*****************************************************!*\
  !*** ./ClientApp/app/componenten/datagrid/index.ts ***!
  \*****************************************************/
/*! exports provided: SortOrder, DataGrid, Fill, DataGridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datagrid_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datagrid.models */ "3Jkk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortOrder", function() { return _datagrid_models__WEBPACK_IMPORTED_MODULE_0__["SortOrder"]; });

/* harmony import */ var _datagrid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datagrid.component */ "kkJf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataGrid", function() { return _datagrid_component__WEBPACK_IMPORTED_MODULE_1__["DataGrid"]; });

/* harmony import */ var _fill_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fill.pipe */ "ttqV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fill", function() { return _fill_pipe__WEBPACK_IMPORTED_MODULE_2__["Fill"]; });

/* harmony import */ var _datagrid_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datagrid.module */ "3QgZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataGridModule", function() { return _datagrid_module__WEBPACK_IMPORTED_MODULE_3__["DataGridModule"]; });







/***/ }),

/***/ "zVYK":
/*!*******************************************************************************!*\
  !*** ./ClientApp/app/componenten/document-upload/document-panel.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DocumentPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentPanelComponent", function() { return DocumentPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _code_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../code-select */ "HW5m");




var DocumentPanelComponent = /** @class */ (function () {
    function DocumentPanelComponent(fb, codeService) {
        this.fb = fb;
        this.codeService = codeService;
        this.componentsDisabled = false;
    }
    DocumentPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.codeService.getCodes(_code_select__WEBPACK_IMPORTED_MODULE_3__["CodeType"].Documenttype).subscribe(function (x) { return _this.documentTypes = x; });
    };
    DocumentPanelComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _code_select__WEBPACK_IMPORTED_MODULE_3__["CodeService"] }
    ]; };
    DocumentPanelComponent.propDecorators = {
        klantId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        componentsDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    DocumentPanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "dp-document-panel",
            template: "\n           <mafo-panel selector=\"documenten\" [collapsable]=\"true\" [open]=\"true\">\n                <mafo-panel-heading>\n                    <h5>\n                        DOCUMENTEN\n                    </h5>\n                </mafo-panel-heading>\n                <mafo-panel-body>\n                    <div class=\"row\">\n                        <div class=\"col-md-6\" *ngFor=\"let documentType of documentTypes\">\n                            <dp-document-upload [documentType]=\"documentType.code\" [klantId]=\"klantId\" [componentsDisabled]=\"componentsDisabled\" (callbackFn)=\"getDocumenten(klantId)\"></dp-document-upload>\n                        </div>\n                    </div>\n                </mafo-panel-body>\n            </mafo-panel>\n            "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _code_select__WEBPACK_IMPORTED_MODULE_3__["CodeService"]])
    ], DocumentPanelComponent);
    return DocumentPanelComponent;
}());



/***/ }),

/***/ "zY+x":
/*!************************************************************!*\
  !*** ./ClientApp/app/componenten/document-upload/index.ts ***!
  \************************************************************/
/*! exports provided: DocumentUploadComponent, DocumentUploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _document_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document-upload.component */ "/7ul");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentUploadComponent", function() { return _document_upload_component__WEBPACK_IMPORTED_MODULE_0__["DocumentUploadComponent"]; });

/* harmony import */ var _document_upload_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document-upload.module */ "Imnq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentUploadModule", function() { return _document_upload_module__WEBPACK_IMPORTED_MODULE_1__["DocumentUploadModule"]; });





/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map