import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { AuthService, Privilege } from '../auth';
import { IGridOptions, SortOrder } from '../componenten/datagrid';
import { MarktService } from '../componenten/markt-select';
import { IPagedResult, IQueryParameters } from '../core';

@Component({
  selector: 'mafo-app',
  templateUrl: './html/markt-beheer.component.html',
})
export class MarktBeheerComponent {
  pageTitle: string = 'Markt beheer';
  page: IQueryParameters;
  data: IPagedResult<any>;
  errorMessage: any;
  search: string;
  addMarkt: Observable<boolean>;
  deleteMarkt: Observable<boolean>;

  gridOptions: IGridOptions = {
    stripedRows: true,
    fields: [
      {
        field: 'naam',
        title: 'Naam',
        sortable: true,
        sort: SortOrder.Ascending,
      },
      {
        field: 'afkorting',
        title: 'Afkorting',
        sortable: true,
      },
    ],
  };

  constructor(
    private marktService: MarktService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private modal: Modal,
    private auth: AuthService
  ) {}

  fetchData(page: IQueryParameters): void {
    if (!this.page) this.page = page;
    else {
      this.page.page = page.page;
      this.page.pageSize = page.pageSize;
      this.page.sort = page.sort;
    }
    this.marktService.getAll(this.page).subscribe((x) => (this.data = x));
  }

  rowClicked(row: any) {
    this.router.navigate(['markt', row.data.id]);
  }

  searchMarkten($event): void {
    if (this.page) {
      this.page.page = 1;
      this.page['query'] = $event.value;
      this.fetchData(this.page);
    }
  }

  delete(marktId: number): void {
    this.marktService.delete(marktId).subscribe(
      () => {
        this.fetchData(this.page);
      },
      (error) => {
        this.toastr.warning(
          'Deze markt kan niet verwijderd worden omdat er momenteel lopende aanvragen en / of abonnementen voor de markt zijn.',
          'Markt'
        );
      }
    );
  }

  showDeleteModal($event) {
    this.modal
      .confirm()
      .title('Bevestig verwijderen')
      .body('Weet u zeker dat u deze markt wilt verwijderen?')
      .okBtn('verwijderen')
      .open()
      .result.catch() // catch error not related to the result (modal open...)
      .then((dialog) => dialog.result) // dialog has more properties,lets just return the promise for a result.
      .then((x) => this.delete($event.id)) // if were here ok was clicked.
      .catch((x) => {}); // if were here cancel was clicked.
  }

  ngOnInit(): void {
    this.security();
  }

  security(): void {
    this.addMarkt = this.auth.hasPermission(Privilege.Markt.Add);
    this.deleteMarkt = this.auth.hasPermission(Privilege.Markt.Delete);
  }
}
