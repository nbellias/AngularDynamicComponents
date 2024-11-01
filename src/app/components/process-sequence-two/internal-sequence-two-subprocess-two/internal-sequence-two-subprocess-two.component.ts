import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-internal-sequence-two-subprocess-two',
  standalone: true,
  imports: [],
  templateUrl: './internal-sequence-two-subprocess-two.component.html',
  styleUrl: './internal-sequence-two-subprocess-two.component.css'
})
export class InternalSequenceTwoSubprocessTwoComponent {
  @Input() count!: number;

}
