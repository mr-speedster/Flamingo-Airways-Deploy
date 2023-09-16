import { Component } from '@angular/core';
import AirportCodes from 'src/app/data/airport-code.enum';
import IndianAirports from 'src/app/data/indian-airports.enum';

@Component({
  selector: 'app-ticket-search-bar',
  templateUrl: './ticket-search-bar.component.html',
  styleUrls: ['./ticket-search-bar.component.css']
})
export class TicketSearchBarComponent {

  defaultFromPlace:any = "Delhi";
  defaultFromCode:any = "DEL";
  defaultFromName:any = "Indira Gandhi International Airport, Delhi";

  defaultToPlace:any = "Delhi";
  defaultToCode:any = "DEL";
  defaultToName:any = "Indira Gandhi International Airport, Delhi";

  updateDefaultFromValuesDropdown(selectedAirport: any) {
    this.defaultFromPlace = selectedAirport.value;
    this.defaultFromCode = selectedAirport.key;
    this.defaultFromName = Object(IndianAirports)[selectedAirport.key]; 
  }
  updateDefaultToValuesDropdown(selectedAirport: any) {
    this.defaultToPlace = selectedAirport.value;
    this.defaultToCode = selectedAirport.key;
    this.defaultToName = Object(IndianAirports)[selectedAirport.key]; 
  }

  public indianAirports = Object(IndianAirports);
  public airportcode = Object(AirportCodes);
  showDropDown(){
    
  }
}
