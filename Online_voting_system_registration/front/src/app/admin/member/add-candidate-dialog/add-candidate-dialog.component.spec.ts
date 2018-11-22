import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCandidateDialogComponent } from './add-candidate-dialog.component';

describe('AddCandidateDialogComponent', () => {
  let component: AddCandidateDialogComponent;
  let fixture: ComponentFixture<AddCandidateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCandidateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCandidateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
