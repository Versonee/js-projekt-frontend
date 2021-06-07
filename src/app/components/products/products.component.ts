import { Component, OnInit } from '@angular/core';
import {ShopsResponse} from './Model/ShopsResponse';
import {ShopService} from '../../service/ShopService/shop.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  shops: ShopsResponse[] = [];
  constructor(private shopService: ShopService) {
  }

  ngOnInit(): void {
    this.getShops();
  }
  public getShops(): void{
    this.shopService.getShops().then((data: ShopsResponse[]) => this.shops = data);
  }

}
