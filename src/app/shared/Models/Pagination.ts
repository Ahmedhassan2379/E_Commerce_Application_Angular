import { IProducts } from "./Product";

export interface IPagniation {
    pageNumber: number;
    pageSize: number;
    count: number;
    items: IProducts[];
}