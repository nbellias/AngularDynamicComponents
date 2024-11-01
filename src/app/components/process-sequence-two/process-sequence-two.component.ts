import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StepViewComponent } from '../step-view/step-view.component';
import { InternalSequenceTwoSubprocessOneComponent } from './internal-sequence-two-subprocess-one/internal-sequence-two-subprocess-one.component';
import { InternalSequenceTwoSubprocessTwoComponent } from './internal-sequence-two-subprocess-two/internal-sequence-two-subprocess-two.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process-sequence-two',
  standalone: true,
  imports: [
    RouterModule,
    StepViewComponent,
    InternalSequenceTwoSubprocessOneComponent,
    InternalSequenceTwoSubprocessTwoComponent,
  ],
  templateUrl: './process-sequence-two.component.html',
  styleUrl: './process-sequence-two.component.css',
})
export class ProcessSequenceTwoComponent {
  processes = [
    {
      title: 'Step 21',
      description: 'This is the first step in process TWO.',
    },
    {
      title: 'Step 22',
      description: 'This is the second step in process TWO.',
    },
    {
      title: 'Step 23',
      description: 'This is the third step in process TWO.',
    },
    {
      title: 'Step 24',
      description: 'This is the fourth step in process TWO.',
    },
    {
      title: 'Step 25',
      description: 'This is the fifth step in process TWO.',
    },
  ];
  count = 0;
  
  selectTemplate(count: number): any {
    switch (count) {
      case 3:
        return InternalSequenceTwoSubprocessOneComponent;
      case 4:
        return InternalSequenceTwoSubprocessTwoComponent;
      default:
        return null;
    }
  }

  processCompleted() {
    console.log('Process sequence TWO finished!');
  }
}
