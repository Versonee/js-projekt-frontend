import {Producer} from '../../add-producer/model/Producer';

export interface Product{
    name: string;
    producers: Producer[];
    id: number;
    created: Date;
    updated: Date;
}
