import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReferenceTableComponent } from './product-reference-table.component';

describe('ProductReferenceTableComponent', () => {
  let component: ProductReferenceTableComponent;
  let fixture: ComponentFixture<ProductReferenceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductReferenceTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductReferenceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
