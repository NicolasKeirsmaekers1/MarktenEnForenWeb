import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import { IPagedResult, IQueryParameters } from "../core";
import { IGridOptions, SortOrder } from "../componenten/datagrid";
import { AbonnementDieptekavelsWijzigingService } from "../services/abonnement-dieptekavels-wijziging.service";
import { DatePipe } from '@angular/common';

@Component({
    selector: "mafo-dieptekavels-historiek",
    templateUrl: "./html/dieptekavels-historiek.component.html"
})

export class DieptekavelsHistoriekComponent {
    @Input() data: any;
    historiekDieptekavels: any;
    page: IQueryParameters;
    gridOptions: IGridOptions = {
        stripedRows: true,
        fields: [
            {
                field: "wijzigingdatum",
                title: "Wijzigingdatum"
            },
            {
                field: "status",
                title: "Vorige status"
            },
            {
                field: "aanvraagdatum",
                title: "Vorige aanvraagdatum"
            },
            {
                field: "begindatum",
                title: "Vorige begindatum"
            },
            {
                field: "einddatum",
                title: "Vorige einddatum"
            },
            {
                field: "diepte",
                title: "Vorige Diepte"
            },
            {
                field: "kavels",
                title: "Vorige Kavels"
            }
        ]
    };

    constructor(private abonnementDieptekavelsWijzigingService: AbonnementDieptekavelsWijzigingService, private datePipe: DatePipe) { }

    fetchData(page: IQueryParameters): void {
        if (!this.page) this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }
        this.abonnementDieptekavelsWijzigingService.getAll(this.data.id, this.page).subscribe(x => {
            this.historiekDieptekavels = {
                page: x.page,
                embedded: {
                    resourceList: x.embedded.resourceList.map((x) => {
                        return {
                            wijzigingdatum: `${this.datePipe.transform(x.createdOn, 'dd/MM/yyyy') || "-"}`,
                            status: `${x.dieptekavelStatusOmschrijving}`,
                            aanvraagdatum: `${this.datePipe.transform(x.dieptekavelsAanvraagDatum, 'dd/MM/yyyy') || "-"}`,
                            begindatum: `${this.datePipe.transform(x.dieptekavelsBeginDatum, 'dd/MM/yyyy') || "-"}`,
                            einddatum: `${this.datePipe.transform(x.dieptekavelsEindDatum, 'dd/MM/yyyy') || "-"}`,
                            diepte: `${x.dieptekavelsDiepte}`,
                            kavels: `${x.gebruikteDieptekavels}`
                        }
                    })
                },
                links: x.links
            };
        });
    }
}