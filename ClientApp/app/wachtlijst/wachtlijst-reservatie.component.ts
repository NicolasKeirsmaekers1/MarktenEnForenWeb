import { Component } from "@angular/core";
import { MarktService } from "../componenten/markt-select";
import { IQueryParameters, IPagedResult } from "../core";
import { IGridOptions, SortOrder } from "../componenten/datagrid";
import { Router, ActivatedRoute } from "@angular/router";
import { IntakeService } from "../services/intake.service";

@Component({
    selector: 'mafo-app',
    templateUrl: './html/wachtlijst-reservatie.component.html'
})

export class WachtlijstReservatieComponent {
    page: IQueryParameters;
    data: IPagedResult<any>;
    errorMessage: any;
    search: string;
    gridOptions: IGridOptions = {
        stripedRows: true,
        fields: [
            {
                field: "datum",
                title: "Datum",
                sortable: true
            },
            {
                field: "ondernemingsNr",
                title: "OndernemingsNr",
                sortable: true
            },
            {
                field: "firmanaam",
                title: "Firmanaam",
                sortable: true
            },
            {
                field: "soort",
                title: "Soort",
                sortable: true
            },
            {
                field: "markten",
                title: "Markten"
            }
        ]
    };

    constructor
        (
        private intakeService: IntakeService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    searchReservaties($event): void {
        if (this.page) {
            this.page.page = 1;
            this.page["filter"] = $event.value;
            this.fetchData(this.page);
        }
    }

    rowClicked(row: any) {
        this.router.navigate(["wachtlijst", "reservatie", row.data.id]);
    }

    fetchData(page: IQueryParameters): void {
        if (!this.page) this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }
        this.page["aanvraagstatuscode"] = "GERESERVEERD";
        this.intakeService.getAll(this.page).subscribe(x => {
            this.data = x;
        });
    }

    marktenTooltip(markten: Array<string>): string {
        var first = markten.shift();
        var result = markten.join(", ");
        markten.unshift(first);
        return result;
    }
}