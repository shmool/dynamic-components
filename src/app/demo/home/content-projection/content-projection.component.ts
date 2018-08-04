import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  template: `
    <app-tabs>
      <app-tab title="Tour of Heroes">
        <app-figure img="assets/img/heroes-dashboard-1.png"></app-figure>
        <app-figure img="assets/img/hero-details-1.png" class="hero-details"></app-figure>
      </app-tab>
      <app-tab title="CLI Documentation">
        <app-cli-wiki></app-cli-wiki>
      </app-tab>
      <app-tab title="Angular blog">
        <app-angular-blog></app-angular-blog>
      </app-tab>
    </app-tabs>
  `,
  styleUrls: ['./content-projection.component.scss']
})
export class ContentProjectionComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
