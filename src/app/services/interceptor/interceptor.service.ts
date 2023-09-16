import { Observable } from 'rxjs';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/app/config/config';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor( ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {


      // Verificar si la URL de la solicitud contiene BASE_URL
      if (request.url.includes(BASE_URL)) {
        // Agregar la cabecera 'Authorization' solo a las solicitudes que contienen BASE_URL
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer <tu-token>`
          }
        });
      }

    return next.handle(request);
  }
}
