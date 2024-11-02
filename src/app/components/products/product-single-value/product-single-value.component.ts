import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-single-value',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product-single-value.component.html',
  styleUrl: './product-single-value.component.css'
})
export class ProductSingleValueComponent {
  @Input() items!: any;
  currentItem: any;

  ngOnInit() {
    this.currentItem = this.items[0];
  }

  viewEachItem(): any {
    // Rotate through each item in the list.
    // If the rotation reaches the end, start over.
    this.currentItem = this.items[this.items.indexOf(this.currentItem) + 1] || this.items[0];
  }
}
