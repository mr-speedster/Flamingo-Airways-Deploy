import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";
import { MatStepperModule } from '@angular/material/stepper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { OfferTicketSliderComponent } from './components/offer-ticket-slider/offer-ticket-slider.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { MyTicketsPageComponent } from './pages/my-tickets-page/my-tickets-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CustomerCarePageComponent } from './pages/customer-care-page/customer-care-page.component';
import { MyAccountPageComponent } from './pages/my-account-page/my-account-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { AvailableTicketPageComponent } from './pages/available-ticket-page/available-ticket-page.component';
import { AvailableTicketTableComponent } from './components/available-ticket-table/available-ticket-table.component';
import { TicketSearchBarComponent } from './components/ticket-search-bar/ticket-search-bar.component';
import { TicketBookingPageComponent } from './pages/ticket-booking-page/ticket-booking-page.component';
import { MultiStepFormComponent } from './components/multi-step-form/multi-step-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { UserTicketTableComponent } from './components/user-ticket-table/user-ticket-table.component';
import { OfferPageComponent } from './pages/offer-page/offer-page.component';
import { OfferTicketComponent } from './components/offer-ticket/offer-ticket.component';
import { AboutComponent } from './components/about/about.component';
import { CustomerCareComponent } from './components/customer-care/customer-care.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PreLoaderComponent } from './components/pre-loader/pre-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NavbarComponent,
    HeaderComponent,
    OfferTicketSliderComponent,
    TicketComponent,
    MyTicketsPageComponent,
    AboutPageComponent,
    CustomerCarePageComponent,
    MyAccountPageComponent,
    FooterComponent,
    AvailableTicketPageComponent,
    AvailableTicketTableComponent,
    TicketSearchBarComponent,
    TicketBookingPageComponent,
    MultiStepFormComponent,
    UserTicketTableComponent,
    OfferPageComponent,
    OfferTicketComponent,
    AboutComponent,
    CustomerCareComponent,
    UserProfileComponent,
    PreLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
