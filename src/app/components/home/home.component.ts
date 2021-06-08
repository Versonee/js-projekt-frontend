import {Component, OnInit} from '@angular/core';
import {ShopService} from '../../service/ShopService/shop.service';
import {HttpClient} from '@angular/common/http';
import {ShopsResponse} from '../add-shop/model/ShopsResponse';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {
    }
}
