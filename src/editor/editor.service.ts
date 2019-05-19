import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

const getChapterUrl = 'http://ec2-52-14-196-70.us-east-2.compute.amazonaws.com:8080/api/series/getchapter';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getChapterById(chapterId){
    return this.http.post(getChapterUrl, chapterId);
  }
}
