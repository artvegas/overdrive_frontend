import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Users } from '../models/users/users';

const apiUrl = "http://localhost:8080/api/users/profile";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  getUserDetails() {
    return this.http.get<Users>(apiUrl);
  }
}
