//import { Component, Input, OnInit, ViewChild, ChangeDetectionStrategy } from "@angular/core";
//import { FormGroup, FormBuilder, Validators } from "@angular/forms";
//import { AuthService, Privilege } from "../../auth";
//import { Observable } from 'rxjs/Observable';

//@Component({
//    selector: "mafo-status-geschorst",
//    templateUrl: "./html/status.geschorst.component.html"
//})
//export class StatusGeschorstComponent implements OnInit {
//    @Input() data: any;

//    statusForm: FormGroup;

//    edit: boolean = false;
//    status: string = "";
//    aard: string = "";
//    reden: string = "";

//    constructor(private fb: FormBuilder, private auth: AuthService) { }

//    ngOnInit(): void {
//        this.statusForm = this.fb.group({
//            status: this.fb.control("", [Validators.required]),
//            aard: this.fb.control(""),
//            reden: this.fb.control(""),
//            opmerkingen: this.fb.control("")
//        });
//        this.security();
//    }

//    private clearFormGroup() {
//        this.heeftAard = false;
//        this.heeftReden = true;
        
//        setTimeout(() => {
//            const excludes = ["status", "aard", "reden", "opmerkingen"];
//            for (let ctrl in this.statusForm.controls) {
//                if (excludes.includes(ctrl)) {
//                    if (ctrl === "status") continue;
//                    if (ctrl === "opmerkingen") this.statusForm.get(ctrl).setValue("");
//                    this.statusForm.get(ctrl).clearValidators();
//                } else this.statusForm.removeControl(ctrl);
//            }
//        }, 1);
//    }

//    private configureStatus(value: any): void {
//        this.status = "";
//        this.clearFormGroup();
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

//    editStatus(): void {
//        this.edit = !this.edit;
//    }

//    security(): void {
//        this.updateAbonnement = this.auth.hasPermission(Privilege.Abonnment.Update);
//    }
    
//}