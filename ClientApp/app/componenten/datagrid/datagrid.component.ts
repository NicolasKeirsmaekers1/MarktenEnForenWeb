import { SimpleChanges, Component, Input, Output, EventEmitter, OnInit, OnChanges, ContentChild, TemplateRef } from "@angular/core";
import { Observable } from "rxjs";
import { IColumnOptions, IGridOptions, IPage, IPagedResult, IQueryParameters, SortOrder } from "./datagrid.models";

@Component({
    selector: "dp-datagrid",
    styleUrls: ["./datagrid.component.css"],
    templateUrl: "./datagrid.layout.html"
})
export class DataGrid<TObject> implements OnInit, OnChanges {
    private settings: ISettings = {
        stripedRows: true,
        tableBordered: false,
        hoverRows: true,
        condensedTable: true,
        responsive: true,
        showPaging: true,
        fields: [],
        pageSizes: [10, 25, 50, 100],
        paging: {
            number: 1,
            size: 10,
            totalElements: 0,
            totalPages: 1
        },
        startElement: 1,
        endElement: 1,
        maxPagerSize: 10,
        selectedIndex: -1,
        singleSort: true
    };
    private isLoading: boolean = true;
    private resourceList: any[];
    private dataSource: any[];

    @Input() set options(options: IGridOptions) {
        if (options.stripedRows !== undefined) this.settings.stripedRows = options.stripedRows;
        if (options.tableBordered !== undefined) this.settings.tableBordered = options.tableBordered;
        if (options.hoverRows !== undefined) this.settings.hoverRows = options.hoverRows;
        if (options.condensedTable !== undefined) this.settings.condensedTable = options.condensedTable;
        if (options.responsive !== undefined) this.settings.responsive = options.responsive;
        if (options.showPaging !== undefined) this.settings.showPaging = options.showPaging;
        if (options.fields !== undefined) this.settings.fields = options.fields;
        if (options.pageSizes !== undefined) this.settings.pageSizes = options.pageSizes;
        if (options.maxPagerSize !== undefined) this.settings.maxPagerSize = Math.abs(options.maxPagerSize);
    }
    @Input() data: IPagedResult<any> | any[];
    @Output() fetchData = new EventEmitter<IQueryParameters>();
    @Output() rowClicked = new EventEmitter();
    @Output() rowActionClicked = new EventEmitter();
    @ContentChild("rowActions", {static: false}) rowActions: TemplateRef<any>;
    @ContentChild("rowTemplate", {static: false}) rowTemplate: TemplateRef<any>;

    ngOnChanges(changes: SimpleChanges): void {
        const options = changes["options"];
        if (options && options.isFirstChange()) {
            this.settings.paging.number = 1;
            this.settings.paging.size = this.settings.pageSizes[0] || 10;
        }

        const data = changes["data"];
        if (data && data.currentValue) {
            this.refresh(data.currentValue);
        }
    }

    ngOnInit(): void {
        this.pageSizeChanged();
    }

    private refresh(data: IPagedResult<any> | any[]) {
        const x = this.constructPageResult(data);
        if (x.page.totalPages < this.settings.paging.number) this.settings.paging.number = 1;
        this.settings.paging.totalPages = x.page.totalPages;
        this.settings.paging.totalElements = x.page.totalElements;
        this.settings.endElement = x.page.totalPages === this.settings.paging.number
            ? x.page.totalElements
            : this.settings.paging.number * this.settings.paging.size;
        this.settings.startElement = x.page.totalElements < this.settings.paging.size
            ? 1
            : this.settings.endElement - (x.page.totalPages === this.settings.paging.number
                ? x.page.size
                : this.settings.paging.size - 1);

        this.resourceList = x.embedded.resourceList;
        this.isLoading = false;
    }

    private constructPageResult(data: IPagedResult<any> | any[]): IPagedResult<any> {
        let paged: IPagedResult<any>;
        if (data instanceof Array) {
            this.dataSource = data;
            const start = (this.settings.paging.number - 1) * this.settings.paging.size;
            const end = start + this.settings.paging.size;
            let sub = data.slice(start, end);
            paged = {
                embedded: { resourceList: sub },
                page: {
                    number: this.settings.paging.number,
                    size: this.settings.paging.size,
                    totalElements: data.length,
                    totalPages: Math.ceil(data.length / this.settings.paging.size)
                }
            }
        }
        else if (data.embedded && data.page) paged = data;
        else throw new Error("Invalid data type for grid data Source");
        return paged;
    }

    private pageSizeChanged(): void {
        let page = this.constructQueryParameters();
        if (this.fetchData.observers.length > 0) {
            this.isLoading = true;
            this.fetchData.emit(page);
        } else if (this.dataSource && this.dataSource.length > 0) {
            this.refresh(this.dataSource);
        }
    }

    private sortField($event): void {
        $event.preventDefault();
        $event.stopPropagation();

        if (this.isLoading) return;
        
        const target: Element = $event.target.closest("th");;
        const sort = target.getAttribute("data-sort");
        if (sort) {
            const field = this.settings.fields.filter((val) => {
                return val.field === sort && val.sortable;
            }).shift();
            if (field) {
                if (this.settings.singleSort) {
                    this.settings.fields.forEach(item => {
                        if (item.field !== field.field) item.sort = SortOrder.Unsorted;
                    });
                }
                switch (field.sort) {
                    case SortOrder.Unsorted:
                        field.sort = SortOrder.Ascending;
                        break;
                    case SortOrder.Ascending:
                        field.sort = SortOrder.Descending;
                        break;
                    case SortOrder.Descending:
                        field.sort = SortOrder.Unsorted;
                        break;
                    default:
                        field.sort = SortOrder.Ascending;
                        break;
                }
                this.settings.paging.number = 1;
                this.pageSizeChanged();
            }
        }
    }

    private clickRow($event): void {
        $event.preventDefault();
        $event.stopPropagation();

        if (this.isLoading) return;

        try {
            var cell: Element = $event.target.closest("td");
            if (!cell) return;

            var type = cell.getAttribute("data-type");
            if (type === "actions") {
                var btn: Element = $event.target.closest("[data-action]");
                if (!btn) return;

                var action = btn.getAttribute("data-action");
                if (!action) return;

                var id = btn.getAttribute("data-id");
                if (!id) return;

                this.rowActionClicked.emit({ id: id });
                return;
            }

            if (this.rowClicked.observers.length > 0) {
                let target: Element = cell.parentElement;
                if (target) {
                    var index = Number(target.getAttribute("data-index"));
                    if (index >= 0) {
                        var data = this.resourceList[index];
                        this.settings.selectedIndex = index;
                        this.rowClicked.emit({
                            index: index,
                            data: data
                        });
                    }
                }
            }
        } catch (e) { return; }
    }

    private currentPageChanged($event): void {
        $event.preventDefault();
        $event.stopPropagation();

        if (this.isLoading) return;

        var target: Element = $event.target.closest("a");
        let classList = target.parentElement.classList || new DOMTokenList();
        if (classList.contains("disabled") || classList.contains("active")) return;
        var action = target.getAttribute("data-action");
        switch (action) {
            case "first":
                this.settings.paging.number = 1;
                break;
            case "previous":
                if (this.settings.paging.number > 1)
                    this.settings.paging.number--;
                break;
            case "next":
                if (this.settings.paging.number < this.settings.paging.totalPages)
                    this.settings.paging.number++;
                break;
            case "last":
                this.settings.paging.number = this.settings.paging.totalPages;
                break;
            default:
                var dataPage = Number(target.getAttribute("data-page"));
                this.settings.paging.number = dataPage;
                break;
        }
        this.pageSizeChanged();
    }

    private setTableCss(): any {
        return {
            'table': true,
            'table-striped': this.settings.stripedRows || false,
            'table-bordered': this.settings.tableBordered || false,
            'table-hover': this.settings.hoverRows || false,
            'table-condensed': this.settings.hoverRows || false
        };
    }

    private calculateSortOrder(field: IColumnOptions): any {
        return {
            'glyphicon-sort': field.sortable && (field.sort === SortOrder.Unsorted || !field.sort),
            'glyphicon-sort-by-attributes': field.sortable && field.sort === SortOrder.Ascending,
            'glyphicon-sort-by-attributes-alt': field.sortable && field.sort === SortOrder.Descending
        };
    }

    private pageDisplayContext(): string {
        return this.settings.startElement + " - " + this.settings.endElement + " van " + this.settings.paging.totalElements + " records";
    }

    private constructQueryParameters(): IQueryParameters {
        return {
            page: this.settings.paging.number,
            pageSize: this.settings.paging.size,
            sort: this.settings.fields.filter(x => x.sortable && x.sort !== undefined && x.sort !== SortOrder.Unsorted).map(x => (x.sort === SortOrder.Descending ? "-" : "") + x.field)
        };
    }

    private pageIsVisible(page: number): boolean {
        if (this.settings.maxPagerSize >= this.settings.paging.totalPages) return true;

        let middle = Math.abs(this.settings.maxPagerSize / 2);
        let max = this.settings.paging.number + this.settings.maxPagerSize - (this.settings.paging.number - 1 < middle ? this.settings.paging.number - 1 : middle);
        if (max > this.settings.paging.totalPages + 1) max = this.settings.paging.totalPages + 1;
        let min = max - this.settings.maxPagerSize;
        return page < max && page >= min;
    }

    private displayField(item: Object, field: string): any {
        let value: any = item;
        for (let prop of field.split(".")) {
            value = value[prop];
        }
        return value;
    }

    private isEven(value: number): boolean {
        return value % 2 === 0;
    }
}

interface ISettings extends IGridOptions {
    paging: IPage;
    startElement: number;
    endElement: number;
    selectedIndex: number;
}