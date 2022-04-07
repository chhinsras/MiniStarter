import { Agent } from './api/agent';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from './services/user.service';
import { RoleService } from './services/role.service';
import { GazetteerService } from './services/gazetteer.service';
import { AuditService } from './services/audit.service';

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
    Agent,
    UserService,
    RoleService,
    AuditService,
    GazetteerService,
  ],
  exports: [

  ],
})
export class CoreModule { }
