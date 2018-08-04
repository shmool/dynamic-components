import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
    <ng-content *ngIf="selected"></ng-content>
  `,
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() title;
  @Input() selected;

  constructor() {
  }

  ngOnInit() {
  }

}
