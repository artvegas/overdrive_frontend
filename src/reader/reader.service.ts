import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

const likeChpUrl = 'http://ec2-52-14-196-70.us-east-2.compute.amazonaws.com:8080/api/series/chapter/like';
const getCommentUrl = 'http://ec2-52-14-196-70.us-east-2.compute.amazonaws.com:8080/api/series/chapter/listcomments/';
const postCommentUrl = 'http://ec2-52-14-196-70.us-east-2.compute.amazonaws.com:8080/api/series/chapter/addComment';
const getChapImgsUrl = 'http://ec2-52-14-196-70.us-east-2.compute.amazonaws.com:8080/api/series/chapter/view/publish/';
const userLikedChapUrl = 'http://ec2-52-14-196-70.us-east-2.compute.amazonaws.com:8080/api/series/chapter/liked/';

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

  hasUserLikedChapter(chapId) {
      return this.http.get(userLikedChapUrl + chapId);
  }
}
