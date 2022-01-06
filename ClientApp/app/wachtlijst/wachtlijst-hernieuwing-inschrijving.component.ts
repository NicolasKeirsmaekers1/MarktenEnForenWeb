import { Component } from '@angular/core';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { ToastrService } from 'ngx-toastr';

import { IGridOptions, SortOrder } from '../componenten/datagrid';
import { IPagedResult, IQueryParameters } from '../core';
import { AanvraagMarktService } from '../services/aanvraag-markt.service';
import { AanvraagService } from '../services/aanvraag.service';

@Component({
    selector: 'mafo-app',
    templateUrl: './html/wachtlijst-hernieuwing-inschrijving.component.html'
})

export class WachtlijstHernieuwingInschrijvingComponent {
    page: IQueryParameters;
    data: IPagedResult<any>;
    aanvraag: any;

    gridOptions: IGridOptions = {
        stripedRows: true,
        fields: [
            {
                field: "klant.firmanaam",
                title: "Firmanaam",
                sortable: true
            },
            {
                field: "klant.ondernemingsNr",
                title: "OndernemingsNr",
                sortable: true
            },
            {
                field: "markt.naam",
                title: "Markt",
                sortable: true
            },
            {
                field: "datumLaatsteHernieuwing",
                title: "Vervaldag inschrijving",
                sortable: true,
                sort: SortOrder.Ascending
            }
        ]
    };

    constructor
        (
        private toastr: ToastrService,
        private aanvraagMarktService: AanvraagMarktService,
        private aanvraagService: AanvraagService,
        private modal: Modal
        ) { }

    fetchData(page: IQueryParameters): void {
        if (!this.page) this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }
        this.page["hernieuwing"] = true;
        this.aanvraagMarktService.getAll(this.page).subscribe(x => { this.data = x }, x => alert("error"));
    }

    berekenVervaldag(value: Date): Date {
        var d = new Date(value);
        d.setFullYear(d.getFullYear() + 1);
        d.setDate(d.getDate() - 1);
        return d;
    }

    berekenDatumLaatsteHernieuwing(value: Date): Date {
        var d = new Date(value);
        return new Date(new Date().getFullYear(), d.getMonth(), d.getDate());
    }

    search($event): void {
        if (this.page) {
            this.page.page = 1;
            this.page["filter"] = $event.value;
            this.page["ishernieuwing"] = true;
            this.fetchData(this.page);
        }
    }

    showModalRenew($event) {
        this.modal.confirm()
            .title('Bevestig hernieuwing')
            .body('Weet u zeker dat u deze aanvraag wilt hernieuwen?')
            .okBtn('Ok')
            .open()
            .catch() // catch error not related to the result (modal open...)
            .then(dialog => dialog.result) // dialog has more properties,lets just return the promise for a result. 
            .then(x => this.hernieuwing($event.id))// if were here ok was clicked.
            .catch(x => { }); // if were here cancel was clicked.
    }
    showModalDelete($event) {
        this.modal.confirm()
            .title('Bevestig verwijdering')
            .body('Weet u zeker dat u deze aanvraag wilt verwijderen?')
            .okBtn('Ok')
            .open()
            .catch() // catch error not related to the result (modal open...)
            .then(dialog => dialog.result) // dialog has more properties,lets just return the promise for a result. 
            .then(x => this.delete($event.id))// if were here ok was clicked.
            .catch(x => { }); // if were here cancel was clicked.
    }

    hernieuwing(aanvraagId: number): void {
        this.aanvraagService.get(aanvraagId).subscribe(
            aanvraag => {
                this.aanvraagService.patchDatumLaatsteHernieuwing(aanvraagId, this.berekenDatumLaatsteHernieuwing(this.berekenDatumLaatsteHernieuwing(aanvraag.datumLaatstehernieuwing)))
                    .subscribe(x => { this.fetchData(this.page) }
                    );
            }, x => this.toastr.warning(x.ExtraInfo[x].join(","), aanvraagId + " kon niet vernieuwd worden")
        );
    }
    delete(aanvraagId: number): void {
        this.aanvraagService.delete(aanvraagId).subscribe(
            aanvraag => {
                this.toastr.info(aanvraagId + " verwijderd.");
                this.fetchData(this.page);
            }, x => this.toastr.warning(x.ExtraInfo[x].join(","), aanvraagId + " kon niet verwijderd worden"));
    }
}