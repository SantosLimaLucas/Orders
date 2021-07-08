import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/shared/model/products.model';
import { ProductsService } from 'src/app/shared/service/products.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductsFormDialogComponent } from '../products-form-dialog/products-form-dialog.component';
import { Orders } from 'src/app/shared/model/orders.models';
import { OrdersService } from 'src/app/shared/service/orders.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  productsList: Products[] = [];
  ordersList: Orders[] = [];

  constructor(
    public productService: ProductsService,
    private orderService: OrdersService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.getOrders();
  }

  getProducts(){
    this.productService.getProducts().subscribe(data => {
      this.productsList = data;
    });
  }

  getOrders(){
    this.orderService.getOrders().subscribe(data => {
      this.ordersList = data;
    });
  }

  deleteProduct(productId: string){
    this.productService.deleteProducts(productId).subscribe(
      () => console.log('')
    );
    this.getProducts()
  }
  deleteOrder(orderId: string){
    this.orderService.deleteOrders(orderId).subscribe(
      () => console.log('')
    );
    this.getOrders()
  }

}
