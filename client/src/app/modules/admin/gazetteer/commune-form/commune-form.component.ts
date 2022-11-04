import { Commune } from './../../../../shared/models/gazetteer';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GazetteerService } from 'src/app/core/services/gazetteer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-commune-form',
  templateUrl: './commune-form.component.html',
  styleUrls: ['./commune-form.component.scss']
})
export class CommuneFormComponent implements OnInit {
  communeForm: FormGroup;
  formTitle: string;
  editMode = false;

  validationErrors: string[] = [];

  communeTypes = ['ឃុំ', 'សង្កាត់'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: Commune, private gazetteerService: GazetteerService, private toastr: ToastrService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.communeForm = this.fb.group({
      code: [this.data && this.data.code, Validators.required],
      type: [this.data && this.data.type, Validators.required],
      nameKH: [this.data && this.data.nameKH, Validators.required],
      nameEN: [this.data && this.data.nameEN, Validators.required],
      districtCode: [this.data && this.data.districtCode, Validators.required]
    });

    if (this.communeForm.get('code').value === "" || this.communeForm.get('code').value == null) {
      this.editMode = false;
      this.formTitle = "Add District";
    }
    else {
      this.editMode = true;
      this.formTitle = "Edit District";
    }
  }

  onSubmit() {
    if (this.communeForm.valid) {
      if (!this.editMode) {
        this.gazetteerService.createCommune(this.communeForm.value).subscribe({
          next: (response) => this.toastr.success("Succesfully"),
          error: (error) => this.validationErrors = error
        })
      } else {
        this.gazetteerService.updateCommune(this.communeForm.value).subscribe({
          next: (response) => {
            this.toastr.success("Succesfully")
          },
          error: (error) => this.validationErrors = error
        })
      }
    }
  }
}
