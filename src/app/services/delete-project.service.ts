import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteProjectService {

  constructor(private http: HttpClient) { }

  deleteProject(projectId: number): Observable<any>{
    return this.http.delete(`https://kanbanprojectapi.azurewebsites.net/api/Projects/${projectId}`)
  }
}
