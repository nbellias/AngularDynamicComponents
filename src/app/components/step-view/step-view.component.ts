import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-step-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-view.component.html',
  styleUrl: './step-view.component.css'
})
export class StepViewComponent {
  @Input() count!: number;
  @Input() title!: string;
  @Input() description!: string;
  @Input() templateToUse: any;
  @Input() componentToUse: any;

  @Output() countChange = new EventEmitter<number>();
  
  execute() {
    console.log(`${this.title} is executing...`);
    // Perform step operation, then emit completion
    this.count++;
    this.countChange.emit(this.count);
  }
}
