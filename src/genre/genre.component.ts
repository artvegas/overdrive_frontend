import { Component } from '@angular/core';
import { ComicSeries } from '../models/comics/comic-series';
import { GenreService } from './genre.service';

@Component({
    selector: 'genre',
    templateUrl: './genre.component.html',
    styleUrls: ['./genre.component.css']
})
export class GenreComponent {
    title = 'Genre';

    constructor(private genreService: GenreService){
      this.genreService = genreService;
    }

    /* list out series lists for each genre */
    actionSeries: ComicSeries[];
    fantasySeries: ComicSeries[];
    comedySeries: ComicSeries[];
    sportsSeries: ComicSeries[];
    dramaSeries: ComicSeries[];
    horrorSeries: ComicSeries[];

    /*service results*/
    // serviceResults: ComicSeries[][];

    ngOnInit(){
      this.genreService.getGenreComics()
        .subscribe( genreResults => {
          this.actionSeries = genreResults[0];
          this.fantasySeries = genreResults[1];
          this.comedySeries = genreResults[2];
          this.dramaSeries = genreResults[3];
          this.sportsSeries = genreResults[4];
          this.horrorSeries = genreResults[5];
        });
    }

    async ngAfterViewInit() {
        await this.loadScript('./src/js/genre.js');
    }

    private loadScript(scriptUrl: string) {
        return new Promise((resolve, reject) => {
            const scriptElement = document.createElement('script');
            scriptElement.src = scriptUrl;
            scriptElement.onload = resolve;
            document.body.appendChild(scriptElement);
        })
    }


    scroll(el: HTMLElement) {
        el.scrollIntoView();
    }

    sendFollowRequest(btn, comic){
      this.genreService.followSeries(comic)
        .subscribe(data => {
          console.log(data);
        });
    }

    changeColor(tag){
      console.log("Hit changeColor function");
      console.log(tag);
      tag.children[0].style.cssText = "color: red;"
    }

}
