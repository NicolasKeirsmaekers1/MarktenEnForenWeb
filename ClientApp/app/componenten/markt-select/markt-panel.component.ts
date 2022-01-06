import { Component, forwardRef, Input, OnInit, OnChanges, SimpleChanges, EventEmitter, Output } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, FormArray, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { KavelService, AbonnementService, IKavelIdentifierDto } from "../../services";
import { MarktService, } from "./markt.service";
import { IMarktDetail } from "./markt";
﻿import { Observable } from "rxjs";
 import { ApplicationConstants } from "../../core";
import "rxjs/add/observable/of";
import { ToastrService } from "ngx-toastr";

﻿@Component({
    selector: "markt-panel",
    styles: [`.badge { cursor: pointer;}`,
        `.ajax-loading {    
                background-color: #ffffff;
                background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPSc2NHB4JyBoZWlnaHQ9JzY0cHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLXJpbmciPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgc3Ryb2tlLWRhc2hhcnJheT0iMTYzLjM2MjgxNzk4NjY2OTI2IDg3Ljk2NDU5NDMwMDUxNDIiIHN0cm9rZT0iI2QyNTM1MyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDsxODAgNTAgNTA7MzYwIDUwIDUwOyIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMHMiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L3N2Zz4=);
                background-size: 50px 50px;
                background-position: center;
                background-repeat: no-repeat;
            }`],
    templateUrl: "./html/markt-panel.component.html"
﻿})
export class MarktPanelComponent implements OnInit, OnChanges {
    private aanvraagSoort = ApplicationConstants.AanvraagSoort;

    @Input() formGroup: FormGroup;
    @Input() data = [];
    @Input() aanvraagId?: number;
    @Input() max: number = Number.MAX_VALUE;
    @Input() klantId?: number; 
    @Input() open: boolean = false;
    @Input() disabled: boolean = false;
    @Output() onChange = new EventEmitter();
    @Input() type: string = ApplicationConstants.AanvraagSoort.NieuwePlaatsCode;
    @Input() componentsDisabled: boolean = false;
    @Input() maxKavels: number = 8;
    marktenLoading: boolean = false;

    private markten: any[] = [];
    private abonnementen: IAbonnement[] = [];

    private get aanvraagMarkten(): FormArray {
        return this.formGroup.get("aanvraagMarkten") as FormArray;
    }

    constructor(private fb: FormBuilder, private marktService: MarktService, private kavelService: KavelService, private abonnementService: AbonnementService, protected toastr: ToastrService) {
    }

    ngOnInit(): void {
        this.formGroup.addControl("aanvraagMarkten", this.fb.array(this.data.map(x => this.createMarkt(x))));
        this.getMarkten();
        this.aanvraagMarkten.valueChanges.subscribe(x => {
            if (this.onChange.observers.length > 0) this.onChange.emit(this.aanvraagMarkten.getRawValue());
        });
        if (this.componentsDisabled) {
            this.formGroup.get("aanvraagMarkten").disable();
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes && changes.type) {
            this.getMarkten();
            this.markten = [];
        }
    } 

    reset(): void {
        for (let i = 0; i < this.aanvraagMarkten.controls.length; i++) {
            this.aanvraagMarkten.removeAt(i);
        }
    }

    private createMarkt(x?: any): FormGroup {
        var markt = x || {
            marktId: "",
            aantalKavels: 0,
            voorkeur: "",
            districtCode: "",
            aanvraagId: this.aanvraagId,
            abonnementId: null
        };
        return this.fb.group({
            "id": [markt.id],
            "districtCode": [markt.districtCode, [Validators.required]],
            "aanvraagId": [markt.aanvraagId],
            "marktId": [markt.marktId, [Validators.required]],
            "aantalKavels": [markt.aantalKavels],
            "voorkeur": [markt.voorkeur],
            "abonnementId": [markt.abonnementId]
        });
    }

    getMarkten() {
        this.marktenLoading = true;
        let filter = { page: 1, pageSize: Number.MAX_VALUE };
        if (this.type !== ApplicationConstants.AanvraagSoort.NieuwePlaatsCode)
            filter['klantId'] = this.klantId;
        if (this.type === ApplicationConstants.AanvraagSoort.PlaatsKwijtgeraaktCode)
            filter['ingetrokken'] = true;
        if (this.type === ApplicationConstants.AanvraagSoort.RuilingCode || this.type === ApplicationConstants.AanvraagSoort.UitbreidingCode)
            filter['alleenLopendOpgeschortGeschorst'] = true;

        this.marktService.getAll(filter).subscribe(markten => {
            this.markten = markten.embedded.resourceList as any[];
            this.marktenLoading = false;
        });
    }

    addMarkt(): void {
        var link = document.getElementsByName('markten');
        var panel = document.getElementById('markten');
        if (link && link[0] && !panel.classList.contains('in')) { link[0].click() }
        this.aanvraagMarkten.push(this.createMarkt());
    }

    removeMarkt(index: number): void {
        this.aanvraagMarkten.removeAt(index);
    }

    filterMarkten(district: string, marktId: any): any[] {
        if (this.markten.length <= 0) return [];
        let selectedMarkten: number[] = this.aanvraagMarkten.value.filter(markt => markt.marktId !== "").map(markt => {
            return markt.marktId;
        });
        return this.markten.filter((markt: any) => {
            return (markt.district.code === district && selectedMarkten.findIndex(value => value === markt.id) === -1) || markt.id === marktId;
        });
    }

    private filterDistricten = ($event) => {
        if (this.klantId) {
            const districten = this.markten.map(x => x.district.code);
            $event.data = $event.data.filter(x => districten.includes(x.code.toUpperCase()));
        }
    }

    districtChanged(index: number, districtCode: string): void {
        this.aanvraagMarkten.at(index).patchValue({ marktId: "", aantalKavels: 0, abonnementId: null });
    }

    marktChanged(index: number, selectedValue:any): void {
        //selected value looks like this -> "{districtCode}: {marktId}"
        var marktId = selectedValue.substring(selectedValue.lastIndexOf(':') + 1).trim();
        this.getAbonnementen(marktId);
        this.aanvraagMarkten.at(index).patchValue({ aantalKavels: 0, abonnementId: null });
    }

    getAbonnementen(marktId: number) {
             if(!marktId) {
                 this.abonnementen = [];
             }
             else{
                this.abonnementService.GetAllForKlantOpMarkt(this.klantId,marktId).subscribe(
                    (data) => {
                        this.abonnementen = data
                    },
                    (error) => {
                        this.toastr.error("Kon abonnementen niet ophalen");
                        this.toastr.error(error)
                    });
             }
    }

    selectAbonnement(abonnement: IAbonnement, index: number, $event): void {
        $event.preventDefault();
        $event.stopPropagation();

        const aanvraagMarkt = this.aanvraagMarkten.at(index);
        const abonnementCtrl: FormControl = aanvraagMarkt.get("abonnementId") as FormControl;

        abonnement.selected = abonnementCtrl.value !== abonnement.id;
        abonnementCtrl.setValue(abonnementCtrl.value !== abonnement.id ? abonnement.id : null);
        if (this.type == ApplicationConstants.AanvraagSoort.RuilingCode) {
            aanvraagMarkt.patchValue({ aantalKavels: abonnement.selected ? abonnement.kavels.length : 0 });
        }
        
        //this.markten.filter(x => x.id === value.marktId).map(x => x.abonnementen).forEach(abonnementen => {
        //    abonnementen.forEach(ls => {
        //        ls.forEach(x => {
        //            x.selected = abonnement.id === x.id;
        //        });
        //    });
        //});
    }
﻿}

﻿interface IAbonnement {
    id: number;
    selected: boolean;
    // kavels: IKavelDetail[];
    kavels: IKavelIdentifierDto[];
}