import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, InMemoryDBService]
})
export class ProductsModule {}
