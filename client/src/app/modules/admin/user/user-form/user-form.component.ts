import { Component, ComponentFactoryResolver, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/models/user';
import { AccountService } from 'src/app/core/services/account.service';
import { UserService } from 'src/app/core/services/user.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  animations:[
    trigger('fade',[
      transition('void=>*',[
        style({opacity:0,}),
        animate(3000,style({opacity:1}))
      ]),
      transition('*=>void',[
        animate(2000,style({opacity:0}))
      ])
    ])
   ]
})
export class UserFormComponent implements OnInit {
  userForm: UntypedFormGroup;
  formTitle: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: User, private accountService: AccountService, private userService: UserService, private toastr: ToastrService, private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.userForm = this.fb.group({
      id: [this.data && this.data.id],
      userName: [this.data && this.data.userName, Validators.required],
      firstName: [this.data && this.data.firstName, Validators.required],
      lastName: [this.data && this.data.lastName, Validators.required],
      email: [this.data && this.data.email, Validators.required],
      password: [this.data && this.data.password],
      confirmPassword: [this.data && this.data.confirmPassword],
      phoneNumber: [this.data && this.data.phoneNumber, Validators.required]
    });
    if (this.userForm.get('id').value === "" || this.userForm.get('id').value == null) {
      this.formTitle = "Add User";
    }
    else {
      this.formTitle = "Edit User";
      console.log(this.userForm.get('password'));
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      if (this.userForm.get('id').value === "" || this.userForm.get('id').value == null) {
        this.accountService.registerUser(this.userForm.value).subscribe(response => {
          this.toastr.success(response);
        })
      } else {
        this.userService.updateUser(this.userForm.value).subscribe(response => {
          this.toastr.success(response);
        })

      }
    }
  }

}
