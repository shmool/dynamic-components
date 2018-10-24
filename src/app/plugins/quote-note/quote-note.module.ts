import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteNoteComponent } from './quote-note.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [QuoteNoteComponent],
  entryComponents: [QuoteNoteComponent],
  providers: [
    {
      provide: 'widgets',
      useValue: [
        {
          name: 'Quote-note',
          component: QuoteNoteComponent
        }
      ],
      multi: true
    }
  ]
})
export class QuoteNoteModule { }
