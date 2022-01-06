import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { AuthService, Privilege } from '../auth';
import { IGridOptions, SortOrder } from '../componenten/datagrid';
import { KlantService } from '../componenten/klant-core';
import { IPagedResult, IQueryParameters } from '../core';

@Component({
    templateUrl: './html/klant-overview.component.html'
})
export class KlantOverviewComponent {
    private commercieel: boolean = true;
    pageTitle: string;
    data: IPagedResult<any>;
    search: string;
    page: IQueryParameters;
    addKlant: Observable<boolean>;
    deleteKlant: Observable<boolean>;

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

    constructor(private klantService: KlantService, private router: Router, private modal: Modal, private route: ActivatedRoute, private toastr: ToastrService, private auth: AuthService) {
        this.commercieel = this.route.snapshot.data['commercieel'];
        this.pageTitle = (this.commercieel ? "Commerciële" : "Niet-commerciële") + " klanten";

    }

    fetchData(page: IQueryParameters): void {
        if (!this.page) this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }
        this.klantService.getAll(this.commercieel, undefined, this.page).subscribe(x => {
            this.data = x;
        }, x => this.toastr.error("Kon de klanten niet inladen"));
    }

    rowClicked(row: any) {
        this.router.navigate(["klant", row.data.id]);
    }

    searchKlanten($event): void {
        if (this.page) {
            this.page.page = 1;
            this.page["filter"] = $event.value;
            this.fetchData(this.page);
        }
    }

    showDeleteModal($event) {
        this.modal.confirm()
            .title('Bevestig verwijderen')
            .body('Weet u zeker dat u deze klant wilt verwijderen?')
            .okBtn('verwijderen')
            .open()
            .catch() // catch error not related to the result (modal open...)
            .then(dialog => dialog.result) // dialog has more properties,lets just return the promise for a result. 
            .then(x => this.delete($event.id))// if were here ok was clicked.
            .catch(x => { }); // if were here cancel was clicked.
    }

    delete(klantId: number): void {
        this.klantService.delete(klantId)
            .subscribe(() => {
                this.fetchData(this.page);
            }, (x) => {
                if (x.ExtraInfo) {
                    for (let xtra in x.ExtraInfo) {
                        this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                    }
                }
            });
    }

    ngOnInit(): void {
        this.security();
    }

    security(): void {
        this.addKlant = this.auth.hasPermission(Privilege.Klant.Add);
        this.deleteKlant = this.auth.hasPermission(Privilege.Klant.Delete);
    }
}