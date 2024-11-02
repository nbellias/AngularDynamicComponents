import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-view.component.html',
  styleUrl: './child-view.component.css'
})
export class ChildViewComponent {
  @Input() item!: any;

  someMethod(){
    if (this.item)
      console.log(`Product: ${this.item.name}, Price: ${this.item.price}, Description: ${this.item.description}`);
    else
      console.log('No item selected.');
  }
}
