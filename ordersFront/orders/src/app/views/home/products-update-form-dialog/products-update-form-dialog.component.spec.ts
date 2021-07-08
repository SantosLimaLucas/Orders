import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsUpdateFormDialogComponent } from './products-update-form-dialog.component';

describe('ProductsUpdateFormDialogComponent', () => {
  let component: ProductsUpdateFormDialogComponent;
  let fixture: ComponentFixture<ProductsUpdateFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsUpdateFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsUpdateFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
