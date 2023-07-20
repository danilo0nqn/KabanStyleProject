import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterNewUserService {

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any>{

    const { name, lastName, email, password, linkedIn, gitHub, avatar } = userData;
  

    let body= {
      name: name,
      lastName: lastName,
      email: email,
      password: password,
      linkedIn: linkedIn,
      gitHub: gitHub,
      avatar: avatar,
    }
    console.log(userData)
    console.log(body)
    return this.http.post('https://localhost:7047/api/Users/PostUserAndUserLogin', body)
  }
}
