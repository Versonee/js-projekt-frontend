import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ProductsComponent} from './components/products/products.component';
import {AddToDatabaseComponent} from './components/add-to-database/add-to-database.component';
import {AddPromotionComponent} from './components/add-promotion/add-promotion.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddProducerComponent } from './components/add-producer/add-producer.component';
import { AddShopComponent } from './components/add-shop/add-shop.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddShopItemComponent } from './components/add-shop-item/add-shop-item.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PageNotFoundComponent,
        ProductsComponent,
        AddToDatabaseComponent,
        AddPromotionComponent,
        AddProducerComponent,
        AddShopComponent,
        AddProductComponent,
        AddShopItemComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatFormFieldModule,
        NoopAnimationsModule
    ],
    providers: [HttpClient],
    bootstrap: [AppComponent]
})
export class AppModule {
}
