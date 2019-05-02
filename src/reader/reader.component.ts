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

    chapterImages;

    callLikeChapter(element){
      let currentId = this.route.snapshot.paramMap.get("chapId");
      this.readerService.likeChapter(currentId)
        .subscribe( data=> {
          console.log("inside callLikeChapter");
          console.log(data);
        });
      let like_text = document.getElementById("like_text");

      if(like_text.innerText == 'Like') {
          like_text.innerText = 'Liked';
          element.style.color = "red";
      }else {
          like_text.innerText = 'Like';
          element.style.color = "#e0e0e0";
      }
    }

    callGetChapter(){
        console.log("calling callGetChapter");
        let currentId = this.route.snapshot.paramMap.get("chapId");
        console.log("id", currentId, this.route.snapshot.paramMap);
        this.readerService.getChapter(currentId)
            .subscribe( data=> {
                console.log("inside callGetChapter");
                console.log(data, "heey");
                this.chapterImages = data;
            });
    }

    ngOnInit(){
        console.log("inside ngOnInit");
        this.callGetChapter();
    }

}
