import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecttypeaccountComponent } from './selecttypeaccount.component';

describe('SelecttypeaccountComponent', () => {
  let component: SelecttypeaccountComponent;
  let fixture: ComponentFixture<SelecttypeaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecttypeaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecttypeaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
