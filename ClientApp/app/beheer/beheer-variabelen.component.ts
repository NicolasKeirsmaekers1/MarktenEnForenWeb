import 'rxjs/add/observable/of';

import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { ToastrService } from 'ngx-toastr';

import { CodeService, ICode } from '../componenten/code-select/code.service';
import { IGridOptions } from '../componenten/datagrid';
import { LocatieService } from '../componenten/location-select/locatie.service';
import { ProductService, TariefService } from '../services';

@Component({
    selector: "mafo-beheer-variabelen",
    templateUrl: "./html/beheer-variabelen.component.html",
    styles: ['.disabled { pointer-events: none; cursor: default; }']
})

export class BeheerVariabelenComponent {

    pageTitle: string = "Beheer variabelen";

    data: any[];
    code: string = "";
    edit: boolean;
    boolToggleActive: boolean = false;

    codesForm: FormGroup;

    gridOptions: IGridOptions = {
        stripedRows: true,
        fields: [{
            field: "code",
            title: "Code",
        }, {
            field: "omschrijving",
            title: "Omschrijving",
        }, { field: "actief", title: "Actief" }],
        showPaging: false,
        pageSizes: [
            Number.MAX_VALUE
        ]
    };



    constructor(private codeService: CodeService, private toastr: ToastrService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private modal: Modal, private locatieService: LocatieService, private tariefService: TariefService, private productService: ProductService) { }

    ngOnInit() {
        this.buildForm();
        this.route.params.subscribe((params) => {
            this.code = params["code"];
            this.configureGrid();
        });
    }

    configureGrid() {
        let fields = [{ field: "code", title: "Code" }, { field: "omschrijving", title: "Omschrijving" }];
        switch (this.code) {
            case "locatie":
                fields = [{ field: "naam", title: "Naam" },
                { field: "districtCode", title: "District code" }];
                break;
            case "product":
                fields = [{ field: "omschrijving", title: "Omschrijving" },
                { field: "geldigVan", title: "Geldig van" },
                { field: "geldigTot", title: "Geldig tot" }];
                break;
            case "standplaatsTarief":
                fields = [{ field: "id", title: "Id" },
                { field: "omschrijving", title: "Dag van de week" },
                { field: "eenheidsPrijs", title: "Eenheidsprijs" }];
                break;
            case "elektriciteitTarief":
                fields = [
                    { field: "elektriciteitId", title: "Id" },
                    { field: "eenheidsPrijs", title: "Eenheidsprijs" },
                    { field: "omschrijving", title: "Omschrijving" }];
                break;
            case "dieptekavelsapmateriaalcode":
                fields.push({
                    field: "dieptekavelStatusId",
                    title: "Dieptekavelstatus"
                });
                break;
            case "elektriciteitsapmateriaalcode":
                fields.push({
                    field: "elektriciteitId",
                    title: "Elektriciteit"
                });
                break;
            case "standplaatssapmateriaalcode":
                fields.push({
                    field: "marktId",
                    title: "Markt"
                });
                break;
            case "juridischeentiteit":
                fields.push({
                    field: "afkorting",
                    title: "Afkorting"
                });
                break;
            case "district":
            case "uitstalling":
                break;
        }
        this.gridOptions.fields = fields;
        this.gridOptions = Object.assign({}, this.gridOptions);
        this.fetchData();
    }

    fetchData(): void {

        if (!this.code) {
            this.data = [];
            return;
        };

        this.resetCodesForm();

        switch (this.code) {
            case "locatie":
                this.locatieService.getLocaties(true)
                    .subscribe(x => {
                        this.data = x;
                        this.data.forEach(y => {
                            let group = this.fb.group({
                                id: this.fb.control(y.id),
                                districtCode: this.fb.control(y.districtCode),
                                naam: this.fb.control(y.naam)
                            });
                            group.addControl("naam", this.fb.control((<any>y).naam));
                            (<FormArray>this.codesForm.get("codes")).push(group);
                        });
                    }, () => this.toastr.error("Kon locaties niet inladen"));
                break;
            case "product":
                let filter = { page: 1, pageSize: Number.MAX_VALUE, sort: "omschrijving"};
                this.productService.getProducten(filter).subscribe(x => {
                    this.data = x;
                    this.data.forEach(y => {
                        y.geldigVan = y.geldigVan.substring(0, 10);
                        y.geldigTot = y.geldigTot.substring(0, 10);
                        let group = this.fb.group({
                            id: this.fb.control(y.id),
                            geldigVan: this.fb.control(y.geldigVan),
                            geldigTot: this.fb.control(y.geldigTot),
                            omschrijving: this.fb.control(y.omschrijving),
                            actief: this.fb.control(y.actief)
                        });
                        group.addControl("geldigVan", this.fb.control((<any>y).geldigVan));
                        group.addControl("geldigTot", this.fb.control((<any>y).geldigTot));
                        (<FormArray>this.codesForm.get("codes")).push(group);
                    });
                }, () => this.toastr.error("Kon producten niet inladen"));
                break;
            case "standplaatsTarief":
                this.tariefService.getStandplaatsTarieven().subscribe(x => {
                    this.data = x;
                    this.data.forEach(y => {
                        let group = this.fb.group({
                            id: this.fb.control(y.id),
                            dagVanDeWeekId: this.fb.control(y.dagVanDeWeekId),
                            code: this.fb.control(y.eenheidsPrijs),
                            omschrijving: this.fb.control(y.omschrijving)
                        });
                        group.addControl("eenheidsPrijs", this.fb.control(y.eenheidsPrijs));
                        group.addControl("dagVanDeWeekId", this.fb.control(y.dagVanDeWeekId));
                        group.addControl("omschrijving", this.fb.control(y.omschrijving));
                        (<FormArray>this.codesForm.get("codes")).push(group);
                    });
                }, () => this.toastr.error("Kon standplaats tarieven niet inladen"));
                break;
            case "elektriciteitTarief":
                this.tariefService.getElektriciteitTarieven().subscribe(x => {
                    this.data = x;
                    this.data.forEach(y => {
                        let group = this.fb.group({
                            id: this.fb.control(y.id),
                            elektriciteitId: this.fb.control(y.elektriciteitsId),
                            code: this.fb.control(y.eenheidsPrijs),
                            omschrijving: this.fb.control(y.omschrijving),
                            actief: this.fb.control(y.isActief),
                            eenheidsPrijs: this.fb.control(y.eenheidsPrijs)
                        });
                        (<FormArray>this.codesForm.get("codes")).push(group);

                    });
                }, () => this.toastr.error("Kon elektriciteit tarieven niet inladen"));
                break;
            default:
                this.codeService.getCodes(this.code, this.boolToggleActive, true)
                    .subscribe(x => {
                        this.data = x;
                        this.fillCodesForm(x);
                    },
                        () => this.toastr.error("Kon de codes niet inladen"));
                break;
        }
    }

    private resetCodesForm(): void {
        while ((<FormArray>this.codesForm.get("codes")).length) {
            (<FormArray>this.codesForm.get("codes")).removeAt(0);
        }
    }

    private fillCodesForm(data: ICode[]): void {

        while ((<FormArray>this.codesForm.get("codes")).length) {
            (<FormArray>this.codesForm.get("codes")).removeAt(0);
        }

        data.forEach(code => {

            let group = this.fb.group({
                id: this.fb.control(code.id),
                code: this.fb.control(code.code),
                omschrijving: this.fb.control(code.omschrijving),
                actief: this.fb.control(code.actief)
            });

            switch (this.code) {
                case "district":
                    break;
                case "dieptekavelsapmateriaalcode":
                    group.addControl("dieptekavelStatusId", this.fb.control((<any>code).dieptekavelStatusId));
                    break;
                case "elektriciteitsapmateriaalcode":
                    group.addControl("elektriciteitId", this.fb.control((<any>code).elektriciteitId));
                    break;
                case "standplaatssapmateriaalcode":
                    group.addControl("marktId", this.fb.control((<any>code).marktId));
                    break;
                case "juridischeentiteit":
                    group.addControl("afkorting", this.fb.control((<any>code).afkorting));
                    break;
                case "uitstalling":
                    break;
            }

            (<FormArray>this.codesForm.get("codes")).push(group);
        });
    }

    private toggleEdit(): void {
        this.edit = !this.edit;
    }

    private buildForm(): void {
        this.codesForm = this.fb.group({
            codes: this.fb.array([])
        });
    }

    private resetForm(): void {
        this.fetchData();
    }
    private submitForm(): void {
        switch (this.code) {
            case "locatie":
                var payload = [];
                (<FormArray>this.codesForm.get("codes")).controls.forEach(x => {
                    let group: any = {
                        id: parseInt(x.get("id").value),
                        districtCode: x.get("districtCode").value,
                        naam: x.get("naam").value
                    };
                    payload.push(group);
                });
                this.locatieService.save(payload).subscribe(() => {
                    this.toastr.success("Locaties succesvol opgeslagen", "Locaties");
                    this.resetForm();
                }, (x) => {
                    if (x.ExtraInfo) {
                        for (let xtra in x.ExtraInfo) {
                            this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                        }
                    }
                });

                break;
            case "product":
                var payload = [];
                (<FormArray>this.codesForm.get("codes")).controls.forEach(x => {
                    let group: any = {
                        id: parseInt(x.get("id").value),
                        omschrijving: x.get("omschrijving").value,
                        geldigVan: new Date(x.get("geldigVan").value),
                        geldigTot: new Date(x.get("geldigTot").value)
                    };
                    payload.push(group);
                });
                this.productService.updateWithArray(payload).subscribe(() => {
                    this.toastr.success("Producten succesvol opgeslagen", "Producten");
                    this.resetForm();
                }, (x) => {
                    if (x && x.ExtraInfo) {
                        for (let xtra in x.ExtraInfo) {
                            this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                        }
                    }
                });
                break;
            case "standplaatsTarief":
                var payload = [];
                (<FormArray>this.codesForm.get("codes")).controls.forEach(x => {
                    let group: any = {
                        id: parseInt(x.get("id").value),
                        omschrijving: x.get("omschrijving").value,
                        dagVanDeWeekId: parseInt(x.get("dagVanDeWeekId").value),
                        eenheidsprijs: parseFloat(x.get("eenheidsPrijs").value)
                    };
                    payload.push(group);
                });
                this.tariefService.saveStandplaats(payload).subscribe(() => {
                    this.toastr.success("Standplaats succesvol opgeslagen", "Standplaats");
                    this.resetForm();
                }, (x) => {
                    if (x.ExtraInfo) {
                        for (let xtra in x.ExtraInfo) {
                            this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                        }
                    }
                });
                break;
            case "elektriciteitTarief":
                var payload = [];
                (<FormArray>this.codesForm.get("codes")).controls.forEach(x => {
                    let group: any = {
                        id: parseInt(x.get("id").value),
                        elektriciteitId: parseInt(x.get("elektriciteitId").value),
                        eenheidsprijs: parseFloat(x.get("eenheidsPrijs").value),
                        omschrijving: x.get("omschrijving").value
                    };
                    payload.push(group);
                });
                this.tariefService.saveElektriciteit(payload).subscribe(() => {
                    this.toastr.success("Elektriciteit succesvol opgeslagen", "Elektriciteit");
                    this.resetForm();
                }, (x) => {
                    if (x.ExtraInfo) {
                        for (let xtra in x.ExtraInfo) {
                            this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                        }
                    }
                });
                break;
            default:
                var payload = [];
                (<FormArray>this.codesForm.get("codes")).controls.forEach(x => {
                    let group: any = {
                        id: parseInt(x.get("id").value),
                        code: x.get("code").value,
                        omschrijving: x.get("omschrijving").value,
                        actief: Boolean(x.get("actief").value)
                    };
                    payload.push(group);
                });
                this.codeService.save(this.code, payload, true).subscribe(() => {
                    this.toastr.success(this.code + " succesvol opgeslagen", this.code);
                    this.resetForm();
                }, (x) => {
                    if (x.ExtraInfo) {
                        for (let xtra in x.ExtraInfo) {
                            this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                        }
                    }
                });
                break;
        }
    }

    toggleActive(value: boolean): void {
        this.boolToggleActive = value;
    }

    showDeleteModal($event): void {
        this.modal.confirm()
            .title('Bevestig verwijderen')
            .body('Weet u zeker dat u deze code wilt verwijderen?')
            .okBtn('Verwijderen')
            .open()
            .catch() // catch error not related to the result (modal open...)
            .then(dialog => dialog.result) // dialog has more properties,lets just return the promise for a result. 
            .then(x => this.delete($event.id))// if we're here, ok was clicked.
            .catch(x => { }); // if we're here, cancel was clicked.
    }

    delete(itemId: number): void {
        switch (this.code) {
            case "locatie":
                this.locatieService.delete(itemId).subscribe(() => {
                    this.toastr.success("Locatie succesvol verwijderd", "Locatie");
                    this.fetchData();
                }, (x) => {
                    this.toastr.error("Locatie kon niet verwijderd worden", "Locatie");

                    if (x.ExtraInfo) {
                        for (let xtra in x.ExtraInfo) {
                            this.toastr.warning(x.ExtraInfo[xtra].join(","), "Locatie");
                        }
                    }
                });
                break;
            case "product":
                this.productService.delete(itemId).subscribe(() => {
                    this.toastr.success("Product succesvol verwijderd", "Product");
                    this.fetchData();
                }, (x) => {
                    this.toastr.warning("Product kon niet verwijderd worden", "Product");

                    if (x.ExtraInfo) {
                        for (let xtra in x.ExtraInfo) {
                            this.toastr.warning(x.ExtraInfo[xtra].join(","), "Product  kon niet verwijderd worden");
                        }
                    }
                });
                break;
            default:
                this.codeService.delete(this.code, itemId)
                    .subscribe(() => {
                        this.toastr.success("Code succesvol verwijderd", this.code);
                        this.fetchData();
                    }, (x) => {
                        this.toastr.warning(this.code + " kon niet verwijderd worden", this.code);

                        if (x.ExtraInfo) {
                            for (let xtra in x.ExtraInfo) {
                                this.toastr.warning(x.ExtraInfo[xtra].join(","), this.code + " kon niet verwijderd worden");
                            }
                        }
                    });
                break;
        }
    }

    private onCodeChange(code: string): void {
        this.router.navigate(["beheer/variabelen", code]);
    }
    private getValue(id: any): string {
        switch (this.code) {
            case 'dieptekavelsapmateriaalcode':
                if (id == 1) {
                    return 'Niet Beschikbaar';
                } else if (id == 2) {
                    return 'Niet In Gebruik';
                } else if (id == 3) {
                    return 'In Gebruik';
                } else {
                    return id;
                }
            default:
                return id;
        }
    }
}