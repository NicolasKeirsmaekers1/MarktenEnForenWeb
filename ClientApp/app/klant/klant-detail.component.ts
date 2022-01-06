import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService} from 'ngx-toastr';
import { rangeValidator } from "../shared/quantity-selector.component";
import { AbonnementService } from "../services";
import { CustomValidators, ValidatorService } from "../componenten/validators";
import { IGridOptions, SortOrder } from "../componenten/datagrid";
import { ApplicationConstants, IPagedResult, IQueryParameters } from "../core";
import { AuthService, Privilege } from "../auth";
import { Observable } from 'rxjs';
﻿import { IKlant, Persoon } from "../componenten/klant-core";

@Component({
    templateUrl: "./html/klant-detail.component.html"
})
export class KlantDetailComponent implements OnInit {
    selectType: boolean = false;
    klant: IKlant;
    constructor(private route: ActivatedRoute) {
        
    }
    ngOnInit(): void {
        this.selectType = this.route.snapshot.data['selectType'] || false;
        this.klant = this.route.snapshot.data['klant'] || {
            id: 0,
            isCommercieel: true,
            firmanaam: "",
            ondernemingsnr: "",
            telefoon: "",
            gsm: "",
            email: "",
            fax: "",
            contactPersonen: [new Persoon(true)]
        };
    }
}