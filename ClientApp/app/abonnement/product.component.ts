import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import { ProductService } from '../services';

export class Product {
    code: string;
    omschrijving;
    detail: string;

    constructor() { }
}

@Component({
    providers: [ProductService],
    selector: "mafo-product",
    templateUrl: "./html/product.component.html"
})

export class ProductComponent implements OnInit {
    @Input() data: any;
    producten: any;
    errorMessage: any;
    @Input("group") productForm: FormGroup;
    
    constructor(
        private productService: ProductService,
        private fb: FormBuilder
    ) { }

    getProducten(): void {
        this.productService.getProducten()
            .subscribe(
            producten => this.producten = producten,
            error => this.errorMessage = <any>error);
    }

    ngOnInit(): void {
        this.getProducten();
        this.buildForm();
    }

    private buildForm(): void {
        this.productForm.addControl("detail", this.fb.control(""));
        this.productForm.addControl("code", this.fb.control(""));
    }
}