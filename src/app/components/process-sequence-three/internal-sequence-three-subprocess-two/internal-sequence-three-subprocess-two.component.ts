import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-internal-sequence-three-subprocess-two',
  standalone: true,
  imports: [],
  templateUrl: './internal-sequence-three-subprocess-two.component.html',
  styleUrl: './internal-sequence-three-subprocess-two.component.css'
})
export class InternalSequenceThreeSubprocessTwoComponent {
  @Input() count!: number;
}

