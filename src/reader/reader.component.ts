import { Component } from '@angular/core';
import { ReaderService } from './reader.service';
import { ActivatedRoute } from "@angular/router";
import { Comment } from '../models/comics/comment';
import { FormGroup, FormControl } from '@angular/forms';

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

    chapter;
    seriesId;
    nextChap;
    prevChap;
    notFound = false;

    chapterComments: Comment[];
    editComment =  new FormGroup({
      chapterId: new FormControl(this.route.snapshot.paramMap.get("id")),
      username: new FormControl(document.cookie.split("=")[1]),
      comment: new FormControl('')
    });

    postComment(comment){
      this.readerService.postComment(comment)
        .subscribe( data => {
          console.log("inside postComment");
          console.log(data);
        });
    }

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
        this.seriesId = this.route.snapshot.paramMap.get("seriesId");
        let chapNum = this.route.snapshot.paramMap.get("chapNum");
        console.log("id", this.seriesId, this.route.snapshot.paramMap);
        this.nextChap = parseInt(chapNum) + 1;
        this.prevChap = parseInt(chapNum) -  1 < 0 ? 0 : parseInt(chapNum) -  1;
        console.log("calling callGetChapter");
        this.readerService.getChapter(this.seriesId,chapNum)
            .subscribe( data=> {
                console.log("inside callGetChapter");
                console.log(data, "heey");
                if(data == null)
                   this.notFound = true;
                else
                    this.chapter = data;
            });

    }

    callGetChapterNext(){
        this.seriesId = this.route.snapshot.paramMap.get("seriesId");
        let chapNum = this.nextChap;
        console.log("id", this.seriesId, this.route.snapshot.paramMap);
        this.nextChap = parseInt(chapNum) + 1;
        this.prevChap = parseInt(chapNum) -  1 < 0 ? 0 : parseInt(chapNum) -  1;
        this.readerService.getChapter(this.seriesId,chapNum)
            .subscribe( data=> {
                console.log("inside callGetChapter");
                console.log(data, "heey");
                if(data == null) {
                    chapNum = parseInt(chapNum) - 1;
                    this.nextChap = chapNum + 1;
                    this.prevChap = chapNum - 1;
                }else
                    this.chapter = data;
            });
    }

    callGetChapterPrev(){
        this.seriesId = this.route.snapshot.paramMap.get("seriesId");
        let chapNum = this.prevChap;
        console.log("id", this.seriesId, this.route.snapshot.paramMap);
        this.nextChap = parseInt(chapNum) + 1;
        this.prevChap = parseInt(chapNum) -  1 < 0 ? 0 : parseInt(chapNum) -  1;
        this.readerService.getChapter(this.seriesId,chapNum)
            .subscribe( data=> {
                console.log("inside callGetChapter");
                console.log(data, "heey");
                if(data == null) {
                    chapNum = parseInt(chapNum) + 1;
                    this.nextChap = chapNum + 1;
                    this.prevChap = chapNum - 1;
                }else
                    this.chapter = data;
            });
    }

    ngOnInit(){
        console.log("inside ngOnInit");
        this.callGetChapter();
    }

}
