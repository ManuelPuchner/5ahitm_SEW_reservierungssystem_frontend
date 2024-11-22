import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reservation} from "../interface/Reservation";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private httpService = inject(HttpService);

  constructor() { }

  getReservationList(): Observable<Reservation[]> {
    return this.httpService.getAllReservations()
  }
}
