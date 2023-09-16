import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MyTicketsPageComponent } from './pages/my-tickets-page/my-tickets-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CustomerCarePageComponent } from './pages/customer-care-page/customer-care-page.component';
import { MyAccountPageComponent } from './pages/my-account-page/my-account-page.component';
import { AvailableTicketPageComponent } from './pages/available-ticket-page/available-ticket-page.component';
import { TicketBookingPageComponent } from './pages/ticket-booking-page/ticket-booking-page.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { OfferPageComponent } from './pages/offer-page/offer-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'my-ticket', component: MyTicketsPageComponent },
  { path: 'offer', component: OfferPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'customer-care', component: CustomerCarePageComponent },
  { path: 'my-account', component: MyAccountPageComponent },
  { path: 'tickets/available', component: AvailableTicketPageComponent },
  { path: 'ticket/booking', component: TicketBookingPageComponent },
  { path: 'ticket', component: TicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
