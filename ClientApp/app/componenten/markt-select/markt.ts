import { ICode } from "../code-select";

export interface IMarktIdentifier {
    id: number;
    naam: string;
}

export interface IMarktOverview extends IMarktIdentifier {
    afkorting: string;
    startDatum: Date;
    eindDatum?: Date;
    beginUur: string; // TODO: typescript timespan?
    eindUur: string;// TODO: typescript timespan?
    aantalKavels: number; // TODO: rename -> MaxAantalKavels
}

export interface IMarktDetail extends IMarktOverview {
    locatieId: number;
    districtCode: string;
    districtId: number;
    intervalCode: string;
    intervalId: number;
    dagVanDeWeekCode: string;
    dagVanDeWeekId: number;
    kavels: any; // TODO: IENUM typescript?
}

export interface IMarktWachtlijstOverview {
    id: number;
    naam: string;
    locatie: ICode;
    district: ICode;
    dagVanDeWeek: ICode;
    toeWijsbareKavels: number;
    OpenstaandeGeregistreerdeKavels: number;
}

export interface IMarktWachtlijst {
    volgnummer: number;
    aanvraagId: number;
    aangevraagdeKavels: number;
    soortCode: string;
    verkoopCode: string;
    ondernemingsNummer: string;
    firmanaam: string;
    uitgesteldDatum: Date;
    toewijsbareKavels: number;
}

export interface IMarktPut extends IMarktOverview {
    locatieId: number;
    districtId: number;
    intervalId: number;
    dagVanDeWeekId: number;
    kavels: any;
}

export interface IMarktPost extends IMarktOverview {
    locatieId: number;
    districtId: number;
    intervalId: number;
    dagVanDeWeekId: number;
    kavels: any;
}