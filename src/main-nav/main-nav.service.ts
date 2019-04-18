import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiUrl = "http://localhost:8080/api/users/logout";

@Injectable({
  providedIn: 'root'
})
export class MainNavService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  logoutUser(){
    return this.http.get(apiUrl);
  }
}
