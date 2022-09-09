import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Audit } from 'src/app/shared/models/audit';

@Component({
  selector: 'app-audit-log-details',
  templateUrl: './audit-log-details.component.html',
  styleUrls: ['./audit-log-details.component.scss']
})
export class AuditLogDetailsComponent implements OnInit {
  auditForm: FormGroup;
  formTitle: string = "Audit Log Details";
  constructor(@Inject(MAT_DIALOG_DATA) public data: Audit, private toastr: ToastrService, private fb: FormBuilder) { }
  jsonOldValues;
  jsonNewValues;

  ngOnInit(): void {
    this.jsonNewValues = this.parseToJson(this.data.newValues);
    this.jsonOldValues = this.parseToJson(this.data.oldValues);
  }
  parseToJson(str: string) {
    if (str) {
      var json = JSON.parse(str);
      if (json) {
        Object.keys(json).forEach(function (k) {
          try {
            if (json[k]) {
              json[k] = JSON.parse(json[k])
            }
          }
          catch
          { }
        });
      }
      return json;
    }
  }
}
