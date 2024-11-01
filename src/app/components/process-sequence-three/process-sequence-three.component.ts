import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StepViewComponent } from '../step-view/step-view.component';
import { InternalSequenceThreeSubprocessOneComponent } from './internal-sequence-three-subprocess-one/internal-sequence-three-subprocess-one.component';
import { InternalSequenceTwoSubprocessOneComponent } from '../process-sequence-two/internal-sequence-two-subprocess-one/internal-sequence-two-subprocess-one.component';
import { InternalSequenceTwoSubprocessTwoComponent } from '../process-sequence-two/internal-sequence-two-subprocess-two/internal-sequence-two-subprocess-two.component';
import { InternalSequenceThreeSubprocessThreeComponent } from './internal-sequence-three-subprocess-three/internal-sequence-three-subprocess-three.component';
import { InternalSequenceThreeSubprocessTwoComponent } from './internal-sequence-three-subprocess-two/internal-sequence-three-subprocess-two.component';

@Component({
  selector: 'app-process-sequence-three',
  standalone: true,
  imports: [
    RouterModule, 
    StepViewComponent, 
    InternalSequenceThreeSubprocessOneComponent, 
    InternalSequenceThreeSubprocessTwoComponent, 
    InternalSequenceThreeSubprocessThreeComponent
  ],
  templateUrl: './process-sequence-three.component.html',
  styleUrl: './process-sequence-three.component.css'
})
export class ProcessSequenceThreeComponent {
  processes = [
    {
      title: 'Step 31',
      description: 'This is the first step in process THREE.'
    },
    {
      title: 'Step 32',
      description: 'This is the second step in process THREE.'
    },
    {
      title: 'Step 33',
      description: 'This is the third step in process THREE.'
    },
    {
      title: 'Step 34',
      description: 'This is the fourth step in process THREE.'
    }
  ];
  idx = 0;

  selectTemplate(i: number): any {
    switch (i) {
      case 0:
        return InternalSequenceThreeSubprocessOneComponent;
      case 1:
        return InternalSequenceThreeSubprocessTwoComponent;
      case 2:
        return InternalSequenceThreeSubprocessThreeComponent;
      default:
        return null;
    }
  }
  
  processCompleted() {
    console.log('Process sequence THREE finished!');
  }
}
