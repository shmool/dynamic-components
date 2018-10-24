import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { DialogModule } from './dialog/dialog.module';
import { DynamicModule } from './dynamic/dynamic.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    DialogModule,
    DynamicModule,
    DashboardModule
  ],
  declarations: [],
  exports: []
})
export class DemoModule {
}
