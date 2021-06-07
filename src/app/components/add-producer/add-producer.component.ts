import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProducerService} from '../../service/ProducerService/producer.service';

@Component({
    selector: 'app-add-producer',
    templateUrl: './add-producer.component.html',
    styleUrls: ['./add-producer.component.scss'],
    providers: [MatSnackBar]
})
export class AddProducerComponent implements OnInit {

    public name = '';

    constructor(private producerService: ProducerService,
                private snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
    }
    public addProducer(): void {
        if (!this.name) { return; }
        this.producerService.addProducer(this.name)
            .then(e => this.snackBar.open('Producer added successfully!', 'Exit', {duration: 4000}));
    }
    public getProducers(): void{

    }

}
