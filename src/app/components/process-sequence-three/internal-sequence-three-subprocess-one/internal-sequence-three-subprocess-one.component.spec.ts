import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalSequenceThreeSubprocessOneComponent } from './internal-sequence-three-subprocess-one.component';

describe('InternalSequenceThreeSubprocessOneComponent', () => {
  let component: InternalSequenceThreeSubprocessOneComponent;
  let fixture: ComponentFixture<InternalSequenceThreeSubprocessOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalSequenceThreeSubprocessOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalSequenceThreeSubprocessOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
