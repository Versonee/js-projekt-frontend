import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApiService} from '../BaseApiService/base-api.service';

@Injectable({
    providedIn: 'root'
})
export class ShopService {

    constructor(private http: HttpClient,
                protected options: BaseApiService) {
    }

    public getShops(): any{
        return this.http.get(this.options.url() + '/shops', ).toPromise();
    }

    public addShop(name: string): Promise<any> {
        return this.http.post(this.options.url() + '/add-shop', {name}).toPromise();
    }
}
