import { Component, OnInit } from '@angular/core';
import {PromotionService} from '../../service/PromotionService/promotion.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Shop} from '../add-shop/model/Shop';
import {Product} from '../add-product/model/Product';
import {Promotion} from '../add-promotion/model/Promotion';
import {ProductService} from '../../service/ProductService/product.service';
import {ShopService} from '../../service/ShopService/shop.service';
import {ShopItemService} from '../../service/ShopItemService/shop-item.service';

@Component({
  selector: 'app-add-shop-item',
  templateUrl: './add-shop-item.component.html',
  styleUrls: ['./add-shop-item.component.scss'],
  providers: [MatSnackBar]
})
export class AddShopItemComponent implements OnInit {

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
    this.shopItemService.addShopItem({
      price: this.price,
      available: this.available,
      shop: this.shop,
      product: this.product,
      promotion: this.promotion
    }).then(e => this.snackBar.open('Shop Item added successfully!', 'Exit', {duration: 4000}));
    this.price = undefined;
    this.available = undefined;
    this.shop = undefined;
    this.product = undefined;
    this.promotion = undefined;
  }

}
