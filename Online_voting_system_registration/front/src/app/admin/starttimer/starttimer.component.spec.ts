import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarttimerComponent } from './starttimer.component';

describe('StarttimerComponent', () => {
  let component: StarttimerComponent;
  let fixture: ComponentFixture<StarttimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarttimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarttimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
