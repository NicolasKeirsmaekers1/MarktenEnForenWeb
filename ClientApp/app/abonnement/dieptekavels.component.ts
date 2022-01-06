import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApplicationConstants } from '../core';
import { AbonnementDieptekavelsWijzigingService } from '../services/abonnement-dieptekavels-wijziging.service';
import { Privilege, AuthService } from "../auth";
import { Observable } from 'rxjs';
import { ValidatorService } from "../componenten/validators";
import { ToastrService} from 'ngx-toastr';

@Component({
    providers: [AbonnementDieptekavelsWijzigingService],
    selector: "mafo-dieptekavels",
    templateUrl: "./html/dieptekavels.component.html"
})

export class DieptekavelsComponent implements OnInit {
    @Input() data: any;
    edit: boolean = false;
    dieptekavelForm: FormGroup;
    errorMessage: any;
    abonnementDiepteKavelWijziging: any;
    updateAbonnement: Observable<boolean>;

    ngOnInit() {
        this.buildForm();
        this.security();
    }

    constructor(
        private fb: FormBuilder,
        private abonnementDieptekavelsWijzigingService: AbonnementDieptekavelsWijzigingService,
        private toastr: ToastrService,
        private validationService: ValidatorService,
        private auth: AuthService
    ) { }

    setKavelColor(value): any {
        return {
            'bg-grey': value === ApplicationConstants.DieptekavelStatusNietBeschikbaarCode,
            'bg-green': value === ApplicationConstants.DieptekavelStatusNietInGebruikCode,
            'bg-red': value === ApplicationConstants.DieptekavelStatusInGebruikCode
        }
    };

    setKavelTitle(value): any {
        switch (value) {
            case ApplicationConstants.DieptekavelStatusNietInGebruikCode:
                return "Dieptekavel niet in gebruik";
            case ApplicationConstants.DieptekavelStatusInGebruikCode:
                return "Dieptekavel in gebruik";
            default:
            case ApplicationConstants.DieptekavelStatusNietBeschikbaarCode:
                return "Dieptekavel niet beschikbaar";
        }
    };

    editDiepteKavelStatus(kavel: any): any {
        if (this.edit) {
            if (kavel.diepteKavelStatusCode === ApplicationConstants.DieptekavelStatusNietInGebruikCode)
                kavel.diepteKavelStatusCode = ApplicationConstants.DieptekavelStatusInGebruikCode;
            else if (kavel.diepteKavelStatusCode === ApplicationConstants.DieptekavelStatusInGebruikCode)
                kavel.diepteKavelStatusCode = ApplicationConstants.DieptekavelStatusNietInGebruikCode;
        }
    }

    toggleEditDieptekavels(kavel: any): void {
            this.edit = !this.edit;
        
    }

    saveAbonnementDiepteKavelsWijziging(): void {
        if (!this.dieptekavelForm.valid) {
            this.validationService.valideFormGroup(this.dieptekavelForm);
            this.toastr.warning("Sommige velden bevatten geen geldige waarden", "Ongeldig formulier");
            return;
        }
        this.abonnementDieptekavelsWijzigingService.addAbonnementDiepteKavelWijziging(this.dieptekavelForm.value)
            .subscribe(abonnementDiepteKavelWijziging => {
                this.dieptekavelForm.patchValue(abonnementDiepteKavelWijziging);
                this.data.dieptekavelsAanvraagDatum = abonnementDiepteKavelWijziging.dieptekavelsAanvraagDatum;
                this.data.dieptekavelsDiepte = abonnementDiepteKavelWijziging.dieptekavelsDiepte;
                this.data.dieptekavelsBeginDatum = abonnementDiepteKavelWijziging.dieptekavelsBeginDatum;
                this.data.dieptekavelsEindDatum = abonnementDiepteKavelWijziging.dieptekavelsEindDatum;
                this.data.dieptekavelStatusCode = abonnementDiepteKavelWijziging.dieptekavelStatusCode;
                this.data.kavels = abonnementDiepteKavelWijziging.kavels;
                this.toggleEditDieptekavels(this.data.kavel);
                this.toastr.success("Dieptekavels bewaard.", "Dieptekavels");
            },
            x => {
                this.toastr.error("Kon Dieptekavels niet bewaren.", "Dieptekavels");
                if (x.ExtraInfo) {
                    for (let xtra in x.ExtraInfo) {
                        this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                    }
                }
            });
    }

    private buildForm(): void {
        //let dieptekavelsDiepte: string = this.data.dieptekavelsDiepte ? this.data.dieptekavelsDiepte : null;
        this.dieptekavelForm = this.fb.group({
            'abonnementId': [this.data.id],
            'dieptekavelsAanvraagDatum': [this.data.dieptekavelsAanvraagDatum, [Validators.required]],
            'dieptekavelsDiepte': [this.data.dieptekavelsDiepte, [Validators.required]],
            'dieptekavelsBeginDatum': [this.data.dieptekavelsBeginDatum, [Validators.required]],
            'dieptekavelsEindDatum': [this.data.dieptekavelsEindDatum],
            'kavels': [this.data.kavels],
            'diepteKavelStatusCode': [this.data.dieptekavelStatusCode]
        });
    }

    security(): void {
        this.updateAbonnement = this.auth.hasPermission(Privilege.Abonnement.Update);
    }
}