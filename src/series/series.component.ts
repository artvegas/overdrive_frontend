import { Component, OnInit } from '@angular/core';
import { GenreService } from '../genre/genre.service';
import { ComicSeries } from '../models/comics/comic-series';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private genreService: GenreService) {
    this.genreService = genreService;
  }

  currentSeries: ComicSeries;

  ngOnInit() {
    this.genreService.selectedSeries
      .subscribe( data => {
        console.log("inside series page genreService call");
        console.log(data);
        this.currentSeries = data;
      });
  }

}
