import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterNewUserService {

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any>{
    let body= userData
    console.log(userData)
    console.log(body)
    return this.http.post('https://kanbanprojectapi.azurewebsites.net/api/Users/PostUserAndUserLogin', body)
  }
}
