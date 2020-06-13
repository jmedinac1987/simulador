import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecttransactiontwoComponent } from './selecttransactiontwo.component';

describe('SelecttransactiontwoComponent', () => {
  let component: SelecttransactiontwoComponent;
  let fixture: ComponentFixture<SelecttransactiontwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecttransactiontwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecttransactiontwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
