import { Component } from '@angular/core';
import { Profile } from './profile';
import { Users } from '../models/users/users';
import { ProfileService } from './profile.service';
import { ComicSeries } from '../models/comics/comic-series'

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    title = 'profile';

    /*In order to refer to service with 'this' dependency inject as private field*/
    constructor(private profileService: ProfileService){
      this.profileService = profileService;
    }

    /* Current logged in user */
    currentUser: Users;
    /* Series the user follows */
    followedSeries: ComicSeries[];
    /* Series the user created */
    createdSeries: ComicSeries[];

    async ngAfterViewInit() {
        await this.loadScript('./src/js/main.js');
        await this.loadScript('./src/js/genre.js');
    }

    ngOnInit(){
      console.log("inside ngOnInit");
      this.populatePage();
      this.displayFollowedSeries();
      this.displayCreatedSeries();
    }

    private loadScript(scriptUrl: string) {
        return new Promise((resolve, reject) => {
            const scriptElement = document.createElement('script');
            scriptElement.src = scriptUrl;
            scriptElement.onload = resolve;
            document.body.appendChild(scriptElement);
        });
    }

    populatePage(){
      console.log("in populate page");
      this.profileService.getUserDetails()
      .subscribe( data => {
        console.log("inside get request: PROFILE");
        console.log(data);
        this.currentUser = data;
      });
    }

    displayFollowedSeries(){
      console.log("in followed series");
      this.profileService.getFollowedSeries()
      .subscribe(data => {
        console.log("inside post request: displayfollows");
        console.log(data);
        this.followedSeries = data;
      });
    }

    displayCreatedSeries(){
      console.log("in followed series");
      this.profileService.getCreatedSeries()
      .subscribe(data => {
        console.log("inside post request: display created");
        console.log(data);
        this.createdSeries = data;
      });
    }

    scroll(el: HTMLElement) {
        el.scrollIntoView();
    }


}
