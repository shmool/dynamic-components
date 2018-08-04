import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div style="text-align:center">
      <h1 (click)="showColorInput = true">
        Welcome to {{title}}!
        <input *ngIf="showColorInput" type="color" (input)="logoColor = $event.target.value" [value]="logoColor">
      </h1>

      <app-angular-logo [color]="logoColor" *ngIf="!ngTalksLogo"></app-angular-logo>
      <div *ngIf="ngTalksLogo" style="height: 300px;">
        <app-ng-talks-logo [appFly]="fly" (click)="fly = !fly"></app-ng-talks-logo>
      </div>
    </div>
    <h2 (click)="ngTalksLogo = !ngTalksLogo">Here are some links to help you start: </h2>
    <app-content-projection></app-content-projection>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'ng-talks-demo';
  showColorInput;
  logoColor = '#DD0031';
  ngTalksLogo;
  fly;
}
