import { Component } from '@angular/core';

@Component({
    selector: 'breadcrumb-app',
    template: `
        <h2><a href="#"><i class="fa fa-arrow-circle-o-left lighter"></i></a>&nbsp;{{origin}} &gt; {{current}}</h2>
    `
})
export class BreadcrumbComponent {
    origin: string = 'origin';
    current: string = 'current';
}