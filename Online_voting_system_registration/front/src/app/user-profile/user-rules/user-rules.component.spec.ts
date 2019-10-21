import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRulesComponent } from './user-rules.component';

describe('UserRulesComponent', () => {
  let component: UserRulesComponent;
  let fixture: ComponentFixture<UserRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
