import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError, retry, switchMap } from 'rxjs';
import { Assignment } from 'src/app/models/assignment';

@Injectable({
  providedIn: 'root'
})
export class UrgentAssignmentsByUserService {

  constructor(private http: HttpClient) {}

  getUrgentsAssignmentsByUser(id: number): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`https://kanbanprojectapi.azurewebsites.net/api/Assignments/GetUrgentAssignmentsByUser?userId=${id}`);
  }
}
