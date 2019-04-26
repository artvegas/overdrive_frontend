import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ComicChapter } from '../models/comics/comic-chapter';

const apiChapterUrl = "http://localhost:8080/api/series/chapter";

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getSeriesChapters(seriesId){
    console.log("seriesId");
    console.log(seriesId);
    return this.http.get<ComicChapter[]>(apiChapterUrl+"/"+seriesId);
  }
}
