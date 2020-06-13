import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintreceipttwoComponent } from './printreceipttwo.component';

describe('PrintreceipttwoComponent', () => {
  let component: PrintreceipttwoComponent;
  let fixture: ComponentFixture<PrintreceipttwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintreceipttwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintreceipttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
