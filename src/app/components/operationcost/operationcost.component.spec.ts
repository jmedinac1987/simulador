import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationcostComponent } from './operationcost.component';

describe('OperationcostComponent', () => {
  let component: OperationcostComponent;
  let fixture: ComponentFixture<OperationcostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationcostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationcostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
