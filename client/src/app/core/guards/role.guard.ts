import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private accountService: AccountService,
    private toastrService: ToastrService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const allowedRoles = route.data.allowedRoles;
    const isAuthorized = this.accountService.isAuthorized('Role', allowedRoles);

    if (!isAuthorized) {
      this.toastrService.warning("You are not authoroized to access the resource");
      this.router.navigateByUrl('access-denial');
    }

    return isAuthorized;
  }

}
