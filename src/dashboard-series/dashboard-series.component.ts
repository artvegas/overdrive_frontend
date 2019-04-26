import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { ComicSeries } from '../models/comics/comic-series';

@Component({
  selector: 'app-dashboard-series',
  templateUrl: './dashboard-series.component.html',
  styleUrls: ['./dashboard-series.component.css']
})
export class DashboardSeriesComponent implements OnInit {

  constructor(private dashboardService: DashboardService) {
    this.dashboardService = dashboardService;
  }

  currentSeries: ComicSeries;

  ngOnInit() {
    this.dashboardService.currentSeries
      .subscribe(data => {
        this.currentSeries = data;
        console.log("dashboard series component ngOnInit");
        console.log(data);
      });
  }

}
