import { PaginatedFilter, MetaData } from '../../../shared/models/pagination';
import { Component, OnInit } from "@angular/core";
import { User, UserParams } from 'src/app/shared/models/user';
import { TableColumn } from 'src/app/shared/components/table/table-column';
import { CustomAction } from 'src/app/shared/components/table/custom-action';
import { UserService } from 'src/app/core/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UserFormComponent } from './user-form/user-form.component';
import { Sort } from '@angular/material/sort';
import { UserRoleFormComponent } from './user-role-form/user-role-form.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: User[];
  metaData: MetaData;
  userColumns: TableColumn[];
  userParams = new UserParams();
  searchString: string;
  userRoleActionData: CustomAction = new CustomAction('Manage User Roles');

  constructor(
    public userService: UserService,
    public dialog: MatDialog,
    public toastr: ToastrService
  ) {
    this.userParams = this.userService.getUserParams();
  }

  ngOnInit(): void {
    this.getUsers();
    this.initColumns();
  }

  getUsers(): void {
    this.userService.setUserParams(this.userParams);
    this.userService.getUsers(this.userParams).subscribe((response) => {
      this.users = response.items;
      this.metaData = response.metaData;
    });
  }

  initColumns(): void {
    this.userColumns = [
      { name: 'Id', dataKey: 'id', isSortable: true, isShowable: true },
      { name: 'UserName', dataKey: 'userName', isSortable: true, isShowable: true },
      { name: 'FirstName', dataKey: 'firstName', isSortable: true, isShowable: true },
      { name: 'LastName', dataKey: 'lastName', isSortable: true, isShowable: true },
      { name: 'Email', dataKey: 'email', isSortable: true, isShowable: true },
      { name: 'IsActive', dataKey: 'isActive', isSortable: true, isShowable: true },
      { name: 'EmailConfirmed', dataKey: 'emailConfirmed', isSortable: true, isShowable: true },
      { name: 'PhoneNumber', dataKey: 'phoneNumber', isSortable: true, isShowable: true },
      { name: 'Action', dataKey: 'action', position: 'right' },
    ];
  }

  pageChanged(event: PaginatedFilter): void {
    this.userParams.pageNumber = event.pageNumber;
    this.userParams.pageSize = event.pageSize;
    this.userService.setUserParams(this.userParams);
    this.getUsers();
  }

  remove($event: string): void {
    this.userService.deleteUser($event).subscribe(() => {
      this.getUsers();
      this.toastr.info('User Removed');
    });
  }

  sort($event: Sort): void {
    this.userParams.orderBy = $event.active + ' ' + $event.direction;
    this.getUsers();
  }

  filter($event: string): void {
    this.userParams.searchTerm = $event.trim().toLocaleLowerCase();
    this.getUsers();
  }

  reload(): void {
    this.userParams = this.userService.resetUserParams();
    this.getUsers();
  }

  openForm(user?: User): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      data: user,
      width: '50vw',
      panelClass: 'mat-dialog-container-no-padding'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getUsers();
      }
    });
  }

  openUserRolesForm(user: User): void {
    const dialogRef = this.dialog.open(UserRoleFormComponent, {
      data: user,
      panelClass: 'mat-dialog-container-no-padding'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getUsers();
      }
    });
  }
}
