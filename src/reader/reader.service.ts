import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

const likeChpUrl = 'http://localhost:8080/api/series/chapter/like';
const getCommentUrl = 'http://localhost:8080/api/series/chapter/listcomments/';
const postCommentUrl = 'http://localhost:8080/api/series/chapter/addComment';
const getChapImgsUrl = 'http://localhost:8080/api/series/chapter/view/publish/';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  likeChapter(chapterId){
    console.log("inside readerService likeChapter");
    console.log(chapterId);
    return this.http.post(likeChpUrl, chapterId);
  }

  postComment(comment){
    return this.http.post(postCommentUrl, comment);
  }

  getComments(chapId){
    return this.http.get(getCommentUrl + chapId);
  }
  getChapter(seriesId, chapNum){
      return this.http.get(getChapImgsUrl + seriesId + "/" + chapNum);
  }
}
