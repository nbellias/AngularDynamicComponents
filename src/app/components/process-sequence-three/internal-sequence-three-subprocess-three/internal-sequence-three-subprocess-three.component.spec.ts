import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalSequenceThreeSubprocessThreeComponent } from './internal-sequence-three-subprocess-three.component';

describe('InternalSequenceThreeSubprocessThreeComponent', () => {
  let component: InternalSequenceThreeSubprocessThreeComponent;
  let fixture: ComponentFixture<InternalSequenceThreeSubprocessThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalSequenceThreeSubprocessThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalSequenceThreeSubprocessThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
