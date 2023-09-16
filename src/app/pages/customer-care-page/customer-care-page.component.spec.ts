import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCarePageComponent } from './customer-care-page.component';

describe('CustomerCarePageComponent', () => {
  let component: CustomerCarePageComponent;
  let fixture: ComponentFixture<CustomerCarePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerCarePageComponent]
    });
    fixture = TestBed.createComponent(CustomerCarePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
