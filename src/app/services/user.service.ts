import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interface/User';
import {Observable} from 'rxjs';
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpService = inject(HttpService);

  createUser(newUser: User): Observable<User> {
    let createdUser = this.httpService.postUser(newUser);

    if(createdUser !== null) {
      return createdUser;
    } else {
      throw new Error("User already exists!");
    }
  }

  getUserList() {
    return this.httpService.getAllUsers()
  }


  constructor() { }
}
