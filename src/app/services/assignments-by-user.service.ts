import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Assignment } from 'src/app/models/assignment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsByUserService {

  constructor(private http: HttpClient) {}

  getAssignmentsByUser(id: number): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`https://kanbanprojectapi.azurewebsites.net/api/Assignments/GetAssignmentsByUser?userId=${id}`);
  }
}
