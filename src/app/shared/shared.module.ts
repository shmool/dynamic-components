import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from './dynamic/dynamic.component';
import { MAT_DATE_LOCALE, MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';
// import { NoteComponent } from '../dymanic/shared/note/note.component';
// import { QuoteNoteComponent } from '../dymanic/shared/quote-note/quote-note.component';
// import { BarGraphNoteComponent } from '../dymanic/shared/bar-graph-note/bar-graph-note.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [DynamicComponent],
  exports: [DynamicComponent],
  entryComponents: [DynamicComponent],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'uk-UA' },
  ]
})
export class SharedModule {
}
