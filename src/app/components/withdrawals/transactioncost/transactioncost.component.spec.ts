import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactioncostComponent } from './transactioncost.component';

describe('TransactioncostComponent', () => {
  let component: TransactioncostComponent;
  let fixture: ComponentFixture<TransactioncostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactioncostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactioncostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
