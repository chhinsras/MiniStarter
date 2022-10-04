import { AccountService } from 'src/app/core/services/account.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { UploadType } from 'src/app/shared/models/upload';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  spin:boolean = false;
  url: any = [];
  uploadType: number;

  user: User;

  constructor(private userService: UserService, private toastrService: ToastrService, private accountService: AccountService) {}


  ngOnInit(): void {
    this.uploadType = UploadType.UserPhoto;
    this.accountService.getCurrentLoggedInUser().subscribe(response => this.user = response);
  }

  uploadFile(event) {
    this.userService.updatePhoto(event).subscribe(response => {
      this.toastrService.success('Updated Photo!');
    });
  }

}
