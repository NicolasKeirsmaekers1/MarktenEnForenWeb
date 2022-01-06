import { Component, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { overlayConfigFactory } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { AuthService, Privilege } from '../auth';
import { IMarktPost, MarktService } from '../componenten/markt-select';
import { ValidatorService } from '../componenten/validators';
import { IQueryParameters } from '../core';
import { IKavelIdentifierDto, ImarktUploadDocument, KavelService, KavelStatusEnum } from '../services';
import { rangeValidator } from '../shared/quantity-selector.component';
import { KavelDetailModal, KavelDetailModalContext } from './kavel-detail.modal.component';

@Component({
    providers: [Modal],
    selector: "mafo-app",
    styles: [`
        .badge, .kavel-detail { cursor: pointer; text-decoration: none; }
    `],
    templateUrl: "html/markt-bewerken.component.html"
})
export class MarktBewerkenComponent {
    pageTitle: string = "Markt bewerken";
    markt: IMarktPost;
    today = new Date(Date.now());
    bewerkMarktForm: FormGroup;
    kavels: IKavelIdentifierDto[];
    update: Observable<boolean>;
    page: IQueryParameters = {
        page: 1,
        pageSize: Number.MAX_SAFE_INTEGER
    };

    errorMessage: any;

    constructor(private marktService: MarktService,
        private kavelService: KavelService,
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private modal: Modal,
        private viewContainerRef: ViewContainerRef,
        private auth: AuthService,
        private toastr: ToastrService,
        private validationService: ValidatorService,
        private router: Router) { }

    private document: ImarktUploadDocument = {
        bestand: null
    }

    getKavels(id: number): void {
        this.kavelService.getAllKavelsForMarktOverview(id)
            .subscribe(
                kavels => {
                    this.kavels = kavels;
                    this.kavels.sort(function (a, b) { return (a.oudeNaam > b.oudeNaam) ? 1 : ((b.oudeNaam > a.oudeNaam) ? -1 : 0); })
                },
                error => this.errorMessage = <any>error);
    }

    downloadKavelsCsv(): void {
        this.kavelService.downloadKavels(this.markt.id, false);
    }

    uploadKavelsCsv(event) {
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            let file: File = fileList[0];
            let fileContent: any;
            let reader = new FileReader();

            reader.onload = (e: any) => {
                let binaryString = e.target.result;
                fileContent = btoa(binaryString);
                this.document.bestand = fileContent;
            };

            reader.onloadend = (e: any) => {
                this.kavelService.uploadKavels(this.markt.id, this.document).subscribe(x => {
                    this.toastr.success("Kavels toegevoegd", "Kavels");
                    this.getKavels(this.markt.id);
                }, x => {
                    this.toastr.error("Kon niet alle kavels toevoegen", "Kavels");
                    if (x.ExtraInfo) {
                        for (let xtra in x.ExtraInfo) {
                            this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                        }
                    }
                }, () => this.router.navigate(["markt", this.markt.id]));
            }
            reader.readAsBinaryString(file);
        } else {
            this.toastr.error("Geen bestand", "Upload Kavels")
        }

    }

    updateMarkt() {
        if (!this.bewerkMarktForm.valid) {
            this.validationService.valideFormGroup(this.bewerkMarktForm);
            this.toastr.warning("Sommige velden bevatten geen geldige waarden", "Ongeldig formulier");
            return;
        }
        this.marktService.save(this.bewerkMarktForm.value).subscribe(markt => {
            this.toastr.success(this.markt.id > 0 ? "Markt succesvol geupdated" : "Markt succesvol aangemaakt");
            this.router.navigate(["markt", markt.id]);
            this.validationService.resetValidation(this.bewerkMarktForm);
        }, x => {
            this.toastr.error("Kon markt niet bewaren.", "Markt");
            if (x.ExtraInfo) {
                for (let xtra in x.ExtraInfo) {
                    this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                }
            }
        });
    }

    setKavelColor(kavel: any): any {
        return {
            'bg-green': kavel.kavelStatus === KavelStatusEnum.Vrij,
            'bg-red': kavel.kavelStatus === KavelStatusEnum.Bezet || kavel.kavelStatus === KavelStatusEnum.InOverdracht,
            'bg-orange': kavel.kavelStatus === KavelStatusEnum.Gereserveerd,
            'bg-orange-striped': kavel.kavelStatus === KavelStatusEnum.BezetGereserveerd,
            'bg-green-striped': kavel.kavelStatus === KavelStatusEnum.BezetTeBedelen
        }
    };

    ngOnInit(): void {
        this.markt = this.route.snapshot.data["markt"] ||
        {
            id: 0,
            aantalKavels: 0,
            naam: "",
            afkorting: "",
            startDatum: this.today,
            eindDatum: null,
            beginUur: "",
            eindUur: "",
            districtId: null,
            locatieId: null,
            dagVanDeWeekId: null,
            intervalId: null
        };
        this.buildForm();
        this.security();
        if (this.markt.id > 0) this.getKavels(this.markt.id);
    }

    private buildForm(): void {
        this.bewerkMarktForm = this.fb.group({
            'id': [this.markt.id],
            'naam': [this.markt.naam, [Validators.required, Validators.maxLength(50)]],
            'afkorting': [this.markt.afkorting, [Validators.required, Validators.maxLength(11)]],
            'aantalKavels': [this.markt.aantalKavels, [rangeValidator(1, 9999)]],
            'districtId': [this.markt.districtId, [Validators.required]],
            'locatieId': [{ value: this.markt.locatieId, disabled: !this.markt.districtId }, [Validators.required]],
            'startdatum': [this.markt.startDatum, [Validators.required]],
            'einddatum': [this.markt.eindDatum],
            'beginuur': [this.markt.beginUur, [Validators.required]],
            'einduur': [this.markt.eindUur, [Validators.required]],
            'dagVanDeWeekId': [this.markt.dagVanDeWeekId, [Validators.required]],
            'intervalId': [this.markt.intervalId, [Validators.required]]
        });
    }

    districtChanged(value) {
        const location = this.bewerkMarktForm.get("locatieId");
        if (value) location.enable();
        else location.disable();
        location.reset();
    }

    showKavelModal($event): void {
        $event.preventDefault();
        $event.stopPropagation();

        let link: Element = $event.target.closest("button");
        if (!link) return;

        let kavelId: number = Number(link.getAttribute("data-id"));
        if (isNaN(kavelId)) { kavelId = 0; }

        this.modal.open(KavelDetailModal, overlayConfigFactory(new KavelDetailModalContext(kavelId, this.markt.id, this.hideKlant(kavelId)), KavelDetailModalContext, {
            viewContainer: this.viewContainerRef
        })).then(dialogRef => dialogRef.result.then(result => {
            if (result) this.getKavels(this.markt.id);
        }));
    }

    hideKlant(kavelId: number): boolean {
        return kavelId === 0 ? true : this.kavels.find(x => x.id == kavelId).kavelStatus === KavelStatusEnum.Vrij;
    }

    security(): void {
        this.update = this.auth.hasPermission(Privilege.Markt.Update);
    }
}

interface FileReaderEventTarget extends EventTarget {
    result: string
}

interface FileReaderEvent extends Event {
    target: FileReaderEventTarget;
    getMessage(): string;
}