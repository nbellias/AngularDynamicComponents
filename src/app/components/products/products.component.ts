import { Component } from '@angular/core';
import { ProductViewComponent } from '../product-view/product-view.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductReferenceComponent } from './product-reference/product-reference.component';
import { ProductReferenceTableComponent } from './product-reference-table/product-reference-table.component';
import { ProductSingleValueComponent } from './product-single-value/product-single-value.component';
import { ProductTableComponent } from './product-table/product-table.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    ProductViewComponent,
    ProductListComponent,
    ProductTableComponent,
    ProductReferenceComponent,
    ProductReferenceTableComponent,
    ProductSingleValueComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products = [
    {
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
    },
    {
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
    },
    {
      name: 'Phone Standard',
      price: 299,
      description: 'A standard phone with a standard camera',
    },
  ];
  componentToUse: any;
  rotation = 1;

  changeComponent() {
    console.log(`Rotation ${this.rotation}`);
    switch (this.rotation) {
      case 1:
        this.componentToUse = ProductListComponent;
        break;
      case 2:
        this.componentToUse = ProductTableComponent;
        break;
      case 3:
        this.componentToUse = ProductReferenceComponent;
        break;
      case 4:
        this.componentToUse = ProductReferenceTableComponent;
        break;
      case 5:
        this.componentToUse = ProductSingleValueComponent;
        break;
    }
    this.rotation++;
    if (this.rotation > 5) {
      this.rotation = 1;
    }
  }
}
