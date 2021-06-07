import { Component, OnInit } from '@angular/core';
import {PromotionService} from '../../service/PromotionService/promotion.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProducerService} from '../../service/ProducerService/producer.service';
import {Producer} from '../add-producer/model/Producer';
import {ProductService} from '../../service/ProductService/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  providers: [MatSnackBar]
})
export class AddProductComponent implements OnInit {

  public name = '';
  public selectedProducers: Producer[] = [];
  public producers: Producer[] = [];
  public value = 0;
  types: string[] = [];

  constructor(private productService: ProductService,
              private producerService: ProducerService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getProducers();
  }

  public getProducers(): void {
    this.producerService.getProducers().then((data: Producer[]) => this.producers = data);
  }

  public addProduct(): void {
    if (!this.name && !this.producers) { return; }
    this.productService.addProduct({
      name: this.name,
      producers: this.selectedProducers
    }).then(e => this.snackBar.open('Product added successfully!', 'Exit', {duration: 4000}));
    this.name = '';
    this.selectedProducers = [];
  }

}
