import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactioncosttwoComponent } from './transactioncosttwo.component';

describe('TransactioncosttwoComponent', () => {
  let component: TransactioncosttwoComponent;
  let fixture: ComponentFixture<TransactioncosttwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactioncosttwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactioncosttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
