export interface IQueryParameters {
    page: number;
    pageSize: number;
    sort?: Array<string>;
}

export interface IPage {
    number: number;
    size: number;
    totalElements: number;
    totalPages: number;
}

export interface IResouce {
    resourceList: any[];
}

export interface IResource<TResource> {
    resourceList: TResource[];
}

export interface ILinks {
    first: ILink;
    prev: ILink;
    self: ILink;
    next: ILink;
    last: ILink;
}

export interface ILink {
    href: string;
}

export interface IPagedResult<TResource> {
    links?: ILinks;
    embedded: IResource<TResource>;
    page: IPage;
}

export enum SortOrder {
    Unsorted,
    Ascending,
    Descending
}

export interface IColumnOptions {
    field: string;
    title?: string;
    sortable?: boolean ;
    sort?: SortOrder;
    width?: string;
}

export interface IGridOptions {
    stripedRows?: boolean;
    tableBordered?: boolean;
    hoverRows?: boolean;
    condensedTable?: boolean;
    responsive?: boolean;
    showPaging?: boolean;
    fields: IColumnOptions[];
    pageSizes?: number[];
    maxPagerSize?: number;
    singleSort?: boolean;
}
