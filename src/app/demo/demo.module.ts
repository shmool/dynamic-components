import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { DialogModule } from './dialog/dialog.module';
import { DynamicModule } from './dynamic/dynamic.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    DialogModule,
    DynamicModule
  ],
  declarations: [],
  exports: []
})
export class DemoModule {
}
