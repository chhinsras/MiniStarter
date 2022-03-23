import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../services/account.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private toastr: ToastrService, private accountService: AccountService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((response) => {
        console.log(response);
        switch (response.status) {
          case 400:
              if(response.error.errors) {
                const modalStateErrors: string[] = [];
                for (const key in response.error.errors) {
                  if (response.error.errors[key]) {
                    modalStateErrors.push(response.error.errors[key])
                  }
                }
                console.log(modalStateErrors);
                throw modalStateErrors.flat();
              }
              this.toastr.error(response.error.title);
              break;
          case 401:
            this.toastr.error('Authentication Failure', response.error.title);
            this.accountService.logout();
            break;
          case 403:
            this.toastr.error(response.error.title);
            break;
          case 404:
            this.toastr.error('Not Found!', response.error.title);
            //this.router.navigateByUrl('/not-found');
            break;
          case 500:
            // this.toastr.error('Something Went Wrong', response.error.title);
            const navigationExtras: NavigationExtras = {state: {error: response.error}}
            this.router.navigateByUrl('/server-error', navigationExtras);
            break;
          default:
            if (response.status === 0) {
              this.toastr.error('Unable to Connect to Server.', response.error.title);
              break;
            }
            this.toastr.error('Something Went Wrong', response.error.title);
            break;
        }
        return throwError(response.error);
      })
    );
  }
}
