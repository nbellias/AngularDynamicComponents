import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-internal-sequence-three-subprocess-one',
  standalone: true,
  imports: [],
  templateUrl: './internal-sequence-three-subprocess-one.component.html',
  styleUrl: './internal-sequence-three-subprocess-one.component.css'
})
export class InternalSequenceThreeSubprocessOneComponent {
  @Input() count!: number;
}

