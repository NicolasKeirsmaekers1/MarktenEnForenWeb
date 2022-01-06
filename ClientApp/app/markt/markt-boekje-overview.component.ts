import { Component, OnInit } from "@angular/core";
import { MarktService } from '../componenten/markt-select';
import { IPagedResult, IQueryParameters } from "../core";
import { IGridOptions, SortOrder } from "../componenten/datagrid";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "mafo-app",
    templateUrl: './html/markt-boekje-overview.component.html'
})
export class MarktBoekjeOverviewComponent {
    pageTitle: string = "Marktboekje";
    page: IQueryParameters;
    data: IPagedResult<any>;
    errorMessage: any;
    search: string;
    gridOptions: IGridOptions = {
        stripedRows: true,
        fields: [
            {
                field: "naam",
                title: "Naam",
                sortable: true,
                sort: SortOrder.Ascending,
                width: "50%"
            },
            {
                field: "afkorting",
                title: "Afkorting",
                sortable: true,
                width: "50%"
            }
        ]
    };

    constructor
        (
        private marktService: MarktService,
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
        this.marktService.getAll(this.page).subscribe(x => this.data = x);
    }

    rowClicked(row: any) {
        this.router.navigate([row.data.id], { relativeTo: this.route });
    }

    searchMarkten($event): void {
        if (this.page) {
            this.page.page = 1;
            this.page["query"] = $event.value;
            this.fetchData(this.page);
        }
    }
    
}