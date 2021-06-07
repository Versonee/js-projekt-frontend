import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApiService} from '../BaseApiService/base-api.service';
import {Promotion} from '../../components/add-promotion/model/Promotion';

@Injectable({
    providedIn: 'root'
})
export class PromotionService {

    constructor(private http: HttpClient,
                protected options: BaseApiService) {
    }

    public getPromotionTypes(): Promise<any> {
        return this.http.get(this.options.url() + '/promotion-types').toPromise();
    }

    public addPromotion(promotion: Promotion): Promise<any> {
        return this.http.post(this.options.url() + '/add-promotion', promotion).toPromise();
    }

}
