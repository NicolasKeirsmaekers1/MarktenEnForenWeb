﻿import { ICode } from '../componenten/code-select';

export interface IKavelIdentifier {
    id: number;
    oudeNaam: string;
    kavelStatus: ICode;
}

export interface IKavelOverview extends IKavelIdentifier {
    abonnementId: number;
    abonnementStatus: ICode;
    mogelijkheidDieptekavel: boolean;
    longitude: number;
    latitude: number;
    kavelOpmerking: any[];
}

export enum KavelStatusEnum{
    Vrij = "Vrij",
    Gereserveerd = "Gereserveerd",
    Bezet = "Bezet",
    InOverdracht = "InOverdracht",
    BezetTeBedelen = "BezetTeBedelen",
    BezetGereserveerd = "BezetGereserveerd"             

}

export interface IKavelIdentifierDto{
    id: number;
    oudeNaam: string;
    kavelStatus: KavelStatusEnum;
    mogelijkheidDieptekavel: boolean;
    selected: boolean;
}

export interface IMarktboekjeKavelDetailDto{
    kavelId: number;
    marktId: number;
    oudeNaam: string;
    kavelStatus: KavelStatusEnum;
    mogelijkheidDieptekavel: boolean;
    abonnement: IKavelDetailAbonnementDto,
    opmerkingen: IKavelOpmerking[];
}

export interface IKavelDetailAbonnementDto{  
    abonnementId: number,
    firmaNaam: string;
    ondernemingsNummer: string;
    telefoon: string;
    contactPersoon: string;
    beginDatum: Date;
    eindDatum?: Date;
    abonnementStatus: string;
    uitstalling: string;
    verkoop: string;
    elektriciteit: string;
    producten: IAbonnementProductDto;
    abonnementKavels: IKavelIdentifierDto[];
}

export interface IAbonnementProductDto{
    omschrijving: string,
    detail: string
}

export interface IKavelOpmerking {
    id?: number;
    marktId: number;
    kavelId: number;
    abonnementId?: number;
    opmerking: string;
    createdOn?: Date;
}

export interface IKavelPut{
    dieptekavelMogelijkheid: boolean,
    oudeNaam: string,
    longitude: number,
    latitude: number,
    opmerkingen: IKavelOpmerking[]
}

export interface IKavelPost{
    oudeNaam: string,
    mogelijkheidDieptekave: boolean,
    latitude: number,
    longitude: number
}