import {Component, Input, OnInit} from '@angular/core';
import {PromotionService} from '../../service/PromotionService/promotion.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Shop} from '../add-shop/model/Shop';
import {Product} from '../add-product/model/Product';
import {Promotion} from '../add-promotion/model/Promotion';
import {ProductService} from '../../service/ProductService/product.service';
import {ShopService} from '../../service/ShopService/shop.service';
import {ShopItemService} from '../../service/ShopItemService/shop-item.service';
import {ShopItem} from './model/ShopItem';

@Component({
  selector: 'app-add-shop-item',
  templateUrl: './add-shop-item.component.html',
  styleUrls: ['./add-shop-item.component.scss'],
  providers: [MatSnackBar]
})
export class AddShopItemComponent implements OnInit {
  @Input() public item: ShopItem | undefined;
  public price: number | undefined;
  public available: number | undefined;
  public shop: Shop | undefined;
  public product: Product | undefined;
  public promotion: Promotion | undefined;

  public shops: Shop[] = [];
  public products: Product[] = [];
  public promotions: Promotion[] = [];
  constructor(private promotionService: PromotionService,
              private productService: ProductService,
              private shopService: ShopService,
              private shopItemService: ShopItemService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getPromotions();
    this.getProducts();
    this.getShops();
    if (this.item){
      this.price = this.item.price;
      this.available = this.item.available;
      this.shop = this.item.shop;
      this.product = this.item.product;
      this.promotion = this.item.promotion;
    }
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

  public addShopItem(): void {
    if (!this.price && !this.available && !this.shop && !this.product) { return; }
    const shopItemRequest = {
      price: this.price,
      available: this.available,
      shop: this.shop,
      product: this.product,
      promotion: this.promotion
    };
    if (this.item){
      this.shopItemService.updateItem(this.item.id, shopItemRequest).
        then(e => this.snackBar.open('Shop Item updated successfully!', 'Exit', {duration: 4000}));
    } else {
      this.shopItemService.addShopItem(shopItemRequest)
          .then(e => this.snackBar.open('Shop Item added successfully!', 'Exit', {duration: 4000}));
    }

    this.price = undefined;
    this.available = undefined;
    this.shop = undefined;
    this.product = undefined;
    this.promotion = undefined;
  }

  public getShop(): string {
    return this.shop?.name || 'Shop';
  }

  public getProduct(): string | undefined {
    return this.product?.name || 'Product';
  }

  public getPromotion(): string {
    return this.promotion?.name || 'Promotion';
  }

  public getPrice(): string {
    return this.price ? '' + this.price : 'Price';
  }

  public getAvailable(): string {
    return this.available ? '' + this.available : 'Available';
  }
}
