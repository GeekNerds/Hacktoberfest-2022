import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdetailsComponent } from './studentdetails.component';

describe('StudentdetailsComponent', () => {
  let component: StudentdetailsComponent;
  let fixture: ComponentFixture<StudentdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
