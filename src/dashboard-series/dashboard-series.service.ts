import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

const apiChapterCreateUrl = "http://localhost:8080/api/series/chapter/create";

@Injectable({
  providedIn: 'root'
})
export class DashboardSeriesService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  createComicChapter(comicChapter){
    return this.http.post(apiChapterCreateUrl, comicChapter);
  }

}
