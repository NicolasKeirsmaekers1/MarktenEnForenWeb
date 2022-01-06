
import {map} from 'rxjs/operators';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CodeService, CodeType, ICode } from "../componenten/code-select/code.service";
import { ToastrService} from 'ngx-toastr';
import {LocatieService} from "../componenten/location-select/locatie.service";
import { TariefService, ProductService, IProduct } from "../services";
import { MarktService, IMarktIdentifier } from "../componenten/markt-select";

@Component({
    selector: "mafo-beheer-variabelen",
    templateUrl: "./html/beheer-variabelen-detail.component.html"
})

export class BeheerVariabelenDetailComponent implements OnInit {

    pageTitle: string;
    codeForm: FormGroup;
    code: string;
    markten: any;
    districten: any;
    errorMessage: any;
    marktId?: number;
    districtId?: number;

    constructor(private codeService: CodeService,
        private toastr: ToastrService,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private locationService: LocatieService,
        private productService: ProductService,
        private router: Router,
        private marktService: MarktService
    ) { }

    ngOnInit() {
        this.code = this.route.snapshot.params["code"];
        this.pageTitle = `Nieuw(e) ${this.code}:`;
        this.getMarkten();
        this.buildForm();
    }

    private onSubmit($event): void {
        $event.preventDefault();
        var payload: any = {};
        var isCode: boolean = false;
        payload.actief = true;
        payload.id = 0;
        switch (this.code) {
            case "district":
                payload.code = this.codeForm.get('code').value;
                payload.naam = this.codeForm.get('naam').value;
                this.commitCode(payload)
                break;
            case "dieptekavelsapmateriaalcode":
                payload.dieptekavelStatusId = this.codeForm.get('dieptekavelStatusId').value;
                payload.code = this.codeForm.get('code').value;
                payload.omschrijving = this.codeForm.get('omschrijving').value;
                this.commitCode(payload)
                break;
            case "elektriciteitsapmateriaalcode":
                payload.elektriciteitId = this.codeForm.get('elektriciteitId').value;
                payload.code = this.codeForm.get('code').value;
                payload.omschrijving = this.codeForm.get('omschrijving').value;
                this.commitCode(payload)
                break;
            case "standplaatssapmateriaalcode":
                payload.marktId = this.codeForm.get('marktId').value;
                payload.code = this.codeForm.get('code').value;
                payload.omschrijving = this.codeForm.get('omschrijving').value;
                this.commitCode(payload)
                break;
            case "juridischeentiteit":
                payload.afkorting = this.codeForm.get('afkorting').value;
                payload.code = this.codeForm.get('code').value;
                payload.omschrijving = this.codeForm.get('omschrijving').value;
                this.commitCode(payload)
                break;
            case "uitstalling":
                payload.code = this.codeForm.get('code').value;
                payload.omschrijving = this.codeForm.get('omschrijving').value;
                this.commitCode(payload)
                break;
            case "product":
                payload.geldigVan = this.codeForm.get('geldigVan').value;
                payload.geldigTot = this.codeForm.get('geldigTot').value;
                payload.omschrijving = this.codeForm.get('omschrijving').value;
                payload.actief = true;
                this.commitProduct(payload)
                break;
            case "locatie":
                payload.districtCode = this.codeForm.get('districtCode').value;
                payload.naam = this.codeForm.get('naam').value;
                this.commitLocatie(payload);
                break;
            case "standplaatsTarief":
                break;
            case "elektriciteitTarief":
                break;
        }
        this.router.navigate(['/beheer/variabelen/' + this.code]);
    }
    private commitCode(payload: any) {
        this.codeService.save(this.code, payload, false).pipe(map((response: Response) => {
            this.toastr.success("Code succesvol bewaard", "Code bewaren");

        })).subscribe(() => {
        }, (x) => {
            this.toastr.error("Code kon niet worden bewaard.", "Code bewaren");
        });
    }
    private commitLocatie(payload: any) {
        this.locationService.save(payload).pipe(map((response: Response) => {
            this.toastr.success("Locatie succesvol bewaard", "Locatie bewaren");

        })).subscribe(() => {
        }, (x) => {
            this.toastr.error("Locatie kon niet worden bewaard.", "Locatie bewaren");
        });
    }
    private commitProduct(payload: IProduct) {
        this.productService.save(payload).pipe(map((response: Response) => {
            this.toastr.success("Product succesvol bewaard", "Product bewaren");

        })).subscribe(() => {
        }, (x) => {
            this.toastr.error("Product kon niet worden bewaard.", "Product bewaren");
        });
    }

    private buildForm(): void {
        this.codeForm = this.fb.group({
            code: this.fb.control("", Validators.required),
            omschrijving: this.fb.control("", Validators.required)
        });

        switch (this.code) {
            case "locatie":
                this.codeForm.addControl("naam", this.fb.control(""));
                this.codeForm.addControl("districtCode", this.fb.control(""));
                break;
            case "district":
                this.codeForm.addControl("naam", this.fb.control(""));
                break;
            case "dieptekavelsapmateriaalcode":
                this.codeForm.addControl("dieptekavelStatusId", this.fb.control(""));
                break;
            case "elektriciteitsapmateriaalcode":
                this.codeForm.addControl("elektriciteitId", this.fb.control(""));
                break;
            case "standplaatssapmateriaalcode":
                this.codeForm.addControl("marktId", this.fb.control(""));
                break;
            case "juridischeentiteit":
                this.codeForm.addControl("afkorting", this.fb.control(""));
                break;
            case "uitstalling":
                break;
            case "product":
                this.codeForm.addControl("geldigVan", this.fb.control(""));
                this.codeForm.addControl("geldigTot", this.fb.control(""));
                break;
        }
    }
    private getMarkten(): void {
        this.marktService.getAll()
            .subscribe(markten => {
                this.markten = markten.embedded.resourceList.sort(this.compareMarkten);
                this.districten = this.markten.map(x => x.district.code);
            },
            error => this.errorMessage = <any>error);
    }
    private compareMarkten(a, b): number {
        if (a.naam.toLowerCase() < b.naam.toLowerCase())
            return -1;
        if (a.naam.toLowerCase() > b.naam.toLowerCase())
            return 1;
        return 0;
    }
    private filterDistricten = ($event) => {
        $event.data = $event.data.filter(x => this.districten.includes(x.code.toUpperCase()));
    }
}