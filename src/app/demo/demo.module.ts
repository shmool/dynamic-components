import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { DialogModule } from './dialog/dialog.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    DialogModule
  ],
  declarations: [],
  exports: []
})
export class DemoModule {
}
