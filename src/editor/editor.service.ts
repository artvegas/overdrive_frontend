import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

const getChapterUrl = '/api/series/getchapter';
const uploadPictureUrl = '/api/series/upload';

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

  addOfflineImage(picture){
    return this.http.post(uploadPictureUrl, picture, {withCredentials: true});
  }
}
