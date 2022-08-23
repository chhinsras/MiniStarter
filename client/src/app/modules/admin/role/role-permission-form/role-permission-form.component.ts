import { TranslateService } from '@ngx-translate/core';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from 'src/app/core/services/role.service';
import { CustomAction } from 'src/app/shared/components/table/custom-action';
import { TableColumn } from 'src/app/shared/components/table/table-column';
import { Permission } from 'src/app/shared/models/permission';
import { Role } from 'src/app/shared/models/role';

@Component({
  selector: 'app-role-permission-form',
  templateUrl: './role-permission-form.component.html',
  styleUrls: ['./role-permission-form.component.scss']
})
export class RolePermissionFormComponent implements OnInit {
  allPermissions: string[];
  rolePermission: Permission;

  title = 'Permission'
  subtitle = 'Update role permission here.'

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Role,
    private dialogRef: MatDialog,
    private translate: TranslateService,
    public roleService: RoleService,
    public toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getPermissions();
  }

  getPermissions(): void {
    this.roleService.getAllPermissions().subscribe((permissions: string[]) => {
      this.allPermissions = permissions;
    })

    this.roleService.getRolePermissionsByRoleId(this.data.id).subscribe((permission: Permission) => {
      this.rolePermission = permission;
    });
  }

  isPermissionInRole(permission: string) {
    return this.rolePermission.permissions.includes(permission);
  }


  submitRolePermission(): void{
    // this.roleService.updateRolePermissions({roleId: this.data.id, permissions: this.groupRoleClaims['All Permissions']}).subscribe((permission) => {
    //   // this.toastr.success(permission.messages[0]);
    //   this.toastr.success(this.translate.instant('common.entityUpdated', {entity: 'Role'}));
    //   this.dialogRef.closeAll();
    // });
  }
}
