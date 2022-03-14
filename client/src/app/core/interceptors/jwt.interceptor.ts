import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AccountService} from '../services/account.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = this.addToken(request);
    this.refreshToken(request);
    return next.handle(request);
  }

  private addToken(request: HttpRequest<any>) {
    if (this.accountService.isAuthenticated) {
      const localToken = this.accountService.getToken;
      request = request.clone({setHeaders: {'Authorization': `Bearer ${localToken}`}});
    }
    return request;
  }

  private refreshToken(request: HttpRequest<any>) {
    if (!request.url.includes('account')) {
      const localToken = this.accountService.getToken;
      // if token is null
      if (!(localToken)) {
        return;
      }

      const jwtService = new JwtHelperService();
      const willExpireSoon =
        !jwtService.isTokenExpired(localToken) &&
        jwtService.isTokenExpired(localToken, 10 * 60);
      if (willExpireSoon) {
        this.accountService.tryRefreshingToken();
      }
    }
  }
}
