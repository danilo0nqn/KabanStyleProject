import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';

export const loguedGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)

  let token = sessionStorage.getItem('token');

  if(token){
    const loginUrlTree: UrlTree = router.createUrlTree(['home'])
    return loginUrlTree;
  } else {
    return true
  }

};
