import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderFormDialogComponent } from './order-form-dialog/order-form-dialog.component';
import { OrdersUpdateFormDialogComponent } from './orders-update-form-dialog/orders-update-form-dialog.component';
import { ProductsFormDialogComponent } from './products-form-dialog/products-form-dialog.component';
import { ProductsUpdateFormDialogComponent } from './products-update-form-dialog/products-update-form-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addProducts(): void {
    
    const dialogRef = this.dialog.open(ProductsFormDialogComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    
  }
  addOrders(): void {
    const dialogRef = this.dialog.open(OrderFormDialogComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    
  }

  updateProducts(): void {
    const dialogRef = this.dialog.open(ProductsUpdateFormDialogComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    
  }

  updateOrders(): void {
    const dialogRef = this.dialog.open(OrdersUpdateFormDialogComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    
  }
}
