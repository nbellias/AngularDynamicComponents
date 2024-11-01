import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-internal-sequence-three-subprocess-three',
  standalone: true,
  imports: [],
  templateUrl: './internal-sequence-three-subprocess-three.component.html',
  styleUrl: './internal-sequence-three-subprocess-three.component.css'
})
export class InternalSequenceThreeSubprocessThreeComponent {
  @Input() count!: number;
}
