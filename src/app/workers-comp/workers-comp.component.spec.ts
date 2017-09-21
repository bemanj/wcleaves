import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersCompComponent } from './workers-comp.component';

describe('WorkersCompComponent', () => {
  let component: WorkersCompComponent;
  let fixture: ComponentFixture<WorkersCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
