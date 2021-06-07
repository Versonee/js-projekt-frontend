import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApiService} from '../BaseApiService/base-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProducerService {
  constructor(private http: HttpClient,
              protected options: BaseApiService) {
  }
  public addProducer(name: string): Promise<any> {
    return this.http.post(this.options.url() + '/add-producer', {name}).toPromise();
  }

  public getProducers(): Promise<any>{
    return this.http.get(this.options.url() + '/producers', ).toPromise();
  }
}
