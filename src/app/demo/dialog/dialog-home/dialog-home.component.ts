import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { DynamicComponent } from '../../../shared/dynamic/dynamic.component';

@Component({
  selector: 'app-dialog-home',
  template: `
    <p>
      home works!
    </p>
    <p>Chosen date: {{ date | date: 'MMMM d, yyyy' }}</p>
    <p>
      <button mat-raised-button (click)="openDialog()">Open Dialog</button>
      <button mat-raised-button (click)="openRawDialog()">Open Raw Dialog</button>
    </p>
    <app-dynamic [titlePrefix]="title" [value]="date" (dateChange)="getChosenDate($event)"></app-dynamic>
  `,
  styleUrls: ['./dialog-home.component.scss']
})
export class DialogHomeComponent implements OnInit {
  date = new Date();
  title = 'Oh my';

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  getChosenDate(date) {
    this.date = date;
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: { date: this.date, title: this.title, name: 'NgTalks' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        this.date = result.date;
      }
    });
  }

  openRawDialog() {
    const dialogRef = this.dialog.open(DynamicComponent, {
      width: '400px'
    });

    dialogRef.componentInstance.dateChange.subscribe(date => {
      if (date) {
        dialogRef.disableClose = true;
        dialogRef.backdropClick().subscribe(_ => {
          const c = confirm(`Save date? ${date}`);
          if (c) {
            this.date = date;
          }
          dialogRef.close();
        });
      }
    });
    dialogRef.componentInstance.titlePrefix = this.title;
    dialogRef.componentInstance.value = this.date;

    dialogRef.afterClosed().subscribe(result => {
      // result will always be undefined because there's no "ok" button
      console.log('The dialog was closed', result);
      if (result) {
        this.date = result.date;
      }
    });
  }

}
