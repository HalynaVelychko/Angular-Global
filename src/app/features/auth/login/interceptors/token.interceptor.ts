import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { finalize, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private readonly auth: AuthService, private readonly loading: LoadingService ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', this.auth.token),
    });
    this.loading.showSpinner();
    return next.handle(authReq).pipe(
      tap((event) => {
          if (event instanceof HttpResponse) {
            console.log('Server response');
          }
        },
        (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == 401) {
              console.log('Unauthorized');
            }
          }
        },
      ),
      finalize(() => {
        this.loading.hideSpinner();
      }),
    );
  }
}
