import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FlightTickets } from 'src/app/data/ticket-data';

@Component({
  selector: 'app-user-ticket-table',
  templateUrl: './user-ticket-table.component.html',
  styleUrls: ['./user-ticket-table.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class UserTicketTableComponent implements OnInit{

  dtOptions: DataTables.Settings = {};

  ticketData = FlightTickets;

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }
}
