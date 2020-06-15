import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthervalueComponent } from './othervalue.component';

describe('OthervalueComponent', () => {
  let component: OthervalueComponent;
  let fixture: ComponentFixture<OthervalueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthervalueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthervalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
