import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

const likeChpUrl = 'http://localhost:8080/api/series/chapter/like';
const getChapImgsUrl = 'http://localhost:8080/api/series/chapter/view/publish/';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  likeChapter(chapterId){
    return this.http.post(likeChpUrl, chapterId);
  }

  getChapter(seriesId, chapNum){
      return this.http.get(getChapImgsUrl + seriesId + "/" + chapNum);
  }
}
