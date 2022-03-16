import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})

export class UtilService {

  constructor(private _snackBar: MatSnackBar) { }

  openCrudDialog(dialog, component, width) {
      const dialogRef = dialog.open(component, {
          disableClose: true,
          width: width
      });
      return dialogRef;
  }

  openSnackBar(message: string) {
      this._snackBar.open(message, 'Close', {
          duration: 3000,
      });
  }
}
