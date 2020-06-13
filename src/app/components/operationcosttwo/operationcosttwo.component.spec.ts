import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationcosttwoComponent } from './operationcosttwo.component';

describe('OperationcosttwoComponent', () => {
  let component: OperationcosttwoComponent;
  let fixture: ComponentFixture<OperationcosttwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationcosttwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationcosttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
