import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecttransactionthreeComponent } from './selecttransactionthree.component';

describe('SelecttransactionthreeComponent', () => {
  let component: SelecttransactionthreeComponent;
  let fixture: ComponentFixture<SelecttransactionthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecttransactionthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecttransactionthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
