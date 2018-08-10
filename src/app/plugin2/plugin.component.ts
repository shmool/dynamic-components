import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-plugin',
  template: `
    <mat-card class="card-row">
      <mat-card>
        <mat-form-field class="text-field" *ngFor="let item of data">
          <input matInput type="number"
                 [value]="item.value"
                 (input)="update(item, $event.target.value)">
        </mat-form-field>
      </mat-card>

      <mat-card class="quote-card">
        <app-note>
          <app-bar-graph-note [data]="data">
          </app-bar-graph-note>
        </app-note>
      </mat-card>
    </mat-card>
  `,
  styleUrls: ['./plugin.component.scss']
})
export class PluginComponent {
  @Input() data = [
    { value: 70, color: 'red' },
    { value: 70, color: 'green' },
    { value: 30, color: 'blue' },
  ];

  @Output() change = new EventEmitter();

  update(item, value) {
    console.log(item, value, this.data)
    item.value = +value;
    this.change.emit([...this.data]);
  }
}
