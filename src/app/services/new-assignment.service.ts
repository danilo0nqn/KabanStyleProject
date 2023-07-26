import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewAssignmentService {

  constructor(private http: HttpClient) { }

  newAssignment(data: any): Observable<any>{  
    let {userId, projectId, name, description, priority, descriptionURL, designURL, stage} = data;

    priority = parseInt(priority, 10)
    let body = {
      name,
      description,
      priority ,
      stage,
      descriptionURL,
      designURL
    };
    console.log(body)
    return this.http.post(`https://kanbanprojectapi.azurewebsites.net/api/Assignments?projectId=${projectId}&creatorId=${userId}`, body)
  }
}
