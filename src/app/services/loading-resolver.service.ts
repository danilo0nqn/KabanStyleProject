import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { IRandomContact, SingleResult } from '../models/randomuser.interface';
import { Observable } from 'rxjs';
import { ProfileLoaderService } from './profile-loader.service';

@Injectable({
  providedIn: 'root',
})
export class LoadingResolverService implements Resolve<SingleResult> {
  constructor(private profileLoader: ProfileLoaderService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<SingleResult> {
    return this.profileLoader.getObservable();
  }
}
