import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  PathOfAPI = 'http://localhost:9090';
  constructor(private httpClient: HttpClient) { }
  public login(loginData) {
    return this.httpClient.post(this.PathOfAPI + "/authenticate", loginData);
  }
}
