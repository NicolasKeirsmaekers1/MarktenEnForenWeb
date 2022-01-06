import { Component } from "@angular/core";
import { IQueryParameters, IPagedResult } from "../core";
import { Router, ActivatedRoute } from "@angular/router";
import { IGridOptions } from "../componenten/datagrid";
import { ToastrService} from 'ngx-toastr';
import { ApplicationConstants } from '../core';
import { MarktWachtlijstService } from "../services/markt-wachtlijst.service";
import { IMarktWachtlijst } from "../componenten/markt-select";

@Component({
    templateUrl: "./html/wachtlijst-registratie.markt.component.html",
    styles: ["td.priority-item { border-bottom: 0px solid black !important;}"] // op 0px gezet om zwarte lijn (onder laatste ruiling) niet zichtbaar te maken.  Style settings behouden indien het terug nodig zou zijn.
})
export class WachtlijstRegistratieMarktComponent {
    page: IQueryParameters;
    data: IPagedResult<IMarktWachtlijst>;
    markt: any;
    gridOptions: IGridOptions = {
        stripedRows: true,
        fields: [
            {
                field: "district.omschrijving",
                title: "Type"
            },
            {
                field: "dagVanDeWeek.omschrijving",
                title: "Nr"
            },
            {
                field: "locatie.naam",
                title: "OND"
            },
            {
                field: "naam",
                title: "Bedrijfsnaam"
            }
            ,
            {
                field: "naam",
                title: "Uitgesteld"
            }
            ,
            {
                field: "",
                title: ""
            }
        ]
    };

    constructor(
        private marktWachtlijstService: MarktWachtlijstService,
        private toastr: ToastrService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.markt = this.route.snapshot.data["markt"];
    }

    fetchData(page: IQueryParameters): void {
        if (!this.page) this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }

        this.marktWachtlijstService.getWachtlijst(this.markt.id, this.page).subscribe(x => {
            this.data = x;
            let filter = this.data.embedded.resourceList.filter(item => item.verkoopCode === ApplicationConstants.Verkoop.Demonstreerder || item.soortCode === ApplicationConstants.AanvraagSoort.RuilingCode);
            if (filter && filter.length > 0 && this.data.embedded.resourceList.length !== filter.length) {
                filter[filter.length - 1]["priorityItem"] = true;
            }
        }, error => {
            this.toastr.error("Kon de registraties niet inladen");
        });
    };

    rowClicked(row: any) {
        this.router.navigate(["wachtlijst", "registratie", row.data.aanvraagId]);
    }
}