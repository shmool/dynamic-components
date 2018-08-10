import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-plugin',
  template: `
    <mat-card class="card-row">
      <mat-card>
        <mat-form-field class="text-field">
          <textarea matInput [value]="data.text" (input)="updateText($event.target.value)" rows="7"
                    placeholder="Quote"></textarea>
        </mat-form-field>
        <mat-form-field>
          <input matInput [value]="data.name" (input)="data.name = $event.target.value" placeholder="Name">
        </mat-form-field>
      </mat-card>
      <mat-card class="quote-card">
        <app-note>
          <app-quote-note>
            {{ data.text }}
            <span class="name">{{ data.name }}</span>
          </app-quote-note>
        </app-note>
      </mat-card>
    </mat-card>
  `,
  styleUrls: ['./plugin.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PluginComponent implements OnDestroy, OnChanges {

  @Input() data = {
    text: '',
    name: ''
  };
  @Output() textChange = new EventEmitter();

  updateText(text) {
    this.data.text = text;
    this.textChange.emit(text);
  }

  ngOnDestroy(): void {

    console.log('destroy')
  }

  ngOnChanges(changes) {
    console.log(changes)
  }

  ngDoCheck() {
    console.log('do check')
  }

}
