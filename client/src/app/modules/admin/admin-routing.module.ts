import { VillageComponent } from './gazetteer/village/village.component';
import { CommuneComponent } from './gazetteer/commune/commune.component';
import { DistrictComponent } from './gazetteer/district/district.component';
import { TestErrorsComponent } from './test-errors/test-errors.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { RoleComponent } from './role/role.component';
import { SettingComponent } from './setting/setting.component';
import { AuditComponent } from './audit/audit.component';
import { ProfileComponent } from './user/profile/profile.component';
import { GazetteerComponent } from './gazetteer/gazetteer.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'test-error', component: TestErrorsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users', component: UserComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'roles', component: RoleComponent },
  { path: 'settings', component: SettingComponent},
  { path: 'audits', component: AuditComponent},
  { path: 'gazetteer', component: GazetteerComponent},
  { path: 'gazetteer/district/:provinceCode', component: DistrictComponent},
  { path: 'gazetteer/district/:provinceCode/commune/:districtCode', component: CommuneComponent},
  { path: 'gazetteer/district/:provinceCode/commune/:districtCode/village/:communeCode', component: VillageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
