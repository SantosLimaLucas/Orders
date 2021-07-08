import {PrimaryGeneratedColumn} from 'typeorm';

export class CreateProductDto {
    id: string;
    name: string;
    price: number;
    category: string;
}
