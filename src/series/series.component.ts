import { Component, OnInit } from '@angular/core';
import { GenreService } from '../genre/genre.service';
import { SeriesService } from './series.service';
import { ComicSeries } from '../models/comics/comic-series';
import { ComicChapter } from '../models/comics/comic-chapter';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private genreService: GenreService, private seriesService: SeriesService) {
    this.genreService = genreService;
    this.seriesService = seriesService;
  }

  currentSeries: ComicSeries;
  seriesChapters: ComicChapter[];

  ngOnInit() {
    this.genreService.selectedSeries
      .subscribe( data => {
        console.log("inside series page genreService call");
        console.log(data);
        this.currentSeries = data;
        this.seriesService.getSeriesChapters(data.seriesId)
          .subscribe( data => {
            console.log("inside getSeriesChapters");
            console.log(data);
            this.seriesChapters = data;
          });
      });
  }

}
