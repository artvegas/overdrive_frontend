import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Users } from '../models/users/users';
import { ComicSeries } from '../models/comics/comic-series'

const apiUrl = "http://localhost:8080/api/users/profile";

const followUrl = "http://localhost:8080/api/series/displayfollows";

const createUrl = "http://localhost:8080/api/series/user";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  getUserDetails() {
    return this.http.get<Users>(apiUrl);
  }

  getFollowedSeries(){
    return this.http.get<ComicSeries[]>(followUrl);
  }

  getCreatedSeries(){
    return this.http.get<ComicSeries[]>(createUrl);
  }
}
