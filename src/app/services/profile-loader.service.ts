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
  private userInfo!: any;
  private projects!: any;
  private assignments!: any;

  constructor(private http: HttpClient) {}

  loadUserInfo (id: number): void{
    this.getUserInfo(id).subscribe(
      (responseProfile) => {
        sessionStorage.removeItem('userInfo')
        this.userInfo = responseProfile;
        console.log("user info cargados al session storage")
      },
      (error) =>{
        console.error(`Ha habido un error al intentar cargar el usuario ${error}`);
        sessionStorage.removeItem('token')
      },
      () => {
        sessionStorage.setItem('userInfo', JSON.stringify(this.userInfo))
        console.info('proceso de cargado de usuario a finalizado');
      }
    )
  }
  loadProjectsAssignments(id: number): void{
    this.getProjects(id).subscribe(
      (responseProjects) => {
        sessionStorage.removeItem('userProjects')
        this.projects = responseProjects
        console.log('projectos cargados al sessionStorage')
      },
      (error) =>{
        console.error(`Ha habido un error al intentar cargar los projectos de usuario ${error}`);
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userInfo')
      },
      () => {
        console.info('proceso de cargado de projectos a finalizado');
        sessionStorage.setItem('userProjects', JSON.stringify(this.projects))
      }
    );
    this.getAssignments(id).subscribe(
      (responseAssignments) => {
        sessionStorage.removeItem('userAssignments')
        this.assignments = responseAssignments
        console.log('assignments cargados al sessionStorage')
      },
      (error) =>{
        console.error(`Ha habido un error al intentar las tareas del usuario ${error}`);
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userInfo')
        sessionStorage.removeItem('userProjects')
      },
      () => {
        sessionStorage.setItem('userAssignments', JSON.stringify(this.assignments))
        console.info('proceso de cargado de tareas a finalizado');
      }
    );
  }

  getUserInfo(id: number): Observable<User> {
    return this.http.get<User>(`https://kanbanprojectapi.azurewebsites.net/api/Users/${id}`);
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
