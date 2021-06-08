import {Component, OnInit} from '@angular/core';
import {ShopService} from '../../service/ShopService/shop.service';
import {ShopItemService} from '../../service/ShopItemService/shop-item.service';
import {ShopItem} from '../add-shop-item/model/ShopItem';
import {DataFilter} from './model/DataFilter';
import {Promotion} from '../add-promotion/model/Promotion';
import {Product} from '../add-product/model/Product';
import {Shop} from '../add-shop/model/Shop';
import {PromotionService} from '../../service/PromotionService/promotion.service';
import {ProductService} from '../../service/ProductService/product.service';
import {SortOption} from './model/SortOption';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public filter: DataFilter = {
    available: undefined,
    price: undefined,
    product: undefined,
    promotion: undefined,
    shop: undefined
  };
  public sortBy: string | undefined;
  public shops: Shop[] = [];
  public products: Product[] = [];
  public promotions: Promotion[] = [];
  public sortByOptions: SortOption[] = [
      SortOption.available,
      SortOption.price
  ];
  data: ShopItem[] = [];
  filteredData: ShopItem[] = [];
  constructor(private shopItemService: ShopItemService,
              private promotionService: PromotionService,
              private productService: ProductService,
              private shopService: ShopService) {
  }

  ngOnInit(): void {
    this.getItems();
    this.getPromotions();
    this.getProducts();
    this.getShops();
  }

  public getPromotions(): void {
    this.promotionService.getPromotions().then((data: Promotion[]) => this.promotions = data);
  }
  public getProducts(): void{
    this.productService.getProducts().then((data: Product[]) => this.products = data);
  }
  public getShops(): void{
    this.shopService.getShops().then((data: Shop[]) => this.shops = data );
  }
  public getItems(): void{
    this.shopItemService.getShopItems().then((data: ShopItem[]) => {
      this.data = data;
      this.filteredData = data;
    });
  }

  public applyFilters(): void {
    if (this.filter.available !== undefined){
      // @ts-ignore
      this.filteredData = this.data.filter(el => el.available >= this.filter.available);
    }
    if (this.filter.price !== undefined){
      // @ts-ignore
      this.filteredData = this.filteredData.filter(el => el.price <= this.filter.price);
    }
    if (this.filter.shop !== undefined){
      // @ts-ignore
      this.filteredData = this.filteredData.filter(el => el.shop.id === this.filter.shop.id);
    }
    if (this.filter.product !== undefined){
      // @ts-ignore
      this.filteredData = this.filteredData.filter(el => el.product.id === this.filter.product.id);
    }
    if (this.filter.promotion !== undefined){
      // @ts-ignore
      this.filteredData = this.filteredData.filter(el => el.promotion.id === this.filter.promotion.id);
    }
    if (this.sortBy !== undefined){
      // @ts-ignore
      this.filteredData.sort((el1, el2) => el1[this.sortBy] - el2[this.sortBy]);


    }
  }

  public clearFilters(): void {
    this.filteredData = this.data;
    this.filter.available = undefined;
    this.filter.price = undefined;
    this.filter.product = undefined;
    this.filter.promotion = undefined;
    this.filter.shop = undefined;
    this.sortBy = undefined;
  }
}
