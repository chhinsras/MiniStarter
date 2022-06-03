import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: UntypedFormGroup;
  returnUrl: string;
  isBeingLoggedIn: boolean = false;
  constructor(private accountService: AccountService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/home';
  }

  initializeForm() {
    this.loginForm = new UntypedFormGroup({
      userName: new UntypedFormControl('', Validators.required),
      password: new UntypedFormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.isBeingLoggedIn = true;
    this.loginForm.disable()
    this.accountService.login(this.loginForm.value)
      .pipe(filter(result => result !== null))
      .subscribe(() => this.router.navigateByUrl(this.returnUrl),
        error => { console.log(error); this.loginForm.enable();  }).add(()=>this.isBeingLoggedIn = false);
  }

  fillSuperAdminCredentials() {
    this.loginForm = new UntypedFormGroup({
      userName: new UntypedFormControl('superadmin', Validators.required),
      password: new UntypedFormControl('Pa$$w0rd', Validators.required)
    });
  }

  fillStaffCredentials() {
    this.loginForm = new UntypedFormGroup({
      userName: new UntypedFormControl('staff', Validators.required),
      password: new UntypedFormControl('Pa$$w0rd', Validators.required)
    });
  }
}
