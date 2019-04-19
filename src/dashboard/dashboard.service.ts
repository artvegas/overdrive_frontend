import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ComicSeries } from '../models/comics/comic-series';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getUserComics(){
    return this.http.get<ComicSeries[]>("http://localhost:8080/api/series/user");
  }
}
