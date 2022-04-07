import { DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthGuard } from './core/guards/auth.guard';
import { PermissionGuard } from './core/guards/permission.guard';
import { RoleGuard } from './core/guards/role.guard';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { MaterialModule } from './shared/material/material.module';
import { AccountService } from './core/services/account.service';
import { BusyService } from './core/services/busy.service';
import { LocalStorageService } from './core/services/local-storage.service';
import { MultilingualService } from './core/services/multilingual.service';
import { AccountLayoutComponent } from './layouts/account-layout/account-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FooterComponent } from './layouts/admin-layout/footer/footer.component';
import { ToolbarComponent } from './layouts/admin-layout/toolbar/toolbar.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { SharedModule } from './shared/shared.module';


export function rootLoaderFactory(http: HttpClient)
{
  return new TranslateHttpLoader(http,'assets/i18n/','.json');
}
@NgModule({
  declarations: [
    AppComponent,
    AccountLayoutComponent,
    HomeLayoutComponent,
    AdminLayoutComponent,
    ToolbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:rootLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  providers: [
    AuthGuard,
    PermissionGuard,
    RoleGuard,
    AccountService,
    LocalStorageService,
    MultilingualService,
    BusyService,
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
