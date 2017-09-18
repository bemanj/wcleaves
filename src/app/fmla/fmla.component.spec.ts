import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmlaComponent } from './fmla.component';

describe('FmlaComponent', () => {
  let component: FmlaComponent;
  let fixture: ComponentFixture<FmlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
