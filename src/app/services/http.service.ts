import {inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../interface/User";
import {HttpClient} from "@angular/common/http";
import {Reservation} from "../interface/Reservation";
import {ReservationService} from "./reservation.service";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private http = inject(HttpClient)

  constructor() { }


  postUser(user: User): Observable<User> {
    return this.http.post<User>(`/api/customer`, user)
  }

  postReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>("/api/reservations", reservation);
  }

  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>("/api/reservations/list");
  }
}
