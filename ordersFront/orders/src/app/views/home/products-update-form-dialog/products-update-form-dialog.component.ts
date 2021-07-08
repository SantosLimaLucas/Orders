import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
  selector: 'app-products-update-form-dialog',
  templateUrl: './products-update-form-dialog.component.html',
  styleUrls: ['./products-update-form-dialog.component.css']
})
export class ProductsUpdateFormDialogComponent implements OnInit {
  public productsForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private rest: ProductsService,
    public dialogRef: MatDialogRef<ProductsUpdateFormDialogComponent>,
  ) { }

  ngOnInit(): void {
    this.productsForm = this.fb.group({
      id:['', [Validators.required]],
      name:['', [Validators.required]],
      price:['', [Validators.required]],
      category:['', [Validators.required]]
    });
  }

  updateProduct(){
    this.rest.updateProducts(this.productsForm.value).subscribe(result => {});
    this.dialogRef.close();
    this.productsForm.reset();
    window.location.reload();
  }
  cancel(): void {
    this.dialogRef.close();
    this.productsForm.reset();     
  }

}
