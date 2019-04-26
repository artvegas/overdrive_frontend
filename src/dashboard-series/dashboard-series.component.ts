import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard-series',
  templateUrl: './dashboard-series.component.html',
  styleUrls: ['./dashboard-series.component.css']
})
export class DashboardSeriesComponent implements OnInit {

  constructor(private dashboardService: DashboardService) {
    this.dashboardService = dashboardService;
  }

  ngOnInit() {
  }

}
