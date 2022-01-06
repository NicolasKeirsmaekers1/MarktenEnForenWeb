import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import { DateTimeHelper } from '../shared/helper/datetimehelper';
import { AbonnementService } from '../services';
import { AbonnementElektriciteitWijzigingService } from '../services/abonnement-elektriciteit-wijziging.service';
import { Privilege, AuthService } from "../auth";
import { Observable } from 'rxjs';
import { ToastrService} from 'ngx-toastr';
import { Router, ActivatedRoute } from "@angular/router";
import { CustomValidators, ValidatorService } from "../componenten/validators"

@Component({
    providers: [DateTimeHelper, AbonnementService, AbonnementElektriciteitWijzigingService],
    selector: "mafo-elektriciteit",
    templateUrl: "./html/elektriciteit.component.html"
})

export class ElektriciteitComponent implements OnInit {
    @Input() data: any;
    @Output() elekAboGewijzigdCode: EventEmitter<string> = new EventEmitter<string>();

    edit: boolean = false;
    elektriciteitAbonnementen: any;
    errorMessage: any;
    elektriciteitForm: FormGroup;
    updateAbonnement: Observable<boolean>;
    disabled: boolean = false;
    mogelijkeStartData: Date[];
    mogelijkeEindData: Date[];
    code: string;
    constructor
        (
        private datetimeHelper: DateTimeHelper,
        private fb: FormBuilder,
        private abonnementService: AbonnementService,
        private abonnementElektriciteitWijzigingService: AbonnementElektriciteitWijzigingService,
        private auth: AuthService,
        private toastr: ToastrService,
        private router: Router
        ) { }

    editElektriciteit(): void {
        this.edit = !this.edit;
        if (this.edit) {
            this.elektriciteitForm.get('elektriciteitCode').reset();
            this.elektriciteitForm.get('begindatum').clearValidators();
            this.elektriciteitForm.get('begindatum').setValue("");
            this.elektriciteitForm.get('einddatum').clearValidators();
            this.elektriciteitForm.get('einddatum').setValue("");
        }
        
    }

    saveAbonnementElektriciteitWijziging(): void {
        if (this.validate()) {
            this.abonnementElektriciteitWijzigingService.addAbonnementElektriciteitWijziging(this.elektriciteitForm.value)
                .subscribe(x => {
                    this.data.elektriciteit.code = this.code;
                    this.elekAboGewijzigdCode.emit(this.code);
                    if (isNaN(this.elektriciteitForm.get('einddatum').value)) {  //if Invalid Date
                        this.data.elektriciteitEindDatum = undefined;
                    } else {
                        this.data.elektriciteitEindDatum = this.elektriciteitForm.get('einddatum').value
                    }
                    
                    this.data.elektriciteitBeginDatum = this.elektriciteitForm.get('begindatum').value
                    this.toastr.success("De elektriciteitsbehoefte is succesvol aangepast.");
                    this.editElektriciteit()
                    this.router.navigate(["abonnement", this.data.id]);
                },
                x => {
                    if (x.ExtraInfo) {
                        for (let xtra in x.ExtraInfo) {
                            this.toastr.error(xtra, x.ExtraInfo[xtra].join(","));
                        }
                    } else {
                        this.toastr.error("De elektriciteitsbehoefte is niet aangepast.");
                    }
                });
        }
    }

    validate(): boolean {
        var valid: boolean = true;
        if (this.data.elektriciteit.code == this.elektriciteitForm.get('elektriciteitCode').value) {
            this.toastr.info("De elektriciteitsbehoefte is ongewijzigd.");
            valid = false;
        }
        if (new Date(this.elektriciteitForm.get('einddatum').value) < new Date(this.elektriciteitForm.get('begindatum').value)) {
            this.toastr.warning("Einddatum mag niet voor de begindatum liggen.");
            valid = false;
        }
        if (new Date(this.elektriciteitForm.get('begindatum').value) < this.datetimeHelper.getFirstDayOfQuarter(new Date()).addQuarter()) {
            this.toastr.warning("Begindatum mag niet voor de instapdatum van het volgende kwartaal liggen.");
            valid = false;  
        }

        //Controleer of dit één van de mogelijke begindatums is
        if (typeof (this.mogelijkeStartData.find(x => x.getTime() == new Date(this.elektriciteitForm.get('begindatum').value).getTime())) === 'undefined') {
            this.toastr.warning("Begindatum valt niet op het begin van een kwartaal.");
            valid = false;
        }
        //Als de einddatum een geldige datum bevat, controleer of dit één van de mogelijke einddatums is.
        if ((!isNaN(this.elektriciteitForm.get('einddatum').value)) && (typeof (this.mogelijkeEindData.find(x => x.getTime() == new Date(this.elektriciteitForm.get('einddatum').value).getTime())) === 'undefined')) {
            this.toastr.warning("Einddatum valt niet op het einde van een kwartaal.");
            valid = false;
        }

        return valid;
    }

    ngOnInit(): void {

        this.mogelijkeStartData = new Array<Date>();
        new Date().startDates(5).forEach(function (item) {
            this.mogelijkeStartData.push(item);
        }, this);
        this.mogelijkeEindData = new Array<Date>();
        new Date().endDates(5).forEach(function (item) {
            this.mogelijkeEindData.push(item);
        }, this);

        this.buildForm();
        this.security();
    }

    private buildForm(): void {
        this.elektriciteitForm = this.fb.group({
            'begindatum': [this.data.elektriciteitBeginDatum, [Validators.required]],
            'einddatum': [this.data.elektriciteitEindDatum, []],
            'elektriciteitCode': [this.data.elektriciteit.code],
            'abonnementId': [this.data.id]
        }, { validator: CustomValidators.dateAfter("einddatum", "begindatum") });

    }

    changeElektriciteitsBehoefte($event) {
        if ($event != null && $event != "") {
            this.code = $event;
        }
        this.elektriciteitForm.get("begindatum").enable();
        this.elektriciteitForm.get("einddatum").enable();

        if (this.code == 'WINTERABONNEMENTGEWONEAANSLUITING') {
            this.elektriciteitForm.get('einddatum').setValidators(Validators.required);
            this.elektriciteitForm.get('begindatum').setValue(this.datetimeHelper.nextWinterStartDate());
            this.elektriciteitForm.get('einddatum').setValue(this.datetimeHelper.nextWinterEndDate());
        }
        else {
            this.elektriciteitForm.get('begindatum').setValue(this.datetimeHelper.getFirstDayOfQuarter(new Date()).addQuarter());
            this.elektriciteitForm.get('einddatum').clearValidators();
            this.elektriciteitForm.get('einddatum').setValue("clear");


            if (this.code == 'GEENBEHOEFTE') {
                this.elektriciteitForm.get('begindatum').clearValidators();
                this.elektriciteitForm.get('begindatum').setValue(this.datetimeHelper.getFirstDayOfQuarter(new Date()).addQuarter());;
                this.elektriciteitForm.get('einddatum').setValue("clear");
                this.elektriciteitForm.get("einddatum").disable();
            }
        }
    }

    security(): void {
        this.updateAbonnement = this.auth.hasPermission(Privilege.Abonnement.Update);
    }
}