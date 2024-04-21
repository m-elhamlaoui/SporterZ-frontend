import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(!request.url.includes('/api/v1/auth/authenticate') && !request.url.includes('/api/v1/auth/register')) {
      let newRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('loginToken'))
      });
      return next.handle(newRequest);
    } else {
      return next.handle(request);
    }
  }

}