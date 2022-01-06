import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { Observable } from 'rxjs';

import { AuthService, Privilege } from '../auth';
import { IGridOptions, SortOrder } from '../componenten/datagrid';
import { IPagedResult, IQueryParameters } from '../core';
import { IntakeService } from '../services/intake.service';

@Component({
    selector: 'mafo-app',
    templateUrl: './html/wachtlijst-intake.component.html',
    
})

export class WachtlijstIntakeComponent {
    page: IQueryParameters;
    data: IPagedResult<any>;
    errorMessage: any;
    aanvraag: any;
    private intake: boolean = true;
    pageTitle: string;
    search: string;
    updateAanvraag: Observable<boolean>;
    deleteAanvraag: Observable<boolean>;
    addAanvraag: Observable<boolean>;

    gridOptions: IGridOptions = {
        stripedRows: true,
        fields: [
            {
                field: "datum",
                title: "Datum",
                sortable: true,
                sort: SortOrder.Descending
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
                field: "eerstemarkt",
                title: "Markten",
                sortable: true
            }
        ]
    };

    constructor
        (
        private intakeService: IntakeService,
        private router: Router,
        private modal: Modal,
        private route: ActivatedRoute,
        private auth: AuthService
        ) { }

    fetchData(page: IQueryParameters): void {
        if (!this.page) this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }
        if (this.intake) {
            this.page["aanvraagstatuscode"] = "INTAKE";
        }
        else {
            this.page["aanvraagstatuscode"] = "GEPREREGISTREERD";
        }
        this.intakeService.getAll(this.page).subscribe(x => {
            this.data = x;
        });
    }

    rowClicked(row: any) {
        if (this.intake) {
            this.router.navigate(["wachtlijst", "intake", row.data.id]);
        }
        else {
            this.router.navigate(["wachtlijst", "preregistratie", row.data.id]);
        }
    }

    searchIntakes($event): void {
        if (this.page) {
            this.page.page = 1;
            this.page["filter"] = $event.value;
            this.fetchData(this.page);
        }
    }

    marktenTooltip(markten: Array<string>): string {
        var first = markten.shift();
        var result = markten.join(", ");
        markten.unshift(first);
        return result;

        //let result: string = "";
        //markten.join()

        //for (var i = 1; i < markten.length; i++) {
        //    result += markten[i];
        //}
        //return result;
    }

    showDeleteModal($event) {
        this.modal.confirm()
            .title('Bevestig verwijderen')
            .body('Weet u zeker dat u dit record wilt verwijderen?')
            .okBtn('verwijderen')
            .open()
            .catch() // catch error not related to the result (modal open...)
            .then(dialog => dialog.result) // dialog has more properties,lets just return the promise for a result. 
            .then(x => this.delete($event.id))// if were here ok was clicked.
            .catch(x => { }); // if were here cancel was clicked.
    }

    delete(intakeId: number): void {
        this.intakeService.delete(intakeId)
            .subscribe(x => {
                this.fetchData(this.page)
            }, error => this.errorMessage = <any>error);
    }

    edit($event) {
        if (this.intake) {
            this.router.navigate(["wachtlijst", "intake", $event.id, "edit"]);
        }
        else {
            this.router.navigate(["wachtlijst", "preregistratie", $event.id, "edit"]);
        }
    }

    ngOnInit(): void {
        this.intake = this.route.snapshot.data['intake'];
        this.pageTitle = this.intake ? "Intakes" : "Preregistraties";
        this.security();
    }

    security(): void {
        this.addAanvraag = this.auth.hasPermission(Privilege.Aanvraag.Add);
        this.updateAanvraag = this.auth.hasPermission(Privilege.Aanvraag.Update);
        this.deleteAanvraag = this.auth.hasPermission(Privilege.Aanvraag.Delete);
    }
}