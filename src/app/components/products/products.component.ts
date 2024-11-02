import { Component } from '@angular/core';
import { ProductViewComponent } from '../product-view/product-view.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductViewComponent, ProductListComponent],
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
  componentToUse = ProductListComponent;
}
