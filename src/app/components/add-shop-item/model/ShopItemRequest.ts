import {Shop} from '../../add-shop/model/Shop';
import {Product} from '../../add-product/model/Product';
import {Promotion} from '../../add-promotion/model/Promotion';

export interface ShopItemRequest{
    price: number | undefined;
    available: number | undefined;
    shop: Shop | undefined;
    product: Product | undefined;
    promotion?: Promotion | undefined;
}
