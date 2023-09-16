import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FlightData } from 'src/app/data/flight-data';

@Component({
  selector: 'app-available-ticket-table',
  templateUrl: './available-ticket-table.component.html',
  styleUrls: ['./available-ticket-table.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AvailableTicketTableComponent implements OnInit{

  dtOptions: DataTables.Settings = {};

  flightData  = FlightData

  constructor() { }
   
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }
}
