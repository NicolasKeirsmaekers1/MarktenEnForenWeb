import { Injectable } from "@angular/core";

@Injectable()
export class ApplicationConstants {
    static DieptekavelStatusNietBeschikbaarCode: string = "NIETBESCHIKBAAR";
    static DieptekavelStatusNietBeschikbaarOmschrijving: string = "Niet beschikbaar";

    static DieptekavelStatusNietInGebruikCode: string = "NIETINGEBRUIK";
    static DieptekavelStatusNietInGebruikOmschrijving: string = "Niet in gebruik";

    static DieptekavelStatusInGebruikCode: string = "INGEBRUIK";
    static DieptekavelStatusInGebruikOmschrijving: string = "In gebruik";

    static HalfjaarlijksFactuurType: string = "HALFJAARLIJKSEFACTUUR";
    static TussentijdsFactuurType: string = "TUSSENTIJDSEFACTUUR";
    static Terugbetaling: string = "TERUGBETALING";
    static OnbekendFactuurType: string = "ONBEKEND";

    static HalfjaarlijksFactuurTypeRoute: string = "halfjaarlijkse";
    static TussentijdsFactuurTypeRoute: string = "tussentijdse";
    static TerugbetalingenRoute: string = "terugbetalingen";

    static AanvraagStatus = class {
        static Intake: string = "INTAKE";
        static Gepreregistreerd: string = "GEPREREGISTREERD";
        static Geregistreerd: string = "GEREGISTREERD";
        static Toegewezen: string = "TOEGEWEZEN";
        static Gedeeltelijktoegewezen: string = "GEDEELTELIJKTOEGEWEZEN";
        static Stopgezet: string = "STOPGEZET";
        static Gereserveerd: string = "GERESERVEERD";
        static Geannuleerd: string = "GEANNULEERD";
    }

    static AanvraagPatchType = class {
        static Status: string = 'STATUS';
        static Renewaldate: string = 'RENEWALDATE';
    }

    static AanvraagSoort = class {
        static RuilingCode: string = "RUILING";
        static RuilingOmschrijving: string = "Ruiling";
        static RuilingUitbreidingCode: string = "RUILINGUITBREIDING";
        static RuilingUitbreidingOmschrijving: string = "Ruiling + uitbreiding";
        static UitbreidingCode: string = "UITBREIDING";
        static UitbreidingOmschrijving: string = "Uitbreiding";
        static NieuwePlaatsCode: string = "NIEUWEPLAATS";
        static NieuwePlaatsOmschrijving: string = "Nieuwe plaats";
        static PlaatsKwijtgeraaktCode: string = "PLAATSKWIJTGERAAKT";
        static PlaatsKwijtgeraaktOmschrijving: string = "Plaats kwijtgeraakt";
    }

    static AbonnementStatus = class {
        static GereserveerdCode: string = "GERESERVEERD";
        static GereserveerdOmschrijving: string = "Gereserveerd";
        static LopendCode: string = "LOPEND";
        static LopendOmschrijving: string = "Lopend";
        static GeweigerdCode: string = "GEWEIGERD";
        static GeweigerdOmschrijving: string = "Geweigerd";
        static OpgezegdCode: string = "OPGEZEGD";
        static OpgezegdOmschrijving: string = "Opgezegd";
        static InOverdrachtCode: string = "INOVERDRACHT";
        static InOverdrachtOmschrijving: string = "In overdracht";
        static IngetrokkenCode: string = "INGETROKKEN";
        static IngetrokkenOmschrijving: string = "Ingetrokken";
        static OpgeschortCode: string = "OPGESCHORT";
        static OpgeschortOmschrijving: string = "Opgeschort";
        static GeschorstCode: string = "GESCHORST";
        static GeschorstOmschrijving: string = "Geschorst";
        static StopgezetCode: string = "STOPGEZET";
        static StopgezetOmschrijving: string = "Stopgezet";
        static WachtendOpActivatieCode: string = "WACHTENDOPACTIVATIE";
        static WachtendOpActivatieOmschrijving: string = "Wachtend op activatie";
        static GeannuleerdCode: string = "GEANNULEERD";
        static GeannuleerdOmschrijving: string = "Geannuleerd";
    }

    static Verkoop = class {
        static GewoneVerkoop: string = "GEWONEVERKOOP";
        static Demonstreerder: string = "DEMONSTREERDER";
        static SeizoensgebondenVerkoop: string = "SEIZOENSGEBONDENVERKOOP";
    }

}