import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableTicketTableComponent } from './available-ticket-table.component';

describe('AvailableTicketTableComponent', () => {
  let component: AvailableTicketTableComponent;
  let fixture: ComponentFixture<AvailableTicketTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableTicketTableComponent]
    });
    fixture = TestBed.createComponent(AvailableTicketTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
