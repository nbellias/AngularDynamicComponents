import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css'
})
export class ProductTableComponent {
  @Input() items!: any;

  getPriceSum(): number {
    return this.items.reduce((acc: number, item: any) => acc + item.price, 0);
  }
}
