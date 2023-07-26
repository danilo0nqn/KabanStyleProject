import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddUserToProjectService {

  constructor(private http: HttpClient) { }

  addUserToProject(email: string, projectId: number): Observable<any> {
    let body ={
      email: email
    }
    return this.http.post(`https://kanbanprojectapi.azurewebsites.net/api/ProjectUsers/LinkUserToProject?projectId=${projectId}`, body)
  }
}
