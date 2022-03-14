import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AccountService} from '../services/account.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.accountService.isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
