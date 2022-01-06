import { Component } from "@angular/core"
import { RapportageService } from "./rapportage.service";

@Component({
    templateUrl: './html/rapportage-csv-export.component.html',
    styles: [".well .btn { margin-right: 20px;} a { text-decoration: none; color: inherit !important; } .well { cursor: pointer; }"]
})

export class CsvExportComponent {
    pageTitle: string = 'Csv Export';

    constructor(private service: RapportageService) {}

    download($event) {
        $event.preventDefault();
        $event.stopPropagation();

        var href = $event.target.closest("a");
        if (!href) return;

        var type = href.getAttribute("data-type");
        if (!type) return;

        this.service.download(type);
    }
}