import { TranslateService } from '@ngx-translate/core';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CustomAction } from 'src/app/shared/components/table/custom-action';
import { TableColumn } from 'src/app/shared/components/table/table-column';
import { User, UserRole } from 'src/app/shared/models/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-role-form',
  templateUrl: './user-role-form.component.html',
  styleUrls: ['./user-role-form.component.scss']
})
export class UserRoleFormComponent implements OnInit {
  userRoles: UserRole[];
  userRoleColumns: TableColumn[];
  searchString: string;
  userRoleActionData: CustomAction = new CustomAction('Update User Roles', 'update', 'primary');

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private dialogRef: MatDialog,
    public userService: UserService,
    public toastr: ToastrService,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.getUserRoles();
    this.initColumns();
  }

  getUserRoles(): void {
    this.userService.getUserRoles(this.data.id).subscribe((response) => {
      this.userRoles = response;
    });
  }

  initColumns(): void {
    this.userRoleColumns = [
      { name: 'RoleId', dataKey: 'roleId', isSortable: true, isShowable: true },
      { name: 'RoleName', dataKey: 'roleName', isSortable: true, isShowable: true },
      { name: 'Enabled', dataKey: 'enabled', isSortable: true, isShowable: true },
    ];
  }

  submitUserRoles(): void{
    this.userService.assignUserRoles(this.data.id, this.userRoles).subscribe(() => {
      this.toastr.success(this.translate.instant('common.entityUpdated', {entity: 'User Role'}));
      this.dialogRef.closeAll();
    });
  }
}
