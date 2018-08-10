import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';
import { QuoteNoteComponent } from './quote-note/quote-note.component';
import { BarGraphNoteComponent } from './bar-graph-note/bar-graph-note.component';
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule
  ],
  declarations: [NoteComponent, QuoteNoteComponent, BarGraphNoteComponent],
  exports: [NoteComponent, QuoteNoteComponent, BarGraphNoteComponent],
  entryComponents: []
})
export class SharedModule { }
