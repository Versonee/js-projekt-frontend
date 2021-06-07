import { Component, OnInit } from '@angular/core';
import {PromotionService} from '../../service/PromotionService/promotion.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ShopService} from '../../service/ShopService/shop.service';

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.scss'],
  providers: [MatSnackBar]
})
export class AddShopComponent implements OnInit {

  public name = '';
  types: string[] = [];

  constructor(private shopService: ShopService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }


  public addShop(): void {
    if (!this.name) { return; }
    this.shopService.addShop(this.name).then(e => this.snackBar.open('Shop added successfully!', 'Exit', {duration: 4000}));
    this.name = '';
  }

}
