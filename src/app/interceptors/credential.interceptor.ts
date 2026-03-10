import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export const credentialsInterceptor: HttpInterceptorFn = (req: HttpRequest<any>,next: HttpHandlerFn): Observable<HttpEvent<any>> => {
    
  const modifiedReq = req.clone({
    withCredentials: true,
  });

  return next(modifiedReq);
};
