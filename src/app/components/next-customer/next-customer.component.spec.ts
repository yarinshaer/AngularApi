import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextCustomerComponent } from './next-customer.component';

describe('NextCustomerComponent', () => {
  let component: NextCustomerComponent;
  let fixture: ComponentFixture<NextCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
