import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { ProductsService } from 'src/products/products.service';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, ProductsService, InMemoryDBService]
})
export class OrdersModule {}
