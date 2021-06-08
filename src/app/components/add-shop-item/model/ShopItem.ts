import {Product} from '../../add-product/model/Product';
import {Promotion} from '../../add-promotion/model/Promotion';
import {Shop} from '../../add-shop/model/Shop';

export interface ShopItem{
    price: number;
    available: number;
    shop: Shop;
    product: Product;
    promotion: Promotion;
    id: number;
    created: Date;
    updated: Date;
}
