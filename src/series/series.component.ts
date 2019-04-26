import { Component, OnInit } from '@angular/core';
import { GenreService } from '../genre/genre.service';
import { SeriesService } from './series.service';
import { ComicSeries } from '../models/comics/comic-series';
import { ComicChapter } from '../models/comics/comic-chapter';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private genreService: GenreService, private seriesService: SeriesService,
              public datepipe: DatePipe) {
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

    formatDate(date_string){
        let date = new Date(date_string);
        let latest_date =this.datepipe.transform(date, 'yyyy-MM-dd');
        return latest_date;
    }

    getFormattedScore(score) {
        return score / 5;
    }

    rateStar(e, score) {
        console.log(score, "LOL");
    }
}
