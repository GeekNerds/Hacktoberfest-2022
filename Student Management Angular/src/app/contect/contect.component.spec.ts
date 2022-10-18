import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContectComponent } from './contect.component';

describe('ContectComponent', () => {
  let component: ContectComponent;
  let fixture: ComponentFixture<ContectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
