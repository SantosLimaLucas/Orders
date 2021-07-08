import { InMemoryDBEntity } from "@nestjs-addons/in-memory-db";
import { Product } from "src/products/entities/product.entity"

export interface Order extends InMemoryDBEntity{
    TotalPrice: number
    Productslist: Product[]
}
