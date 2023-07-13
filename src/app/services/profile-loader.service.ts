import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError, retry, switchMap } from 'rxjs';
import { Results, SingleResult } from '../models/randomuser.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileLoaderService {
  constructor(private http: HttpClient) {}

  getRandomContact(id: number): Observable<SingleResult> {
    return this.http.get<SingleResult>(`https://reqres.in/api/users/${id}`);
  }
}
