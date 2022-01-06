﻿import { Component, forwardRef, Input, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormArray, FormGroup, FormBuilder, Validators } from "@angular/forms";

﻿@Component({
    selector: "product-panel",
    template: `
            <mafo-panel selector="producten" [collapsable]="collapsable" [open]="open">
                <mafo-panel-heading>
                    <h5>
                        PRODUCTEN
                    </h5>
                </mafo-panel-heading>
                <mafo-panel-actions>
                    <button id="intake-add-product-button" class="btn btn-primary pull-right" (click)="addProduct()" *ngIf="edit && !componentsDisabled" [attr.disabled]="disabled ? true : null">
                        <span class="fa fa-plus"></span>
                        <span class="hidden-xs hidden-sm">Toevoegen</span>
                    </button>
                </mafo-panel-actions>
                <mafo-panel-body>
                    <div *ngIf="!edit || (edit && componentsDisabled)">
                        <ul class="list-group">
                            <li class="list-group-item" *ngFor="let product of producten.controls; let i=index; trackBy:i">
                                <h4 class="list-group-item-heading">
                                    <strong>
                                        <product-display [value]="product.get('productId').value"></product-display>
                                    </strong>
                                </h4>
                                <p class="list-group-item-text">{{product.get('detail').value}}<p>
                                <p class="list-group-item-text" *ngIf="isMain(i)">
                                    <span >Hoofdcategorie</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <ng-container *ngIf="edit && !componentsDisabled">
                        <div class="row" >
                            <div class="col-xs-5">
                               Product                      
                            </div>
                            <div class="col-xs-6 form-group">
                               Opmerking
                            </div>
                           Hoofdproduct
                        </div>
                        <div class="row" *ngFor="let product of producten.controls; let i=index; trackBy:i"  [formGroup]="product">
                            <div class="col-xs-5">
                                <form-group>
                                    <product-select formControlName="productId"></product-select>
                                </form-group>                                
                            </div>
                            <div class="col-xs-6 form-group">
                                <div class="input-group">
                                    <input id="intake-add-product-opmerking-text-input" type="text" formControlName="detail" class="form-control" />
                                    <span class="input-group-btn">
                                        <button class="btn btn-default pull-right" (click)="removeProduct(i)">
                                            <span class="fa fa-remove fa-lg text-danger"></span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div class="col-xs-1 form-group">
                                <button id="intake-add-product-checkbox" class="btn {{isMain(i)?'btn-success':'btn-default'}}" (click)="setAsMain(i)">
                                    <span class="fa {{isMain(i)?'fa-check-square text-default':'fa-square-o text-default'}} fa-lg "></span>
                                </button>
                            </div>
                        </div>
                    </ng-container>
                </mafo-panel-body>
            </mafo-panel>
            `
﻿})
﻿export class ProductPanelComponent implements OnInit, OnChanges {
    @Input() formGroup: FormGroup;
    @Input() data = [];
    @Input() aanvraagId?: number;
    @Input() disabled: boolean = false;
    @Input() edit: boolean = true;
    @Input() open: boolean = false;
    @Input() collapsable: boolean = true;
    @Input() componentsDisabled: boolean = false;

    private get producten(): FormArray {
        return this.formGroup.get("producten") as FormArray;
    }

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
        if (!this.formGroup) this.formGroup = this.fb.group({});
        this.formGroup.addControl("producten", this.fb.array([]));
        if (this.data) this.data.map(x => this.producten.push(this.createProduct(x)));
    }
    ngOnChanges(changes: SimpleChanges): void {
        if (changes && changes.edit && !changes.edit.currentValue && changes.edit.previousValue === true) {

            this.revert();
        }
    }

    addProduct(): void {
        var link = document.getElementsByName('producten');
        var panel = document.getElementById('producten');

        if (link && link[0] && !panel.classList.contains('in')) { link[0].click() }
        this.producten.push(this.createProduct());
        //  this.open = true;
    }

    removeProduct(index: number): void {
        this.producten.removeAt(index);
    }
    setAsMain(index: number): void {
        this.producten.controls.forEach(x => x.get("isHoofdcategorie").setValue(false));
        this.producten.controls[index].get("isHoofdcategorie").setValue(true);
    }
    isMain(index: number): boolean {
        var value = this.producten.controls[index].get("isHoofdcategorie").value;
        if (value) { return true; } else { return false; }
    }
    reset(): void {
        for (let i = 0; i < this.producten.controls.length; i++) {
            this.producten.removeAt(i);
        }
    }
    revert(): void {
        if (!this.formGroup) this.formGroup = this.fb.group({});
        this.formGroup.removeControl("producten");
        this.formGroup.addControl("producten", this.fb.array([]));
        if (this.data) this.data.map(x => this.producten.push(this.createProduct(x)));

    }

     private createProduct(x?: any): FormGroup {
         var product = x || {
             aanvraagId: this.aanvraagId,
             productId: "",
             detail: "",
             isHoofdcategorie: "",
             omschrijving: ""
         }
        return this.fb.group({
            'id': [product.id],
            'aanvraagId': [product.aanvraagId],
            'productId': [product.productId, [Validators.required]],
            'detail': [product.detail],
            'isHoofdcategorie': [product.isHoofdcategorie],
            'omschrijving': [product.omschrijving]
        });
    }
}