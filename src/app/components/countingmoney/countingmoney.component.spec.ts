import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountingmoneyComponent } from './countingmoney.component';

describe('CountingmoneyComponent', () => {
  let component: CountingmoneyComponent;
  let fixture: ComponentFixture<CountingmoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountingmoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountingmoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
