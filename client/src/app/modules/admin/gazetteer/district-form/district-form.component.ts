import { District } from './../../../../shared/models/gazetteer';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GazetteerService } from 'src/app/core/services/gazetteer.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-district-form',
  templateUrl: './district-form.component.html',
  styleUrls: ['./district-form.component.scss']
})
export class DistrictFormComponent implements OnInit {
  districtForm: FormGroup;
  formTitle: string;
  editMode = false;

  validationErrors: string[] = [];

  districtTypes = ['ខណ្ឌ', 'ក្រុង', 'ស្រុក'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: District, private gazetteerService: GazetteerService,
    private toastr: ToastrService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.districtForm = this.fb.group({
      code: [this.data && this.data.code, Validators.required],
      type: [this.data && this.data.type, Validators.required],
      nameKH: [this.data && this.data.nameKH, Validators.required],
      nameEN: [this.data && this.data.nameEN, Validators.required],
      provinceCode: [this.data && this.data.provinceCode, Validators.required]
    });

    if (this.districtForm.get('code').value === "" || this.districtForm.get('code').value == null) {
      this.editMode = false;
      this.formTitle = "Add District";
    }
    else {
      this.editMode = true;
      this.formTitle = "Edit District";
    }
  }

  onSubmit() {
    if (this.districtForm.valid) {
      if (!this.editMode) {
        this.gazetteerService.createDistrict(this.districtForm.value).subscribe({
          next: (response) => this.toastr.success("Succesfully"),
          error: (error) => this.validationErrors = error
        })
      } else {
        this.gazetteerService.updateDistrict(this.districtForm.value).subscribe({
          next: (response) => {
            this.toastr.success("Succesfully")
          },
          error: (error) => this.validationErrors = error
        })
      }
    }
  }

}
