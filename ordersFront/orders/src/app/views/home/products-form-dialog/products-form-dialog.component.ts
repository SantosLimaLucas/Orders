import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
  selector: 'app-products-form-dialog',
  templateUrl: './products-form-dialog.component.html',
  styleUrls: ['./products-form-dialog.component.css']
})
export class ProductsFormDialogComponent implements OnInit {
  public productsForm!: FormGroup; 

  constructor(
    private fb: FormBuilder, 
    private rest: ProductsService,
    public dialogRef: MatDialogRef<ProductsFormDialogComponent>,
  ) { }

  ngOnInit(): void {
    this.productsForm = this.fb.group({
      name:['', [Validators.required]],
      price:['', [Validators.required]],
      category:['', [Validators.required]]
    });
  }

  createProduct(){
    this.rest.postProducts(this.productsForm.value).subscribe(result => {});
    this.dialogRef.close();
    this.productsForm.reset();
    window.location.reload();
  }

  cancel(): void {
    this.dialogRef.close();
    this.productsForm.reset();    
  }

  
}
