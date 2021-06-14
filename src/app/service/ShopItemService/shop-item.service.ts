import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApiService} from '../BaseApiService/base-api.service';
import {Promotion} from '../../components/add-promotion/model/Promotion';
import {ShopItem} from '../../components/add-shop-item/model/ShopItem';
import {ShopItemRequest} from '../../components/add-shop-item/model/ShopItemRequest';
import {DataFilter} from '../../components/products/model/DataFilter';

@Injectable({
  providedIn: 'root'
})
export class ShopItemService {

  constructor(private http: HttpClient,
              protected options: BaseApiService) {
  }

  public getShopItems(): Promise<any> {
    return this.http.get(this.options.url() + '/shop-items').toPromise();
  }

  public addShopItem(shopItem: ShopItemRequest): Promise<any> {
    return this.http.post(this.options.url() + '/add-shop-item', shopItem).toPromise();
  }

  public search(filters: DataFilter): Promise<any>  {
    return this.http.post(this.options.url() + '/search', {filters}).toPromise();
  }

  public delete(id: number): Promise<{} | any> {
    return this.http.delete(this.options.url() + '/delete-shop-item/' + id).toPromise();
  }
  public updateItem(id: number, shopItem: ShopItemRequest): Promise<any> {
    return this.http.put(this.options.url() + '/update-shop-item/' + id, shopItem).toPromise();
  }
}
