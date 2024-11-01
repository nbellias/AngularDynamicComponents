import { Component } from '@angular/core';
import { StepViewComponent } from '../step-view/step-view.component';

@Component({
  selector: 'app-processes',
  standalone: true,
  imports: [StepViewComponent],
  templateUrl: './processes.component.html',
  styleUrl: './processes.component.css'
})
export class ProcessesComponent {
  processes = [
    {
      title: 'Step 1',
      description: 'This is the first step.'
    },
    {
      title: 'Step 2',
      description: 'This is the second step.'
    },
    {
      title: 'Step 3',
      description: 'This is the third step.'
    }
  ];
  ind = 0;


  onStepCompleted() {
    console.log('Step completed!');
  }
}
