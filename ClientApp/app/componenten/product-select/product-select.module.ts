import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  ModuleWithProviders,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared';
import { ProductDisplayComponent } from './product-display.component';
import { ProductSelectComponent } from './product-select.component';
import { ProductPanelComponent } from './product-panel.component';
import { ProductService } from './products.service';

@NgModule({
  declarations: [
    ProductDisplayComponent,
    ProductSelectComponent,
    ProductPanelComponent,
  ],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [
    ProductDisplayComponent,
    ProductSelectComponent,
    ProductPanelComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductSelectModule {
  static forRoot(): ModuleWithProviders<ProductSelectModule> {
    return {
      ngModule: ProductSelectModule,
      providers: [ProductService],
    };
  }
}
