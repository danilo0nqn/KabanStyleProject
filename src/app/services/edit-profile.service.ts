import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {

  constructor(private http: HttpClient) {}

  editUserProfile(data: any): Observable<any> {
    let {id, name, lastName, password, status, linkedIn, gitHub, avatar} = data;
    let storedId = sessionStorage.getItem('userId')
    let userId: number | null = null
    if (storedId)
    {
      userId = parseInt(storedId, 10)
    }
    let body = {
      id,
      name,
      lastName,
      password,
      status,
      linkedIn,
      gitHub,
      avatar
    };
    return this.http.put(`https://kanbanprojectapi.azurewebsites.net/api/Users/${userId}`, body);
  }
}
