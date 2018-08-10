import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-note',
  template: `
    <figure class="quote">
      <blockquote class="curly-quotes" cite="https://www.youtube.com/watch?v=qYLrc9hy0t0">
        <ng-content></ng-content>
      </blockquote>
      <figcaption class="quote-by">— <ng-content select=".name"></ng-content></figcaption>
    </figure>
  `,
  styleUrls: ['./quote-note.component.scss']
})
export class QuoteNoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
