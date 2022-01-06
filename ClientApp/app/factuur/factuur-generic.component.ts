import 'rxjs/add/observable/interval';

import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { overlayConfigFactory } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { ToastrService } from 'ngx-toastr';
import { interval as observableInterval, Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AuthService, Privilege } from '../auth';
import { IGridOptions, SortOrder } from '../componenten/datagrid';
import { ApplicationConstants, IPagedResult, IQueryParameters } from '../core';
import { FactuurService } from '../factuur/factuur.service';
import { FactuurDetailModal, FactuurDetailModalContext } from './factuur-detail.modal.component';


@Component({
    templateUrl: './html/factuur-generic.component.html'
})

export class GenericFactuurComponent implements OnInit, OnDestroy {
    pageTitle: string;
    factuurGeneratieMelding: string;
    sapButtonText: any;
    page: IQueryParameters;
    data: IPagedResult<any>;
    showGenerateButton: boolean;
    showSendToSapButton: boolean;
    factuurType: string;
    geenAantal: boolean;
    errorMessage: any;
    search: string;
    genereer: Observable<boolean>;
    stuurDoorNaarSap: Observable<boolean>;
    private factuurGeneratieSubscription: Subscription;
    factuurGeneratieRunning: boolean;
    geenFacturen: boolean;
    facturatieAfgerond: boolean;
    searchForm: FormGroup;
    hasMateriaalCodeError: boolean = false;

    gridOptions: IGridOptions = {
        stripedRows: true,
        fields: [
            {
                field: "createdOn",
                title: "Gecreëerd op",
                sortable: true,
                sort: SortOrder.Descending,
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
                field: "district.code",
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

    constructor
        (
            private factuurService: FactuurService,
            private router: Router,
            private route: ActivatedRoute,
            private modal: Modal,
            private viewContainerRef: ViewContainerRef,
            private toastr: ToastrService,
            private auth: AuthService
        ) { }

    fetchData(page: IQueryParameters): void {
        if (!this.page) this.page = page;
        else {
            this.page.page = page.page;
            this.page.pageSize = page.pageSize;
            this.page.sort = page.sort;
        }
        this.page["factuurType"] = this.factuurType;
        if (this.factuurType == ApplicationConstants.Terugbetaling) {
            this.page["geenAantal"] = true;
        }
        this.factuurService.getAll(this.page).subscribe(x => {
            this.data = x;
            if (this.data.page.totalElements == 0) {
                this.geenFacturen = true;
                this.sapButtonText = "Geen Facturen";
            } else {
                this.geenFacturen = false;
                if (this.data.page.totalElements == 1) {
                    this.sapButtonText = "Stuur " + this.data.page.totalElements + " factuur door naar SAP";
                } else {
                    this.sapButtonText = "Stuur " + this.data.page.totalElements + " facturen door naar SAP";
                }
            }
        },
            x => {
                this.toastr.error("Kon geen data inladen!", "Facturen");
                this.data = null;
            });
    }

    generateFacturen(): void {
        this.hasMateriaalCodeError = false;
        this.facturatieAfgerond = false;
        this.factuurGeneratieRunning = true;
        this.factuurGeneratieSubscription = this.pollGenerateFacturenStatus().
            subscribe(data => {
                this.factuurGeneratieRunning = data.status === "Bezig";
            });

        this.factuurService.startGenerateFacturenJob()
            .subscribe(x => {
                this.toastr.info("Facturen succesvol gegenereerd");
                this.facturatieAfgerond = true;
                this.fetchData(this.page);
                if (this.factuurGeneratieSubscription) {
                    this.factuurGeneratieSubscription.unsubscribe();
                    this.factuurGeneratieRunning = false;
                }
            }, x => {
                this.toastr.error("Kon facturen niet genereren", "Facturen genereren");
                if (x.ExtraInfo) {
                    //if error of type
                    if ("MaterialCodeError" in x.ExtraInfo) {
                        this.errorMessage = x.ExtraInfo["MaterialCodeError"];
                        this.hasMateriaalCodeError = true;
                    }
                    for (let xtra in x.ExtraInfo) {
                        this.toastr.warning(xtra, x.ExtraInfo[xtra]);
                    }
                } else if (x) {
                    this.toastr.warning(x.replace(/(<([^>]+)>)/ig, ''));
                }
                this.facturatieAfgerond = false;
                if (this.factuurGeneratieSubscription) {
                    this.factuurGeneratieSubscription.unsubscribe();
                    this.factuurGeneratieRunning = false;
                }
            });
    }

    sendFacturenToSAP(): void {
        this.modal.confirm()
            .title(" Facturen naar SAP doorsturen")
            .body("Bent u zeker dat u <b>" + this.data.page.totalElements + "</b> facturen wil doorsturen naar SAP?")
            .cancelBtn("Nee")
            .okBtn("Ja")
            .open()
            .catch() // catch error not related to the result (modal open...)
            .then(dialog => dialog.result) // dialog has more properties,lets just return the promise for a result. 
            .then(x => this.factuurService.sendFacturenToSAP(this.page).subscribe(x => x,
                x => this.toastr.error("Er is een fout opgetreden bij het verzenden van facturen!"),
                () => {
                    this.toastr.info("Facturen succesvol verzonden");
                    this.searchForm.setValue({ searchField: "" });
                    this.page["filter"] = "";
                    this.fetchData(this.page);
                })
            )// if we're here, ok was clicked.
            .catch(x => { }); // if we're here, cancel was clicked.        
    }

    pollGenerateFacturenStatus(): Observable<any> {
        return observableInterval(6000).pipe(
            switchMap(() => this.factuurService.getGenerateFacturenJob()));
    }

    searchFacturen($event): void {
        if (this.page) {
            this.page.page = 1;
            this.page["filter"] = $event.value;
            this.page["factuurType"] = this.factuurType;
            this.page["geenaantal"] = this.geenAantal;
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

    ngOnDestroy(): void {
        if (this.factuurGeneratieSubscription) {
            this.factuurGeneratieSubscription.unsubscribe();
        }
    }

    ngOnInit(): void {
        this.searchForm = new FormGroup({ searchField: new FormControl() });
        this.facturatieAfgerond = false;


        if (this.route.snapshot.url[0].path) {
            var typeFactuurString = this.route.snapshot.url[0].path;
            switch (typeFactuurString) {
                case ApplicationConstants.HalfjaarlijksFactuurTypeRoute:
                    this.pageTitle = "Facturen";
                    this.factuurType = ApplicationConstants.HalfjaarlijksFactuurType;
                    this.factuurGeneratieMelding = "Even geduld... er wordt gecontroleerd of er reeds facturen gegenereerd worden...";
                    this.factuurGeneratieSubscription = this.pollGenerateFacturenStatus().
                        subscribe(data => {
                            this.factuurGeneratieRunning = data.status === "Bezig";
                            this.showGenerateButton = true;
                            this.showSendToSapButton = true;
                            this.factuurGeneratieMelding = "";
                            if (!this.factuurGeneratieRunning) {
                                this.factuurGeneratieSubscription.unsubscribe();
                            }
                        });
                    break;
                case ApplicationConstants.TussentijdsFactuurTypeRoute:
                    this.showSendToSapButton = true;
                    this.pageTitle = "Tussentijdse facturen";
                    this.factuurType = ApplicationConstants.TussentijdsFactuurType;
                    this.geenAantal = false;
                    break;
                case ApplicationConstants.TerugbetalingenRoute:
                    this.pageTitle = "Terugbetalingen";
                    this.factuurType = ApplicationConstants.Terugbetaling;
                    this.geenAantal = true;
                    break;
                default:
                    this.pageTitle = "Facturen";
                    this.factuurType = ApplicationConstants.OnbekendFactuurType;
                    this.geenAantal = false;
                    break;
            }
        }
        this.security();
    }

    security(): void {
        this.genereer = this.auth.hasPermission(Privilege.Factuur.Genereer);
        this.stuurDoorNaarSap = this.auth.hasPermission(Privilege.Factuur.StuurNaarSap);
    }
}