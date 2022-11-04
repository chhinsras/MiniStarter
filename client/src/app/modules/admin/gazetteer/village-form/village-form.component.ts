import { Village } from './../../../../shared/models/gazetteer';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GazetteerService } from 'src/app/core/services/gazetteer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-village-form',
  templateUrl: './village-form.component.html',
  styleUrls: ['./village-form.component.scss']
})
export class VillageFormComponent implements OnInit {
  villageForm: FormGroup;
  formTitle: string;
  editMode = false;

  validationErrors: string[] = [];

  villageTypes = ['ភូមិ'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: Village, private gazetteerService: GazetteerService, private toastr: ToastrService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.villageForm = this.fb.group({
      code: [this.data && this.data.code, Validators.required],
      type: [this.data && this.data.type, Validators.required],
      nameKH: [this.data && this.data.nameKH, Validators.required],
      nameEN: [this.data && this.data.nameEN, Validators.required],
      communeCode: [this.data && this.data.communeCode, Validators.required]
    });

    if (this.villageForm.get('code').value === "" || this.villageForm.get('code').value == null) {
      this.editMode = false;
      this.formTitle = "Add District";
    }
    else {
      this.editMode = true;
      this.formTitle = "Edit District";
    }
  }

  onSubmit() {
    if (this.villageForm.valid) {
      if (!this.editMode) {
        this.gazetteerService.createVillage(this.villageForm.value).subscribe({
          next: (response) => this.toastr.success("Succesfully"),
          error: (error) => this.validationErrors = error
        })
      } else {
        this.gazetteerService.updateVillage(this.villageForm.value).subscribe({
          next: (response) => {
            this.toastr.success("Succesfully")
          },
          error: (error) => this.validationErrors = error
        })
      }
    }
  }
}
