import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-internal-sequence-two-subprocess-one',
  standalone: true,
  imports: [],
  templateUrl: './internal-sequence-two-subprocess-one.component.html',
  styleUrl: './internal-sequence-two-subprocess-one.component.css'
})
export class InternalSequenceTwoSubprocessOneComponent {
  @Input() count!: number;
}
