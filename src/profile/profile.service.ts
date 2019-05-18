import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Users } from '../models/users/users';
import { ComicSeries } from '../models/comics/comic-series'

const apiUrl = "http://ec2-3-14-12-133.us-east-2.compute.amazonaws.com:8080/api/users/profile";

const followUrl = "http://ec2-3-14-12-133.us-east-2.compute.amazonaws.com:8080/api/series/displayfollows";

const createUrl = "http://ec2-3-14-12-133.us-east-2.compute.amazonaws.com:8080/api/series/user";

const totalLikesUrl = "http://localhost:8080/api/series/totallikes";

const totalFollowers = "http://localhost:8080/api/series/totalfollowers";

const totalComics = "http://localhost:8080/api/series/totalcomics";

const totalFollows = "http://localhost:8080/api/series/totalfollows";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  getUserDetails() {
    return this.http.get<Users>(apiUrl);
  }

  getFollowedSeries(){
    return this.http.get<ComicSeries[]>(followUrl);
  }

  getCreatedSeries(){
    return this.http.get<ComicSeries[]>(createUrl);
  }

  getUserTotalLikes(){
    return this.http.get(totalLikesUrl);
  }

  getUserTotalFollowers(){
    return this.http.get(totalFollowers);
  }

  getUserTotalComics(){
    return this.http.get(totalComics);
  }

  getUserTotalFollows(){
    return this.http.get(totalFollows);
  }
}
