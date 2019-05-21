import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {RecoveryService} from './recovery.service';

const httpOptions: {headers; observe;} = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  }),
  observe: 'response'
};

@Component({
    selector: 'recovery',
    templateUrl: './recovery.component.html',
    styleUrls: ['./recovery.component.css']
})

export class RecoveryComponent {
    title = 'Create';

    constructor (private http: HttpClient, private router: Router, private service: RecoveryService) {
      this.http = http;
      this.router = router;
      this.service = service;
    }

    //Describe FormGroup for user
    userForm = new FormGroup({
      username: new FormControl('')
    });


    onSubmit(user) {
        console.log(user);
        console.log("Hit area for recovery");
        this.service.subscribe(
            data => {
                console.log("data received.");
                if (data == true){
                    this.router.navigate(["/securityQuestion"]);
                }
                else{
                    console.log("Please enter a valid user.");
                }
            }
        )
    }


}
