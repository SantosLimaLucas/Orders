import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Product } from 'src/products/entities/product.entity';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Order } from './entities/order.entity';

@Controller('orders')
export class OrdersController {  
  constructor(private orderService: InMemoryDBService<Order>, private readonly productsService: InMemoryDBService<Product>) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    var totalOrder = 0
    for(var x = 0; x < createOrderDto.Productslist.length; x++){
      const valorCompra = createOrderDto.Productslist[x].price
      totalOrder = totalOrder + Number.parseFloat(valorCompra.toString())
    }
    createOrderDto.TotalPrice=totalOrder
    return this.orderService.create(createOrderDto)
  }

  @Get()
  findAll() {
    return this.orderService.getAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.query(data => data.id ==id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: Order) {
    
    var totalOrder = 0
    for(var x = 0; x < updateOrderDto.Productslist.length; x++){
      const valorCompra = updateOrderDto.Productslist[x].price
      totalOrder = totalOrder + Number.parseFloat(valorCompra.toString())
    }
    updateOrderDto.TotalPrice=totalOrder

    this.orderService.query(data => data.id ==id)[0].Productslist = updateOrderDto.Productslist
    this.orderService.query(data => data.id ==id)[0].TotalPrice = updateOrderDto.TotalPrice
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.delete(id);
  }
}
