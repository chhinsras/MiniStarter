import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CustomAction } from 'src/app/core/components/table/custom-action';
import { TableColumn } from 'src/app/core/components/table/table-column';
import { User, UserRoleModel } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-role-form',
  templateUrl: './user-role-form.component.html',
  styleUrls: ['./user-role-form.component.scss']
})
export class UserRoleFormComponent implements OnInit {
  userRoles: UserRoleModel[];
  userRoleColumns: TableColumn[];
  searchString: string;
  userRoleActionData: CustomAction = new CustomAction('Update User Roles', 'update', 'primary');

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private dialogRef: MatDialog,
    public userService: UserService,
    public toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.initColumns();
  }

  getUsers(): void {
    this.userService.getUserRoles(this.data.id).subscribe((response) => {
      this.userRoles = response.userRoles;
    });
  }

  initColumns(): void {
    this.userRoleColumns = [
      // { name: 'RoleId', dataKey: 'roleId', isSortable: true, isShowable: true },
      { name: 'RoleName', dataKey: 'roleName', isSortable: true, isShowable: true },
      { name: 'Selected', dataKey: 'selected', isSortable: true, isShowable: true },
    ];
  }

  submitUserRoles(): void{
    this.userService.updateUserRoles(this.data.id, { userRoles: this.userRoles}).subscribe((response) => {
      this.toastr.success(response);
      this.dialogRef.closeAll();
    });
  }
}
