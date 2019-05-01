import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ComicChapter } from '../models/comics/comic-chapter';

const apiChapterUrl = "http://localhost:8080/api/series/chapter";
const apiRatingUrl = "http://localhost:8080/api/series/rating";
const apiLikeUrl = "http://localhost:8080/api/series/chapter/like";

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

  setSeriseRating(seriesRating) {
      console.log("inside rating");
      return this.http.post(apiRatingUrl, seriesRating);
  }

  likeChapter(chapter) {
    return this.http.post(apiLikeUrl, chapter);
  }
}
