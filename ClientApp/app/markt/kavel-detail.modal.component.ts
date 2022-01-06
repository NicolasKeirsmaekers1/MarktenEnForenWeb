﻿import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogRef, ModalComponent } from 'ngx-modialog';
import { BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { ToastrService } from 'ngx-toastr';

import { CodeType } from '../componenten/code-select';
import { KavelService } from '../services/kavel.service';

export class KavelDetailModalContext extends BSModalContext {
    constructor(public kavelId: number, public marktId: number, public hideKlant: boolean) {
        super();
    }
}

@Component({
    selector: "modal-content",
    templateUrl: "./html/kavel-detail.modal.component.html"
})
export class KavelDetailModal implements ModalComponent<KavelDetailModalContext> {
    context: KavelDetailModalContext;
    kavel: any;
    codeType = CodeType;
    errorMessage: any;
    kavelDetailForm: FormGroup;

    constructor(
        public dialog: DialogRef<KavelDetailModalContext>,
        private kavelService: KavelService,
        private fb: FormBuilder,
        private toastr: ToastrService) {
        this.context = dialog.context;
    }

    onKeyUp(value) {
    }

    getKavel(marktId: number, kavelId: number) {
        this.kavelService.get(marktId, kavelId)
            .subscribe(x => {
                this.kavel = x;
                this.buildForm();
            },
            error => this.errorMessage = <any>error);
    }

    ngOnInit(): void {
        if (this.context.kavelId > 0) {
            this.getKavel(this.context.marktId, this.context.kavelId);
        }
        else {
            this.kavel = {
                id: 0,
                marktId: this.context.marktId,
                mogelijkheidDieptekavel: false,
                longitude: 0,
                latitude: 0,
                oudeNaam: ''
            }
            this.buildForm();
        }
    }

    private buildForm(): void {
        this.kavelDetailForm = this.fb.group({
            'id': [this.kavel.id],
            'marktId': [this.kavel.marktId],
            'mogelijkheidDieptekavel': [this.kavel.mogelijkheidDieptekavel],
            'longitude': [this.kavel.longitude],
            'latitude': [this.kavel.latitude],
            'oudeNaam': [this.kavel.oudeNaam, Validators.required]
        });
        this.kavelDetailForm.valueChanges.subscribe((data: any) => this.onValueChanged(data));
    }

    onValueChanged(data?: any) {
        if (!this.kavelDetailForm) return;
        const form = this.kavelDetailForm;
        for (const field in this.formErrors) {
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    formErrors = {
        'id': '',
        'marktId': '',
        'mogelijkheidDieptekavel': '',
        'longitude': '',
        'latitude': '',
        'oudeNaam': ''
    };

    validationMessages = {
        'id': {},
        'marktId': {},
        'mogelijkheidDieptekavel': {},
        'longitude': {},
        'latitude': {},
        'oudeNaam': {
            'required': 'Oude naam is verplicht.'
        }
    };

    save(): void {
        this.kavel.latitude = this.kavelDetailForm.value.latitude;
        this.kavel.longitude = this.kavelDetailForm.value.longitude;
        this.kavel.oudeNaam = this.kavelDetailForm.value.oudeNaam;
        this.kavel.mogelijkheidDieptekavel = this.kavelDetailForm.value.mogelijkheidDieptekavel;
        if (this.kavelDetailForm.valid) {
            this.kavelService.save(this.kavel)
                .subscribe(success => {
                    this.toastr.success("Kavel succesvol bewaard");
                    return this.dialog.close(true);
                }, error => {
                    this.toastr.error("Kavel kon niet worden bewaard.");
                });
        }
    }
}