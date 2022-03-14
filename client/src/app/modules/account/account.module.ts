import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule,
    CoreModule
  ]
})
export class AuthModule { }
