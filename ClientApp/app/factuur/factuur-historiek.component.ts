import { DatePipe } from '@angular/common';
import { Component, ViewContainerRef } from '@angular/core';
import { overlayConfigFactory } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { ToastrService } from 'ngx-toastr';

import { IGridOptions } from '../componenten/datagrid';
import { SortOrder } from '../componenten/datagrid/datagrid.models';
import { IQueryParameters } from '../core';
import { IPagedResult } from '../core/core.interfaces';
import { FactuurDetailModal, FactuurDetailModalContext } from './factuur-detail.modal.component';
import { FactuurService } from './factuur.service';

@Component({
    templateUrl: './html/factuur-historiek.component.html'
})

export class FactuurHistoriekComponent {
    page: IQueryParameters;
    selectedSemester: string;
    historiekFactuur: IPagedResult<any>;
    gridOptions: IGridOptions = {
        stripedRows: true,
        //TODO: properties van children sortable krijgen
        fields: [
            {
                field: "createdOn",
                title: "Gecreëerd op",
                sortable: true,
                sort: SortOrder.Ascending,
                width: "10%"
            },
            {
                field: "klant.firmanaam",
                title: "Firma",
                sortable: true,
                width: "30%"
            },
            {
                field: "klant.ondernemingsnr",
                title: "Ondernemingsnummer",
                sortable: true,
                width: "15%"
            },
            {
                //entity property name = naam, model property name = omschrijving 
                // => entity property name is used here for sorting purposes, model name is used in html
                field: "district.naam",
                title: "District",
                sortable: true,
                width: "15%"
            },
            {
                field: "factuurNummer",
                title: "Factuurnummer",
                sortable: true,
                width: "15%"
            },
            {
                field: "bedrag",
                title: "Totaal bedrag",
                sortable: false,
                width: "10%"
            }
        ]
    };


    constructor(private factuurService: FactuurService, private datePipe: DatePipe, private toastr: ToastrService, private modal: Modal,
        private viewContainerRef: ViewContainerRef,) { }

    fetchData(page: IQueryParameters): void {
        if (!this.page) this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }
        this.page["isVerzondenNaarSAP"] = true;

        this.page["jaar"] = undefined;
        this.page["semester"] = undefined;
        if (this.selectedSemester && this.selectedSemester !== "") {
            let splittedSemester: string[] = this.selectedSemester.split('/');
            this.page["jaar"] = Number(splittedSemester[1]);
            this.page["semester"] = Number(splittedSemester[0]);
        }
        this.factuurService.getAll(this.page).subscribe(x => this.historiekFactuur = x, x => {
            this.toastr.error("Kon geen data inladen!", "Facturen");
            this.historiekFactuur = null;
        });
    }

    searchFacturen($event): void {
        if (this.page) {
            this.page.page = 1;
            this.page["filter"] = $event.value;
            this.fetchData(this.page);
        }
    }

    showDetailModal(factuurId: number): void {
        if (isNaN(factuurId)) { factuurId = 0; }
        this.modal.open(FactuurDetailModal, overlayConfigFactory(new FactuurDetailModalContext(factuurId), FactuurDetailModalContext, {
            viewContainer: this.viewContainerRef
        }));
    }

    rowClicked(row: any) {
        this.showDetailModal(row.data.id);
    }
}

export interface IFactuurHistoriekSearchCriteria {
    Jaar: number,
    Semester: number,
    JaarSemester: number
}