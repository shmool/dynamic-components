import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-figure',
  template: `
    <figure>
      <img [src]="img"/>
    </figure>
  `,
  styleUrls: ['./figure.component.scss']
})
export class FigureComponent implements OnInit {
  @Input() img;

  constructor() { }

  ngOnInit() {
  }

}
