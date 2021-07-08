import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Product } from './entities/product.entity';



@Controller('products')
export class ProductsController {
  constructor(private productService: InMemoryDBService<Product>) {}
  

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto)
  }

  @Get()
  findAll() {
    return this.productService.getAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.query(data => data.id ==id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: Product) {
    this.productService.query(data => data.id ==id)[0].category = updateProductDto.category
    this.productService.query(data => data.id ==id)[0].name = updateProductDto.name
    this.productService.query(data => data.id ==id)[0].price = updateProductDto.price    
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.delete(id)
  }
}
