import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileLoaderService } from './profile-loader.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoadingResolverService implements Resolve<User> {
  storedId!: string | null;
  userId! : number;
  constructor(private profileLoader: ProfileLoaderService) {
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    /*
    this.storedId = sessionStorage.getItem('userId')
    if (this.storedId) {
      this.userId = parseInt(this.storedId, 10);
      this.profileLoader.getUserInfo(this.userId).subscribe(
        (responseProfile) => {
          sessionStorage.setItem('userInfo', JSON.stringify(responseProfile))
        },
        (error) =>{
          console.error(`Ha habido un error al intentar cargar el usuario ${error}`);
          sessionStorage.removeItem('token')
        },
        () => console.info('proceso de cargado de usuario a finalizado')
      );
    }
    */
    return this.profileLoader.getObservable();
  }
}
