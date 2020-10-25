import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModelBoxComponent } from './../model-box.component';

@Injectable({
  providedIn: 'root',
})
export class ModelBoxService {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(ModelBoxComponent);
    return dialogRef.afterClosed();
  }
}
