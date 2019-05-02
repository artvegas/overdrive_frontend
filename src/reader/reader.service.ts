import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

const likeChpUrl = 'http://localhost:8080/api/series/chapter/like';
const getCommentUrl = 'http://localhost:8080/api/series/chapter/listcomments';
const postCommentUrl = 'http://localhost:8080/api/series/chapter/addcomment';
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

  postComment(comment){
    return this.http.post(postCommentUrl, comment);
  }

  getComments(){
    return this.http.get(getCommentUrl);
  }
  getChapter(seriesId, chapNum){
      return this.http.get(getChapImgsUrl + seriesId + "/" + chapNum);
  }
}
