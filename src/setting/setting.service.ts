import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {HttpClient, HttpHeaders } from '@angular/common/http';

const apiUserBio = '/api/users/profile/bio';
const apiUserDisplayName = '/api/users/profile/username';
const apiUserPassword = '/api/users/profile/password';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  updateBio(userBio){
    return this.http.post(apiUserBio, userBio);
  }

  updateDisplayName(userDisplayName){
    return this.http.post(apiUserDisplayName, userDisplayName);
  }

  updatePassword(userPassword){
    return this.http.post(apiUserPassword, userPassword);
  }

}
