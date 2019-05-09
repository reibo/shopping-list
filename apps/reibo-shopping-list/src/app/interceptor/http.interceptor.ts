import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { ROUTES } from '@reibo-shopping-list/api-interface';

const routes = Object.values(ROUTES);

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (routes.find(route => req.url.startsWith(route))) {
      return next.handle(req.clone({ url: `${environment.api}/${req.url}` }));
    }
    return next.handle(req);
  }
}
