import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { DashboardSeriesService } from './dashboard-series.service';
import { ComicSeries } from '../models/comics/comic-series';
import { ComicChapter } from '../models/comics/comic-chapter';
import { FormGroup, FormControl } from '@angular/forms';
import { SeriesService } from '../series/series.service';

@Component({
  selector: 'app-dashboard-series',
  templateUrl: './dashboard-series.component.html',
  styleUrls: ['./dashboard-series.component.css']
})
export class DashboardSeriesComponent implements OnInit {

  constructor(private dashboardService: DashboardService,
    private dashboardSeriesService: DashboardSeriesService,
    private seriesService: SeriesService) {
    this.dashboardService = dashboardService;
    this.dashboardSeriesService = dashboardSeriesService;
    this.seriesService = seriesService;
  }

  currentSeries: ComicSeries;
  seriesChapters: ComicChapter[];

  ngOnInit() {
    this.dashboardService.currentSeries
      .subscribe(data => {
        this.currentSeries = data;
        console.log("dashboard series component ngOnInit");
        console.log(data);

        this.seriesService.getSeriesChapters(data.seriesId)
          .subscribe( data=> {
            console.log("series service call inside dashboard series");
            console.log(data);
            this.seriesChapters = data;
          });
      });
  }

  series =  new FormGroup({
    seriesId: new FormControl(''),
  });

  createComicChapter(){
    this.dashboardSeriesService.createComicChapter(this.series.value)
  }
}
