import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import { TableComponent } from './components/table/table.component';
import { AccessDenialComponent } from './components/access-denial/access-denial.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { LogoutDialogComponent } from './components/logout-dialog/logout-dialog.component';
import { UploaderComponent } from './components/uploader/uploader.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DataPropertyGetterPipe } from './pipes/data-property-getter.pipe';
import { HasPermissionDirective } from './directives/has-permission.directive';
import { HasRoleDirective } from './directives/has-role.directive';

@NgModule({
  declarations: [
    NotFoundComponent,
    ServerErrorComponent,
    TableComponent,
    AccessDenialComponent,
    DeleteDialogComponent,
    LogoutDialogComponent,
    UploaderComponent,
    CardHeaderComponent,
    PageHeaderComponent,
    DataPropertyGetterPipe,
    HasPermissionDirective,
    HasRoleDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    TranslateModule,
    GoogleMapsModule,
    NgxChartsModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HasPermissionDirective,
    HasRoleDirective,
    UploaderComponent,
    TableComponent,
    CardHeaderComponent,
    PageHeaderComponent,
    GoogleMapsModule,
    NgxChartsModule
  ]
})
export class SharedModule { }
