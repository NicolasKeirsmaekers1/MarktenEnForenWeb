import { Component } from "@angular/core"
import { AbonnementService } from '../services';
import { MarktService, IMarktIdentifier } from "../componenten/markt-select";
import { IPagedResult, IQueryParameters } from "../core";
import { IGridOptions, SortOrder } from "../componenten/datagrid";
import { NullSafePipe } from '../core/null-safe.pipe';
import { Router, ActivatedRoute } from "@angular/router";
import { DatePipe } from '@angular/common';

@Component({
    templateUrl: './html/abonnement-huidig.component.html',
    styles: [`.ajax-loading {    
                background-color: #ffffff;
                background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPSc2NHB4JyBoZWlnaHQ9JzY0cHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLXJpbmciPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgc3Ryb2tlLWRhc2hhcnJheT0iMTYzLjM2MjgxNzk4NjY2OTI2IDg3Ljk2NDU5NDMwMDUxNDIiIHN0cm9rZT0iI2QyNTM1MyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDsxODAgNTAgNTA7MzYwIDUwIDUwOyIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMHMiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L3N2Zz4=);
                background-size: 25px 25px;
                background-position: right 25px center;
                background-repeat: no-repeat;
            }`]
})
export class HuidigAbonnementComponent {
    private isLoading = true;
    pageTitle: string = "Abonnementen";
    markten: any;
    page: IQueryParameters;
    abonnementen: IPagedResult<any>;
    errorMessage: any;
    abonnementSearchCriteria: IAbonnementSearchCriteria = {
        marktId: 0,
        query: "",
        productId: 0,
        verkoopCode: "",
        statusCode: "",
        beginDatum: null,
        eindDatum: null
    };

    gridOptions: IGridOptions = {
        stripedRows: true,
        fields: [
            {
                field: "markt.naam",
                title: "Markt",
                sortable: true,
                sort: SortOrder.Ascending
            },
            {
                field: "aanvraag.klant.firmanaam",
                title: "Firmanaam",
                sortable: true
            },
            {
                field: "aanvraag.klant.ondernemingsnr",
                title: "OndernemingsNr",
                sortable: true
            },
            {
                field: "producten",
                title: "Producten"
            },
            {
                field: "verkoop.code",
                title: "Verkoop",
                sortable: true
            },
            {
                field: "begindatum",
                title: "Begindatum",
                sortable: true
            },
            {
                field: "einddatum",
                title: "Einddatum",
                sortable: true
            },
            {
                field: "abonnementstatus.code",
                title: "Status",
                sortable: true
            }
        ]
    };

    constructor
        (
        private marktService: MarktService,
        private router: Router,
        private datePipe: DatePipe,
        private abonnementService: AbonnementService,
        private nullSafePipe: NullSafePipe
        ) { }

    getMarkten(): void {
        this.marktService.getAll()
            .subscribe(markten => { this.markten = markten.embedded.resourceList.sort(this.compareMarkten); this.isLoading = false;},
            error => this.errorMessage = <any>error);
    }

    fetchData(page: IQueryParameters): void {
        if (!this.page) this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }
        this.abonnementService.getAll(this.page, this.abonnementSearchCriteria).subscribe(x => {
            this.abonnementen = x;
            this.isLoading = false;
        });
    }

    concatProducts(productens: any[]): string {
        return productens.map(m => m.omschrijving).join(", ");
    }

    ngOnInit(): void {
        this.getMarkten();
    }

    rowClicked(row: any) {
        this.router.navigate(["abonnement", row.data.id]);
    }
    compareMarkten(a, b): number {
        if (a.naam.toLowerCase() < b.naam.toLowerCase())
            return -1;
        if (a.naam.toLowerCase() > b.naam.toLowerCase())
            return 1;
        return 0;
    }

    onFilterChange(): void {
        if (!this.isLoading) this.fetchData(this.page);
    }
}

export interface IAbonnementSearchCriteria {
    marktId?: number;
    query?: string;
    productId?: number;
    verkoopCode?: string;
    statusCode?: string;
    beginDatum?: Date;
    eindDatum?: Date;
}