import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClientModule
  ) { }

  public getLogin(user: string, pwd: string): Observable<Response>{
    this.httpClient.post('', {user, pwd})
  }
}
