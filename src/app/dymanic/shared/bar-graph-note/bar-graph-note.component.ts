import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

interface BarData {
  value: number;
  color: string;
  height?: string;
}

@Component({
  selector: 'app-bar-graph-note',
  template: `
    <div class="graph-container">
      <div class="graph">
        <div *ngFor="let bar of _data" class="bar" [style.background]="bar.color" [style.height]="bar.height"></div>
      </div>
    </div>
  `,
  styleUrls: ['./bar-graph-note.component.scss']
})
export class BarGraphNoteComponent implements DoCheck {
  @Input() set data(barData: BarData[]) {
    this._data = barData;
    this.calcHeights();
  }
  get data () {
    return this._data;
  }
  _data;

  constructor() {
  }

  ngDoCheck() {
    this.calcHeights();
  }

  calcHeights() {
    console.log('calc')
    const max = this._data.reduce((currMax, item) => Math.max(currMax, item.value), 0);
    this._data.forEach(item => {
      item.height = 130 * item.value / max + 'px';
    });
  }
}
