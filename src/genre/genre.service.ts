import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ComicSeries } from '../models/comics/comic-series';
import { forkJoin } from "rxjs/observable/forkJoin";

const apiGenreUrl = 'http://localhost:8080/api/series/genre';
const apiFollowUrl = 'http://localhost:8080/api/series/follow';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  results: ComicSeries[][]

  getGenreComics(){
    let action = this.http.get<ComicSeries[]>(apiGenreUrl+"?genre=Action");
    let fantasy = this.http.get<ComicSeries[]>(apiGenreUrl+"?genre=Fantasy");
    let comedy = this.http.get<ComicSeries[]>(apiGenreUrl+"?genre=Comedy");
    let drama = this.http.get<ComicSeries[]>(apiGenreUrl+"?genre=Drama");
    let sports = this.http.get<ComicSeries[]>(apiGenreUrl+"?genre=Sports");
    let horror = this.http.get<ComicSeries[]>(apiGenreUrl+"?genre=Horror");

    return forkJoin([action,fantasy,comedy,drama,sports,horror]);
  }

  followSeries(seriesObject){
    console.log("hit follow button: inside followSeries");
    return this.http.post(apiFollowUrl, seriesObject);
  }

}