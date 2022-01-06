//import { Component, Input, OnInit, ViewChild, ChangeDetectionStrategy } from "@angular/core";
//import { FormGroup, FormBuilder, Validators } from "@angular/forms";
//import { ICode, CodeSelectComponent } from "../componenten/code-select";
//import { AuthService, Privilege } from "../auth";
//import { Observable } from 'rxjs/Observable';

//interface ICodeData {
//    data: ICode[]
//}

//@Component({
//    selector: "mafo-status-type",
//    template: `
//        <div class="row" *ngIf="edit">
//            <div class="col-md-4">
//                <div class="form-group">
//                    <label class="control-label">Status</label>
//                    <code-select formControlName="status"
//                                (ngModelChange)="configureStatus($event)"
//                                type="AbonnementStatus"
//                                [onBeforeRender]="onBeforeRenderStatus">
//                    </code-select>
//                </div>
//            </div>
//            <div class="col-md-4" *ngIf="status && heeftAard">
//                <div class="form-group">
//                    <label class="control-label">Aard</label>
//                    <code-select #aardSelector
//                                formControlName="aard"
//                                (ngModelChange)="configureAard($event)"
//                                type="AbonnementStatusWijzigingAard"
//                                [onBeforeRender]="onBeforeRenderAard">
//                    </code-select>
//                </div>
//            </div>
//            <div class="col-md-4" *ngIf="status && heeftReden">
//                <div class="form-group">
//                    <label class="control-label">Reden</label>
//                    <code-select #redenSelector
//                                formControlName="reden"
//                                (ngModelChange)="configureReden($event)"
//                                type="AbonnementStatusWijzigingReden"
//                                [onBeforeRender]="onBeforeRenderRedenen">
//                    </code-select>
//                </div>
//            </div>
//        </div>
//    `
//})
//export class StatusComponent implements OnInit {
//    @ViewChild("aardSelector") aardSelector: CodeSelectComponent;
//    @ViewChild("redenSelector") redenSelector: CodeSelectComponent;

//    private _heeftReden: boolean = false;
//    get heeftReden() {
//        return this._heeftReden;
//    }
//    set heeftReden(value: boolean) {
//        let redenCtrl = this.statusForm.get("reden");
//        if (value === true) {
//            redenCtrl.setValidators([Validators.required]);
//        } else {
//            redenCtrl.clearValidators();
//        }
//        this._heeftReden = value;
//    }

//    private _heeftAard: boolean = false;
//    get heeftAard() {
//        return this._heeftAard;
//    }
//    set heeftAard(value: boolean) {
//        let aardCtrl = this.statusForm.get("aard");
//        if (value === true) {
//            aardCtrl.setValidators([Validators.required]);
//        } else {
//            aardCtrl.clearValidators();
//        }
//        this._heeftAard = value;
//    }

//    statusForm: FormGroup;

//    status: string = "";
//    aard: string = "";
//    reden: string = "";

//    constructor(private fb: FormBuilder, private auth: AuthService) { }

//    ngOnInit(): void {
//        this.statusForm = this.fb.group({
//            status: this.fb.control("", [Validators.required]),
//            aard: this.fb.control(""),
//            reden: this.fb.control("")
//        });
//    }

//    private configureStatus(value: any): void {
//        switch (value.toUpperCase()) {
//            case "GESCHORST":
//                this.statusForm.addControl("beginDatum", this.fb.control(new Date(), [Validators.required]));
//                this.statusForm.addControl("eindDatum", this.fb.control(new Date(), [Validators.required]));
//                this.heeftAard = false;
//                this.heeftReden = true;
//                break;
//            case "INGETROKKEN":
//                this.heeftReden = false;
//                this.heeftAard = true;
//                break;
//            case "INOVERDRACHT":
//                this.statusForm.addControl("ondernemingsnummerOvernemer", this.fb.control("", [Validators.required]));
//                this.statusForm.addControl("eindDatumHuidigAbonnenemt", this.fb.control(new Date(), [Validators.required]));
//                this.heeftReden = true;
//                this.heeftAard = false;
//                break;
//            case "OPGESCHORT":
//                this.statusForm.addControl("ontvangstAanvraagOpschortingDatum", this.fb.control("", [Validators.required]));
//                this.statusForm.addControl("beginDatum", this.fb.control(new Date(), [Validators.required]));
//                this.statusForm.addControl("eindDatum", this.fb.control(new Date(), [Validators.required]));
//                this.heeftReden = true;
//                this.heeftAard = false;
//                break;
//            case "OPGEZEGD":
//                this.heeftReden = false;
//                this.heeftAard = true;
//                break;
//        }
//        this.statusForm.patchValue({ opmerkingen: "" });
//        this.status = value;
//        if (this.redenSelector) {
//            this.statusForm.patchValue({ reden: "" });
//            this.redenSelector.reload();
//        }
//        if (this.aardSelector) {
//            this.statusForm.patchValue({ aard: "" });
//            this.aardSelector.reload();
//        }
//    }

//    private configureAard(value: any): void {
//        this.clearFormGroup();
//        switch (this.status.toUpperCase()) {
//            case "INGETROKKEN":
//                switch (value.toUpperCase()) {
//                    case "OPENBAREWERKEN":
//                    case "SANCTIE":
//                        this.heeftReden = false;
//                        this.statusForm.addControl("eindDatum", this.fb.control("", [Validators.required]));
//                        break;
//                    case "METOPZEG":
//                        this.heeftReden = false;
//                        this.statusForm.addControl("eindDatum", this.fb.control("", [Validators.required]));
//                        this.statusForm.addControl("briefBetekeningOpzegDatum", this.fb.control("", [Validators.required]));
//                        break;
//                    case "ONGELDIGABONNEMENT":
//                        this.heeftReden = true;
//                        this.statusForm.get("reden").setValidators([Validators.required]);
//                        this.statusForm.addControl("eindDatum", this.fb.control("", [Validators.required]));
//                        break;
//                }
//                break;
//            case "OPGEZEGD":
//                switch (value.toUpperCase()) {
//                    case "NORMAAL":
//                        this.statusForm.addControl("beginDatum", this.fb.control("", [Validators.required]));
//                        this.statusForm.addControl("eindDatum", this.fb.control("", [Validators.required]));
//                        break;
//                    case "DIRECT":
//                        this.heeftReden = true;
//                        this.statusForm.addControl("beginDatum", this.fb.control("", [Validators.required]));
//                        this.statusForm.addControl("eindDatum", this.fb.control("", [Validators.required]));
//                        break;
//                }
//                break;
//        }
//        this.aard = value;
//    }

//    private configureReden(value: any): void {
//        this.reden = value;
//    }

//    onBeforeRenderAard = (x: ICodeData) => {
//        const filter = ["NORMAAL", "DIRECT"];
//        if (this.status.toUpperCase() === "OPGEZEGD") {
//            x.data = x.data.filter(data => filter.includes(data.code.toUpperCase()));
//        } else {
//            x.data = x.data.filter(data => !filter.includes(data.code.toUpperCase()));
//        }
//    };

//    onBeforeRenderRedenen = (x: ICodeData) => {
//        let filter: string[];
//        switch (this.status.toUpperCase()) {
//            case "GESCHORST":
//                filter = ["EVENEMENT", "FOOR", "OPENBAREWERKEN"];
//                break;
//            case "INOVERDRACHT":
//                filter = ["STOPZETTINGZAAKOFLEURHANDEL", "OVERLIJDENZAAKVOERDER", "ECHTSCHEIDING"];
//                break;
//            case "OPGESCHORT":
//                filter = ["ZIEKTE", "OVERMACHT", "SEIZOENSGEBONDENACTIVITEIT", "ONGEVAL"];
//                break;
//            case "OPGEZEGD":
//                filter = ["ZIEKTE", "OVERMACHT", "OVERLIJDENZAAKVOERDER", "ONGEVAL"];
//                break;
//            case "INGETROKKEN":
//                filter = ["FAILLISSEMENT", "VRIJWILLIGESTOPZETTINGZAAK", "ONGELDIGELEURKAART"];
//                break;
//            default:
//                filter = [];
//                break;
//        }
//        x.data = x.data.filter(data => filter.includes(data.code.toUpperCase()));
//    };

//    onBeforeRenderStatus = (x: ICodeData) => {
//        const filter = ["GESCHORST", "INOVERDRACHT", "INGETROKKEN", "OPGESCHORT", "OPGEZEGD"];
//        x.data = x.data.filter(data => filter.includes(data.code.toUpperCase()));
//    };
//}