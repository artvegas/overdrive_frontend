import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {RecoveryService} from '../recovery/recovery.service'
import {SecurityQuestionService} from './security-question.service';

const
const httpOptions: {headers; observe;} = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  }),
  observe: 'response'
};

@Component({
    selector: 'securityQuestion',
    templateUrl: './securityQuestion.component.html',
    styleUrls: ['./securityQuestion.component.css']
})

export class SecurityQuestionComponent {
    title = 'Create';
    username;

    constructor (private http: HttpClient, private router: Router, private recovery: RecoveryService, private security: SecurityQuestionService) {
      this.http = http;
      this.router = router;
      this.recovery = recovery;
      this.security = security;
    }

    //Describe FormGroup for user
    userForm = new FormGroup({
      password: new FormControl(''),
      answer: new FormControl('')
    });

    ngOnInit(){
        this.recovery.currentUsername.subscribe(
            data => {
                this.username = data;
            }
        )
    }

    onSubmit(answer) {
        // set username before calling method
        this.security.checkAnswerAndChangePassword(answer).subscribe(
            data => {
                if (data){
                    console.log('Successfully changed password.');
                }
                else{
                    console.log('Wrong answer to security question.');
                }
            }
        )
    }


}
