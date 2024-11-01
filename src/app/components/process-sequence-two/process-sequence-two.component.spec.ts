import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessSequenceTwoComponent } from './process-sequence-two.component';

describe('ProcessSequenceTwoComponent', () => {
  let component: ProcessSequenceTwoComponent;
  let fixture: ComponentFixture<ProcessSequenceTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessSequenceTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessSequenceTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
