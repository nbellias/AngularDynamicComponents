import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChildViewComponent } from './child-view/child-view.component';

@Component({
  selector: 'app-product-reference-table',
  standalone: true,
  imports: [RouterModule, CommonModule, ChildViewComponent],
  templateUrl: './product-reference-table.component.html',
  styleUrl: './product-reference-table.component.css'
})
export class ProductReferenceTableComponent {
  @Input() items!: any;
  @ViewChild('productViewTableTemplate') childComponent!: ChildViewComponent;

}
