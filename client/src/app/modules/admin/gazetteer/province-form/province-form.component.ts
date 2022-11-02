import { GazetteerService } from './../../../../core/services/gazetteer.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Province } from 'src/app/shared/models/gazetteer';
import { GazetteerComponent } from '../gazetteer.component';

@Component({
  selector: 'app-province-form',
  templateUrl: './province-form.component.html',
  styleUrls: ['./province-form.component.scss']
})
export class ProvinceFormComponent implements OnInit {

  provinceForm: FormGroup;
  formTitle: string;
  editMode = false;

  validationErrors: string[] = [];

  provinceTypes = ['រាជធានី', 'ខេត្ត'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: Province, private gazetteerService: GazetteerService, private toastr: ToastrService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.provinceForm = this.fb.group({
      code: [this.data && this.data.code, Validators.required],
      type: [this.data && this.data.type, Validators.required],
      nameKH: [this.data && this.data.nameKH, Validators.required],
      nameEN: [this.data && this.data.nameEN, Validators.required],
    });

    if (this.provinceForm.get('code').value === "" || this.provinceForm.get('code').value == null) {
      this.editMode = false;
      this.formTitle = "Add Province";
    }
    else {
      this.editMode = true;
      this.formTitle = "Edit Province";
    }
  }

  onSubmit() {
    if (this.provinceForm.valid) {
      if (!this.editMode) {
        this.gazetteerService.createProvince(this.provinceForm.value).subscribe({
          next: (response) => this.toastr.success("Succesfully"),
          error: (error) => this.validationErrors = error
        })
      } else {
        this.gazetteerService.updateProvince(this.provinceForm.value).subscribe({
          next: (response) => {
            // this.toastr.success(response)
            this.toastr.success("Succesfully")
          },
          error: (error) => this.validationErrors = error
        })
      }
    }
  }
}
