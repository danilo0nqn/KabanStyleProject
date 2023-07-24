import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsManagementService {

  constructor(private http: HttpClient) { }

  assignmentManagement(data: any[]): Observable<any>{
    let [userId, projectId, id, beingDoneById, stage] = data;
    let body = {
      id,
      beingDoneById,
      stage
    };
    console.log(body)
    return this.http.put(`https://kanbanprojectapi.azurewebsites.net/api/Assignments/AssignmentManagement?projectId=${projectId}&userId=${userId}`, body)
  }

}
