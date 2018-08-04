import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { SharedModule } from '../../shared/shared.module';
import { DialogHomeComponent } from './dialog-home/dialog-home.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [DialogComponent, DialogHomeComponent],
  exports: [DialogComponent, DialogHomeComponent],
  entryComponents: [DialogComponent]
})
export class DialogModule {
}
