import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { ComicSeries } from '../models/comics/comic-series';


@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  createComicSeries(series: ComicSeries) {
    return this.http.post("http://ec2-3-14-12-133.us-east-2.compute.amazonaws.com:8080/api/series/create", series);
  }

}
