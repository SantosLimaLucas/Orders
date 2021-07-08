import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Products } from 'src/app/shared/model/products.model';
import { OrdersService } from 'src/app/shared/service/orders.service';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
  selector: 'app-orders-update-form-dialog',
  templateUrl: './orders-update-form-dialog.component.html',
  styleUrls: ['./orders-update-form-dialog.component.css']
})
export class OrdersUpdateFormDialogComponent implements OnInit {
  public orderForm!: FormGroup;
  productsList: Products[] = [];

  constructor(
    private fb: FormBuilder, 
    private rest: OrdersService,
    public productService: ProductsService,
    public dialogRef: MatDialogRef<OrdersUpdateFormDialogComponent>,
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.productsList = data;
    });
    this.orderForm = this.fb.group({
      Productslist:  ['', [Validators.required]],
      id:['', [Validators.required]]
    });
  }
  cancel(): void {
    this.dialogRef.close();
  }
  updateProduct(v: any){
    var selectedProductsList: string = '{"Productslist":[';
    for(var i = 0; i < v.length; i++){
      var productTemp =  '{"name": "' + v[i].value.name+ '","price": "'+ v[i].value.price+'","category": "'+v[i].value.category+'","id": "'+v[i].value.id+'"}';
      selectedProductsList += productTemp
      if(i != v.length-1){
        selectedProductsList+= ',';
      }
    }
    selectedProductsList+=']}';    
    var id = this.orderForm.value.id
    this.rest.updateOrders(selectedProductsList, id).subscribe(result => {});
    this.dialogRef.close();
    this.orderForm.reset();
    window.location.reload();
  }
}
