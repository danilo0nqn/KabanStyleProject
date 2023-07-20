import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assignment } from 'src/app/models/assignment';

@Injectable({
  providedIn: 'root'
})
export class GetAssignmentsByProjectService {

  constructor(private http: HttpClient) {}

  getAssignmentsByUser(id: number): Observable<any> {
    return this.http.get(`https://kanbanprojectapi.azurewebsites.net/api/Assignments/GetAssignmentsByProject?projectid=${id}`);
  }
}
