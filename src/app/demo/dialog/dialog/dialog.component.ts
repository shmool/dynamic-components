import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

interface DialogData {
  date: Date;
  title: string;
  name?: string;
}

@Component({
  selector: 'app-dialog',
  template: `
    <h1 mat-dialog-title>Hi {{data.name}}</h1>
    <div mat-dialog-content>
      <app-dynamic [value]="data.date" [titlePrefix]="data.title" (dateChange)="data.date = $event"></app-dynamic>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">No Thanks</button>
      <button mat-button [mat-dialog-close]="data" cdkFocusInitial>Ok</button>
    </div>
  `,
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
