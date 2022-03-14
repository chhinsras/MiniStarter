import { OverlayContainer } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountService } from 'src/app/core/services/account.service';
import { BusyService } from 'src/app/core/services/busy.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  title = 'MiniStarter';
  fullName: string = '';
  email: string = '';
  alertIsVisible: boolean = false;

  constructor(private accountService: AccountService, public busyService: BusyService) { }

  ngOnInit() {
    this.getUserDetails();
  }
  getUserDetails() {
    this.fullName = this.accountService.getFullName;
    this.email = this.accountService.getEmail;
  }
  hideAlert() {
    this.alertIsVisible = false;

  }
}
