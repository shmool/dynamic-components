import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  template: `
    <div class="projected-content" *ngIf="tabSelected">
      <ng-content></ng-content>
    </div>
    <ul>
      <li *ngFor="let tab of tabs" (click)="select(tab)">
        <h2><a rel="noopener" href="" (click)="$event.preventDefault()">{{ tab.title }}</a></h2>
      </li>
    </ul>
  `,
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  tabSelected;

  constructor() {
  }

  ngOnInit() {
  }

  select(tab) {
    this.tabs.forEach(t => t.selected = false);
    tab.selected = true;
    this.tabSelected = true;
  }

}
