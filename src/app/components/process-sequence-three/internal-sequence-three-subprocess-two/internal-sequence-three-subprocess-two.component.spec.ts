import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalSequenceThreeSubprocessTwoComponent } from './internal-sequence-three-subprocess-two.component';

describe('InternalSequenceThreeSubprocessTwoComponent', () => {
  let component: InternalSequenceThreeSubprocessTwoComponent;
  let fixture: ComponentFixture<InternalSequenceThreeSubprocessTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalSequenceThreeSubprocessTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalSequenceThreeSubprocessTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
