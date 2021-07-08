import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';


@Injectable()
export class ProductsService {
  

  create(createProductDto: CreateProductDto) {

    return "TEste"
      
  }

  findAll() {
    return "TEste"
  }

  findOne(id: number) {
    return "TEste"
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return "TEste"
  }

  remove(id: number) {
    return "TEste"
  }
}
