import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  
  
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token');
    if (token) {
        const modReq = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
        });
        return next.handle(modReq);
    }
    return next.handle(req);
}
}
