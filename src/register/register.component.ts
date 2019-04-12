import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions: {headers; observe;} = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  }),
  observe: 'response'
};

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    title = 'Create';

    async ngAfterViewInit() {
        await this.loadScript('./src/js/main.js');
    }

    constructor (private http: HttpClient) {
      this.http = http;
    }

    //Describe FormGroup for user
    userForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl('')
    });

    private loadScript(scriptUrl: string) {
        return new Promise((resolve, reject) => {
            const scriptElement = document.createElement('script');
            scriptElement.src = scriptUrl;
            scriptElement.onload = resolve;
            document.body.appendChild(scriptElement);
        })
    }

    onSubmit(user) {
      if(false){
        console.log("hit area for /login");
        return this.http.post("http://localhost:8080/api/users/login", user, httpOptions)
          .subscribe( data => {
            if(data.status == 200){
              window.location = "/genre";
            }
          });
      } else{
        console.log(user);
        console.log("Hit area for register");
        return this.http.post("http://localhost:8080/api/users/register", user, httpOptions)
          .subscribe( data => {
              console.log(data);
          });
      }

    }


}
