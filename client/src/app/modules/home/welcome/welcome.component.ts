import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from 'src/app/shared/components/logout-dialog/logout-dialog.component';
import { AccountService } from "../../../core/services/account.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  fullName: string = '';
  email: string;
  date:Date=new Date();
  constructor(private accountService: AccountService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUserDetails();
    setInterval(() => {
      this.date = new Date()
    }, 1000)
  }

  getUserDetails() {
    this.fullName = this.accountService.getFullName;
    this.email = this.accountService.getEmail;
  }
  onClickLogout() {
    const dialogRef = this.dialog.open(LogoutDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.accountService.logout();
    });
  }
}
