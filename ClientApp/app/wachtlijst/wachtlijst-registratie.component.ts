import { Component } from "@angular/core";
import { IQueryParameters, IPagedResult } from "../core";
import { IGridOptions, SortOrder } from "../componenten/datagrid";
import { ToastrService} from 'ngx-toastr';
import { Router, ActivatedRoute } from "@angular/router";
import { MarktWachtlijstService } from "../services/markt-wachtlijst.service";

@Component({
    templateUrl: './html/wachtlijst-registratie.component.html'
})
export class WachtlijstRegistratieComponent {
    filter = {
        query: "",
        district: null,
        toeTeWijzen: false,
        wachtlijst: true
    };
    page: IQueryParameters;
    data: IPagedResult<any>;
    gridOptions: IGridOptions = {
        stripedRows: true,
        fields: [
            {
                field: "district.code",
                title: "District",
                sortable: true,
                sort: SortOrder.Ascending
            },
            {
                field: "dagVanDeWeek.omschrijving",
                title: "Weekdag",
                sortable: true
            },
            {
                field: "locatie.naam",
                title: "Locatie",
                sortable: true
            },
            {
                field: "naam",
                title: "Markt",
                sortable: true
            }
        ]
    };

    constructor(private marktWachtlijstService: MarktWachtlijstService,
        private toastr: ToastrService,
        private router: Router,
        private route: ActivatedRoute) { }

    private fetching: boolean

    fetchData(page: IQueryParameters): void {
        if (!this.page) this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }

        this.page["wachtlijst"] = this.filter.wachtlijst;
        this.page["toeTeWijzen"] = this.filter.toeTeWijzen;
        this.page["district"] = this.filter.district;
        this.page["query"] = this.filter.query;
        this.fetching = true;

        this.marktWachtlijstService.getRegistratieWachtlijstOverizcht(this.page).subscribe((x: IPagedResult<any>) => {
            this.data = x;
            this.fetching = false;
        }, error => {
            this.toastr.error("Kon de registraties niet inladen");
            this.fetching = false;

        });
    };

    rowClicked(row: any) {
        this.router.navigate(["wachtlijst", "registratie", "markt", row.data.id]);
    }

    filterRegistraties($event): void {
        if (this.page && this.fetching == false) {
            this.page.page = 1;
            this.fetchData(this.page);
        }
    }

    districtChanged($event): void {
        if (this.page && this.fetching == false) {
            this.page.page = 1;
            this.fetchData(this.page);
        }
    }

    filterToeTeWijzen($event) {
        if (this.page && this.fetching == false) {
            this.page.page = 1;
            this.fetchData(this.page);
        }
    }
}