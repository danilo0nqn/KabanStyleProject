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
    return this.http.get(`https://localhost:7047/api/Assignments/GetAssignmentsByProject?projectid=${id}`);
  }
}
