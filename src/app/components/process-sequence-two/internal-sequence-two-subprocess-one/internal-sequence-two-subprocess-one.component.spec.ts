import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalSequenceTwoSubprocessOneComponent } from './internal-sequence-two-subprocess-one.component';

describe('InternalSequenceTwoSubprocessOneComponent', () => {
  let component: InternalSequenceTwoSubprocessOneComponent;
  let fixture: ComponentFixture<InternalSequenceTwoSubprocessOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalSequenceTwoSubprocessOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalSequenceTwoSubprocessOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
