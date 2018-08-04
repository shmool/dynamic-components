import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  template: `
    <h1>{{ titlePrefix && titlePrefix + ', ' }} This is a dynamic component!</h1>
    <mat-form-field>
      <input matInput [matDatepicker]="myDatepicker" [value]="value" (dateChange)="dateChange.emit($event.value)">
      <mat-datepicker-toggle matSuffix [for]="myDatepicker"></mat-datepicker-toggle>
      <mat-datepicker #myDatepicker></mat-datepicker>
    </mat-form-field>
  `,
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {
  @Input() value;
  @Input() titlePrefix;

  @Output() dateChange = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
