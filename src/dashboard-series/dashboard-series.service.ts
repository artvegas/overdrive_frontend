import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const apiChapterCreateUrl = "http://localhost:8080/api/series/chapter/create";

@Injectable({
  providedIn: 'root'
})
export class DashboardSeriesService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  createComicChapter(comicSeriesId){
    this.http.post(apiChapterCreateUrl, comicSeriesId)
      .subscribe( data => {
        this.comicChapterSource.next(data); //send chapter object to editor
      });
  }

  private comicChapterSource = new BehaviorSubject(null);
  newComicChapter = this.comicChapterSource.asObservable();

}
