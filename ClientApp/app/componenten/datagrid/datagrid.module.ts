import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DataGrid } from "./datagrid.component";
import { Fill } from "./fill.pipe";
import { createTemplateRenderer } from "./datagrid.row.actions"

@NgModule({
    declarations: [
        DataGrid,
        Fill, 
        createTemplateRenderer("item", "index")
    ],
    imports: [CommonModule, FormsModule],
    exports: [
        DataGrid,
        Fill
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DataGridModule { }