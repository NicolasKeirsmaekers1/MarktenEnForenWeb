export interface IFactuurIdentifier {
    id: number;
    factuurNummer: string;
}

export interface IFactuurOverview extends IFactuurIdentifier {
    jaar: number;
    semester: number;
    type: any;
    bedrag: number;
    createdOn: Date;
    klantOndernemingsnr: string;
    klantFirmanaam: string;
    districtCode: string;
    districtNaam: string;
}