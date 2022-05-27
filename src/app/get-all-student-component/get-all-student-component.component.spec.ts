import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllStudentComponentComponent } from './get-all-student-component.component';

describe('GetAllStudentComponentComponent', () => {
  let component: GetAllStudentComponentComponent;
  let fixture: ComponentFixture<GetAllStudentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllStudentComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllStudentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
