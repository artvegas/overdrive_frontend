import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiUrl = "http://ec2-52-14-196-70.us-east-2.compute.amazonaws.com:8080/api/users/logout";

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  callLogoutUser(){
    return this.http.get(apiUrl);
  }
}
