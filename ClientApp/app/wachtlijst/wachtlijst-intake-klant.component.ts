import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { KlantService } from "../componenten/klant-core";
import { Observable } from "rxjs";
import { IQueryParameters, IPagedResult } from "../core";
import { IGridOptions, SortOrder } from "../componenten/datagrid";

@Component({
    templateUrl: './html/wachtlijst-intake-klant.component.html'
})

export class WachtlijstIntakeKlantComponent {
    pageTitle: string = "Nieuwe intake";
    private commercieel: boolean = true;
    data: IPagedResult<any>;
    search: string;
    page: IQueryParameters;
    gridOptions: IGridOptions = {
        stripedRows: true,
        fields: [{
            field: "firmanaam",
            title: "Firmanaam",
            sortable: true,
            sort: SortOrder.Ascending,
            width: "25%"
        }, {
            field: "ondernemingsnr",
            title: "Ondernemingsnummer",
            width: "25%"

        }, {
            field: "contactPersoon",
            title: "Contactpersoon",
            width: "25%"

        }, {
            field: "telefoon",
            title: "Telefoon",
            width: "25%"
        }]
    };

    constructor
        (
        private klantService: KlantService,
        private router: Router,
        private route: ActivatedRoute
        ) { }

    fetchData(page: IQueryParameters): void {
        if (!this.page) this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }
        this.klantService.getAll(this.commercieel, false, this.page).subscribe(x => this.data = x);
    }

    searchKlanten($event): void {
        if (this.page) {
            this.page.page = 1;
            this.page["filter"] = $event.value;
            this.fetchData(this.page);
        }
    }

    isCommercieel(value) {
        if (value == 'TRUE')
            this.commercieel = true;
        else
            this.commercieel = false;

        this.fetchData(this.page);
    }

    nieuweKlant() {
        this.router.navigate(["klant","nieuw"]);
    }

    rowClicked(row: any) {
        this.router.navigate(["wachtlijst", "intake", "nieuw", row.data.id]);
    }
}