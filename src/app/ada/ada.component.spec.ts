import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaComponent } from './ada.component';

describe('AdaComponent', () => {
  let component: AdaComponent;
  let fixture: ComponentFixture<AdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
