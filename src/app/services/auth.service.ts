import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

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
    return this.http.post('https://reqres.in/api/login', body)
  }

  setToken(token: string | null): void {
    this.tokenSubject.next(token);
  }

}
