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
      let currentId = this.route.snapshot.paramMap.get("id");
      this.readerService.likeChapter(currentId)
        .subscribe( data=> {
          console.log("inside callLikeChapter");
          console.log(data);
        });
      element.style.cssText = "color: red; font-size:20pt;"
    }
}
