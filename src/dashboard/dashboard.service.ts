import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ComicSeries } from '../models/comics/comic-series';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getUserComics(){
    return this.http.get<ComicSeries[]>("http://ec2-52-14-196-70.us-east-2.compute.amazonaws.com:8080/api/series/user");
  }

  //methods to pass data to dashboard-series
  private seriesSource = new BehaviorSubject(null);
  currentSeries = this.seriesSource.asObservable();

  updateCurrentSeries(curSeries: ComicSeries){
    this.seriesSource.next(curSeries);
  }

}
