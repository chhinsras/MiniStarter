import { AgentApiService } from './api/agent-api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import { TableComponent } from './components/table/table.component';
import { DataPropertyGetterPipe } from './pipes/data-property-getter.pipe';
import { AccessDenialComponent } from './components/access-denial/access-denial.component';
import { HasPermissionDirective } from './directives/has-permission.directive';
import { HasRoleDirective } from './directives/has-role.directive';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { UploaderComponent } from './components/uploader/uploader.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { GoogleMapsModule } from '@angular/google-maps';
import { LogoutDialogComponent } from './components/logout-dialog/logout-dialog.component';
import { UserService } from './services/user.service';
import { RoleService } from './services/role.service';
import { GazetteerService } from './services/gazetteer.service';
import { AuditService } from './services/audit.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CardHeaderComponent } from './components/card-header/card-header.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    ServerErrorComponent,
    TableComponent,
    DataPropertyGetterPipe,
    AccessDenialComponent,
    HasPermissionDirective,
    HasRoleDirective,
    DeleteDialogComponent,
    LogoutDialogComponent,
    UploaderComponent,
    CardHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    TranslateModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    GoogleMapsModule,
    NgxChartsModule
  ],
  providers: [
    AgentApiService,
    UserService,
    RoleService,
    AuditService,
    GazetteerService,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    TableComponent,
    HasPermissionDirective,
    HasRoleDirective,
    UploaderComponent,
    GoogleMapsModule,
    NgxChartsModule,
    CardHeaderComponent
  ],
})
export class CoreModule { }
