import { Injectable, Input } from "@angular/core";

@Injectable()
export class DateTimeHelper {
    @Input() date: string;
    quarterNumber: number;

    getCurrentDate(): Date {
        return new Date();
    }

    getQuarter(date: Date): number {
        return date.getQuarter();
    }

    getFirstDayOfQuarter(date: Date): Date {
        return date.getFirstDayOfQuarter();
    }

    //TODO: opnieuw: wat doen we met 01/10?
    nextWinterStartDate(): Date {
        if (new Date().getMonth() + 1 < 10) //als 1 oktober van het huidige jaar nog niet gepasseerd is -> volgende winter start op 1 oktober van het huidige jaar en eindigt op 31 maart van het volgende jaar
        {
            return new Date(new Date().getFullYear(), 9, 1);
        }
        else //anders start de volgende winter op 1 oktober van het volgende jaar en eindigt op 31 maart daarna
        {
            return new Date(new Date().getFullYear() + 1, 9, 1);
        }
    }

    //TODO: opnieuw: wat doen we met 01/10?
    nextWinterEndDate(): Date {
        if (new Date().getMonth() + 1 < 10) //als 1 oktober van het huidige jaar nog niet gepasseerd is -> volgende winter start op 1 oktober van het huidige jaar en eindigt op 31 maart van het volgende jaar
        {
            return new Date(new Date().getFullYear() + 1, 2, 31);
        }
        else //anders start de volgende winter op 1 oktober van het volgende jaar en eindigt op 31 maart daarna
        {
            return new Date(new Date().getFullYear() + 2, 2, 31);
        }
    }
}

//function daysInMonth(month: number, year: number): number {
//    return new Date(year, month, 0).getDate();
//}

declare global {
    interface Date {
        getQuarter(): number;
        getFirstDayOfQuarter(): Date;
        addQuarter(): Date;
        addDays(days: number): Date;
        addMonths(months: number): Date;
        addYears(years: number): Date;
        daysInMonth(): number;
        eerstVolgendeKwartaalEindDatum(checkBuffer?: boolean): Date;
        eerstVolgendeSemesterEindDatum(checkBuffer?: boolean): Date;
        endDates(length: number): Date[];
        startDates(length: number): Date[];
    }
}

if (!Date.prototype.hasOwnProperty('getQuarter')) {
    Date.prototype.getQuarter = function (): number {
        return Math.floor(this.getMonth() / 3 + 1);
    }
}

if (!Date.prototype.hasOwnProperty('getFirstDayOfQuarter')) {
    Date.prototype.getFirstDayOfQuarter = function (): Date {
        this.quarterNumber = this.getQuarter(this);
        return new Date(this.getFullYear(), (this.quarterNumber - 1) * 3, 1);
    }
}

if (!Date.prototype.hasOwnProperty('addQuarter')) {
    Date.prototype.addQuarter = function (): Date {
        if (this.getDate() === this.daysInMonth()) {
            return this.addDays(1).addMonths(3).addDays(-1);
        }
        else {
            return this.addMonths(3);
        }
    }
}

if (!Date.prototype.hasOwnProperty('addDays')) {
    Date.prototype.addDays = function (days: number): Date {
        return new Date(new Date(this).setDate(this.getDate() + days));
    }
}

if (!Date.prototype.hasOwnProperty('addMonths')) {
    Date.prototype.addMonths = function (months: number): Date {
        return new Date(new Date(this).setMonth(this.getMonth() + months));
    }
}

if (!Date.prototype.hasOwnProperty('addYears')) {
    Date.prototype.addYears = function (years: number): Date {
        return new Date(new Date(this).setFullYear(this.getFullYear() + years));
    }
}


if (!Date.prototype.hasOwnProperty('daysInMonth')) {
    Date.prototype.daysInMonth = function (): number {
        return new Date(this.getFullYear(), this.getMonth(), 0).getDate();
    }
}

if (!Date.prototype.hasOwnProperty('eerstVolgendeKwartaalEindDatum')) {
    Date.prototype.eerstVolgendeKwartaalEindDatum = function (checkBufferPeriod?: boolean): Date {
        const referentieMonth = this.getMonth() + 1; //opm: maanden in het javascript Date object tellen vanaf 0
        const referentieYear = this.getFullYear();
        const quarter = Math.ceil(referentieMonth / 3.0); //kwartaal van de referentiedatum (1 - 4)
        var today = new Date(referentieYear, this.getMonth(), this.getDate());
        switch (quarter) {
            case 1:
                var returnDate = new Date(referentieYear, 2, 31); //eerste kwartaal -> einddatum is 31/03 (maanden tellen van 0)
                if ((checkBufferPeriod && today.addDays(30) <= returnDate) || !checkBufferPeriod) {
                    return returnDate
                }
            case 2:
                var returnDate = new Date(referentieYear, 5, 30); //tweede kwartaal -> einddatum is 30/06 (maanden tellen van 0)
                if ((checkBufferPeriod && today.addDays(30) <= returnDate) || !checkBufferPeriod) {
                    return returnDate
                }
            case 3:
                var returnDate = new Date(referentieYear, 8, 30); //derde kwartaal -> einddatum is 30/09 (maanden tellen van 0)
                if ((checkBufferPeriod && today.addDays(30) <= returnDate) || !checkBufferPeriod) {
                    return returnDate
                }
            case 4:
                var returnDate = new Date(referentieYear, 11, 31); //vierde kwartaal -> einddatum is 31/12 (maanden tellen van 0)
                if ((checkBufferPeriod && today.addDays(30) <= returnDate) || !checkBufferPeriod) {
                    return returnDate
                } 
                return new Date(referentieYear + 1, 2, 31);
            default:
                return null;
        }
    }
}

if (!Date.prototype.hasOwnProperty('eerstVolgendeSemesterEindDatum')) 
{
    Date.prototype.eerstVolgendeSemesterEindDatum = function (checkBufferPeriod?: boolean): Date
    {
        const currentMonth = this.getMonth() + 1;
        const currentYear = this.getFullYear();
        var semester = Math.ceil(currentMonth / 6.0);
        var today = new Date(currentYear, this.getMonth(), this.getDate());
        
        if (semester == 1)
        {
            var date = new Date(currentYear, 5, 30);

            if ((checkBufferPeriod && today.addDays(30) <= date) || !checkBufferPeriod)
            {
                return date;
            }

            semester++;
        }

        if (semester == 2)
        {
            var date = new Date(currentYear, 11, 31);
            if ((checkBufferPeriod && today.addDays(30) <= date) || !checkBufferPeriod)
            {
                return date;
            }

            return new Date(currentYear + 1, 5, 30);
        }

        return null;
    }
}

if (!Date.prototype.hasOwnProperty('endDates')) {
    Date.prototype.endDates = function (length: number): Date[] {
        const referentieYear = this.getFullYear();
        var returnArray = [];
        for (var i = 0; i < length; i++) {
            returnArray.push(new Date(referentieYear + i, 2, 31));
            returnArray.push(new Date(referentieYear + i, 5, 30));
            returnArray.push(new Date(referentieYear + i, 8, 30));
            returnArray.push(new Date(referentieYear + i, 11, 31));
        }
        return returnArray;
    }
}

if (!Date.prototype.hasOwnProperty('startDates')) {
    Date.prototype.startDates = function (length: number): Date[] {
        const referentieYear = this.getFullYear();
        var returnArray = [];
        for (var i = 0; i < length; i++) {
            returnArray.push(new Date(referentieYear + i, 0, 1));
            returnArray.push(new Date(referentieYear + i, 3, 1));
            returnArray.push(new Date(referentieYear + i, 6, 1));
            returnArray.push(new Date(referentieYear + i, 9, 1));
        }
        return returnArray;
    }
}