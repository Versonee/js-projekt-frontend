import {Component, OnInit} from '@angular/core';
import {PromotionService} from '../../service/PromotionService/promotion.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-add-promotion',
    templateUrl: './add-promotion.component.html',
    styleUrls: ['./add-promotion.component.scss'],
    providers: [MatSnackBar]
})
export class AddPromotionComponent implements OnInit {
    public name = '';
    public type = '';
    public value = 0;
    types: string[] = [];

    constructor(private promotionService: PromotionService,
                private snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
        this.getPromotionTypes();
    }

    public getPromotionTypes(): void {
        this.promotionService.getPromotionTypes().then((data: string[]) => this.types = data);
    }

    public addPromotion(): void {
        if (!this.name && !this.type && !this.value) { return; }
        this.promotionService.addPromotion({
            name: this.name,
            type: this.type,
            value: this.value
        }).then(e => this.snackBar.open('Promotion added successfully!', 'Exit', {duration: 4000}));
        this.name = '';
        this.type = '';
        this.value = 0;
    }
}
