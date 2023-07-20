import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, catchError, retry, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChangeStatusService {

  constructor(private http: HttpClient) {}

  getAssignmentsByUser(status: string, id: number): Observable<any> {
    const body = {
      message : status
    }
    return this.http.put(`https://kanbanprojectapi.azurewebsites.net/api/Users/ChangeStatusMessage?userId=${id}`, body);
  }
}
