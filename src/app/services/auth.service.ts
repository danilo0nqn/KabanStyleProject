import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenSubject = new BehaviorSubject<string | null> (null)
  public token$ = this.tokenSubject.asObservable();

  constructor(private http: HttpClient) { }

  login(email:string, password: string): Observable<any>{
    let body= {
      email: email,
      password: password
    }
    return this.http.post('https://localhost:7047/api/Accounts/GetToken', body)
    /* return this.http.post('https://kanbanprojectapi.azurewebsites.net/api/Accounts/GetToken', body) */
  }

  setToken(token: string | null): void {
    this.tokenSubject.next(token);
  }

}
