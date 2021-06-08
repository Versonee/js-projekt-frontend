import {Shop} from '../../add-shop/model/Shop';
import {Promotion} from '../../add-promotion/model/Promotion';
import {Product} from '../../add-product/model/Product';
import {SortOption} from './SortOption';

export interface DataFilter{
    name?: string | undefined;
    available?: number | undefined;
    price?: number | undefined;
    shop?: Shop | undefined;
    product?: Product | undefined;
    promotion?: Promotion | undefined;
    sortBy?: SortOption | undefined;
}
