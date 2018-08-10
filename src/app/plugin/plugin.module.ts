import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginComponent } from './plugin.component';
import { SharedModule } from '../dymanic/shared/shared.module';
import { MatCardModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: [
    PluginComponent
  ],
  entryComponents: [PluginComponent],
  providers: [
    {
      provide: 'widgets',
      useValue: [
        {
          name: 'plugin-cmp',
          component: PluginComponent
        }
      ],
      multi: true
    }
  ]
})
export class PluginModule {
  constructor() {
    console.log('loaded')
  }
}
