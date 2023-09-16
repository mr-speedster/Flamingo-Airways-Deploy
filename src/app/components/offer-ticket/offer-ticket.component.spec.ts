import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferTicketComponent } from './offer-ticket.component';

describe('OfferTicketComponent', () => {
  let component: OfferTicketComponent;
  let fixture: ComponentFixture<OfferTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferTicketComponent]
    });
    fixture = TestBed.createComponent(OfferTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
