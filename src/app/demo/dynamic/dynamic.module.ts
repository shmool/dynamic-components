import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from './dynamic.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatSidenavModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../dymanic/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    SharedModule,
    // TextInputModule,
    // BarGraphModule
    RouterModule
  ],
  declarations: [DynamicComponent]
})
export class DynamicModule {
}
