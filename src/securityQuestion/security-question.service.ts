import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const url = '/api/users/checkAnswer';

@Injectable({
  providedIn: 'root'
})

export class SecurityQuestionService {

  constructor(private http: HttpClient) {
      this.http = http;
  }


  checkAnswerAndChangePassword(data){
      return this.http.post(url, data);
  }

}
