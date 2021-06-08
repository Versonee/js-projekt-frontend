import {Producer} from '../../add-producer/model/Producer';

export interface ProductRequest{
    name: string;
    producers: Producer[];
}
