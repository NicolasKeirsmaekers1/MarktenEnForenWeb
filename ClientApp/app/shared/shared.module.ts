import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';

import { BootstrapModule } from '../componenten/bootstrap';
import { DataGridModule } from '../componenten/datagrid';
import { CoreModule } from '../core';
import { BreadcrumbComponent } from './breadcrumb.component';
import { MafoPanelComponent } from './panel/app.shared.panel';
import { QuantitySelectorComponent } from './quantity-selector.component';
import { SliderComponent } from './slider.component';



@NgModule({
    declarations: [
        BreadcrumbComponent,
        SliderComponent,
        QuantitySelectorComponent,
        MafoPanelComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule,
        BootstrapModalModule,
        BootstrapModule
    ],
    exports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule,
        BootstrapModalModule,
        DataGridModule,
        BreadcrumbComponent,
        QuantitySelectorComponent,
        MafoPanelComponent,
        SliderComponent,
        CoreModule,
        BootstrapModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
}