
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from 'src/app/core/services/role.service';
import { RoleFormComponent } from './role-form/role-form.component';
import { RolePermissionFormComponent } from './role-permission-form/role-permission-form.component';
import { TableColumn } from 'src/app/shared/components/table/table-column';
import { Role } from 'src/app/shared/models/role';
import { CustomAction } from 'src/app/shared/components/table/custom-action';
import { MetaData } from 'src/app/shared/models/pagination';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent implements OnInit {
  roles: Role[];
  metaData: MetaData;
  roleColumns: TableColumn[];
  searchString: string;
  permissionActionData: CustomAction = new CustomAction('Manage Permissions');


  constructor(
    public roleService: RoleService,
    public dialog: MatDialog,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getRoles();
    this.initColumns();
  }

  getRoles(): void {
    this.roleService.getRoles().subscribe((response: Role[]) => {
      this.roles = response;
      // this.metaData = response.metaData;
    });
  }

  initColumns(): void {
    this.roleColumns = [
      { name: 'Id', dataKey: 'id', isSortable: true, isShowable: true },
      { name: 'Name', dataKey: 'name', isSortable: true, isShowable: true },
      { name: 'Description', dataKey: 'description', isSortable: true, isShowable: true },
      { name: 'Action', dataKey: 'action', position: 'right' },
    ];
  }

  remove($event: string): void {
    this.roleService.deleteRole($event).subscribe(() => {
      this.getRoles();
      this.toastr.info('Role Removed');
    });
  }

  reload(): void {
    this.getRoles();
  }

  openForm(role?: Role): void {
    const dialogRef = this.dialog.open(RoleFormComponent, {
      data: role
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getRoles();
      }
    });
  }

  openPermissionsForm(role: Role): void {
    const dialogRef = this.dialog.open(RolePermissionFormComponent, {
      data: role,
      panelClass: 'mat-dialog-container-no-padding'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getRoles();
      }
    });
  }


}
