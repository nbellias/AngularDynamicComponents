import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessSequenceOneComponent } from './process-sequence-one.component';

describe('ProcessSequenceOneComponent', () => {
  let component: ProcessSequenceOneComponent;
  let fixture: ComponentFixture<ProcessSequenceOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessSequenceOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessSequenceOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
