import { TestErrorsComponent } from './test-errors/test-errors.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { RoleComponent } from './role/role.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'test-error', component: TestErrorsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users', component: UserComponent },
  { path: 'roles', component: RoleComponent },
  { path: 'settings', component: SettingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
