import { Result } from "../infra/productResult";

export interface iProductsService {

    get(id: string): any;

    getAll(qtd: number, page: number ): Promise<Result>;

}