import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Products } from 'src/app/shared/model/products.model';
import { ProductsService } from 'src/app/shared/service/products.service';
import { OrdersService } from 'src/app/shared/service/orders.service';

@Component({
  selector: 'app-order-form-dialog',
  templateUrl: './order-form-dialog.component.html',
  styleUrls: ['./order-form-dialog.component.css']
})
export class OrderFormDialogComponent implements OnInit {
  public ordersForm!: FormGroup;
  productsList: Products[] = [];

  constructor(
    private fb: FormBuilder,
    public productService: ProductsService,
    private orderService: OrdersService,
    public dialogRef: MatDialogRef<OrderFormDialogComponent>,
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.productsList = data;
    });
    this.ordersForm = this.fb.group({
      Productslist:  ['', [Validators.required]],
    });
  }
  createOrder(v: any){
    var selectedProductsList: string = '{"Productslist":[';
    for(var i = 0; i < v.length; i++){
      var productTemp =  '{"name": "' + v[i].value.name+ '","price": "'+ v[i].value.price+'","category": "'+v[i].value.category+'","id": "'+v[i].value.id+'"}';
      selectedProductsList += productTemp
      if(i != v.length-1){
        selectedProductsList+= ',';
      }
    }
    selectedProductsList+=']}';    
    this.orderService.postOrders(selectedProductsList).subscribe(result => {});
    this.dialogRef.close();
    this.ordersForm.reset();
    window.location.reload();
    
  }
  

  cancel(): void {
    this.ordersForm.reset();
    this.dialogRef.close();
  }

}
