import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ComicSeries } from '../models/comics/comic-series';

const apiDiscoverUrl = 'http://localhost:8080/api/series/discover';

@Injectable({
  providedIn: 'root'
})
export class DiscoverService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getDiscoverSeries(){
    return this.http.get<ComicSeries[]>(apiDiscoverUrl);
  }
}
