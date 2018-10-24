import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  template: `
    <div class="notepaper">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
