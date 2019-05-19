import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

const getChapterUrl = '/api/series/getchapter';

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
