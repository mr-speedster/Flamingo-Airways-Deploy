import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableTicketPageComponent } from './available-ticket-page.component';

describe('AvailableTicketPageComponent', () => {
  let component: AvailableTicketPageComponent;
  let fixture: ComponentFixture<AvailableTicketPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableTicketPageComponent]
    });
    fixture = TestBed.createComponent(AvailableTicketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
