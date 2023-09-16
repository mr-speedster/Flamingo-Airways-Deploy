import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferTicketSliderComponent } from './offer-ticket-slider.component';

describe('OfferTicketSliderComponent', () => {
  let component: OfferTicketSliderComponent;
  let fixture: ComponentFixture<OfferTicketSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferTicketSliderComponent]
    });
    fixture = TestBed.createComponent(OfferTicketSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
