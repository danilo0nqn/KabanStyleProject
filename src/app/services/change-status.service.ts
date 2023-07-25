import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChangeStatusService {

  constructor(private http: HttpClient) {}

  getAssignmentsByUser(status: string, id: number): Observable<any> {
    const body = {
      message : status
    }
    console.log(body)
    return this.http.put(`https://kanbanprojectapi.azurewebsites.net/api/Users/ChangeStatusMessage?userId=${id}`, body);
  }
}
