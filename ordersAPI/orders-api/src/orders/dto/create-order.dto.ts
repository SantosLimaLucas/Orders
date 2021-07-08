import { Product } from "src/products/entities/product.entity"

export class CreateOrderDto {
    id: string
    TotalPrice: number
    Productslist: Product[]
}
