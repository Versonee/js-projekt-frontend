import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApiService} from '../BaseApiService/base-api.service';
import {ProductRequest} from '../../components/add-product/model/ProductRequest';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,
              protected options: BaseApiService) {
  }

  public addProduct(product: ProductRequest): Promise<any> {
    return this.http.post(this.options.url() + '/add-product', product ).toPromise();
  }
  public getProducts(): Promise<any> {
    return this.http.get(this.options.url() + '/products').toPromise();
  }
}
