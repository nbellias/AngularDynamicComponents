import { Component } from '@angular/core';
import { StepViewComponent } from '../step-view/step-view.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-process-sequence-one',
  standalone: true,
  imports: [RouterModule, StepViewComponent],
  templateUrl: './process-sequence-one.component.html',
  styleUrl: './process-sequence-one.component.css'
})
export class ProcessSequenceOneComponent {
  processes = [
    {
      title: 'Step 11',
      description: 'This is the first step in process ONE.'
    },
    {
      title: 'Step 12',
      description: 'This is the second step in process ONE.'
    },
    {
      title: 'Step 13',
      description: 'This is the third step in process ONE.'
    }
  ];
  idx = 0;
  
  processCompleted() {
    console.log('Process sequence ONE finished!');
  }

}
