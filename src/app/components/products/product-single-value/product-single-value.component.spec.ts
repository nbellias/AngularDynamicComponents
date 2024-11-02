import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSingleValueComponent } from './product-single-value.component';

describe('ProductSingleValueComponent', () => {
  let component: ProductSingleValueComponent;
  let fixture: ComponentFixture<ProductSingleValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSingleValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSingleValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
