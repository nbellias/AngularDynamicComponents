import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-view.component.html',
  styleUrl: './child-view.component.css',
})
export class ChildViewComponent {
  @Input() items!: any;

  someMethod() {
    if (this.items) {
      for (let i = 0; i < this.items.length; i++) {
        console.log(
          `Product: ${this.items[i].name}, Price: ${this.items[i].price}, Description: ${this.items[i].description}`
        );
      }
    } else console.log('No item selected.');
  }

  getPriceSum(): number {
    return this.items.reduce((acc: number, item: any) => acc + item.price, 0);
  }
}
