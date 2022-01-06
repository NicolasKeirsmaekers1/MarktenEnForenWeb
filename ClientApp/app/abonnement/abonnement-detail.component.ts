import { Component } from "@angular/core"
import { AbonnementService } from '../services';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './html/abonnement-detail.component.html'
})
export class AbonnementDetailComponent {
    pageTitle: string = "Abonnement detail";
    abonnement: any;
    errorMessage: any;
    elekAboGewijzigdCode: string;

    constructor(
        
        private abonnementService: AbonnementService,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.abonnement = this.route.snapshot.data['abonnement'];
    }

    elekAboGewijzigd(elekAboGewijzigdCode: string): void {
        this.elekAboGewijzigdCode = elekAboGewijzigdCode;
    }
}