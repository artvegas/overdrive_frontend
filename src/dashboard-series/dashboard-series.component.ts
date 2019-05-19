import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { DashboardSeriesService } from './dashboard-series.service';
import { ComicSeries } from '../models/comics/comic-series';
import { ComicChapter } from '../models/comics/comic-chapter';
import { FormGroup, FormControl } from '@angular/forms';
import { SeriesService } from '../series/series.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-series',
  templateUrl: './dashboard-series.component.html',
  styleUrls: ['./dashboard-series.component.css']
})
export class DashboardSeriesComponent implements OnInit {
  public userFile: any = File;

  constructor(private dashboardService: DashboardService,
    private dashboardSeriesService: DashboardSeriesService,
    private seriesService: SeriesService,
    private router: Router) {
    this.dashboardService = dashboardService;
    this.dashboardSeriesService = dashboardSeriesService;
    this.seriesService = seriesService;
    this.router = router;
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
    seriesId: new FormControl(),
  });

  goToEditorOld(chapter){
    this.router.navigate(['/editor/' + chapter._id]);
  }

  createComicChapter(){
    this.series.setValue({
      seriesId: this.currentSeries.seriesId
    });
    this.dashboardSeriesService.createComicChapter(this.series.value)
  }

  onSelectFile(event){
    const file = event.target.files[0];
    console.log(file);
    this.userFile = file;
  }

  updatePic(){
    this.series.setValue({
      seriesId: this.currentSeries.seriesId
    });
    const formData = new FormData();
    formData.append("pic", this.userFile);
    this.dashboardSeriesService.updateThumbnail(formData, this.series.value)
    .subscribe(data => {
      console.log(data);
    });
  }
}
