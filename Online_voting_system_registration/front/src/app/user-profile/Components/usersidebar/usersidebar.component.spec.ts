import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersidebarComponent } from './usersidebar.component';

describe('UsersidebarComponent', () => {
  let component: UsersidebarComponent;
  let fixture: ComponentFixture<UsersidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
