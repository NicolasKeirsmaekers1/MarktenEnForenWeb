(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "/01Y":
/*!**********************************************!*\
  !*** ./ClientApp/app/klant/klant.resolve.ts ***!
  \**********************************************/
/*! exports provided: KlantResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlantResolve", function() { return KlantResolve; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _componenten_klant_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componenten/klant-core */ "TDej");



var KlantResolve = /** @class */ (function () {
    function KlantResolve(klantService) {
        this.klantService = klantService;
    }
    KlantResolve.prototype.resolve = function (route) {
        return this.klantService.get(route.params['id']);
    };
    KlantResolve.ctorParameters = function () { return [
        { type: _componenten_klant_core__WEBPACK_IMPORTED_MODULE_2__["KlantService"] }
    ]; };
    KlantResolve = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_componenten_klant_core__WEBPACK_IMPORTED_MODULE_2__["KlantService"]])
    ], KlantResolve);
    return KlantResolve;
}());



/***/ }),

/***/ "CS9P":
/*!*******************************************************!*\
  !*** ./ClientApp/app/shared/helper/datetimehelper.ts ***!
  \*******************************************************/
/*! exports provided: DateTimeHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeHelper", function() { return DateTimeHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var DateTimeHelper = /** @class */ (function () {
    function DateTimeHelper() {
    }
    DateTimeHelper.prototype.getCurrentDate = function () {
        return new Date();
    };
    DateTimeHelper.prototype.getQuarter = function (date) {
        return date.getQuarter();
    };
    DateTimeHelper.prototype.getFirstDayOfQuarter = function (date) {
        return date.getFirstDayOfQuarter();
    };
    //TODO: opnieuw: wat doen we met 01/10?
    DateTimeHelper.prototype.nextWinterStartDate = function () {
        if (new Date().getMonth() + 1 < 10) //als 1 oktober van het huidige jaar nog niet gepasseerd is -> volgende winter start op 1 oktober van het huidige jaar en eindigt op 31 maart van het volgende jaar
         {
            return new Date(new Date().getFullYear(), 9, 1);
        }
        else //anders start de volgende winter op 1 oktober van het volgende jaar en eindigt op 31 maart daarna
         {
            return new Date(new Date().getFullYear() + 1, 9, 1);
        }
    };
    //TODO: opnieuw: wat doen we met 01/10?
    DateTimeHelper.prototype.nextWinterEndDate = function () {
        if (new Date().getMonth() + 1 < 10) //als 1 oktober van het huidige jaar nog niet gepasseerd is -> volgende winter start op 1 oktober van het huidige jaar en eindigt op 31 maart van het volgende jaar
         {
            return new Date(new Date().getFullYear() + 1, 2, 31);
        }
        else //anders start de volgende winter op 1 oktober van het volgende jaar en eindigt op 31 maart daarna
         {
            return new Date(new Date().getFullYear() + 2, 2, 31);
        }
    };
    DateTimeHelper.propDecorators = {
        date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    DateTimeHelper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DateTimeHelper);
    return DateTimeHelper;
}());

if (!Date.prototype.hasOwnProperty('getQuarter')) {
    Date.prototype.getQuarter = function () {
        return Math.floor(this.getMonth() / 3 + 1);
    };
}
if (!Date.prototype.hasOwnProperty('getFirstDayOfQuarter')) {
    Date.prototype.getFirstDayOfQuarter = function () {
        this.quarterNumber = this.getQuarter(this);
        return new Date(this.getFullYear(), (this.quarterNumber - 1) * 3, 1);
    };
}
if (!Date.prototype.hasOwnProperty('addQuarter')) {
    Date.prototype.addQuarter = function () {
        if (this.getDate() === this.daysInMonth()) {
            return this.addDays(1).addMonths(3).addDays(-1);
        }
        else {
            return this.addMonths(3);
        }
    };
}
if (!Date.prototype.hasOwnProperty('addDays')) {
    Date.prototype.addDays = function (days) {
        return new Date(new Date(this).setDate(this.getDate() + days));
    };
}
if (!Date.prototype.hasOwnProperty('addMonths')) {
    Date.prototype.addMonths = function (months) {
        return new Date(new Date(this).setMonth(this.getMonth() + months));
    };
}
if (!Date.prototype.hasOwnProperty('addYears')) {
    Date.prototype.addYears = function (years) {
        return new Date(new Date(this).setFullYear(this.getFullYear() + years));
    };
}
if (!Date.prototype.hasOwnProperty('daysInMonth')) {
    Date.prototype.daysInMonth = function () {
        return new Date(this.getFullYear(), this.getMonth(), 0).getDate();
    };
}
if (!Date.prototype.hasOwnProperty('eerstVolgendeKwartaalEindDatum')) {
    Date.prototype.eerstVolgendeKwartaalEindDatum = function (checkBufferPeriod) {
        var referentieMonth = this.getMonth() + 1; //opm: maanden in het javascript Date object tellen vanaf 0
        var referentieYear = this.getFullYear();
        var quarter = Math.ceil(referentieMonth / 3.0); //kwartaal van de referentiedatum (1 - 4)
        var today = new Date(referentieYear, this.getMonth(), this.getDate());
        switch (quarter) {
            case 1:
                var returnDate = new Date(referentieYear, 2, 31); //eerste kwartaal -> einddatum is 31/03 (maanden tellen van 0)
                if ((checkBufferPeriod && today.addDays(30) <= returnDate) || !checkBufferPeriod) {
                    return returnDate;
                }
            case 2:
                var returnDate = new Date(referentieYear, 5, 30); //tweede kwartaal -> einddatum is 30/06 (maanden tellen van 0)
                if ((checkBufferPeriod && today.addDays(30) <= returnDate) || !checkBufferPeriod) {
                    return returnDate;
                }
            case 3:
                var returnDate = new Date(referentieYear, 8, 30); //derde kwartaal -> einddatum is 30/09 (maanden tellen van 0)
                if ((checkBufferPeriod && today.addDays(30) <= returnDate) || !checkBufferPeriod) {
                    return returnDate;
                }
            case 4:
                var returnDate = new Date(referentieYear, 11, 31); //vierde kwartaal -> einddatum is 31/12 (maanden tellen van 0)
                if ((checkBufferPeriod && today.addDays(30) <= returnDate) || !checkBufferPeriod) {
                    return returnDate;
                }
                return new Date(referentieYear + 1, 2, 31);
            default:
                return null;
        }
    };
}
if (!Date.prototype.hasOwnProperty('eerstVolgendeSemesterEindDatum')) {
    Date.prototype.eerstVolgendeSemesterEindDatum = function (checkBufferPeriod) {
        var currentMonth = this.getMonth() + 1;
        var currentYear = this.getFullYear();
        var semester = Math.ceil(currentMonth / 6.0);
        var today = new Date(currentYear, this.getMonth(), this.getDate());
        if (semester == 1) {
            var date = new Date(currentYear, 5, 30);
            if ((checkBufferPeriod && today.addDays(30) <= date) || !checkBufferPeriod) {
                return date;
            }
            semester++;
        }
        if (semester == 2) {
            var date = new Date(currentYear, 11, 31);
            if ((checkBufferPeriod && today.addDays(30) <= date) || !checkBufferPeriod) {
                return date;
            }
            return new Date(currentYear + 1, 5, 30);
        }
        return null;
    };
}
if (!Date.prototype.hasOwnProperty('endDates')) {
    Date.prototype.endDates = function (length) {
        var referentieYear = this.getFullYear();
        var returnArray = [];
        for (var i = 0; i < length; i++) {
            returnArray.push(new Date(referentieYear + i, 2, 31));
            returnArray.push(new Date(referentieYear + i, 5, 30));
            returnArray.push(new Date(referentieYear + i, 8, 30));
            returnArray.push(new Date(referentieYear + i, 11, 31));
        }
        return returnArray;
    };
}
if (!Date.prototype.hasOwnProperty('startDates')) {
    Date.prototype.startDates = function (length) {
        var referentieYear = this.getFullYear();
        var returnArray = [];
        for (var i = 0; i < length; i++) {
            returnArray.push(new Date(referentieYear + i, 0, 1));
            returnArray.push(new Date(referentieYear + i, 3, 1));
            returnArray.push(new Date(referentieYear + i, 6, 1));
            returnArray.push(new Date(referentieYear + i, 9, 1));
        }
        return returnArray;
    };
}


/***/ }),

/***/ "VRMf":
/*!**********************************************!*\
  !*** ./ClientApp/app/markt/markt.resolve.ts ***!
  \**********************************************/
/*! exports provided: MarktResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarktResolve", function() { return MarktResolve; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _componenten_markt_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componenten/markt-select */ "3vM0");



var MarktResolve = /** @class */ (function () {
    function MarktResolve(marktService) {
        this.marktService = marktService;
    }
    MarktResolve.prototype.resolve = function (route) {
        return this.marktService.get(route.params['id']);
    };
    MarktResolve.ctorParameters = function () { return [
        { type: _componenten_markt_select__WEBPACK_IMPORTED_MODULE_2__["MarktService"] }
    ]; };
    MarktResolve = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_componenten_markt_select__WEBPACK_IMPORTED_MODULE_2__["MarktService"]])
    ], MarktResolve);
    return MarktResolve;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map