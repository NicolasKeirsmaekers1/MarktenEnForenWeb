namespace MarktenEnForenApi.Shared.Authentication
{
    public class Privilege
    {
        public class General
        {
            public const string Unknown = "unknown";
            public const string UpdateOnderneming = "updateonderneming";
            public const string Nachtverwerking = "nachtverwerking";
        }

        public class AbonnementDieptekavelWijziging
        {
            public const string GetByAbonnementId = "getdieptekavelwijzigingenbyabonnementid";
        }

        public class JuridischeEntiteit
        {
            public const string Get = "getjuridischeentiteit";
        }

        public class Rapportage
        {
            public const string Get = "getrapportage";
        }

        public class CodeTable
        {
            public const string Get = "getcodetable";
        }

        public class AbonnementStatus
        {
            public const string ChangeStatus = "changeabonnementstatus";
            public const string AddWijziging = "addabonnementstatuswijziging";
        }

        public class AbonnementElektriciteitwijziging
        {
            public const string Add = "addabonnementelektriciteitwijziging";
            public const string Update = "updateabonnementelektriciteitwijziging";
            public const string Delete = "deleteabonnementelektriciteitwijziging";
            public const string GetByAbonnementId = "geteelektriciteitwijzigingenbyabonnementid";
        }

        public class Klant
        {
            public const string GetCommerciele = "getcommercieleklanten";
            public const string GetNietCommerciele = "getnietcommercieleklanten";
            public const string GetByOndernemingsnr = "getklantbyondernemingsnr";
            public const string GetAll = "getallklanten";
            public const string GetAllFilteredAndPaged = "getallklantenfilteredandpaged";
            public const string Get = "getklant";
            public const string Add = "addklant";
            public const string Update = "updateklant";
            public const string Delete = "deleteklant";
            public const string Select = "selectklant";
        }

        public class Markt
        {
            public const string Get = "getmarkt";
            public const string GetMarktBoekjes = "getmarktboekjes";
            public const string GetAll = "getallmarkten";
            public const string GetAllFilteredAndPaged = "getallmarktenfilteredandpaged";
            public const string GetByDistrictid = "getmarktenbydistrictid";
            public const string Add = "addmarkt";
            public const string Update = "updatemarkt";
            public const string Delete = "deletemarkt";
        }

        public class AanvraagMarkt
        {
            public const string Get = "getaanvraagmarkt";
            public const string Add = "addaanvraagmarkt";
            public const string Update = "updateaanvraagmarkt";
            public const string Delete = "deleteaanvraagmarkt";
            public const string GetByKlantId = "getmarktaanvragenbyklantid";
        }

        public class Aanvraag
        {
            public const string Get = "getaanvraag";
            public const string GetAll = "getallaanvragen";
            public const string GetAllFilteredAndPaged = "getallaanvragenfilteredandpaged";
            public const string GetAllByStatusFilteredAndPaged = "getallaanvragenbystatusfilteredandpaged";
            public const string Add = "addaanvraag";
            public const string Update = "updateaanvraag";
            public const string Delete = "deleteaanvraag";
            public const string Detail = "intakedetail";
            public const string CreateForKlant = "createintakeforklant";
            public const string VeranderNaarGepreregistreerd = "veranderintakenaargepreregistreerd";
            public const string ReservatieRaadplegen = "reservatieraadplegen";
            public const string RegistratieBewerken = "registratiebewerken";
            public const string RegistratieVerwijderen = "registratieverwijderen";
            public const string ToewijzenAanvragenNietInAanmerking = "toewijzenaanvragennietinaanmerking";
            public const string PreregistratieBewerken = "preregistratiebewerken";
            public const string DirectRegistreren = "directregistreren";
        }

        public class Abonnment
        {
            public const string Get = "getabonnement";
            public const string GetAll = "getallabonnementen";
            public const string GetAllFilteredAndPaged = "getallabonnementenfilteredandpaged";
            public const string GetAllByStatusFilteredAndPaged = "getallabonnementenbystatusfilteredandpaged";
            public const string Add = "addabonnement";
            public const string Update = "updateabonnement";
            public const string Delete = "deleteabonnement";
            public const string Detail = "abonnementdetail";
            public const string GetByKlantId = "getabonnementenbyklantid";
        }

        public class Kavel
        {
            public const string Get = "getkavel";
            public const string Update = "updatekavel";
            public const string Delete = "deletekavel";
            public const string Add = "addkavel";
        }

        public class KavelOpmerking
        {
            public const string Get = "getkavelopmerking";
            public const string Add = "addkavelopmerking";
            public const string Update = "updatekavelopmerking";
            public const string Delete = "deletekavelopmerking";
            public const string Toevoegen = "kavelopmerkingtoevoegen";
        }

        public class Aanvraagweigering
        {
            public const string GetByAanvraagId = "getaanvraagweigeringbyaanvraagid";
            public const string Add = "addaanvraagweigering";
            public const string Get = "getaanvraagweigering";
            public const string Update = "updateaanvraagweigering";
            public const string Delete = "deleteaanvraagweigering";
        }

        public class Factuur
        {
            public const string Get = "getfactuur";
            public const string GetAll = "getallfacturen";
            public const string GetFilteredAndPaged = "getfacturenfilteredandpaged";
            public const string Add = "addfactuur";
            public const string Update = "updatefactuur";
            public const string Delete = "deletefactuur";
            public const string Genereer = "genereerfacturen";
            public const string StuurNaarSap = "stuurfacturennaarsap";
            public const string FacturatieMenu = "facturatiemenu";
        }

        public class Document
        {
            public const string Get = "getdocument";
            public const string Add = "adddocument";
            public const string Update = "updatedocument";
            public const string Delete = "deletedocument";
        }

        public class Locatie
        {
            public const string Get = "getlocatie";
            public const string Add = "addlocatie";
            public const string Update = "updatelocatie";
            public const string Delete = "deletelocatie";
        }

        public class Product
        {
            public const string Get = "getproduct";
            public const string Add = "addproduct";
            public const string Update = "updateproduct";
            public const string Delete = "deleteproduct";
        }

        public class AbonnementKavel
        {
            public const string Add = "addabonnementkavel";
            public const string Update = "updateabonnementkavel";
            public const string Delete = "deleteabonnementkavel";
            public const string Get = "getabonnementkavel";
        }

        public class District
        {
            public const string Get = "getdistrict";
            public const string Add = "adddistrict";
            public const string Update = "updatedistrict";
            public const string Delete = "deletedistrict";
        }
    }
}
