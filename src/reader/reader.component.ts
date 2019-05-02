import { Component } from '@angular/core';
import { ReaderService } from './reader.service';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'reader',
    templateUrl: './reader.component.html',
    styleUrls: ['./reader.component.css']
})
export class ReaderComponent {
    title = 'Genre';

    constructor(private readerService: ReaderService, private route: ActivatedRoute){
      this.readerService = readerService;
      this.route = route;
    }

    callLikeChapter(element){
      let currentId = this.route.snapshot.paramMap.get("id");
      this.readerService.likeChapter(currentId)
        .subscribe( data=> {
          console.log("inside callLikeChapter");
          console.log(data);
        });
      element.style.cssText = "color: red;"
    }
}
