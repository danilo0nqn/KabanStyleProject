import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewProjectService {

  storedId! : string | null
  id!: number;

  constructor(private http: HttpClient) { }

  newProject(userData: any, userId: number): Observable<any>{  
    let body= userData;
    return this.http.post(`https://kanbanprojectapi.azurewebsites.net/api/Projects?creatorId=${userId}`, body)
  }
}
