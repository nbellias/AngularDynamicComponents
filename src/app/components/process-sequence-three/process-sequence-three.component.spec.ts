import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessSequenceThreeComponent } from './process-sequence-three.component';

describe('ProcessSequenceThreeComponent', () => {
  let component: ProcessSequenceThreeComponent;
  let fixture: ComponentFixture<ProcessSequenceThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessSequenceThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessSequenceThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
