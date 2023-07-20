import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError, retry, switchMap } from 'rxjs';
import { Results, SingleResult } from '../models/randomuser.interface';
import { User } from '../models/user';
import { Project } from '../models/project';
import { Assignment } from '../models/assignment';

@Injectable({
  providedIn: 'root',
})
export class ProfileLoaderService {
  private observableReturned!: Observable<User>;

  constructor(private http: HttpClient) {}

  getUserInfo(id: number): Observable<User> {
    this.observableReturned = this.http.get<User>(
      `https://kanbanprojectapi.azurewebsites.net/api/Users/${id}`
    );
    return this.observableReturned;
  }
  loadProjectsAssignments(id: number): void{
    this.getProjects(id).subscribe(
      (responseProjects) => {
        sessionStorage.setItem('userProjects', JSON.stringify(responseProjects))
        console.log(responseProjects);
      },
      (error) =>{
        console.error(`Ha habido un error al intentar cargar los projectos de usuario ${error}`);
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userInfo')
      },
      () => console.info('proceso de cargado de projectos a finalizado')
    );
    this.getAssignments(id).subscribe(
      (responseAssignments) => {
        sessionStorage.setItem('userAssignments', JSON.stringify(responseAssignments))
        console.log(responseAssignments)
      },
      (error) =>{
        console.error(`Ha habido un error al intentar las tareas del usuario ${error}`);
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userInfo')
        sessionStorage.removeItem('userProjects')
      },
      () => console.info('proceso de cargado de tareas a finalizado')
    );
  }

  getProjects(id: number): Observable<Project[]> {
    return this.http.get<Project[]>(`https://kanbanprojectapi.azurewebsites.net/api/Projects/GetProjectsByUser?userId=${id}`);
  }
  getAssignments(id: number): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`https://kanbanprojectapi.azurewebsites.net/api/Assignments/GetAssignmentsByUser?userId=${id}`);
  }

  getObservable(): Observable<User> {
    return this.observableReturned;
  }
}
