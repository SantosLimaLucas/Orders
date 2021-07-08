import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersUpdateFormDialogComponent } from './orders-update-form-dialog.component';

describe('OrdersUpdateFormDialogComponent', () => {
  let component: OrdersUpdateFormDialogComponent;
  let fixture: ComponentFixture<OrdersUpdateFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersUpdateFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersUpdateFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
