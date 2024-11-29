import {inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../interface/User";
import {HttpClient} from "@angular/common/http";
import {Reservation} from "../interface/Reservation";
import {ReservationService} from "./reservation.service";
import {FieldType} from "../interface/FieldType";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private http = inject(HttpClient)

  constructor() { }


  postUser(user: User): Observable<User> {
    return this.http.post<User>(`/api/customer`, user)
  }

  getAllUsers() {
    return this.http.get<User[]>("/api/customer/list")
  }

  postReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>("/api/reservations", reservation);
  }

  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>("/api/reservations/list");
  }

  getAllFieldTypes() {
    return this.http.get<FieldType[]>("/api/fieldtypes/list")
  }

  postFieldType(type: Omit<FieldType, "id">) {
    return this.http.post<FieldType>("/api/fieldtypes", type)
  }

  deleteFieldType(id: FieldType["id"]) {
    return this.http.delete(`/api/fieldtypes/${id}`)
  }
}
