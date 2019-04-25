import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ComicSeries } from '../models/comics/comic-series';
import { forkJoin } from "rxjs/observable/forkJoin";

const apiUrl = 'http://localhost:8080/api/series/genre'

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  results: ComicSeries[][]

  getGenreComics(){
    let action = this.http.get<ComicSeries[]>(apiUrl+"?genre=Action");
    let fantasy = this.http.get<ComicSeries[]>(apiUrl+"?genre=Fantasy");
    let comedy = this.http.get<ComicSeries[]>(apiUrl+"?genre=Comedy");
    let drama = this.http.get<ComicSeries[]>(apiUrl+"?genre=Drama");
    let sports = this.http.get<ComicSeries[]>(apiUrl+"?genre=Sports");
    let horror = this.http.get<ComicSeries[]>(apiUrl+"?genre=Horror");

    return forkJoin([action,fantasy,comedy,drama,sports,horror]);
  }

}
