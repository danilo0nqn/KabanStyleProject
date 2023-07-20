import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetProjectsTestService {

  constructor(private http: HttpClient) { }

  getProjects():Observable<any> {
    return this.http.get('https://kanbanprojectapi.azurewebsites.net/api/Assignments')
  }
}
