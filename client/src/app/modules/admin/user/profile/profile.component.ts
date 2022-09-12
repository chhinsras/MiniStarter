import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { UploadType } from 'src/app/shared/models/upload';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
[x: string]: any;
  spin:boolean = false;
  constructor(private userService: UserService, private toastrService: ToastrService) { }
  url: any = [];

  uploadType: number;

  ngOnInit(): void {
    this.uploadType = UploadType.UserPhoto;
  }

  uploadFile(event) {
    this.userService.updateUserPhoto(event).subscribe(response => {
      this.toastrService.success('Updated Photo!');
    });
  }
}
