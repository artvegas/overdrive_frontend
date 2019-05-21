
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const validuser_url = "/api/users/validUser";

@Injectable({
  providedIn: 'root'
})
export class RecoveryService {

  constructor(private http: HttpClient) {
      this.http = http;

  }

  private usernameSource = new BehaviorSubject(null);
  currentUsername = this.usernameSource.asObservable();

  onSubmit(user){
      let username = this.http.post(validuser_url, user, httpOptions);
      this.usernameSource.next(user);
      return username;
  }


}
