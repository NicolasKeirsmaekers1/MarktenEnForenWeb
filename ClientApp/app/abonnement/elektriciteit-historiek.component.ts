import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import { IPagedResult, IQueryParameters } from "../core";
import { IGridOptions, SortOrder } from "../componenten/datagrid";
import { AbonnementElektriciteitWijzigingService } from "../services/abonnement-elektriciteit-wijziging.service";
import { DatePipe } from '@angular/common';

@Component({
    selector: "mafo-elektriciteit-historiek",
    templateUrl: "./html/elektriciteit-historiek.component.html"
})

export class ElektriciteitHistoriekComponent {
    @Input() data: any;
    @Input() elekAboGewijzigdCode: any;
    historiekElektriciteit: any;
    page: IQueryParameters;
    gridOptions: IGridOptions = {
        stripedRows: true,
        fields: [
            {
                field: "wijzigingdatum",
                title: "Wijzigingdatum"
            },
            {
                field: "behoefte",
                title: "Vorige behoefte"
            },
            {
                field: "begindatum",
                title: "Vorige begindatum"
            },
            {
                field: "einddatum",
                title: "Vorige einddatum"
            }
        ]
    };

    constructor(private abonnementElektriciteitWijzigingService: AbonnementElektriciteitWijzigingService, private datePipe:DatePipe) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes && changes.elekAboGewijzigdCode) {
            this.fetchData(this.page);
        }
    } 

    fetchData(page: IQueryParameters): void {
        if (!this.page) this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }
        this.abonnementElektriciteitWijzigingService.getAll(this.data.id,this.page).subscribe(x => {
            this.historiekElektriciteit = {
                page: x.page,
                embedded: {
                    resourceList: x.embedded.resourceList.map((x) => {
                        return {
                            begindatum: `${this.datePipe.transform(x.begindatum,'dd/MM/yyyy')}`,
                            einddatum: `${this.datePipe.transform(x.einddatum,'dd/MM/yyyy')}`,
                            behoefte: `${x.elektriciteitOmschrijving}`.toUpperCase(),
                            wijzigingdatum: `${this.datePipe.transform(x.createdOn,'dd/MM/yyyy')}`
                        }
                    })
                },
                links: x.links
            };
        });
    }
}