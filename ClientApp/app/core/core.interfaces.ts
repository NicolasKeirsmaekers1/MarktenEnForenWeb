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

export interface IResouce<TResource> {
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
    embedded: IResouce<TResource>;
    page: IPage;
}

export interface IEnumerableResponse<T>{
    response: T[];
}