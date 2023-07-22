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

  newProject(userData: any): Observable<any>{  
    let body= userData;
    this.storedId = sessionStorage.getItem('userId');
    this.id = 0;
    if (this.storedId != null) {
      this.id = parseInt(this.storedId, 10);
    }
    return this.http.post(`https://kanbanprojectapi.azurewebsites.net/api/Projects?creatorId=${this.id}`, body)
  }
}
