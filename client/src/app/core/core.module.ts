import { AgentApiService } from './api/agent-api.service';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { GoogleMapsModule } from '@angular/google-maps';
import { UserService } from './services/user.service';
import { RoleService } from './services/role.service';
import { GazetteerService } from './services/gazetteer.service';
import { AuditService } from './services/audit.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
  ],
  imports: [
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    AgentApiService,
    UserService,
    RoleService,
    AuditService,
    GazetteerService,
  ],
  exports: [

  ],
})
export class CoreModule { }
