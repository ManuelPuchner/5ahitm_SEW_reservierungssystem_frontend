import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {CustomerComponent} from './pages/customer/customer.component';
import {ReservationListComponent} from './pages/reservation-list/reservation-list.component';
import {MenuComponent} from './components/menu/menu.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {CustomerListComponent} from "./pages/customer-list/customer-list.component";

export const routes: Routes = [
  {path: "customerForm", component: CustomerComponent, title: "CustomerForm"},
  {path: "reservationList", component: ReservationListComponent, title: "ReservationList"},
  {path: "customerList", component: CustomerListComponent, title: "CustomerList"},
  {path: "**", component: NotFoundComponent, title: "NotFound"},
];
