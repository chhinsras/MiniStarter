import { TranslateService } from '@ngx-translate/core';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from 'src/app/core/services/role.service';
import { Role } from 'src/app/shared/models/role';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss']
})
export class RoleFormComponent implements OnInit {
  roleForm: FormGroup;
  formTitle: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Role, private roleService: RoleService,
    private translate: TranslateService , private toastr: ToastrService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.roleForm = this.fb.group({
      id: [this.data && this.data.id],
      name: [this.data && this.data.name, Validators.required],
      description: [this.data && this.data.description, Validators.required]
    })
    if (this.roleForm.get('id').value === "" || this.roleForm.get('id').value == null) {
      this.formTitle = "Register Role";
    }
    else {
      this.formTitle = "Edit Role";
    }
  }

  onSubmit() {
    if (this.roleForm.valid) {
      if (this.roleForm.get('id').value === "" || this.roleForm.get('id').value == null) {
        this.roleForm.removeControl('id');
        this.roleService.createRole(this.roleForm.value).subscribe(response => {
          this.toastr.success(this.translate.instant('common.entityCreated', {entity: 'Role'}));
        })
      } else {
        this.roleService.updateRole(this.roleForm.value).subscribe(response => {
          this.toastr.success(this.translate.instant('common.entityUpdated', {entity: 'Role'}));
        })
      }
    }
  }

}
