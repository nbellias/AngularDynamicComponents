import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalSequenceTwoSubprocessTwoComponent } from './internal-sequence-two-subprocess-two.component';

describe('InternalSequenceTwoSubprocessTwoComponent', () => {
  let component: InternalSequenceTwoSubprocessTwoComponent;
  let fixture: ComponentFixture<InternalSequenceTwoSubprocessTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalSequenceTwoSubprocessTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalSequenceTwoSubprocessTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
