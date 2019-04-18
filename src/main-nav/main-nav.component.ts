import { Component } from '@angular/core';
import { MainNavService } from './main-nav.service';
import { Router } from '@angular/router';

@Component({
    selector: 'main-nav',
    templateUrl: './main-nav.component.html',
    styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
    title = 'overdrive-comics';

    constructor(private mainNavService: MainNavService, private router: Router){
      this.mainNavService = mainNavService;
      this.router = router;
    }

    ngOnInit(){
      this.setButton();
    }
    currentLink: string;

    setButton(){
      let login_btn = document.getElementById("login-btn");
      //user not logged in
      if(document.cookie.split["="][1] != ""){
        login_btn.innerHTML = "Login";
      } else {
        login_btn.innerHTML = "Logout";
      }
    }

    redirectToPage(){
      if(document.cookie.split["="][1] != ""){
        this.router.navigate(["/login"]);
      } else {
        this.mainNavService.logoutUser()
          .subscribe( data => {

          });
        this.router.navigate(["/login"]);
      }
    }
}
