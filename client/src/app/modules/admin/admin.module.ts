import { TestErrorsComponent } from './test-errors/test-errors.component';
import { AboutComponent } from './about/about.component';
import { PieChartCardComponent } from './dashboard/pie-chart-card/pie-chart-card.component';
import { NumberCardComponent } from './dashboard/number-card/number-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreModule } from 'src/app/core/core.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserRoleFormComponent } from './user/user-role-form/user-role-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TestErrorsComponent,
    AboutComponent,
    DashboardComponent,
    NumberCardComponent,
    PieChartCardComponent,
    UserComponent,
    UserFormComponent,
    UserRoleFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    SharedModule,
    TranslateModule
  ]
})
export class AdminModule { }
