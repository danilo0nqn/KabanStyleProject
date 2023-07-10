import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  let token = sessionStorage.getItem('token');

  if(token){
    return true;
  } else {
    //Queremos que en caso de no estar loggeado, que me redirija a login.
    const loginUrlTree: UrlTree = router.createUrlTree(['login'])
    return loginUrlTree;
  }
};
