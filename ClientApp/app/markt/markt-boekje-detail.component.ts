import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { KavelService, IKavelOverview, DagpasService, TariefService, IKavelIdentifierDto, KavelStatusEnum, IKavelOpmerking, IMarktboekjeKavelDetailDto } from "../services";
import { CodeType } from "../componenten/code-select";
import { ToastrService } from 'ngx-toastr';
import { Persoon, Adres, KlantService } from "../componenten/klant-core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import { CustomValidators, ValidatorService } from "../componenten/validators";
import { IQueryParameters, IPagedResult } from "../core";
import { DateTimeHelper } from "../shared/helper/datetimehelper";

interface IKlant {
    id?: number;
    juridischeEntiteit: string;
    elektriciteit: string
    firmanaam: string,
    ondernemingsnr: string;
    telefoon: string;
    gsm: string;
    email: string;
    fax: string;
    maatschappelijkeZetel: Adres;
    contactPersonen: Persoon[];
}
@Component({
    selector: "mafo-app",
    templateUrl: "./html/markt-boekje-detail.component.html",
    styleUrls: ["./html/markt-boekje-detail.component.scss"]
})
export class MarktBoekjeDetailComponent implements OnInit {
    pageTitle: string = "Marktboekje";
    marktId: number;
    detailDisplayed = false;
    tooltipDisplayed = false;
    legendDisplayed = false;
    longPress = false;
    kavels: IKavelIdentifierDto[];
    kavel: IMarktboekjeKavelDetailDto;
    codeType = CodeType;
    kavelOpmerking: IKavelOpmerking;
    opmerking: string;
    dagpasDisplayed = false;
    isDagpasModus = false;
    filter: any = {
        vrij: false,
        bezet: false,
        inoverdracht: false,
        gereserveerd: false,
        onbeschikbaar: false
    };
    selectedKavels: IKavelOverview[] = [];
    elektriciteitForm: FormGroup;
    klant: IKlant;
    data: IPagedResult<any>;
    takenKavels: IKavelOverview[];
    subscribedKavels: IKavelOverview[]
    dagpasOverviewDisplayed = false;
    kavelConfirmDisplayed = false;
    eenheidsprijsKavel: string = "";
    totaalprijsKavel: string = "";
    eenheidsprijsElektriciteit: string = "";
    totaalprijsElektriciteit: string = "";
    totaalprijs: string = "";
    totaalElektricteitNumber: number;
    totaalKavelNumber: number;
    kavelStatusEnum = KavelStatusEnum;
    currentDate = new Date();

    constructor(private kavelService: KavelService,
        private router: Router,
        private route: ActivatedRoute,
        protected toastr: ToastrService,
        private fb: FormBuilder,
        private validationService: ValidatorService,
        private dagpasService: DagpasService,
        private dateTimeHelper: DateTimeHelper,
        private tariefService: TariefService

    ) { }

    ngOnInit(): void {
        this.marktId = this.route.snapshot.params["marktId"];
        this.kavelService.getAllKavelsForMarktOverview(this.marktId).subscribe(
            x => {
                this.kavels = x;
            },
            x => {
                this.toastr.error("Kon de kavels niet inladen", "Kavels");
                if (x.ExtraInfo) {
                    for (let xtra in x.ExtraInfo) {
                        this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                    }
                }
            });
        this.selectedKavels = [];
        this.subscribedKavels = [];
        this.takenKavels = [];
        const adres = new Adres();
        this.klant = {
            id: 0,
            juridischeEntiteit: "",
            elektriciteit: "",
            firmanaam: "",
            ondernemingsnr: "",
            telefoon: "",
            gsm: "",
            email: "",
            fax: "",
            maatschappelijkeZetel: adres,
            contactPersonen: [new Persoon(true)]
        };
        this.buildForm();
        this.getTakenKavels();
    }

    downloadKavelsCsv(): void {
        this.kavelService.downloadKavels(this.marktId);
    }

    setKavelColor(kavel: IKavelIdentifierDto): any {

        if (!this.takenKavels) {
            this.getTakenKavels();
        }
        if (this.takenKavels.some(x => x.id == kavel.id)) {
            return {
                'bg-gray': true,
                "badge-border": kavel.mogelijkheidDieptekavel
            };
        } else {
            return {
                'bg-green': kavel.kavelStatus === KavelStatusEnum.Vrij,
                'bg-red': kavel.kavelStatus === KavelStatusEnum.Bezet || kavel.kavelStatus === KavelStatusEnum.InOverdracht,
                'bg-orange': kavel.kavelStatus === KavelStatusEnum.Gereserveerd,
                "badge-border": kavel.mogelijkheidDieptekavel,
                'bg-orange-striped': kavel.kavelStatus === KavelStatusEnum.BezetGereserveerd,
                'bg-green-striped': kavel.kavelStatus === KavelStatusEnum.BezetTeBedelen
            }
        }
    };

    updateKavelOpmerking($event): void {
        $event.preventDefault();
        $event.stopImmediatePropagation();

        this.kavelOpmerking = {
            kavelId: this.kavel.kavelId,
            marktId: this.marktId,
            opmerking: this.opmerking
        };

        if (this.kavel.opmerkingen == undefined) {
            this.kavel.opmerkingen = [];
        }
        this.kavel.opmerkingen.push(this.kavelOpmerking)
        this.kavel.marktId = this.marktId;

        this.kavelService.save(this.kavel).subscribe(x => {
            this.opmerking = "";
            this.toastr.success("opmerking succesvol opgeslagen.");
        },
            x => {
                this.toastr.error("opmerking kon niet worden bewaard.");
                this.kavel.opmerkingen.pop();
            });
    }
    showKavelDetail(kavelId: number): void {
        this.kavelService.getKavelDetail(this.marktId, kavelId)
            .subscribe(
                x => {
                    this.kavel = x
                    console.log(this.kavel)
                },
                error => {
                    this.toastr.error("Fout bij het ophalen van kavel details")
                },
                () => {
                    this.detailDisplayed = true
                });
    }
    mouseup(): void {
        this.longPress = false;
    }

    showLegend(): void {
        this.tooltipDisplayed = false;
        this.legendDisplayed = !this.legendDisplayed;
    }

    hideDetail(): void {
        this.detailDisplayed = false;
        this.kavelConfirmDisplayed = false;
    }

    hideTooltip(): void {
        this.tooltipDisplayed = false;
    }

    hideDagpas(): void {
        this.dagpasOverviewDisplayed = false;
        this.kavelConfirmDisplayed = false;
    }

    setFilter($event): void {
        $event.preventDefault();
        $event.stopImmediatePropagation();
        let displayAll = false;

        if (!this.filter.vrij
            && !this.filter.bezet
            && !this.filter.inoverdracht
            && !this.filter.gereserveerd
            && !this.filter.onbeschikbaar) displayAll = true;

        let kavelDisplay = true;
        for (let kavel of this.kavels) {
            switch (kavel.kavelStatus) {
                case KavelStatusEnum.Vrij:
                    kavelDisplay = this.filter.vrij;
                    break;
                case KavelStatusEnum.Gereserveerd:
                    kavelDisplay = this.filter.gereserveerd;
                    break;
                case KavelStatusEnum.Bezet:
                    kavelDisplay = this.filter.bezet;
                    break;
                case KavelStatusEnum.InOverdracht:
                    kavelDisplay = this.filter.inoverdracht;
                    break;
                default:
            }
            kavel["hidden"] = displayAll ? false : !kavelDisplay;
        }
    }

    createDagpas(): void {
        this.dagpasDisplayed = !this.dagpasDisplayed;
        this.isDagpasModus = true;
    }

    endDagpasCreation(): void {
        this.dagpasDisplayed = false;
        this.isDagpasModus = false;
        this.kavelConfirmDisplayed = false;
        this.dagpasOverviewDisplayed = false;

        this.selectedKavels.length = 0;
        const adres = new Adres();
        this.klant = {
            id: 0,
            juridischeEntiteit: "",
            elektriciteit: "",
            firmanaam: "",
            ondernemingsnr: "",
            telefoon: "",
            gsm: "",
            email: "",
            fax: "",
            maatschappelijkeZetel: adres,
            contactPersonen: [new Persoon(true)]
        };
    }

    confirmKavels() {
        if (!this.elektriciteitForm.valid || this.klant.id == 0 || this.selectedKavels.length == 0) {
            this.validationService.valideFormGroup(this.elektriciteitForm);
            this.toastr.warning("Sommige velden bevatten geen geldige waarden", "Ongeldig formulier");
        } else {
            this.dagpasOverviewDisplayed = true;
            this.klant.elektriciteit = this.elektriciteitForm.get("elektriciteitCode").value;

            if (this.selectedKavels.some(x => x.kavelStatus.code == "BEZET")) {
                this.kavelConfirmDisplayed = true;
            } else {
                this.kavelConfirmDisplayed = false;
            }
            this.getEenheidsprijsElektriciteit();
            this.getEenheidsprijsKavel();
            this.getTotaalprijsElektriciteit();
            this.getTotaalprijsKavels();
        }
    }

    contiueSave() {
        this.kavelConfirmDisplayed = false;
    }

    saveDagpas(): void {
        if (!this.elektriciteitForm.valid || this.klant.id == 0 || this.selectedKavels.length == 0) {
            this.validationService.valideFormGroup(this.elektriciteitForm);
            this.dagpasDisplayed = true;
            this.toastr.warning("Sommige velden bevatten geen geldige waarden", "Ongeldig formulier");
        } else {
            this.dagpasService.save(this.marktId, this.klant, this.selectedKavels).subscribe(x => {
                this.data = x;
                this.toastr.success("Dagpas bewaard", "In orde!");
                this.endDagpasCreation();
            }, x => {
                this.toastr.error("Kon de dagpas niet opslaan", "Dagpas");
                if (x.ExtraInfo) {
                    for (let xtra in x.ExtraInfo) {
                        this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                    }
                }
            });

        }
    }

    compareKavels(a, b): number {
        if (a.oudeNaam < b.oudeNaam)
            return -1;
        if (a.oudeNaam > b.oudeNaam)
            return 1;
        return 0;
    }

    klantCreated($event: any) {
        this.klant = $event;
    }

    private buildForm(): void {

        this.elektriciteitForm = this.fb.group({
            'elektriciteitCode': [this.klant.elektriciteit, [Validators.required]]
        });
    }

    private checkAvailable(kavelId): boolean {
        this.getTakenKavels();
        //TODO contains
        return !this.takenKavels.some(x => x.id == kavelId);
    }

    private getTakenKavels() {
        this.kavelService.getTakenKavels(this.marktId)
            .subscribe(x => this.takenKavels = x.map(kavel => {
                kavel["hidden"] = false;
                return kavel;
            }), x => {
                this.toastr.error("Kon de bezette kavels niet inladen", "dagpas");
                if (x.ExtraInfo) {
                    for (let xtra in x.ExtraInfo) {
                        this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                    }
                }
            });
    }

    private getEenheidsprijsKavel() {
        var dag = this.dateTimeHelper.getCurrentDate().getDay() == 6 ? "DAGPASZONDAG" : "DAGPASWEEKDAG";
        this.tariefService.getStandplaatsTariefByCode(dag).subscribe(x => this.eenheidsprijsKavel = "€" + x.eenheidsPrijs
            , x => {
                this.toastr.error("Kon de eenheidsprijs van  kavels niet inladen", "Tarief");
                if (x.ExtraInfo) {
                    for (let xtra in x.ExtraInfo) {
                        this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                    }
                }
            });
    }

    private getTotaalprijsKavels() {
        var dag = this.dateTimeHelper.getCurrentDate().getDay() == 6 ? "DAGPASZONDAG" : "DAGPASWEEKDAG";
        this.tariefService.getStandplaatsTariefByCode(dag).subscribe(x => { this.totaalprijsKavel = "€" + ((x.eenheidsPrijs * this.selectedKavels.length) + ((x.eenheidsPrijs * this.selectedKavels.length) / 100 * 21)), this.totaalKavelNumber = ((x.eenheidsPrijs * this.selectedKavels.length + (x.eenheidsPrijs * this.selectedKavels.length) / 100 * 21)) }
            , x => {
                this.toastr.error("Kon de totaalprijs van  kavels niet inladen", "Tarief");
                if (x.ExtraInfo) {
                    for (let xtra in x.ExtraInfo) {
                        this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                    }
                }
            });
    }

    private getEenheidsprijsElektriciteit() {
        this.tariefService.getElektriciteitTariefByCode("DAGPASGEWONEAANSLUITING").subscribe(x => this.eenheidsprijsElektriciteit = "€" + x.eenheidsPrijs
            , x => {
                this.toastr.error("Kon de eenheidsprijs van  elektriciteit niet inladen", "Tarief");
                if (x.ExtraInfo) {
                    for (let xtra in x.ExtraInfo) {
                        this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                    }
                }
            });
    }

    private getTotaalprijsElektriciteit() {
        this.tariefService.getElektriciteitTariefByCode("DAGPASGEWONEAANSLUITING").subscribe(x => { this.totaalprijsElektriciteit = "€" + (x.eenheidsPrijs * this.selectedKavels.length + (x.eenheidsPrijs * this.selectedKavels.length / 100 * 6)), this.totaalElektricteitNumber = (x.eenheidsPrijs * this.selectedKavels.length + (x.eenheidsPrijs * this.selectedKavels.length / 100 * 6)) }
            , x => {
                this.toastr.error("Kon de totaalprijs van  elektriciteit niet inladen", "Tarief");
                if (x.ExtraInfo) {
                    for (let xtra in x.ExtraInfo) {
                        this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                    }
                }
            });
    }

    toDisplayFormat(status: KavelStatusEnum): string {
        switch (status) {
            case KavelStatusEnum.BezetGereserveerd:
                return "Bezet gereserveerd";
            case KavelStatusEnum.BezetTeBedelen:
                return "Bezet te bedelen";
            case KavelStatusEnum.InOverdracht:
                return "In overdracht";
            default:
                return KavelStatusEnum[status];;
        };
    }
}