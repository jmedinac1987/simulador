import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpasswordtwoComponent } from './enterpasswordtwo.component';

describe('EnterpasswordtwoComponent', () => {
  let component: EnterpasswordtwoComponent;
  let fixture: ComponentFixture<EnterpasswordtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpasswordtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpasswordtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
