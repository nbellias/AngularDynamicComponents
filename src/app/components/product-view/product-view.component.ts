import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css',
})
export class ProductViewComponent {
  @Input() products!: any;
  @Input() componentToUse: any;

  @Output() productChange = new EventEmitter<any>();

  doSomethingWithAProduct(product: any) {
    console.log('ProductViewComponent: Doing something with the product...');
    this.productChange.emit(product);
  }
}
