import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule
  ]
})

export class HomeModule { }
