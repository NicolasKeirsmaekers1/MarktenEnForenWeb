import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";

@Component({
    selector: "mafo-klant",
    templateUrl: "./html/klant.component.html"
})

export class KlantComponent {
    @Input() data: any;
}