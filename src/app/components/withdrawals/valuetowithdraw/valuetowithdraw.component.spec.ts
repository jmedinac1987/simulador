import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuetowithdrawComponent } from './valuetowithdraw.component';

describe('ValuetowithdrawComponent', () => {
  let component: ValuetowithdrawComponent;
  let fixture: ComponentFixture<ValuetowithdrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuetowithdrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuetowithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
