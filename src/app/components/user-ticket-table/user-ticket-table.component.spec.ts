import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTicketTableComponent } from './user-ticket-table.component';

describe('UserTicketTableComponent', () => {
  let component: UserTicketTableComponent;
  let fixture: ComponentFixture<UserTicketTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTicketTableComponent]
    });
    fixture = TestBed.createComponent(UserTicketTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
