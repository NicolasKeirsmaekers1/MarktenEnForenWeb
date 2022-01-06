﻿import { Component } from '@angular/core';
import { DialogRef, ModalComponent } from 'ngx-modialog';
import { BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { ToastrService } from 'ngx-toastr';

import { IGridOptions } from '../componenten/datagrid';
import { IPagedResult } from '../core';
import { FactuurService } from '../factuur/factuur.service';

export class FactuurDetailModalContext extends BSModalContext {
    constructor(public factuurId: number) {
        super();
    }
}

@Component({
    templateUrl: "./html/factuur-detail.modal.component.html"
})
export class FactuurDetailModal implements ModalComponent<FactuurDetailModalContext> {
    context: FactuurDetailModalContext;
    factuur: any;
    errorMessage: any;
    factuurLijnenData: IPagedResult<any> = {
        page: {
            number: 1,
            size: 0,
            totalElements: 0,
            totalPages: 1
        },
        embedded: { resourceList: new Array() },
        links: null
    };
    gridOptions: IGridOptions = {
        stripedRows: true,
        showPaging: false,
        fields: [
            {
                field: "omschrijving",
                title: "Omschrijving",
                sortable: false,
                width: "35%"
            },
            {
                field: "sapmateriaalCode",
                title: "MateriaalCode SAP",
                sortable: false,
                width: "20%"
            },
            {
                field: "eenheidsPrijs",
                title: "Eenheidsprijs",
                sortable: false,
                width: "15%"
            },
            {
                field: "aantal",
                title: "Aantal",
                sortable: false,
                width: "15%"
            },
            {
                field: "totaal",
                title: "Totaalprijs",
                sortable: false,
                width: "15%"
            }
        ]
    };

    constructor(
        public dialog: DialogRef<FactuurDetailModalContext>,
        private factuurService: FactuurService,
        private toastr: ToastrService) {
        this.context = dialog.context;
        this.context.size = 'lg';
    }

    getFactuur(factuurId: number) {
        this.factuurService.get(factuurId)
            .subscribe(x => {
                this.factuur = x;
                this.factuurLijnenData = this.factuur.factuurLijnen;
            },
            error => this.errorMessage = <any>error);
    }

    ngOnInit(): void {
        if (this.context.factuurId > 0) {
            this.getFactuur(this.context.factuurId);
        }
    }
}