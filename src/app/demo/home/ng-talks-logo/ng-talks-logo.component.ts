import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-talks-logo',
  template: `
    <img src="assets/img/ng-talks.png"/>
  `,
  styleUrls: ['./ng-talks-logo.component.scss']
})
export class NgTalksLogoComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
