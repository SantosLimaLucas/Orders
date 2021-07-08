import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFormDialogComponent } from './products-form-dialog.component';

describe('ProductsFormDialogComponent', () => {
  let component: ProductsFormDialogComponent;
  let fixture: ComponentFixture<ProductsFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
