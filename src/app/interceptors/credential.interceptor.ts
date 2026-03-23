import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import DataService from '../services/data';

export const credentialsInterceptor: HttpInterceptorFn = (req: HttpRequest<any>,next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const _dataService = inject(DataService)

  const headers = req.headers
  .set('x-server', _dataService.selectedServer())
    
  const modifiedReq = req.clone({
    withCredentials: true,
    headers
  });

  return next(modifiedReq);
};
