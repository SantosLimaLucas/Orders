import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface Product extends InMemoryDBEntity{
    name: string;
    price: number;
    category: string;
}
