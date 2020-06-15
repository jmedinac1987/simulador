import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecttransactionComponent } from './selecttransaction.component';

describe('SelecttransactionComponent', () => {
  let component: SelecttransactionComponent;
  let fixture: ComponentFixture<SelecttransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecttransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecttransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
