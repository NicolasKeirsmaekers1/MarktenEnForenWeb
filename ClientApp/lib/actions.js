//Action methods;
var mefControllers = new function () {
    this.markt = new function () {
        this.index = "";
        this.edit = "";
        this.delete = "";
        this.selectDistrict = "";
        this.selectLocatie = "";
        this.handleMetOpzeg = "";
        this.handleOpenbareWerken = "";
    };

    this.kavel = new function () {
        this.detail = "";
        this.importKavelsForMarkt = "";
        this.createKavelOpmerking = "";
        this.getKavelsVanKlantOpMarkt = "";
    };

    this.marktboekje = new function () {
        this.index = "";
        this.detail = "";
    };

    this.klant = new function () {
        this.createInModal = "";
        this.index = "";
        this.edit = "";
        this.delete = "";
        this.getByOndernemingsnr = "";
        this.getByOndernemingsnrAndCrsOnderneming = "";
        this.getByOndernemingsnrInModal = "";
        this.handleSanctie = "";
        this.handleOngeldigAbonnement = "";
    };

    this.intake = new function () {
        this.index = "";
        this.edit = "";
        this.delete = "";
        this.createforklant = "";
        this.selectDistrict = "";
        this.selectMarkt = "";
        this.detail = "";
        this.selectDistrictForKlant = "";
        this.getDistricten = "";
        this.getMarkten = "";
        this.getDistrictenForKlant = "";
        this.getMarktenForKlant = "";
        this.getIngetrokkenAbonnementForKlant = "";
        this.getMarktenOpDezelfdeDag = "";
        this.getDistrictenMetMarktenOpDezelfdeDag = "";
        this.getMarktenOpDezelfdeDagForDistrict = "";
    };

    this.preregistratie = new function () {
        this.index = "";
        this.edit = "";
        this.delete = "";
        this.selectDistrict = "";
        this.selectMarkt = "";
        this.detail = "";
        this.selectDistrictForKlant = "";
        this.getDistricten = "";
        this.getMarkten = "";
        this.getDistrictenForKlant = "";
        this.getMarktenForKlant = "";
        this.getIngetrokkenAbonnementForKlant = "";
        this.getMarktenOpDezelfdeDag = "";
        this.getDistrictenMetMarktenOpDezelfdeDag = "";
        this.getMarktenOpDezelfdeDagForDistrict = "";
    };

    this.registratie = new function () {
        this.index = "";
        this.edit = "";
        this.delete = "";
        this.selectDistrict = "";
        this.selectMarkt = "";
        this.detail = "";
        this.wachtlijst = "";
        this.selectDistrictForKlant = "";
        this.getDistricten = "";
        this.getMarkten = "";
        this.getDistrictenForKlant = "";
        this.getMarktenForKlant = "";
        this.getIngetrokkenAbonnementForKlant = "";
        this.getMarktenOpDezelfdeDag = "";
        this.getDistrictenMetMarktenOpDezelfdeDag = "";
        this.getMarktenOpDezelfdeDagForDistrict = "";
        this.aanvraagVerwijderen = "";
    };

    this.reservatie = new function () {
        this.index = "";
        this.detail = "";
        this.weigeringStart = "";
        this.weigeringRegistreren = "";
    }

    this.abonnement = new function () {
        this.index = "";
        this.edit = "";
        this.delete = "";
        this.detail = "";
        this.createforaanvraag = "";
        this.status = "";
        this.statusWijziging = "";
        this.statusWijzigingDetails = "";
        this.statussen = "";
        this.statusWijzigingRedenen = "";
        this.statusWijzigingAarden = "";
        this.elektriciteit = "";
        this.elektriciteitWijziging = "";
        this.updateElektriciteitBeginEnEindDatum = "";
        this.standplaats = "";
        this.standplaatswijziging = "";
        this.getAbonnementenVanKlantOpMarkt = "";
        this.dieptekavels = "";
        this.dieptekavelsWijziging = "";
    };

    this.factuur = new function () {
        this.index = "";
        this.detail = "";
        this.beheer = "";
        this.grid = "";
        this.genereerFacturenVoorHuidigSemester = "";
        this.stuurFacturenNaarSAP = "";
    }
};