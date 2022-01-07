import {
  NgModule,
  ModuleWithProviders,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DagpasFormComponent } from './dagpas-form.component';
import { OndernemingService } from '../../services/onderneming.service';
import { SearchModule } from '../search';
import { CodeSelectModule } from '../code-select';
import { SharedModule } from '../../shared/shared.module';
import { KlantCoreModule } from '../klant-core';

@NgModule({
  declarations: [DagpasFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchModule,
    CodeSelectModule,
    SharedModule,
    KlantCoreModule,
  ],
  exports: [DagpasFormComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DagpasFormModule {
  static forRoot(): ModuleWithProviders<DagpasFormModule> {
    return {
      ngModule: DagpasFormModule,
    };
  }
}
