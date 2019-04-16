import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

// const httpOptions: {headers; observe;} = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/x-www-form-urlencoded',
//     'Authorization': 'my-auth-token'
//   }),
//   observe: 'response'
// };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {
    this.http = http;
    this.router = router;
  }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit() {
  }

  onSubmit(user) {

      console.log(user);
      console.log("Hit area for register");
      console.log("koichi kun");

      let payload = new HttpParams()
        .set('username', user.username)
        .set('password', user.password);

      return this.http.post("http://localhost:8080/login", payload)
        .subscribe( data => {
            console.log("inside response");
            //console.log(data);
      });
  }

}
