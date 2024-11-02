import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChildViewComponent } from './child-view/child-view.component';

@Component({
  selector: 'app-product-reference',
  standalone: true,
  imports: [RouterModule, CommonModule, ChildViewComponent],
  templateUrl: './product-reference.component.html',
  styleUrl: './product-reference.component.css'
})
export class ProductReferenceComponent {
  @Input() items!: any;
  @ViewChild('productViewTemplate') childComponent!: ChildViewComponent;
  currentItem: any;

  ngOnInit() {
    this.currentItem = this.items[0];
  }

  ngAfterViewInit() {
    this.childComponent.someMethod();
  }

  viewEachItem(): any {
    // Rotate through each item in the list.
    // If the rotation reaches the end, start over.
    this.currentItem = this.items[this.items.indexOf(this.currentItem) + 1] || this.items[0];
    this.childComponent.item = this.currentItem;
  }
}
