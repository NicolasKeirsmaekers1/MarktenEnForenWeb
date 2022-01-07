import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodeSelectComponent } from './code-select.component';
import { CodeSelectIdComponent } from './code-id-select.component';
import { CodeDisplayComponent } from './code-display.component';
import { CodeService } from './code.service';

@NgModule({
  declarations: [
    CodeSelectComponent,
    CodeSelectIdComponent,
    CodeDisplayComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [CodeSelectComponent, CodeSelectIdComponent, CodeDisplayComponent],
})
export class CodeSelectModule {
  static forRoot(): ModuleWithProviders<CodeSelectModule> {
    return {
      ngModule: CodeSelectModule,
      providers: [CodeService],
    };
  }
}
