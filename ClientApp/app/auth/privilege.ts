import { Injectable } from "@angular/core";

@Injectable()
export class Privilege {

    static General = class {
        static Unknown: string = "unknown";
        static UpdateOnderneming: string = "updateonderneming";
        static Nachtverwerking: string = "nachtverwerking";
    }

    static AbonnementDieptekavelWijziging = class {
        static GetByAbonnementId: string = "getdieptekavelwijzigingenbyabonnementid";
    }

    static JuridischeEntiteit = class {
        static Get: string = "getjuridischeentiteit";
    }

    static Beheer = class {
        static BeheerMenu: string = "beheer";
    }

    static Rapportage = class {
        static Get: string = "getrapportage";
    }

    static CodeTable = class {
        static Get: string = "getcodetable";
    }

    static AbonnementStatus = class {
        static ChangeStatus: string = "changeabonnementstatus";
        static AddWijziging: string = "addabonnementstatuswijziging";
    }

    static AbonnementElektriciteitwijziging = class {
        static Add: string = "addabonnementelektriciteitwijziging";
        static Update: string = "updateabonnementelektriciteitwijziging";
        static Delete: string = "deleteabonnementelektriciteitwijziging";
        static GetByAbonnementId: string = "geteelektriciteitwijzigingenbyabonnementid";
    }

    static Klant = class {
        static GetCommerciele: string = "getcommercieleklanten";
        static GetNietCommerciele: string = "getnietcommercieleklanten";
        static GetByOndernemingsnr: string = "getklantbyondernemingsnr";
        static GetAll: string = "getallklanten";
        static GetAllFilteredAndPaged: string = "getallklantenfilteredandpaged";
        static Get: string = "getklant";
        static Add: string = "addklant";
        static Update: string = "updateklant";
        static Delete: string = "deleteklant";
        static Select: string = "selectklant";
    }

    static Markt = class {
        static Get: string = "getmarkt";
        static GetMarktBoekjes: string = "getmarktboekjes";
        static GetAll: string = "getallmarkten";
        static GetAllFilteredAndPaged: string = "getallmarktenfilteredandpaged";
        static GetByDistrictid: string = "getmarktenbydistrictid";
        static Add: string = "addmarkt";
        static Update: string = "updatemarkt";
        static Delete: string = "deletemarkt";
    }

    static AanvraagMarkt = class {
        static Get: string = "getaanvraagmarkt";
        static Add: string = "addaanvraagmarkt";
        static Update: string = "updateaanvraagmarkt";
        static Delete: string = "deleteaanvraagmarkt";
        static GetByKlantId: string = "getmarktaanvragenbyklantid";
    }

    static Aanvraag = class {
        static Get: string = "getaanvraag";
        static GetAll: string = "getallaanvragen";
        static GetAllFilteredAndPaged: string = "getallaanvragenfilteredandpaged";
        static GetAllByStatusFilteredAndPaged: string = "getallaanvragenbystatusfilteredandpaged";
        static Add: string = "addaanvraag";
        static Update: string = "updateaanvraag";
        static Delete: string = "deleteaanvraag";
        static Detail: string = "intakedetail";
        static CreateForKlant: string = "createintakeforklant";
        static VeranderNaarGepreregistreerd: string = "veranderintakenaargepreregistreerd";
        static ReservatieRaadplegen: string = "reservatieraadplegen";
        static RegistratieBewerken: string = "registratiebewerken";
        static RegistratieVerwijderen: string = "registratieverwijderen";
        static ToewijzenAanvragenNietInAanmerking: string = "toewijzenaanvragennietinaanmerking";
        static PreregistratieBewerken: string = "preregistratiebewerken";
        static DirectRegistreren: string = "directregistreren";
    }

    static Abonnement = class {
        static Get: string = "getabonnement";
        static GetAll: string = "getallabonnementen";
        static GetAllFilteredAndPaged: string = "getallabonnementenfilteredandpaged";
        static GetAllByStatusFilteredAndPaged: string = "getallabonnementenbystatusfilteredandpaged";
        static Add: string = "addabonnement";
        static Update: string = "updateabonnement";
        static Delete: string = "deleteabonnement";
        static Detail: string = "abonnementdetail";
        static GetByKlantId: string = "getabonnementenbyklantid";
    }

    static Kavel = class {
        static Get: string = "getkavel";
        static Update: string = "updatekavel";
        static Delete: string = "deletekavel";
        static Add: string = "addkavel";
    }

    static KavelOpmerking = class {
        static Get: string = "getkavelopmerking";
        static Add: string = "addkavelopmerking";
        static Update: string = "updatekavelopmerking";
        static Delete: string = "deletekavelopmerking";
        static Toevoegen: string = "kavelopmerkingtoevoegen";
    }

    static Aanvraagweigering = class {
        static GetByAanvraagId: string = "getaanvraagweigeringbyaanvraagid";
        static Add: string = "addaanvraagweigering";
        static Get: string = "getaanvraagweigering";
        static Update: string = "updateaanvraagweigering";
        static Delete: string = "deleteaanvraagweigering";
    }

    static Factuur = class {
        static Get: string = "getfactuur";
        static GetAll: string = "getallfacturen";
        static GetFilteredAndPaged: string = "getfacturenfilteredandpaged";
        static Add: string = "addfactuur";
        static Update: string = "updatefactuur";
        static Delete: string = "deletefactuur";
        static Genereer: string = "genereerfacturen";
        static StuurNaarSap: string = "stuurfacturennaarsap";
        static FacturatieMenu: string = "facturatiemenu";
    }

    static Document = class {
        static Get: string = "getdocument";
        static Add: string = "adddocument";
        static Update: string = "updatedocument";
        static Delete: string = "deletedocument";
    }

    static Locatie = class {
        static Get: string = "getlocatie";
        static Add: string = "addlocatie";
        static Update: string = "updatelocatie";
        static Delete: string = "deletelocatie";
    }

    static Product = class {
        static Get: string = "getproduct";
        static Add: string = "addproduct";
        static Update: string = "updateproduct";
        static Delete: string = "deleteproduct";
    }

    static AbonnementKavel = class {
        static Add: string = "addabonnementkavel";
        static Update: string = "updateabonnementkavel";
        static Delete: string = "deleteabonnementkavel";
        static Get: string = "getabonnementkavelabonnementkavel";
    }

    static District = class {
        static Get: string = "getdistrict";
        static Add: string = "adddistrict";
        static Update: string = "updatedistrict";
        static Delete: string = "deletedistrict";
    }
}